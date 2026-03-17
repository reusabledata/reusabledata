# Evaluation Trace: orphanet-open

- **Resource**: Orphanet portal for rare diseases and orphan drugs (open access subset)
- **Root URL**: http://www.orpha.net
- **Evaluated**: 2026-03-13
- **Evaluator**: Claude (automated cross-check)

## Navigation Paths

Pages visited starting from the resource root. Each step shows the link text found, its location on the page, and where it leads.

### Path 1: Root → Legal Notice

1. **https://www.orpha.net/**
   - Found link: "Legal notice" (footer)
   → https://www.orpha.net/en/other-information/about_orphanet?stapage=cgu

### Path 2: Root → Orphadata (Download dataset)

1. **https://www.orpha.net/**
   - Found link: "Download dataset" (main navigation menu, under "Other Information")
   → https://www.orphadata.com/
2. **https://www.orphadata.com/**
   - Found link: "Orphadata Science" (navigation menu)
   → https://sciences.orphadata.com/

### Path 3: Root → Orphadata Legal Notice

1. **https://www.orpha.net/**
   - Found link: "Download dataset" (main navigation menu, under "Other Information")
   → https://www.orphadata.com/
2. **https://www.orphadata.com/**
   - Found link: "Legal Notice" (footer)
   → https://www.orphadata.com/legal-notice/

### Path 4: Root → Orphadata Science FAQ

1. **https://www.orpha.net/**
   - Found link: "Download dataset" (main navigation menu)
   → https://www.orphadata.com/
2. **https://www.orphadata.com/**
   - Found link: "Orphadata Science" (navigation)
   → https://sciences.orphadata.com/
3. **https://sciences.orphadata.com/**
   - Found link: "FAQ" (navigation)
   → https://sciences.orphadata.com/faq/

### Path 5: Root → About Orphanet

1. **https://www.orpha.net/**
   - Found link: "About Orphanet" (main navigation menu, under "Other Information")
   → https://www.orpha.net/en/other-information/about_orphanet

### Path 6: Root → Access ORDO

1. **https://www.orpha.net/**
   - Found link: "Access ORDO" (body content)
   → https://www.orphadata.com/ontologies/

### Path 7: Root → ORDO SPARQL Endpoint

1. **https://www.orpha.net/**
   - Found link: "Download dataset" (main navigation menu)
   → https://www.orphadata.com/
2. **https://www.orphadata.com/**
   - Found link: "ORDO SPARQL endpoint" (Orphadata Products page)
   → https://www.orphadata.com/ordo-sparql-endpoint/

## Note on Changed URLs

The existing YAML references the following URLs that are no longer functional:

- **license-link** `http://www.orphadata.org/cgi-bin/inc/legal.inc.php` — orphadata.org now returns a TLS certificate error (ERR_TLS_CERT_ALTNAME_INVALID). The equivalent page is now at https://www.orphadata.com/legal-notice/.
- **data-access download** `http://www.orphadata.org/cgi-bin/index.php/` — same TLS error. The equivalent is now https://sciences.orphadata.com/.
- **data-access API** `http://www.orpha.net/sparql` — returns 404. A SPARQL endpoint exists at https://www.orphadata.com/ordo-sparql-endpoint/ (noted as "beta test phase").

## Criteria Evaluation

### A.1 — Does the resource have a single license?

#### A.1.1 — No conflicting licenses

- **Verdict**: pass
- **Source**: https://www.orphadata.com/legal-notice/ (via Path 3); https://sciences.orphadata.com/ (via Path 2); https://sciences.orphadata.com/faq/ (via Path 4)
- **Quote**: "Orphadata Science datasets use Creative Commons Attribution 4.0 International (CC BY 4.0) license" (legal notice). "These downloadable datasets and resources are directly accessible here through the CC BY 4.0 licence" (sciences.orphadata.com).
- **Reasoning**: The Orphadata Science datasets (the "open access subset") are consistently described as being under CC BY 4.0 across the legal notice page and the Orphadata Science site. There is no conflicting license for this data tier. A single license applies.

