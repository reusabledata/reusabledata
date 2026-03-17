# Evaluation Trace: uniprotkb

- **Resource**: UniProt
- **Root URL**: http://www.uniprot.org
- **Evaluated**: 2026-03-13
- **Evaluator**: Claude (automated)

## Navigation Paths

Pages visited starting from the resource root. Each step shows the link text found, its location on the page, and where it leads.

Note: The UniProt website (www.uniprot.org) is a single-page application (SPA) that requires JavaScript to render navigation elements. The root page and all subpages (e.g. /help/license, /help/about, /downloads) return only a JavaScript bootstrap stub when fetched without a browser. Content was therefore retrieved via the UniProt REST API (rest.uniprot.org/help/{page-id}), which serves the same help page content as JSON. The SPA renders a top navigation bar with links including "Help" (with subpages for license, about, downloads, etc.), but these links cannot be enumerated from a static fetch.

### Path 1: Root → License Page

1. **https://www.uniprot.org**
   - Site is a JavaScript SPA; navigation bar (rendered client-side) includes help section links.
   - Found link: "License & disclaimer" (under Help section of site navigation)
   → https://www.uniprot.org/help/license

2. **https://www.uniprot.org/help/license**
   - Content retrieved via REST API equivalent: https://rest.uniprot.org/help/license
   - Page titled "License & disclaimer", last modified 2024-12-18.

### Path 2: Root → About Page

1. **https://www.uniprot.org**
   - Found link: "About" (under Help section of site navigation)
   → https://www.uniprot.org/help/about

2. **https://www.uniprot.org/help/about**
   - Content retrieved via REST API equivalent: https://rest.uniprot.org/help/about
   - Page titled "About UniProt", last modified 2025-11-26.

### Path 3: Root → Downloads Page

1. **https://www.uniprot.org**
   - Found link: "Downloads" (top navigation bar or help section)
   → https://www.uniprot.org/help/downloads

2. **https://www.uniprot.org/help/downloads**
   - Content retrieved via REST API equivalent: https://rest.uniprot.org/help/downloads
   - Page titled "Downloads", last modified 2026-01-30.

### Path 4: Root → Publications / How to Cite

1. **https://www.uniprot.org/help/license** (via Path 1)
   - Found link: "How to cite us" within license page content
   → https://www.uniprot.org/help/publications

## Criteria Evaluation

### A.1 — Does the resource have a single license?

#### A.1.1 — No conflicting licenses

- **Verdict**: pass
- **Source**: https://www.uniprot.org/help/license (via Path 1)
- **Quote**: "We have chosen to apply the Creative Commons Attribution 4.0 International (CC BY 4.0) License to all copyrightable parts of our databases."
- **Reasoning**: The license page states a single license (CC BY 4.0) covering "all copyrightable parts" of the databases. No other licenses are mentioned. No conflicting licenses found.

#### A.1.2 — License is present

- **Verdict**: pass
- **Source**: https://www.uniprot.org/help/license (via Path 1)
- **Quote**: (see A.1.1 above)
- **Reasoning**: The license page is discoverable from the root via the site navigation help section. License information is clearly present and unambiguous.

### A.2 — Does the resource use a standard license?

#### A.2.1 — Public domain declaration

- **Verdict**: not-applicable
- **Source**: https://www.uniprot.org/help/license (via Path 1)
- **Reasoning**: CC BY 4.0 is not a public domain declaration. This sub-criterion does not apply.

#### A.2.2 — Custom or non-standard license

- **Verdict**: pass (CC BY 4.0 is a standard Creative Commons license)
- **Source**: https://www.uniprot.org/help/license (via Path 1)
- **Reasoning**: CC BY 4.0 is a widely used standard license listed in the SPDX license list and is explicitly mentioned in the criteria as a standard license ("Any Creative Commons license"). Half star awarded.

### B.1 — License requires no further negotiation

- **Verdict**: pass
- **Source**: https://www.uniprot.org/help/license (via Path 1)
- **Quote**: "We have chosen to apply the Creative Commons Attribution 4.0 International (CC BY 4.0) License to all copyrightable parts of our databases."
- **Reasoning**: CC BY 4.0 is a well-defined license requiring only attribution. No language on the license page requires contacting a tech transfer office, signing agreements, or any other negotiation for data reuse. The disclaimer states "We make no warranties regarding the correctness of the data" and notes "We cannot provide unrestricted permission regarding the use of the data, as some data may be covered by patents or other rights" — however, this is a standard disclaimer about third-party rights rather than a negotiation requirement imposed by UniProt itself. The CC BY 4.0 terms are clear and require no further human or legal action.

### B.2 — Is the scoping of the license complete?

#### B.2.1 — Comprehensive: does the license apply to all of the data?

- **Verdict**: pass (with note)
- **Source**: https://www.uniprot.org/help/license (via Path 1)
- **Quote**: "We have chosen to apply the Creative Commons Attribution 4.0 International (CC BY 4.0) License to all copyrightable parts of our databases."
- **Reasoning**: The license applies to "all copyrightable parts" of the databases. The phrase "copyrightable parts" could theoretically be read as excluding some content, but this is a standard legal formulation acknowledging that raw facts may not be copyrightable — it is not an "except where noted" carve-out. No portions of the data are identified as being under different terms.

Note: The disclaimer states "some data may be covered by patents or other rights." This is a factual caveat about third-party IP rather than a license scope limitation by UniProt.

#### B.2.2 — Differentiated: can obtain a singly-licensed slice

