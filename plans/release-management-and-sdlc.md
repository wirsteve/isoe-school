# `release-management-and-sdlc` — course plan

Read this whole file before drafting any module. Update the module table and append a progress
log entry after every module, same discipline as every other course in this curriculum.

Added 2026-11-13 at the user's request ("A TON on the release management and SDLC"), after the
original 13-course curriculum was complete. This is the first course of **Track 7 (expansion)**.

## Finish line

Run any software change at Lakeshore — an in-house release, a vendor's BECS upgrade, or a 2 a.m.
security hotfix — from idea to production and back out again if needed, and say at every step
what evidence a regulator, an assessor, and your own CIO would expect to see.

## Why this course exists, and what it must not re-teach

The curriculum already teaches **what** validation is (`csv-and-becs`: GAMP 5 and the V-model,
IQ/OQ/PQ and traceability, BECS as a device, Part 11, the validated-state lifecycle and patching),
**what** change control is (`quality-system-essentials/change-control-for-regulated-systems`), and
how ITIL change enablement maps onto it (`itsm-for-regulated-blood-services` module 1). This course
is the **operating manual** that sits on top: how releases actually get planned, built, tested,
shipped, rolled back, and measured in a regulated blood center — including modern practice
(agile, CI/CD, automation, secure SDLC) that the earlier courses only touch. **Link to those modules
instead of re-teaching them.** Each module should name the earlier module it builds on in its
"Before you start" line.

## Sources (all local; read from `sources/`, never re-fetch)

