# Evaluation Trace: chembl

- **Resource**: ChEMBL
- **Root URL**: https://www.ebi.ac.uk/chembl/
- **Evaluated**: 2026-03-13
- **Evaluator**: Claude (automated)

## Navigation Paths

Pages visited starting from the resource root. Each step shows the link text found, its location on the page, and where it leads.

Note: The ChEMBL main site is a Vue.js single-page application (SPA). The root page renders primarily CSS/JS framework code when fetched directly; meaningful navigation content is not available via static HTML fetch. Documentation and about pages redirect to GitBook.

### Path 1: Root → About Page (via GitBook documentation)

1. **https://www.ebi.ac.uk/chembl/**
   - The SPA page did not render static navigation links. However, the site's documentation is hosted at GitBook.
   → https://chembl.gitbook.io/chembl-interface-documentation
2. **https://chembl.gitbook.io/chembl-interface-documentation**
   - Found link: "About" (sidebar navigation)
   → https://chembl.gitbook.io/chembl-interface-documentation/about

### Path 2: About Page → License (CC-BY-SA-3.0)

1. **https://chembl.gitbook.io/chembl-interface-documentation/about**
   - Found text: "Access to the web interface of ChEMBL is made under the EBI's Terms of Use."
   - Found link: "EBI's Terms of Use" (main content, inline link)
   → https://www.ebi.ac.uk/Information/termsofuse.html
   - Found text: "Creative Commons Attribution-Share Alike 3.0 Unported License"
   - Found link: "Creative Commons Attribution-Share Alike 3.0 Unported License" (main content, inline link)
   → https://creativecommons.org/licenses/by-sa/3.0

### Path 3: Root → Downloads Page (via GitBook redirect)

1. **https://www.ebi.ac.uk/chembl/**
   - Downloads URL from site navigation (SPA)
   → https://www.ebi.ac.uk/chembl/downloads
2. **https://www.ebi.ac.uk/chembl/downloads**
   - HTTP 302 redirect
   → https://chembl.gitbook.io/chembl-interface-documentation/downloads

### Path 4: Downloads Page → FTP Latest Release Directory

1. **https://chembl.gitbook.io/chembl-interface-documentation/downloads**
   - Found links to EBI FTP repository for ChEMBL database files (SQLite, MySQL, PostgreSQL, SDF, FASTA)
   → https://ftp.ebi.ac.uk/pub/databases/chembl/ChEMBLdb/latest/

### Path 5: FTP Directory → LICENSE file

1. **https://ftp.ebi.ac.uk/pub/databases/chembl/ChEMBLdb/latest/**
   - Found file: "LICENSE" (21K, dated 2025-09-19)
   → https://ftp.ebi.ac.uk/pub/databases/chembl/ChEMBLdb/latest/LICENSE

### Path 6: FTP Directory → REQUIRED.ATTRIBUTION file

1. **https://ftp.ebi.ac.uk/pub/databases/chembl/ChEMBLdb/latest/**
   - Found file: "REQUIRED.ATTRIBUTION" (733 bytes, dated 2025-09-19)
   → https://ftp.ebi.ac.uk/pub/databases/chembl/ChEMBLdb/latest/REQUIRED.ATTRIBUTION

### Path 7: FTP Directory → README file

1. **https://ftp.ebi.ac.uk/pub/databases/chembl/ChEMBLdb/latest/**
   - Found file: "README" (3.5K, dated 2025-09-19)
   → https://ftp.ebi.ac.uk/pub/databases/chembl/ChEMBLdb/latest/README

### Path 8: Root → Web Services (via GitBook redirect)

1. **https://www.ebi.ac.uk/chembl/**
   - Web services URL from site navigation (SPA)
   → https://www.ebi.ac.uk/chembl/ws
2. **https://www.ebi.ac.uk/chembl/ws**
   - HTTP 302 redirect
   → https://chembl.gitbook.io/chembl-interface-documentation/web-services

### Path 9: About Page → EBI Terms of Use

