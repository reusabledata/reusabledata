---
description: Create a provisional evaluation and trace for a new resource
allowed-tools: WebFetch, Read, Write, Edit, Bash(make check:*), Glob, Grep
---

Create a provisional evaluation and trace for the resource at: $ARGUMENTS

Follow the full evaluation procedure from CLAUDE.md:

1. **Fetch the resource root URL** and catalog all navigation links (text, location on page, destination URL).
2. **Follow links** to find licensing and data-access information. Record every hop as a navigation path. Only pages reachable by normal human navigation from the root count as evidence.
3. **Read the criteria** from `docs/criteria.md` and the schema from `scripts/source.schema.yaml`.
4. **Read the example trace** at `data-traces/reactome-test.trace.md` to understand the expected format.
5. **Evaluate each criterion** (A.1.1 through E.1.2) and record the verdict, source URL, quoted text, and reasoning.
6. **Derive a resource ID** from the resource name (lowercase, hyphenated, matching existing conventions in `data-sources/`).
7. **Write two files:**
   - `data-sources/{id}.yaml` — the evaluation YAML (must conform to `scripts/source.schema.yaml`). Set `provisional: "true"`.
   - `data-traces/{id}.trace.md` — the trace file (format specified in CLAUDE.md).
8. **Validate** by running `make check`.

Important:
- Follow all Evaluation Guidelines from CLAUDE.md.
- Every source URL in the trace must be reachable via a documented navigation path from the root.
- Quotes must be verbatim text from the fetched page.
- Commentary should only note findings and inconsistencies, not confirm expected or unremarkable details.
- Evaluations are about data and data access only — software/tool licensing is out of scope.
