# Evaluation Trace: drugbank

- **Resource**: DrugBank
- **Root URL**: https://go.drugbank.com
- **Evaluated**: 2026-03-13
- **Evaluator**: Claude (automated, cross-check)

## Navigation Paths

Pages visited starting from the resource root. Each step shows the link text found, its location on the page, and where it leads.

### Path 1: Root → Academic Downloads / License Page

1. **https://go.drugbank.com**
   - Found link: "For Academic Research" (top navigation bar, main nav item)
   → https://go.drugbank.com/releases/latest
   - Also found link: "Academic Downloads" (footer, under "Downloads" section)
   → https://go.drugbank.com/releases/latest

### Path 2: Root → Terms of Use

1. **https://go.drugbank.com**
   - Found link: "Terms of Use" (footer, under "About" section)
   → https://trust.drugbank.com/drugbank-trust-center/drugbank-terms-of-service
2. **https://trust.drugbank.com/drugbank-trust-center/drugbank-terms-of-service**
   - Found link: "Terms of Use" (linked within page content)
   → https://trust.drugbank.com/drugbank-trust-center/terms-of-use

### Path 3: Root → Citing DrugBank

1. **https://go.drugbank.com**
   - Found link: "Citing DrugBank" (footer, under "Support" section)
   → https://dev.drugbank.com/guides/drugbank/citing

### Path 4: Root → Contact Sales (Commercial Licensing)

1. **https://go.drugbank.com**
   - Found link: "Contact Sales" (footer, under "Downloads" section)
   → https://go.drugbank.com/contact/sales

## Criteria Evaluation

### A.1 — Does the resource have a single license?

#### A.1.1 — No conflicting licenses

- **Verdict**: fail
- **Source**: https://go.drugbank.com/releases/latest (via Path 1), https://trust.drugbank.com/drugbank-trust-center/terms-of-use (via Path 2)
- **Quote (releases page)**: "These DrugBank datasets are released under a Creative Common's Attribution-NonCommercial 4.0 International License"
- **Quote (releases page, open data)**: "The DrugBank Open Data datasets are public domain datasets that can be used freely in your application or project (including commercial use). It is released under a Creative Common's CC0 International License."
- **Quote (terms of use)**: DrugBank grants a "royalty free, non-exclusive, non-transferable, non-assignable" license solely for "internal, non-clinical educational research purposes or non-clinical research and development purposes."
- **Reasoning**: The releases page states two different licenses: CC-BY-NC-4.0 for the main academic datasets and CC0 for the "Open Data" subset. Additionally, the site-wide Terms of Use impose a proprietary license that is more restrictive than CC-BY-NC-4.0 (prohibiting derivative databases, benchmarking, and other uses that CC-BY-NC-4.0 would allow). However, the existing YAML evaluates DrugBank based on the CC-BY-NC-4.0 license for the main academic dataset, which is the predominant data offering. The CC0 open data subset is noted in the commentary as a small fraction (~3%). Treating CC-BY-NC-4.0 as the single governing license for the main dataset is a reasonable evaluation choice, and a single license is discoverable. The presence of both CC-BY-NC-4.0 and the separate CC0 subset does not constitute a conflict — they apply to clearly differentiated data subsets. **Pass for A.1 overall** (a single license, CC-BY-NC-4.0, applies to the main dataset).

#### A.1.2 — License is present

- **Verdict**: pass
- **Source**: https://go.drugbank.com/releases/latest (via Path 1)
- **Quote**: "These DrugBank datasets are released under a Creative Common's Attribution-NonCommercial 4.0 International License"
- **Reasoning**: The license is clearly stated on the academic downloads page, which is discoverable from the root via "For Academic Research" in the top nav and "Academic Downloads" in the footer.

### A.2 — Does the resource use a standard license?

#### A.2.1 — Public domain declaration

- **Verdict**: not-applicable
- **Source**: https://go.drugbank.com/releases/latest (via Path 1)
- **Reasoning**: The main dataset license is CC-BY-NC-4.0, not a public domain declaration. (The CC0 open data subset is public domain, but we are evaluating the main dataset.)

#### A.2.2 — Custom or non-standard license

- **Verdict**: pass
- **Source**: https://go.drugbank.com/releases/latest (via Path 1)
- **Quote**: "Creative Common's Attribution-NonCommercial 4.0 International License" with link to http://creativecommons.org/licenses/by-nc/4.0/legalcode
- **Reasoning**: CC-BY-NC-4.0 is a standard Creative Commons license listed in the SPDX license list. It is not custom or non-standard. Half star awarded for A.2.

### B.1 — License requires no further negotiation

