# Plan: `csv-and-becs` (Track 3, course 1 of 2)

Course page: `courses/csv-and-becs/index.qmd`.
This file is the memory between sessions. Update the status table and add to the progress
log after every module. **Read the whole "Scoping decisions" and "Sourcing notes" sections
before drafting any module.** This course was scoped in a session where fda.gov was
reachable for the first time, and several things earlier plans flagged as unverifiable are
now verified and saved in `sources/`. Several things are still not verified. Both lists are
below, and a drafter who skips them will either re-flag something that's settled or assert
something that isn't.

## Finish line

Read a validation package (URS/FRS, IQ/OQ/PQ, traceability matrix) and say whether it's
defensible for a BECS or BECS-adjacent system, and place BECS correctly under FDA's
device-grade quality system expectations.

(Verbatim from `plans/curriculum.md`.) Two words in it need a working definition, used
consistently in every module:

- **"Defensible"** now means two layers, not one. Layer 1 is the **decision trail** (the
  cold-read test from `directing-the-quality-analyst`): what was decided, on what evidence,
  against what criteria, by whom, in what order. Layer 2, new in this course, is **technical
  adequacy** (the "adequacy check," defined below): did the testing actually prove the
  requirements, at the right depth, under real conditions? A package can pass layer 1 and fail
  layer 2. VIA-0842 is exactly that case, and module 6 shows it.
- **"BECS-adjacent system"** means a system that feeds, consumes, or hosts BECS's
  critical-function data without itself being the cleared BECS product: the OS and database
  layer, the testing-lab LIS (laboratory information system) and instrument middleware, label
  printing, interface components, and any in-house scripts or reports. Whether a particular
  adjacent component is itself a regulated "BECS accessory" (21 CFR 864.9165(a)) is a
  regulatory determination. Lessons name the question and route it, they don't decide it.

**"Place BECS correctly" has a verified answer that a naive reading of `plans/curriculum.md`
gets wrong.** FDA's device quality regulation, Part 820 (now the Quality Management System
Regulation, QMSR), binds the BECS *manufacturer*. 21 CFR 820.1(a)(3) says Part 820 does **not**
apply to manufacturers of blood and blood components, which are subject to subchapter F
(Parts 600–680). So Lakeshore's own obligations come from blood CGMP (Part 606, Part 211 as it
supplements, Part 11) and FDA's BECS user-facility guidance, while the product it runs carries
device obligations through its vendor. Device-grade expectations reach Lakeshore *indirectly*:
through what it should demand from the vendor, and through user-validation expectations that
mirror device verification and validation. The one way they could reach Lakeshore *directly* is
if Lakeshore itself designs or materially modifies device software, which module 4 raises as a
question for regulatory affairs, never as an IT decision. Every module must stay consistent with
this placement. See "Notes for the orchestrator" for the curriculum.md wording issue.

## Prerequisites (what's already established; build on it, don't contradict it)

All three foundations, all of `blood-center-operations`, all of `quality-system-essentials`,
and all of `directing-the-quality-analyst` are published. Link back. Don't re-teach.

**Foundations.**
- `reading-a-cfr-citation`: citation anatomy. Use it, don't explain it.
- `regulatory-landscape-orientation`: statute / regulation / guidance / AABB Standard, plus
  "industry practice" as a fourth label. **Tier-labeling is the backbone of this course.**
  GAMP 5 and IQ/OQ/PQ are industry practice. FDA's BECS guidance is guidance. ISO 13485 is an
  international standard that becomes binding on *device manufacturers* only because Part 820
  incorporates it by reference. Don't re-teach the tiers. Apply them, and add the "standard
  incorporated by reference" case once, in module 4.
- `risk-and-controls-vocabulary`: likelihood × severity × detectability, inherent vs. residual,
  preventive/detective/corrective, ICH Q9 as a guideline (not regulation). Module 1 uses this
  directly: FDA's BECS guidance tells you to treat most software hazards as **high probability**
  (verbatim in `sources/fda-guidance/becs-validation-users-facility-2013.md`, section III.E),
  which means severity and detectability, not likelihood, drive BECS test depth. That's a
  sharp, sourced twist on the foundation's vocabulary. Use it.

**`blood-center-operations`, especially `becs-in-the-pipeline` (order 10).** Fixed facts:
- **BECS definition and its four critical functions: eligibility, release, labeling,
  disposition.** This is the curriculum's operational framing. FDA's own classification text
  (864.9165(a)) words BECS's purpose differently: identifying ineligible donors, preventing the
  release of unsuitable blood and components, compatibility testing, and positive patient
  identification at transfusion. Eligibility and release map directly. Labeling and disposition
  are this curriculum's framing of how release control is exercised at a blood center. **Never
  claim 864.9165 lists "four critical functions."** Module 3 should show the crosswalk honestly.
- **Two legal footings**, stated generally: CGMP applies to the function no matter who or what
  performs it (606.100(b)); some BECS software meets the device definition and needs 510(k)
  clearance, so the vendor is a regulated manufacturer. This course makes the second footing
  specific (864.9165, Class II, special controls; Part 820 QMSR) without contradicting the
  general statement.
- **"Validated state"** was named via 21 CFR 11.10(a) ("consistent intended performance"), and
  the module said Part 11's validation framework comes later. Module 5 of this course refines
  this (see Scoping decisions): 11.10(a) is still the regulation's text, but FDA's 2003 Part 11
  guidance says it intends to exercise enforcement discretion on 11.10(a) and to rely on
  predicate rules for validation. The earlier lessons remain accurate as written. Don't call
  them wrong. Add the enforcement posture.
- **The Friday OS patch**: a medium-severity CVE patch to the OS on the BECS application
  server, rejected by the QA pending a validation impact assessment. The sysadmin's argument
  ("we didn't touch BECS's code") and the lesson's answer (OS patches can change timing,
  memory, and error behavior) are fixed. FDA's BECS guidance now gives that answer a
  guidance-tier citation (section III.I: "a seemingly small local change (e.g., software,
  hardware, peripherals, or infrastructure) may have a significant global system effect").
  Module 6 should land that quote.
- **ICCBBA product-code-table vendor push** (`component-processing-and-labeling`): a vendor
  update carrying the quarterly ICCBBA table, applied to BECS with no Quality review, about 40
  units labeled one revision behind, none shipped. Named in `becs-in-the-pipeline` as a
  vendor-change-governance failure.
- **CMDB framing**: BECS-linked CIs carry a "current validated configuration" attribute.
  Drift from it is a compliance gap. Module 6's periodic review uses this.
- **"One incident, two tracks"**: IT incident and the 606.171 deviation/reportability track.
  Apply, don't re-teach.
- `becs-in-the-pipeline`'s check question Q1 already used "FDA requires GAMP 5 with IQ/OQ/PQ"
  as its "not a regulatory requirement" question. **Don't reuse that exact question.** Pick
  different hooks (listed below).
- `storage-distribution-and-hemovigilance`: LIS (lab/blood-bank testing workflows, at a
  hospital the transfusion service's system) vs. HIS (the hospital's EHR, the clinical
  record). Lakeshore's BECS visibility **ends at distribution** to Riverside General Hospital
  (fictional, 340 beds, the established consignee). 606.165's distribution/receipt records are
  "two halves of the same transaction." Module 7 builds on this boundary.
- `collection-and-testing`: Lakeshore's **testing lab has its own LIS**, and quarantine status
  must propagate to every component of a donation. That lesson warned about an overnight batch
  job creating a window where a product could ship, and about two systems disagreeing on which
  products trace to a donation number. Module 7 turns both into interface-validation questions.

**`quality-system-essentials`.** Apply its machinery, don't re-teach it:
- m4 `change-control-for-regulated-systems`: five stages (request, impact and risk assessment,
  approval, implementation, verification), Quality as a required approver, **the Director as
  system-owner co-approver ("both required, neither sufficient alone")**, implementation
  evidence vs. verification evidence, pre-approved change types as the analog of ITIL standard
  changes, planned deviations. That module already raised "does this change require
  validation or re-validation, and who decides?" in general form and pointed BECS cases to the
  validation impact assessment. Module 6 here supplies the method.
- m3 CAPA effectiveness checks ("could it fail?"), m6 ICH Q9 risk acceptance as an owned
  decision, m5 Good Documentation Practices, m7 management review. Apply by name.
- QSE's plan explicitly assigned "validation methodology, GAMP 5, IQ/OQ/PQ, V-model, patch
  management under a validated state, ISO 13485/QMSR" to this course and "ALCOA+, audit trails,
  Part 11 e-signatures, hybrid/legacy systems, retention" to `data-integrity-and-records`.
  Honor both.