- **Verdict**: pass
- **Source**: https://www.uniprot.org/help/license (via Path 1), https://www.uniprot.org/help/downloads (via Path 3)
- **Reasoning**: Since all data is under a single license (CC BY 4.0), differentiation is trivially satisfied — any slice is under CC BY 4.0. The downloads page provides direct FTP/HTTP links for individual data categories (UniProtKB, UniRef, UniParc, etc.) without any per-subset licensing caveats.

### C.1 — Reasonable good-faith location to access data

- **Verdict**: pass
- **Source**: https://www.uniprot.org/help/downloads (via Path 3)
- **Quote**: "For downloading complete data sets we recommend using ftp.uniprot.org."
- **Reasoning**: The downloads page provides a comprehensive listing of FTP download links for all major data groupings (UniProtKB Swiss-Prot and TrEMBL in multiple formats, UniRef, UniParc, RDF, embeddings, etc.). Each section has direct download links or parent directory links. This constitutes a reasonable good-faith location for accessing all data.

### C.2 — Reasonable and transparent access method

- **Verdict**: pass
- **Source**: https://www.uniprot.org/help/downloads (via Path 3), https://www.uniprot.org/help/programmatic_access (linked from help section)
- **Reasoning**: Data files are available via unprotected FTP and HTTP/S downloads — no API key, registration, or access request is needed. The REST API and SPARQL endpoint are also openly accessible without authentication. This constitutes a reasonable and transparent access method.

### D.1 — Restrictions on kinds of (re)use

- **Verdict**: pass (full star)
- **Source**: https://www.uniprot.org/help/license (via Path 1)
- **Quote**: CC BY 4.0 allows users to "copy and redistribute the material in any medium or format for any purpose, even commercially" and "remix, transform, and build upon the material for any purpose, even commercially."
- **Reasoning**: CC BY 4.0 places no restrictions on kinds of reuse beyond requiring attribution. All types of downstream reuse (copying, modifying, building upon, redistributing, commercial use) are permitted. The only requirement is attribution ("give appropriate credit"). This satisfies the criteria for a full star: "all types of reuse are allowed without negotiation, allowing for 'reasonable' attribution."

#### D.1.1 / D.1.2 — Not triggered

- **Reasoning**: Since D.1 awards a full star (no restrictions on reuse), the half-star (D.1.1) and no-star (D.1.2) sub-criteria are not triggered.

### E.1 — Restrictions on who can (re)use the data

- **Verdict**: pass (full star)
- **Source**: https://www.uniprot.org/help/license (via Path 1)
- **Reasoning**: CC BY 4.0 does not distinguish between academic/commercial, personal/institutional, or any other person groups. All agents may reuse the data without restriction, subject only to attribution. This satisfies the criteria for a full star.

#### E.1.1 / E.1.2 — Not triggered

- **Reasoning**: Since E.1 awards a full star, the sub-criteria are not triggered.

## Summary

| Criterion | Verdict | Stars |
|-----------|---------|-------|
| A.1 (single license) | pass | 1/2 |
| A.2 (standard license) | pass | +1/2 |
| B.1 (no negotiation) | pass | 1/2 |
| B.2 (scope complete) | pass | +1/2 |
| C.1 (data accessible) | pass | 1/2 |
| C.2 (transparent access) | pass | +1/2 |
| D.1 (reuse unrestricted) | pass | 1 |
| E.1 (users unrestricted) | pass | 1 |
| **Total** | | **5 stars** |

## Comparison with Existing YAML

The existing YAML (`data-sources/uniprot.yaml`) records:
- **license**: CC-BY-4.0 — **Confirmed**. The license page still states CC BY 4.0.
- **license-type**: permissive — **Confirmed**. CC-BY-4.0 maps to permissive per the project's license-type mapping.
- **license-link**: https://www.uniprot.org/help/license — **Confirmed**. This URL still serves the license page (via SPA/REST API).
- **license-commentary**: "We have chosen to apply the Creative Commons Attribution (CC BY 4.0) License to all copyrightable parts of our databases." — **Confirmed**. The current page uses nearly identical wording: "We have chosen to apply the Creative Commons Attribution 4.0 International (CC BY 4.0) License to all copyrightable parts of our databases." The slight difference ("4.0 International" vs just the version) is immaterial.
- **data-access download location**: http://www.uniprot.org/downloads — The downloads page is now at https://www.uniprot.org/help/downloads but the original URL likely redirects within the SPA.
- **last-curated**: 2019-03-01 — This evaluation was last curated over 7 years ago. The license page was last modified 2024-12-18, but the license terms remain the same.
- **provisional**: true — The evaluation is still marked provisional.

### Differences Found

1. **Minor URL update**: The downloads page is listed in the YAML as `http://www.uniprot.org/downloads` but the current canonical location appears to be `https://www.uniprot.org/help/downloads`. The site uses HTTPS and the help-page URL structure.

2. **Disclaimer language**: The license page now includes a disclaimer: "We cannot provide unrestricted permission regarding the use of the data, as some data may be covered by patents or other rights." This caveat about third-party IP was not captured in the existing YAML commentary. It does not affect the evaluation scoring as it is a factual statement about external rights rather than a UniProt-imposed restriction.

3. **Funding information**: The grants field in the YAML is outdated. The current about page lists different/updated grant numbers (e.g. U24HG007822 instead of U41HG007822).

### No scoring discrepancies found. The existing YAML evaluation of 5 stars is consistent with current website content.
