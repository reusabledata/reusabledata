# Evaluation Trace: bgee

- **Resource**: Bgee
- **Root URL**: https://www.bgee.org
- **Evaluated**: 2026-03-13
- **Evaluator**: Claude (automated)

## Navigation Paths

Pages visited starting from the resource root. Each step shows the link text found, its location on the page, and where it leads.

### Path 1: Root → About Page

1. **https://www.bgee.org**
   - Found link: "About Bgee" (top navigation bar, under information/help section)
   → https://www.bgee.org/about/

### Path 2: Root → Download Gene Expression Calls

1. **https://www.bgee.org**
   - Found link: "Download gene expression calls" (top navigation bar, under download section; also as "Expression calls download files" card in main content)
   → https://www.bgee.org/download/gene-expression-calls

### Path 3: Root → Download Processed Expression Values

1. **https://www.bgee.org**
   - Found link: "Download processed expression values" (top navigation bar, under download section; also as "Expression values download files" card in main content)
   → https://www.bgee.org/download/processed-expression-values

### Path 4: Root → Data Dumps

1. **https://www.bgee.org**
   - Found link: "Data dumps" (top navigation bar, under download section)
   → https://www.bgee.org/download/data-dumps

### Path 5: Root → Sources

1. **https://www.bgee.org**
   - Found link: "Bgee sources" (top navigation bar, under information/help section)
   → https://www.bgee.org/about/sources

### Path 6: Root → Privacy Notice

1. **https://www.bgee.org**
   - Found link: "Bgee privacy notice" (top navigation bar, under information/help section)
   → https://www.bgee.org/about/privacy-policy

## Criteria Evaluation

### A.1 — Does the resource have a single license?

#### A.1.1 — No conflicting licenses

- **Verdict**: pass
- **Source**: https://www.bgee.org/about/ (via Path 1), https://www.bgee.org/download/gene-expression-calls (via Path 2), https://www.bgee.org/download/processed-expression-values (via Path 3), https://www.bgee.org/download/data-dumps (via Path 4)
- **Quote**: About page: "To the extent possible under law, Bgee team has waived all copyright and related or neighboring rights to Bgee project. This work is published under the Creative Commons Zero license (CC0) from Switzerland." Download pages: "All data are available under the Creative Commons Zero license (CC0)."
- **Reasoning**: The about page and all three download pages consistently state CC0. The about page notes "Any third party material on this site is the property of its original copyright holders" but this refers to animal photos on the homepage, not to the data. No conflicting data licenses were found.

#### A.1.2 — License is present

- **Verdict**: pass
- **Source**: https://www.bgee.org/about/ (via Path 1)
- **Quote**: (see A.1.1 above)
- **Reasoning**: The license is clearly stated on the about page and reinforced on every download page. It is discoverable from the root via the "About Bgee" navigation link.

### A.2 — Does the resource use a standard license?

#### A.2.1 — Public domain declaration

- **Verdict**: not-applicable
- **Source**: https://www.bgee.org/about/ (via Path 1)
- **Quote**: "Creative Commons Zero license (CC0)"
- **Reasoning**: CC0 is the Creative Commons public domain dedication tool, but it is a standardized legal instrument — not a bare "public domain" declaration. The criteria list "Any Creative Commons license" as a standard license. CC0 is treated as a standard Creative Commons instrument, so the public domain declaration penalty does not apply.

#### A.2.2 — Custom or non-standard license

- **Verdict**: pass (CC0 is a standard Creative Commons instrument)
- **Source**: https://www.bgee.org/about/ (via Path 1)
- **Reasoning**: CC0-1.0 is listed in the SPDX license list and is a Creative Commons instrument. It is not custom or non-standard.

### B.1 — License requires no further negotiation

- **Verdict**: pass
- **Source**: https://www.bgee.org/about/ (via Path 1)
- **Quote**: "To the extent possible under law, Bgee team has waived all copyright and related or neighboring rights to Bgee project."
- **Reasoning**: CC0 imposes no conditions on reuse. No language on any page requires contacting a tech transfer office, signing agreements, or any other negotiation for data reuse. The citation request is explicitly framed as courtesy, not a legal requirement: "Although CC0 doesn't legally require users of the data to cite the source, if you intend to use data from Bgee, it would be nice to cite us."

