---
name: evaluate
description: "Full three-phase evaluation pipeline: draft → critique → harmonize. Runs each phase as a separate agent for context isolation. Individual phases can also be run manually via /eval-draft, /eval-critique, /eval-harmonize."
argument-hint: [resource-url]
---

# Evaluate New Resource (Three-Phase Pipeline)

Run the full evaluation pipeline for the resource at **$ARGUMENTS**.

This orchestrates three phases, each as a separate agent with its own
context window. This isolation is intentional — the critic should not be
primed by the drafter's reasoning.

## Phase 1 — Draft

Launch an agent to run `/eval-draft $ARGUMENTS`.

The agent will:
- Navigate the resource website from the root URL
- Score each criterion (A.1.1 through E.1.2)
- Write `data-drafts/{id}/draft.md` and `data-drafts/{id}/{id}.yaml`
- Validate with `make check`

**Wait for Phase 1 to complete before proceeding.** You need the resource
ID and the draft files to exist before launching Phase 2.

Read the draft YAML to extract the resource ID, then report Phase 1
status to the user before continuing.

## Phase 2 — Critique

Launch a **separate** agent to run `/eval-critique {id}` (using the
resource ID from Phase 1).

The agent will:
- Read the draft trace and YAML
- Search the resource website for contradicting evidence
- Write `data-drafts/{id}/critique.md`

**Wait for Phase 2 to complete before proceeding.**

Report Phase 2 status to the user before continuing.

## Phase 3 — Harmonize

Launch a **separate** agent to run `/eval-harmonize {id}`.

The agent will:
- Read the draft, critique, and criteria
- Adjudicate each criterion
- Write the final `data-drafts/{id}/trace.md` and update the YAML
- Write `data-drafts/{id}/harmonize.md`
- Validate with `make check`

Report Phase 3 status and the final summary to the user.

## Final Report

After all three phases, present:
- Resource name and ID
- Final license and star score
- Whether any draft verdicts were overturned by the critique
- Whether any contradictions need human review
- List of all files produced:
  - `data-drafts/{id}/{id}.yaml` — evaluation YAML (draft, needs human review to promote to `data-sources/`)
  - `data-drafts/{id}/draft.md` — Phase 1 draft trace
  - `data-drafts/{id}/critique.md` — Phase 2 critique
  - `data-drafts/{id}/harmonize.md` — Phase 3 harmonization report
  - `data-drafts/{id}/trace.md` — final consolidated trace
- Remind the user the evaluation is `provisional: "true"` and needs review

## Notes

- Each phase is also available as a standalone skill:
  `/eval-draft`, `/eval-critique`, `/eval-harmonize`
- To re-run just the critique (e.g. after tuning the critique skill),
  use `/eval-critique {id}` directly, then `/eval-harmonize {id}`
- The orchestrator uses the Agent tool to spawn each phase. Each agent
  gets its own context window and tool access.