| Source | Tier | Use for |
|---|---|---|
| `sources/fda-guidance/general-principles-software-validation-2002-excerpt.md` | FDA guidance (device-manufacturer; general validation thinking — never binding on Lakeshore) | life cycle (4.4), validation after a change (4.7), coverage (4.8), independence of review (4.9), user site testing (5.2.6), maintenance and software changes (5.2.7: corrective/perfective/adaptive; regression) |
| `sources/fda-guidance/becs-validation-users-facility-2013.md` | FDA guidance, blood-specific | III.A vendor selection (upgrades without new 510(k)), III.C plan, III.E risk, III.G activities (installation in production), **III.I validation after a change** (regression analysis and testing), II.C definitions (regression testing) |
| `sources/fda-guidance/csa-production-qms-software-2026-excerpt.md` | FDA guidance (scope: device manufacturers' production/QMS software; excludes device software functions — never say it governs BECS) | risk-based assurance mindset; scripted vs unscripted testing vocabulary only as far as the excerpt supports |
| `sources/cfr/211.68.md`, `sources/cfr/211.100.md`, `sources/cfr/606.60.md`, `sources/cfr/606.100.md`, `sources/cfr/606.160.md`, `sources/cfr/606.165.md` | Regulation | change controls on computer systems (211.68(b)), written procedures/deviations, equipment, SOPs, records, distribution records |
| `sources/cfr/11.10.md` | Regulation | audit trails, authority checks, system documentation change control (11.10(k)) |
| `sources/cfr/864.9165.md` | Regulation | what makes software a BECS; vendor's anomaly list and traceability matrix (special controls) |
| `sources/nist/sp-800-53r5-cm-sa-excerpt.md` | Federal control catalog, voluntary here | CM-2 baseline, CM-3 change control, CM-4 impact analysis, CM-5 access restrictions for change, SA-10/SA-11/SA-15 developer CM, testing, process |
| `sources/nist/sp-800-218-ssdf-excerpt.md` | Voluntary federal framework | secure SDLC practice groups PO/PS/PW/RV; release integrity (PS.2), archiving releases (PS.3), vulnerability response (RV) |
| `sources/aabb/information-systems-section-3.9.md` | AABB Standards — themes and section numbers only, never quote | 3.9 information systems themes, incl. backup/continuity (3.9.2) and documented change processes |
| `sources/aabb/qse-framework.md` | AABB — names/themes only | QSE context for change control, process control |

Not in `sources/` and **must not be quoted or numbered**: ITIL 4 (AXELOS/PeopleCert, paid — paraphrase
practice names only: change enablement, release management, deployment management, service
validation and testing), IEC 62304 (paid — name only), GAMP 5 Second Edition (paid — themes only,
already used in `csv-and-becs`), DORA research (public, not a standard — describe the four key
metrics by name, link the source in resources; no numbers from it unless verified on the page).

## This course's own scenario — locked once, here, for every module to share

**Characters (reused):** the Director (learner, "you"); the Quality Analyst ("she"); the systems
administrator ("he"); the CIO. **New, introduced in module 1:** Lakeshore's **development lead**
("they"), who runs a two-developer in-house team.

**The running artifacts:**

1. **The Hospital Ordering Portal (HOP)** — Lakeshore's in-house web application. Hospital
   transfusion services use it to place component orders and see order status. It reads available
   inventory from BECS through an interface and writes order requests that the distribution staff
   fulfil in BECS. **BECS stays the system of record** for distribution (606.165, 606.160); HOP
   is order intake and status. Lakeshore's regulatory affairs function documented, when HOP was
   first built, that HOP is **not a BECS** because it makes no suitability, labeling, or release
   decision — a decision this course revisits rather than assumes.
   - Classified GxP-relevant, custom software (GAMP 5 Category 5, per `csv-and-becs` vocabulary).
   - **HOP 3.0 (release record REL-0311)** is the course's main in-house release. Its headline
   feature: **auto-allocation** — HOP would propose specific units (by donation identification
   number) to fill an order, instead of distribution staff choosing them in BECS. Whether that
   moves HOP toward BECS territory is a genuine open question routed to regulatory affairs in
   module 1 and **answered by regulatory affairs, documented, in module 2**: auto-allocation ships
   only as a *proposal* that distribution staff must confirm in BECS; BECS continues to perform
   every suitability check and record the distribution; HOP stays "not a BECS," with the
   rationale re-documented and a trigger written down (any future feature that lets HOP commit an
   allocation without a BECS step reopens the question).
2. **BECS Release C (validation record VAL-1418)** — the vendor's next release after Release B
   (`csv-and-becs`' VAL-1203). Module 5's worked example. Vendor states Release C did **not** need a
   new 510(k) (the "upgrade without new clearance" situation the BECS guidance III.A describes);
   release notes list two resolved anomalies and one new known anomaly in label reprint
   formatting. Never invent the vendor's name.
3. **The emergency: CHG-2207** — a critical vulnerability disclosed in a third-party web
   framework component HOP uses (module 10). No vulnerability identifier, no real product name.

**Environments (locked, module 3):** development, test, validation (controlled, mirrors
production), production. HOP's test data in development and test is synthetic; the validation
environment uses a de-identified copy refreshed under change control. No real donor data outside
validation and production.

No calendar years in the Lakeshore narrative. Never name a real ITSM, CI/CD, source-control,
testing, or BECS product — describe generically ("the source-control platform," "the pipeline").

## Lesson format additions for this course (and every new course from 2026-11-13)

Per the user's "I don't have time to read," every lesson opens — right after front matter — with:

```
::: {.callout-tip appearance="simple"}
## The short version
- 4–6 bullets: the finish line, the scenario's punchline, the rule in one line, the one thing to
  ask on Monday, the trap.
:::
```

The rest of the lesson stays **in depth** (TEACHING.md spine, 2,500–4,500 words of prose). Use
headings that make the page skimmable. Narration is deliberately out of scope for now (the user will
look at it later as a site-wide "turn on narration" accessibility feature) — do not add audio.

## Modules

| # | Slug | Finish line | `order:` | Status |
|---|---|---|---|---|
| — | (syllabus) | — | 127 | Published |
| 1 | `sdlc-models-in-a-regulated-blood-center` | Place any Lakeshore change on the right lifecycle (waterfall/V, iterative, agile, DevOps) and say what validation evidence each model has to produce, and when — using HOP 3.0's auto-allocation question. | 128/129 | Published |
| 2 | `requirements-backlogs-and-traceability-in-agile` | Turn user stories into requirements an inspector can trace to tests, write a definition of done that includes validation evidence, and record the regulatory-affairs decision on auto-allocation. | 130/131 | Published |
| 3 | `environments-baselines-and-test-data` | Design dev/test/validation/production environments, keep a configuration baseline (CM-2), and keep real donor data out of non-production. | 132/133 | Not started |
| 4 | `release-management-deployment-and-change-control` | Tell ITIL release management, deployment management and change enablement apart, classify release types, and set a release calendar and freeze windows that respect blood operations. | 134/135 | Not started |
| 5 | `vendor-release-intake-for-becs` | Take a vendor's BECS release (Release C) from release notes to a validation-in-your-facility decision: 510(k) status, anomaly lists, impact assessment, regression scope. | 136/137 | Not started |
| 6 | `risk-based-testing-and-regression` | Size a test effort by risk, decide regression scope from an impact analysis, and know what test evidence must look like. | 138/139 | Not started |
| 7 | `ci-cd-pipelines-under-gxp` | Run HOP through an automated pipeline without breaking segregation of duties, tool assurance, or the audit trail of who deployed what. | 140/141 | Not started |
| 8 | `secure-sdlc-and-software-supply-chain` | Apply the SSDF's four practice groups to HOP, and ask a vendor the right supply-chain questions (component inventories, release integrity, vulnerability response). | 142/143 | Not started |
| 9 | `deployment-cutover-and-rollback` | Plan a go-live with go/no-go criteria, BECS downtime procedures, post-deployment verification, and a rollback you've actually rehearsed. | 144/145 | Not started |
| 10 | `emergency-changes-and-hotfixes` | Ship CHG-2207 fast without leaving a validation gap: emergency change path, retrospective documentation, and when an emergency becomes a deviation. | 146/147 | Not started |
| 11 | `post-release-review-and-delivery-metrics` | Close the loop: hypercare, post-implementation review, delivery metrics (DORA's four keys) and how to report release health upward. | 148/149 | Not started |

## Progress log

- 2026-11-13 — Course scoped (Phase 2, strongest model). Sources fetched: GPSV 2002 excerpt, NIST
  SSDF excerpt, NIST 800-53 CM/SA excerpt. `order:` 127–149 assigned (next unused after this
  course: **150**). Syllabus page published. Next: module 1.
- 2026-11-13 — Module 1 `sdlc-models-in-a-regulated-blood-center` published (Sonnet draft, verified:
  orders, short-version box, quotes found in `sources/`, links 200, mmdc diagram, video oEmbed).
  Video: FIVE Validation "Webinar GAMP5 CSA Agile Methods" (DMh_ES-XVbU; vendor webinar, framed as
  such; added by the main session after the drafter found none). **Locked:** the Director's decision —
  sprints ship to the *validation environment* only; production releases follow a *validated release
  cadence* through a release gate (approved validation plan + risk assessment before sprint one;
  incremental evidence each sprint; QA review; regression analysis reviewed per BECS guidance III.I;
  recorded authorized approval + change record; validation summary; post-release monitoring) — the
  lesson says plainly no source mandates a cadence. "The plan is the backlog" rejected (backlog =
  requirements; plan = scope, risk, approvals, definition of done, evidence environment).
  Auto-allocation routed in writing to regulatory affairs via a memo in the lesson; backlog item
  marked "pending regulatory determination"; other HOP 3.0 stories proceed. Independence of review
  comes from outside the two-developer team (QA, systems administrator), GPSV 4.9 as general
  thinking. HOP = GAMP Category 5 ("vendor tested it" unavailable). Lifecycle placement: HOP 3.0 =
  agile inside a controlled release path; Release C = vendor lifecycle + V-style user validation
  (module 5); CHG-2207 = emergency path with retrospective documentation (module 10). Lesson links
  forward to module 2 by slug (fine once module 2 exists).
- 2026-11-13 — Module 2 `requirements-backlogs-and-traceability-in-agile` published (verified).
  Video: Guru99 "Requirement Traceability Matrix (RTM) in Software Testing" (cm-cSW66Isc). **Locked:**
  regulatory affairs' memo to the Director records the plan's decision (proposal only; staff confirm in
  BECS; BECS does every suitability check and records distribution; HOP stays "not a BECS"; rationale
  re-documented in HOP's file; trigger = any feature letting HOP commit an allocation without a BECS
  step). Five requirement rows: HOP-R31 proposal-only label (high), HOP-R32 HOP shall not
  commit/finalize/reserve/release or write status/distribution records to BECS (high), HOP-R33 no
  BECS effect until BECS confirmation (high), HOP-R34 HOP shows no suitability result of its own,
  only BECS-read status with read time (high), HOP-R35 stale proposals marked (medium; from interface
  risk). Stories HOP-482a–d (Given/When/Then) → tests TC-31…TC-35. QA rejected HOP-482 "auto-allocation
  works well" as untestable (split into a post-release goal + testable requirements). DEF-0412: TC-32c
  failed in rc1 (HOP wrote a soft hold to the order request), fixed, passed in rc2. Mid-release story
  HOP-531 "auto-confirm single-unit orders" fired the trigger → back to regulatory affairs, pending;
  R31–R33 not edited. Story layer flexible; requirement layer under change control (versioned,
  impact-assessed, authorized, results tied to requirement version, change record cites REL-0311).
  Definition of done has nine items incl. validation-environment tests with BECS-guidance III.G fields
  and tester independent of developer for high-risk requirements (Lakeshore decision; GPSV 4.9 as
  general thinking). Story-done ≠ release-ready; release gate is module 4's.
