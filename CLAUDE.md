# (Re)usable Data Project

Evaluates and scores the reusability/openness of biomedical data resources based on
their licensing. Website: reusabledata.org | Repo: github.com/reusabledata/reusabledata

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
- `npm run build` - Browserify the explore page JS bundle
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
- **Mustache/Pug** - HTML templating
- **Browserify** - JS bundling for explore page

## Contributing

See CONTRIBUTING.md. New resources go through PR review with at least one core member.
Scores are computed automatically from YAML annotations during build.
