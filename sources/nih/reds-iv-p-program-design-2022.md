# REDS-IV-P program design paper (Josephson et al., Transfusion, 2022) — short verbatim EXCERPTS

Source: Josephson CD, Glynn S, Mathew S, et al. "The Recipient Epidemiology and Donor Evaluation
Study-IV-Pediatric (REDS-IV-P): A research program striving to improve blood donor safety and
optimize transfusion outcomes across the lifespan." *Transfusion* 2022;62(5):982–999.
DOI: https://doi.org/10.1111/trf.16869 · PMID 35441384 · PMCID PMC9353062
(https://pmc.ncbi.nlm.nih.gov/articles/PMC9353062/). Retrieved via PubMed Central full text,
2026-11-13. Tier: **peer-reviewed description of a research program** — authoritative for how the
program says it is organized; not a regulation, guidance, or standard. Copyrighted article: keep
quotes short; paraphrase otherwise. Note the paper's own program dates (April 2019 to March 2026)
predate the September 2026 contract round in `sources/nih/reds-2026-contracts.md`; teach both
honestly (the 2026 records describe "phase 3" contracts).

---

## Section 1, Introduction — program lineage (verbatim excerpt; whitespace normalized where the PMC text layer dropped a space before a citation marker)

> The programs evolved from the Retrovirus Epidemiology Donor Study (REDS), 1989–2001 and REDS-II,
> 2004–2012, primarily focused on improving blood availability and safeguarding the blood supply
> (with attention to infectious risks), to the programs of today encompassing epidemiological
> research on the entire transfusion chain, from donors to recipients. These linked
> donor-donation-recipient centered programs include the Recipient Epidemiology and Donor
> Evaluation Study - III (REDS-III), 2011–2020, and the current phase of the program, the Recipient
> Epidemiology and Donor Evaluation Study-IV-Pediatric (REDS-IV-P), launched in 2019 by NHLBI in
> collaboration with National Institute of Child Health and Human Development (NICHD).

## Section 2, Infrastructure of the REDS-IV-P program (verbatim excerpt)

> The 7-year multi-center program (April 2019 to March 2026), will conduct epidemiologic and
> laboratory studies on blood donors and transfusion recipients in the US and Brazil, and
> ultimately collect 5 total years of comprehensive donor/donation, component manufacturing, and
> recipient data from 2019 to 2023. The US program is comprised of 4 hubs (western–California;
> mid-west–Wisconsin; eastern New York; and New England – Connecticut, Rhode Island,
> Massachusetts), each including blood center(s) and multiple participating hospitals. [...]
> REDS-IV-P includes a Center for Transfusion Laboratory Studies (CTLS) and a Data Coordinating
> Center (DCC). The NHLBI, NICHD, REDS-IV-P Executive Committee, US and Brazil Steering
> Committees, Observational Study Monitoring Board, External Review Panel, and REDS-IV-P
> committees (e.g., Maternal/In-utero/Neonatal/Kids [MINeKids], Publications, and Mentoring
> committees) all help either to guide or monitor the studies and activities of REDS-IV-P.

## Section 1, Introduction (verbatim excerpt)

> the current phase of the program, the Recipient Epidemiology and Donor Evaluation
> Study-IV-Pediatric (REDS-IV-P), launched in 2019 by NHLBI in collaboration with National
> Institute of Child Health and Human Development (NICHD).

> The shift to linking information collected on blood donors, the components made from their
> donations, and transfusion recipients through data extractions from blood centers, hospital
> transfusion services, and hospital/clinic patient electronic medical records [...]

## Section 3, US program and the V2V database (verbatim excerpts)

> The backbone of the US program is the V2V database which encompasses information from blood
> donors and their donations, the resulting manufactured blood components, and Electronic Health
> Record (EHR) data for patients at participating hospitals where the components were distributed
> for use. Longitudinal databases for donor/donation, components, and patients/transfusion
> recipients are linked together so that blood products can be tracked from donation to
> transfusion.

> The donor, donation, component, and patient data are extracted and transferred to the DCC's
> Amazon Web Services Virtual Private Cloud using secure data transfer (sFTP) keys. Submissions are
> tracked in real-time using dashboards (e.g., dates, records, ongoing status, QC results).

> Rooted in principles and best practices of data science, the REDS-IV-P V2V database architecture
> is based on the Observational Medical Outcomes Partnership (OMOP) Common Data Model (CDM) v.6
> [...] Data extracted from blood center and hospital systems are transformed into the OMOP CDM for
> analyses. The source data are retained allowing for potential new analyses or investigations
> without the need for additional data extractions.

> A waiver of informed consent was requested and granted by the single IRB for both hospital
> patients and blood donors.

## Section 4 (verbatim excerpt)

> exploration of the public-use version of the REDS-III V2V database (accessed through BioLINCC
> [...]) has enabled investigators to publish multiple pediatric database analyses
