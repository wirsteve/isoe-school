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
| 3 | `environments-baselines-and-test-data` | Design dev/test/validation/production environments, keep a configuration baseline (CM-2), and keep real donor data out of non-production. | 132/133 | Published |
| 4 | `release-management-deployment-and-change-control` | Tell ITIL release management, deployment management and change enablement apart, classify release types, and set a release calendar and freeze windows that respect blood operations. | 134/135 | Published |
| 5 | `vendor-release-intake-for-becs` | Take a vendor's BECS release (Release C) from release notes to a validation-in-your-facility decision: 510(k) status, anomaly lists, impact assessment, regression scope. | 136/137 | Published |
| 6 | `risk-based-testing-and-regression` | Size a test effort by risk, decide regression scope from an impact analysis, and know what test evidence must look like. | 138/139 | Published |
| 7 | `ci-cd-pipelines-under-gxp` | Run HOP through an automated pipeline without breaking segregation of duties, tool assurance, or the audit trail of who deployed what. | 140/141 | Published |
| 8 | `secure-sdlc-and-software-supply-chain` | Apply the SSDF's four practice groups to HOP, and ask a vendor the right supply-chain questions (component inventories, release integrity, vulnerability response). | 142/143 | Not started |
| 9 | `deployment-cutover-and-rollback` | Plan a go-live with go/no-go criteria, BECS downtime procedures, post-deployment verification, and a rollback you've actually rehearsed. | 144/145 | Published |
| 10 | `emergency-changes-and-hotfixes` | Ship CHG-2207 fast without leaving a validation gap: emergency change path, retrospective documentation, and when an emergency becomes a deviation. | 146/147 | Not started |
| 11 | `post-release-review-and-delivery-metrics` | Close the loop: hypercare, post-implementation review, delivery metrics (DORA's software delivery performance metrics — DORA now describes five, not four; use what dora.dev says on the day) and how to report release health upward. | 148/149 | Not started |

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
- 2026-11-13 — Module 3 `environments-baselines-and-test-data` published (verified). Video: KamilSec
  "Episode 2 BASELINE CONFIGURATION (CM-2)" (6d9vetMzbIk; modest-credibility security-training channel,
  framed as vocabulary only — swap if better found). **Locked:** rc2's validation-environment
  HOP-to-BECS interface pointed at a BECS test instance one patch level behind production (found by
  QA; systems administrator confirmed nobody owned "validation's BECS follows production"). DEF-0412's
  rc2 retest rested on that evidence → reopened/annotated until re-run passes. Resolution: bring the
  BECS test instance to production's baseline under change control; re-run interface-dependent tests
  TC-32a/b/c, TC-34, TC-35; TC-31 is HOP-only and its rc2 evidence stands with the classification
  recorded (lesson labels the classification as a documented judgment). Handled as a deviation from
  the test plan (original results kept, marked not accepted; impact analysis, corrective change, new
  results). Root-cause fixes: named owner for validation-to-production parity; baseline drift check
  as an entry criterion for formal testing; environment fields added to test evidence (environment,
  HOP build, baseline reference and comparison, interface targets incl. BECS patch level, config
  version, data set and refresh date). The development lead's request for "a quick copy of last
  month's real orders" in Test refused → synthetic reproduction, then privacy-office de-identified
  extract into validation under a change record, then production-side investigation under production
  controls. Access: developers read-only in validation, none in production; systems administrator /
  release role deploys approved builds and baseline changes; Quality reads, witnesses, approves (CM-5
  vocabulary; pipeline enforcement taught in module 7). 211.68(b)'s applicability to HOP left to
  Quality and regulatory affairs. Lessons run long (~5,500–6,300 words incl. quotes) — accepted:
  the user asked for in-depth lessons.
- 2026-11-13 — Module 4 `release-management-deployment-and-change-control` published (verified; long,
  ~7,300 words incl. quotes/checklists — accepted). Video: Romano Roth "What is the difference between
  deployment and release?" (qmItPR0I-OE; practitioner talk, framed as software-delivery framing).
  **Locked:** ITIL split — change enablement authorizes/schedules and leaves the change record;
  release management plans/packages and owns REL-0311, the calendar and the readiness checklist;
  deployment management (systems administrator) moves the exact validated build. Deployed-but-switched-
  off code is still a change under 211.68(b); switch-on is a second recorded event. Release types
  major/minor/patch/emergency are Lakeshore categories by consequence, not version number; patch still
  gets scaled regression analysis; separate "interface-touching" flag for anything touching the
  HOP–BECS interface, vendor releases included. Release package = build, DB changes, config/interface
  settings, versioned requirements, release notes, validation summary, baseline update,
  training/communication; promote what was validated, no rebuild; any late fix = rc4 with own
  evidence; release record carries the "validated pair" (HOP build + BECS baseline). 14-item readiness
  checklist citing modules 1–3. rc3 re-run of TC-32a/b/c, TC-34, TC-35 passed; DEF-0412 closed;
  HOP-531 not in the package. Freeze defined by path (HOP, interface, BECS distribution functions,
  shared infrastructure beneath); pre-freeze buffer so monitoring ends before the freeze; change
  authority convenes on schedule and on conditions (CM-3(g)); freeze exit only via emergency path
  with named waiver from head of distribution + Quality; freeze ends when head of distribution
  confirms normal volume and no open HOP issues. **Director's decision:** HOP 3.0 deploys first,
  before the freeze, validated against production's current BECS baseline (cutoff does not move);
  Release C waits until after the freeze; VAL-1418 scope must include HOP–BECS interface regression
  (TC-32a/b/c, TC-34, TC-35 first candidates); validation env isn't production-equivalent while
  holding the Release C candidate baseline, so no HOP evidence then. Rule: never two releases
  touching the HOP–BECS interface in the same window (slot + monitoring period). QA reviews one
  package at a time.
- 2026-11-13 — Module 5 `vendor-release-intake-for-becs` published (verified; ~7,200 words incl.
  quotes). Video: Matrix One "How to Reuse Validated Test Cases Across System Upgrades and Releases |
  Matrix Validate" (IFJ8dYFpVWo; vendor, framed as background). **Locked:** Release C's two resolved
  anomalies = (1) the Release B reprint-with-prior-quarantine-status edge case (boundary-retested by
  LR-5); (2) an inventory summary count that could briefly disagree with the unit-level list during
  bulk status changes (written vendor question whether the HOP–BECS availability read shares that
  logic; until answered TC-34/TC-35 stay in scope). New anomaly: on a reprint of a multi-attribute
  product name the line can wrap and crowd the machine-readable code; vendor rates it "cosmetic",
  workaround = alternate reprint layout. "No new 510(k)" basis not judged by Lakeshore — asked in
  writing. Decision: Release C proceeds after the freeze in its own window, VAL-1418 scoped by
  Lakeshore's impact analysis; anomaly accepted only conditionally (alternate layout + second-person
  check with a reprint log + tests LR-1…LR-6 at central, Brookfield, Fairview); if they fail, Release
  C does not go live and Lakeshore waits for the vendor fix. Quality can block go-live on a labeling
  question and the Director does not override it (approvers follow VAL-1203's pattern: Quality
  blocking, Director co-approving). Regression tiers: Tier 1 = LR-1…LR-6 + TC-32a/b/c, TC-34, TC-35;
  Tier 2 = targeted checks on central-to-satellite sync, instrument/lab inbound path, ICCBBA table
  load, Riverside shipment records, HOP's inventory read; Tier 3 = documented rationale (incl. TC-31,
  HOP-only). Validated pair after Release C = same HOP build + new BECS baseline (VAL-1418 evidence).
  Validation env's BECS moves to the Release C baseline only after HOP 3.0 deploys and its monitoring
  period ends; production install waits for the post-freeze window.