1. **https://chembl.gitbook.io/chembl-interface-documentation/about** (via Path 1)
   - Found link: "EBI's Terms of Use" (main content)
   → https://www.ebi.ac.uk/Information/termsofuse.html

## Criteria Evaluation

### A.1 — Does the resource have a single license?

#### A.1.1 — No conflicting licenses

- **Verdict**: pass
- **Source**: https://chembl.gitbook.io/chembl-interface-documentation/about (via Path 2), https://ftp.ebi.ac.uk/pub/databases/chembl/ChEMBLdb/latest/LICENSE (via Path 5), https://ftp.ebi.ac.uk/pub/databases/chembl/ChEMBLdb/latest/README (via Path 7)
- **Quote**: About page: "Creative Commons Attribution-Share Alike 3.0 Unported License". README: "distributed under the Creative Commons Attribution-ShareAlike 3.0 Unported license." LICENSE file: full text of CC-BY-SA-3.0.
- **Reasoning**: All sources consistently identify CC-BY-SA-3.0 as the data license. The about page states it, the FTP LICENSE file contains the full CC-BY-SA-3.0 text, and the README confirms it. The EBI Terms of Use page states EMBL-EBI imposes "no additional restriction on the use of the contributed data than those provided by the data owner," meaning the EBI terms defer to the CC-BY-SA-3.0 license for data reuse rather than conflicting with it. No conflicting licenses found.

#### A.1.2 — License is present

- **Verdict**: pass
- **Source**: https://chembl.gitbook.io/chembl-interface-documentation/about (via Path 2)
- **Quote**: "Creative Commons Attribution-Share Alike 3.0 Unported License"
- **Reasoning**: The license is discoverable from the about page of the ChEMBL documentation (reachable from the root site) and is also present as a LICENSE file in the FTP download directory. A single license (CC-BY-SA-3.0) is found.

### A.2 — Does the resource use a standard license?

#### A.2.1 — Public domain declaration

- **Verdict**: not-applicable
- **Source**: https://chembl.gitbook.io/chembl-interface-documentation/about (via Path 2)
- **Reasoning**: CC-BY-SA-3.0 is not a public domain declaration. This sub-criterion does not apply.

#### A.2.2 — Custom or non-standard license

- **Verdict**: pass (CC-BY-SA-3.0 is a standard Creative Commons license)
- **Source**: https://chembl.gitbook.io/chembl-interface-documentation/about (via Path 2)
- **Reasoning**: CC-BY-SA-3.0 is listed in the SPDX license list and is a Creative Commons license. Per the criteria, "Any Creative Commons license" qualifies as a standard license. Half star awarded.

### B.1 — License requires no further negotiation

- **Verdict**: pass
- **Source**: https://ftp.ebi.ac.uk/pub/databases/chembl/ChEMBLdb/latest/LICENSE (via Path 5), https://ftp.ebi.ac.uk/pub/databases/chembl/ChEMBLdb/latest/REQUIRED.ATTRIBUTION (via Path 6)
- **Quote**: REQUIRED.ATTRIBUTION: "The data in ChEMBL is covered by the licence in the file LICENSE. Under the -BY clause, we request attribution for subsequent use of ChEMBL."
- **Reasoning**: CC-BY-SA-3.0 grants reuse rights automatically upon compliance with attribution and share-alike conditions. No language requires contacting a tech transfer office, signing agreements, or any other human/legal negotiation for data reuse. The REQUIRED.ATTRIBUTION file only requests citation (consistent with the BY clause) and does not impose additional negotiation requirements.

### B.2 — Is the scoping of the license complete?

#### B.2.1 — Comprehensive: does the license apply to all of the data?

- **Verdict**: pass
- **Source**: https://ftp.ebi.ac.uk/pub/databases/chembl/ChEMBLdb/latest/README (via Path 7), https://chembl.gitbook.io/chembl-interface-documentation/about (via Path 2)
- **Quote**: README: "distributed under the Creative Commons Attribution-ShareAlike 3.0 Unported license."
- **Reasoning**: The README and about page both state the CC-BY-SA-3.0 license applies to ChEMBL data without exceptions, caveats, or "except where noted" language. The license applies comprehensively to the dataset.

