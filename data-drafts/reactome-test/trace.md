# Evaluation Trace: reactome-test

- **Resource**: Reactome
- **Root URL**: https://reactome.org
- **Evaluated**: 2026-03-05
- **Evaluator**: Claude (automated)

## Navigation Paths

Pages visited starting from the resource root. Each step shows the link text found, its location on the page, and where it leads.

### Path 1: Root → License Page

1. **https://reactome.org**
   - Found link: "License Agreement" (top navigation bar, under "About" dropdown, listed under "What is Reactome ?")
   → https://reactome.org/license

### Path 2: Root → Download Page

1. **https://reactome.org**
   - Found link: "Download" (top navigation bar, main nav item)
   → https://reactome.org/download-data

### Path 3: Root → Content Service (API)

1. **https://reactome.org**
   - Found link: "Content Service" (top navigation bar, under "Tools" dropdown)
   → https://reactome.org/ContentService

## Criteria Evaluation

### A.1 — Does the resource have a single license?

#### A.1.1 — No conflicting licenses

- **Verdict**: pass
- **Source**: https://reactome.org/license (via Path 1)
- **Quote**: "Creative Commons Public Domain Dedication (CC0)" covers "all Reactome database data and derived files." Separately, pathway illustrations are under CC-BY-4.0 and software under Apache 2.0, but these are clearly scoped to non-data content.
- **Reasoning**: The license page distinguishes three categories (illustrations, software, database content) with separate licenses for each. The data license is unambiguously CC0. The other licenses apply to non-data content (artwork, code) and do not conflict with the data license. A single license (CC0) applies to the data.

#### A.1.2 — License is present

- **Verdict**: pass
- **Source**: https://reactome.org/license (via Path 1)
- **Quote**: (see A.1.1 above)
- **Reasoning**: The license page is discoverable from the root via the "About" dropdown menu item "License Agreement." License information is clearly present.

### A.2 — Does the resource use a standard license?

#### A.2.1 — Public domain declaration

- **Verdict**: not-applicable
- **Source**: https://reactome.org/license (via Path 1)
- **Quote**: "Creative Commons Public Domain Dedication (CC0)"
- **Reasoning**: CC0 is the Creative Commons public domain dedication tool. Per the criteria, a public domain declaration scores no additional stars at A.2. However, CC0 is distinct from a bare "public domain" declaration — it is a standardized legal instrument from Creative Commons. The criteria list "Any Creative Commons license" as a standard license. CC0 is treated as a standard Creative Commons instrument, so A.2.1 (public domain declaration penalty) does not apply here, and a half star is awarded for A.2.

#### A.2.2 — Custom or non-standard license

- **Verdict**: pass (CC0 is a standard Creative Commons instrument)
- **Source**: https://reactome.org/license (via Path 1)
- **Reasoning**: CC0-1.0 is listed in the SPDX license list and is a Creative Commons instrument. It is not custom or non-standard.

### B.1 — License requires no further negotiation

- **Verdict**: pass
- **Source**: https://reactome.org/license (via Path 1)
- **Quote**: CC0 "permits copying, modification, and distribution—including commercial use—without permission requests."
- **Reasoning**: CC0 imposes no conditions on reuse. No language on the license page requires contacting a tech transfer office, signing agreements, or any other human/legal negotiation for data reuse.

### B.2 — Is the scoping of the license complete?

#### B.2.1 — Comprehensive: does the license apply to all of the data?

- **Verdict**: pass
- **Source**: https://reactome.org/license (via Path 1)
- **Quote**: "All data in the Reactome database and files derived from that data are licensed under the Creative Commons Public Domain Dedication (CC0)."
- **Reasoning**: The word "all" is used without exceptions, caveats, or "except where noted" language. The previous evaluation flagged KEGG-derived data in the Functional Interaction Network as having redistribution restrictions (B.2.2). The current license page no longer contains any such exception or mention of KEGG restrictions.

#### B.2.2 — Differentiated: can obtain a singly-licensed slice

- **Verdict**: pass
- **Source**: https://reactome.org/license (via Path 1), https://reactome.org/download-data (via Path 2)
- **Quote**: License page states all data is CC0. Download page provides direct download links for individual data categories.
- **Reasoning**: Since all data is under a single license (CC0), differentiation is trivially satisfied — any slice of the data is under CC0. The previous evaluation noted KEGG gene and pathway annotations in the FI Network carried a separate restriction ("the recipient may not distribute this data to other users without a license from Pathway Solutions, Inc."). This language is no longer present on the current license page. The download page lists FI data files (versions 2020–2025) without any special licensing caveats.

### C.1 — Reasonable good-faith location to access data

- **Verdict**: pass
- **Source**: https://reactome.org/download-data (via Path 2)
- **Quote**: The download page provides direct download links for database dumps (Graph Database, MySQL), identifier mappings, pathway data, SBML/BioPAX/SBGN exports, protein interaction data, and gene sets.
- **Reasoning**: A single page at a clearly labeled "Download" link from the main navigation provides access to all major data groupings via direct HTTP download links.

### C.2 — Reasonable and transparent access method

- **Verdict**: pass
- **Source**: https://reactome.org/download-data (via Path 2), https://reactome.org/ContentService (via Path 3)
- **Quote**: Download page provides unprotected HTTPS download links. Content Service API is accessible without authentication.
- **Reasoning**: Data files are available via unprotected HTTPS downloads — no API key, registration, or access request is needed. The Content Service API is also openly accessible. This constitutes a reasonable and transparent access method.

### D.1 — Restrictions on kinds of (re)use

- **Verdict**: pass (full star)
- **Source**: https://reactome.org/license (via Path 1)
- **Quote**: CC0 "permits copying, modification, and distribution—including commercial use—without permission requests."
- **Reasoning**: CC0 places no restrictions on kinds of reuse. All types of downstream reuse (copying, modifying, building upon, redistributing, commercial use) are permitted. This satisfies the criteria for a full star: "all types of reuse are allowed without negotiation."

#### D.1.1 / D.1.2 — Not triggered

- **Reasoning**: Since D.1 awards a full star (no restrictions on reuse), the half-star (D.1.1) and no-star (D.1.2) sub-criteria are not triggered.

### E.1 — Restrictions on who can (re)use the data

- **Verdict**: pass (full star)
- **Source**: https://reactome.org/license (via Path 1)
- **Quote**: CC0 — no restrictions on person groups or agents.
- **Reasoning**: CC0 does not distinguish between academic/commercial, personal/institutional, or any other person groups. All agents may reuse the data without restriction. This satisfies the criteria for a full star.

#### E.1.1 / E.1.2 — Not triggered

- **Reasoning**: Since E.1 awards a full star, the sub-criteria are not triggered.

## Summary

| Criterion | Verdict | Stars |
|-----------|---------|-------|
| A.1 (single license) | pass | ½ |
| A.2 (standard license) | pass | +½ |
| B.1 (no negotiation) | pass | ½ |
| B.2 (scope complete) | pass | +½ |
| C.1 (data accessible) | pass | ½ |
| C.2 (transparent access) | pass | +½ |
| D.1 (reuse unrestricted) | pass | 1 |
| E.1 (users unrestricted) | pass | 1 |
| **Total** | | **5 stars** |
