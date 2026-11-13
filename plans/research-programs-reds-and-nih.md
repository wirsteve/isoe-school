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

## Lesson format

Same as `release-management-and-sdlc`: "The short version" callout first; TEACHING.md spine; in
depth but keep index.qmd prose ≤ 5,000 words; "Keep learning" section in resources. No narration.

## Modules

| # | Slug | Finish line | `order:` | Status |
|---|---|---|---|---|
| — | (syllabus) | — | 150 | Published |
| 1 | `reds-structure-contracts-and-governance` | Explain who governs REDS today (NHLBI/NICHD, executive and steering committees, monitoring board, hubs, DCC, CTLS), how the 2026 contract round is structured, what "REDS V" does and doesn't mean in the records, and what a contributing blood center commits to. | 151/152 | Not started |
| 2 | `the-vein-to-vein-database-and-research-extracts` | Design and govern a recurring research extract from BECS (EXT-21): scope, read-only source, linkage keys, transformation, secure transfer, QC, and change control — without touching regulated records. | 153/154 | Not started |
| 3 | `human-subjects-hipaa-and-certificates-of-confidentiality` | Explain the Common Rule, single-IRB waiver, HIPAA research pathways, and Certificates of Confidentiality well enough to know what the privacy officer and IRB must confirm before EXT-21 runs, and what CoC means for IT. | 155/156 | Not started |
| 4 | `nih-data-management-and-sharing` | Explain NIH's Data Management and Sharing policy (including its reach through contracts), where shared data ends up, and what a contributing blood center's IT must support (retention, provenance, de-identification before sharing). | 157/158 | Not started |
| 5 | `security-expectations-for-research-data` | Set security controls for research data leaving Lakeshore (encryption, key handling, access, logging, incident handling) and apply NIH's controlled-access genomic-data expectations only where they genuinely apply. | 159/160 | Not started |
| 6 | `running-research-data-alongside-regulated-operations` | Handle a BECS release that breaks EXT-21 and a rapid-response study request in the same week, keeping research obligations and regulated records cleanly separated. | 161/162 | Not started |

## Progress log

- 2026-11-13 — Course scoped (Phase 2, strongest model). Sources fetched: REDS 2026 contract records
  (RePORTER), REDS-IV-P program design paper excerpts, NIH DMS policy, NIH GDS security update,
  NIH CoC policy, 42 U.S.C. 241(d), Common Rule excerpt, HIPAA research provisions. `order:`
  150–162 assigned (next unused: **163**). Next: module 1.
