# (Re)usable Data Project

Evaluates and scores the reusability of biomedical data resources
based on their publicly documented or inferred licensing.

Website: reusabledata.org | Repo: github.com/reusabledata/reusabledata

## Architecture

YAML data source files → compiled JSON → static HTML site (hosted in `docs/`).
Deployed via GitHub Pages from the `docs/` directory in the GitHub repo.

- `data-sources/*.yaml` - Individual resource evaluations (the core data)
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

## Tech Stack

- **Node.js** (>= 4.4) with npm - all scripts are JavaScript
- **kwalify** - YAML schema validation
- **Mustache** - HTML templating
- **esbuild** - JS bundling for explore page
- **Playwright** (dev) - headless browser for rendering JS-heavy pages during evaluation

## Evaluation Guidelines

- Determinations are based on public information in the resource web presence, made at a fixed point in time and updated when the website changes.
- All criteria scoring must refer to text found (or not found) in the resource web presence. Whenever possible, specific passages should be quoted.
- Criteria: `criteria.md` (https://reusabledata.org/criteria.html). Schema: `schema.md` / `source.schema.yaml`.
- Evaluations are specifically about **data and data access**. Software/tool licensing at a resource is out of scope and should not be discussed in commentary or flagged as issues. License statements on software/API documentation pages (e.g. Swagger/OpenAPI specs) describe the software, not the data served through them.
- Each evaluation is **point-in-time** and stands on its own. Do not reference or compare against previous evaluations in commentary.
- `was-controversial` only applies when human reviewers disagree on the **current** evaluation, not when a re-evaluation differs from a prior one.
- Licensing information must be available by normal human web presence navigation.
- Common human web friction like CAPTCHAs does not warrant commentary.
- Commentary should only note findings and inconsistencies, not confirm expected or unremarkable details (e.g. standard clauses being consistent with each other).
- WebFetch cannot render JavaScript, so client-side rendered pages (e.g. Swagger/OpenAPI UIs) may appear empty. Use Playwright (available as a dev dependency) to render such pages, or flag the limitation to the user.

## Contributing

See CONTRIBUTING.md. New resources go through PR review with at least one core member.
Scores are computed automatically from YAML annotations during build.
