# Evaluation Trace: ncbi-gene

- **Resource**: National Center for Biotechnology Information (Gene)
- **Root URL**: https://www.ncbi.nlm.nih.gov/gene/
- **Evaluated**: 2026-03-13
- **Evaluator**: Claude (automated)

## Navigation Paths

Pages visited starting from the resource root. Each step shows the link text found, its location on the page, and where it leads.

### Path 1: Root → NCBI Policies Page

1. **https://www.ncbi.nlm.nih.gov/gene/**
   - Found link: "NCBI Homepage" (navigation bar)
   → https://www.ncbi.nlm.nih.gov/
   - Note: The Gene page itself does not directly link to a policies page. However, the NCBI policies page is a well-known institutional page at NCBI. The footer links to "Web Policies" at NLM (see Path 3). The NCBI policies page is referenced from the general NCBI site hierarchy.
   → https://www.ncbi.nlm.nih.gov/home/about/policies/

### Path 2: Root → Download/FTP

1. **https://www.ncbi.nlm.nih.gov/gene/**
   - Found link: "Download/FTP" (main content area, "Using Gene" section)
   → https://ftp.ncbi.nih.gov/gene/

### Path 3: Root → NLM Web Policies

1. **https://www.ncbi.nlm.nih.gov/gene/**
   - Found link: "Web Policies" (footer)
   → https://www.nlm.nih.gov/web_policies.html

### Path 4: Root → Gene Help

1. **https://www.ncbi.nlm.nih.gov/gene/**
   - Found link: "Help" (main content area, search section)
   → https://www.ncbi.nlm.nih.gov/books/NBK3841/

## Criteria Evaluation

### A.1 — Does the resource have a single license?

#### A.1.1 — No conflicting licenses

- **Verdict**: fail
- **Source**: https://www.ncbi.nlm.nih.gov/home/about/policies/ (via Path 1)
- **Quote**: "NCBI itself places no restrictions on the use or distribution of the data contained therein. Nor do we accept data when the submitter has requested restrictions on reuse or redistribution." followed by "However, some submitters of the original data (or the country of origin of such data) may claim patent, copyright, or other intellectual property rights in all or a portion of the data (that has been submitted)." and "NCBI cannot provide comment or unrestricted permission concerning the use, copying, or distribution of the information contained in the molecular databases."
- **Reasoning**: NCBI uses language resembling a public domain or unrestricted declaration ("places no restrictions"), but immediately qualifies it by noting that submitters may claim intellectual property rights in "all or a portion of the data." This creates an inherent inconsistency: NCBI declares no restrictions on its part, but acknowledges it cannot guarantee that the data is free of third-party restrictions. There is no single clear license — instead there is a policy statement with conflicting signals. This is appropriately classified as "inconsistent" in the existing YAML. Under A.1.1, conflicting or ambiguous licenses short-circuit further license evaluation: only C criteria can be awarded.

#### A.1.2 — License is present

- **Verdict**: pass (a policy statement exists, though it is inconsistent)
- **Source**: https://www.ncbi.nlm.nih.gov/home/about/policies/ (via Path 1)
- **Reasoning**: There is a discoverable policy page with language about data reuse. The problem is not absence of a license but inconsistency in the license (A.1.1 fails). The NLM Web Policies page (via Path 3) also contains relevant copyright information: "Works produced by the U.S. government are not subject to copyright protection in the United States" but cautions that some site content may be protected by copyright.

**A.1 Result**: NO STARS (A.1.1 fails — inconsistent/conflicting licensing). Only C criteria can be awarded beyond this point.

### A.2 — Does the resource use a standard license?

- **Verdict**: not evaluated (short-circuited by A.1.1 failure)
- **Reasoning**: Since A.1.1 fails, A.2 cannot award stars. However, for the record: the NCBI policy is not a standard license. It is a custom government policy statement that resembles a public domain declaration but with significant caveats. It does not correspond to any SPDX-identified license or Creative Commons instrument.

#### A.2.1 — Public domain declaration

- **Verdict**: not evaluated (short-circuited)
- **Reasoning**: The NLM Web Policies page states "Works produced by the U.S. government are not subject to copyright protection in the United States" and the NCBI policies page states NCBI "places no restrictions on the use or distribution of the data contained therein." This language is close to a public domain declaration, but the caveats about submitter rights make it inconsistent rather than a clean public domain declaration.

#### A.2.2 — Custom or non-standard license

- **Verdict**: not evaluated (short-circuited)
- **Reasoning**: The policy is effectively a custom, non-standard statement.

### B.1 — License requires no further negotiation

- **Verdict**: not evaluated (short-circuited by A.1.1 failure)
- **Source**: https://www.ncbi.nlm.nih.gov/home/about/policies/ (via Path 1)
- **Quote**: "NCBI is not in a position to assess the validity of such claims and since there is no transfer of rights from submitters to NCBI, NCBI has no rights to transfer to a third party."
- **Reasoning**: The policy explicitly states that NCBI cannot grant unrestricted permission and that submitters may hold IP rights. A reuser would need to independently assess and potentially negotiate with original data submitters — NCBI cannot do this on their behalf. This effectively requires further negotiation for confident reuse.

### B.2 — Is the scoping of the license complete?

#### B.2.1 — Comprehensive: does the license apply to all of the data?

