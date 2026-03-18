---
name: eval-harmonize
description: "Phase 3: Reconcile a draft evaluation with its critique, producing a final trace and updated YAML."
disable-model-invocation: true
argument-hint: [resource-id]
---

# Phase 3 — Harmonize Evaluation

Reconcile the draft evaluation and critique for resource **$ARGUMENTS**,
producing the final trace and evaluation YAML.

You are a neutral adjudicator. You have two inputs: a draft evaluation and
a critique of that draft. Your job is to determine, criterion by criterion,
whether the draft verdict stands or whether the critique's evidence requires
a change — always grounded in the RDP criteria.

## Steps

1. **Read all inputs.**
   - Read `data-drafts/$ARGUMENTS/$ARGUMENTS.yaml` (the draft YAML).
   - Read `data-drafts/$ARGUMENTS/draft.md` (the Phase 1 trace).
   - Read `data-drafts/$ARGUMENTS/critique.md` (the Phase 2 critique).
   - Read `docs/criteria.md` for the full rubric.

2. **Adjudicate each criterion.**
   For each criterion (A.1.1 through E.1.2):
   - If the critique found **no contradicting evidence**: the draft
     verdict stands. Note this briefly.
   - If the critique found **contradicting evidence**: evaluate whether
     the evidence actually changes the verdict per the RDP criteria.
     Consider:
     - Is the contradicting text actually about the data (not software)?
     - Does it apply to the resource's data as a whole or only a subset?
     - Is the critique's interpretation of the criteria correct?
     - Could the draft and critique both be partially right?
   - Record your reasoning for each decision.

3. **Identify irreconcilable contradictions.**
   If the draft and critique present evidence that genuinely cannot be
   harmonized (e.g., two pages on the same site state different licenses
   with no clear resolution), flag this as a contradiction that requires
   human review. Set `was-controversial: "true"` in the YAML if this
   occurs.

4. **Write the final trace.**
   Write `data-drafts/$ARGUMENTS/trace.md` combining evidence from both
   the draft and critique into a single coherent trace. Use the standard
   trace format from CLAUDE.md. Include:
   - All navigation paths from both phases (renumber sequentially).
   - For each criterion: the final verdict, the evidence that supports it,
     and (if the critique raised a challenge) a brief note on why the
     challenge was accepted or rejected.

5. **Update the evaluation YAML.**
   Update `data-drafts/$ARGUMENTS/$ARGUMENTS.yaml` to reflect the final verdicts.
   If verdicts changed from the draft:
   - Update `license`, `license-type`, `license-link` if needed.
   - Update `license-issues` to match the final criterion verdicts.
   - Update `license-commentary` to reflect the final findings.
   - Keep `provisional: "true"` — only a human reviewer removes this.
   - Update `last-curated` to today's date.

6. **Validate.**
   Temporarily copy the YAML to `data-sources/$ARGUMENTS.yaml`, run
   `make check`, then remove it. The YAML stays in `data-drafts/` until
   a human curator promotes it. Fix any validation errors.

7. **Write the harmonization report.**
   Write `data-drafts/$ARGUMENTS/harmonize.md` in this format:

   ```markdown
   # Harmonization Report: {resource-id}

   - **Resource**: {name}
   - **Harmonized**: {YYYY-MM-DD}
   - **Harmonizer**: Claude (automated, Phase 3)
   - **Inputs**:
     - Draft: data-drafts/{id}/draft.md
     - Critique: data-drafts/{id}/critique.md

   ## Criterion-by-Criterion Resolution

   ### {criterion ID} — {short description}

   - **Draft verdict**: {verdict}
   - **Critique challenge**: {summary of challenge, or "none"}
   - **Final verdict**: {verdict}
   - **Reasoning**: {why the draft was upheld or overturned}

   ## Contradictions Requiring Human Review

   (List any irreconcilable issues, or "None.")

   ## Changes from Draft

   | Field | Draft Value | Final Value | Reason |
   |-------|------------|-------------|--------|
   | ...   | ...        | ...         | ...    |

   (Or "No changes from draft." if the critique did not overturn anything.)

   ## Final Score

   | Criterion | Verdict | Stars |
   |-----------|---------|-------|
   | ...       | ...     | ...   |
   | **Total** |         | **N** |
   ```

8. **Report to the user.**
   Summarize:
   - Final star score
   - Whether any draft verdicts were overturned by the critique
   - Whether any contradictions need human review
   - Remind them the evaluation is `provisional: "true"` and needs review

## Rules

- Follow all guidelines in CLAUDE.md under "Evaluation Guidelines."
- Your role is adjudication, not new research. Do NOT fetch any web pages.
  Work only from the draft trace and critique files.
- Evaluations are about data and data access only. Ignore software licensing.
- Quotes in the final trace must be verbatim text originally fetched in
  Phase 1 or Phase 2.
- The YAML must pass `make check` before reporting success.
- If in doubt about a criterion, favor the interpretation supported by
  more direct evidence (closer to the license page, more explicit text).