### B.2 — Is the scoping of the license complete?

#### B.2.1 — Comprehensive: does the license apply to all of the data?

- **Verdict**: pass
- **Source**: https://www.bgee.org/download/gene-expression-calls (via Path 2), https://www.bgee.org/download/processed-expression-values (via Path 3), https://www.bgee.org/download/data-dumps (via Path 4)
- **Quote**: "All data are available under the Creative Commons Zero license (CC0)." (present on all three download pages)
- **Reasoning**: The word "all" is used without exceptions or caveats. The about page's CC0 statement covers the entire "Bgee project." No page was found that carves out exceptions for specific data subsets.

#### B.2.2 — Differentiated: can obtain a singly-licensed slice

- **Verdict**: pass
- **Source**: https://www.bgee.org/download/gene-expression-calls (via Path 2), https://www.bgee.org/download/data-dumps (via Path 4)
- **Quote**: "All data are available under the Creative Commons Zero license (CC0)."
- **Reasoning**: Since all data is under a single license (CC0), differentiation is trivially satisfied — any slice of the data is under CC0.

### C.1 — Reasonable good-faith location to access data

- **Verdict**: pass
- **Source**: https://www.bgee.org/download/gene-expression-calls (via Path 2), https://www.bgee.org/download/processed-expression-values (via Path 3), https://www.bgee.org/download/data-dumps (via Path 4)
- **Quote**: Download pages provide direct download links for gene expression calls, processed expression values, and database dumps (MySQL and RDF).
- **Reasoning**: Three clearly labeled download pages are accessible from the root navigation. The data dumps page provides MySQL and RDF bulk downloads, which serve as good-faith bulk access points.

### C.2 — Reasonable and transparent access method

- **Verdict**: pass
- **Source**: https://www.bgee.org/download/data-dumps (via Path 4), https://www.bgee.org/download/gene-expression-calls (via Path 2)
- **Quote**: Download pages provide unprotected HTTPS download links. An API is also available at /doc-api/.
- **Reasoning**: Data files are available via direct HTTPS downloads. No API key, registration, or access request is needed. The data dumps (MySQL, RDF) provide comprehensive bulk access. This constitutes a reasonable and transparent access method.

### D.1 — Restrictions on kinds of (re)use

- **Verdict**: pass (full star)
- **Source**: https://www.bgee.org/about/ (via Path 1)
- **Quote**: "To the extent possible under law, Bgee team has waived all copyright and related or neighboring rights to Bgee project. This work is published under the Creative Commons Zero license (CC0)."
- **Reasoning**: CC0 places no restrictions on kinds of reuse. All types of downstream reuse (copying, modifying, redistributing, commercial use) are permitted.

#### D.1.1 / D.1.2 — Not triggered

- **Reasoning**: Since D.1 awards a full star (no restrictions on reuse), the half-star (D.1.1) and no-star (D.1.2) sub-criteria are not triggered.

### E.1 — Restrictions on who can (re)use the data

- **Verdict**: pass (full star)
- **Source**: https://www.bgee.org/about/ (via Path 1)
- **Quote**: CC0 — no restrictions on person groups or agents.
- **Reasoning**: CC0 does not distinguish between academic/commercial, personal/institutional, or any other person groups. All agents may reuse the data without restriction.

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

## Comparison with Existing YAML

The existing YAML evaluation (`data-sources/bgee.yaml`) records:
- **license**: CC0-1.0
- **license-type**: permissive
- **license-issues**: [] (none)

**Findings**: The cross-check confirms all aspects of the existing evaluation:

1. **License (CC0-1.0)**: Confirmed. The about page and all three download pages consistently state CC0.
2. **License-type (permissive)**: Confirmed. Correct per the license-type mapping.
3. **License-issues (none)**: Confirmed. No conflicting licenses or issues found.
4. **Data-access locations**: Confirmed. All three download URLs in the YAML are still valid and accessible.
5. **Commentary items**: Confirmed. The existing commentary accurately describes the current state:
   - All three download pages do state "All data are available under the Creative Commons Zero license (CC0)."
   - The about page does contain affirming CC0 text.
   - The sources page (/about/sources) exists but does not introduce licensing conflicts.
6. **Score**: 5 stars — consistent with CC0-1.0 and no issues found.

**No discrepancies were found between the existing YAML and the current website state.**
