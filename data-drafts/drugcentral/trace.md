# Evaluation Trace: drugcentral

- **Resource**: DrugCentral
- **Root URL**: http://drugcentral.org
- **Evaluated**: 2026-03-13
- **Evaluator**: Claude (automated cross-check)

## Navigation Paths

Pages visited starting from the resource root. Each step shows the link text found, its location on the page, and where it leads.

### Path 1: Root → License/Privacy Page

1. **https://drugcentral.org**
   - Found link: "License" (footer)
   → https://drugcentral.org/privacy

### Path 2: Root → Download Page

1. **https://drugcentral.org**
   - Found link: "Download" (top navigation bar)
   → https://drugcentral.org/download

### Path 3: Root → About Page

1. **https://drugcentral.org**
   - Found link: "About" (top navigation bar)
   → https://drugcentral.org/about

### Path 4: Root → Smart API Page

1. **https://drugcentral.org**
   - Found link: "Smart API" (top navigation bar)
   → https://drugcentral.org/OpenAPI

### Path 5: Root → FAQ/Help Page

1. **https://drugcentral.org**
   - Found link: "FAQ" (top navigation bar)
   → https://drugcentral.org/help

## Criteria Evaluation

### A.1 — Does the resource have a single license?

#### A.1.1 — No conflicting licenses

- **Verdict**: pass
- **Source**: https://drugcentral.org/privacy (via Path 1)
- **Quote**: "DrugCentral is available under Creative Commons license, download and use of this resource evidences your agreement to all the terms and conditions of license."
- **Reasoning**: The license page identifies a single license: Creative Commons Attribution-ShareAlike 4.0 (CC-BY-SA-4.0), with a link to the full legal code at https://creativecommons.org/licenses/by-sa/4.0/legalcode. No other conflicting licenses were found on the About, Download, FAQ, or API pages. A single license applies.

#### A.1.2 — License is present

- **Verdict**: pass
- **Source**: https://drugcentral.org/privacy (via Path 1)
- **Quote**: (see A.1.1 above)
- **Reasoning**: The license page is discoverable from the root page via the "License" link in the footer. License information is clearly present.

### A.2 — Does the resource use a standard license?

#### A.2.1 — Public domain declaration

- **Verdict**: not-applicable
- **Source**: https://drugcentral.org/privacy (via Path 1)
- **Reasoning**: CC-BY-SA-4.0 is not a public domain declaration. This sub-criterion does not apply.

#### A.2.2 — Custom or non-standard license

- **Verdict**: pass (CC-BY-SA-4.0 is a standard Creative Commons license)
- **Source**: https://drugcentral.org/privacy (via Path 1)
- **Reasoning**: CC-BY-SA-4.0 is a standard Creative Commons license listed in the SPDX license list. It is not custom or non-standard. Half star awarded.

### B.1 — License requires no further negotiation

- **Verdict**: pass
- **Source**: https://drugcentral.org/privacy (via Path 1)
- **Quote**: "DrugCentral is available under Creative Commons license, download and use of this resource evidences your agreement to all the terms and conditions of license."
- **Reasoning**: CC-BY-SA-4.0 defines all terms of reuse upfront. Use constitutes agreement; no negotiation, contact with a tech transfer office, or signing of agreements is required.

### B.2 — Is the scoping of the license complete?

#### B.2.1 — Comprehensive: does the license apply to all of the data?

- **Verdict**: pass
- **Source**: https://drugcentral.org/privacy (via Path 1)
- **Quote**: "DrugCentral is available under Creative Commons license"
- **Reasoning**: The license statement refers to "DrugCentral" as a whole without exceptions, caveats, or "except where noted" language. There is no language on the download page or elsewhere carving out portions of the data under different terms.

#### B.2.2 — Differentiated: can obtain a singly-licensed slice

- **Verdict**: pass
- **Source**: https://drugcentral.org/privacy (via Path 1), https://drugcentral.org/download (via Path 2)
- **Reasoning**: Since all data is under a single license (CC-BY-SA-4.0), differentiation is trivially satisfied. Any download from the download page is under CC-BY-SA-4.0.

### C.1 — Reasonable good-faith location to access data

- **Verdict**: pass
- **Source**: https://drugcentral.org/download (via Path 2)
- **Quote**: The download page provides a PostgreSQL database dump, drug-target interaction TSV files, FDA/EMA/PMDA approval CSV files, chemical structure SDF files, and SMILES/InChI files. Public database access is also available at drugcentral:unmtid-dbs.net:5433.
- **Reasoning**: A clearly labeled "Download" link in the main navigation leads to a page with multiple data download options covering all major data groupings.

### C.2 — Reasonable and transparent access method

- **Verdict**: pass
- **Source**: https://drugcentral.org/download (via Path 2), https://drugcentral.org/OpenAPI (via Path 4)
- **Reasoning**: Data files are available via direct HTTP downloads without registration or API keys. A public PostgreSQL database connection is provided with published credentials (username: "drugman", password: "dosage"). The Smart API is also accessible without authentication. This constitutes a reasonable and transparent access method.

### D.1 — Restrictions on kinds of (re)use

