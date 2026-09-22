# Plan: `quality-system-essentials` (Track 2, course 1 of 2)

Course page: `courses/quality-system-essentials/index.qmd`.
This file is the memory between sessions. Update the status table and add to the progress
log after every module. **Read the whole "Scoping decisions" section before drafting any
module.** The module boundaries here are easy to blur, and later tracks depend on them.

## Finish line

Run a deviation from discovery through CAPA effectiveness check, and explain document control
and change control well enough to defend them to an assessor.

## Prerequisites

All three foundations and all of `blood-center-operations` are done and published. Link back
to them and don't re-teach them:

- `foundations/reading-a-cfr-citation`: citation anatomy, and 606.160(b)(3)/(d) (temperature
  charts, record retention). This lesson already says "CAPA gets its own lesson later in the
  curriculum." That lesson is module 3.
- `foundations/regulatory-landscape-orientation`: regulation vs. guidance vs. AABB Standard
  vs. industry practice; 606.100(d) (using AABB manuals as an SOP floor); AABB assessor
  nonconformance vs. FDA 483.
- `foundations/risk-and-controls-vocabulary`: likelihood/severity/detectability,
  inherent vs. residual, preventive/detective/corrective controls, **correction vs.
  corrective action** (already taught with the label-swap example), 606.100(c) "thorough
  investigation... conclusions and followup," 606.171(b)(1)/(b)(3)/(c) reportability and the
  45-day clock. ICH Q9 is already introduced by name as a guideline, not a regulation.
- `courses/blood-center-operations/becs-in-the-pipeline`: the "one incident, two tracks" framing
  (IT incident plus quality/deviation track), the BECS OS-patch scenario, validation impact
  assessment and Quality as a *blocking* approver for BECS changes, vendor change
  notification, 606.100(b) intro sentence, 11.10(a) "validated state."
- Other Track 1 modules supply scenario material: deferral registry and donor identity
  (module 1, 630.10, 606.160(e)), quarantine as a release gate (module 2), the ICCBBA
  product-code-table vendor push (module 3), distribution records and consignees
  (module 4, 606.165).

## Modules

Build in order. One module per session: lesson `index.qmd` plus `resources.qmd` under
`courses/quality-system-essentials/<slug>/`.

| # | Slug | Finish line | Status |
|---|---|---|---|
| 1 | `aabb-qse-framework` | Name the parts of AABB's Quality System Essentials, place any quality activity (a deviation, a change, an audit, a document revision) in the right one, and say how the framework mirrors ISO 9001's structure and the ITIL practices you already run | Published |
| 2 | `deviations-and-nonconformances` | Take an unplanned event from discovery through containment, impact assessment, product disposition, and a documented reportability decision, and decide, with written reasoning, whether it needs a CAPA | Not started |
| 3 | `capa-root-cause-to-effectiveness` | Tell a real root cause from "human error," choose corrective and preventive actions that change the process, and set an effectiveness check with a measurable criterion that could actually fail | Not started |
| 4 | `change-control-for-regulated-systems` | Take any change to a regulated process, document, piece of equipment, supplier, or system through request, impact and risk assessment, approval, implementation, and verification, and name the record that proves each step | Not started |
| 5 | `document-control-and-records` | Follow a controlled document from draft through approval, issue, revision, and retirement, tell a document from a record, and explain how an obsolete version ends up in use and what control stops it | Not started |
| 6 | `quality-risk-management` | Run a real quality decision through ICH Q9(R1)'s process (risk assessment, control, communication, review) using an FMEA or risk ranking and filtering, and choose how much formality the decision deserves | Not started |
| 7 | `internal-audits-and-management-review` | Explain what internal assessments do inside the quality system and what management review must do with their outputs, and judge whether a management-review packet shows a quality system that is actually working | Not started |

Status values: Not started / Drafted / Published.

