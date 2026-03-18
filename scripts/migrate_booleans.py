#!/usr/bin/env python3
"""One-time migration script to convert string booleans to native YAML booleans.

Converts quoted "true"/"false" to unquoted true/false for the fields:
  - was-controversial
  - provisional
  - license-hat-used

Uses regex substitution on raw file text to preserve comments, ordering,
and quoting style of all other fields.

Usage:
    python3 scripts/migrate_booleans.py data-sources/
"""

import os
import re
import sys


FIELDS = ("was-controversial", "provisional", "license-hat-used")

# Match field name at start of line, colon, optional whitespace, then quoted boolean.
# Handles both double-quoted ("true") and single-quoted ('true') values.
# Captures: group(1) = field name + colon + spacing, group(2) = true or false
PATTERN = re.compile(
    r'^(' + '|'.join(re.escape(f) for f in FIELDS) + r')(\s*:\s*)["\'](true|false)["\']',
    re.MULTILINE,
)


def migrate_file(path):
    """Apply boolean migration to a single file. Returns True if modified."""
    with open(path, "r", encoding="utf-8") as fh:
        original = fh.read()

    updated = PATTERN.sub(r'\1\2\3', original)

    if updated != original:
        with open(path, "w", encoding="utf-8") as fh:
            fh.write(updated)
        return True
    return False


def main():
    if len(sys.argv) != 2:
        print("Usage: python3 scripts/migrate_booleans.py <directory>", file=sys.stderr)
        sys.exit(1)

    directory = sys.argv[1]
    if not os.path.isdir(directory):
        print(f"Error: {directory} is not a directory", file=sys.stderr)
        sys.exit(1)

    modified = 0
    total = 0

    for filename in sorted(os.listdir(directory)):
        if not filename.endswith(".yaml"):
            continue
        total += 1
        path = os.path.join(directory, filename)
        if migrate_file(path):
            modified += 1
            print(f"  modified: {path}")

    print(f"\nProcessed {total} YAML files, modified {modified}.")


if __name__ == "__main__":
    main()
