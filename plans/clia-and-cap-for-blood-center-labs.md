# `clia-and-cap-for-blood-center-labs` — course plan

Read this whole file before drafting any module. Update the module table and append a progress log
entry after every module.

Added 2026-11-13 at the user's request ("I need more CAP CLIA … where they might be touched by IT").
Track 7, course 3.

## Finish line

Explain where CLIA (42 CFR 493, administered by CMS) and CAP accreditation apply to a blood center's
testing and reference laboratories, and what they expect of the laboratory information system (LIS),
instrument and middleware interfaces, the LIS-to-BECS result path, test reports, records, proficiency
testing and inspections — well enough to direct IT's part and answer a CAP inspector's IT questions.

## Sources (all local)

| Source | Tier | Use for |
|---|---|---|
| `sources/cfr/42-493-clia-excerpt.md` | Regulation | 493.2 (laboratory definition), 493.3 (applicability), 493.61 (certificate of accreditation), 493.801 (PT enrollment; testing PT samples; **referral prohibition**), 493.1105 (retention), 493.1230/1239 (general systems + QA), 493.1231 (confidentiality), 493.1232 (specimen ID/integrity), 493.1236 (PT evaluation), 493.1251 (procedure manual), 493.1252 (test systems/instruments), 493.1253 (performance specifications), 493.1281 (comparison of test results), 493.1283 (test records), 493.1290/1291 (postanalytic; **test report — 1291(a): manual or electronic systems that accurately and reliably send results from data entry, interfaced or manual, to final report destination**), 493.1299 |
| `sources/cms/qso-25-18-clia-applicability-2025.md` | CMS policy memo | what blood-center testing CLIA covers: immunohematology, FDA-required communicable-disease testing, emerging-infectious-disease testing, CMV, hemoglobin S, sterility, HLA = Yes; purity/potency = No; applicability keyed to 493.2's "laboratory" |
| `sources/cms/clia-program-landing-page.md` | CMS info page | program overview; re-check time-sensitive notices |
| `sources/cap/laboratory-accreditation-program-public-pages.md` | Accreditor's public description | CMS deeming authority; deemed status with others; biennial peer inspections; 21 discipline checklists updated annually; custom checklist per lab. **Checklist text and requirement numbers are never quoted or invented — themes only** |
| `sources/cfr/606.160.md`, `sources/cfr/610.40.md`, `sources/cfr/11.10.md`, `sources/fda-guidance/becs-validation-users-facility-2013.md` | FDA regulation/guidance | the FDA side of the same donor testing (610.40 test requirements), BECS records, Part 11, BECS interfaces — FDA and CLIA both apply; neither replaces the other |

AABB's accreditation role for laboratories: do not assert AABB's CMS status unless a source in
`sources/` shows it (none does yet).

## Scenario — locked for every module

Lakeshore runs two CLIA-certified laboratories at its central site (fictional): the **donor testing
laboratory** (infectious-disease screening and donor ABO/Rh and antibody screening on every donation)
and the **reference immunohematology laboratory** (antibody identification and antigen typing,
including work for hospital patients sent in by transfusion services). Both hold CLIA certificates of
accreditation and are **CAP-accredited** (fictional). Results flow: instruments → middleware →
**LIS** → interface → **BECS** (donor results drive suitability and release in BECS). The reference
lab also issues patient reports to hospitals. Characters: the Director ("you"), the Quality Analyst
("she"), the systems administrator ("he"), the **laboratory director** (CLIA's responsible
individual; "she"/"he" not specified — use "the laboratory director", gender-neutral), the
**LIS analyst** (on the Director's team; "they"). No calendar years. Never name real LIS, middleware,
or instrument products. IDs: lab change records **LCR-0xx**; CAP inspection self-check **SI-12**.

Locked arc: (1) mapping which Lakeshore testing CLIA covers and who inspects (FDA, CMS via CAP, AABB
as accreditor — themes only); (2) LIS and the test report: a reference-lab corrected report that
didn't reach the hospital's system; (3) instruments, middleware rules and performance verification:
a middleware rule change shipped without verification; (4) proficiency testing: an LIS reflex rule
that would have sent a PT sample to a reference lab (referral prohibition) and PT samples leaking into
BECS as if they were donations; (5) the biennial CAP inspection from IT's side, and how it lines up
with FDA and AABB — capstone that reuses the release-management course's change discipline (the BECS
Release C interface regression already covered there may be referenced, not re-taught).

## Lesson format

"The short version" callout first; TEACHING.md spine; in depth; index.qmd prose ≤ 5,000 words; Keep
learning section. No narration.

## Modules

