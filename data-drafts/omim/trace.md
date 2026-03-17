# Evaluation Trace: omim

- **Resource**: Mendelian Inheritance in Man (OMIM)
- **Root URL**: https://www.omim.org
- **Evaluated**: 2026-03-13
- **Evaluator**: Claude (automated)

## Navigation Paths

Pages visited starting from the resource root. Each step shows the link text found, its location on the page, and where it leads.

### Path 1: Root → Use Agreement

1. **https://www.omim.org**
   - Found link: "Use Agreement" (top navigation bar, under "Help" dropdown)
   → https://www.omim.org/help/agreement

### Path 2: Root → Copyright

1. **https://www.omim.org**
   - Found link: "Copyright" (top navigation bar, under "Help" dropdown)
   → https://www.omim.org/help/copyright

### Path 3: Root → Downloads

1. **https://www.omim.org**
   - Found link: "Register for Downloads" (top navigation bar, under "Downloads" dropdown)
   → https://www.omim.org/downloads/

### Path 4: Root → API

1. **https://www.omim.org**
   - Found link: "Register for API Access" (top navigation bar, under "Downloads" dropdown)
   → https://www.omim.org/api

### Path 5: Root → About

1. **https://www.omim.org**
   - Found link: "About" (top navigation bar)
   → https://www.omim.org/help/about

## Criteria Evaluation

### A.1 — Does the resource have a single license?

#### A.1.1 — No conflicting licenses

- **Verdict**: pass
- **Source**: https://www.omim.org/help/agreement (via Path 1), https://www.omim.org/help/copyright (via Path 2)
- **Quote** (Use Agreement, clause 5): "The rights in and to OMIM (excluding information contained therein obtained from third parties) vest in JHU. JHU holds the copyright and trademark to OMIM and OMIM.org, including the collective data therein and provides access to any individual subject to the terms set forth in this USE AGREEMENT."
- **Quote** (Copyright page): "The OMIM database including the collective data contained therein is the property of the Johns Hopkins University, which holds the copyright thereto."
- **Reasoning**: Both the Use Agreement and the Copyright page point to a single set of terms governed by JHU's custom Use Agreement. There is no conflict between the two pages; the Copyright page restates JHU's ownership and the Use Agreement provides the terms of access. A single license (the Use Agreement) applies to all OMIM data.

#### A.1.2 — License is present

- **Verdict**: pass
- **Source**: https://www.omim.org/help/agreement (via Path 1)
- **Reasoning**: The Use Agreement is discoverable from the root page via the "Help" dropdown menu. License information is clearly present.

**A.1 result: HALF STAR**

### A.2 — Does the resource use a standard license?

#### A.2.1 — Public domain declaration

- **Verdict**: not-applicable
- **Reasoning**: OMIM does not make a public domain declaration. The Copyright page explicitly asserts JHU copyright.

#### A.2.2 — Custom or non-standard license

- **Verdict**: fail (custom license)
- **Source**: https://www.omim.org/help/agreement (via Path 1)
- **Quote** (clause 9): "Subject to the terms and conditions of this USE AGREEMENT, JHU grants User a non-exclusive, non-transferable and non-sub-licensable license."
- **Reasoning**: The Use Agreement is a custom legal document drafted by JHU. It is not a Creative Commons license, GNU license, BSD/MIT license, Open Database License, or any other standard license template. No additional half star is awarded.

**A.2 result: NO STARS**

### B.1 — License requires no further negotiation

- **Verdict**: fail
- **Source**: https://www.omim.org/help/agreement (via Path 1)
- **Quote** (clause 8): "Users at for-profit or commercial entities who want to download all or part of OMIM must obtain a license by paying applicable licensing fees to and entering into a license agreement with JHU which has the exclusive right to license the access to and use of OMIM to users worldwide."
- **Quote** (clause 13): "If OMIM data are downloaded in whole or part from the site or API servers and used in a database or analysis software, the data must be refreshed at least weekly."
- **Quote** (clause 14): "An API key is required to access the OMIM API. This unique KEY will be generated upon registration, must be renewed yearly, and must be included with every request. Johns Hopkins University reserves the right to revoke the key at its discretion."
- **Reasoning**: Clause 8 requires commercial users to negotiate a separate license agreement with JHU and pay licensing fees. Clause 13 imposes an ongoing obligation to refresh data weekly, which goes beyond reasonable attribution/redistribution terms. Clause 14 describes arbitrary API key revocation. These clauses require further negotiation or ongoing compliance actions beyond initial access.

**B.1 result: NO STARS**

### B.2 — Is the scoping of the license complete?

#### B.2.1 — Comprehensive: does the license apply to all of the data?

- **Verdict**: pass
- **Source**: https://www.omim.org/help/agreement (via Path 1)
- **Quote** (clause 5): "JHU holds the copyright and trademark to OMIM and OMIM.org, including the collective data therein"
- **Quote** (clause 1): "This Use Agreement applies to any individual, institution, or organization that uses OMIM.org through its front end, including its mirror sites, the OMIM.org API, or downloads of OMIM data from the site."
- **Reasoning**: The Use Agreement applies broadly to all OMIM data regardless of access method. There is no "except where noted" language.

#### B.2.2 — Differentiated: can obtain a singly-licensed slice

- **Verdict**: pass
- **Source**: https://www.omim.org/help/agreement (via Path 1)
- **Reasoning**: A single license (the Use Agreement) applies to all OMIM data. Since there is only one license, any slice of the data is under that single license. Differentiation is trivially satisfied.

**B.2 result: +HALF STAR (but B.1 failed, so B total = half star)**

### C.1 — Reasonable good-faith location to access data

