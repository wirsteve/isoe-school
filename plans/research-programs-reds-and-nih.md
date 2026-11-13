# `research-programs-reds-and-nih` — course plan

Read this whole file before drafting any module. Update the module table and append a progress
log entry after every module.

Added 2026-11-13 at the user's request ("I need more about RED V governing… I need NIH… where they
might be touched by IT"). Track 7, course 2.

## Finish line

Explain how NHLBI's REDS program is structured, contracted and governed today, what NIH and
human-subjects rules reach a blood center that contributes data to it, and exactly where IT touches
each — the research data extract, its transfer and linkage, privacy and confidentiality protections,
data sharing, and security — well enough to say yes to participation without creating a compliance
or data-integrity problem.

## About "REDS V" — what the sources show (read before writing any module)

The user calls the current program "RED V"/"REDS V". The sources show:

- `sources/nih/reds-iv-p-program-design-2022.md` — REDS-IV-P launched in 2019 (NHLBI with NICHD);
  the paper gives the program as April 2019 to March 2026; governance bodies: NHLBI, NICHD,
  Executive Committee, US and Brazil Steering Committees, Observational Study Monitoring Board,
  External Review Panel, program committees; US program = 4 hubs (blood centers + hospitals), a
  Center for Transfusion Laboratory Studies (CTLS) and a Data Coordinating Center (DCC); the
  vein-to-vein (V2V) database; data extracted from blood-center and hospital systems and sent by
  sFTP to the DCC's cloud environment; OMOP CDM v6; source data retained; single-IRB waiver of
  consent for patients and donors; earlier REDS-III public-use data via BioLINCC.
- `sources/nih/reds-2026-contracts.md` — NIH RePORTER: a new contract round began **2026-09-30**
  (base period to 2027-09-29): regional hubs at Columbia, Emory, Versiti and Vitalant; DCC at
  Westat; CTLS at Columbia; REDS Brazil via Vitalant. The abstracts still describe REDS-IV-P and
  "phase 3" (dissemination, database closure, deliverables to NHLBI).
- **No record names "REDS-V".** Every module must say this plainly once, in plain words: the
  current round is what people may call "REDS V," but the official records still describe REDS-IV-P
  phase 3. Never assert a "REDS-V" name, structure, or requirement. Real organizations above may be
  named only as public facts about the program (who holds which contract); never imply any of them
  is Lakeshore's partner, and never name the user's employer.
- `sources/nih/reds-program.md` — earlier note (REDS → REDS-II → REDS-III → REDS-IV-P; research
  evidence is not a regulation).

## Other sources (all local)

| Source | Tier | Use for |
|---|---|---|
| `sources/cfr/45-46-common-rule-excerpt.md` | Regulation | 46.101 applicability, 46.102 definitions (research, human subject, identifiable private information), 46.111 IRB approval criteria (incl. privacy/confidentiality), 46.116 consent (incl. waiver) |
| `sources/cfr/45-164-research-provisions-excerpt.md` | Regulation (HIPAA) | 164.512(i) research uses/disclosures (IRB/privacy board waiver), 164.514(e) limited data set + data use agreement |
| `sources/cfr/45-164-privacy-rule-excerpt.md`, `sources/cfr/45-160.103.md`, `sources/cfr/45-164-security-rule-excerpt.md` | Regulation (HIPAA) | covered entity (Lakeshore is treated as one — see `plans/healthcare-security-and-privacy.md`), minimum necessary, safeguards |
| `sources/usc/42-usc-241d.md` | Statute | Certificates of Confidentiality: automatic for federally funded research collecting identifiable, sensitive information; disclosure limits; legal-process immunity; protection "for perpetuity" |
| `sources/nih/certificates-of-confidentiality-not-od-17-109.md` | NIH policy | how NIH implements CoCs for NIH-funded research |
| `sources/nih/dms-policy-not-od-21-013.md` | NIH funding policy | Data Management and Sharing — applies to research funded or conducted by NIH incl. **contracts**; plans, timelines, repositories, human-participant data |
| `sources/nih/gds-security-best-practices-not-od-24-157.md` | NIH policy, **genomic controlled-access data only** | security expectations for users of controlled-access genomic data — apply only within that scope |
| `sources/cfr/606.160.md`, `sources/cfr/11.10.md`, `sources/fda-guidance/data-integrity-cgmp-qa-2018.md` | Regulation / guidance | BECS records stay regulated records; a research extract must not alter them |

