# Evaluation Trace: orphanet-academic

- **Resource**: Orphanet portal for rare diseases and orphan drugs (academic access subset)
- **Root URL**: http://www.orpha.net
- **Evaluated**: 2026-03-13
- **Evaluator**: Claude (automated cross-check)

## Navigation Paths

Pages visited starting from the resource root. Each step shows the link text found, its location on the page, and where it leads.

### Path 1: Root → Orphadata Products

1. **https://www.orpha.net/**
   - Found link: "Download dataset" (main navigation menu, under "Other Information")
   → https://www.orphadata.com/
2. **https://www.orphadata.com/**
   - Found link: "Orphadata Products" (navigation menu)
   → https://www.orphadata.com/orphadata-products/

### Path 2: Root → Orphadata Legal Notice

1. **https://www.orpha.net/**
   - Found link: "Download dataset" (main navigation menu, under "Other Information")
   → https://www.orphadata.com/
2. **https://www.orphadata.com/**
   - Found link: "Legal Notice" (footer)
   → https://www.orphadata.com/legal-notice/

### Path 3: Root → Orphadata Contact

1. **https://www.orpha.net/**
   - Found link: "Download dataset" (main navigation menu, under "Other Information")
   → https://www.orphadata.com/
2. **https://www.orphadata.com/**
   - Found link: "Contact" (navigation/footer)
   → https://www.orphadata.com/contact/

### Path 4: Root → Orphanet Legal Notice

1. **https://www.orpha.net/**
   - Found link: "Legal notice" (footer)
   → https://www.orpha.net/en/other-information/about_orphanet?stapage=cgu

### Path 5: Root → About Orphanet

1. **https://www.orpha.net/**
   - Found link: "About Orphanet" (main navigation menu, under "Other Information")
   → https://www.orpha.net/en/other-information/about_orphanet

### Path 6: Root → Orphadata About Us

1. **https://www.orpha.net/**
   - Found link: "Download dataset" (main navigation menu)
   → https://www.orphadata.com/
2. **https://www.orphadata.com/**
   - Found link: "About Us" (navigation)
   → https://www.orphadata.com/about-us/

### Path 7: Root → Orphadata References

1. **https://www.orpha.net/**
   - Found link: "Download dataset" (main navigation menu)
   → https://www.orphadata.com/
2. **https://www.orphadata.com/**
   - Found link: "References" (navigation)
   → https://www.orphadata.com/references/

## Note on Changed URLs

The existing YAML references the following URLs that are no longer functional:

- **license-link** `http://www.orphadata.org/cgi-bin/contact.php` — orphadata.org now returns a TLS certificate error (ERR_TLS_CERT_ALTNAME_INVALID). The equivalent page is now at https://www.orphadata.com/contact/.
- **contacts** `http://www.orphadata.org/cgi-bin/contact.php` — same issue; now https://www.orphadata.com/contact/.

## Note on the Academic DTA

The existing YAML evaluates the "Academic DTA" (Data Transfer Agreement) that governed academic access to a broader set of Orphanet data products beyond the freely available subset. The current website structure distinguishes between:

- **Orphadata Science** — freely downloadable under CC BY 4.0 (evaluated in orphanet-open)
- **Orphadata Products** — requires a Data Transfer Agreement for academic/public entities, or a contract via Orphanet-AISBL for others

The "academic access subset" evaluated in this YAML corresponds to the current "Orphadata Products" tier, which still requires a DTA.

## Criteria Evaluation

### A.1 — Does the resource have a single license?

#### A.1.1 — No conflicting licenses

- **Verdict**: pass (with caveats)
- **Source**: https://www.orphadata.com/orphadata-products/ (via Path 1)
- **Quote**: "A Data Transfer Agreement is the minimum requirement for academia/public entities." and "All other entities, as well as academic/public entities who need customised data/services, will be put in contact with the Orphanet-AISBL to formalise their needs and conclude a specific contract."
- **Reasoning**: A single license (the custom DTA) governs this access tier for academic users. There are no conflicting licenses described. The existing YAML correctly identifies this as a `custom` license.

