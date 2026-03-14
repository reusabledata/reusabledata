---
description: Re-examine an existing evaluation by generating a fresh trace from the resource website
allowed-tools: WebFetch, Read, Glob, Grep
---

Cross-check the existing evaluation for resource: $ARGUMENTS

This command re-examines an existing evaluation by generating a fresh trace from the resource website and comparing it against the current YAML. **Do NOT modify the existing YAML file.**

Steps:

1. **Read the existing evaluation** at `data-sources/$ARGUMENTS.yaml`.
2. **Read the criteria** from `docs/criteria.md` and the schema from `scripts/source.schema.yaml`.
3. **Fetch the resource root URL** (from `source-link` in the YAML) and catalog all navigation links.
4. **Follow links** to find licensing and data-access information, recording navigation paths as in a full evaluation.
5. **Evaluate each criterion** (A.1.1 through E.1.2) based on the current website state.
6. **Compare** your fresh findings against the existing YAML evaluation:
   - Note any criteria where your assessment differs from the existing evaluation.
   - Note any licensing text changes, new/removed licenses, or access changes.
   - Note if commentary in the YAML is still accurate.
7. **Report differences** clearly, organized by criterion. For each difference, show:
   - The existing YAML value/assessment
   - What the current website shows
   - The evidence (quoted text and source URL via navigation path)
8. If there are no differences, confirm the evaluation appears current.

Important:
- Follow all Evaluation Guidelines from CLAUDE.md.
- Every source URL must be reachable via a documented navigation path from the root.
- Quotes must be verbatim text from the fetched page.
- Do NOT modify the existing YAML — report only.