## Scenario — locked for every module

Lakeshore Blood Center (fictional) is invited by **one of the REDS program's regional hubs (never
named)** to participate as a contributing blood center for the current contract round: send
recurring donor/donation/component extracts from BECS for linkage into the program's V2V database,
and support occasional rapid-response studies using retained donation samples. Characters: the
Director ("you"), the Quality Analyst ("she"), the systems administrator ("he"), the CIO, the
**medical director** (scientific lead for Lakeshore's participation), **regulatory affairs**, and
**the privacy officer** (Lakeshore is treated as a HIPAA covered entity, per the
`healthcare-security-and-privacy` course). Research record ID: **RSH-0107** (Lakeshore's internal
research participation file). Extract job: **EXT-21**. No calendar years in the narrative. Never
name real software products (BECS vendor, extract tools, cloud providers) for Lakeshore's own
systems; the program's own published architecture (sFTP to the DCC's cloud environment, OMOP CDM)
may be described from the source, attributed to the paper.

**Locked arc:** module 1 Lakeshore decides whether and how to participate (governance, contracting,
roles); module 2 designs EXT-21 (scope, read-only source, transformation, transfer, QC); module 3
human-subjects and HIPAA pathway (single IRB, waiver; what Lakeshore's privacy officer must confirm;
CoC); module 4 NIH data management and sharing (what happens to the data downstream, retention, the
DMS policy's reach via contracts); module 5 security expectations (encryption, keys, access,
incident handling; controlled-access genomic data rules only where in scope); module 6 capstone: a
BECS change (BECS Release C from `release-management-and-sdlc`) breaks EXT-21's field mapping and a
rapid-response study request arrives the same week — run both without touching regulated records.

**Locked outcome for module 3 (set by the planner so modules 3 and 4 can be drafted in parallel):**
the privacy officer determines Lakeshore's disclosure to the hub will be a **limited data set under a
data use agreement** (45 CFR 164.514(e)) — no direct identifiers leave Lakeshore; donation dates may
(LDS permits dates); the program's single-IRB waiver documentation is filed in RSH-0107 as the
program's human-subjects pathway, but Lakeshore's HIPAA basis is its own LDS + DUA decision. Donor-key
option B confirmed (random code not derived from identifiers; crosswalk never leaves Lakeshore). On
Certificates of Confidentiality: the privacy officer and counsel conclude Lakeshore will **treat EXT-21
output and the crosswalk as covered information** (conservative organizational decision, grounded in
42 U.S.C. 241(d) and NIH's policy, without claiming the statute settles Lakeshore's exact status):
no disclosure outside the research purpose, legal requests routed to counsel, copies tracked, and
protection treated as indefinite. Module 4 builds on this; module 5 turns it into controls.

## Lesson format

Same as `release-management-and-sdlc`: "The short version" callout first; TEACHING.md spine; in
depth but keep index.qmd prose ≤ 5,000 words; "Keep learning" section in resources. No narration.

## Modules

| # | Slug | Finish line | `order:` | Status |
|---|---|---|---|---|
| — | (syllabus) | — | 150 | Published |
| 1 | `reds-structure-contracts-and-governance` | Explain who governs REDS today (NHLBI/NICHD, executive and steering committees, monitoring board, hubs, DCC, CTLS), how the 2026 contract round is structured, what "REDS V" does and doesn't mean in the records, and what a contributing blood center commits to. | 151/152 | Published |
| 2 | `the-vein-to-vein-database-and-research-extracts` | Design and govern a recurring research extract from BECS (EXT-21): scope, read-only source, linkage keys, transformation, secure transfer, QC, and change control — without touching regulated records. | 153/154 | Published |
| 3 | `human-subjects-hipaa-and-certificates-of-confidentiality` | Explain the Common Rule, single-IRB waiver, HIPAA research pathways, and Certificates of Confidentiality well enough to know what the privacy officer and IRB must confirm before EXT-21 runs, and what CoC means for IT. | 155/156 | Published |
| 4 | `nih-data-management-and-sharing` | Explain NIH's Data Management and Sharing policy (including its reach through contracts), where shared data ends up, and what a contributing blood center's IT must support (retention, provenance, de-identification before sharing). | 157/158 | Published |
| 5 | `security-expectations-for-research-data` | Set security controls for research data leaving Lakeshore (encryption, key handling, access, logging, incident handling) and apply NIH's controlled-access genomic-data expectations only where they genuinely apply. | 159/160 | Not started |
| 6 | `running-research-data-alongside-regulated-operations` | Handle a BECS release that breaks EXT-21 and a rapid-response study request in the same week, keeping research obligations and regulated records cleanly separated. | 161/162 | Not started |

