#!/usr/bin/env python3
"""Batch-validate all YAML data-source files against a LinkML schema.

Validates each file against the LinkML-generated JSON Schema, then checks
that license values are either project-specific custom values (declared in
the schema's LicenseEnum) or valid SPDX identifiers (from
spdx-licenses.json, bundled from https://spdx.org/licenses/).

Usage:
    python3 scripts/validate_all.py -s scripts/source.linkml.yaml -d data-sources/
"""

import argparse
import datetime
import glob
import json
import os
import sys

import yaml
from linkml.validators import JsonSchemaDataValidator


# Project-specific (non-SPDX) license values declared in LicenseEnum.
CUSTOM_LICENSE_VALUES = frozenset([
    "inconsistent",
    "public domain",
    "unlicensed",
    "all rights reserved",
    "custom",
    "CC-BY",
])


def _load_spdx_ids(schema_path):
    """Load the set of valid SPDX license IDs from the bundled JSON file.

    Looks for spdx-licenses.json in the same directory as the schema.
    """
    spdx_path = os.path.join(os.path.dirname(schema_path), "spdx-licenses.json")
    if not os.path.isfile(spdx_path):
        print(f"Warning: {spdx_path} not found; SPDX license validation disabled",
              file=sys.stderr)
        return None
    with open(spdx_path) as fh:
        data = json.load(fh)
    return frozenset(data["licenses"])


def _normalize_keys(obj):
    """Recursively convert hyphenated dict keys to underscores.

    LinkML's JSON Schema generator normalizes slot names to underscores,
    but our YAML data files use hyphens.  This bridges the gap so that
    validation works without changing the data files.
    """
    if isinstance(obj, dict):
        return {k.replace("-", "_"): _normalize_keys(v) for k, v in obj.items()}
    if isinstance(obj, list):
        return [_normalize_keys(item) for item in obj]
    # PyYAML auto-parses unquoted dates like 2025-09-22 into datetime.date;
    # convert back to ISO string so JSON Schema validates them as strings.
    if isinstance(obj, (datetime.date, datetime.datetime)):
        return obj.isoformat()
    return obj


def _validate_license(license_val, spdx_ids):
    """Check that a license value is either a custom value or a valid SPDX ID.

    Returns an error message string, or None if valid.
    """
    if license_val in CUSTOM_LICENSE_VALUES:
        return None
    if spdx_ids is not None and license_val not in spdx_ids:
        return (f"'{license_val}' is not a recognized license "
                f"(not in SPDX registry or project custom values)")
    return None


def main():
    parser = argparse.ArgumentParser(
        description="Validate all YAML files in a directory against a LinkML schema."
    )
    parser.add_argument(
        "-s", "--schema", required=True, help="Path to the LinkML schema YAML file"
    )
    parser.add_argument(
        "-d", "--directory", required=True, help="Directory containing YAML data files"
    )
    args = parser.parse_args()

    schema_path = args.schema
    data_dir = args.directory

    if not os.path.isfile(schema_path):
        print(f"Error: schema file not found: {schema_path}", file=sys.stderr)
        sys.exit(1)

    if not os.path.isdir(data_dir):
        print(f"Error: directory not found: {data_dir}", file=sys.stderr)
        sys.exit(1)

    # Load the schema once and build the validator.
    validator = JsonSchemaDataValidator(schema_path)

    # Load SPDX license IDs for license field validation.
    spdx_ids = _load_spdx_ids(schema_path)

    yaml_files = sorted(glob.glob(os.path.join(data_dir, "*.yaml")))

    if not yaml_files:
        print(f"No YAML files found in {data_dir}")
        sys.exit(0)

    total = 0
    failed = 0
    errors_by_file = {}

    for filepath in yaml_files:
        basename = os.path.basename(filepath)

        # Skip non-YAML artifacts that may live in the directory.
        if basename == "compiled.json":
            continue

        total += 1
        file_errors = []

        try:
            with open(filepath, "r") as fh:
                data = yaml.safe_load(fh)
        except yaml.YAMLError as exc:
            failed += 1
            errors_by_file[basename] = [f"YAML parse error: {exc}"]
            continue

        if data is None:
            failed += 1
            errors_by_file[basename] = ["File is empty or contains no YAML data"]
            continue

        # LinkML JSON Schema validation.
        try:
            validator.validate_dict(_normalize_keys(data), target_class="DataSource")
        except Exception as exc:
            file_errors.append(str(exc))

        # License value validation (SPDX + custom).
        license_val = data.get("license")
        if license_val is not None:
            err = _validate_license(str(license_val), spdx_ids)
            if err:
                file_errors.append(err)

        if file_errors:
            failed += 1
            errors_by_file[basename] = file_errors

    # Report errors.
    if errors_by_file:
        for filename, errs in sorted(errors_by_file.items()):
            print(f"\n--- {filename} ---")
            for err in errs:
                print(f"  ERROR: {err}")
        print()

    # Summary.
    passed = total - failed
    print(f"Validated {total} file(s): {passed} passed, {failed} failed.")

    sys.exit(1 if failed > 0 else 0)


if __name__ == "__main__":
    main()