#### A.1.2 — License is present

- **Verdict**: pass (with caveats)
- **Source**: https://www.orphadata.com/orphadata-products/ (via Path 1); https://www.orphadata.com/contact/ (via Path 3)
- **Reasoning**: The Orphadata Products page describes that a DTA is required but does not provide the DTA text directly. One must contact Orphadata to obtain it. The existing YAML commentary notes: "one must actively pursue the DTA--it was not apparently available directly from the site." This remains true — the DTA terms are not publicly posted. However, the existence and requirement of a DTA is clearly stated on the website, so a license is discoverable even if its full text requires contact. The existing evaluation accepted this as a pass for A.1.

### A.2 — Does the resource use a standard license?

#### A.2.1 — Public domain declaration

- **Verdict**: not-applicable
- **Reasoning**: The DTA is not a public domain declaration.

#### A.2.2 — Custom or non-standard license

- **Verdict**: fail (no stars)
- **Source**: https://www.orphadata.com/orphadata-products/ (via Path 1)
- **Reasoning**: The Data Transfer Agreement is a custom, non-standard license. It is not a Creative Commons license, GPL, or any other standard license template. This is consistent with the existing YAML which lists `license: custom` and flags A.2.2.

### B.1 — License requires no further negotiation

- **Verdict**: fail (no stars)
- **Source**: https://www.orphadata.com/orphadata-products/ (via Path 1); https://www.orphadata.com/contact/ (via Path 3)
- **Quote**: "A Data Transfer Agreement is the minimum requirement for academia/public entities." and "Conditions may apply depending on your status and intended use of the data/tools/services."
- **Reasoning**: Obtaining data requires signing a Data Transfer Agreement, which is a form of negotiation/legal action. The contact form includes options for "Contract access" and requires providing institutional information. The existing YAML correctly flags B.1 and notes the DTA's term renewal requirement (Section 11.1). While we cannot verify the specific DTA clause about annual renewal (since the DTA text is not publicly available), the requirement to sign a DTA at all constitutes negotiation.

### B.2 — Is the scoping of the license complete?

#### B.2.1 — Comprehensive: does the license apply to all of the data?

- **Verdict**: unable to fully verify
- **Source**: https://www.orphadata.com/orphadata-products/ (via Path 1)
- **Reasoning**: The DTA text is not publicly available, so we cannot verify whether the DTA covers all data in this tier comprehensively. The existing YAML commentary notes the evaluation was based on descriptions and "erred on the side that there are no C violations," which suggests the evaluators gave benefit of the doubt. Without the DTA text, this cross-check cannot independently verify.

#### B.2.2 — Differentiated: can obtain a singly-licensed slice

- **Verdict**: unable to fully verify
- **Reasoning**: Same as B.2.1 — without the DTA text, we cannot verify differentiation. However, since all Orphadata Products data is under a single DTA framework, it is likely singly-licensed.

### C.1 — Reasonable good-faith location to access data

- **Verdict**: pass (conditional)
- **Source**: https://www.orphadata.com/orphadata-products/ (via Path 1)
- **Reasoning**: The Orphadata Products page describes available datasets and directs users to contact Orphadata for access. While actual data download requires a signed DTA, the location to initiate access is clearly identified. The existing YAML's commentary notes: "given the descriptions...we have erred on the side that there are no C violations." The current website provides a clear path: navigate to orphadata.com, find Orphadata Products, and contact for DTA.

### C.2 — Reasonable and transparent access method

- **Verdict**: pass (conditional)
- **Source**: https://www.orphadata.com/orphadata-products/ (via Path 1); https://www.orphadata.com/contact/ (via Path 3)
- **Reasoning**: The contact form provides a straightforward method to request access. The process is transparent: submit a contact form specifying your institution type and purpose. An API is also mentioned among the products. However, the actual data delivery method after DTA signing is not publicly documented. The existing YAML gave benefit of the doubt here.

