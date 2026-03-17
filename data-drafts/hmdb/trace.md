# Evaluation Trace: hmdb

- **Resource**: Human Metabolome Database (HMDB)
- **Root URL**: http://www.hmdb.ca
- **Evaluated**: 2026-03-13
- **Evaluator**: Claude (automated cross-check)

## Navigation Paths

### All paths failed — site inaccessible

The following URLs were attempted and all returned **HTTP 403 Forbidden**:

1. `http://www.hmdb.ca` → 403
2. `https://www.hmdb.ca` → 403
3. `https://hmdb.ca` → 403
4. `https://www.hmdb.ca/about` → 403
5. `https://hmdb.ca/about` → 403
6. `https://www.hmdb.ca/about#cite` → 403
7. `https://www.hmdb.ca/downloads` → 403
8. `https://hmdb.ca/downloads` → 403
9. `https://www.hmdb.ca/sources` → 403

No page content could be retrieved from the HMDB website. The site appears to be blocking automated access entirely (all HTTP and HTTPS variants, with and without `www`, across the root page, about page, downloads page, and sources page).

## Criteria Evaluation

**Note:** Because the website is completely inaccessible via automated fetch (403 on all attempted URLs), no independent verification of any criterion is possible. The evaluation below documents what could and could not be verified against the existing YAML (`data-sources/hmdb.yaml`, last curated 2017-12-07).

### A.1 — Does the resource have a single license?

#### A.1.1 — No conflicting licenses

- **Verdict**: unable to verify
- **Source**: http://www.hmdb.ca/about#cite (not reachable — 403)
- **Reasoning**: The existing YAML records `license: "custom"` with a license link at `http://www.hmdb.ca/about#cite`. The site returned 403 on all attempts, so the license content could not be independently verified.

#### A.1.2 — License is present

- **Verdict**: unable to verify
- **Source**: http://www.hmdb.ca/about#cite (not reachable — 403)
- **Reasoning**: Cannot confirm whether licensing information is still present at the documented URL. The existing evaluation records a discoverable license (pass for A.1, half star). This could not be confirmed or denied.

### A.2 — Does the resource use a standard license?

#### A.2.2 — Custom or non-standard license

- **Verdict**: unable to verify (existing YAML says custom → no star)
- **Source**: http://www.hmdb.ca/about#cite (not reachable — 403)
- **Reasoning**: The existing YAML records `license: "custom"` and notes "Custom terms at linked license and on downloads page." A custom license does not earn a star at A.2. This could not be independently verified.

### B.1 — License requires no further negotiation

- **Verdict**: unable to verify
- **Source**: http://www.hmdb.ca/about#cite (not reachable — 403)
- **Reasoning**: The existing YAML does not flag B.1 as an issue, implying the custom license does not require negotiation. The existing commentary states "the terms are minimal" and compares them to CC-BY-NC. Cannot verify independently.

### B.2 — Is the scoping of the license complete?

#### B.2.1 — Comprehensive: does the license apply to all of the data?

- **Verdict**: unable to verify
- **Source**: http://www.hmdb.ca/about#cite (not reachable — 403)
- **Reasoning**: Cannot confirm whether the license scope covers all data. No issues were flagged for B.2 in the existing YAML.

#### B.2.2 — Differentiated: can obtain a singly-licensed slice

- **Verdict**: unable to verify
- **Source**: http://www.hmdb.ca/downloads (not reachable — 403)
- **Reasoning**: Cannot confirm whether a clean single-license slice is obtainable. The existing YAML records a single custom license, which would trivially satisfy differentiation.

### C.1 — Reasonable good-faith location to access data

- **Verdict**: unable to verify
- **Source**: http://www.hmdb.ca/downloads (not reachable — 403)
- **Reasoning**: The existing YAML records a download location at `http://www.hmdb.ca/downloads`. The page could not be reached. Cannot confirm whether data downloads are still available at this location.