- **Verdict**: pass
- **Source**: https://www.omim.org/downloads/ (via Path 3), https://www.omim.org/api (via Path 4)
- **Quote** (Downloads page): Available files include "mim2gene.txt" (without registration), and "mimTitles.txt", "genemap2.txt", "morbidmap.txt" (with registration).
- **Reasoning**: The downloads page provides a clear location where data files can be obtained. The API page provides an endpoint for programmatic access. Both are discoverable from the root navigation. Assuming registration is completed, data access locations are reasonable.

**C.1 result: HALF STAR**

### C.2 — Reasonable and transparent access method

- **Verdict**: fail
- **Source**: https://www.omim.org/help/agreement (via Path 1), https://www.omim.org/api (via Path 4)
- **Quote** (clause 14): "An API key is required to access the OMIM API. This unique KEY will be generated upon registration, must be renewed yearly, and must be included with every request. Johns Hopkins University reserves the right to revoke the key at its discretion."
- **Quote** (Downloads page): "Access will not be granted without a valid institutional email address."
- **Reasoning**: The API key is used for access control (not merely analytics), as JHU reserves the right to revoke it at its discretion. Per the criteria examples, "Access by API key for access control" is a failure for C.2. The criteria also note an exception: "Access by API key for access control, but with downloads available allowing timely complete data ingest." However, the downloads also require registration with an institutional email and the key must be renewed yearly. The existing YAML notes that "the API key is used for access control, it violates the C.2 example." This assessment remains consistent with the current website state.

**C.2 result: NO STARS**

### D.1 — Restrictions on kinds of (re)use

- **Verdict**: D.1.2 — fail (no stars)
- **Source**: https://www.omim.org/help/agreement (via Path 1)
- **Quote** (clause 10): "User may not sell, lease, rent, sublicense, assign, export or transfer in any other manner the OMIM data or the rights of access to or use thereof..."
- **Quote** (clause 25): "User shall not copy, reproduce, distribute or create derivative works of or otherwise modify OMIM or any part thereof."
- **Quote** (Downloads page): Users must declare they will "not use or share the data contained in OMIM for any commercial purposes" and "will not develop a derivative database, nor distribute the data to a third party without first obtaining a license."
- **Reasoning**: The agreement explicitly prohibits redistribution (clause 10), creating derivative works, and distribution (clause 25). Even for non-commercial academic researchers, the agreement does not allow redistribution or creation of derivative works without negotiation. A non-legal professional would not reasonably interpret this license as allowing research users to work with the data and redistribute results without negotiation. This fails both D.1.1 and D.1.2.

**D.1 result: NO STARS (D.1.2)**

### E.1 — Restrictions on who can (re)use the data

- **Verdict**: E.1.2 — fail (no stars)
- **Source**: https://www.omim.org/help/agreement (via Path 1)
- **Quote** (clause 7): "Use of OMIM.org is provided free of charge to any individual for personal use, for educational or scholarly use, or for research purposes through the front end of the database."
- **Quote** (clause 8): "Users at for-profit or commercial entities who want to download all or part of OMIM must obtain a license by paying applicable licensing fees to and entering into a license agreement with JHU..."
- **Reasoning**: The agreement distinguishes between commercial and non-commercial/academic users. Commercial users must negotiate separate license agreements and pay fees. However, even for non-commercial users, the agreement prohibits redistribution and derivative works (clauses 10 and 25), meaning non-commercial/academic users cannot redistribute results. Since the D.1 analysis shows no redistribution is possible even for research users, E.1.1 (which requires that research/non-commercial users can "work with the data and redistribute the results without negotiation") also fails. This falls to E.1.2.

**E.1 result: NO STARS (E.1.2)**

## Summary

| Criterion | Verdict | Stars |
|-----------|---------|-------|
| A.1 (single license) | pass | 1/2 |
| A.2 (standard license) | fail (custom) | 0 |
| B.1 (no negotiation) | fail | 0 |
| B.2 (scope complete) | pass | +1/2 |
| C.1 (data accessible) | pass | 1/2 |
| C.2 (transparent access) | fail | 0 |
| D.1 (reuse restrictions) | D.1.2 — fail | 0 |
| E.1 (user restrictions) | E.1.2 — fail | 0 |
| **Total** | | **1.5 stars** |

## Comparison with Existing YAML

The existing YAML evaluation (last curated 2017-12-07) is largely **consistent** with current findings. Key observations:

1. **License = custom**: Confirmed. The Use Agreement remains a custom JHU document.
2. **License-type = restrictive**: Confirmed. The agreement prohibits redistribution and derivative works.
3. **A.2.2 (custom license)**: Confirmed. Still a custom license.
4. **B.1 (negotiation required)**: Confirmed. Clause 13 (weekly refresh) and clause 14 (arbitrary key revocation) remain. Clause 8 (commercial licensing) also still present.
5. **C.2 (access control)**: Confirmed. API key used for access control with discretionary revocation.
6. **D.1.2 (no reuse/redistribution)**: Confirmed. Clauses 10 and 25 still prohibit redistribution and derivative works.
7. **E.1.2 (no pass-through)**: Confirmed. Same clauses prevent redistribution even for non-profit researchers.
8. **C.1 commentary (no violation)**: Confirmed. Downloads and API endpoints remain discoverable.

**Minor differences noted:**
- The existing YAML `license-link` uses `http://` while the current site uses `https://`. The content is the same.
- The Use Agreement copyright year range has been updated to "1966-2026" (was presumably "1966-2017" or similar at time of original evaluation).
- The About page now mentions OMIM's funding model and that "over 90% of operating costs support salaries for scientific writers and biocurators."
- The downloads page now explicitly lists specific available files (mim2gene.txt, mimTitles.txt, genemap2.txt, morbidmap.txt).
- No substantive changes to the licensing terms or their restrictiveness were found.