#### B.2.2 — Differentiated: can obtain a singly-licensed slice

- **Verdict**: pass
- **Source**: https://chembl.gitbook.io/chembl-interface-documentation/downloads (via Path 4)
- **Reasoning**: All ChEMBL data is under a single license (CC-BY-SA-3.0), so differentiation is trivially satisfied. Any slice of the data is under the same license. The downloads page provides multiple data formats (SQLite, MySQL, PostgreSQL, SDF, FASTA) all under the same license.

### C.1 — Reasonable good-faith location to access data

- **Verdict**: pass
- **Source**: https://chembl.gitbook.io/chembl-interface-documentation/downloads (via Path 4), https://ftp.ebi.ac.uk/pub/databases/chembl/ChEMBLdb/latest/ (via Path 5)
- **Quote**: Downloads page lists ChEMBLdb downloads in SQLite, MySQL, PostgreSQL formats plus SDF and FASTA files, all via EBI FTP links.
- **Reasoning**: The downloads page (reachable from the main site navigation) provides a clear listing of all data files with direct FTP/HTTP download links. The FTP directory contains complete database dumps in multiple formats. This constitutes a reasonable good-faith location for data access.

### C.2 — Reasonable and transparent access method

- **Verdict**: pass
- **Source**: https://ftp.ebi.ac.uk/pub/databases/chembl/ChEMBLdb/latest/ (via Path 5), https://chembl.gitbook.io/chembl-interface-documentation/web-services (via Path 8)
- **Quote**: Web services page lists interactive API documentation at https://www.ebi.ac.uk/chembl/api/data/docs with no mention of API key requirements or registration.
- **Reasoning**: Data files are available via unprotected HTTPS/FTP downloads from the EBI FTP server. No API key, registration, or access request is needed for downloads. The web services API documentation page does not mention any API key or registration requirements. This constitutes a reasonable and transparent access method.

### D.1 — Restrictions on kinds of (re)use

- **Verdict**: fail (not full star)
- **Source**: https://ftp.ebi.ac.uk/pub/databases/chembl/ChEMBLdb/latest/LICENSE (via Path 5)
- **Reasoning**: CC-BY-SA-3.0 includes a ShareAlike clause requiring derivative works to be distributed under the same or a compatible license. This restricts certain kinds of reuse — specifically, remixing with data under incompatible licenses and redistributing modified works under a different license. This does not meet the criteria for a full star ("all types of reuse are allowed without negotiation, allowing for 'reasonable' attribution and redistribution restrictions").

#### D.1.1 — Half star for research/non-commercial reuse

- **Verdict**: fail
- **Source**: https://ftp.ebi.ac.uk/pub/databases/chembl/ChEMBLdb/latest/LICENSE (via Path 5)
- **Reasoning**: The D.1.1 criterion asks whether individuals in "research" or "non-commercial" contexts could work with the data and redistribute results "without requiring the remixed data to have a specific license." The ShareAlike clause of CC-BY-SA-3.0 explicitly requires derivative works to carry the same or compatible license, regardless of whether the use is research or non-commercial. This fails D.1.1.

#### D.1.2 — No stars

- **Verdict**: fail (0 stars for D)
- **Source**: https://ftp.ebi.ac.uk/pub/databases/chembl/ChEMBLdb/latest/LICENSE (via Path 5)
- **Reasoning**: Since D.1 and D.1.1 both fail, D.1.2 applies. The SA clause prevents modification and redistribution with data from different license types. Zero stars for criterion D.

### E.1 — Restrictions on who can (re)use the data

- **Verdict**: fail (not full star)
- **Source**: https://ftp.ebi.ac.uk/pub/databases/chembl/ChEMBLdb/latest/LICENSE (via Path 5)
- **Reasoning**: While CC-BY-SA-3.0 does not explicitly distinguish between person groups (academic/commercial, etc.), the criteria for E.1 full star references "allowing for 'reasonable' attribution and redistribution restrictions (e.g. CC BY 4.0 or a similarly permissive license)." CC-BY-SA is copyleft, not permissive, and the SA clause effectively restricts all parties equally from freely redistributing remixed data.