### C.2 — Reasonable and transparent access method

- **Verdict**: unable to verify
- **Source**: http://www.hmdb.ca/downloads (not reachable — 403)
- **Reasoning**: Cannot confirm whether the access method is reasonable and transparent. The 403 responses on all URLs could indicate that the site now requires specific browser headers, cookies, or other access controls, but this cannot be determined without further investigation.

### D.1 — Restrictions on kinds of (re)use

#### D.1.1 — Non-commercial reuse allowed

- **Verdict**: unable to verify (existing YAML awards half star here)
- **Source**: http://www.hmdb.ca/about#cite (not reachable — 403)
- **Reasoning**: The existing YAML records `license-type: "restrictive"` and notes at D.1.1: "The custom license would appear to allow for liberal non-commercial reuse." The commentary compares the terms to CC-BY-NC. Cannot verify the current license text.

#### D.1.2 — No redistribution provisions

- **Verdict**: not triggered (D.1.1 applies per existing evaluation)
- **Reasoning**: The existing evaluation awards D.1.1 (half star), so D.1.2 is not triggered.

### E.1 — Restrictions on who can (re)use the data

#### E.1.1 — Non-commercial users allowed

- **Verdict**: unable to verify (existing YAML awards half star here)
- **Source**: http://www.hmdb.ca/about#cite (not reachable — 403)
- **Reasoning**: The existing YAML notes at E.1.1: "The custom license would appear to explicitly allow for non-commercial reuse with other non-commercial interests." Cannot verify the current license text.

#### E.1.2 — No user provisions

- **Verdict**: not triggered (E.1.1 applies per existing evaluation)
- **Reasoning**: The existing evaluation awards E.1.1 (half star), so E.1.2 is not triggered.

## Comparison with Existing YAML

The existing YAML (`data-sources/hmdb.yaml`) was last curated on **2017-12-07** — over 8 years ago. The evaluation could not be independently verified because the HMDB website returns 403 Forbidden on all attempted URLs (root, about, downloads, sources, with both HTTP/HTTPS and with/without www).

**No discrepancies could be identified or ruled out** due to the site being completely inaccessible to automated fetching.

### Observations

1. **Stale source URL**: The YAML uses `http://www.hmdb.ca` (HTTP). It is possible the site has migrated to HTTPS or a different domain, but all tested variants returned 403.
2. **Age of evaluation**: At over 8 years old, the evaluation may be significantly out of date. HMDB has released multiple major versions since 2017 (HMDB 4.0 in 2018, HMDB 5.0 in 2021) and licensing terms may have changed.
3. **Contact**: The YAML lists `https://twitter.com/WishartLab` as a contact. Twitter/X handle validity was not checked.
4. **403 blocking**: The consistent 403 across all URLs suggests the site may be using bot protection (e.g. Cloudflare, rate limiting, or user-agent filtering). A human reviewer could likely access the site via a standard web browser.

### Recommendation

A manual cross-check by a human reviewer using a standard web browser is needed to verify the current state of HMDB's licensing and data access terms. The automated cross-check was unable to reach any page on the HMDB website.

## Summary

| Criterion | Existing YAML | Cross-check | Stars (existing) |
|-----------|--------------|-------------|-----------------|
| A.1 (single license) | pass (custom) | unable to verify | ½ |
| A.2 (standard license) | fail (A.2.2 custom) | unable to verify | 0 |
| B.1 (no negotiation) | pass (implied) | unable to verify | ½ |
| B.2 (scope complete) | pass (implied) | unable to verify | +½ |
| C.1 (data accessible) | pass | unable to verify | ½ |
| C.2 (transparent access) | pass (implied) | unable to verify | +½ |
| D.1 (reuse) | D.1.1 half star | unable to verify | ½ |
| E.1 (users) | E.1.1 half star | unable to verify | ½ |
| **Total** | | | **3.5 stars** |
