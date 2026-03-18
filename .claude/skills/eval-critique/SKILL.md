---
name: eval-critique
description: "Phase 2: Critique a draft evaluation by searching the resource website for evidence that contradicts or complicates the draft's conclusions."
disable-model-invocation: true
argument-hint: [resource-id]
---

# Phase 2 — Critique Evaluation

Critique the draft evaluation for resource **$ARGUMENTS**.

You are an adversarial reviewer. Your job is to read the Phase 1 draft and
then actively search the resource website for evidence that **contradicts,
complicates, or undermines** the draft's conclusions. You are not producing
an independent evaluation — you are stress-testing an existing one.

## Steps

1. **Read the draft.**
   - Read `data-drafts/$ARGUMENTS/$ARGUMENTS.yaml` for the current field values.
   - Read `data-drafts/$ARGUMENTS/draft.md` for the draft trace — note
     which pages were visited, which criteria got which verdicts, and what
     evidence was cited.

2. **Read the evaluation criteria.**
   Read `docs/criteria.md` for the full rubric (A.1 through E.1).

3. **Identify what to challenge.**
   For each criterion verdict in the draft, ask:
   - Could there be contradicting language elsewhere on the site?
   - Did the draft miss pages that might contain different terms?
   - Are quoted passages taken out of context?
   - Are there edge cases in the criteria that the draft glossed over?

4. **Navigate the resource website — cast a wider net.**
   Starting from the `source-link` URL in the YAML:
   - Fetch the root page and follow links the draft agent did NOT visit.
     Prioritize: terms of use, legal pages, FAQ, data download agreements,
     API documentation, "About" sub-pages, footer links, privacy policies.
   - Follow links **at least two levels deep** from the root where
     the draft only went one level.
   - Look specifically for:
     - License language that contradicts or narrows the main license
     - Click-through agreements on download/API pages
     - "Except where noted" clauses
     - Restrictions buried in FAQ or terms-of-service pages
     - Multiple licenses applying to different data subsets
     - Registration requirements that limit reuse
   - Record all navigation paths in the same format as the draft trace.
   - You may revisit pages the draft already covered if you want to
     verify quotes or check surrounding context.

   **Relaxed controls:** Unlike Phase 1, you ARE permitted to:
   - Follow links further from the root (deeper navigation)
   - Visit pages that seem tangentially related to licensing
   - Check linked third-party license texts (e.g. Creative Commons deed pages)
   - Examine data download pages for click-through terms

   **Still prohibited:**
   - Search engines, web archives, or external discovery mechanisms
   - Fabricating or speculating about content not actually fetched

5. **Write the critique report.**
   Write `data-drafts/$ARGUMENTS/critique.md` in this format:

   ```markdown
   # Evaluation Critique: {resource-id}

   - **Resource**: {name}
   - **Root URL**: {url}
   - **Critiqued**: {YYYY-MM-DD}
   - **Critic**: Claude (automated, Phase 2)
   - **Draft reviewed**: data-drafts/{id}/draft.md

   ## Additional Navigation Paths

   (Document any pages visited beyond what the draft covered,
   using the same path format as the draft trace.)

   ### Path N: Root → {destination}
   1. **{url}** ...

   ## Criterion Challenges

   ### {criterion ID} — {short description}

   - **Draft verdict**: {pass|fail|not-applicable}
   - **Challenge**: {what contradicting or complicating evidence was found,
     OR "no contradicting evidence found"}
   - **Source**: {URL} (via Path N, or "same as draft Path N")
   - **Quote**: "{relevant passage}"
   - **Assessment**: {Does this evidence change the verdict? Why or why not?}

   (One section per criterion. Include ALL criteria, even if unchallenged —
   state "no contradicting evidence found" for those.)

   ## New Findings

   (Any licensing-relevant information found on pages the draft did not
   visit. May be neutral, supporting, or contradicting.)

   ## Summary

   | Criterion | Draft Verdict | Challenge Found | Recommended Change |
   |-----------|--------------|-----------------|-------------------|
   | A.1       | pass         | none            | none              |
   | ...       | ...          | ...             | ...               |
   ```

6. **Report to the user.**
   Summarize: how many criteria were challenged, which ones, and whether
   any challenges are strong enough to potentially change the verdict.

## Rules

- You are looking for **counterfactuals** — evidence against the draft.
  Do not simply confirm the draft's findings.
- If you find no contradicting evidence for a criterion, say so explicitly.
  A clean bill of health is a valid and useful outcome.
- All evidence must come from pages you actually fetched. Quote verbatim.
- Every URL must be reachable via a documented navigation path from the root.
- Do NOT modify the YAML or the draft trace. Write only the critique file.
- Evaluations are about data and data access only. Ignore software licensing.