**IMPORTANT DISCREPANCY**: The existing YAML lists the license as **CC-BY-ND-3.0**. The current website now states **CC BY 4.0**. This is a significant change — the ND (NoDerivatives) restriction has been removed and the version upgraded from 3.0 to 4.0.

#### A.1.2 — License is present

- **Verdict**: pass
- **Source**: https://www.orphadata.com/legal-notice/ (via Path 3); https://sciences.orphadata.com/ (via Path 2)
- **Reasoning**: License information is discoverable from the root URL via the "Download dataset" navigation link to orphadata.com, and then via footer "Legal Notice" link or via the Orphadata Science site itself.

### A.2 — Does the resource use a standard license?

#### A.2.1 — Public domain declaration

- **Verdict**: not-applicable
- **Reasoning**: CC BY 4.0 is not a public domain declaration.

#### A.2.2 — Custom or non-standard license

- **Verdict**: pass
- **Source**: https://www.orphadata.com/legal-notice/ (via Path 3)
- **Quote**: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
- **Reasoning**: CC BY 4.0 is a standard Creative Commons license listed in the SPDX license list. This is a standard license. **DISCREPANCY**: The existing YAML lists CC-BY-ND-3.0, which is also a standard license. The current finding still passes A.2.2, consistent with the existing evaluation's implied pass (CC-BY-ND-3.0 is also standard). However, the specific license has changed.

### B.1 — License requires no further negotiation

- **Verdict**: pass
- **Source**: https://sciences.orphadata.com/ (via Path 2); https://sciences.orphadata.com/faq/ (via Path 4)
- **Quote**: "you are free to copy, distribute, display and make commercial use of this data in all legislations, provided you give us credit"
- **Reasoning**: CC BY 4.0 requires only attribution. No negotiation, signing of agreements, or contacting a tech transfer office is needed for the Orphadata Science datasets. The datasets are directly downloadable. This is consistent with the existing evaluation (no B.1 issue was flagged).

### B.2 — Is the scoping of the license complete?

#### B.2.1 — Comprehensive: does the license apply to all of the data?

- **Verdict**: pass
- **Source**: https://sciences.orphadata.com/ (via Path 2); https://www.orphadata.com/legal-notice/ (via Path 3)
- **Reasoning**: The legal notice explicitly carves out Orphadata Science datasets from the general "no redistribution" rule: "No content may be copied or redistributed without written consent, except Orphadata Science datasets." The CC BY 4.0 license applies to all Orphadata Science datasets comprehensively.

#### B.2.2 — Differentiated: can obtain a singly-licensed slice

- **Verdict**: pass
- **Source**: https://sciences.orphadata.com/ (via Path 2)
- **Reasoning**: The Orphadata Science datasets are all under CC BY 4.0. There is no mixing of licenses within this tier. A singly-licensed slice is trivially obtainable since all data in this tier shares the same license.

### C.1 — Reasonable good-faith location to access data

- **Verdict**: pass
- **Source**: https://sciences.orphadata.com/ (via Path 2)
- **Reasoning**: The Orphadata Science site provides direct download links for all datasets. It is reachable from the root URL via "Download dataset" in the main navigation menu. This is a reasonable good-faith location. **Note**: The existing YAML lists `http://www.orphadata.org/cgi-bin/index.php/` which now returns a TLS error. The current equivalent is https://sciences.orphadata.com/.

### C.2 — Reasonable and transparent access method

- **Verdict**: pass
- **Source**: https://sciences.orphadata.com/ (via Path 2); https://www.orphadata.com/ordo-sparql-endpoint/ (via Path 7)
- **Reasoning**: Datasets are available via direct HTTP download without registration or API keys. The SPARQL endpoint is also openly accessible (though noted as beta). **Note**: The old SPARQL endpoint at http://www.orpha.net/sparql (listed in the YAML) returns 404. A replacement exists at the Orphadata SPARQL endpoint.

### D.1 — Restrictions on kinds of (re)use