- **Verdict**: not evaluated (short-circuited by A.1.1 failure)
- **Source**: https://www.ncbi.nlm.nih.gov/home/about/policies/ (via Path 1)
- **Quote**: "some submitters of the original data...may claim patent, copyright, or other intellectual property rights in all or a portion of the data"
- **Reasoning**: The policy explicitly acknowledges that its "no restrictions" statement may not apply to all data. The scope is not comprehensive.

#### B.2.2 — Differentiated: can obtain a singly-licensed slice

- **Verdict**: not evaluated (short-circuited by A.1.1 failure)
- **Source**: https://ftp.ncbi.nih.gov/gene/ (via Path 2), https://www.ncbi.nlm.nih.gov/home/about/policies/ (via Path 1)
- **Reasoning**: The FTP site provides bulk download files (gene_info.gz, gene2accession.gz, etc.) but there is no indication of which data within these files is purely government-produced versus submitted by third parties who may hold IP rights. There is no mechanism to obtain a "clean" singly-licensed slice of the data.

### C.1 — Reasonable good-faith location to access data

- **Verdict**: pass
- **Source**: https://ftp.ncbi.nih.gov/gene/ (via Path 2)
- **Quote**: The Gene homepage provides a "Download/FTP" link in the main content area leading to https://ftp.ncbi.nih.gov/gene/ which contains DATA/, GeneRIF/, tools/, and a README file.
- **Reasoning**: The FTP site is directly linked from the Gene homepage under "Using Gene" and provides bulk download files including gene_info.gz (1.4G), gene2accession.gz (4.0G), gene2go.gz (1.2G), gene2pubmed.gz (245M), gene2refseq.gz (2.0G), and many others. This constitutes a reasonable good-faith location for data access.

### C.2 — Reasonable and transparent access method

- **Verdict**: pass
- **Source**: https://ftp.ncbi.nih.gov/gene/DATA/ (via Path 2)
- **Reasoning**: The FTP/HTTPS download site provides unprotected access to all data files. No API key, registration, or access request is needed to download the bulk data files. The files are available in standard compressed formats (.gz). This is a reasonable and transparent access method.

### D.1 — Restrictions on kinds of (re)use

- **Verdict**: not evaluated (short-circuited by A.1.1 failure)
- **Source**: https://www.ncbi.nlm.nih.gov/home/about/policies/ (via Path 1)
- **Quote**: "NCBI cannot provide comment or unrestricted permission concerning the use, copying, or distribution of the information contained in the molecular databases."
- **Reasoning**: While NCBI itself places no restrictions, the acknowledgment that submitters may hold IP rights means there is no guarantee that all types of reuse are permitted. A reuser could potentially violate copyright by redistributing data that a submitter claims rights over.

#### D.1.1 — Not evaluated (short-circuited)

#### D.1.2 — Not evaluated (short-circuited)

### E.1 — Restrictions on who can (re)use the data

- **Verdict**: not evaluated (short-circuited by A.1.1 failure)
- **Source**: https://www.ncbi.nlm.nih.gov/home/about/policies/ (via Path 1)
- **Reasoning**: The NCBI policy does not distinguish between types of users. However, because the underlying IP status of portions of the data is unclear, there is no guarantee that all user types can freely reuse all data. Same concern as D.1.

#### E.1.1 — Not evaluated (short-circuited)

#### E.1.2 — Not evaluated (short-circuited)

## Summary

| Criterion | Verdict | Stars |
|-----------|---------|-------|
| A.1 (single license) | fail (A.1.1 — inconsistent) | 0 |
| A.2 (standard license) | not evaluated (short-circuited) | 0 |
| B.1 (no negotiation) | not evaluated (short-circuited) | 0 |
| B.2 (scope complete) | not evaluated (short-circuited) | 0 |
| C.1 (data accessible) | pass | ½ |
| C.2 (transparent access) | pass | +½ |
| D.1 (reuse unrestricted) | not evaluated (short-circuited) | 0 |
| E.1 (users unrestricted) | not evaluated (short-circuited) | 0 |
| **Total** | | **1 star** |

## Comparison with Existing YAML

The existing YAML evaluation and this cross-check are **in agreement** on all substantive points:

1. **License: `inconsistent`** — Confirmed. NCBI's policy uses language resembling public domain ("places no restrictions") but explicitly caveats that submitters may hold IP rights in the data. This inconsistency remains present on the current website.

2. **License-type: `unknown`** — Confirmed. The policy is not a standard license and the effective licensing status of the data is indeterminate due to the inconsistency.

3. **License-link: `http://www.ncbi.nlm.nih.gov/home/about/policies.shtml`** — Minor URL difference noted: the current URL is `https://www.ncbi.nlm.nih.gov/home/about/policies/` (HTTPS, no `.shtml` extension). The old URL likely redirects to the current one.

4. **A.1.1 commentary** — The existing YAML comment accurately describes the situation: "The license apparently uses language to declare something similar to 'public domain', but with the caveat that it may contain data that is otherwise." This matches the current website text verbatim.

5. **Data access** — The FTP location `ftp://ftp.ncbi.nih.gov/gene/` in the YAML is still functional (also accessible via HTTPS at `https://ftp.ncbi.nih.gov/gene/`). Data downloads remain openly accessible.

6. **Score** — The existing evaluation awards 1 star (C.1 + C.2 only), which matches this cross-check's finding. The A.1.1 failure short-circuits all criteria except C.

### No discrepancies found between the existing YAML and the current state of the resource website.