## Progress log

- 2026-11-13 — Course scoped (Phase 2, strongest model). Sources fetched: REDS 2026 contract records
  (RePORTER), REDS-IV-P program design paper excerpts, NIH DMS policy, NIH GDS security update,
  NIH CoC policy, 42 U.S.C. 241(d), Common Rule excerpt, HIPAA research provisions. `order:`
  150–162 assigned (next unused: **163**). Next: module 1.
- 2026-11-13 — Module 1 `reds-structure-contracts-and-governance` published (verified; ~3,900 words).
  No YouTube video exists on REDS; main session linked NIH VideoCast "NHLBI and OASH State of the
  Science in Transfusion Medicine Symposium 2022 (Day 2)" (https://videocast.nih.gov/watch=46109) as a
  link, not an embed. Lineage dates (REDS 1989–2001, REDS-II 2004–2012, REDS-III 2011–2020, REDS-IV-P
  from 2019) now in the source excerpt. **Locked:** RSH-0107 = approved in principle with conditions,
  not yet approved to begin transfers: (1) privacy officer confirms the privacy/IRB pathway in writing
  (module 3); (2) EXT-21 read-only (module 2); (3) written data agreement + security terms (modules
  4–5); (4) no change to any BECS record or workflow. Five commitment areas → modules: recurring
  extracts (2), secure transfer (2, 5), QC (2), change notification (2, 6), data protection (3–5).
  Contract facts taught as public records (seven records, all starting 2026-09-30; Columbia holds a hub
  + CTLS; Vitalant a hub + Brazil; DCC + Brazil records list periods to 2033-09-29 while Brazil's title
  says base period to 2027-09-29 — reported as unexplained, no options/renewals assumed). Director asks
  the hub in writing whether new recurring extracts are in scope this phase (abstracts say phase 3 =
  dissemination, database closure, deliverables). Governance bodies listed exactly as the paper gives
  them; the paper assigns no roles — later modules must not assign them powers. No CFR, FDA guidance
  or AABB Standard requires joining REDS.