- **Verdict**: pass (full star)
- **Source**: https://sciences.orphadata.com/faq/ (via Path 4); https://www.orphadata.com/legal-notice/ (via Path 3)
- **Quote**: "you are free to copy, distribute, display and make commercial use of this data in all legislations, provided you give us credit"
- **Reasoning**: CC BY 4.0 allows all types of reuse including modification, redistribution, and commercial use, requiring only attribution. This satisfies the criteria for a full star.

**MAJOR DISCREPANCY**: The existing YAML scores D.1.2 (no stars for reuse restrictions) due to CC-BY-ND preventing derivation. With the current CC BY 4.0 license, derivation is now permitted. The D criterion would now award a full star instead of zero.

#### D.1.1 / D.1.2 — Not triggered

- **Reasoning**: Since D.1 awards a full star (no restrictions on reuse under CC BY 4.0), the half-star (D.1.1) and no-star (D.1.2) sub-criteria are not triggered.

### E.1 — Restrictions on who can (re)use the data

- **Verdict**: pass (full star)
- **Source**: https://sciences.orphadata.com/faq/ (via Path 4)
- **Quote**: "you are free to copy, distribute, display and make commercial use of this data in all legislations"
- **Reasoning**: CC BY 4.0 does not distinguish between types of users or entities. All agents may reuse the data. This satisfies the criteria for a full star.

**MAJOR DISCREPANCY**: The existing YAML scores E.1.2 (no stars for user restrictions) due to CC-BY-ND preventing derivation. With CC BY 4.0, there are no user restrictions. The E criterion would now award a full star instead of zero.

#### E.1.1 / E.1.2 — Not triggered

- **Reasoning**: Since E.1 awards a full star, the sub-criteria are not triggered.

## Summary

| Criterion | Verdict (current website) | Stars (current) | Existing YAML implied | Discrepancy? |
|-----------|---------------------------|------------------|-----------------------|--------------|
| A.1 (single license) | pass | 1/2 | pass (1/2) | No |
| A.2 (standard license) | pass (CC BY 4.0) | +1/2 | pass (CC-BY-ND-3.0) | **Yes — license changed** |
| B.1 (no negotiation) | pass | 1/2 | pass (1/2) | No |
| B.2 (scope complete) | pass | +1/2 | pass (implied) | No |
| C.1 (data accessible) | pass | 1/2 | pass (1/2) | No (but URLs changed) |
| C.2 (transparent access) | pass | +1/2 | pass (1/2) | No (but URLs changed) |
| D.1 (reuse unrestricted) | pass (full star) | 1 | D.1.2 fail (0) | **Yes — ND restriction removed** |
| E.1 (users unrestricted) | pass (full star) | 1 | E.1.2 fail (0) | **Yes — ND restriction removed** |
| **Total** | | **5 stars** | **3 stars** | **+2 stars** |

## Key Discrepancies Between Existing YAML and Current Website

1. **License changed from CC-BY-ND-3.0 to CC-BY-4.0**: The NoDerivatives restriction has been removed. This is the most significant change, affecting criteria D and E.

2. **License would change from `restrictive` to `permissive`**: CC BY 4.0 is classified as `permissive` in the project's license-type mapping, whereas CC-BY-ND-3.0 was `restrictive`.

3. **license-link is broken**: The existing `http://www.orphadata.org/cgi-bin/inc/legal.inc.php` returns a TLS certificate error. Current equivalent: `https://www.orphadata.com/legal-notice/`.

4. **data-access download URL is broken**: `http://www.orphadata.org/cgi-bin/index.php/` returns a TLS error. Current equivalent: `https://sciences.orphadata.com/`.

5. **data-access API URL is broken**: `http://www.orpha.net/sparql` returns 404. Current equivalent: `https://www.orphadata.com/ordo-sparql-endpoint/` (beta).

6. **license-commentary quotes may need updating**: The existing quote "you are free to copy, distribute, display and make commercial use of these databases" is close to the current FAQ text but referred to the old CC-BY-ND context. The current quote under CC BY 4.0 is: "you are free to copy, distribute, display and make commercial use of this data in all legislations, provided you give us credit."

7. **The existing D.1.2 and E.1.2 issues no longer apply**: CC BY 4.0 permits derivation and does not restrict who can use the data, so both issues flagged in the existing YAML are no longer applicable.
