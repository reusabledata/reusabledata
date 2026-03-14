# Evaluation Trace: reactome

- **Resource**: Reactome
- **Root URL**: https://reactome.org
- **Evaluated**: 2026-03-13
- **Evaluator**: Claude (automated)

## Navigation Paths

Pages visited starting from the resource root. Each step shows the link text found, its location on the page, and where it leads.

### Path 1: Root → License Page

1. **https://reactome.org**
   - Found link: "License Agreement" (top navigation bar, under "About" dropdown)
   → https://reactome.org/license

### Path 2: Root → Download Page

1. **https://reactome.org**
   - Found link: "Download" (top navigation bar, main nav item)
   → https://reactome.org/download-data

### Path 3: Root → Content Service (API)

1. **https://reactome.org**
   - Found link: "Content Service" (top navigation bar, under "Tools" dropdown)
   → https://reactome.org/ContentService

### Path 4: Root → ReactomeFIViz Documentation

1. **https://reactome.org**
   - Found link: "ReactomeFIViz" (top navigation bar, under "Docs" > "Userguide" submenu)
   → https://reactome.org/userguide/reactome-fiviz

## Criteria Evaluation

### A.1 — Does the resource have a single license?

#### A.1.1 — No conflicting licenses

- **Verdict**: pass
- **Source**: https://reactome.org/license (via Path 1)
- **Quote**: "All data in the Reactome database and files derived from that data are licensed under the Creative Commons Public Domain Dedication (CC0)." Separately: "Pathway Illustrations, Icon Library, Art, and Branding Materials" are under CC-BY-4.0 and "all Reactome software is licensed under the Apache License 2.0."
- **Reasoning**: The license page distinguishes three categories (illustrations/art, software, data) with separate licenses for each. The data license is unambiguously CC0. The other licenses apply to non-data content (artwork, code) and do not conflict with the data license. Per the evaluation guidelines, evaluations are specifically about data and data access, so the single applicable license is CC0.

#### A.1.2 — License is present

- **Verdict**: pass
- **Source**: https://reactome.org/license (via Path 1)
- **Reasoning**: The license page is discoverable from the root via the "About" dropdown menu item "License Agreement." License information is clearly present and detailed.

### A.2 — Does the resource use a standard license?

#### A.2.1 — Public domain declaration

- **Verdict**: triggered
- **Source**: https://reactome.org/license (via Path 1)
- **Quote**: "Creative Commons Public Domain Dedication (CC0)"
- **Reasoning**: CC0 is the Creative Commons Public Domain Dedication. Per the criteria, a public domain declaration is identified at A.2.1. However, CC0 is a standardized Creative Commons legal instrument listed in the SPDX license list. The criteria example list states "Any Creative Commons license → Yes" as a standard license. CC0 is a Creative Commons instrument, so it can be treated as standard for A.2 purposes. The treatment of CC0 as standard vs. public-domain-declaration is an edge case that may warrant human reviewer judgment.

#### A.2.2 — Custom or non-standard license

- **Verdict**: pass (CC0 is a standard Creative Commons instrument)
- **Source**: https://reactome.org/license (via Path 1)
- **Reasoning**: CC0-1.0 is in the SPDX license list and is a Creative Commons instrument. It is not custom or non-standard.

### B.1 — License requires no further negotiation

- **Verdict**: pass
- **Source**: https://reactome.org/license (via Path 1)
- **Quote**: "Users may copy, modify, and distribute these data, even for commercial purposes, without requiring permission."
- **Reasoning**: CC0 imposes no conditions on reuse. No language on the license page requires contacting a tech transfer office, signing agreements, or any other human/legal negotiation for data reuse.

### B.2 — Is the scoping of the license complete?

#### B.2.1 — Comprehensive: does the license apply to all of the data?

- **Verdict**: pass
- **Source**: https://reactome.org/license (via Path 1)
- **Quote**: "All data in the Reactome database and files derived from that data are licensed under the Creative Commons Public Domain Dedication (CC0)."
- **Reasoning**: The word "all" is used without exceptions, caveats, or "except where noted" language. No carve-outs for specific data subsets.

#### B.2.2 — Differentiated: can obtain a singly-licensed slice

- **Verdict**: pass
- **Source**: https://reactome.org/license (via Path 1), https://reactome.org/download-data (via Path 2)
- **Quote**: License page states all data is CC0. Download page for Functional Interaction network files notes "(FIs from KEGG are not included any more)" for version 2024+.
- **Reasoning**: All data is under a single license (CC0), so differentiation is trivially satisfied. The previous evaluation flagged KEGG gene and pathway annotations in the FI Network as carrying a separate redistribution restriction from Pathway Solutions, Inc. This restriction is no longer present on the license page, and the download page confirms KEGG FIs have been removed from the FI network as of version 2024. No Pathway Solutions language appears anywhere on the current site.

### C.1 — Reasonable good-faith location to access data

- **Verdict**: pass
- **Source**: https://reactome.org/download-data (via Path 2)
- **Quote**: The download page provides direct download links for database dumps (Graph Database, MySQL), identifier mappings, pathway data, SBML/BioPAX/SBGN exports, protein interaction data, FI network files, and gene sets.
- **Reasoning**: A single page at a clearly labeled "Download" link from the main navigation provides access to all major data groupings via direct HTTP download links.

### C.2 — Reasonable and transparent access method

- **Verdict**: pass
- **Source**: https://reactome.org/download-data (via Path 2), https://reactome.org/ContentService (via Path 3)
- **Quote**: Download page provides unprotected HTTPS download links. Content Service API is accessible without authentication.
- **Reasoning**: Data files are available via unprotected HTTPS downloads — no API key, registration, or access request is needed. The Content Service API is also openly accessible.

### D.1 — Restrictions on kinds of (re)use

- **Verdict**: pass (full star)
- **Source**: https://reactome.org/license (via Path 1)
- **Quote**: "Users may copy, modify, and distribute these data, even for commercial purposes, without requiring permission."
- **Reasoning**: CC0 places no restrictions on kinds of reuse. All types of downstream reuse (copying, modifying, building upon, redistributing, commercial use) are permitted.

#### D.1.1 / D.1.2 — Not triggered

- **Reasoning**: Since D.1 awards a full star (no restrictions on reuse), the sub-criteria are not triggered.

### E.1 — Restrictions on who can (re)use the data

- **Verdict**: pass (full star)
- **Source**: https://reactome.org/license (via Path 1)
- **Quote**: CC0 — no restrictions on person groups or agents.
- **Reasoning**: CC0 does not distinguish between academic/commercial, personal/institutional, or any other person groups. All agents may reuse the data without restriction.

#### E.1.1 / E.1.2 — Not triggered

- **Reasoning**: Since E.1 awards a full star, the sub-criteria are not triggered.

## Summary

| Criterion | Verdict | Stars |
|-----------|---------|-------|
| A.1 (single license) | pass | ½ |
| A.2 (standard license) | pass (CC0 as CC instrument) | +½ |
| B.1 (no negotiation) | pass | ½ |
| B.2 (scope complete) | pass | +½ |
| C.1 (data accessible) | pass | ½ |
| C.2 (transparent access) | pass | +½ |
| D.1 (reuse unrestricted) | pass | 1 |
| E.1 (users unrestricted) | pass | 1 |
| **Total** | | **5 stars** |