- **Verdict**: D.1.1 (half star)
- **Source**: https://drugcentral.org/privacy (via Path 1)
- **Reasoning**: CC-BY-SA-4.0 allows all types of reuse (copying, modifying, building upon, redistributing, commercial use) but requires that derivative works be distributed under the same or compatible license (ShareAlike condition). This copyleft requirement means there are restrictions on how remixed data can be licensed — specifically, redistributed derivatives must carry a compatible license. Per the criteria, D.1 asks whether "all types of reuse are allowed without negotiation, allowing for 'reasonable' attribution and redistribution restrictions." The ShareAlike clause goes beyond simple attribution; it restricts the license under which derivatives can be released. However, a non-legal professional would reasonably interpret CC-BY-SA-4.0 as allowing research and non-commercial users to work with and redistribute the data. This falls under D.1.1 (half star) rather than D.1 (full star), because the copyleft requirement restricts mixing with incompatibly-licensed data.

#### D.1.2 — Not triggered

- **Reasoning**: D.1.1 applies (half star), so D.1.2 (no stars) is not triggered.

### E.1 — Restrictions on who can (re)use the data

- **Verdict**: E.1 (full star) — but see note below
- **Source**: https://drugcentral.org/privacy (via Path 1)
- **Reasoning**: CC-BY-SA-4.0 does not distinguish between academic/commercial, personal/institutional, or any other person groups. All agents may reuse the data. The ShareAlike condition restricts how derivatives are licensed, not who can use the data. However, the existing YAML scores this at E.1.2 (no stars) with a comment about copyleft mixing issues. The copyleft restriction is more accurately a restriction on kinds of reuse (D.1) rather than on who can reuse. CC-BY-SA-4.0 does not restrict any class of person or agent from using the data.

#### E.1.1 / E.1.2 — Not triggered

- **Reasoning**: CC-BY-SA-4.0 places no restrictions on who can use the data. E.1 awards a full star.

## Differences from Existing YAML

The existing YAML (`data-sources/drugcentral.yaml`) was last curated 2017-12-03. Key findings from this cross-check:

1. **License (CC-BY-SA-4.0)**: Confirmed. The license page still states CC-BY-SA-4.0 with a link to the Creative Commons legal code. **No change.**

2. **License link**: The YAML lists `http://drugcentral.org/privacy`. The page is accessible at `https://drugcentral.org/privacy`. The content is the same. **Minor: HTTP vs HTTPS, but functionally equivalent.**

3. **License type (copyleft)**: Confirmed. CC-BY-SA-4.0 is correctly classified as copyleft. **No change.**

4. **license-issues D.1.2**: The existing YAML cites D.1.2 (no stars for restrictive). However, CC-BY-SA-4.0 is a copyleft license, not a restrictive license. Per the criteria, D.1.1 (half star) is more appropriate: a non-legal professional would interpret CC-BY-SA-4.0 as allowing research/non-commercial users to work with, modify, and redistribute the data, even though the ShareAlike condition requires compatible licensing for derivatives. **Potential discrepancy: D.1.2 in YAML vs D.1.1 from this evaluation.** Note: This is a judgment call about whether copyleft's remixing restriction rises to the level of D.1.2 or D.1.1.

5. **license-issues E.1.2**: The existing YAML cites E.1.2 (no stars for who can reuse). CC-BY-SA-4.0 does not restrict any category of person or agent — it restricts how derivatives are licensed, which is a kind-of-reuse restriction (D), not a who-can-reuse restriction (E). **Potential discrepancy: E.1.2 in YAML vs E.1 (full star) from this evaluation.**

6. **Description**: Still accurate. The About page confirms DrugCentral provides information on active pharmaceutical ingredients, drug modes of action, indications, and pharmacologic actions, monitoring FDA, EMA, and PMDA.

7. **Contacts**: The About page lists the development team and mentions contact via "Dr. Tudor Oprea or Jayme Holmes" on the download page. The YAML lists "Oleg Ursu or Jayme Holmes." **Minor discrepancy in contact name: Oleg Ursu vs Tudor Oprea.**

8. **Commentary about upstream licenses**: The YAML notes "there seems to be no mention of upstream licenses or terms." This remains true — no upstream license mentions were found on any page.

## Summary

| Criterion | Verdict | Stars |
|-----------|---------|-------|
| A.1 (single license) | pass | 1/2 |
| A.2 (standard license) | pass | +1/2 |
| B.1 (no negotiation) | pass | 1/2 |
| B.2 (scope complete) | pass | +1/2 |
| C.1 (data accessible) | pass | 1/2 |
| C.2 (transparent access) | pass | +1/2 |
| D.1 (reuse) | D.1.1 — copyleft allows reuse but restricts derivative licensing | 1/2 |
| E.1 (users unrestricted) | pass — no person-group restrictions | 1 |
| **Total** | | **4.5 stars** |

**Note**: The existing YAML implies a lower score at D and E due to license-issues citing D.1.2 and E.1.2. This cross-check finds that CC-BY-SA-4.0 warrants D.1.1 (half star, not zero) and E.1 (full star, not zero), which would yield 4.5 stars total versus an implied 3 stars from the existing YAML scoring.
