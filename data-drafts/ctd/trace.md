# Evaluation Trace: ctd

- **Resource**: Comparative Toxicogenomics Database (CTD)
- **Root URL**: http://ctdbase.org
- **Evaluated**: 2026-03-13
- **Evaluator**: Claude (automated)

## Navigation Paths

### FETCH FAILURE: All pages blocked by CAPTCHA

All attempts to fetch pages on ctdbase.org returned a human verification
(CAPTCHA) gate page instead of the actual site content. The following
URLs were attempted:

1. `http://ctdbase.org` — returned CAPTCHA page
2. `https://ctdbase.org` — returned CAPTCHA page
3. `http://ctdbase.org/about/legal.jsp` — returned CAPTCHA page
4. `https://ctdbase.org/about/legal.jsp` — returned CAPTCHA page
5. `http://ctdbase.org/downloads/` — returned CAPTCHA page
6. `http://ctdbase.org/tools/batchQuery.go` — returned CAPTCHA page

The CAPTCHA page contained only the following text:

> "To continue, we need to verify you are a human. This site uses
> essential cookies necessary for its operation. No personal data is
> collected or processed. By continuing to use this site, you consent to
> our use of cookies. If you are having trouble accessing computationally
> from any device, please use a browser to access CTD from that device
> and complete the captcha verification."

No navigation links, licensing information, download pages, or any other
site content was accessible. Per the cross-check rules, no fallback to
search engines, web archives, or other external sources was used.

## Criteria Evaluation

All criteria below are marked **unable-to-verify** because the resource
website could not be accessed due to CAPTCHA blocking.

### A.1 — Does the resource have a single license?

- **Verdict**: unable-to-verify
- **Source**: http://ctdbase.org/about/legal.jsp (not accessible)
- **Reasoning**: The legal page at `http://ctdbase.org/about/legal.jsp` could not be fetched due to CAPTCHA. The existing YAML records `license: custom` and `license-link: http://ctdbase.org/about/legal.jsp`. Cannot confirm or deny whether a single license exists.

#### A.1.1 — No conflicting licenses

- **Verdict**: unable-to-verify
- **Reasoning**: Cannot access any pages to check for conflicting licenses.

#### A.1.2 — License is present

- **Verdict**: unable-to-verify
- **Reasoning**: Cannot access any pages to verify license discoverability.

### A.2 — Does the resource use a standard license?

- **Verdict**: unable-to-verify
- **Reasoning**: Cannot access the legal page to verify whether the license is standard or custom.

#### A.2.2 — Custom or non-standard license

- **Verdict**: unable-to-verify
- **Reasoning**: The existing YAML records this as `custom` with the comment "Custom license with interesting use restrictions." Cannot verify.

### B.1 — License requires no further negotiation

- **Verdict**: unable-to-verify
- **Reasoning**: The existing YAML flags B.1 with: "For quality control purposes, you must provide CTD with periodic access to your publication of our data." Cannot access the legal page to verify this language still exists.

### B.2 — Is the scoping of the license complete?

#### B.2.1 — Comprehensive

- **Verdict**: unable-to-verify
- **Reasoning**: Cannot access the legal or data pages.

#### B.2.2 — Differentiated

- **Verdict**: unable-to-verify
- **Reasoning**: Cannot access the legal or data pages.

### C.1 — Reasonable good-faith location to access data

- **Verdict**: unable-to-verify
- **Source**: http://ctdbase.org/downloads/ (not accessible)
- **Reasoning**: The existing YAML lists download and API access locations. Cannot verify these pages exist or are functional.

### C.2 — Reasonable and transparent access method

- **Verdict**: unable-to-verify
- **Reasoning**: Cannot access download or API pages. Note that the CAPTCHA gate itself could be relevant to this criterion — if it blocks programmatic access to data downloads, it may affect transparency of access. However, the CAPTCHA page states it is specifically for computational access verification, and per evaluation guidelines, common human web friction like CAPTCHAs does not warrant commentary.

### D.1 — Restrictions on kinds of (re)use

- **Verdict**: unable-to-verify
- **Reasoning**: The existing YAML flags D.1.2 with: "Given the four statements in the Additional Terms of Data Use, notably number 4, it looks like any downstream user would have to renegotiate with CTD." Cannot access the legal page to verify.

#### D.1.1 — Half star for research/non-commercial reuse

- **Verdict**: unable-to-verify
- **Reasoning**: Cannot access the legal page.

#### D.1.2 — No stars (restrictive)

- **Verdict**: unable-to-verify
- **Reasoning**: Cannot access the legal page to verify the "Additional Terms of Data Use" language.

### E.1 — Restrictions on who can (re)use the data

- **Verdict**: unable-to-verify
- **Reasoning**: The existing YAML flags E.1.1 with: "Without negotiation: 'It is to be used only for research and educational purposes.'" Cannot access the legal page to verify.

#### E.1.1 — Half star for research/academic users

- **Verdict**: unable-to-verify
- **Reasoning**: Cannot access the legal page.

#### E.1.2 — No stars (restrictive)

- **Verdict**: unable-to-verify
- **Reasoning**: Cannot access the legal page.

## Differences from Existing YAML

**Unable to determine.** All pages on ctdbase.org are blocked by a CAPTCHA
verification gate that prevents automated access. No content from the
resource website could be retrieved to compare against the existing
evaluation.

The existing YAML evaluation cannot be confirmed or contradicted by this
cross-check attempt.

### Observations

- The CAPTCHA gate is a relatively aggressive bot-blocking measure. The
  gate page explicitly acknowledges computational access issues: "If you
  are having trouble accessing computationally from any device, please
  use a browser to access CTD from that device and complete the captcha
  verification."
- All URLs in the existing YAML (root, legal page, downloads, batch
  query, contact) returned the same CAPTCHA page.
- A human reviewer would need to manually access ctdbase.org in a browser
  to complete this cross-check.

## Summary

| Criterion | Verdict | Stars |
|-----------|---------|-------|
| A.1 (single license) | unable-to-verify | ? |
| A.2 (standard license) | unable-to-verify | ? |
| B.1 (no negotiation) | unable-to-verify | ? |
| B.2 (scope complete) | unable-to-verify | ? |
| C.1 (data accessible) | unable-to-verify | ? |
| C.2 (transparent access) | unable-to-verify | ? |
| D.1 (reuse restrictions) | unable-to-verify | ? |
| E.1 (user restrictions) | unable-to-verify | ? |
| **Total** | | **unable to determine** |

**Existing YAML total (for reference):** Based on the existing evaluation's
license-issues (A.2.2 fail, B.1 fail, D.1.2 fail, E.1.1 half star), the
implied score would be: A.1 = ½, A.2 = 0, B.1 = 0, B.2 = (unspecified),
C.1 = ½, C.2 = ½, D.1 = 0, E.1 = ½ → approximately 2 stars.
