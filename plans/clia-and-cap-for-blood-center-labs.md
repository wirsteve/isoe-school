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
| 1 | `where-clia-and-cap-reach-a-blood-center` | Say which of Lakeshore's tests CLIA covers (per 493.2/493.3 and CMS QSO-25-18), how CAP's deemed accreditation fits, and how FDA, CMS/CAP and AABB oversight overlap without replacing each other. | 164/165 | Not started |
| 2 | `the-lis-and-the-test-report` | Apply 493.1291 (incl. 1291(a)'s electronic-transmission requirement), 493.1283, 493.1105 and 493.1231 to the LIS, the LIS-to-BECS interface and reference-lab reports, including corrected reports. | 166/167 | Not started |
| 3 | `instruments-middleware-and-performance-verification` | Direct IT's part in 493.1252/493.1253/493.1281: instrument and middleware interfaces, rule changes, and the verification evidence a change needs. | 168/169 | Not started |
| 4 | `proficiency-testing-and-the-lis` | Keep PT samples handled like patient samples but never referred out (493.801) and never mistaken for donations in BECS. | 170/171 | Not started |
| 5 | `the-cap-inspection-from-it` | Prepare IT for a biennial CAP inspection — LIS validation, interfaces, downtime, access, retention, change control — and line it up with FDA and AABB. | 172/173 | Not started |

## Progress log

- 2026-11-13 — Course scoped (Phase 2). Sources: 42 CFR 493 excerpt (expanded), CMS QSO-25-18, CMS
  CLIA landing page, CAP public pages. `order:` 163–173 (next unused: **174**).