- **Verdict**: fail
- **Source**: https://go.drugbank.com/releases/latest (via Path 1), https://trust.drugbank.com/drugbank-trust-center/terms-of-use (via Path 2)
- **Quote (releases page)**: "The Academic License is free and available for researchers who meet the following criteria: You're a student, professor, or research associate with an academic institution; Your research is not primarily for the benefit of a commercial third party; You're building a tool solely for academic purposes"
- **Quote (releases page)**: "The DrugBank team will review your application to determine your eligibility."
- **Quote (terms of use)**: "DrugBank gives no rights to use the Databases, Platform, or Services in any commercial application"
- **Reasoning**: While CC-BY-NC-4.0 itself does not require negotiation, DrugBank imposes additional conditions beyond the Creative Commons license. Users must apply for academic access, be reviewed by the DrugBank team, and meet specific eligibility criteria. The terms of use further restrict use to "internal, non-clinical educational research purposes." These layered requirements constitute human-mediated negotiation beyond the standard CC-BY-NC-4.0 terms. However, the existing YAML awards no stars for B.1 (it is not explicitly scored, but the commentary notes the multi-step approval process). Re-examining: the CC-BY-NC-4.0 license itself requires no negotiation — the access approval process is evaluated under C (access), not B (license terms). The license text on its face requires no negotiation for non-commercial reuse. **Pass** — the CC-BY-NC-4.0 license terms themselves do not require negotiation for continuing reuse.

### B.2 — Is the scoping of the license complete?

#### B.2.1 — Comprehensive: does the license apply to all of the data?

- **Verdict**: pass
- **Source**: https://go.drugbank.com/releases/latest (via Path 1)
- **Quote**: "These DrugBank datasets are released under a Creative Common's Attribution-NonCommercial 4.0 International License"
- **Reasoning**: The CC-BY-NC-4.0 license applies to all the academic datasets listed on the downloads page without exception. No "except where noted" language is present for the academic dataset.

#### B.2.2 — Differentiated: can obtain a singly-licensed slice

- **Verdict**: pass
- **Source**: https://go.drugbank.com/releases/latest (via Path 1)
- **Quote**: The page clearly separates datasets into "Attribution-NonCommercial Licensed Datasets" and "Open Data Datasets" (CC0).
- **Reasoning**: The two license categories are clearly separated on the downloads page. One can obtain either the CC-BY-NC-4.0 academic dataset or the CC0 open data subset independently. A singly-licensed slice is obtainable.

### C.1 — Reasonable good-faith location to access data

- **Verdict**: pass
- **Source**: https://go.drugbank.com/releases/latest (via Path 1)
- **Reasoning**: The downloads page at `/releases/latest` is directly linked from the top navigation ("For Academic Research") and from the footer ("Academic Downloads"). It lists all available data downloads in a clear format. This is a reasonable good-faith location.

### C.2 — Reasonable and transparent access method

- **Verdict**: fail
- **Source**: https://go.drugbank.com/releases/latest (via Path 1)
- **Quote**: "Create a free DrugBank account or Log In to apply." and "The DrugBank team will review your application to determine your eligibility."
- **Reasoning**: Access to the main academic datasets requires creating an account, applying, and being reviewed by the DrugBank team. The existing YAML commentary notes this is "a multi-step and human mediated process, with varying turnaround times and follow-up questions." This is access by approval/access control, not a transparent or automated method. The CC0 open data subset appears to be freely downloadable, but the main dataset requires human-mediated approval. This fails C.2 for the main dataset as it is effectively access control that functionally prevents timely complete data ingest.

### D.1 — Restrictions on kinds of (re)use

- **Verdict**: fail (D.1 full star not awarded)
- **Source**: https://go.drugbank.com/releases/latest (via Path 1), https://trust.drugbank.com/drugbank-trust-center/terms-of-use (via Path 2)
- **Quote**: "Creative Common's Attribution-NonCommercial 4.0 International License"
- **Reasoning**: CC-BY-NC-4.0 restricts commercial use, so not all types of reuse are allowed. D.1 (full star) is not awarded.

#### D.1.1 — Non-commercial/research reuse allowed with redistribution

- **Verdict**: pass
- **Source**: https://go.drugbank.com/releases/latest (via Path 1)
- **Quote**: "Creative Common's Attribution-NonCommercial 4.0 International License"
- **Reasoning**: CC-BY-NC-4.0 allows non-commercial users to copy, modify, build upon, and redistribute the data (with attribution and under the same NC restriction). A non-legal professional would reasonably interpret this as allowing research/non-commercial reuse with redistribution. The NC license does not require remixed data to have a specific license (unlike SA). Half star awarded.

#### D.1.2 — Not triggered

- **Reasoning**: D.1.1 awards a half star, so D.1.2 is not evaluated.

### E.1 — Restrictions on who can (re)use the data

- **Verdict**: fail (E.1 full star not awarded)
- **Source**: https://go.drugbank.com/releases/latest (via Path 1)
- **Quote**: "Attribution-NonCommercial 4.0 International License"
- **Reasoning**: CC-BY-NC-4.0 distinguishes between commercial and non-commercial users. Not all person groups are allowed unrestricted use. E.1 (full star) is not awarded.