**Front-matter `order:` for module pages — read this carefully, it's a fixed bug.** `order:`
turned out to compete globally across the entire `courses/**` glob, not just within one
module's own folder — Track 1 originally gave all five modules' `index.qmd`/`resources.qmd`
the same value (`2`) on the theory that each module's local order only had to make sense
within its own folder, and that produced a real bug: the sidebar fell back to alphabetical
order across modules (BECS first, Storage last), not the pipeline order. This has been fixed:
every page across the whole curriculum now gets its own globally unique, monotonically
increasing `order:` value, assigned once in reading sequence and never reused. The syllabus
page here (`courses/quality-system-essentials/index.qmd`) has already been set to `order: 12`,
continuing directly after Track 1's last value (`blood-center-operations/becs-in-the-pipeline/
resources.qmd` = 11). Use these exact values for this course's module pages — one number per
file, index.qmd and resources.qmd each get their own:

| File | `order:` |
|---|---|
| `aabb-qse-framework/index.qmd` | 13 |
| `aabb-qse-framework/resources.qmd` | 14 |
| `deviations-and-nonconformances/index.qmd` | 15 |
| `deviations-and-nonconformances/resources.qmd` | 16 |
| `capa-root-cause-to-effectiveness/index.qmd` | 17 |
| `capa-root-cause-to-effectiveness/resources.qmd` | 18 |
| `change-control-for-regulated-systems/index.qmd` | 19 |
| `change-control-for-regulated-systems/resources.qmd` | 20 |
| `document-control-and-records/index.qmd` | 21 |
| `document-control-and-records/resources.qmd` | 22 |
| `quality-risk-management/index.qmd` | 23 |
| `quality-risk-management/resources.qmd` | 24 |
| `internal-audits-and-management-review/index.qmd` | 25 |
| `internal-audits-and-management-review/resources.qmd` | 26 |

The next course after this one continues at `order: 27`. See `create-course`'s SKILL.md for
the running global counter this scheme now depends on — check there for the current next
value if this file and the skill ever disagree.

## Scoping decisions (read before drafting any module)

### Altitude

Director altitude. He directs and reviews this work and defends it to the CIO, FDA, and AABB.
The Quality Analyst does the work. Give him enough to run the process, ask the right question,
and catch a wrong answer. Don't write a procedure manual or a template library. Test every
paragraph by asking whether it helps him review his QA's deviation/CAPA/change record or
answer an assessor. If it doesn't, cut it.

**Boundary with Track 6 (`directing-the-quality-analyst`):** Track 6 owns *reviewing a QA's
write-up for defensibility*: red-pen technique, review rubrics, coaching, delegation,
escalation criteria, KPIs reported upward. This course teaches the *process and what "good"
looks like*. The "What this means for your job" sections can and should include review
questions, but no module here builds a full review checklist or a coaching script.

### The recommended through-line scenario (modules 2–5, reused by 6 and 7)

The course finish line is one continuous story: discovery → CAPA → the fix goes through change
control → the fix revises controlled documents. So modules 2–5 should follow **one event at
Lakeshore Blood Center** across four lessons. Each lesson still opens with its own scene at a
later point in the story (TEACHING.md spine step 1), and each must make sense on its own.

Recommended event (IT-adjacent on purpose, since it's the learner's world, but not a BECS
validation story): **During a planned overnight BECS maintenance window, a Lakeshore
satellite collection site runs its paper downtime procedure. The copy in the site's downtime
binder is a superseded revision. That revision doesn't require reprinting the deferred-donor
list right before downtime, so staff check donors against a list several days stale. A donor
deferred at a different Lakeshore site in that gap donates. Post-downtime reconciliation
(entering the paper transactions into BECS) catches it, but only after at least one component
from that donation has been distributed to a hospital.**

Why this event: it touches the deferral registry (Track 1 module 1; 606.160(e), 630.10(d)(1)
already in `sources/`), quarantine and release, distribution and consignees (Track 1 module 4,
606.165), and 606.171's distributed-product trigger. That gives module 2 a real reportability
call instead of the foundation's "caught before it shipped." It gives module 3 a root cause
that is plainly *not* "staff used the wrong binder." It gives module 4 several changes of
different types (an SOP revision, a process change, a BECS report/export change) and module 5
a document-control failure: an obsolete controlled copy surviving at a remote site. It also
reuses the learner's ITSM home turf (maintenance windows, downtime, service continuity) without
restaging the OS-patch fight from `becs-in-the-pipeline`.

**Module 2's drafter locks the facts** (site name, dates, deferral reason, which component
shipped, to which fictional hospital; Track 1 used "Riverside General Hospital") and records
them in the progress log so modules 3–7 reuse them exactly. Pick a deferral reason that makes
the collected unit genuinely unsuitable, and check it against `sources/cfr/630.10.md` and
`606.160.md` before writing. If the facts make the 606.171 call genuinely "reportable,"
say so plainly from the text. Don't soften it. Drafters may depart from this scenario only for
a clear teaching reason, and must record the change in the progress log.

### Where each module stops (guard these boundaries)

**Module 1: `aabb-qse-framework` (orientation only).**
- Owns: what a "quality system" is (and how it differs from QA and QC), the AABB QSE structure
  as a map, where each later module sits in it, the parallel to ISO 9001's clause structure,
  and an orienting ITIL analogy. Also why the QSEs exist: per AABB's own account, a late-1990s
  shift from *detecting* errors to *preventing* them, after FDA began citing blood
  establishments for GMP gaps. That's paraphrased from AABB public material; see sourcing
  notes.
- Does **not** own: any QSE's mechanics (modules 2–7), the full ITIL-to-QSE crosswalk table
  (**Track 5, `itsm-for-regulated-blood-services`, module 1 owns that**. Module 1 here gives an
  orienting analogy and three or four example pairings at most), ISO 13485/QMSR (Track 3), ISO
  27001 (Tracks 4/5), the AABB assessment process itself (`fda-and-aabb-in-practice`).
- Altitude: a map, not a tour. One or two sentences per QSE, focused on "where does IT show up
  in this one?" Spend the depth on placing things correctly and on the ISO 9001 parallel.
- This is **the definitive first introduction of "QSE" as a framework** (see "First-use
  framing" below).

**Module 2: `deviations-and-nonconformances` (the event).**
- Owns: vocabulary (deviation vs. nonconformance vs. adverse event vs. near-miss vs.
  complaint), discovery and recording, **immediate containment and correction** (quarantine,
  retrieval, consignee notification as a step, not a legal deep-dive), **impact and extent
  assessment** ("what else is affected?": other units, other sites, other donations during
  the same window), **product disposition** and who has authority to decide it, classification
  and severity, the **606.171 reportability determination as a documented step in the flow**,
  and the **CAPA decision**: does this event need one, with written reasoning.
- The investigation in module 2 answers **what happened, to what, how far it spread, what we
  did with the product, and whether we must tell FDA.** It stops at the *proximate*
  explanation ("the site used a superseded downtime procedure"). It does **not** ask *why the
  system let that happen*. That question is module 3's entire job.
- Output of module 2 is a closed (or closable) deviation record with a disposition, a
  reportability determination, and a CAPA yes/no plus rationale. Closing the deviation doesn't
  wait for the CAPA to finish. The two have different clocks. Say so explicitly, because it's a
  common real-world confusion.
- Say plainly that **in practice the line is blurry**. Many organizations put a root-cause
  field on the deviation form, and small events often get a short cause statement without a
  formal CAPA. The course draws the line by *question asked*, not by form: "what happened and
  what did we do about this product" is deviation management; "why does the system allow
  this, and how do we prove it won't recur" is CAPA. The Director's review questions differ
  between the two, which is why the line matters.
- Does **not** re-teach: the 606.171 test itself, "may affect," or the 45-day clock (the
  foundation owns these; apply them, point back). Correction vs. corrective action as concepts
  (the foundation owns these; use them as known). BPDR *filing mechanics* (forms, electronic
  submission, what goes in the report) belong to `fda-and-aabb-in-practice` ("Biological
  Product Deviation Reports" module). Also not here: planned deviations or pre-approved
  exceptions (module 4 owns those as the controlled cousin of an emergency change; module 2
  mentions them in one line at most) and root-cause tools (module 3).
- New CFR hooks already in `sources/`: 606.100(b)'s clause requiring written SOPs "for all
  steps in the investigation of product deviations related to § 606.171" (not quoted by any
  prior lesson) and 606.160(b)(7)(iii) (records of biological product deviations). 606.100(c)
  is the regulatory spine but was already quoted in full by the foundation. Point back to it,
  quote at most the last sentence.

**Module 3: `capa-root-cause-to-effectiveness` (the system fix).**
- Owns: what CAPA is and where CAPAs come from (deviations, trends across many small
  deviations, audit findings, complaints, management review). Corrective vs. preventive action
  (AABB's public framework defines both. Paraphrase them.). Root-cause analysis at Director
  altitude: 5 Whys and fishbone named and shown once, not taught as a workshop. **"Human error"
  / "retrained staff" as a non-root-cause** (a big trap. The reading-a-cfr-citation foundation
  already flagged "we retrained staff" as a bad answer. Pay that off here.). Choosing actions
  that change the system rather than the person. Action plans with owners and dates.
  **Effectiveness checks**: a measurable criterion, a time window, a data source, and a
  pre-agreed definition of failure. Closing vs. extending vs. re-opening a CAPA. CAPA aging and
  why an overdue CAPA backlog is itself a finding.
- The effectiveness check is the course's headline skill (it's in the finish line). Give it
  real weight: what makes a check that can't fail ("no recurrence in 30 days" for an event
  that happens twice a year), and what makes a good one.
- The actions this CAPA produces (revise the downtime SOP, change how deferral lists are
  generated, change document distribution to satellite sites) are **handed to module 4 as
  change requests**. Module 3 does not walk them through change control.
- Does **not** own: formal risk prioritization of a CAPA backlog. Module 3 can say "rank it by
  likelihood, severity, and detectability" using foundation vocabulary informally, and module
  6 formalizes it. Also not here: problem-management tooling depth, and review rubrics for a
  QA's CAPA (Track 6).
- Regulation vs. standard point (good material for a "this is NOT a regulatory requirement"
  question): **21 CFR Part 606 never uses the words "corrective," "preventive," or "root
  cause."** Verified 2026-09-22 by searching the full Part 606 text fetched via the eCFR
  Versioner API. (That fetch was scratch, not saved to `sources/`. If a lesson asserts it,
  re-run the check via the API or phrase it as "none of the Part 606 sections quoted in this
  course.") CAPA as a named, structured process comes from AABB Standards (and ISO 9001,
  ICH/FDA quality-system guidance). The regulatory hook is 606.100(c)'s "conclusions and
  followup." Keep those tiers labeled.
- ISO 9001 angle worth one paragraph (verify first): ISO 9001:2015 dropped "preventive action"
  as a separate requirement and folded it into risk-based thinking. AABB still names
  preventive action. This sets up module 6.

**Module 4: `change-control-for-regulated-systems` (the fix goes live safely).**
- Owns: change control as a **general QSE process** for any regulated change: SOPs,
  processes, equipment, facilities, suppliers/materials, labeling, software. Lifecycle:
  **change request → impact assessment (quality, regulatory, validation, training, documents,
  other sites) → risk assessment → approval (Quality as approver, not notified) →
  implementation (training completed and documents issued *before* the effective date) →
  verification / post-implementation review → closure.** Planned vs. temporary/emergency
  changes, and **planned deviations / pre-approved exceptions** (AABB's public framework
  requires justification and medical-director pre-approval for exceptions to policies,
  processes, and procedures. Paraphrase, no standard number.). How CAPA feeds change control,
  and how an uncontrolled change *creates* deviations (the loop back to module 2). Why
  "validated before implementation" appears in the QSE framework (paraphrase).
- **How this avoids duplicating `becs-in-the-pipeline`:** that module taught *why a BECS
  change specifically* needs a validation impact assessment and Quality's blocking sign-off,
  through the OS-patch fight. Module 4 does **not** restage that tension or reuse the OS
  patch. Its scenario is the through-line CAPA's changes, most of which are *not* software (a
  downtime SOP revision, a document-distribution process change, a pre-downtime checklist).
  The one BECS-touching change (e.g., an automated deferral-list export) gets exactly one
  paragraph: "this one also needs a validation impact assessment, for the reasons in
  becs-in-the-pipeline, and Track 3 covers how that assessment is done." That shows the
  general machinery with the BECS branch as one case of it.
- **How this avoids pre-empting Track 3 (`csv-and-becs`):** no validation methodology, no
  IQ/OQ/PQ, no GAMP categories, no V-model, no patch management under a validated state (Track
  3 has a module on exactly that). "Validation" appears only as an *impact-assessment
  question* ("does this change require validation or re-validation? who decides?") and as a
  forward pointer.
- Also not here: vendor change notifications as a vendor-management topic (Track 4,
  `vendor-and-third-party-risk-management`, owns "vendor change notifications and your own
  change control"). Module 4 can name a vendor-initiated change as one input type in one line.
  Also not here: formal risk tools (module 6), document issuance mechanics (module 5; module 4
  just says "documents revised and issued" and points forward).
- ITSM bridge is the strongest in the course. See the per-module bridge list below. Name the
  specific *gaps* between ITIL change enablement and QSE change control. Don't say "it's the
  same thing."
- Regulatory tiering (verified by the same Part 606 search as above): **"change control" does
  not appear in 21 CFR Part 606.** It's named in AABB's public Quality Systems Framework under
  the Process Control QSE. See the sourcing notes for 21 CFR 211 as a possible regulatory hook
  that must be verified before use.

**Module 5: `document-control-and-records` (the fix is written down and the old version is
gone).**
- Owns: **document vs. record** (documents tell you what to do; records prove what was done.
  A blank form is a document and a completed form is a record). Document lifecycle: draft →
  review → approval → issue/effective date → training → periodic review → revision →
  obsolete/retire → archive. Controlled vs. uncontrolled copies (printouts, binders, local
  drives), a master list/index, external documents under control (vendor manuals, AABB
  Standards, the Circular of Information), and **how obsolete versions survive at remote
  sites** (the through-line). Record basics: Good Documentation Practices at Director altitude
  (concurrent, legible, indelible, attributable, dated, with single-line corrections), grounded
  in **606.160(a)(1)**, which is already in `sources/` and not yet quoted by any lesson. Also
  606.100(b)'s sentence that procedures "must be available to the personnel for use in the
  areas where the procedures are performed." That's also in `sources/` and not yet quoted.
  This is the regulatory hook for "the right version, at the point of use."
- The downtime binder's filled-in paper forms are *records*, later transcribed into BECS.
  Name that as a hybrid paper/electronic situation in **one sentence** and forward-point.
- Does **not** own: ALCOA+ (name at most, as a forward pointer), audit trails, Part 11
  e-signatures, hybrid-system depth, legacy-system Part 11 gaps, and the full retention
  treatment. **Track 3, `data-integrity-and-records`, owns all of these.** Retention
  (606.160(d)) was already taught in `reading-a-cfr-citation`, so reference it in one line
  only. Also not here: the change-control approval of a revision (module 4. Module 5 picks up
  once the change is approved and the document has to be issued, trained, and the old one
  pulled).

**Module 6: `quality-risk-management` (formalizing the risk calls).**
- **Assumed already known, do not re-derive** (from `risk-and-controls-vocabulary`):
  definitions of likelihood, severity, and detectability; inherent vs. residual risk;
  preventive/detective/corrective controls; the FMEA/RPN idea in one sentence; and that ICH Q9
  is an international harmonization guideline (not FDA regulation, not AABB Standard). Open
  by using these words without defining them, with one link back.
- **New in this module:**
  1. ICH Q9(R1)'s **process as a lifecycle**: initiating a QRM process → **risk assessment**
     (risk identification, risk analysis, risk evaluation) → **risk control** (risk reduction,
     risk acceptance) → **risk communication** → **risk review**. Plus responsibilities
     (decision-makers and cross-functional teams). The foundation taught *scoring*. This
     module teaches the *process around the score*, especially **risk acceptance as an
     explicit, owned decision** and **risk review as a scheduled revisit**.
  2. The **R1 additions**, in plain English: **formality** (effort and documentation scale
     with uncertainty, importance, and complexity, so not everything needs an FMEA),
     **managing subjectivity** (why two people score the same risk differently, and what to
     do about it), **risk-based decision-making**, and **product-availability risk**. That
     last one maps directly onto blood supply: quarantining inventory is itself a
     patient-risk decision when supply is short.
  3. Two Annex I tools in usable depth: **FMEA** (applied to a process, e.g., the downtime
     procedure step by step) and **risk ranking and filtering** (applied to a *portfolio*,
     e.g., ranking the open CAPA backlog or which of Lakeshore's sites to check first. ICH's
     own text names prioritizing sites for inspection/audit as a use). Name the other Annex I
     tools (FMECA, FTA, HACCP, HAZOP, PHA) in one line and don't teach them.
  4. Scoring-scale pitfalls at Director altitude: what an RPN hides, and why filters and
     cut-offs are *management policy choices* that someone has to own. Label this as industry
     practice or commentary unless it's sourced to Q9's text.
- **Scenario:** look back on the risk calls modules 2–5 made informally (the CAPA decision,
  the change's risk assessment) and redo one formally. The recommended version: the through-
  line CAPA has spawned "check every site's downtime binder," and there are more sites than
  time, so risk ranking and filtering decides the order. That hands off naturally to module 7.
- Does **not** own: NIST RMF / ISO 31000 side-by-side (Track 4,
  `grc-frameworks-and-risk-management`, module 1), validation risk assessment and GAMP 5
  risk-based approach (Track 3), security risk.
- AABB placement: in AABB's public 2021 Quality Systems Framework, risk assessment appears
  under the **Organization** QSE. But the accompanying AABB crosswalk marks the then-current
  equivalent standard as appearing only in some AABB Standards sets (cellular therapy and
  relationship testing), **not** clearly the blood bank/transfusion service set. **Do not claim
  that AABB's blood bank standards require a formal risk-assessment process** unless it's
  verified against current public AABB material. Say "ICH Q9 is guidance; AABB's framework
  addresses risk assessment; check the current edition" instead.

**Module 7: `internal-audits-and-management-review` (the capstone: is the system working?).**
- Owns: internal assessment **as a QSE element** (AABB's public framework names the QSE
  "Assessments: Internal and External" and lists types: external, internal, peer review,
  self-assessment. Paraphrase.). What an internal audit is *for* inside a quality system
  (independent evidence that processes run as written and work). The **finding → CAPA
  loop** back to module 3. Audit types a Director will meet (system/process audits, and the
  **tracer audit**, which follows one product from source to final disposition. AABB's public
  framework lists tracer audits as objective evidence under Process Control. It's a great
  Track 1 tie-in). And **management review**: executive management assessing the quality
  system's effectiveness at defined intervals (AABB public framework, Organization QSE.
  Paraphrase, no standard number). Also its **inputs** (audit results, deviation and CAPA
  trends, CAPA effectiveness, complaints, changes, risk) and **outputs** (decisions,
  resources, changes to the system, *not* a slide deck someone nodded at), plus where the IT
  Director sits in it.
- Scenario: an internal audit of downtime readiness across sites (following module 6's
  ranking) produces findings. Those findings plus the through-line CAPA's effectiveness data
  go into Lakeshore's management review. Close the whole course loop: deviation → CAPA →
  change → document → risk → audit → management review → back into CAPA.
- **Boundary with `fda-and-aabb-in-practice` (Track 2, course 2), which is strict:** that
  course owns **designing an internal audit program**: auditor independence and competency,
  audit scheduling, evidence sampling, nonconformance grading. It also owns FDA inspection
  authority, 483s, Warning Letters, recalls, the AABB assessment process, and mock
  inspections. Module 7 may state *that* internal audits must be independent in **one
  sentence** (AABB's public framework says so) and forward-point. It does not teach how to
  build a schedule, sample, or grade.
- Also not here: KPI design and reporting quality/IT performance upward (Track 6 and Track 5).
  Module 7 covers what management review *must decide*, not how to build the dashboard.
- Ends the course: the "where this goes next" step hands off to `directing-the-quality-analyst`
  (next in the recommended sequence) and to `fda-and-aabb-in-practice` (the audit-program and
  inspection depth). The recommended sequence puts Track 6 next. Check `plans/curriculum.md`
  when drafting.

### First-use framing (these recur for the rest of the curriculum, so get them right once)

- **QSE / Quality System Essentials: definitive introduction in module 1.** Earlier lessons
  used "CAPA" and mentioned AABB "Quality Program standards," but no lesson has introduced the
  QSE framework. Module 1 defines it, gives the structure, and explains the prevention-over-
  detection origin. **Modules 2–7 each open by naming which QSE they live in, in one line**,
  using module 1's names exactly:
  - module 2 → Deviations, Nonconformances, and Adverse Events
  - module 3 → Process Improvement (the older AABB template titled it "Process Improvement
    Through Corrective and Preventive Action")
  - module 4 → change control sits inside **Process Control**
  - module 5 → Documents and Records
  - module 6 → no single QSE. Risk assessment appears under Organization in AABB's public 2021
    framework (see the caveat above)
  - module 7 → Assessments: Internal and External, with management review under
    **Organization**
  (All names verified against AABB public PDFs. See sourcing notes. If module 1's
  verification finds different current titles, update this list in the progress log and use
  the current titles everywhere.)
- **CAPA: definitive introduction in module 3.** Every earlier mention (foundations) was a
  one-clause gloss. Module 3 is the full treatment. Later tracks (Track 4's "POA&Ms next to
  CAPAs," Track 5's "problem management ↔ CAPA," Track 6's CAPA review) assume module 3's
  framing, especially **effectiveness check** as a defined term.
- **Deviation vs. nonconformance: definitive in module 2.** Use AABB's public-framework
  definitions, paraphrased: a *deviation* departs from a policy, process, procedure,
  regulation, standard, or specification. A *nonconformance* is a failure to meet
  requirements. Say plainly that organizations use these terms loosely and sometimes
  interchangeably, and that the assessor cares that Lakeshore's SOP defines them and applies
  them consistently.
- **Change control: definitive general treatment in module 4.** `becs-in-the-pipeline` used
  the term in its BECS-specific sense. Track 3 (validation) and Track 4 (vendor changes)
  assume module 4's general lifecycle.
- **Document vs. record: definitive in module 5.** Track 3's `data-integrity-and-records`
  assumes it.
- **Management review: definitive in module 7.** Track 5 (presenting to the exec quality
  council) and Track 6 (reporting upward) assume it.
- TEACHING.md still requires defining every acronym on first use *in each lesson* (QSE, CAPA,
  BECS, BPDR, SOP, ICH, FMEA, and so on).

### ITSM/ITIL bridge angle per module (spine step 2 needs one)

These are angles, not finished copy. The rule from the learner profile applies: bridge first,
then name exactly where the quality version demands *more* than ITIL does. A bridge that says
"it's the same thing" is a failed bridge.

1. **`aabb-qse-framework`**: ITIL 4's practices are to a service management system what the
   QSEs are to a quality system: a set of interlocking practices, not a checklist. The strongest
   single bridge: **ISO 9001 and ISO/IEC 20000-1 (IT service management) share the same ISO
   harmonized clause structure** (context, leadership, planning, support, operation,
   performance evaluation, improvement). The learner has likely seen 20000-1 or at least ISO
   27001, which also uses it. So "you already know the shape of this" is literally true. Give
   three or four example pairings at most (e.g., deviations ↔ incident, CAPA ↔ problem, change
   control ↔ change enablement, documents ↔ knowledge management). The full crosswalk is Track
   5's. Verify the shared-structure claim before stating it (see sourcing notes).
2. **`deviations-and-nonconformances`**: incident management, with three things ITIL doesn't
   have: **product disposition** (the "service" is a physical unit that may have to be
   quarantined, recalled, or destroyed), **a regulatory clock that starts at discovery** (the
   foundation's 45 days), and **impact assessment as extent-of-condition** ("which *other*
   units?") rather than "which users are affected." Pick up `becs-in-the-pipeline`'s "one
   incident, two tracks." This module *is* the second track, run in full.
3. **`capa-root-cause-to-effectiveness`**: problem management (RCA, known errors, workaround
   vs. permanent fix), with the one step ITIL practitioners routinely skip made mandatory:
   **proving the fix worked** (effectiveness check). "Human error" as a root cause is the
   quality world's "closed: user error" ticket code, and it's treated with the same suspicion.
   A CAPA log is a known-error database that an inspector reads.
4. **`change-control-for-regulated-systems`**: change enablement (RFC → assess → CAB →
   implement → PIR), with the gaps named explicitly: the impact assessment asks
   *quality/regulatory/validation/training/document* questions, not just service risk. Quality
   is a blocking approver. **Training and document issuance must complete before the effective
   date.** The PIR becomes a verification with objective evidence. "Standard change"
   pre-approval exists in QSE-land too, but only for change types whose risk has already been
   assessed and documented. Emergency change ↔ planned deviation / pre-approved exception.
5. **`document-control-and-records`**: knowledge management plus configuration management
   applied to documents. A controlled document is a versioned CI with a baseline. The
   master list is the CMDB for procedures. **An obsolete binder at a remote site is a stale
   cache with no invalidation.** "It's on SharePoint, so everyone has the latest" is the
   equivalent of "it's in Git, so production is running it." Records ↔ logs and audit
   evidence: immutable once written, with a retention obligation.
6. **`quality-risk-management`**: the learner's own risk scoring for changes and incidents
   (impact × urgency, change risk assessment), made into a lifecycle with **risk acceptance as
   a signed decision** and **risk review as a scheduled event**. Risk ranking and filtering ↔
   how he'd prioritize a patch or vulnerability backlog across many servers with finite staff.
   The filter/cut-off is the SLA policy. Formality ↔ not every change needs a full CAB. That's
   the standard/normal/major distinction applied to risk assessments.
7. **`internal-audits-and-management-review`**: internal audit ↔ ISO 20000/27001 internal
   audits and ITIL service reviews. Management review ↔ ITIL 4 governance ("evaluate, direct,
   monitor") and the quarterly service review with executives, where the test is whether the
   meeting *produced decisions and resources*. The continual improvement register ↔ CAPA
   system fed by audit findings.

### "This is NOT a regulatory requirement" question hooks

TEACHING.md wants at least one question per course whose honest answer is "not regulation"
or "guidance, not regulation." This course has unusually good material. Spread these across
modules so not every lesson resolves to "yes, cite the rule":
- "Part 606 requires a CAPA program." False as worded. Part 606 never names CAPA. The hook is
  606.100(c)'s "conclusions and followup." CAPA structure comes from AABB Standards (binding on
  Lakeshore through accreditation) and quality-system guidance (module 3).
- "FDA regulation requires change control." Not in Part 606's words. AABB Standards (Process
  Control QSE) name it. A possible 21 CFR 211 hook exists but must be verified (module 4).
- "ICH Q9 requires an FMEA." False. Q9 lists FMEA as one optional tool, and R1 explicitly says
  formality should scale (module 6).
- "Management review is an FDA requirement for blood establishments." Not in Part 606. It's an
  AABB Standards requirement (Organization QSE) and an ISO 9001 clause (module 7).
- The AABB QSE count: "there are 12." See the flag below (module 1).

### What belongs to other courses (do not teach it here)

| Topic | Owner |
|---|---|
| BPDR filing mechanics; 483s, Warning Letters, recalls; the AABB assessment process; audit-program design (independence, competency, scheduling, sampling, nonconformance grading); mock inspections | `fda-and-aabb-in-practice` |
| Reviewing a QA's deviation/CAPA write-up for defensibility; escalation criteria; coaching; KPIs upward | `directing-the-quality-analyst` |
| Validation methodology, GAMP 5, IQ/OQ/PQ, V-model, patch management under a validated state, ISO 13485/QMSR | `csv-and-becs` |
| ALCOA+, audit trails, Part 11 e-signatures, hybrid/legacy systems, retention deep-dive | `data-integrity-and-records` |
| NIST RMF / ISO 31000 side by side with ICH Q9; POA&Ms next to CAPAs | `grc-frameworks-and-risk-management` |
| Supplier qualification, vendor change notifications as vendor management | `vendor-and-third-party-risk-management` |
| Full ITIL-to-QSE crosswalk; presenting to the exec quality council | `itsm-for-regulated-blood-services` |

## Sourcing notes (read before citing anything)

**Already in `sources/` and usable here:** `606.100` (b) intro, the product-deviation-SOP
clause, the "available... in the areas where the procedures are performed" sentence, (c) and
(d). `606.160` (a)(1), (b)(7)(iii), (d), (e). `606.171` (b), (c). `630.10`, `606.165`, and
`606.40` (quarantine locations) for through-line scenario facts. Prior lessons quoted many of
these. Point back instead of re-quoting at length, and prefer the clauses flagged above as
not yet quoted.

### AABB QSE list: verified in part, and the module-1 drafter MUST finish verifying

- **The brief behind this plan referred to "the 12 AABB Quality System Essentials." That
  number does not match AABB's own public material.** AABB describes **ten** QSEs, launched in
  1997. The "12" likely comes from CLSI's (Clinical and Laboratory Standards Institute)
  separate laboratory QMS model, which also uses the term "quality system essentials." That
  CLSI detail is **unverified**. Don't state it in a lesson unless it's checked. At most,
  mention that other bodies use similar models with different counts.
- Verified 2026-09-22 from two public AABB PDFs, both of which download fine (HTTP 200) via
  curl:
  - *PROPOSED Quality Systems Framework*, dated September 21, 2021, posted for public comment:
    `https://www.aabb.org/docs/default-source/default-document-library/standards/aabb-quality-systems-framework-2021.pdf?sfvrsn=a11081d1_2`
  - *"Crosswalk" between the proposed AABB Quality Systems Framework and the current QSE
    template* (2021):
    `https://www.aabb.org/docs/default-source/default-document-library/standards/crosswalk-between-quality-systems-framework-and-qse-template.pdf?sfvrsn=6eb3d2a8_0`

  Both show ten QSEs with the same ten themes. Proposed-framework titles (with the
  then-current template's title in brackets where it differs):
  1. Organization
  2. Resources
  3. Equipment
  4. Supplier and Customer Agreements [then-current: Supplier and Customer Issues]
  5. Process Control
  6. Documents and Records
  7. Deviations, Nonconformances, and Adverse Events
  8. Assessments: Internal and External
  9. Process Improvement [then-current: Process Improvement Through Corrective and
     Preventive Action]
  10. Facilities and Safety
- AABB's public page "Updated Quality Systems Essentials"
  (`https://www.aabb.org/standards-accreditation/standards/about-aabb-standards/updated-quality-systems-essentials`)
  says all AABB Standards are now based on the updated QSEs, but **does not list them**. A 2024
  *Transfusion* article (Ooley & Bocquet, "Significant changes to AABB Standards: Updated
  quality system essentials," PMID 38419598) covers the update. Its abstract confirms the QSE
  history but not the list.
- **What is NOT verified:** the exact QSE titles in the *current* edition of AABB *Standards
  for Blood Banks and Transfusion Services* (the adopted version, which may differ slightly from
  the 2021 proposal), and any standard *numbers* (e.g., a number for change control or
  management review). The PDFs contain proposed standard numbering. **Don't cite numbers from
  them as current AABB standard numbers.**
- **Module-1 drafter's steps:** (1) run `fetch-source` to save a *structure-only* note to
  `sources/aabb/quality-systems-framework-2021.md` with the ten QSE titles, the document titles,
  dates, and URLs, plus a short paraphrased "key concepts" line per QSE. **Do not copy AABB's
  standards text or glossary definitions verbatim.** It's copyrighted (fetch-source rule). (2)
  Try once more to confirm current titles from AABB public pages. (3) In the lesson, name the
  ten QSEs as "the ten QSEs in AABB's publicly posted Quality Systems Framework," say titles
  may be worded slightly differently in the current Standards edition, and cite no standard
  numbers. If step 1 fails for any reason, describe the framework by theme without a numbered
  list and flag it here.
- Both PDFs are good candidates for module 1's `resources.qmd` (primary AABB source, publicly
  posted), once they're re-verified to load.

### ICH Q9(R1): verified, reachable, and reproducible with attribution

- **ICH Q9(R1) Quality Risk Management**, final version adopted 18 January 2023 (minor
  typographical correction 26 January 2023). It revises Q9 (2005). PDF verified reachable
  (HTTP 200, 29 pages) 2026-09-22:
  `https://database.ich.org/sites/default/files/ICH_Q9%28R1%29_Guideline_Step4_2023_0126_0.pdf`
- Verified structure: section 4, General QRM Process (4.1 Responsibilities, 4.2 Initiating,
  4.3 Risk Assessment, 4.4 Risk Control, 4.5 Risk Communication, 4.6 Risk Review). Section 5,
  Risk Management Methodology (5.1 Formality, 5.2 Risk-Based Decision-Making, 5.3 Managing and
  Minimizing Subjectivity). Section 6.1, product availability risks. Annex I tools (I.2 FMEA,
  I.3 FMECA, I.4 FTA, I.5 HACCP, I.6 HAZOP, I.7 PHA, **I.8 Risk Ranking and Filtering**, I.9
  statistical tools). Scope (section 2) covers drug substances, drug products, and "biological
  and biotechnological products." It doesn't name blood establishments, so frame its
  applicability to Lakeshore as the accepted industry method (the same framing the foundation
  used), not as a scope statement.
- ICH's legal notice permits reproduction with acknowledgment of ICH copyright, so **module 6
  may quote short passages verbatim**. Save it first via `fetch-source` to
  `sources/ich/q9r1.md` (at minimum sections 4, 5, and Annex I.2 and I.8), with the copyright
  acknowledgment.
- FDA adopted Q9(R1) as an FDA guidance document, but fda.gov returns HTTP 401 from these
  sessions, so the FDA adoption date is **not verified**. Say "FDA has adopted ICH Q9(R1) as
  guidance" only if verified. Otherwise say ICH guidelines are adopted by member regulators
  including FDA (the foundation already says this).

### ISO 9001: not fetchable, so keep claims structural

- iso.org returns HTTP 403 from these sessions, and ISO text is copyrighted and sold. Don't
  quote it.
- **Edition caution:** a web search on 2026-09-22 reported that **ISO 9001:2026 was published
  on 16 September 2026** (sixth edition, harmonized structure retained, three-year transition
  from ISO 9001:2015). That came from secondary sources and is **not verified on iso.org**.
  Module 1 should either name no edition ("ISO 9001's clause structure") or say "ISO 9001:2015,
  which a 2026 revision is replacing" only after verifying.
- Structural claims believed correct but **to be verified** before stating them (a public ISO
  page, e.g., ISO's own "harmonized structure"/Annex SL explanation, or a clause-title listing,
  is enough): clauses 4–10 are Context, Leadership, Planning, Support, Operation, Performance
  evaluation, and Improvement. Internal audit and management review sit under Performance
  evaluation, and nonconformity/corrective action under Improvement. ISO/IEC 20000-1 and ISO
  27001 share the structure. The 2015 edition replaced a separate "preventive action" clause
  with risk-based thinking. If none of this can be verified, describe the parallel at the level
  of "plan–do–check–act, with the same building blocks" and flag it.

### Regulatory hooks beyond Part 606: pointers to verify, NOT citations

- **21 CFR 210.2 / Part 211 applicability to blood.** The belief (unverified) is that 210.2
  makes Part 211 drug CGMP apply to blood and blood components where Part 606 doesn't
  specifically address a topic. If that's true, it could supply hooks such as 211.22
  (quality control unit responsibilities), 211.100(a) (changes to written procedures reviewed
  and approved by the quality control unit, relevant to modules 4 and 5), 211.192
  (investigations extending to other batches, relevant to module 2's extent-of-condition), and
  211.180(e) (periodic review, possibly relevant to module 7). **Fetch 210.2 via the eCFR
  Versioner API and confirm the supplementation language before citing any Part 211 section.**
  If the applicability can't be confirmed cleanly from the text, don't cite Part 211 at all.
  Say "Part 606 doesn't name this; AABB Standards do."
- **FDA "Guideline for Quality Assurance in Blood Establishments"** (believed to be CBER,
  1995): FDA's own framing of a blood-establishment QA program. It could be a strong module 1
  or module 4 source, but it's unverified (fda.gov 401) and its current status (possibly
  withdrawn or superseded) is unknown. Don't cite it unless it's fetched and its status is
  confirmed.
- AABB Standards: title-level citation only, never text, never unverified numbers
  (fetch-source rule and CLAUDE.md rule 5).

## Progress log

- **2026-09-22**: Course scoped (Phase 1/2). Syllabus page and this plan written; no lesson
  content yet. Seven modules fixed, matching `plans/curriculum.md`'s module list and order.
  Key decisions: (1) the deviation→CAPA line is drawn by *question asked* (what happened, to
  what, and what we did with the product vs. why the system allowed it and whether the fix is
  proven), not by form. Correction/containment lives in module 2 and corrective action in
  module 3. (2) A single through-line event (a stale deferral list used under a superseded
  downtime SOP during a BECS maintenance window, with a component distributed) runs through
  modules 2–5 and is revisited in 6–7. Module 2 locks its facts. (3) Change control (module 4)
  is taught as general QSE machinery on mostly non-software changes, and the BECS branch gets
  one paragraph pointing back to `becs-in-the-pipeline` and forward to Track 3. (4) Module 6
  assumes the foundation's vocabulary and adds ICH Q9(R1)'s lifecycle, the R1 themes
  (formality, subjectivity, product availability), and FMEA plus risk ranking and filtering.
  (5) Module 7 covers internal assessment as a QSE and management review, and leaves
  audit-program design to `fda-and-aabb-in-practice`.
  Verified sources: AABB's ten-QSE structure (from two public AABB 2021 PDFs; the current
  edition's exact titles are still unverified). **The "12 QSEs" premise in the scoping brief is
  wrong for AABB (it's ten).** ICH Q9(R1) is reachable and its structure confirmed. Part 606
  contains none of "corrective," "preventive," "root cause," "change control," "audit," or
  "management review" (full-part text search). ISO 9001's current edition and clause titles
  are unverified; a secondary source says ISO 9001:2026 was published 2026-09-16. Also found:
  all five `blood-center-operations` module pages carry `order: 2`, so that course's sidebar
  order is probably alphabetical rather than pipeline order. Flagged for the orchestrator; not
  fixed here. Next: build module 1, `aabb-qse-framework`. Save the AABB structure note to
  `sources/aabb/` first (see "AABB QSE list" above).

- **2026-09-22**: Module 1, `aabb-qse-framework`, drafted (`index.qmd` lesson +
  `resources.qmd`, `order: 13`/`14` as assigned). **The AABB ten-QSE list was further
  verified this session, not just hedged** — beyond the two 2021 discussion-draft PDFs
  already in this file, this session fetched and text-extracted (via `pypdf`, after
  installing it and fixing a broken `cffi`/`cryptography` binding in the sandbox; the
  PDFs are FlateDecode-compressed and WebFetch's own renderer choked on the raw stream,
  so extraction was done locally against the downloaded files) AABB's live
  "Quality Systems Essentials" / "Updated Quality Systems Essentials" pages (confirm
  1997 origin, 10 elements, 2023 template update, no title list posted) and, more
  importantly, the **PROPOSED 34th edition of *Standards for Blood Banks and Transfusion
  Services*** (comment period June–August 2023, **stated effective date April 1, 2024**
  — a real, dated, edition-specific document, not a discussion draft). That document's
  own intro says it "incorporated the updated quality system essentials (QSE) template"
  and explicitly chose to "preserve chapter headings and overall structure" from the QSE
  template; its ten numbered chapters (1 Organization through 10 Facilities and Safety)
  match the 2021 draft's ten QSEs theme-for-theme, including QSE 7 (Deviations,
  Nonconformances, and Adverse Events) citing 21 CFR 606.171 directly. This is
  meaningfully stronger evidence than what this file had before — a dated document with
  a past effective date, not just a comment-period discussion draft — though AABB still
  has no single "current definitive list" page, chapter-title *wording* drifts slightly
  edition to edition (documented in the new source file), and no standard *numbers*
  should be cited from either PDF. Full structural note, with both source URLs, extraction
  method, and an explicit "what is NOT verified" section, saved to
  `sources/aabb/qse-framework.md` (logged in `sources/INDEX.md`); no AABB standards text
  (no "shall" language, no glossary definitions, no objective-evidence bullets) was
  copied into that file or the lesson — only paraphrased names and themes. The lesson
  states the ten QSE names as verified but flags that exact current wording should be
  re-confirmed against whatever edition is actually on the shelf before being cited
  word-for-word in a real document.
  ISO 9001:2015's clause 4–10 structure (Context, Leadership, Planning, Support,
  Operation, Performance evaluation, Improvement) was corroborated via web search across
  several independent consultancy sources (iso.org itself still returns 403 from this
  environment) and is described generically in the lesson, without quoting ISO text and
  without naming an edition beyond "2015" — the unverified "ISO 9001:2026" claim already
  flagged in this file was not used.
  Reused rather than re-fetched: `sources/cfr/606.100.md` for 606.100(d) (the AABB-naming
  clause) — no new CFR fetch was needed. Confirmed via the earlier module's finding
  (reused, not re-verified from scratch this session) that "AABB" appears in Part 606's
  regulatory text exactly once, at 606.100(d).
  resources.qmd links (AABB QSE page, AABB updated-QSE page, Cornell LII 606.100,
  GovInfo CFR collection) all curl-verified HTTP 200 this session.
  Scope check against this file's "Module 1" boundary section: stayed at map/orientation
  altitude, gave three or four ITIL pairings (not the full crosswalk, which stays
  Track 5's), didn't teach any QSE's mechanics, and didn't touch ISO 13485/QMSR or the
  AABB assessment process.
  **For module 2:** the QSE-naming convention is now established — "module 2 opens by
  naming its QSE, Deviations, Nonconformances, and Adverse Events" is stated in this
  lesson's closing section, so module 2 should open that way rather than reintroducing
  the QSE concept from scratch. `sources/aabb/qse-framework.md` is available to reuse for
  QSE 7's theme description without re-fetching. Nothing about the through-line scenario
  was touched by this module (it's orientation-only, per the boundary section above);
  module 2 still needs to lock the through-line facts as instructed. Published:
  `courses/quality-system-essentials/aabb-qse-framework/index.qmd` and
  `resources.qmd`, and this course's status table above updated to "Drafted." Not yet
  pushed to the site as of this log entry — publish step still pending in this session.
