# Evaluation Trace: panther

- **Resource**: PANTHER (Protein ANalysis THrough Evolutionary Relationships Classification System)
- **Root URL**: https://pantherdb.org/
- **Evaluated**: 2026-03-13
- **Evaluator**: Claude (automated)

## Navigation Paths

### Fetch Failure: All Pages Blocked by CAPTCHA

All attempts to fetch pages on pantherdb.org returned a CAPTCHA verification
screen ("Verifying you are human") instead of page content. The following
URLs were attempted:

1. **https://pantherdb.org/** — CAPTCHA block
2. **https://www.pantherdb.org/** — CAPTCHA block
3. **https://pantherdb.org/tou.jsp** (Terms of Use) — CAPTCHA block
4. **https://pantherdb.org/downloads/index.jsp** (Downloads) — CAPTCHA block
5. **https://pantherdb.org/about.jsp** — CAPTCHA block

No navigation links, page content, or licensing information could be retrieved.
The CAPTCHA requires interactive checkbox completion and cannot be bypassed
by automated fetching.

**No navigation paths could be documented.**

## Criteria Evaluation

Due to the CAPTCHA block on all pages, no criteria can be independently
verified from current page content. The following assessment is based solely
on the existing YAML evaluation claims, which cannot be confirmed or denied.

### A.1 — Does the resource have a single license?

- **Verdict**: unable to verify
- **Source**: https://pantherdb.org/tou.jsp (fetch failed — CAPTCHA)
- **Quote**: N/A (page not accessible)
- **Reasoning**: The existing YAML claims a CC-BY-4.0 license found at the Terms of Use page (pantherdb.org/tou.jsp). This page could not be fetched to verify.

### A.1.1 — No conflicting licenses

- **Verdict**: unable to verify
- **Reasoning**: No pages could be accessed to check for conflicting licenses.

### A.1.2 — License is present

- **Verdict**: unable to verify
- **Reasoning**: Cannot confirm license presence without page access.

### A.2 — Does the resource use a standard license?

- **Verdict**: unable to verify
- **Reasoning**: If the license is CC-BY-4.0 as claimed, it is a standard Creative Commons license and would earn a half star. Cannot confirm.

### A.2.1 — Public domain declaration

- **Verdict**: not-applicable (if CC-BY-4.0 as claimed)
- **Reasoning**: CC-BY-4.0 is not a public domain declaration.

### A.2.2 — Custom or non-standard license

- **Verdict**: unable to verify
- **Reasoning**: CC-BY-4.0, if confirmed, is standard and not custom.

### B.1 — License requires no further negotiation

- **Verdict**: unable to verify
- **Source**: https://pantherdb.org/tou.jsp (fetch failed — CAPTCHA)
- **Reasoning**: Cannot verify whether the Terms of Use page contains negotiation language. CC-BY-4.0 itself does not require negotiation, but the ToU page may contain additional terms.

### B.2 — Is the scoping of the license complete?

#### B.2.1 — Comprehensive: does the license apply to all of the data?

- **Verdict**: unable to verify
- **Reasoning**: Cannot check whether the license statement covers all data or contains exceptions.

#### B.2.2 — Differentiated: can obtain a singly-licensed slice

- **Verdict**: unable to verify
- **Reasoning**: Cannot verify download page structure or whether multiple licenses apply to different data slices.

### C.1 — Reasonable good-faith location to access data

- **Verdict**: unable to verify
- **Source**: https://pantherdb.org/downloads/index.jsp (fetch failed — CAPTCHA)
- **Reasoning**: The YAML claims a download page exists at pantherdb.org/downloads/index.jsp. Cannot verify its content or whether it provides reasonable access to data groupings.

### C.2 — Reasonable and transparent access method

- **Verdict**: unable to verify
- **Reasoning**: Cannot verify whether the download mechanism is transparent and unencumbered. Note that the CAPTCHA itself is considered normal web friction per project guidelines and would not affect this criterion.

### D.1 — Restrictions on kinds of (re)use

- **Verdict**: unable to verify
- **Reasoning**: CC-BY-4.0, if confirmed, allows all types of reuse with attribution. It would earn a full star. Cannot verify the actual license.

#### D.1.1 / D.1.2 — Not triggered (if CC-BY-4.0)

- **Reasoning**: If D.1 passes with a full star, these sub-criteria are not triggered.

### E.1 — Restrictions on who can (re)use the data

- **Verdict**: unable to verify
- **Reasoning**: CC-BY-4.0, if confirmed, does not restrict who can reuse the data. It would earn a full star. Cannot verify the actual license.

#### E.1.1 / E.1.2 — Not triggered (if CC-BY-4.0)

- **Reasoning**: If E.1 passes with a full star, these sub-criteria are not triggered.

## Differences from Existing YAML

**Unable to determine differences.** All pages on pantherdb.org are blocked
by CAPTCHA verification, preventing independent verification of any claims
in the existing YAML evaluation. The following claims from the YAML could
not be confirmed or denied:

1. **License (CC-BY-4.0)**: The YAML states the Terms of Use page declares CC-BY-4.0. The commentary quotes: "PANTHER data and data products are licensed under the Creative Commons Attribution 4.0 International License." This could not be verified.
2. **License link (pantherdb.org/tou.jsp)**: Page exists but content is inaccessible.
3. **Data access (pantherdb.org/downloads/index.jsp)**: Page exists but content is inaccessible.
4. **Contacts (feedback@pantherdb.org, pdthomas@usc.edu)**: Could not be verified from page content.
5. **Description accuracy**: Could not verify the resource description against current site content.

**No discrepancies were found because no content could be compared.** A human
reviewer who can complete the CAPTCHA verification would need to perform this
cross-check.

## Summary

| Criterion | Verdict | Stars |
|-----------|---------|-------|
| A.1 (single license) | unable to verify | ? |
| A.2 (standard license) | unable to verify | ? |
| B.1 (no negotiation) | unable to verify | ? |
| B.2 (scope complete) | unable to verify | ? |
| C.1 (data accessible) | unable to verify | ? |
| C.2 (transparent access) | unable to verify | ? |
| D.1 (reuse unrestricted) | unable to verify | ? |
| E.1 (users unrestricted) | unable to verify | ? |
| **Total** | | **Unable to verify (YAML claims 5 stars)** |

**Note**: If the existing YAML evaluation is accurate (CC-BY-4.0 license,
standard terms, accessible downloads), the expected score would be 5 stars.
This cross-check was unable to independently verify any criteria due to
CAPTCHA blocking on all pantherdb.org pages.
