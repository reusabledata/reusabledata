---
name: cross-check
description: Cross-check an existing data-sources evaluation by generating a fresh trace from the resource website and reporting differences. Use when you want to verify or re-verify an existing evaluation.
disable-model-invocation: true
argument-hint: [resource-id]
---

# Cross-Check Evaluation

Cross-check the existing evaluation for resource **$ARGUMENTS**.

## Steps

1. **Read the existing evaluation.**
   Read `data-sources/$ARGUMENTS.yaml`. If it does not exist, stop and
   tell the user. Note all current field values: license, license-type,
   license-link, license-issues, license-commentary.

2. **Read the evaluation criteria.**
   Read `docs/criteria.md` for the full rubric (A.1 through E.1).

3. **Generate a fresh trace by navigating the resource website.**
   Follow the process documented in CLAUDE.md under "Evaluation Trace Files":
   - Start from the `source-link` URL in the YAML.
   - Fetch the root page. Catalog all navigation links (text, location, URL).
   - Follow links to find licensing and data-access information.
   - Record every hop as a navigation path showing link text, location on
     page, and destination URL.
   - Evaluate each criterion (A.1.1 through E.1.2) against what you find,
     recording verdict, source URL, quoted text, and reasoning.

4. **Write the trace file.**
   Write (or overwrite) `data-drafts/$ARGUMENTS/trace.md` using the format
   documented in CLAUDE.md. Every source URL must have a navigation path
   from the root. Quotes must be verbatim.

5. **Compare the trace against the existing evaluation.**
   Check for differences in:
   - **License** (SPDX identifier)
   - **License type** (permissive, copyleft, restrictive, etc.)
   - **License link** (URL still correct and reachable?)
   - **License issues** (are flagged criteria still valid? are there new issues?)
   - **License commentary** (does the commentary still reflect what the site says?)
   - **Data access** (are download/API URLs still correct?)
   - **Star score** (does the trace's criterion-by-criterion scoring agree
     with what the YAML would produce?)

6. **Report the results.**
   Present a summary to the user:
   - If **no differences**: confirm the evaluation is consistent with the
     current state of the resource website.
   - If **differences found**: list each difference with:
     - The field/criterion affected
     - What the existing YAML says
     - What the fresh trace found
     - The relevant quote and URL from the trace
   - Do NOT modify the evaluation YAML — only report. The user decides
     whether to update.
   - If proposing YAML field changes, verify they would pass validation
     by running `make check` against a temporary copy or consulting the
     license → license-type mapping in CLAUDE.md.

## Rules

- Follow all guidelines in CLAUDE.md under "Evaluation Guidelines" and
  "Evaluation Trace Files."
- Evaluations are about data and data access only. Ignore software licensing.
- Do not reference or compare against previous evaluations in commentary.
- Quotes must be verbatim text from fetched pages.
- Every URL in the trace must be reachable via a documented navigation path.