- 2026-11-13 — Module 6 `risk-based-testing-and-regression` published (verified; long). Video: Parasoft
  "What Is Test Impact Analysis?  | Parasoft" (4Q5xypeIOrU; tool vendor, framed as background).
  **Locked:** Director's decision on "just use the vendor's OQ" vs. QA's "re-run everything": neither.
  Vendor OQ report received, reviewed, filed in system documentation and used as the basis for Tier 3
  on unchanged vendor functions Lakeshore can review and that aren't adjacent to a change or Lakeshore
  configuration; historical library is a source of regression cases selected by the analysis (cases
  outside it neither re-run nor deleted); Lakeshore's own testing = Tier 1 (LR-1…LR-6, TC-32a/b/c,
  TC-34, TC-35) + Tier 2 targeted checks; Tier 3 items incl. TC-31 carry a written rationale naming
  the document reviewed; all written into VAL-1418's plan before testing; Quality can block plan
  approval without Director override. Method: depth follows severity and detectability, scope follows
  the impact analysis (changed / adjacent / unchanged-but-vulnerable); BECS III.E's "assume most
  hazards are likely" means likelihood doesn't rescue a high-severity function; tests move up on a
  vendor "unknown"/"yes", an earlier-tier failure, a patient-safety path, or a past deviation; move
  down only with a dated written line. Leverage conditions for vendor evidence (documentation in hand
  and reviewed; function unchanged per revision history and not in vendor's "other affected
  functions"; not adjacent to Lakeshore config/interfaces/labeling; reviewer records what and why);
  labeling and HOP–BECS interface items never qualify on documents alone. Test record = III.G fields
  (input, expected output written before run, actual, acceptance criteria, pass/fail, tester, date) +
  module 3 environment block + identified screen prints + linked defects (failures never overwritten)
  + reviewer/date. Techniques: scripted for Tier 1; chartered exploratory for Tier 2 (Lakeshore
  decision, not "CSA permission"); automation for stable repeated checks (HOP–BECS interface suite is
  a *proposal* to cost) — automated results are evidence only if scripts controlled, tool/config
  recorded, results retained and independently reviewed. Boundary cases: LR-1 longest name; LR-5
  reprint in the same second as a status change ±1 s; HOP-R35 proposal at/just under/just over age
  limit. CSA "scripted/unscripted" not characterized from the excerpt (not in it).
- 2026-11-13 — Module 7 `ci-cd-pipelines-under-gxp` published (verified; very long, ~8,500 words incl.
  tables — future modules capped harder). Video: Modern Software Engineering "Continuous Deployment or
  Continuous Delivery? | When To Release" (mBzDPRgue6s). **Locked:** green build auto-deploys to
  development and test; validation deploy on demand, triggered by the release role (systems
  administrator), with an automated drift check against production's baseline; production promotion
  accepts only an artifact already validated (matched by artifact ID + checksum), needs an authorized
  change record and recorded Quality + release-role approvals (requester and change author excluded);
  pipeline also checks the freeze calendar and interface collisions, re-runs drift check at gate time,
  re-verifies checksum on arrival. Continuous deployment to production rejected for HOP; "the tests
  are the approval" declined (tests are evidence, not authorization; module 4 checklist rows 5, 10, 11,
  14 not test-measurable; GPSV 4.9 independence). Pipeline deployment identity holds validation and
  production credentials — no developer does; pipeline definition and gate rules under change control
  with review outside the dev team, Quality informed of gate changes; platform administered by the
  systems administrator; the other developer reviews code but isn't a production approver; no bypass
  accounts (break-glass = module 10). Artifact built once, write-once store, pipeline-recorded
  checksum re-verified at each deployment and cited in test evidence and deployment record; signing
  named as stronger option, deferred to module 8; archived releases also serve module 9's rollback.
  Tool assurance: documented risk-based assurance before HOP's next release uses the pipeline (manual
  path until then); risk ratings — gate/promotion high, artifact store + checksum high-medium, test
  runner/reporting high-medium, drift check medium, build lower, notifications low; nine-attempt
  bypass challenge-test table is the assurance evidence, repeated after any gate/platform change.
  Deployment-record fields defined; exported to REL-0311 at close-out; run-history retention checked
  against the release record's. Pipeline-log/approval-click Part 11 status = documented Quality and
  regulatory-affairs judgment; lesson recommends approving once in the controlled change record,
  which the pipeline reads.
