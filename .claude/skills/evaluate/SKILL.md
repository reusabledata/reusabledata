---
name: evaluate
description: Create a provisional evaluation draft and trace for a new resource given its URL. Use when adding a new resource to the (Re)usable Data Project.
disable-model-invocation: true
argument-hint: [resource-url]
---

# Evaluate New Resource

Create a provisional evaluation and trace for the resource at **$ARGUMENTS**.

## Steps

1. **Read project context.**
   - Read `docs/criteria.md` for the full evaluation rubric.
   - Read `scripts/source.schema.yaml` for the YAML schema.
   - Glance at 2–3 existing `data-sources/*.yaml` files to pick up idioms
     (field formatting, commentary style, description style).

2. **Determine the resource ID.**
   Derive an ID from the resource name following existing conventions:
   lowercase, hyphenated, concise (e.g. "UniProt" → `uniprot`,
   "Gene Ontology Annotations" → `go-ann`). Check that
   `data-sources/{id}.yaml` does not already exist. If it does, stop and
   tell the user — they may want `/cross-check` instead.

3. **Navigate the resource website and build the trace.**
   Follow the process documented in CLAUDE.md under "Evaluation Trace Files":
   - Start from the provided URL (this is the resource root / `source-link`).
   - Fetch the root page. Catalog all navigation links (text, location, URL).
   - Follow links to find licensing, terms of use, data download, and API
     information. Record every hop as a navigation path.
   - Evaluate each criterion (A.1.1 through E.1.2) against what you find,
     recording verdict, source URL, quoted text, and reasoning.

4. **Write the trace file.**
   Write `data-traces/{id}.trace.md` using the format documented in
   CLAUDE.md. Every source URL must have a navigation path from the root.
   Quotes must be verbatim.

5. **Write the evaluation YAML.**
   Write `data-sources/{id}.yaml` with all required and applicable fields:
   - `id`: the resource ID from step 2
   - `source`: human-readable resource name
   - `source-link`: the provided URL (use https if available)
   - `status`: `complete`
   - `description`: use the resource's own description of itself, quoted
   - `data-field`: the broad domain (e.g. biology, chemistry, genomics)
   - `data-type`: the specific data type (e.g. pathway, variant, expression)
   - `data-categories`: list of data category tags
   - `data-access`: download and/or API entries with URLs
   - `license`: SPDX identifier, or `unlicensed`/`custom`/`all rights reserved`/etc.
   - `license-type`: `permissive`, `copyleft`, `restrictive`, `copyright`, `unknown`
   - `license-link`: URL to the license page
   - `license-issues`: list of `{criteria, comment}` for any failed criteria.
     Use `[]` if none.
   - `license-commentary`: list of strings noting findings. Follow the style
     of existing evaluations — quote relevant passages, note only findings
     and inconsistencies, do not confirm expected/unremarkable details.
   - `was-controversial`: `"false"`
   - `provisional`: `"true"`
   - `last-curated`: today's date (YYYY-MM-DD)
   - `contacts`: resource contact email if found

6. **Validate.**
   Run `make check` and confirm the new YAML passes schema validation.
   If it fails, fix the YAML and re-run until it passes.

7. **Report to the user.**
   Summarize:
   - The resource name and ID
   - The license found (or not found)
   - The star score from the trace
   - Any notable findings or issues
   - Remind them the evaluation is `provisional: "true"` and needs review

## Rules

- Follow all guidelines in CLAUDE.md under "Evaluation Guidelines" and
  "Evaluation Trace Files."
- Evaluations are about data and data access only. Ignore software licensing.
- Each evaluation is point-in-time and stands on its own.
- Commentary should only note findings and inconsistencies.
- Quotes must be verbatim text from fetched pages.
- Every URL in the trace must be reachable via a documented navigation path.
- The YAML must pass `make check` before reporting success.