### D.1 — Restrictions on kinds of (re)use

#### D.1.2 — Restrictive reuse terms

- **Verdict**: fail (no stars)
- **Source**: Existing YAML commentary (DTA text not publicly available)
- **Quote (from existing YAML)**: "the user '...may freely use the Data only for data analysis...any other use of the Data must receive the authorization of Orphanet management board...'"
- **Reasoning**: The existing YAML quotes DTA language restricting use to "data analysis" only, with all other uses requiring authorization. This constitutes a significant restriction on kinds of reuse. We cannot independently verify this quote since the DTA text is not publicly available on the website, but the Orphadata Products page's language about conditions depending on "status and intended use" is consistent with use restrictions. The existing D.1.2 assessment appears well-founded.

### E.1 — Restrictions on who can (re)use the data

#### E.1.2 — Restrictive user terms

- **Verdict**: fail (no stars)
- **Source**: https://www.orphadata.com/orphadata-products/ (via Path 1); existing YAML commentary
- **Quote**: "A Data Transfer Agreement is the minimum requirement for academia/public entities. All other entities...will be put in contact with the Orphanet-AISBL to formalise their needs and conclude a specific contract."
- **Quote (from existing YAML)**: "The license is 'personal, non-transferable and non-communicable', so cannot be freely reused."
- **Reasoning**: The DTA explicitly distinguishes between academic/public entities and others, with different access pathways. The existing YAML notes the license is "personal, non-transferable and non-communicable." The current Orphadata Products page confirms differentiated access based on entity type. This constitutes a restriction on who can reuse the data. The E.1.2 assessment in the existing YAML appears consistent with current website state.

## Summary

| Criterion | Verdict (current website) | Stars (current) | Existing YAML implied | Discrepancy? |
|-----------|---------------------------|------------------|-----------------------|--------------|
| A.1 (single license) | pass | 1/2 | pass (1/2) | No |
| A.2 (standard license) | fail (custom) | 0 | fail (0) | No |
| B.1 (no negotiation) | fail (DTA required) | 0 | fail (0) | No |
| B.2 (scope complete) | unable to verify (DTA not public) | assumed pass | assumed pass | No |
| C.1 (data accessible) | pass | 1/2 | pass (1/2) | No |
| C.2 (transparent access) | pass | +1/2 | pass (+1/2) | No |
| D.1 (reuse restrictions) | fail (D.1.2) | 0 | fail (D.1.2, 0) | No |
| E.1 (user restrictions) | fail (E.1.2) | 0 | fail (E.1.2, 0) | No |
| **Total** | | **2 stars** | **2 stars** | **No change** |

## Key Discrepancies Between Existing YAML and Current Website

1. **license-link is broken**: `http://www.orphadata.org/cgi-bin/contact.php` returns a TLS certificate error. The current equivalent is `https://www.orphadata.com/contact/`.

2. **contacts URL is broken**: Same issue as above.

3. **Website reorganization**: Orphadata has been reorganized from orphadata.org to orphadata.com, with a clearer split between "Orphadata Science" (CC BY 4.0, free) and "Orphadata Products" (DTA/contract required). The academic DTA tier now falls under "Orphadata Products."

4. **No substantive scoring discrepancies**: The core evaluation findings remain consistent. The DTA is still required for academic access, it is still a custom license, and the restrictions on reuse and users still apply. The existing YAML's scoring appears accurate for the current state of this access tier.

5. **DTA text still not publicly available**: The specific DTA clauses quoted in the existing YAML (Section 11.1 renewal, "data analysis only" restriction, "personal, non-transferable" terms) cannot be independently verified from the public website, but they are consistent with the general language on the Orphadata Products page about conditions depending on status and intended use.

6. **Catalog PDF reference is outdated**: The existing YAML commentary references `http://www.orphadata.org/cgi-bin/docs/CataloguePdt-Academia.pdf` which is no longer accessible. A current catalog is available at `https://www.orphadata.com/docs/Catalogue_Orphadata.pdf` (in French).