#### E.1.1 — Half star for research/academic users

- **Verdict**: fail
- **Source**: https://ftp.ebi.ac.uk/pub/databases/chembl/ChEMBLdb/latest/LICENSE (via Path 5)
- **Reasoning**: The E.1.1 criterion asks the same question as D.1.1 — whether individuals in research/non-commercial contexts could redistribute results "without requiring the remixed data to have a specific license." The SA clause requires a specific license on remixed data, so this fails for all parties including researchers. Zero stars for criterion E.

#### E.1.2 — No stars

- **Verdict**: fail (0 stars for E)
- **Source**: https://ftp.ebi.ac.uk/pub/databases/chembl/ChEMBLdb/latest/LICENSE (via Path 5)
- **Reasoning**: Since E.1 and E.1.1 both fail, E.1.2 applies. The SA clause prevents all parties from reusing the data as described in D.1.2.

## Comparison with Existing YAML

The existing YAML evaluation (`data-sources/chembl.yaml`, last curated 2017-12-03) records:

| Field | YAML Value | Current Finding | Match? |
|-------|-----------|----------------|--------|
| license | CC-BY-SA-3.0 | CC-BY-SA-3.0 | Yes |
| license-type | copyleft | copyleft | Yes |
| license-link | ftp://ftp.ebi.ac.uk/pub/databases/chembl/ChEMBLdb/releases/chembl_23/LICENSE | Current latest: https://ftp.ebi.ac.uk/pub/databases/chembl/ChEMBLdb/latest/LICENSE (same license, updated release) | Minor update |
| data-access (download) | https://www.ebi.ac.uk/chembl/downloads | Now redirects (302) to https://chembl.gitbook.io/chembl-interface-documentation/downloads | Still functional via redirect |
| data-access (api) | https://www.ebi.ac.uk/chembl/ws | Now redirects (302) to https://chembl.gitbook.io/chembl-interface-documentation/web-services | Still functional via redirect |
| license-issues D.1.2 | CC SA prevents some types of reuse | Confirmed | Yes |
| license-issues E.1.2 | CC SA prevents all parties from reusing | Confirmed | Yes |
| license-commentary | No centralized licensing/terms on main site; FTP directories contain CC SA 3.0 terms | The about page on GitBook now states CC-BY-SA-3.0 explicitly | Slight improvement |

### Notable differences:
1. **License link**: The YAML references chembl_23 (release from 2017). The current latest release is chembl_36 (July 2025). The license remains CC-BY-SA-3.0 in the latest release.
2. **Documentation moved to GitBook**: The about page, downloads, and web services documentation have moved from the main ChEMBL SPA to GitBook (chembl.gitbook.io). The main site URLs redirect appropriately.
3. **License now stated on about page**: The existing commentary noted "no centralized licensing/terms information on the main site." The GitBook about page now explicitly states: "Creative Commons Attribution-Share Alike 3.0 Unported License" with a link to the CC license page. This is an improvement in discoverability.
4. **FTP protocol**: The YAML license-link uses `ftp://` protocol; current FTP server also supports `https://`.
5. **All substantive scoring is unchanged**: The license (CC-BY-SA-3.0), license type (copyleft), and all criteria verdicts remain the same.

## Summary

| Criterion | Verdict | Stars |
|-----------|---------|-------|
| A.1 (single license) | pass | 1/2 |
| A.2 (standard license) | pass | +1/2 |
| B.1 (no negotiation) | pass | 1/2 |
| B.2 (scope complete) | pass | +1/2 |
| C.1 (data accessible) | pass | 1/2 |
| C.2 (transparent access) | pass | +1/2 |
| D.1 (reuse unrestricted) | fail | 0 |
| D.1.1 (research/non-commercial reuse) | fail | 0 |
| D.1.2 (restricted reuse) | fail | 0 |
| E.1 (users unrestricted) | fail | 0 |
| E.1.1 (research/academic users) | fail | 0 |
| E.1.2 (restricted users) | fail | 0 |
| **Total** | | **3 stars** |
