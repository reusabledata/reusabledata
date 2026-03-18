# data-drafts/

Local workspace for evaluation agents and human curators.

When a resource is evaluated (via `/evaluate`, `/eval-draft`, etc.),
the pipeline creates a subdirectory here named after the resource ID:

```
data-drafts/{resource-id}/
  {resource-id}.yaml  — Draft evaluation YAML
  draft.md            — Phase 1: initial evaluation trace
  critique.md         — Phase 2: adversarial critique
  harmonize.md        — Phase 3: reconciliation report
  trace.md            — Final consolidated trace
```

These files are **not tracked by git** — they are working artifacts for
review. The draft YAML stays here until a human curator reviews and
promotes it to `data-sources/{id}.yaml`.

## Usage

- Run `/evaluate [url]` to populate a new resource directory with all phases.
- Run individual phases (`/eval-draft`, `/eval-critique`, `/eval-harmonize`)
  for manual control or re-runs.
- Run `/cross-check [id]` to re-verify an existing evaluation against the
  current state of a resource website.