| # | Slug | Finish line | `order:` | Status |
|---|---|---|---|---|
| — | (syllabus) | — | 163 | Published |
| 1 | `where-clia-and-cap-reach-a-blood-center` | Say which of Lakeshore's tests CLIA covers (per 493.2/493.3 and CMS QSO-25-18), how CAP's deemed accreditation fits, and how FDA, CMS/CAP and AABB oversight overlap without replacing each other. | 164/165 | Published |
| 2 | `the-lis-and-the-test-report` | Apply 493.1291 (incl. 1291(a)'s electronic-transmission requirement), 493.1283, 493.1105 and 493.1231 to the LIS, the LIS-to-BECS interface and reference-lab reports, including corrected reports. | 166/167 | Published |
| 3 | `instruments-middleware-and-performance-verification` | Direct IT's part in 493.1252/493.1253/493.1281: instrument and middleware interfaces, rule changes, and the verification evidence a change needs. | 168/169 | Published |
| 4 | `proficiency-testing-and-the-lis` | Keep PT samples handled like patient samples but never referred out (493.801) and never mistaken for donations in BECS. | 170/171 | Published |
| 5 | `the-cap-inspection-from-it` | Prepare IT for a biennial CAP inspection — LIS validation, interfaces, downtime, access, retention, change control — and line it up with FDA and AABB. | 172/173 | Published |

## Progress log

- 2026-11-13 — Course scoped (Phase 2). Sources: 42 CFR 493 excerpt (expanded), CMS QSO-25-18, CMS
  CLIA landing page, CAP public pages. `order:` 163–173 (next unused: **174**).
- 2026-11-13 — Module 1 `where-clia-and-cap-reach-a-blood-center` published (verified). Video: ACILmedia
  "2020 04 14 ACIL Clinical Laboratory Improvement Amendments CLIA Certification Process Webinar"
  (xUyNGY-VVX4; trade-association training, added by main session). **Locked:** scenario = CIO "lab
  systems consolidation" proposal assumed the donor lab is "FDA only" and CLIA is "a hospital thing";
  laboratory director corrected it. Director's decision: proposal paused until its requirements include
  CLIA/CAP obligations for the LIS and interfaces; laboratory director is a required approver for any
  lab-system change (Lakeshore's own rule — no source requires it). "Who looks at what": CMS (inspecting
  through CAP) covers both labs plus result path, records, reports; FDA covers donor testing and BECS
  records/release; AABB covers blood-bank activities and information systems. 21 CFR 610.40(f): required
  donor testing by a part 607-registered lab that's CLIA-certified or CMS-equivalent. QSO-25-18: purity/
  potency = "No"; pre-transfusion patient testing subject to CLIA → reference lab's hospital work in
  scope. Hooks: module 4 — 493.61(b)(1) PT samples treated like patient samples; module 2 — reference
  lab's patient reports to hospitals. CMS-116 form change on CMS page is time-sensitive (mentioned only).
- 2026-11-13 — Module 2 `the-lis-and-the-test-report` published (verified; no on-topic video found).
  **Locked:** the reference lab's LIS-generated corrected antibody ID was released in the LIS but
  suppressed by the outbound hospital interface as a "duplicate" (same patient, order, accession keys),
  no error raised; hospital learned by phone two days later. Decisions: **LCR-014** — message-handling
  rule changed so corrected reports are never deduplicated; verification evidence = same-keys original +
  correction (correction delivered), a true duplicate (still suppressed), interface log showing both;
  sent-vs-acknowledged reconciliation of corrected reports (exceptions worked by the LIS analyst, visible
  to the laboratory director; acknowledgment window lab-defined); event handled in the quality system
  under 493.1299; laboratory director decides any notification beyond the hospital (no outside reporting
  requirement asserted); LIS analyst reviews the LIS-to-BECS interface for suppression/dedup/"latest
  wins" logic under LCR-014 scope — **finding left open**. Lakeshore rule: laboratory director approves
  message-handling and interface rule changes under lab change control. Regulatory anchors: 493.1291(a)
  "final report destination" = the recipient system, not "released in the LIS"; 493.1291(k) = three
  duties (notify promptly; issue corrected report promptly; keep duplicates of original and corrected
  reports); 493.1105(a)(6) = at least 2 years after reporting, expressly incl. corrected reports;
  immunohematology reports point to 606.160(d) (mapping is a lab decision); CLIA prescribes no
  reconciliation method (Lakeshore's control). Hooks: module 3 — message-handling rules are regulated
  configuration; test line "does this change handle corrections, cancellations and duplicates?";
  module 5 — reconciliation report and LCR-014 as inspection evidence.
- 2026-11-13 — Module 3 `instruments-middleware-and-performance-verification` published (verified). Video: CDC
  "Life of a Test Method: Validation, Verification, and Managing Quality" (wdRzi3h5V-E; added by main
  session; general lifecycle, not middleware-specific). **Locked:** a middleware autoverification rule
  change (instrument flag believed "cosmetic") shipped on an IT ticket without lab verification, before the
  laboratory-director-approval rule was in force (it is why that rule exists); Quality Analyst found it in
  routine review; reverted under an emergency lab change; lab reviewing all results released under the
  rule; no harm/reportability asserted; Quality decides any FDA deviation (links BPDR module). Director's
  decisions: every middleware/autoverification rule change is an LCR-0xx record with laboratory director
  approval (or documented delegate); an IT ticket alone cannot change a lab rule (becomes a child of the
  LCR); evidence = test cases per flag/condition, expected written before the run, expected vs actual;
  rule inventory under configuration control, edit access restricted and logged, builder ≠ approver.
  Lakeshore's documented position (not a quote): middleware/autoverification rules are part of the test
  system and procedure for the tests they touch; strongest hook 493.1251(d) (director approves procedure
  changes before use). 493.1253 triggers quoted precisely (introduce/modify/no manufacturer specs) — text
  doesn't mention rule changes; sufficiency is the laboratory director's call. 493.1281(a) not stretched
  to donor screening. 493.1105(a)(3)(i) retention for performance-spec records. CLSI AUTO10 existence
  pointer only. No specific LCR number assigned in module 3.
- 2026-11-13 — Module 4 `proficiency-testing-and-the-lis` published (verified; prose ~4,490 words excl.
  quotes/tables). Video: CDC "CLIA Proficiency Testing (PT) Final Rule, CMS-3355-F" (7qKGYH6w3Nw; added by
  main session; general PT, not referral-specific). **Locked:** a review (Quality Analyst, laboratory
  director, LIS analyst; Director attending) found two hazards that had not occurred as far as known:
  (1) the reference lab's reflex rule auto-creates a send-out to an outside reference lab on an
  inconclusive antibody ID; (2) donor-lab PT samples accessioned with donation-style numbers could post to
  BECS. Decisions: PT accession type running the same instrument/middleware/analytic path but blocking
  reflex send-outs, the BECS interface and the hospital report interface (last one = Lakeshore's choice);
  BECS interface allow-list (only donation accession types sent); PT identifiers from their own namespace,
  LIS rejects donation-format PT IDs; implemented and verified under **LCR-021** (laboratory director
  approval); inventory of all reflex/send-out rules in both labs with PT effect; PT handling written into
  the procedure manual under 493.1251 by the lab, approved/signed/dated by laboratory director (IT supplies
  system facts); look-back check "no PT result ever posted to BECS" = **none found**, scope attached to
  LCR-021. Nine test cases; "does this change affect a PT sample?" becomes a standing change-verification
  line beside module 2's corrections/cancellations/duplicates line. Anchors: 493.801(b) test PT "up until
  the point it would refer"; (b)(5) intentional referral (revocation ≥1 year) vs reflex-type improper
  referral (alternative sanctions if conforming, not repeat); (b)(4) no inter-lab communication incl.
  across a lab's sites (whether Lakeshore's two labs sharing one LIS are "separate locations" left to the
  laboratory director; conservative: hide PT results until reporting date); (b)(6) 2-year minimum PT
  records incl. signed attestation; 493.61(b)(1) accreditation hook. 493.1804(c) not in sources (lesson
  says so). Module 5 exhibits: LCR-014, LCR-021, reflex-rule inventory, PT procedure, BECS check.
- 2026-11-13 — Module 5 `the-cap-inspection-from-it` published (verified; prose ~4,976 words). Video: CAP
  "CAP Accreditation: 10 Steps on the Path to Laboratory Excellence" (3ero7W1rCvw; CAP's channel; general
  accreditor overview, not IT). Sources added for it: 493.551, 493.563, 493.1771, 493.1773 (inspection
  requirements). **Locked:** **SI-12** = IT readiness self-check (laboratory director, Quality Analyst,
  LIS analyst; Director attending), kept as a quality-assessment record under 493.1239/493.1299; walked
  exhibits LCR-014 + reconciliation report, middleware rule inventory + LCR path, LCR-021 + reflex
  inventory + PT procedure + no-PT-in-BECS check. Open item from module 2 closed: the LIS-to-BECS review
  had been read from configuration, never tested; SI-12 tested it and found a duplicate-suppression rule
  that silently dropped a same-key corrected donor result **in the test environment** (latent; no known
  event; no harm). **LCR-027**: corrected donor results carry an explicit correction indicator and are
  never deduplicated; true duplicates still suppressed and every drop logged for LIS analyst review;
  laboratory director approves; tests incl. regression of LCR-014 hospital cases and the standing
  corrections/cancellations/duplicates and PT lines; sent-vs-acknowledged reconciliation extended to BECS
  interface; LCR-014 closing note points to LCR-027. Look-back of retained interface logs: **none found**,
  scope on LCR-027; Quality documents FDA-deviation assessment on LCR-027 (no BPDR). Downtime: lab owns
  procedure, IT supplies system facts; evidence = recovery exercise record, post-downtime reconciliation
  (paper keyed, backlog replayed and tested against LCR-027 rule), incident record per real downtime;
  also signed periodic access reviews, remote-access log, retention-retrieval test after every
  upgrade/migration. CLIA text in sources has no "downtime" requirement (lesson says so). Answering
  inspectors: show the record, don't narrate; laboratory director speaks for the lab; nothing changed
  during inspection; Quality Analyst keeps a one-page exhibit index. 493.1773(e) "may reinspect … at any
  time" = standing readiness (announced/unannounced not asserted). AABB column themes only. Course wrap
  links `courses/fda-and-aabb-in-practice/`. **Course complete (5/5).**