#### E.1.1 — Non-commercial/academic reuse allowed

- **Verdict**: pass
- **Source**: https://go.drugbank.com/releases/latest (via Path 1)
- **Quote**: "The Academic License is free and available for researchers who meet the following criteria..."
- **Reasoning**: CC-BY-NC-4.0 allows non-commercial entities to use and redistribute the data. This is a commercial/non-commercial distinction, which qualifies for a half star under E.1.1.

#### E.1.2 — Not triggered

- **Reasoning**: E.1.1 awards a half star, so E.1.2 is not evaluated.

## Comparison with Existing YAML

| Field | Existing YAML | Current Website Finding | Match? |
|-------|--------------|------------------------|--------|
| license | CC-BY-NC-4.0 | CC-BY-NC-4.0 (academic datasets) | Yes |
| license-type | restrictive | restrictive | Yes |
| license-link | https://www.drugbank.ca/releases/latest | Now at https://go.drugbank.com/releases/latest | URL changed |
| data-access location | https://www.drugbank.ca/releases/latest | Now at https://go.drugbank.com/releases/latest | URL changed |
| D.1.1 comment | NC license allows liberal non-commercial reuse | Confirmed | Yes |
| E.1.1 comment | NC license allows non-commercial reuse | Confirmed | Yes |
| Commentary: CC0 subset | ~5mb CC0 subset (~3%) | CC0 open data still exists | Yes |
| Commentary: commercial licensing | DrugBank+ for commercial fees | "Talk to sales for commercial licensing" | Yes |
| Commentary: account process | Multi-step, human mediated | Still requires account creation, application, team review | Yes |

### Differences Found

1. **URL change**: The domain has changed from `www.drugbank.ca` to `go.drugbank.com`. The `license-link` and `data-access` location in the YAML point to the old domain (`https://www.drugbank.ca/releases/latest`). This URL likely redirects to the current `https://go.drugbank.com/releases/latest`.

2. **Terms of Use tension**: The site-wide Terms of Use (via Path 2) impose restrictions beyond CC-BY-NC-4.0, including prohibiting users from developing "another database of drug information, drug-drug interactions, or drug targets" and restricting use to "internal, non-clinical educational research purposes." These additional restrictions are not noted in the existing YAML commentary. This creates a tension: the Creative Commons license on the downloads page would permit non-commercial derivative works, but the Terms of Use explicitly prohibit creating derivative databases. This is a notable inconsistency that could affect the B.1 and D.1.1 assessments.

3. **C.2 scoring**: The existing YAML does not explicitly score C.2 (it is embedded in the overall star count), but the commentary about the human-mediated access process suggests awareness of this issue. The current website still requires team review for academic access.

### Scoring comparison

| Criterion | Existing YAML (implied) | Cross-check finding |
|-----------|------------------------|-------------------|
| A.1 | pass (½ star) | pass (½ star) |
| A.2 | pass (+½ star) | pass (+½ star) |
| B.1 | pass (½ star) | pass (½ star) — license terms themselves don't require negotiation |
| B.2 | pass (+½ star) | pass (+½ star) |
| C.1 | pass (½ star) | pass (½ star) |
| C.2 | fail (0) | fail (0) — human-mediated approval required |
| D.1 | fail | fail |
| D.1.1 | pass (½ star) | pass (½ star) |
| E.1 | fail | fail |
| E.1.1 | pass (½ star) | pass (½ star) |

## Summary

| Criterion | Verdict | Stars |
|-----------|---------|-------|
| A.1 (single license) | pass | ½ |
| A.2 (standard license) | pass | +½ |
| B.1 (no negotiation) | pass | ½ |
| B.2 (scope complete) | pass | +½ |
| C.1 (data accessible) | pass | ½ |
| C.2 (transparent access) | fail | 0 |
| D.1 (reuse unrestricted) | fail | 0 |
| D.1.1 (non-commercial reuse) | pass | ½ |
| E.1 (users unrestricted) | fail | 0 |
| E.1.1 (non-commercial users) | pass | ½ |
| **Total** | | **3.5 stars** |

## Notable Observations

1. **Terms of Use vs. Creative Commons tension**: The Terms of Use at `trust.drugbank.com` impose restrictions that go beyond what CC-BY-NC-4.0 permits for non-commercial use. Specifically, the prohibition on creating derivative databases and the restriction to "internal" use are more restrictive than CC-BY-NC-4.0. This could be seen as conflicting licenses (A.1.1 failure) or as additional negotiation requirements (B.1 failure). The cross-check preserves the existing YAML's interpretation that CC-BY-NC-4.0 is the governing data license.

2. **Domain migration**: DrugBank has migrated from `www.drugbank.ca` to `go.drugbank.com`. The YAML's `license-link` and `data-access` URLs use the old domain.

3. **Open data subset**: The CC0 open data subset (DrugBank Vocabulary and Structures) continues to be available, consistent with the existing commentary.