- 2026-11-13 — Module 2 `the-vein-to-vein-database-and-research-extracts` published (verified). Video:
  OHDSI "2017 OHDSI CDM & Vocabulary Tutorial (1 of 5)" (BExsHYxkvTw; OMOP's maintainers; general OMOP
  background). **Locked:** EXT-21 v1 approved for design and test only (not production data, no
  transfer): (1) source = read-only reporting copy via a dedicated view with only spec fields; service
  account with no write permission anywhere; (2) no external login to any Lakeshore system (the
  systems administrator's replica-login idea refused); (3) data spec cut to protocol needs with a
  stated purpose per field, new fields = new spec version (medical director agreed "everything" isn't
  a spec); (4) coded donor key generated and held by Lakeshore — design option B (A = direct
  identifiers, C = no key); key random (not a hash of donor ID), stable across runs; crosswalk is a
  protected CMDB item; final form pending module 3; (5) every run: signed QC checklist + reconciliation
  report against BECS reports; (6) EXT-21 in the CMDB with relationships to its BECS source fields,
  under change control; (7) first test run on the validation environment's de-identified copy; no
  output leaves Lakeshore until module 3's conditions clear. Transfer outbound only with QC-signed
  release step, transfer log, receipt (module 5 supplies controls). Source-data errors found via DCC
  dashboard feedback are fixed in BECS under its own controls, never in the extract. BECS change
  impact analysis must ask "does this touch an EXT-21 source field?" (module 6 hook). Lakeshore owns
  its field-mapping document (source, transformation, value-set translation, owner, version); unmapped
  value stops the run rather than defaulting. Open: who does the OMOP mapping; whether the hub has a
  test endpoint; how late source changes are handled (restate/flag/full snapshot — data spec decides).
  Whether the extract file is a record under any regulation left to Quality/regulatory affairs.
- 2026-11-13 — Module 4 `nih-data-management-and-sharing` published (verified; published before module 3,
  which was still drafting). Video: NIH Funding "The NIH Final Policy for Data Management and Sharing is
  in Effect: Planning for Success!" (UbtWG_kjPfw; NIH's own channel). **Locked:** DMS is a funding policy
  binding the funded hubs/DCC/CTLS; Lakeshore exposed only through what its agreement passes down;
  whether DMS covers the current REDS contracts isn't shown in sources (effective date keys on proposal
  submission date) — Director asks the hub in writing for the approved DMS plan, what will be shared,
  where, when, and the program's de-identification process. Director's decision (RSH-0107): repository
  sharing accepted only for data the program has further de-identified under its own process; the
  limited data set is not accepted for repository sharing; coded key and crosswalk never are. DUA terms
  per 164.514(e)(4) (named recipients; no further disclosure; same restrictions on agents; no
  re-identification or contact; report misuse) + retention and destruction terms. EXT-21 transfer
  ledger + provenance record built before the first transfer, under change control; ledger fields: run
  ID/date, file, spec version, mapping version, row counts, checksum + algorithm, recipient + method,
  receipt reference, supersedes/superseded-by. Retention: BECS records under 606.160(d); sent files,
  ledger, provenance per the DUA; crosswalk kept as long as the program may need corrections/re-linking;
  destroying the crosswalk is an irreversible privacy decision with the privacy officer; destruction ends
  Lakeshore's copies, not the CoC-based confidentiality treatment. Corrections fixed in BECS → new run →
  superseding ledger row; Lakeshore notifies the hub; program propagates. Only documented repository =
  BioLINCC (REDS-III public-use data, per the paper).
- 2026-11-13 — Module 3 `human-subjects-hipaa-and-certificates-of-confidentiality` published (verified;
  ~7,500 words incl. quoted regulation). Video: FDA "Certificates of Confidentiality Part 1: General
  Overview" (wRgwdnHiuQE; added by main session; framed as background — FDA issues CoCs for research it
  regulates, NIH's policy covers NIH-funded research). **Locked:** privacy officer's written
  determination has three layers — (1) Common Rule: the program's single-IRB consent waiver,
  documentation from the IRB itself (not the paper) filed in RSH-0107, not Lakeshore's HIPAA basis; (2)
  Lakeshore's own basis = limited data set under a DUA (164.514(e)); 164.512(i) waiver path open but not
  chosen; (3) Certificate decision is organizational. RSH-0107 condition 1 clears when the file holds:
  IRB documentation; field-by-field LDS review of the spec (no free-text fields in v1); signed DUA naming
  which entities may hold the data; key design note (option B); written Certificate decision. Transfers
  still not approved until condition 3 (data agreement + security terms). Open item: written reliance
  arrangement for Lakeshore on the program's IRB (whether Lakeshore is "engaged" not covered by
  sources). Option B final (random, stable, crosswalk never leaves) — the DUA's "not identify or
  contact" term is the reason; coded ≠ de-identified; HIPAA de-identification not applied in this
  course. Certificate IT controls: inventory every copy in the CMDB (incl. backups, test copies,
  row-level logs); legal requests → counsel with a one-page service-desk runbook (preservation is not
  disclosure); never use data/crosswalk for operations; retention/destruction per DUA ("perpetuity" =
  copies stay protected, not keep everything); log access to crosswalk, output files, transfers; keep
  transfers pausable (164.514(e)(4)(iii) cure-or-stop duty). Whether a donation ID/donor number is a
  listed identifier = privacy officer's field-by-field call. A Certificate leaves FDA access to BECS
  unchanged — for counsel to confirm.
