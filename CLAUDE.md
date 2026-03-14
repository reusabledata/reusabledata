# (Re)usable Data Project

Evaluates and scores the reusability of biomedical data resources
based on their publicly documented or inferred licensing.

Website: reusabledata.org | Repo: github.com/reusabledata/reusabledata

## Architecture

YAML data source files → compiled JSON → static HTML site (hosted in `docs/`).
Deployed via GitHub Pages from the `docs/` directory in the GitHub repo.

- `data-sources/*.yaml` - Individual resource evaluations (the core data)
- `data-traces/*.trace.md` - Evaluation audit trails (navigation paths + per-criterion evidence)
- `scripts/` - Node.js build scripts, schema, templates
- `docs/` - Generated static site output (served by GitHub Pages)
- `Makefile` - Orchestrates the full build pipeline

## Key Commands

- `make` - Full build (compile YAML, generate HTML, validate)
- `make check` - Validate YAML files against schema (`kwalify` + consistency check)
- `npm run build` - esbuild the explore page JS bundle
- `npm run check` - Just kwalify validation
- `npm run yamls2json` - Compile YAML sources to JSON

## Data Source Files

Each resource is a YAML file in `data-sources/` named after its resource ID.
Schema: `scripts/source.schema.yaml` | Docs: `docs/schema.md`

Required fields: `id`, `description`, `source`, `source-link`, `status`,
`data-field`, `data-type`, `license`, `license-type`

Licenses use SPDX identifiers where possible, or: `inconsistent`, `public domain`,
`unlicensed`, `all rights reserved`, `custom`.

### License → license-type mapping

The `license-type` field must match the license per
`scripts/inconsistency_check.js`. `make check` will reject mismatches.

| license | license-type |
|---------|-------------|
| `unlicensed` | `copyright` |
| `inconsistent` | `unknown` |
| `all rights reserved` | `copyright` |
| `custom` | (any — determined case-by-case) |
| `CC-BY-ND-3.0` | `restrictive` |
| `CC-BY-NC-4.0` | `restrictive` |
| `CC-BY-NC-SA-4.0` | `restrictive` |
| `GPL-3.0` | `copyleft` |
| `LGPL-2.0-or-later` | `copyleft` |
| `CC-BY-SA-3.0` | `copyleft` |
| `CC-BY-SA-4.0` | `copyleft` |
| `ODbL-1.0` | `copyleft` |
| `CC-BY-3.0` | `permissive` |
| `CC-BY-4.0` | `permissive` |
| `CC-BY` | `permissive` |
| `CC0-1.0` | `permissive` |
| `MIT` | `permissive` |
| `public domain` | `permissive` |

**Important**: `CC0-1.0` and `public domain` are both classified as
`permissive`, not `public domain`. The `license-type` enum does not
include a "public domain" value — valid values are: `unknown`,
`copyleft`, `permissive`, `copyright`, `restrictive`, `private pool`.

## Tech Stack

- **Node.js** (>= 4.4) with npm - all scripts are JavaScript
- **kwalify** - YAML schema validation
- **Mustache** - HTML templating
- **esbuild** - JS bundling for explore page

## Validation

When writing or modifying evaluation YAML files, always run `make check`
to validate schema conformance and consistency (license/type mappings,
required license-issues, etc.). Fix any errors before reporting success.
The `Makefile` is the authoritative source for available validation and
build commands — skills should invoke these commands rather than
duplicating validation logic.

## Evaluation Guidelines

- Determinations are based on public information in the resource web presence, made at a fixed point in time and updated when the website changes.
- All criteria scoring must refer to text found (or not found) in the resource web presence. Whenever possible, specific passages should be quoted.
- Criteria: `criteria.md` (https://reusabledata.org/criteria.html). Schema: `schema.md` / `source.schema.yaml`.
- Evaluations are specifically about **data and data access**. Software/tool licensing at a resource is out of scope and should not be discussed in commentary or flagged as issues.
- Each evaluation is **point-in-time** and stands on its own. Do not reference or compare against previous evaluations in commentary.
- `was-controversial` only applies when human reviewers disagree on the **current** evaluation, not when a re-evaluation differs from a prior one.
- Licensing information must be available by normal human web presence navigation.
- Common human web friction like CAPTCHAs does not warrant commentary.
- Commentary should only note findings and inconsistencies, not confirm expected or unremarkable details (e.g. standard clauses being consistent with each other).

## Evaluation Trace Files

Every evaluation produced by Claude must have a companion trace file in
`data-traces/` named `{resource-id}.trace.md`. The trace is an audit trail
that allows a human reviewer to reproduce and verify the evaluation.

### Producing an evaluation with trace

When asked to evaluate (or re-evaluate) a resource:

1. **Start from the resource root URL.** Fetch the root page and catalog
   all navigation links (text, location on page, destination URL).
2. **Follow links to find licensing and data-access information.** Record
   every hop as a navigation path (see format below). Only pages reachable
   by normal human navigation from the root count as evidence.
3. **Evaluate each criterion** (A.1.1 through E.1.2, per `docs/criteria.md`)
   and record the verdict, source URL, quoted text, and reasoning.
4. **Write two files:**
   - `data-sources/{id}.yaml` — the evaluation YAML (schema: `scripts/source.schema.yaml`)
   - `data-traces/{id}.trace.md` — the trace file (format below)

### Trace file format

```markdown
# Evaluation Trace: {resource-id}

- **Resource**: {name}
- **Root URL**: {url}
- **Evaluated**: {YYYY-MM-DD}
- **Evaluator**: Claude (automated)

## Navigation Paths

### Path N: Root → {destination description}

1. **{page URL}**
   - Found link: "{exact link text}" ({location on page, e.g. footer, top nav "About" dropdown})
   → {destination URL}
2. **{destination URL}**
   - Found link: "{exact link text}" ({location on page})
   → {next URL}

(one path per page used as evidence; deeper pages need multiple steps)

## Criteria Evaluation

### {criterion ID} — {short description}

- **Verdict**: pass | fail | not-applicable
- **Source**: {URL} (via Path N)
- **Quote**: "{relevant passage from the page}"
- **Reasoning**: {why this text satisfies or fails the criterion}

(one section per criterion: A.1.1, A.1.2, A.2.1, A.2.2, B.1, B.2.1,
B.2.2, C.1, C.2, D.1, D.1.1, D.1.2, E.1, E.1.1, E.1.2)

## Summary

| Criterion | Verdict | Stars |
|-----------|---------|-------|
| ...       | ...     | ...   |
| **Total** |         | **N** |
```

### Key rules for traces

- Every source URL in the trace must be reachable via a documented
  navigation path from the root. No URL may appear without showing how
  a human would navigate to it.
- Quotes must be verbatim text from the fetched page.
- Each criterion section must reference which navigation path led to
  the evidence (e.g. "via Path 1").
- If a criterion is not triggered (e.g. D.1.1 when D.1 awards a full
  star), note it briefly with reasoning.
- See `data-traces/reactome-test.trace.md` for a complete example.

## Skills (Slash Commands)

- **`/evaluate [resource-url]`** — Create a provisional evaluation and trace
  for a new resource. Produces both `data-sources/{id}.yaml` and
  `data-traces/{id}.trace.md`, validates with `make check`.
- **`/cross-check [resource-id]`** — Re-examine an existing evaluation by
  generating a fresh trace from the resource website. Reports differences
  between the existing YAML and current website state without modifying
  the YAML.

## Contributing

See CONTRIBUTING.md. New resources go through PR review with at least one core member.
Scores are computed automatically from YAML annotations during build.