- 2026-11-13 — Module 9 `deployment-cutover-and-rollback` published (verified; published before
  module 8, which was still drafting). Video: Microsoft Dynamics 365 Community "Dynamics 365 Cutover and
  Remote Go Live Strategy - TechTalk" (UKmTRdNsSdg; added by main session, vendor guidance framed as
  such). **Locked:** starting condition LR-1…LR-6 passed at central, Brookfield, Fairview + regression
  tiers passed. First rollback rehearsal took 9 h vs a pencilled 6 h window (restore media in offsite
  archive; Release B install had to be rebuilt). Plan changes: earlier point-of-no-return checkpoint
  (window end − rehearsed rollback − margin = hour 4 of 10); pre-staged Release B install + restore-
  tested pre-window backup at go/no-go 2 (rehearsed rollback cut to 5 h); 10-hour window agreed with
  distribution and site leads; second timed rehearsal reviewed by Quality. Real go-live fit the window;
  checkpoint recorded "continue"; BECS reopened; first labels printed correctly; reconciliation and
  monitoring began (module 11 owns hypercare); first rehearsal is not itself a deviation. Two go/no-go
  points (day before; hour 1 with window open) + rollback checkpoint; Quality blocks on labeling,
  Director co-approves without override; distribution can no-go on operational grounds; vendor
  consultant advises only; a no-go leaves Release B in production and is normal. Rollback stages:
  before install (cheap), mid-install, after conversion before reopen (restore, no data loss — paper
  bridges), after reopen (restore + re-enter, or roll forward — roll forward needs its own change
  record). Downtime binders at all three sites incl. fresh deferred-donor list checked before window;
  paper stays the retained original; entries carry event time + downtime marker; status, deferral,
  distribution reconciled first; second-person verification; counts reconcile; exceptions → deviation
  process; hospitals informed via HOP status messaging. Production verification: installation vs
  validated baseline, config, interface/error-file checks, conversion counts and samples, narrow
  Quality-controlled labeling smoke check; destructive/abnormal tests stay in validation or
  monitoring. Rollback restores Release B's baseline record (media, config, templates, verified
  backup); HOP rollback uses module 7's archived artifact. Open questions left to the right owners:
  HOP switch to hide proposals during downtime (development lead); BECS back-timed entries (vendor);
  write transactions as labeling smoke check (Quality).