**`directing-the-quality-analyst`.** Most important continuity source.
- **The cold-read test** (exact wording, from that plan's progress log): *Would this document
  survive an inspector reading it cold, a year from now, with its author not in the room?*
  Conclusion / Evidence / Reasoning / Criteria first / Decision trail / Loose ends. **Gap
  triage**: *must fix before I sign* / *fix going forward* / *fine as is*. Reuse by name. Don't
  re-teach.
- **Roles**: your QA (unnamed, "she," competent and improving after DQA m6's coaching, not a
  straw man); the **Quality Validation Lead** (a role, no personal name, introduced in DQA m4;
  signs test-scope rationales; the person DQA m4 told the Director to route sufficiency
  questions to); your **systems administrator** (unnamed, "he," from `becs-in-the-pipeline`);
  the medical director or a delegated quality officer (disposition authority); Lakeshore's
  privacy/security owner (DQA m3). The Director is **system-owner co-approver** on BECS
  changes and validation releases. Quality's approval is **blocking**. Keep all of these.
- **VIA-0842, locked facts. Do not alter any of them.** VIA ID VIA-0842; test summary
  BECS-TS-0842. System: BECS application server. Change: the vendor-released OS security patch
  (medium-severity CVE per vendor advisory), no BECS application code modified. Opened Fri
  11/06. Critical functions "reviewed: eligibility, release, labeling, disposition. No impact
  identified." Impact determination leaned on the vendor's release notes ("OS-level memory
  handling only") and compatibility statement. **12 targeted test cases**: donor-eligibility
  lookups, quarantine/release transactions, label-print jobs at the primary print station.
  **No instrument-interface test.** Scope chosen "in place of full revalidation, on the basis
  that the vendor characterizes this patch as OS-level only," with "Scope and rationale
  reviewed: Quality Validation Lead, 11/06." Execution Mon 11/09–Tue 11/10. **Step 7
  (label-print job timing, primary print station) failed on first run, re-run same day,
  passed, no discrepancy note.** Protocol (acceptance criteria) approved Wed 11/11, after
  execution. **Production deployment Wed 11/11, 10:15 p.m.** (per BECS change record). Quality
  approval (signed by the QA) 11/12. System-owner line blank at review. Open item: "BECS-to-
  hospital interface regression testing to follow," no owner or date. In DQA m4's reveal, the
  12-test scope was the **planted non-gap**: the Director couldn't judge sufficiency, but the
  rationale was documented and signed. DQA m6's rebuilt management-review packet then reported
  VIA-0842 as **"closed this cycle, with a decision-trail gap corrected before production
  sign-off."** So in this course's story time, VIA-0842 is closed history. Module 6 re-reads it
  retrospectively. It doesn't reopen or rewrite it.
- DQA m4 labeled the step-7 re-run an **industry-practice / decision-trail concern** and
  deliberately did **not** cite 606.100(c) or 606.160(a)(1). That was correct as far as Part 606
  goes. This course can add, accurately, that FDA's BECS guidance (guidance tier) recommends an
  SOP for "Handling validation deviations" (III.F) and a validation report that includes "any
  variances or failed tests" (III.H). That **upgrades** the concern's tier. It doesn't
  contradict DQA m4. Say it that way.
- **DEV-1147 / CAPA-1147-A** (DQA m2): the ICCBBA push as a deviation. Push logged 01:58 a.m.
  Wednesday; ~40 units printed 02:00–06:15 a.m.; discovered by Processing Supervisor M. Colvin;
  root cause as written blamed the vendor; preventive action 1 "Reassess the BECS vendor,
  focused on change notification"; preventive action 2 contract amendment, target TBD.
- **VRA-0219** (DQA m5): the BECS vendor reassessment. Questionnaire-only (no on-site audit,
  documented rationale). Vendor's "Yes, we notify customers in advance of any change" was
  contradicted by DEV-1147's log. SOC 2 "clean opinion" with no scope or period stated. Tier
  "Low" by reputation. One signature for quality and security lenses. Residual risk "accepted"
  with no named owner. Contract amendment recommendation unowned. DQA m6's packet later showed
  VRA-0219 "current as of this cycle; one contract follow-up still open, owner and date
  assigned."
- **DQA m3 drill item 4**: a *different*, unnamed scheduled off-hours BECS configuration change
  whose post-deployment verification failed on the **label-printer interface** ("call me now").
  Distinct from the OS patch. Module 6's periodic review may list it in BECS's change history.
- **DQA m3 drill item 2**: the BECS vendor reported a security incident on its
  **remote-support platform**. Module 5's closed-system question can use the vendor's remote
  access as its anchor.
- **DQA's "Deliberately deferred" table** lists what this course should eventually let DQA m4
  deepen. The mapping is in "Feeds back to `directing-the-quality-analyst`" below.

**Through-line facts from other courses** (Owen Pruitt, Brookfield and Fairview satellite
sites, the tracked-distribution/acknowledgment mechanism, the still-unbuilt automated
review-date trigger) are fixed. Reference them if useful. Don't alter them. Brookfield and
Fairview matter here: FDA's BECS guidance says a central server used by multiple locations
needs a location-specific validation plan at each site (III.D). That's module 3's multi-site
hook.

## Modules

Build in order. One module per session: lesson `index.qmd` plus `resources.qmd` under
`courses/csv-and-becs/<slug>/`.

| # | Slug | Finish line | Status |
|---|---|---|---|
| 1 | `gamp5-and-the-v-model` | Sort any BECS or BECS-adjacent component into its GAMP 5 software category and say what that implies; walk the V-model from user, functional, and design specifications (URS, FS/FRS, DS) to the tests that answer each; and explain why a documented risk assessment, not the category alone, sets test depth. Say what 21 CFR 211.68(a) and FDA's BECS guidance actually require and what GAMP 5 only supplies as practice. | Published |
| 2 | `iq-oq-pq-and-traceability` | Read an executed validation package (IQ, OQ, and PQ evidence, the traceability matrix, and the summary report) and judge whether every high-risk requirement was tested in a way that could fail, under the conditions it will really run in, with every failure dispositioned. Say whether the package is defensible, using the cold-read test plus the new adequacy check. | Not started |
| 3 | `becs-as-a-regulated-device` | Explain what makes BECS a regulated medical device (21 CFR 864.9165, Class II with special controls, cleared through 510(k) premarket notification), what a clearance does and doesn't tell you about the version and configuration you run, and how cleared, custom-built, and legacy or unsupported systems differ. Say what FDA's BECS user-facility guidance expects Lakeshore's own validation to add, including at every site and when vendor test scripts are used. | Not started |
| 4 | `qmsr-iso-13485-and-the-vendor` | Place BECS correctly under FDA's device-grade quality system: Part 820 (the QMSR, incorporating ISO 13485:2016, effective February 2, 2026) binds the BECS manufacturer, and 820.1(a)(3) excludes blood manufacturers, so Lakeshore answers to blood CGMP. Say what the vendor's design controls and 864.9165 special-control deliverables (unresolved anomalies, revision history, traceability matrix) give you as validation *inputs*, and when Lakeshore's own development could raise the manufacturer question. | Not started |
| 5 | `part-11-for-validated-systems` | Name the Part 11 closed-system controls a BECS validation must prove the system actually enforces (access limits, operational sequencing checks, authority checks; device checks named, taught in m7), explain why FDA's 2003 Part 11 guidance points validation enforcement to predicate rules rather than 11.10(a), and decide whether a vendor-supported or vendor-hosted BECS is still a "closed system." Hand ALCOA+, audit-trail review, and e-signatures to `data-integrity-and-records`. | Not started |
| 6 | `validated-state-lifecycle-and-patching` | Keep a validated BECS validated: require a documented regression analysis and risk-scaled regression testing for every change, including OS, infrastructure, vendor patches, and reference-table updates; manage patching and end-of-support without breaking the validated state; run a periodic review that would catch drift; and give VIA-0842's "were twelve targeted tests enough?" a real methodological answer. | Not started |
| 7 | `becs-interfaces-and-data-integrity` | Trace data across every BECS boundary (instrument and testing-lab LIS results in, labels out, reference tables in, shipment data out to hospital customers, satellite sites, legacy-data conversion) and judge whether interface validation and ongoing monitoring prove each record arrives complete, correct, on time, and on the right donor or unit. Close VIA-0842's open interface items. | Not started |

Status values: Not started / Drafted / Published.

### Front-matter `order:` values (globally unique across `courses/**`, never reused)

Verified 2026-10-09 by grepping every `^order:` in `courses/**/*.qmd`: 40 files carry an
`order:` value; the maximum in use is **39**
(`directing-the-quality-analyst/coaching-and-reporting-upward/resources.qmd`); no duplicates;
`courses/index.qmd` is `order: 0`. This course takes **40–54**:

| File | `order:` |
|---|---|
| `index.qmd` (syllabus) | 40 |
| `gamp5-and-the-v-model/index.qmd` | 41 |
| `gamp5-and-the-v-model/resources.qmd` | 42 |
| `iq-oq-pq-and-traceability/index.qmd` | 43 |
| `iq-oq-pq-and-traceability/resources.qmd` | 44 |
| `becs-as-a-regulated-device/index.qmd` | 45 |
| `becs-as-a-regulated-device/resources.qmd` | 46 |
| `qmsr-iso-13485-and-the-vendor/index.qmd` | 47 |
| `qmsr-iso-13485-and-the-vendor/resources.qmd` | 48 |
| `part-11-for-validated-systems/index.qmd` | 49 |
| `part-11-for-validated-systems/resources.qmd` | 50 |
| `validated-state-lifecycle-and-patching/index.qmd` | 51 |
| `validated-state-lifecycle-and-patching/resources.qmd` | 52 |
| `becs-interfaces-and-data-integrity/index.qmd` | 53 |
| `becs-interfaces-and-data-integrity/resources.qmd` | 54 |

The next course continues at **55**. `create-course`'s SKILL.md was updated to say so.

If a module is ever split, don't renumber in place without logging it here. There's no free
integer between consecutive values. A "part 2" module takes the next unused counter value and
sorts after module 7, or this course's files get renumbered and the change is logged.

## Scoping decisions (read before drafting any module)

### Altitude

Same principle as every course: the Director directs and reviews, he doesn't execute. He
won't write a URS, a test script, or a regression analysis. What changes in this course is that
**he can now judge technical adequacy at reviewer depth**, not just route it. In DQA m4 the
honest answer to "was the testing enough?" was "route it to Quality's validation lead and make
sure that review is documented." After this course his answer is "here's what a sufficient
regression analysis would have looked at, and here's what this one didn't." The Quality
Validation Lead still authors and owns validation design. Quality still owns the blocking
approval. The Director's added value is unchanged in kind: he's the one who can check IT
evidence (deployed versions, configuration baselines, change and deployment timestamps,
interface error queues, remote-access logs) against what the package claims. **Every module
with a document to review must include at least one gap only the Director's IT knowledge
catches.**

### Two-layer review: the cold-read test plus the new "adequacy check"

Layer 1 is DQA's cold-read test, reused by name, never re-taught.

Layer 2 is new. Module 2 introduces it by name. Its four questions are drawn from FDA's BECS
guidance (guidance tier, so label them that way, quoting the guidance where it's quoted):

1. **Coverage.** Does every requirement that touches a critical function trace to at least one
   test, with the highest-risk functions tested most thoroughly? (Guidance III.E: "The highest
   risk functions of the system should be tested more comprehensively.")
2. **Design.** Could each test actually fail? Expected results fixed in advance, plus normal,
   abnormal, boundary, and "absurd" inputs, and worst-case load. (Guidance III.G and III.D:
   the hematocrit 37/38/39% boundary example, "an alpha result in a numeric field," "worst case
   scenarios.")
3. **Fidelity.** Was it tested where and how it will really run: Lakeshore's location and
   configuration, the same software, hardware, SOPs, and personnel, at peak load? (Guidance
   III.D and III.G.)
4. **Regression.** For a change: is there a documented analysis of the change's impact on the
   *whole* system, and does the regression testing follow from that analysis? (Guidance III.I.)

Module 1 seeds Coverage (risk-scaled effort). Module 2 introduces all four by name and applies
Coverage, Design, and Fidelity to an executed package. Module 6 applies Regression in full.
Module 7 applies all four to interfaces. Keep the four names fixed. Like the cold-read test,
this becomes a named instrument the rest of the curriculum can reuse.

### Module boundaries: the hard calls

**GAMP 5/V-model (m1) vs. IQ/OQ/PQ (m2), which overlap heavily in practice.** The split is by
question, not by vocabulary:
- **m1 answers "how much validation does this system need, and what should define it?"** It
  owns the left side of the V and the logic of the V: risk assessment, GAMP categories as a
  starting point, the validation plan, and what URS, FS/FRS, and DS documents are for and how
  to tell a good requirement (testable, risk-ranked, covering critical functions) from a bad
  one. It names the V's horizontal pairings (DS↔IQ, FS↔OQ, URS↔PQ, labeled as common industry
  practice) as a *concept*, in one short passage, so the learner sees why each spec level needs
  a matching test level.
- **m2 answers "does the executed evidence prove the requirements were met?"** It owns the
  right side as evidence: what IQ, OQ, and PQ each contain in practice, test-case anatomy,
  validation deviations, the traceability matrix as an artifact you read forward and backward,
  and the summary report. It owns the course's main planted document.
- Guardrail: m1 never shows executed test evidence or a traceability matrix. m2 never re-explains
  categories or the V's left side. It points back in one line.

**BECS as a device (m3) vs. QMSR/ISO 13485 (m4).** Split by *the product* vs. *the producer*:
- **m3 is the product and the user's obligations about it**: what BECS is in law (864.9165(a)
  identification and the "Class II (special controls)" line), what 510(k) clearance is and
  isn't, cleared vs. custom vs. legacy/unsupported, and FDA's BECS user-facility guidance as
  Lakeshore's playbook (its sections on vendor selection, system documentation, scope,
  multi-site, and vendor-supplied test cases). It also owns the regulatory floor's *equipment*
  framing (606.60, as the guidance applies it).
- **m4 is the producer and its quality system**: Part 820 QMSR and its blood exclusion, ISO
  13485 by incorporation, what design controls and the 864.9165(b) special controls mean the
  vendor must produce, how Lakeshore uses those as inputs (the DQA-deferred "leveraging vendor
  testing and documentation" topic), "software as a medical device" framing, and the in-house
  manufacturer question.
- Guardrail: m3 quotes only 864.9165(a) and the classification line. m4 quotes (b)(1)–(5).
  m3 says "the vendor is a regulated manufacturer" and points forward. m4 doesn't re-explain
  510(k).

**Part 11 (m5): the validation slice only.** `data-integrity-and-records` owns Part 11's full
depth (ALCOA+, audit trails and e-signatures in practice, predicate rules and hybrid systems,
legacy Part 11 gap assessment, retention). This course's Part 11 module is scoped to what a
*validation* has to prove, and the verified 2003 guidance gives it a clean, defensible line:
- FDA's 2003 *Scope and Application* guidance says FDA intends to exercise **enforcement
  discretion** on Part 11's validation (11.10(a) and 11.30), audit trail (11.10(e), (k)(2)),
  record retention, and record copying requirements, while predicate-rule requirements stay
  fully enforced. It **lists the 11.10 controls FDA still intends to enforce**: limiting system
  access, operational system checks, authority checks, device checks, training determinations,
  written accountability policies, and systems documentation controls, plus e-signature
  sections. Verbatim in `sources/fda-guidance/part-11-scope-and-application-2003.md`.
- So m5 teaches: (1) the enforced closed-system controls (d) access, (f) operational
  sequencing checks, (g) authority checks, and (h) device checks are **functional requirements
  your validation must prove the system enforces**. They belong in the URS (m1) and the
  traceability matrix (m2). (f) is the quarantine gate in software form ("can't release before
  all required results are in"). (h) gets its depth in m7. (2) Validation of BECS is enforced
  through **predicate rules** (211.68, 606, per FDA's BECS guidance), which is why m1 grounds
  validation in 211.68(a), not 11.10(a). (3) Closed vs. open system (11.3(b)(4) and (9), 11.30
  named) applied to vendor remote support and hosting.
- Reconciliation with earlier lessons: `becs-in-the-pipeline` and DQA m4 cited 11.10(a) (and
  DQA m4 cited (k)(2) as a concept). Those statements stay accurate. 11.10(a) is the text, and
  "Part 11 remains in effect" (the 2003 guidance's own words). m5 adds the enforcement posture
  and must say plainly that it's a refinement, not a correction. Note too that (k)(2) is on the
  guidance's audit-trail discretion list, so DQA m4's "concept only" use of it was the right
  call.
- Out of m5 (name once, point to `data-integrity-and-records`): ALCOA+, audit-trail *review*
  practice (m5 may say validation must confirm an audit trail is on and records what it claims,
  as a functional test), e-signature manifestation and linking (11.50, 11.70), signature
  components (11.100–11.300), predicate-rule record scoping, hybrid systems, legacy-system Part
  11 assessment, retention.

**Lifecycle/patching (m6): where VIA-0842 gets its answer.** m6 is the course's payoff module.
It owns validation after a change (guidance III.I), the Regression question, patch management
under a validated state, end-of-support, post-implementation monitoring, and periodic review.
It does **not** re-teach change control's five stages (QSE m4) or the VIA's decision-trail
review (DQA m4). It adds the technical layer underneath both.

**Interfaces (m7): FDA's examples are hospital-shaped, Lakeshore is a blood center.** The BECS
guidance's interface bullet names HIS (ADT: admissions, discharges, transfers), LIS (OE/RR:
order entry / results return), and instrument interfaces. That's written for a hospital
transfusion service running BECS. At Lakeshore, the analogous boundaries are: instruments and
the testing-lab LIS (or middleware) feeding results and quarantine status into BECS; BECS to
label printers; ICCBBA reference tables into BECS; BECS to hospital customers' systems
(electronic shipment data, the 606.165 boundary); central BECS to satellite sites; and
legacy-data conversion during an upgrade (guidance III.G's last bullet). m7 must say this
plainly, not pretend Lakeshore has ADT feeds. Who validates what across organizations:
Lakeshore validates what it sends and receives, and Riverside validates its own LIS under its
own obligations. Describe this as responsibility following control, and don't cite a rule that
assigns it.

### Module order (curriculum.md's listing kept, with reasons)

Kept as listed: methodology (1–2) → the device and the vendor (3–4) → Part 11 (5) → lifecycle
(6) → interfaces (7). Reasons:
- Methodology first gives the vocabulary later modules need. 864.9165's special controls
  ("verification and validation testing," "traceability matrix") land much better in m3 and m4
  once m1 and m2 have taught what those are.
- m3 before m4: the product before its producer's quality system.
- m5 after m3 and m4: its enforcement-discretion point ("predicate rules carry validation")
  depends on m1 having grounded validation in 211.68 and m3 having explained the equipment
  framing.
- m6 late, because its VIA-0842 verdict uses everything before it: risk scaling (m1), test
  design and deviations (m2), "the vendor's word is an input" (m3 and m4), and enforced Part 11
  controls (m5).
- m7 last, because interfaces are where every earlier layer meets another system, and because
  it closes VIA-0842's last open item. It also hands off naturally to `data-integrity-and-
  records`, the next course in Track 3.
- If a learner stops after m2, they have the core of the finish line's first half. After m4,
  they have both halves.

### Scenario plan: one setting, three-course payoff

**Decision: yes, continue the Friday-OS-patch / VIA-0842 / BECS-vendor thread.** It's the
strongest continuity asset in the curriculum, and two published lessons explicitly promise
this course will answer the question they left open. But VIA-0842 is closed history (DQA m6),
and a whole course can't hang on one patch. So the course uses **two layers of scenario**:

1. **The setting (new): the BECS upgrade.** A few months after VIA-0842 closed, Lakeshore's
   BECS vendor announces end of support for Lakeshore's current release. Lakeshore must move to
   the vendor's new major release. The upgrade project brings a new validation package, a new
   OS/database platform underneath (GAMP Category 1), the vendor's configured product (Category
   4), and, recommended as a new fact for m1 to lock, **a small in-house-built component Lakeshore
   IT maintains** (for example, a results-interface translation script between the testing-lab
   LIS and BECS, or a custom report) as the Category 5 piece. That in-house component is
   valuable three times: m1 (category and risk), m4 (does building it raise the manufacturer or
   "BECS accessory" question?), and m7 (interface validation).
2. **The payoff (existing): VIA-0842, re-read with the new method.** The course opens (m1) by
   naming the open question in two or three sentences as the reason the course exists. It does
   not answer it there. m6 answers it, inside the upgraded system's first periodic review or
   first post-upgrade OS patch, where VIA-0842 appears in BECS's change history. m7 closes its
   interface loose end and its missing instrument-interface test.

**Story-time rules.** No calendar years anywhere (consistent with every prior course). The
upgrade starts after VIA-0842's closure and after DQA m6's quarterly report. Don't change
anything DQA established about DEV-1147, CAPA-1147-A, VRA-0219, or VIA-0842. **Never name a
real BECS product, vendor, OS, or database**, and use version labels that can't resemble a
real product's numbering ("the current release," "the new major release," or neutral labels
like "Release A / Release B").

**Facts m1 must lock and log** (so m2–m7 don't contradict each other): the upgrade's
validation package ID (use a `VAL-` prefix, distinct from VIA-0842, DEV-1147, CAPA-1147-A,
VRA-0219, BECS-TS-0842); what's in scope (central server, which satellite sites run BECS
clients, Brookfield and Fairview at minimum); whether the in-house Category 5 component exists
and what it does; who authored the validation plan (the Quality Validation Lead, with IT and
the vendor's implementation consultant); approvers (Quality blocking, Director as system-owner
co-approver).

**Per-module scenario recommendations** (drafter's choice within these, log what's locked):
- **m1:** the upgrade's draft validation plan and risk assessment reach the Director. The
  sysadmin's position: "It's a Category 4 vendor product, the vendor tested it, we run a smoke
  test." The QA's or Validation Lead's draft URS has a few rows to judge (one untestable
  requirement such as "system shall be user-friendly"; one critical-function requirement with no
  risk ranking; no requirement covering the in-house component at all). Keep the document short.
  m2 carries the big planted document.
- **m2: the course's main teaching device.** A full planted excerpt of the upgrade's executed
  package: a few URS rows, a traceability-matrix excerpt, OQ/PQ test results, and the summary
  report's conclusion. Hunt before the reveal, the same structure as DQA m2/m4/m5. Plant 4–6
  gaps across both layers (cold-read and adequacy) plus **one non-gap**, and at least **one
  Director-only IT-evidence catch**. Candidates:
  - *Coverage:* a high-risk requirement (the quarantine release gate) traced only to a
    "normal" test case.
  - *Design:* no boundary or absurd-value cases on a field with a cutoff.
  - *Fidelity:* PQ run in the vendor's environment, by vendor staff, not with Lakeshore's
    SOPs and personnel, or not at peak concurrent load.
  - *Director-only:* the IQ record's OS/database/application versions don't match what the
    change record or CMDB shows was promoted to production, so the tested configuration isn't
    the running one (guidance III.G: validate in test, then move the validated configuration
    into production).
  - *Trace:* a requirement with no test (an orphan), or a test marked "Pass" that doesn't
    actually exercise the requirement it's traced to.
  - *Decision trail:* the summary report says "validated" while a validation deviation is
    still open, or with no management approval dates (guidance III.H).
  - **Non-gap candidate:** a failed test that *was* logged as a validation deviation, root-
    caused, fixed, and re-run with the deviation referenced. That's the correct handling, the
    mirror image of VIA-0842's step 7. A learner who flags it gets the retrieval payoff.
  The package should not be authored by the QA (the Validation Lead and vendor consultant
  author it, and the QA reviews it). She can appear competent, catching one gap herself.
  Don't re-plant her DQA two-part pattern. DQA m6 already coached it.
- **m3:** the validation plan states "Release B is FDA 510(k)-cleared." The Director checks.
  The guidance (III.A) says FDA's cleared list shows the version that received clearance, that
  a manufacturer "may have released an upgrade that did not require a new 510(k) clearance,"
  and that the list is cumulative. Lesson: ask the vendor, in writing, for the regulatory basis
  of the exact release you're installing. Don't assume either way, and never confuse the
  vendor's clearance with your validation. Plus the multi-site question: does the plan have a
  location-specific piece for Brookfield and Fairview (III.D)? **Invent no 510(k) numbers,
  product codes beyond what 864.9165 states, or clearance dates.**
- **m4:** the vendor's release package arrives (release notes, an **unresolved anomalies**
  list, revision history, hardware and peripheral specifications, as 864.9165(b)(3) requires
  in labeling). One listed anomaly touches a function Lakeshore uses (for example, a label
  reprint edge case). The question is how that list feeds Lakeshore's risk assessment and test
  plan. Second thread: the in-house Category 5 component. Does building it raise the
  "manufacturer" question under 820.3 and the "BECS accessory" language in 864.9165(a)? The
  lesson routes it to regulatory affairs with the question written down. Plus the sharp
  "placement" moment: someone (the sysadmin, the CIO, or a consultant) says that since February
  2026 Lakeshore has to comply with the QMSR and ISO 13485. 820.1(a)(3) says otherwise.
- **m5:** the upgrade includes, or the vendor proposes, expanded vendor remote support (or
  vendor hosting). Tie to DQA m3's remote-support security incident and VRA-0219. Is BECS still
  a closed system (who controls access, per 11.3(b)(4))? Second thread: the upgrade's URS is
  missing the operational-sequencing and authority-check requirements, so the validation never
  proved BECS refuses an out-of-sequence release or a release by an unauthorized role. The
  guidance's remote-access-log recommendation (III.B) belongs here.
- **m6:** the upgraded BECS is live. The first quarterly OS security patch arrives, and the
  first periodic review is due. The periodic review lists BECS's change history since the last
  full validation, including VIA-0842, the DEV-1147 table push, and DQA m3's label-printer
  configuration change. **VIA-0842 verdict (recommended; m6's drafter may refine but must keep
  every locked fact):** the number twelve was never the question. The defect is that the twelve
  weren't derived from a documented **regression analysis** of the patch's impact on the whole
  system (guidance III.I). The scope rationale rested on the vendor's characterization ("OS-level
  only"), which is an input, not an analysis. A memory-handling OS patch plausibly touches
  timing- and concurrency-sensitive functions and every interface, so a regression analysis
  would have pulled in instrument interfaces, the hospital interface, and timing under load.
  **Step 7's timing failure was itself evidence the patch touched timing-sensitive behavior. It
  should have widened the scope, not been re-run to green.** The decision trail was documented
  and signed (DQA m4's non-gap stays a non-gap at layer 1), but at layer 2 the testing was not
  demonstrably adequate. That's the two-layer lesson in one document. Right-sized remediation:
  a documented regression analysis plus targeted supplemental tests (instrument and hospital
  interfaces, label timing under peak load), and a fix to the VIA template so every future VIA
  requires a regression analysis. Not a reflexive full revalidation, and not a retroactive
  rewrite of VIA-0842. Also land (as FDA's reading of 211.68(a), guidance tier) that the written
  program has to require validation "prior to routine use... and any time a change is made that
  has the potential to affect the functions of the system" (III.C). That's why VIA-0842's
  deployed-before-approved sequence was more than a paperwork lag. Don't make VIA-0842 a newly
  reportable deviation. If the drafter wants a quality-system outcome, a periodic-review finding
  feeding a CAPA on the VIA procedure is the proportionate one.
- **m7:** the upgrade's interface validation evidence (an excerpt). Candidate gaps: results
  interface tested only with "normal" messages (no malformed, duplicate, or out-of-order
  messages); no test of quarantine-status propagation latency (the `collection-and-testing`
  batch-job window); hospital shipment-data interface tested against Lakeshore's own test stub,
  never end-to-end with a customer; no ongoing interface error-queue monitoring assigned after
  go-live (guidance III.G: "Monitoring of interface error files should continue subsequent to
  implementation"); legacy-data conversion not validated for duplicate donor records or
  deferral codes (guidance III.G). Close VIA-0842's loose end explicitly. Director-only catch
  candidates: the interface engine's error queue shows messages the test summary never
  mentions, or a satellite site's interface configuration differs from the central one.

### ITSM/ITIL bridge per module (spine step 2 needs one)

Bridge first, then name where the regulated version demands more.

1. **m1:** SDLC and release management; requirements engineering; CI classification by type
   driving which change model applies (GAMP categories work the same way, sorting by what kind
   of software it is to set a default level of scrutiny). Where it demands more: a documented
   risk assessment overrides the default, and FDA's guidance tells you to assume software
   hazards are likely.
2. **m2:** test management and release acceptance: test plans, entry and exit criteria, defect
   triage, requirements traceability in an ALM tool. Loose map, labeled as the course's own:
   IQ ≈ build and deployment verification against a configuration baseline; OQ ≈ functional and
   system testing; PQ ≈ operational acceptance and performance testing under real conditions.
   Where it demands more: criteria fixed before execution, every failure dispositioned in
   writing, and evidence an outsider can re-read a year later.
3. **m3:** vendor product lifecycle and supported-version management; "certified for platform
   X" vendor claims; the cloud **shared responsibility model** (the vendor's clearance covers
   their product, and your validation covers your deployment). Where it demands more: the
   product is a regulated device, and FDA says the user is "ultimately responsible" for
   validation in its own facility.
4. **m4:** supplier management and the vendor's SDLC maturity. **ITIL known error database ↔
   the vendor's unresolved-anomalies list** (the strongest bridge in the module). Release notes
   ↔ revision history. Where it demands more: the vendor's quality system is itself
   FDA-regulated, so you can ask for its outputs as evidence, and you still own your
   determination.
5. **m5:** identity and access management, RBAC, privileged access management, workflow
   enforcement in an ITSM tool (a ticket can't close before approval). Closed vs. open system
   ↔ who holds admin control of the tenant. Where it demands more: those controls aren't just
   good security hygiene, they're behaviors the validation must prove.
6. **m6:** patch management, release and deployment, CAB, **standard changes pre-approved by
   class ↔ pre-analyzed patch classes with a templated regression analysis** (still a
   per-instance VIA with Quality's blocking sign-off, consistent with `becs-in-the-pipeline`),
   configuration baselines and drift detection, service reviews, problem management. Where it
   demands more: "the patch deployed cleanly" is implementation evidence, and the regulated
   question is whether unchanged-but-vulnerable functions still work.
7. **m7:** integration and middleware monitoring, message queues, **dead-letter queues ↔
   interface error files**, reconciliation jobs, event monitoring. Where it demands more: a
   message that lands on the wrong record isn't an outage, it's a potential product-safety
   event.

### "This is NOT a regulatory requirement" (and "yes, cite the rule") question hooks

Don't reuse `becs-in-the-pipeline`'s Q1 ("FDA requires GAMP 5 with IQ/OQ/PQ"). Spread these:

- **m1 (not applicable):** "FDA's 2026 Computer Software Assurance guidance replaced CSV, so we
  can drop scripted testing on BECS." No. That guidance covers software used in *device
  manufacturers'* production and quality systems, and its scope section expressly excludes
  device software functions (BECS is a device). It's also guidance, not regulation. Excerpt in
  `sources/fda-guidance/csa-production-qms-software-2026-excerpt.md`.
- **m2 (not a requirement):** "FDA requires separate IQ, OQ, and PQ documents." No. FDA's BECS
  guidance asks for a written plan, defined test-case contents, records, and a report.
  IQ/OQ/PQ packaging is industry practice. (Pair with a "yes" contrast: retaining validation
  records *is* required, and the guidance cites the regulations it reads that from.)
- **m3 (yes, cite the guidance to refute):** "The release is 510(k)-cleared, so it's already
  validated." No. Clearance is the vendor's premarket status for a version. FDA's BECS guidance:
  "you are ultimately responsible for validation of your system in your facility" (III.D).
- **m4 (yes, cite the rule to refute):** "Since February 2026, Lakeshore must comply with the
  QMSR and ISO 13485." No, 21 CFR 820.1(a)(3). Strong "the rule says otherwise" answer.
- **m5 (nuance):** "11.10(a) is FDA's main enforcement hook for BECS validation." Not quite.
  The 2003 Part 11 guidance exercises enforcement discretion on 11.10(a) and relies on predicate
  rules. For BECS, FDA's guidance names 211.68 and Part 606.
- **m6 (not a requirement):** "Validated systems must be fully revalidated every year." No
  regulation sets a frequency. 211.68(a) requires routine checks under a written program, and
  FDA's guidance says "on a routine basis." Periodic review cadence is Lakeshore's risk-based
  choice (industry practice: GAMP).
- **m7 (responsibility):** "Riverside's LIS is part of our validation." No, it's theirs, under
  their own obligations. Lakeshore validates what it sends and receives, and the two parties'
  agreement (AABB's Suppliers and Customers QSE, paraphrased) is where the handoff gets
  defined.

### Where each module stops (guard these boundaries)

**m1 `gamp5-and-the-v-model`.**
- Owns: risk-scaled validation effort (guidance III.D "level of confidence" and III.E risk
  assessment, including "consider most hazards to have a high probability of occurrence" and the
  crossmatch example); GAMP 5 (Second Edition, ISPE, July 2022) as industry practice; software
  categories 1, 3, 4, and 5 described in the course's own words, applied to a BECS stack (OS and
  database Category 1, BECS as configured Category 4, in-house scripts, interfaces, and reports
  Category 5); categories as a starting point that the risk assessment can override (GAMP 5
  Second Edition's stated emphasis on "critical thinking," verified on ISPE's page, paraphrase
  only); the validation plan and its contents (guidance III.C); URS, FS/FRS, and DS: purpose and
  how to judge a requirement; the V's pairings as a concept; vendor's V vs. Lakeshore's V in
  two or three sentences (pointer to m3 and m4); the regulatory floor: **211.68(a) quoted**, the
  210.2(a) supplementation sentence as the reason a Part 211 section reaches a blood center,
  FDA's BECS guidance naming "21 CFR 211.68, 606.100(b), and 606.160" as requirements that
  apply, and the guidance's III.C sentence as the "shall vs. should" contrast. Name 11.10(a) in
  one line as the Part 11 hook m5 will explain.
- Does **not** own: IQ/OQ/PQ contents, executed evidence, traceability-matrix reading (m2);
  510(k) and device status (m3); vendor QMS (m4); listing Part 11 controls (m5); regression,
  patches, periodic review (m6); interfaces (m7).
- AABB (paraphrase only, no numbers): QSE 5 Process Control (validation).

**m2 `iq-oq-pq-and-traceability`.**
- Owns: IQ/OQ/PQ as industry vocabulary, mapped (as the course's own mapping, labeled) to the
  guidance's recommendations: IQ to installation and configuration per spec (the guidance's
  documentation list: OS and version, interfaces list, environments); OQ to functions in the
  test environment with normal, abnormal, boundary, and absurd cases plus security roles; PQ to
  intended use at Lakeshore's location with its SOPs and personnel, at peak load, with report
  outputs verified. The guidance's own definitions of "qualification operational" and "user
  validation" may be quoted. Test-case anatomy (III.G: input, expected output, actual output,
  acceptance criteria, pass/fail, name or initials, date; screen prints linked to the test case).
  Validation deviations (III.F "Handling validation deviations"; III.H report includes "any
  variances or failed tests"), with the explicit tier upgrade of DQA m4's step-7 concern. The
  traceability matrix read forward (every requirement tested?) and backward (every test tied to
  a requirement?), orphans, and false "Pass" traces. The summary report: conclusion follows from
  evidence, open deviations dispositioned, dated approvals (III.H), release to production only
  after (III.C). The **adequacy check** (all four named, three applied). Record retention as the
  guidance cites it (211.68(b), 211.100(b), 606.160(b)(5)(ii), labeled as FDA's reading). The
  planted package.
- Does **not** own: Part 11 control enumeration (m5; a matrix row can reference one without
  explaining it); regression after change (m6); interface-specific test design (m7); vendor
  test-script leveraging (m3).
- AABB (paraphrase): QSE 3 Equipment (qualification, explicitly including IT systems), QSE 5.

**m3 `becs-as-a-regulated-device`.**
- Owns: 864.9165(a) identification (quote), "Class II (special controls)" (quote the line
  only), and "BECS accessory" as a concept; the honest crosswalk to the curriculum's four
  critical functions; 510(k) premarket notification as a concept (the guidance's own phrase),
  with no Part 807 section cited unless fetched and verified first; what clearance does and
  doesn't tell you (III.A version caveats; III.D "ultimately responsible"); cleared vs.
  custom-built vs. legacy/unsupported (custom points to m4, unsupported points to m6, legacy data
  conversion points to m7); the guidance as a whole (tier, scope statement in section I: it
  covers the user's validation, *not* the manufacturer's validation or 510(k) submissions);
  section II.A's "system" definition (hardware, software, peripherals, networks, **personnel**,
  documentation) as a service, not an app, which is a strong ITSM moment; II.A's statement that
  systems are regulated as equipment under 606.60 and 211.68, with 606.60(a)'s "shall perform in
  the manner for which it was designed" quoted; III.A vendor selection and monitoring adverse
  events and recalls; III.B system documentation as a CMDB record spec (the remote-access-log note
  goes to m5); III.D vendor-supplied test cases ("carefully assess... add or change test plans as
  appropriate") and multi-location validation plans.
- Does **not** own: 864.9165(b) special controls in detail, Part 820, design controls, the
  manufacturer question (m4); Part 11 (m5).

**m4 `qmsr-iso-13485-and-the-vendor`.**
- Owns: Part 820 is the QMSR (amended Part 820, not a separate replacement; final rule 89 FR
  7496, published February 2, 2024, effective February 2, 2026, verified via the Federal Register
  API); 820.7(b) incorporates ISO 13485:2016 by reference; 820.10(a) (document a QMS complying
  with ISO 13485); 820.10(c) (design and development, ISO 13485 Clause 7.3, required for class II
  devices, which BECS is); 820.10(b)(3)/(4) (complaints feeding Part 803 reporting, advisory
  notices under Part 806), *named only*, because Parts 803 and 806 aren't in `sources/`;
  **820.1(a)(3) blood exclusion** (quote); 820.3's "manufacturer" definition (quote) and
  "finished device" including accessories; 864.9165(b)(1)–(5) special controls (quote) as
  vendor deliverables, especially (b)(3)(ii) unresolved anomalies and (b)(4) traceability
  matrix; how Lakeshore uses vendor outputs as inputs, never substitutes (consistent with DQA
  m4's 11.10-intro point and VRA-0219), with GAMP 5 Second Edition's verified emphasis on
  leveraging supplier knowledge and documentation (paraphrase) as industry practice; "software as
  a medical device" framing using **FDA's own term "device software functions"** (verbatim in
  the CSA excerpt) and naming "SaMD" only as the international (IMDRF) umbrella term, with no
  IMDRF definition quoted; the vendor-side guidance landscape named, not taught (General
  Principles of Software Validation 2002 for the manufacturer's software validation, which FDA's
  BECS guidance itself points manufacturers to; CSA 2026 for manufacturers' production and QMS
  software, citing ISO 13485 subclauses 4.1.6, 7.5.6, and 7.6 per the excerpt); the in-house
  manufacturer question, routed to regulatory affairs.
- Does **not** own: Lakeshore's own QMS (QSE course); SOC 2, vendor risk tiering, contracts
  (`vendor-and-third-party-risk-management`); device cybersecurity guidance (name at most).
  Don't re-explain 510(k) (m3).
- ISO 13485 is copyrighted. Name clauses only as numbered and titled *inside the CFR text or
  FDA guidance* (820.10: 7.3 Design and Development, 7.5.8 Identification, 7.5.9.1 Traceability
  (General), 8.2.3 Reporting to regulatory authorities; 820.35: 4.2.5 Control of Records, 8.2.2
  Complaint Handling, 7.5.4 Servicing Activities; 820.45: 7.5.1 Control of production and service
  provision; CSA excerpt: 4.1.6, 7.5.6, 7.6). Never describe clause content beyond those titles.
- AABB (paraphrase): QSE 4 Suppliers and Customers.

**m5 `part-11-for-validated-systems`.**
- Owns: 11.1(a)/(b) scope, one sentence each (the "predicate rule" term named once and pointed
  to `data-integrity-and-records`); 11.3(b)(4) closed and (b)(9) open system (quote); 11.30
  named; the 2003 guidance's enforcement discretion list and its "we intend to enforce" list
  (quote); 11.10 (d), (f), (g) quoted as functional validation requirements, (h) quoted and
  pointed to m7, (e) named as "validation confirms it's on and works, review practice is
  data-integrity's"; (i) training tied to guidance III.G's training bullet; remote access log
  (guidance III.B); closed vs. open applied to vendor remote support or hosting; the
  reconciliation paragraph with `becs-in-the-pipeline` and DQA m4.
- **Part 11 budget across the curriculum so far:** 11.10 intro (DQA m4, m5), (a)
  (`becs-in-the-pipeline`, DQA m4), (j) (DQA m1), (k)(2) (DQA m4, concept only). This course
  spends (d), (f), (g) (m5), (h) (m7), plus 11.1, 11.3, and the 11.30 name. It leaves (e) in depth,
  11.50 onward, and predicate-rule doctrine for `data-integrity-and-records`.
- Does **not** own: everything listed under "Part 11 (m5)" in "Module boundaries" as out.

**m6 `validated-state-lifecycle-and-patching`.**
- Owns: guidance III.I (quote: small local change including infrastructure; regression analysis
  of the whole system; regression testing by re-running previously passed cases; the
  manufacturer should inform you; contract; "ultimately responsible"); the adequacy check's
  Regression question applied; the VIA-0842 verdict (see Scenario plan); III.C "prior to routine
  use... any time a change is made"; III.G test-then-promote and post-implementation
  monitoring; patch classes with templated regression analyses; security vs. validated-state
  tension; end-of-support as an owned risk decision (QSE m6 risk acceptance); periodic review:
  the term is industry practice (GAMP), the regulatory hooks are 211.68(a) "routinely...
  checked according to a written program" and III.C "on a routine basis"; what it examines
  (cumulative change history, deviations, incidents and problem records, vendor anomaly lists,
  configuration drift against the validated baseline, which is the Director-only check, and
  access reviews pointing to m5); outcomes (validated state confirmed, targeted revalidation,
  CAPA).
- Does **not** own: change control's stages (QSE m4, apply them); the VIA decision-trail review
  (DQA m4, apply it); interface regression design (m7: name VIA-0842's interface gaps and hand
  them forward); vendor contract mechanics (vendor course).

**m7 `becs-interfaces-and-data-integrity`.**
- Owns: Lakeshore's interface inventory (see "Module boundaries"); guidance III.G interface
  bullet (quote, including "results posting to the incorrect donor/patient record" and the
  ongoing error-file monitoring sentence); III.J integrated vs. stand-alone (quote, with the
  blood-center analog); III.G legacy-data conversion bullet (duplicate donor records, deferral
  codes); **211.68(b)**'s input/output accuracy sentence and "degree and frequency of
  input/output verification shall be based on the complexity and reliability" (quote); 11.10(h)
  device checks (quote); 606.165 distribution and receipt as the Lakeshore–Riverside data
  boundary (already taught in `storage-distribution-and-hemovigilance`, apply it); quarantine
  propagation latency as an interface test; who validates what across organizations; ICCBBA
  table import as an inbound interface (DEV-1147 callback); closing VIA-0842's interface items;
  ALCOA+ named once with a pointer.
- Does **not** own: ALCOA+ in depth, audit trails, multi-site data governance and unique donor
  identification (all `data-integrity-and-records`); ISBT 128 coding itself (already taught in
  `component-processing-and-labeling`).

### FDA BECS guidance: section allocation (prevents duplication)

`sources/fda-guidance/becs-validation-users-facility-2013.md`. Each section has one owner, and
other modules may reference it in a line.

| Guidance section | Owner |
|---|---|
| I Introduction (scope: user's validation, not manufacturer's or 510(k); cites 211.68, 606.100(b), 606.160) | m1 (citation list), m3 (scope statement) |
| II.A System description (system includes personnel and documentation; equipment under 606.60 and 211.68) | m3 |
| II.B BECS description and intended uses | m3 |
| II.C Definitions (qualification operational, risk assessment, regression testing, validation, verification, user validation) | m2 (OQ, user validation), m6 (regression testing), m1 (verification vs. validation) |
| III.A Vendor selection; 510(k) cleared list caveats | m3 |
| III.B System documentation (main list) | m3 |
| III.B Remote-access-log note | m5 |
| III.C Validation plan; "prior to routine use, on a routine basis, and any time a change..." | m1 (plan), m6 (routine basis and change) |
| III.D Scope; vendor test cases; multi-location; worst case; "level of confidence"; "ultimately responsible" | m3 (vendor test cases, multi-location, responsibility), m1 (level of confidence), m2 (worst case under Design) |
| III.E Risk assessment ("consider most hazards to have a high probability") | m1 |
| III.F Validation procedures (SOP list, incl. "Handling validation deviations") | m2 |
| III.G bullets: test environment then promote | m2 (Director-only IQ catch), m6 (promotion) |
| III.G bullets: test-case anatomy, normal/abnormal/boundary/absurd, records and screen prints, peak load, security roles, report verification | m2 |
| III.G bullet: interfaces (HIS ADT, LIS OE/RR, instruments) and error-file monitoring | m7 |
| III.G bullet: training | m5 (with 11.10(i)) |
| III.G bullets: post-implementation monitoring; wireless | m6 (monitoring); wireless out of scope (name at most) |
| III.G bullet: legacy data conversion | m7 |
| III.H Validation report | m2 |
| III.I Validation after a change | m6 |
| III.J Integrated package vs. stand-alone | m7 |

### Feeds back to `directing-the-quality-analyst` (for the later deepening pass on DQA m4)

DQA's plan says to deepen DQA m4 *in place* (same slug, `order: 34`) once this course exists,
**keeping VIA-0842's facts untouched**. Here's where each deferred topic is now taught:

| DQA-deferred topic | Taught here in |
|---|---|
| Judging whether testing was *sufficient*; regression strategy for patches; targeted vs. full revalidation | m6 (with m1 risk scaling) |
| GAMP 5 categories, V-model, IQ/OQ/PQ, URS/FRS, reviewing a traceability matrix | m1, m2 |
| Leveraging vendor or supplier testing and documentation | m3 (vendor test cases), m4 (vendor QMS outputs) |
| FDA's BECS validation guidance content, 510(k) implications | m3 (guidance distributed per table above) |
| BECS-to-LIS/HIS interface validation | m7 |
| Periodic review of a validated system | m6 |
| ALCOA+, audit trails, e-signature manifestation on validation records | still `data-integrity-and-records` |

### What belongs to other courses (don't teach it here)

| Topic | Owner |
|---|---|
| Change control stages, CAPA, deviations, risk acceptance, document control | `quality-system-essentials` (apply) |
| The cold-read test, gap triage, the QA's pattern, coaching | `directing-the-quality-analyst` (apply) |
| ALCOA+, audit trails and e-signatures in practice, predicate rules and hybrid systems, legacy Part 11 assessment, retention, multi-site data governance and unique donor ID | `data-integrity-and-records` |
| SOC 2, ISO 27001, vendor tiering, BAAs, vendor change notification as a vendor-management process, contract terms | `vendor-and-third-party-risk-management` |
| Authorize/monitor in RMF terms ("an ATO is the same decision as a validation release") | `grc-frameworks-and-risk-management` (one-line forward pointer allowed in m2 or m6) |
| HIPAA, breach | `healthcare-security-and-privacy` |
| Inspections, 483s, presenting BECS evidence to an inspector | `fda-and-aabb-in-practice` |
| CMDB/service catalog design that survives inspection | `itsm-for-regulated-blood-services` |

## Sourcing notes (read before citing anything)

**fda.gov was reachable this session (2026-10-09).** Earlier plans recorded HTTP 401 from fda.gov
all session. On 2026-10-09 the guidance database JSON, guidance pages, and PDFs all returned
200. Treat this as "sometimes reachable." Everything needed was saved locally so drafters
don't have to re-fetch.

**Verified and saved this session** (quote only from these, verbatim):
- `sources/fda-guidance/becs-validation-users-facility-2013.md`: **the exact title is
  *Blood Establishment Computer System Validation in the User's Facility*, Guidance for
  Industry, CBER, April 2013, final** (FDA database: issue date 04/01/2013, docket
  FDA-2007-D-0069). It finalizes the October 2007 draft. Full text. **This resolves
  `becs-in-the-pipeline`'s verification note.** Tier: guidance. Its "must" sentences are FDA
  citing regulations (211.68, 211.100, 606.100(b)(15), 606.160(b)(5), 211.25(a), 600.10(b),
  606.20(b)). Quote them as "FDA's guidance, citing 21 CFR 211.68(a), says you must...", never
  as if the guidance itself binds.
- `sources/fda-guidance/part-11-scope-and-application-2003.md`: final, 09/05/2003, docket
  FDA-2003-D-0143. Full text. Note: its validation section's example predicate rule
  (820.70(i)) **no longer exists** after the QMSR (the CSA guidance says the QMSR rule "removed
  the majority of the current requirements in Part 820, including 21 CFR 820.70"). It also
  points to "the GAMP 4 Guide." Both are dated references inside a still-current guidance.
  That's a nice teaching moment for m5, so don't hide it.
- `sources/fda-guidance/csa-production-qms-software-2026-excerpt.md`: *Computer Software
  Assurance for Production and Quality Management System Software*, CDRH/CBER, final, issue date
  02/03/2026, **excerpt only** (Sections I–III and V.B). Confirms the QMSR "took effect on
  February 2, 2026," incorporates ISO 13485:2016, and removed 820.70. Its scope **excludes device
  software functions**, so it does not govern Lakeshore's BECS validation. It supersedes Section
  6 of General Principles of Software Validation for manufacturers' production and QMS software.
- `sources/cfr/864.9165.md`: BECS identification, Class II (special controls), five special
  controls including V&V testing, hazard analysis, labeling (software limitations, unresolved
  anomalies, revision history, hardware and peripheral specs), and a traceability matrix.
  [83 FR 23217, June 18, 2018]. The special controls bind the **device**, which means its
  manufacturer, not the user facility.
- `sources/cfr/820.1.md`, `820.3.md`, `820.7.md`, `820.10.md`: QMSR text. The Part 820 header in
  eCFR reads "PART 820—QUALITY MANAGEMENT SYSTEM REGULATION." Rule metadata from the Federal
  Register API: "Medical Devices; Quality System Regulation Amendments," 89 FR 7496, published
  2024-02-02, effective 2026-02-02 (document 2024-01709). Technical amendments: 90 FR 55978,
  published 2025-12-04, effective 2026-02-02 (metadata only, not saved).
- `sources/cfr/211.68.md`, `211.100.md`, `210.2.md`, `211.1.md`: the Part 211 hooks FDA's BECS
  guidance cites, plus the supplementation provisions. **This resolves the QSE plan's open
  question about 210.2 for this specific use.** 210.2(a) says Part 211 and Parts 600–680 "shall
  be considered to supplement, not supersede, each other," and FDA's BECS guidance applies
  211.68 to blood establishment systems. **It does not license citing 211.22 (quality control
  unit) for QA independence.** That remains off-limits per QSE and DQA plans. 211.100(a) (QC
  unit approves written procedures and changes to them) is cited by the guidance for validation
  SOPs. Use it only as the guidance uses it, and never stretch it to "the QC unit must approve
  every BECS change."
- `sources/cfr/606.60.md`: Equipment. Its text concerns physical lab equipment (its table lists
  centrifuges, thermometers, and the like). FDA's BECS guidance says systems are regulated as
  equipment under 606.60. Quote 606.60(a)'s "shall perform in the manner for which it was
  designed," framed as the guidance applies it. Don't imply the table covers software.
- `sources/cfr/11.1.md`, `11.3.md`, `11.30.md` (new); `11.10.md` (already saved, full section).
- Already saved and reusable: `606.100.md` ((b) intro; (b)(15) "Schedules and procedures for
  equipment maintenance and calibration," which the guidance cites for validation SOPs, so say
  that, not that (b)(15) names validation); `606.160.md` ((b)(5) "Quality control records," with
  (ii) "Performance checks of equipment and reagents," which the guidance cites for validation
  records, same caveat); `606.165.md`; `606.171.md`; `606.20.md`.

**Verified, not saved (name only, link if needed):**
- *General Principles of Software Validation*, final, 01/11/2002, CDRH/CBER (guidance page and PDF
  200 this session). Vendor-side. The BECS guidance points manufacturers to it. Its "level of
  confidence" concept is already quoted inside the BECS guidance, so quote it from there.
- *Content of Premarket Submissions for Device Software Functions*, final, 06/14/2023 (listed
  in FDA's database). The BECS guidance's own reference for 510(k) content is the **May 2005**
  *Content of Premarket Submissions for Software Contained in Medical Devices*, which does
  **not** appear in FDA's current database listing. **Don't assert that the 2023 document
  superseded the 2005 one.** That wasn't verified from either document's text. Vendor-side
  anyway, so name at most.
- *"Computer Crossmatch"* guidance, final, April 2011 (listed). A transfusion-service topic.
  Name at most, since it's the guidance's own example of a high-risk function.
- **GAMP 5**: ISPE's page (200) confirms **"ISPE GAMP® 5: A Risk-Based Approach to Compliant
  GxP Computerized Systems (Second Edition)," published July 2022, 404 pages, sold (member $540,
  non-member $1,125).** It says the second edition maintains the first edition's principles and
  framework, emphasizes "critical thinking" by SMEs, the "increased importance of service
  providers" and leveraging supplier documentation, and discusses FDA's CSA activity. **The
  category definitions (1 infrastructure, 3 non-configured, 4 configured, 5 custom; no Category
  2 in current use) come from general industry knowledge, not from a local copy.** Describe them
  in the course's own words, label them industry practice, never quote, never cite section or
  appendix numbers, and say "GAMP 5" (not "GAMP 5 requires").
- ISPE also lists a *GAMP Good Practice Guide: Testing GxP Systems* (3rd edition) on that page.
  Name at most.

**Still NOT verified. Don't assert:**
- Any specific BECS product's 510(k) status, number, product code, or clearance date. FDA's
  cleared-BECS list URL in the guidance (Ref. 9) is a 2013-era address. A drafter who wants to
  link the current list must find and curl-verify it first, and must not name products from it
  in a lesson.
- Any Part 807 (premarket notification) section number. Not fetched. Say "510(k) premarket
  notification" as the guidance does.
- Parts 803 and 806 text. Named only as referenced within 820.10.
- ISO 13485 clause *content*. Only the numbers and titles that appear in CFR or FDA guidance
  text (listed under m4) may be named.
- Whether FDA requires, accepts, or ignores ISO 13485 certification under the QMSR. That's in the
  final rule's preamble, which wasn't read. Don't say either way.
- Any historical FDA position that a blood establishment developing BECS in-house is a device
  manufacturer needing a 510(k). Plausible, often repeated, **unverified**. m4 presents the
  verified text (820.3 "manufacturer," 864.9165(a) "BECS accessory," 820.1(a)(3)) and routes the
  question to regulatory affairs.
- IMDRF's SaMD definition. Name the term only.
- 211.22 / QC-unit independence. Still off-limits.
- AABB Standards numbers or text. QSE names and themes only, from `sources/aabb/qse-framework.md`.

**Resources-page candidates** (all curl-verified 200 on 2026-10-09; re-verify at build time):
Cornell LII for 21 CFR 864.9165, 211.68, 820.1, 11.10, and 11.3; FDA guidance pages for the BECS
user-facility guidance, the Part 11 Scope and Application guidance, the CSA guidance, and General
Principles of Software Validation; the Federal Register QMSR final rule
(`https://www.federalregister.gov/d/2024-01709`); ISPE's GAMP 5 Second Edition page (label it
"what it is, and it's a paid publication"). GovInfo's CFR collection remains the dated-citation
fallback.

## Notes for the orchestrator (this file can't edit these)

1. **`plans/curriculum.md` wording.** The "Where the depth comes from" table says "FDA's Quality
   Management System Regulation (QMSR, replacing 21 CFR 820)." More accurate: the QMSR *is*
   21 CFR Part 820 as amended (effective February 2, 2026). And per 820.1(a)(3) it binds BECS
   manufacturers, not blood establishments. Consider a one-line fix. The course's syllabus page
   and m4 teach the accurate version either way.
2. **`becs-in-the-pipeline` verification note** (it names the guidance "by title only... confirm
   the current version") can now be resolved: the exact title and April 2013 final are verified
   and saved. A later light-touch pass could update that note and add the FDA guidance page to its
   `resources.qmd`. Not done here (Phase 2 doesn't touch lessons).
3. **DQA m4 deepening** becomes possible after m6 (and fully after m7) of this course. See "Feeds
   back to `directing-the-quality-analyst`." When this course completes, add the "revisit DQA m4"
   line to curriculum.md's Next up, as DQA's plan already requested.
4. **`sources/` additions this session** are listed in `sources/INDEX.md`. They were fetched
   during scoping, not lesson drafting, so module drafters don't need to run `fetch-source` for
   any of them.

## Progress log

- **2026-10-09**: Course scoped (Phase 1/2). Syllabus page (`courses/csv-and-becs/index.qmd`,
  `order: 40`) and this plan written. No lesson content yet. Not committed or pushed (held for
  review per this session's instructions). Key decisions:
  1. **Seven modules, curriculum.md's order kept**, with slugs `gamp5-and-the-v-model`,
     `iq-oq-pq-and-traceability`, `becs-as-a-regulated-device`, `qmsr-iso-13485-and-the-vendor`,
     `part-11-for-validated-systems`, `validated-state-lifecycle-and-patching`,
     `becs-interfaces-and-data-integrity`.
  2. **m1/m2 split by question:** m1 "how much validation and what defines it" (risk,
     categories, plan, specifications, the V's logic); m2 "does the executed evidence prove it"
     (IQ/OQ/PQ evidence, traceability matrix, report, the main planted package).
  3. **m3/m4 split by product vs. producer:** m3 is the device and the user's obligations
     (864.9165(a), 510(k), FDA's BECS guidance). m4 is the vendor's QMSR/ISO 13485 world,
     special controls as validation inputs, and the in-house manufacturer question.
  4. **The verified placement answer:** Part 820 (QMSR) excludes blood manufacturers
     (820.1(a)(3)). Device-grade rules bind the vendor. Lakeshore answers to blood CGMP plus
     FDA's BECS guidance.
  5. **m5 scoped to Part 11's validation slice** using the 2003 guidance's enforce vs.
     enforcement-discretion lists: (d), (f), (g), (h) as functional requirements to validate;
     11.10(a) under discretion with predicate rules (211.68, 606) carrying validation;
     closed/open systems. Everything else goes to `data-integrity-and-records`.
  6. **Two-layer review:** DQA's cold-read test (decision trail) plus a new four-question
     **adequacy check** (Coverage, Design, Fidelity, Regression) drawn from FDA's BECS guidance.
  7. **Scenario:** continue the VIA-0842 thread as the course's motivating question and m6's
     payoff (recommended verdict recorded above: decision trail clean, adequacy not
     demonstrated, because there was no regression analysis and step 7's timing failure should
     have widened scope), inside a new setting: the BECS upgrade to a vendor's new major release
     after end of support. m7 closes VIA-0842's interface loose end.
  8. **Verification:** fda.gov reachable for the first time in this curriculum's history.
     Verified and saved FDA's BECS user-facility guidance (exact title, April 2013, final), the
     2003 Part 11 Scope and Application guidance, a CSA 2026 excerpt, and CFR sections 864.9165,
     820.1/820.3/820.7/820.10, 211.68, 211.100, 210.2, 211.1, 606.60, 11.1, 11.3, and 11.30. QMSR
     effective date (2026-02-02) verified via the Federal Register API and the CSA guidance text.
     GAMP 5 Second Edition (ISPE, July 2022) verified as a title and edition only.
  9. **`order:` verified by grep:** the max in `courses/**` was 39, with no duplicates. This
     course uses 40–54, and the next course starts at 55 (SKILL.md updated).
  Next: build m1, `gamp5-and-the-v-model`, locking the upgrade-scenario facts listed under
  "Facts m1 must lock and log."
- **2026-10-09**: Module 1, `gamp5-and-the-v-model`, drafted (via subagent), audited, and
  published (`courses/csv-and-becs/gamp5-and-the-v-model/index.qmd` and `resources.qmd`,
  `order: 41`/`42`). Citations verified verbatim against `sources/cfr/211.68.md`,
  `sources/cfr/210.2.md`, and `sources/fda-guidance/becs-validation-users-facility-2013.md`;
  all four `resources.qmd` links curl-verified 200. Lesson runs ~4,390 words (slightly over the
  2,000–4,000 target, in line with sibling modules of similar density; not trimmed further).
  **Locked scenario facts (later modules must not contradict):**
  - Validation package ID **VAL-1203** (upgrade to the BECS vendor's next major release,
    "Release B," after end-of-support on the current release).
  - Scope: the central BECS application server, plus BECS clients at both Brookfield and
    Fairview.
  - The in-house Category 5 component is a **Lakeshore-IT-built-and-maintained translation
    script that converts result messages from the testing lab's LIS into BECS's expected input
    format** — no vendor involvement. This is the thing m4 (manufacturer question) and m7
    (interface validation) return to.
  - Authored by the Quality Validation Lead with IT and the vendor's implementation consultant;
    Quality blocking, Director system-owner co-approver.
  - Draft URS rows used: REQ-014 ("shall be user-friendly," untestable), REQ-022 (the
    quarantine/release-gate requirement, testable wording but blank risk ranking), and no row at
    all for the in-house script.
  - 11.10(a) named in one line only, deferred to m5. No calendar year used in the fictional
    narrative.
  Next: build m2, `iq-oq-pq-and-traceability`, the course's main planted-document teaching
  device (VAL-1203's executed package).
