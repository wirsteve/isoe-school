# Plan: `directing-the-quality-analyst` (Track 6, only course)

Course page: `courses/directing-the-quality-analyst/index.qmd`.
This file is the memory between sessions. Update the status table and add to the progress
log after every module. **Read the whole "Scoping decisions" section before drafting any
module.** Two modules (4 and 5) are deliberately scoped lighter than their titles suggest,
and a drafter who hasn't read why will either overreach into technical content this
curriculum hasn't taught yet, or underdeliver on the part that is teachable now.

## Finish line

Review a deviation, CAPA, validation package, or vendor risk assessment your QA wrote well
enough to catch what an inspector or assessor would catch, and know when an issue must
escalate to you directly.

(Verbatim from `plans/curriculum.md`. See "Depth and altitude" below for how modules 4 and 5
deliver the validation and vendor halves of this finish line honestly, given what's built.)

## Prerequisites

All three foundations, all of `blood-center-operations`, and all of
`quality-system-essentials` are published. Link back to them and don't re-teach them:

- `foundations/reading-a-cfr-citation`: citation anatomy. Its opening scenario ("Corrective
  action: retrain staff on 606.160") was the curriculum's first flawed-QA-write-up moment.
- `foundations/regulatory-landscape-orientation`: regulation vs. guidance vs. AABB Standard
  vs. industry practice. Every review module uses **tier-labeling** as a standing check on
  the QA's writing ("does she call a standard a regulation?"). Don't re-teach the tiers.
  Apply them.
- `foundations/risk-and-controls-vocabulary`: likelihood/severity/detectability,
  inherent/residual, preventive/detective/corrective, correction vs. corrective action,
  606.100(c) "conclusions and followup," 606.171(b)/(c) reportability and the 45-day clock.
  This is the vocabulary the Director pushes back with. Use it without defining it.
- `courses/blood-center-operations/component-processing-and-labeling` (module 3): the
  **ICCBBA product-code-table vendor push**. Around 40 units (mostly leukoreduced red cells,
  a few pooled cryo) were labeled between about 2:00 and 6:15 a.m. on a Wednesday against a
  table that changed under them mid-shift, after a vendor update to BECS that nobody routed
  for Quality review. **None of the 40 shipped.** That lesson never ran it as a
  deviation/CAPA. **This course's module 2 does** (see the scenario plan).
- `courses/blood-center-operations/storage-distribution-and-hemovigilance` (module 4):
  606.170(a)/(b). Fatality notification "as soon as possible" plus a written report within
  7 days, and *who* files depends on donor reaction vs. transfusion reaction. It's already
  taught, so module 3 here applies it as an escalation trigger and doesn't re-teach it.
  Riverside General Hospital is the established fictional consignee.
- `courses/blood-center-operations/becs-in-the-pipeline`: the BECS definition (four
  critical functions: eligibility, release, labeling, disposition). The **Friday OS-patch
  scenario**: the QA rejected a routine OS security patch on the BECS application server
  pending a validation impact assessment. **The outcome was never locked. The assessment was
  never shown.** Module 4 here picks it up. Also from that lesson: 11.10(a) "validated
  state" (named, not taught), Quality as a *blocking* approver on BECS changes, vendor
  change notification as a contract issue, the "one incident, two tracks" framing, and FDA's
  BECS validation guidance (named only, version unverified).
- `courses/quality-system-essentials` (all seven modules). What "good" looks like for every
  document this course reviews:
  - m2: the five-stage deviation flow (discovery → containment → extent → disposition →
    reportability, then the CAPA yes/no). Deviation and CAPA run on **different clocks**.
    Disposition authority is "the medical director or a delegated quality officer" per
    Lakeshore's SOP (generic, no AABB number).
  - m3: 5 Whys, the "human error / retrain staff" trap, corrective vs. preventive, and
    **effectiveness checks** (measurable criterion, time window, data source, pre-agreed
    failure definition). Close / extend / reopen.
  - m4: change-control lifecycle. **The Director as a named co-approver, as owner of the
    system**, alongside Quality, "both required, neither sufficient alone." Implementation
    evidence vs. verification evidence.
  - m5: document vs. record, controlled copies, Good Documentation Practices at Director
    altitude.
  - m6: ICH Q9(R1) formality, subjectivity, risk acceptance as a signed and owned decision,
    FMEA, risk ranking and filtering.
  - m7: internal audit findings go through the same deviation machinery. **The superficial
    management-review packet** ("4 sites reviewed, 1 finding... CAPA log: 5 closed, 3
    open..."). Management review inputs and outputs. **QSE's plan explicitly hands Track 6
    "the review checklist and the coaching technique for how a Director walks a QA through
    fixing a superficial packet"**, and module 6 here owns that.
  - Through-line facts (Owen Pruitt, Brookfield, Riverside, Fairview, the tracked-
    distribution/acknowledgment mechanism, the still-unbuilt automated review-date
    trigger) are fixed. Reference them. Don't alter them.

**The Quality Analyst character:** every prior lesson calls her "your Quality Analyst" or
"your QA," with the pronoun "she," and never gives her a name. **Keep it that way** for
continuity across all 15 prior lessons. By the end of QSE she's competent and improving: she
opened Fairview correctly on her own and asked for a formal FMEA unprompted. So she isn't a
straw man. She's a capable analyst whose drafts have *consistent, coachable* gaps (see "The
QA's pattern" below).

## Modules

Build in order. One module per session: lesson `index.qmd` plus `resources.qmd` under
`courses/directing-the-quality-analyst/<slug>/`.

| # | Slug | Finish line | Depth now | Status |
|---|---|---|---|---|
| 1 | `qa-deliverables-and-ownership` | Name what your QA produces, who writes, approves, and is only informed of each piece, and what your own signature means on each. Apply one short "cold-read test" to any of it. | Full | Not started |
| 2 | `reviewing-deviations-and-capas` | Read a deviation and CAPA write-up the way an assessor will, find the gaps that make it indefensible (missing reasoning, evidence that doesn't prove the claim, scope that stops short, an effectiveness check that can't fail), sort them by severity, and send it back in a way that produces a better second draft | Full | Not started |
| 3 | `escalation-criteria` | Sort any event into "call me now," "tell me today," or "your call, tell me at our one-on-one." Know which events go past you and which your QA must be able to take around you. Write escalation criteria keyed to "reasonably suggesting," not "confirmed," so internal escalation beats the regulatory clock. | Full | Not started |
| 4 | `reviewing-validation-packages` | Review a BECS validation impact assessment and test summary for its decision trail (stated scope against the four critical functions, acceptance criteria set before execution, failures recorded rather than silently re-run, approvals before deployment), and say plainly which questions (was the testing *enough*?) you can't answer yet | Lighter (decision trail only) | Not started |
| 5 | `reviewing-vendor-risk-assessments` | Review a vendor risk assessment your QA wrote for whether its evidence covers the service Lakeshore actually buys and the risk that triggered the review, whether the tier follows from the function, and whether the risk decision has an owner with authority, without yet reading a SOC 2 report in technical depth | Lighter (decision trail only) | Not started |
| 6 | `coaching-and-reporting-upward` | Turn repeated review findings into coaching that changes how your QA works, widen her decision rights as her judgment proves out, and report quality, IT, and risk performance upward with measures that show trend, aging, and effectiveness, without turning any of them into a target that teaches under-reporting | Full | Not started |

Status values: Not started / Drafted / Published.

### Front-matter `order:` values (globally unique across `courses/**`, never reused)

Verified 2026-09-22 by grepping every `order:` in `courses/**/*.qmd`. The max in use was 26
(`quality-system-essentials/internal-audits-and-management-review/resources.qmd`) and there
were no duplicates. This course takes 27–39:

| File | `order:` |
|---|---|
| `index.qmd` (syllabus) | 27 |
| `qa-deliverables-and-ownership/index.qmd` | 28 |
| `qa-deliverables-and-ownership/resources.qmd` | 29 |
| `reviewing-deviations-and-capas/index.qmd` | 30 |
| `reviewing-deviations-and-capas/resources.qmd` | 31 |
| `escalation-criteria/index.qmd` | 32 |
| `escalation-criteria/resources.qmd` | 33 |
| `reviewing-validation-packages/index.qmd` | 34 |
| `reviewing-validation-packages/resources.qmd` | 35 |
| `reviewing-vendor-risk-assessments/index.qmd` | 36 |
| `reviewing-vendor-risk-assessments/resources.qmd` | 37 |
| `coaching-and-reporting-upward/index.qmd` | 38 |
| `coaching-and-reporting-upward/resources.qmd` | 39 |

The next course continues at **40**. `create-course`'s SKILL.md was updated to say so.

**If modules 4 or 5 are deepened later** (see "Deliberately deferred"), deepen them *in
place* at the same slug and `order:` values. Don't insert a new module between existing
ones, because there's no free integer between 35 and 36. If a later session decides a
separate "part 2" module is truly needed, give it the next unused counter value and accept
that it sorts after module 6, or renumber this course's files and log it here.

## Scoping decisions (read before drafting any module)

### Altitude

The Director doesn't redo the QA's work, and he isn't a second QA. He reviews it the way
he'd review a senior engineer's postmortem: for whether it would hold up in front of someone
hostile who reads it cold. Three kinds of review exist, and module 1 must name them so every
later module stays in its lane:

1. **Supervisory review (the Director's).** Is this defensible, complete, internally
   consistent, and consistent with facts IT knows? Does it show its reasoning? Is it her
   best work?
2. **Quality approval (Quality leadership / medical director, per Lakeshore's SOP).** Is the
   *quality decision* right: disposition, reportability, release?
3. **Independent assessment (internal audit, AABB, FDA).** Does practice match the paper?

The Director owns #1 for everything his QA writes. He may *also* be a named approver as
**system owner** on IT/BECS changes, validation releases, and IT vendor decisions (QSE m4
precedent). He does **not** own #2. A recurring teaching point: **your QA reports to you, but
her quality decisions don't.** He coaches the quality of her *write-ups*, never the outcome
of her *quality calls*. That matters more here than usual, because the reporting line runs
through IT. The QA can block IT's changes (the `becs-in-the-pipeline` patch), so her
independence must be protected on purpose. **Do not claim a regulatory requirement for QA
independence from IT line management.** The candidate hook (21 CFR 211.22, quality control
unit, via 210.2) is flagged as unverified in QSE's plan. Frame independence as a
separation-of-duties principle the learner already knows from SOX, plus the fact that
Lakeshore's own SOPs name who holds disposition and approval authority.

**The Director's unique review contribution:** he can verify the *IT evidence* in her
write-ups better than anyone in the building: vendor push timestamps, BECS change logs,
print-job and table-version history, deployment dates versus approval dates, and
remote-access logs. Every review module should include at least one gap that only the
Director's IT knowledge catches. This is what makes his review add value instead of
duplicating Quality's.

### Seven listed topics, six modules: the merge

`plans/curriculum.md` lists seven topics but budgets six modules (tracker "0 / 6," Phase 3
"6 modules"). Merge decision:

- **Delegation's static half** (who owns what, which decisions she makes alone, which need
  your concurrence, which you keep) goes into **module 1** with "what a QA's deliverables
  look like and who owns what." It's the same topic: a decision-rights map *is* a delegation
  map.
- **Coaching, plus delegation's dynamic half** (widening her decision rights as judgment is
  demonstrated) goes into **module 6** with KPIs and upward reporting. This pairing earns
  its place. The strongest single teaching point connecting them is that **the same numbers
  can coach or corrupt**. A quality-system measure (deviation count) turned into an
  individual performance target teaches under-reporting. Separating "measures of the
  system" from "measures of her work" is both a coaching skill and a KPI-design skill.
  Neither coaching nor KPIs is in the course finish line, so they're the right pair to
  share a module. That keeps review and escalation, which *are* the finish line, at full
  standalone depth.

If a future session concludes module 6 is overloaded, the clean split is 6a coaching and
delegation, 6b KPIs and reporting upward. That would require updating `plans/curriculum.md`'s
module count and the order table above.

### Depth and altitude: the judgment call on modules 4 and 5

**The problem.** The finish line names validation packages and vendor risk assessments. The
courses that teach how to judge them technically (`csv-and-becs`, `data-integrity-and-records`,
`vendor-and-third-party-risk-management`, `grc-frameworks-and-risk-management`) don't exist.
What does exist: `becs-in-the-pipeline` (why BECS changes need a validation impact
assessment and Quality's blocking sign-off, and why vendor change notification matters),
QSE m3 (criteria set before results), QSE m4 (change-control sequence, co-approval,
implementation vs. verification), QSE m5 (Good Documentation Practices), QSE m6 (risk
acceptance as an owned decision), the AABB QSE structural note (QSE 3 Equipment includes IT
systems and qualification, QSE 4 Suppliers, QSE 5 Process Control includes validation), and
21 CFR 11.10 in `sources/`.

**Options weighed.**
(a) Skip or placeholder modules 4 and 5 until the technical courses exist. Rejected. The
QA is writing these documents now, and the Director is signing them now.
(b) Teach them at full technical depth anyway. Rejected. It would mean teaching GAMP 5,
IQ/OQ/PQ, traceability matrices, and SOC 2 structure from scratch inside a review module,
with no local sources, pre-empting two courses and violating CLAUDE.md rule 5's spirit
(don't fake certainty).
(c) **Chosen: teach the decision-trail review at full depth, and name the technical-adequacy
review as explicitly out of scope, in the lesson itself.**

**Why (c) is real value, not a cop-out.** A document can fail an assessor's read in two
ways. It can be *technically wrong* (the wrong tests, a misread SOC 2 exception), or it can
be *indefensible*: the conclusion isn't supported by evidence on the page, criteria were set
after results, a failure was quietly re-run, an approval is dated after go-live, a "low risk"
tier has no rationale, or nobody with authority accepted the residual risk. The second kind
is detectable with skills this curriculum has already taught: the cold-read test,
effectiveness-check logic, change-control sequence, GDP, risk acceptance, and tier-labeling.
It's also the kind a Director is best placed to catch, because several of these gaps live in
IT evidence he owns (deployment timestamps, change logs, remote-access records). The
foundation lesson already said the most common gap investigators find in deviation files
isn't the wrong decision but a decision nobody can show the reasoning for. That same shape
carries over to validation and vendor documents.

**What "lighter" means concretely for modules 4 and 5:**
- Same lesson spine and same 2,000–4,000-word target. Lighter in *technical scope*, not in
  effort or rigor.
- Each includes a short, plain section (a few sentences, placed in or right after "The rule
  in plain English") that says: "This is the half of the review you can do today. Whether
  the testing was *enough* [m4] / what the SOC 2 report's details mean [m5] is a different
  review, taught in `<course>`. Until then, when that question matters, here's who answers it
  and what you ask them." That last clause is required. The Director needs a working
  answer now: route technical adequacy to a qualified reviewer (Quality's validation lead,
  the vendor's validation documentation, or the security team for SOC 2), and make sure
  *that* review is documented.
- Each includes a planted **non-gap**: something the learner might flag but can't
  legitimately judge yet (m4: whether 12 targeted tests were enough instead of full
  revalidation. m5: whether a remote questionnaire was an adequate qualification method
  versus an on-site audit). The lesson turns it into the boundary lesson: "you can't judge
  whether 12 was enough. You *can* judge whether the reason 12 was enough is written down,
  and who signed it."
- Neither teaches or asserts: GAMP 5 categories, IQ/OQ/PQ structure, URS/FRS, V-model,
  traceability-matrix construction, risk-based test design, SOC 2 Type I vs. Type II, Trust
  Services Criteria, complementary user entity controls, bridge letters, subservice-org
  carve-outs, or ISO 27001 SoA reading. Naming a term once as a forward pointer is fine
  (the `becs-in-the-pipeline` precedent). Explaining it isn't.

### Module order, and why it differs from curriculum.md's listing

Curriculum listing order: deliverables → dev/CAPA → validation → vendor → escalation →
coaching → KPIs. **Chosen order: 1 deliverables and ownership → 2 dev/CAPA review → 3
escalation → 4 validation (lighter) → 5 vendor (lighter) → 6 coaching and reporting upward.**

- The finish line's two load-bearing skills (review, escalation) come first and at full
  depth. If the learner stops after module 3, he has the core of the finish line.
- Escalation sits right after dev/CAPA review because module 2's review naturally raises the
  question "does this one go over my head?" The contrast between the two modules is
  sharpest when they're adjacent (see the boundary section).
- Validation and vendor come after escalation so each can end with a short "what in this
  document type escalates" pointing back to module 3, instead of module 3 pointing forward
  to material not yet taught.
- Coaching and reporting stays last, not moved ahead of the lighter modules, because it's a
  synthesis. It coaches the *pattern* in the QA's work across modules 2, 4, and 5, and it
  reports on all four document types. Ending on the two lightest modules would leave the
  course closing weak.

### The shared review instrument: the "cold-read test"

Module 1 introduces **one reusable review instrument**, and modules 2, 4, and 5 apply it by
name, so the learner builds one habit rather than three checklists. Call it the
**cold-read test**: *would this document survive an inspector reading it cold, a year from
now, with its author unavailable?* Six questions:

1. **Conclusion.** What does this document decide or conclude? Is there exactly one, stated
   plainly?
2. **Evidence.** What objective evidence supports it? Is it attached or retrievable, and does
   it cover the *whole* claim (scope, time window, every site or unit or function the claim
   covers)?
3. **Reasoning.** Is the path from evidence to conclusion on the page, or only the answer?
   Would a stranger reach the same conclusion from what's written?
4. **Criteria first.** Was the bar (acceptance criterion, effectiveness criterion, tier
   threshold) set *before* the result was known?
5. **Decision trail.** Who decided, with what authority, and in what order? Do the dates
   show assessment before approval before implementation?
6. **Loose ends.** Is every open item owned and dated? Is anything marked "closed" that still
   depends on something "TBD"?

Plus one standing check drawn from the foundation: **tier labels.** Does she call a
standard a regulation, or guidance a requirement?

Drafters: use these six names consistently (Conclusion, Evidence, Reasoning, Criteria first,
Decision trail, Loose ends). Module 1 may tighten the wording, and if it does, log the final
wording here and all later modules use it. Present this as the course's own synthesis of what
earlier lessons taught (especially QSE m2's "what an inspector looks for" sections and QSE
m3's effectiveness-check criteria), **not** as an AABB or FDA checklist. Label it industry
practice or this course's framing. Don't attach a citation to it.

Also introduced in module 1 and used in 2, 4, and 5: **gap triage.** Every gap is one of
*must fix before I sign* (the document is indefensible without it), *fix going forward* (a
real weakness that doesn't undermine this conclusion), or *fine as is* (looks odd, isn't
wrong). The third category matters. A Director who red-pens everything trains a QA to write
defensively, not clearly.

### The teaching device: a full flawed document to hunt through

QSE already used a "QA's flawed first draft" twice: the one-line "human error / retrain"
CAPA in m3, and the email-it-and-done change in m4. Each time, the flaw was single and
obvious, and the story corrected it for the learner. **This course escalates the device:**

- Modules 2, 4, and 5 each present a **complete, realistic QA document** as a block quote,
  about 250–450 words, formatted like a real form with headings, fields, dates, and
  signatures. It should look competent at first glance.
- It contains **4–6 planted gaps of mixed severity**, plus **at least one planted non-gap**
  (something that looks wrong but is correct or not reviewable yet). At least one gap
  should be catchable only with the Director's IT knowledge.
- **Retrieval before reveal** (TEACHING.md: "retrieval beats re-reading"). Right after the
  document, a one-line prompt asks the learner to find the gaps before reading on, and the
  reveal is organized by the cold-read test's six questions, not by the document's order.
  Keep the prompt to one line, not a worksheet.
- The "Check your understanding" questions then test *transfer*: a gap in a different
  document of the same type, or a triage call ("must fix, fix going forward, or fine?").
- The reveal also models **how to send it back**: questions rather than rewrites ("What
  record shows none shipped?" not "Add the distribution query"). Module 6 builds this into
  full coaching technique. Modules 2, 4, and 5 just show it.

### The QA's pattern (plant in modules 2, 4, and 5, and name it in module 6)

For module 6's coaching to work, the QA's gaps across modules 2, 4, and 5 must share a
recognizable pattern, so the learner coaches the *pattern*, not twenty instances. The
pattern:

1. **Right conclusion, reasoning off the page.** Her calls are usually correct, but the
   write-up gives the answer without the path. (m2: "Not reportable," correct, with no
   reasoning and no proof nothing shipped.)
2. **Stops at the first credible source.** She accepts evidence from an authoritative-looking
   source without checking whether it covers the claim: a supervisor's say-so (m2), the
   vendor's release notes (m4), a vendor questionnaire "yes" and a SOC 2 report's existence
   (m5).

Each of modules 2, 4, and 5 must contain at least one instance of each. Module 6 opens with
the Director noticing the pattern across the three reviews. Don't make her careless. Her
formatting, timeliness, and process knowledge are good. The gaps are judgment-and-writing
gaps, which are the coachable kind.

### Scenario plan

Modules 2 and 5 share a thread. Module 4 picks up `becs-in-the-pipeline`'s open thread.
Module 6 picks up QSE m7's open thread. All of it runs at Lakeshore Blood Center.

- **Module 1: "What does your signature mean?"** Recommended opening: a single Monday where
  the QA routes the Director a stack of items, including a deviation packet for "approval,"
  the patch validation impact assessment for "approval," a vendor reassessment for
  "sign-off," a question about whether she should call him at night for X, and next
  quarter's management-review draft. The Director realizes his signature has meant
  different things on different forms, and on at least one (the deviation disposition) it
  sits in a box Lakeshore's SOP reserves for Quality. The stack previews every later
  module. An alternative is an AABB assessor asking "what did your signature attest to
  here?" Drafter's choice. Don't invent Lakeshore SOP numbers.
- **Module 2: the ICCBBA product-code-table event, as the QA's deviation and CAPA packet.**
  Never run as a deviation before (see Prerequisites). Preserve every fact from
  `component-processing-and-labeling`: about 40 units, labeled roughly 2:00–6:15 a.m. on a
  Wednesday, vendor BECS update carrying the quarterly ICCBBA table, no Quality review of
  the push, none shipped. **Module 2's drafter locks the remaining facts** (who dispositioned
  the units, relabel vs. destroy, the exact push timestamp from BECS logs, the CAPA's
  actions and effectiveness check) and records them in the progress log for module 5.
  Candidate planted gaps (pick 4–6, plus the non-gap):
  - *Evidence:* "No units shipped" rests on the overnight supervisor's statement, not a
    BECS distribution/inventory query against the 40 DINs (the artifact
    `component-processing-and-labeling` said an inspector would ask for).
  - *Evidence / scope:* the window is bounded by when the supervisor noticed (6:15), not by
    the table-version history (when the update was applied, when printing was corrected).
    There's no statement on units labeled after 6:15, or on other print stations or sites.
    **This is the Director-only catch.** He knows where the push and print logs live.
  - *Reasoning:* reportability says "Not reportable" with no reasoning. The conclusion is
    probably right (not distributed, so 606.171(b)(3) isn't met), but the path is missing,
    and it depends on the unproven "none shipped."
  - *Reasoning (root cause):* "Vendor pushed an update without notifying Lakeshore."
    Vendor-blame is the external twin of "human error." The systemic cause is that
    Lakeshore's change model treats vendor content updates to BECS as non-changes.
    `becs-in-the-pipeline` already named it a "vendor-change-governance failure."
  - *Criteria first:* the effectiveness check is "Vendor has confirmed it will notify
    Lakeshore of future table updates." That's a promise and implementation evidence. It
    can't fail, and it has no window or data source.
  - *Decision trail:* the disposition (relabel and release) is signed by the processing
    supervisor, not the disposition authority Lakeshore's SOP names, and/or dated before the
    disposition was approved.
  - *Loose ends:* "vendor contract amendment: TBD" with no owner or date, on a CAPA marked
    closed.
  - **Planted non-gap:** the deviation record is closed while the CAPA is still open. That's
    correct (QSE m2's "different clocks"). A learner who flags it gets the retrieval payoff.
  - **Handoff to module 5:** one of this CAPA's preventive actions should be "reassess the
    BECS vendor, focused on change notification," which module 5 reviews.
- **Module 3: one night, several calls.** Recommended: an escalation drill. Four or five
  events reach the QA (or the on-call supervisor) over one evening, and the learner sorts
  each before the lesson does. Candidates (pick 4–5 with a spread of answers):
  - A hospital reports a transfusion recipient death possibly involving a Lakeshore unit.
    "Call me now," even though, per `storage-distribution-and-hemovigilance`, a transfusion
    fatality's 606.170(b) filing is the compatibility-testing facility's, not Lakeshore's.
    That lesson's nuance is that "not our filing" still means escalate, because Lakeshore's
    product is implicated.
  - The BECS vendor notifies Lakeshore of a security incident on its remote-support
    platform. Suspected breach: "now," and past the Director to the privacy/security owner.
  - A late donor callback with the unit held in quarantine the whole time (the foundation's
    Deviation A). "Your call, one-on-one."
  - A post-deployment verification failure on a BECS change touching labeling. "Now" or
    "today," depending on whether a critical function is affected. A validated-state
    question.
  - A site lead asks the QA to "hold off writing up" a temperature excursion until after
    the weekend. Pressure on quality independence: escalate, **and the QA needs a path that
    doesn't route through the Director** if the pressure came from IT.
  Don't reuse the Owen Pruitt event as a drill item. It's closed history. It *can* be named
  as a past example of escalation done right: QSE m2's 7:50 a.m. doorway conversation *was*
  an escalation, before any write-up existed.
- **Module 4: the Friday OS patch's validation impact assessment, finally written.** Pick up
  `becs-in-the-pipeline` directly. The QA who rejected the patch now drafts the assessment
  plus a short targeted-test summary, and routes it to Quality and to the Director (as system
  owner, QSE m4 precedent). Candidate planted gaps:
  - *Evidence:* the "no impact to the validated state" conclusion leans on the vendor's
    release notes or compatibility statement.
  - *Evidence / scope:* no explicit walk through the four critical functions (eligibility,
    release, labeling, disposition) or the interfaces (instrument interfaces, label
    printers).
  - *Criteria first:* the protocol's approval date is after the execution date, or the
    expected results were blank until after the run.
  - *Reasoning / decision trail:* a step failed on first run (for example, a label-printer
    timeout), was re-run, and passed, with no recorded discrepancy or explanation. Label
    this as industry practice. **Do not** cite 606.100(c) or 606.160(a)(1) for it (see
    Sourcing notes).
  - *Decision trail:* the patch's production deployment timestamp (the Director-only catch,
    from the change record or server logs) is earlier than Quality's approval signature.
  - *Loose ends:* "BECS-to-hospital interface regression to follow" with no owner or date,
    on an approved release.
  - **Planted non-gap / boundary:** the assessment chose a small targeted test set rather
    than full revalidation. The Director can't judge sufficiency yet. He can check that the
    rationale is written and signed by someone qualified to make it.
- **Module 5: the BECS vendor reassessment, the ICCBBA CAPA's preventive action.** The QA's
  vendor risk assessment of the BECS vendor, triggered by module 2's CAPA. Candidate planted
  gaps:
  - *Evidence:* the triggering risk (change notification) is answered by a vendor
    questionnaire "Yes, we notify customers of changes." That self-attestation is
    **contradicted by Lakeshore's own deviation record** from module 2. The cross-document
    consistency check is the headline catch.
  - *Evidence / scope:* "SOC 2 report reviewed, clean opinion." There's no statement of which
    vendor services or systems the report covers, what period it covers relative to today,
    or whether anything in it addresses customer change notification. Keep this generic ("does
    this evidence cover the service we buy, the period we care about, and the risk that
    triggered the review?"). **No SOC 2 mechanics.**
  - *Reasoning:* the tier ("Low: established vendor, large installed base") follows
    reputation, not function. BECS performs critical functions, so the tier should follow
    from what the vendor's product does at Lakeshore.
  - *Decision trail:* one signature for both the quality lens (supplier qualification) and
    the security lens (remote-support access), when Lakeshore's security owner should own
    the second. Who owns what, from module 1.
  - *Decision trail:* residual risk "accepted" with no named owner who has authority to
    accept it (QSE m6's "risk acceptance as an owned decision").
  - *Loose ends:* "Recommend contract amendment for change notification" with no owner,
    date, or link to the CAPA that required it.
  - **Planted non-gap / boundary:** no on-site audit was done. Whether an audit was needed is
    a supplier-qualification method choice this curriculum hasn't taught. The reviewable gap
    would only be an undocumented choice. Don't assert what AABB requires about supplier
    audits.
  Alternative vendor if the drafter has a strong teaching reason: a SaaS document-control or
  eQMS vendor Lakeshore is evaluating to build the still-unbuilt automated review-date
  trigger (QSE m3/m6/m7). Log the choice. The BECS vendor is preferred because it closes
  module 2's CAPA loop and reuses the ICCBBA story.
- **Module 6: the management-review packet, rebuilt.** Pick up QSE m7's superficial packet
  directly. QSE's plan hands Track 6 "the coaching technique for how a Director walks a QA
  through fixing a superficial packet." The Director has now reviewed three of her documents
  (m2, m4, m5) and sees the pattern. The scenario covers (a) the coaching conversation about
  the *pattern*, (b) rebuilding the packet's inputs with trend, aging, and
  effectiveness-pass rate, and (c) the Director's own one-page quarterly report upward to
  the CIO derived from it, with one decision asked. That one decision could be the funding
  line for the automated review-date trigger QSE m7 already named as a management-review
  output.

### Where each module stops (guard these boundaries)

**Module 1: `qa-deliverables-and-ownership` (the map and the instrument).**
- Owns: the QA's deliverable map at a blood center (deviation and CAPA records, change-control
  quality reviews and impact assessments, validation impact assessments and validation
  review/approval, document-control work, supplier/vendor assessments, audit participation,
  management-review inputs, inspection support). Label it "typical, varies by
  organization." Also owns who writes, approves, and is informed for each; the three kinds
  of review (supervisory, quality approval, independent); what the Director's signature
  attests to in each role (supervisor, system-owner co-approver, informed); delegation's
  static half (her decisions alone, his concurrence, his retained decisions); protecting
  quality independence inside an IT reporting line; the cold-read test; and gap triage.
- Short worked example: apply the cold-read test once, quickly, to something small and
  already familiar (for example, a one-paragraph closure note like the foundation's
  "Closed: no patient impact"). **Don't** do a full document review. That's module 2's job.
- Does **not** own: any full document review (m2, m4, m5), escalation criteria (m3; module 1
  may say "what reaches you and how fast is module 3" in one line), coaching technique or
  widening delegation (m6), or KPI design (m6).
- AABB hooks (paraphrase from `sources/aabb/qse-framework.md` only, no numbers): QSE 1
  Organization (executive responsibility and authority, who approves exceptions) and QSE 2
  Resources (job qualifications, competence, training).

**Module 2: `reviewing-deviations-and-capas` (the core review skill, on a document).**
- Owns: reviewing a deviation and CAPA packet with the cold-read test. Read order (start with
  the conclusion and reportability call, then evidence and extent, then root cause, then the
  effectiveness check, rather than front to back). Gap triage. The Director-only IT-evidence
  check. Sending it back with questions. "Polished but hollow": a well-formatted write-up can
  be less defensible than a terse one. Consistency across documents (does the CAPA match the
  deviation's own facts?). Also what his review signature does and doesn't mean on this
  packet, applied from module 1.
- **Boundary with module 3 (important).** Module 2 is about a **document**: asynchronous,
  after the fact, judged on defensibility. Module 3 is about an **event**: in real time, often
  before any document exists, judged on routing and speed. Module 2's question is "would this
  write-up survive an assessor?" Module 3's is "does this need to reach me, or someone above
  me, and how fast?" The two touch at one point. Module 2 may note in **one or two sentences**
  that a review can uncover an escalation trigger the QA missed (for example, the "none
  shipped" claim is unproven, and if units did ship, the reportability picture changes) and
  point forward to module 3. It must not teach escalation tiers, paths, or criteria.
  Conversely, module 3 doesn't teach how to review the write-up that follows an escalation.
- Does **not** re-teach: the five-stage deviation flow, 5 Whys, corrective vs. preventive,
  effectiveness-check anatomy, correction vs. corrective action, or 606.171's test. All are
  QSE and foundation content. **Apply them as known, with one-line pointers back.** The
  reveal should read like "the effectiveness check fails QSE m3's 'could it fail?' test,"
  not a re-explanation of what an effectiveness check is. Also not here: BPDR filing
  mechanics (`fda-and-aabb-in-practice`), and vendor change governance as vendor management
  (m5 and the Track 4 vendor course).

**Module 3: `escalation-criteria` (routing events, and the clocks).**
- Owns: escalation criteria as a **written, pre-agreed** artifact, which is the same
  criteria-first logic as an effectiveness check. Tiers (now / today / one-on-one / periodic
  report). Trigger categories: possible patient harm or fatality; distributed product that
  may affect safety; consignee notification or retrieval; a regulatory clock started;
  suspected breach of donor or patient data; a BECS critical-function failure or
  validated-state break; a regulator or assessor on site or regulatory correspondence; and
  pressure on a quality decision. Also owns **functional vs. hierarchical escalation** and
  **who it goes past the Director to** (medical director for product, donor, or patient;
  Quality leadership; privacy/security or compliance for data; CIO for major system or
  business risk; legal), with the **independence bypass** as a required path. Other points
  it owns:
  - Thresholds must key on "reasonably suggesting," not "confirmed," because 606.171(c)'s
    clock starts at information "reasonably suggesting that a reportable event has
    occurred" (quote from `sources/cfr/606.171.md`). The curriculum's own example says
    "confirmed breach." The lesson should argue *suspected* is the right escalation
    threshold, and why.
  - Internal windows must be tighter than external clocks.
  - Escalating informs. It doesn't transfer the decision. Disposition and reportability stay
    with whoever the SOP names.
  - Under- vs. over-escalation, since alert fatigue is real.
  - The Director's own upward escalation criteria to the CIO.
- Does **not** own: HIPAA breach notification rules or clocks
  (`healthcare-security-and-privacy`, where breach is only a trigger category here, with no
  HIPAA citation). Not recall classification or mechanics, BPDR filing, or handling an
  inspector on site (`fda-and-aabb-in-practice`). Not incident-command mechanics (the
  learner already owns them). Not lookback procedure depth: 606.100(b)(19)'s
  consignee/recipient notification requirement may be named as one trigger, quoted only
  from `sources/cfr/606.100.md`, but 610.46/610.47 aren't in `sources/` and aren't taught.
- Validation- and vendor-specific triggers are named here generically ("a BECS change that
  breaks a critical function," "a vendor security notice"). Modules 4 and 5 each end with a
  short "what in this document type escalates" that points back here.

**Module 4: `reviewing-validation-packages` (lighter: the decision trail).**
- Owns: applying the cold-read test to a BECS validation impact assessment and short test
  summary; the four critical functions as the scope checklist (from `becs-in-the-pipeline`);
  acceptance criteria set before execution; failed steps recorded and explained, never
  silently re-run; approval before deployment (checked against IT's own deployment record);
  whose approval is blocking (Quality) and what the Director's system-owner signature
  attests to; a vendor's statement as an *input* to Lakeshore's assessment, never a
  substitute; and "no impact" as a conclusion that still needs reasoning. It also owns
  **the explicit boundary statement** (see "Depth and altitude") and who reviews technical
  adequacy until `csv-and-becs` exists.
- Regulatory spine: 11.10's introductory sentence ("Persons who use closed systems... shall
  employ procedures and controls") puts the obligation on the *user*, Lakeshore, not the
  vendor. It's in `sources/cfr/11.10.md`, never quoted before, and it's a strong "yes, cite
  the rule" answer. 11.10(a) is reused and already quoted in `becs-in-the-pipeline`.
  11.10(k)(2) (revision and change control procedures maintaining an audit trail that
  "documents time-sequenced development and modification of systems documentation") is a
  *candidate* hook for "sequence matters." Use it only if the drafter reads it as fitting
  on the text, in one row, as a concept, noting that Part 11 depth belongs to
  `data-integrity-and-records` and `csv-and-becs`.
- AABB hooks (paraphrase only): QSE 3 Equipment (qualification, explicitly including IT
  systems) and QSE 5 Process Control (validation).
- Does **not** own: anything in the "Deliberately deferred" list for module 4.

**Module 5: `reviewing-vendor-risk-assessments` (lighter: the decision trail).**
- Owns: applying the cold-read test to a vendor risk assessment. Does the evidence cover what
  Lakeshore buys and the risk that triggered the review? Does the tier follow from the
  function? Two lenses, two owners (supplier/quality qualification vs. security/privacy), and
  whether each was applied by someone qualified. Cross-document consistency (the assessment
  vs. Lakeshore's own deviation history with this vendor). Residual risk accepted by a named
  owner with authority. Follow-ups tied to the CAPA that required them. Self-attestation as
  the weakest evidence type. Evidence currency (is the period covered still relevant?).
  Contract terms as evidence of an obligation (`becs-in-the-pipeline`: "put vendor change
  notification in the contract, not in good faith"). It also owns **the explicit boundary
  statement** and who reads SOC 2 detail until the vendor course exists (Lakeshore's security
  team or whoever owns third-party security review).
- Regulatory hooks: there's no Part 606 "supplier qualification" clause in `sources/`. Keep
  the tiering honest:
  - AABB QSE 4 (Suppliers and Customers; qualifying and managing suppliers), paraphrased from
    `sources/aabb/qse-framework.md`.
  - 11.10's introductory sentence (the user's obligation), reused from m4.
  - **606.171(a), used only as a contrast.** For a party that performs a manufacturing,
    holding, or distribution step under Lakeshore's control, the regulation itself reaches
    them ("that step is performed under your control," plus a required procedure for
    receiving their deviation information). **Do not claim 606.171(a) covers the BECS
    vendor.** A software supplier isn't described there. Use it to show which vendors the CFR
    reaches directly and which reach Lakeshore through its own obligations and AABB's
    supplier QSE. If the drafter can't make that contrast cleanly, drop it.
- Does **not** own: anything in the "Deliberately deferred" list for module 5.

**Module 6: `coaching-and-reporting-upward` (synthesis: the person and the system).**
- Owns:
  - **Coaching the pattern.** Name the QA's two-part pattern from m2, m4, and m5 once, rather
    than re-flagging instances.
  - **Questions, not rewrites.** A Director who rewrites trains dependence.
  - **Her self-check.** The cold-read test becomes her pre-submission check, so the gaps get
    caught before they reach him.
  - **The delegation ladder.** "I review everything" → "I sample" → "you decide, I'm
    informed," widened on evidence of judgment and narrowed after a miss without drama.
  - **Documented competence.** AABB QSE 2 Resources (competence, training), paraphrased;
    her growth shows up in competence records, not just in his impressions.
  - **Coach the write-up, never the quality outcome.** This is module 1's independence point,
    applied under performance pressure.
  - **Rebuilding QSE m7's packet** with trend, aging, and effectiveness-pass rate, which QSE
    m7 said to ask for. This module teaches coaching her to produce it.
  - **System measures vs. her performance measures, kept separate.** Deviation count is never
    her target, because it teaches under-reporting. Candidate system KPIs: deviation cycle
    time, CAPA aging and on-time rate, effectiveness-check first-pass rate, repeat-root-cause
    rate, change verifications on time, validation impact assessments completed before
    deployment, vendor reassessments current. Her measures: rework rate on submissions,
    on-time delivery, and the trend in review findings per document.
  - **Leading vs. lagging.**
  - **The Director's one-page quarterly report to the CIO** that merges quality, IT, and risk,
    with one decision asked.
- Does **not** own: the exec quality council presentation, the ITIL-to-QSE metrics
  crosswalk, and translating metrics for every audience (all Track 5,
  `itsm-for-regulated-blood-services`). Not audit-program metrics
  (`fda-and-aabb-in-practice`), not management review's required inputs and outputs (QSE m7,
  so apply them and don't re-teach them), and not HR/performance-management process
  mechanics (out of curriculum scope). Keep coaching at the level of how you review and how
  you widen trust.
- Label KPI advice as industry practice or management commentary throughout. No KPI is an
  FDA or AABB requirement (see "Not a regulatory requirement" hooks).

### ITSM/ITIL bridge per module (spine step 2 needs one)

Bridge first, then name where the quality version demands *more*. The Director already
reviews direct reports' work in IT. Start there every time.

1. **`qa-deliverables-and-ownership`:** RACI and CAB approver roles ("what does my approval
   on this RFC actually attest to?"). Separation of duties from SOX. The QA's independence
   is an SoD control that happens to report through the person it constrains. Supervisory
   review vs. peer review vs. audit map to code review vs. CAB vs. internal audit. Where it
   demands more: a signature on a GxP record is an accountable, attributable act that an
   inspector will read as a claim. "I glanced at it" isn't a defense.
2. **`reviewing-deviations-and-capas`:** reviewing a direct report's postmortem or PIR. He
   already checks for contributing factors, action items with owners, and whether action
   items actually closed. Where it demands more: a reportability determination with a legal
   clock, product disposition authority, an effectiveness check that could fail, and a reader
   (the assessor) who can cite you for missing reasoning even when the conclusion was right.
   Vendor-blame root cause is the postmortem's "third-party outage, no action."
3. **`escalation-criteria`:** ITIL major-incident criteria, the priority matrix,
   functional vs. hierarchical escalation, and on-call runbooks with escalation paths
   published *before* the incident. Where it demands more: external regulatory clocks
   start at "reasonably suggesting," not at confirmation. Some escalations must bypass the
   line manager (independence). And the decision owner for a product is Quality or the
   medical director, not the incident commander.
4. **`reviewing-validation-packages`:** reviewing a go-live readiness pack (UAT sign-off,
   test evidence, the go/no-go record) before CAB. Where it demands more: acceptance
   criteria fixed before testing, failures documented rather than re-run until green, a
   blocking Quality approval, "validated state" as a standing obligation, and the
   obligation sitting with the user, not the vendor.
5. **`reviewing-vendor-risk-assessments`:** IT vendor due diligence and third-party security
   questionnaires, which he has certainly run. Where it demands more: a second
   (GxP/supplier-qualification) lens beside security; the vendor's changes flow directly
   into your validated state; and the assessment has to answer the specific failure that
   triggered it, with your own incident history as evidence.
6. **`coaching-and-reporting-upward`:** growing an engineer through code review by asking,
   not rewriting. **Standard change pre-approval earned by track record ↔ widening the QA's
   decision rights**, the strongest bridge in the module. **"Watermelon" SLA metrics** (green
   outside, red inside) ↔ quality KPIs that look healthy while hiding aging and failed
   effectiveness checks. CSI (continual service improvement) CSFs and KPIs ↔ system measures
   vs. individual measures.

### "This is NOT a regulatory requirement" question hooks

Spread across modules. Several modules should also have a "yes, cite the rule" question,
so not every answer resolves to "no":

- m1: "FDA requires the Director to approve every deviation record." False. Who approves is
  set by Lakeshore's SOPs. What the regulation requires is the investigation and its record
  (606.100(c), 606.160(b)(7)(iii)). Nice contrast: 606.100(c)'s *first* sentence does
  require record review before release, but that's product-record review, not the
  Director's supervisory review.
- m3: "FDA requires internal escalation to the Director within 24 hours." False. FDA sets
  external clocks (606.171(c)'s 45 days; 606.170(b)'s "as soon as possible" and 7 days).
  Internal windows are Lakeshore policy, set tighter so the external clocks can be met.
- m4 (**"yes, cite the rule"**): "The vendor validated the patch, so we're covered." No.
  11.10's introductory sentence puts the obligation on "persons who use" the system.
- m5: "FDA requires a SOC 2 report from every BECS vendor." False. SOC 2 is an AICPA
  attestation framework obtained by contract or practice, and no FDA regulation names it.
  (Say only that. Don't describe SOC 2's structure.)
- m6: "FDA requires blood centers to track specific quality KPIs." False. AABB's
  Organization QSE requires management review with defined inputs (paraphrase, no number).
  Which measures, and their formulas, are Lakeshore's choice.

### Deliberately deferred: revisit when the technical courses exist

Stated explicitly so a future session knows these were **deferred on purpose**, not missed.
When the named course is published, a session should reopen the module listed, deepen it
in place (same slug, same `order:`), and log it here and in `plans/curriculum.md`.

| Deferred topic | Module to deepen | Waits for |
|---|---|---|
| Judging whether validation testing was *sufficient*: risk-based test scope, regression strategy for patches, when targeted testing is enough vs. full revalidation | m4 | `csv-and-becs` (IQ/OQ/PQ, validation lifecycle and patch management modules) |
| GAMP 5 categories, the V-model, IQ/OQ/PQ structure, URS/FRS, and reviewing a traceability matrix | m4 | `csv-and-becs` |
| Leveraging vendor or supplier testing and documentation in a validation package | m4, m5 | `csv-and-becs` |
| FDA's BECS validation guidance content (title named in `becs-in-the-pipeline`, version unverified), 510(k) implications for Lakeshore's validation | m4 | `csv-and-becs` |
| BECS-to-LIS/HIS interface validation | m4 | `csv-and-becs` |
| Reviewing executed test evidence for ALCOA+, audit trails, and e-signature manifestation on validation records | m4 | `data-integrity-and-records` |
| Periodic review of a validated system | m4 | `csv-and-becs` |
| SOC 2 Type I vs. Type II, Trust Services Criteria, complementary user entity controls, bridge letters, subservice-organization carve-outs, reading the exceptions section in depth | m5 | `vendor-and-third-party-risk-management` |
| ISO 27001 certificate and Statement of Applicability | m5 | `vendor-and-third-party-risk-management` |
| Vendor risk-tiering methodology; supplier qualification methods (audit vs. questionnaire vs. certification) | m5 | `vendor-and-third-party-risk-management` |
| BAAs and HIPAA vendor terms; vendor change notification as a vendor-management process | m5 | `vendor-and-third-party-risk-management` |
| Risk acceptance authority and remediation tracking in RMF/POA&M terms | m5, m6 | `grc-frameworks-and-risk-management` |
| Breach notification clocks and HIPAA/FDA dual reporting | m3 | `healthcare-security-and-privacy` |
| Escalation on recalls, 483 responses, and an inspector on site | m3 | `fda-and-aabb-in-practice` |
| Presenting to the exec quality council; the ITIL-to-QSE metrics crosswalk | m6 | `itsm-for-regulated-blood-services` |

Modules 1, 2, 3, and 6 have no meaningful deferrals beyond the pointers above. They're full
depth now.

**Revisit mechanics note for the orchestrator:** this file can't update
`plans/curriculum.md`. Consider adding a line there, when `csv-and-becs` and
`vendor-and-third-party-risk-management` are each completed, to "revisit
`directing-the-quality-analyst` m4 / m5," so "Continue" doesn't skip it.

### What belongs to other courses (don't teach it here)

| Topic | Owner |
|---|---|
| What a good deviation, CAPA, change, document-control record, risk assessment, and management-review packet contain | `quality-system-essentials` (apply, don't re-teach) |
| Everything in the "Deliberately deferred" table | the course named there |
| Audit-program design, BPDR filing, 483s, recalls, the AABB assessment process | `fda-and-aabb-in-practice` |
| The full ITIL-to-QSE crosswalk; exec-audience metric translation | `itsm-for-regulated-blood-services` |

## Sourcing notes (read before citing anything)

**In `sources/` and usable here** (quote only from these files, verbatim):
- `606.100`: (b) intro and "available... where the procedures are performed," (b)(16)
  labeling safeguards (m2, ICCBBA), (b)(19) consignee/recipient notification procedures
  (m3, name only), and (c) both sentences (record review before release, and thorough
  investigation).
- `606.160`: (b)(7)(iii) deviation records. **(a)(1) is scoped to "each significant step in
  the collection, processing, compatibility testing, storage and distribution" of units.
  Don't stretch it to validation test scripts or vendor files.** GDP for those is industry
  practice (and later `data-integrity-and-records` territory).
- `606.171`: (a) contract steps "under your control" (m5 contrast only), (b)(1)–(3), (c) the
  "reasonably suggesting" clock (m3's key quote), and (f) "should be investigated."
- `606.170`: (b) fatality notification. Already taught in
  `storage-distribution-and-hemovigilance`, so apply it and point back.
- `606.121(c)(13)`: the barcode elements, for m2 context only. Already taught in
  `component-processing-and-labeling`.
- `11.10`: intro sentence (user's obligation; never quoted before), (a) (reused), and
  candidates (i) (training of those who develop, maintain, or use e-record systems; possible
  m6 competence hook), (j) (accountability for actions under e-signatures; possible m1
  "what your signature means" hook), and (k)(2) (time-sequenced systems documentation;
  possible m4 hook). Any Part 11 clause is used as **one row, concept only**, with a pointer
  to Track 3, following `becs-in-the-pipeline`'s precedent. Don't use more than one or two
  across the whole course.
- `630.10(h)`: only if a scenario needs donor eligibility.
- `sources/aabb/qse-framework.md`: QSE names and themes only (QSE 1 Organization, 2
  Resources, 3 Equipment, 4 Suppliers and Customers, 5 Process Control). No standard
  numbers. No text.

**Not in `sources/`. Don't cite without fetching and verifying first:**
- **21 CFR 606.20 (Personnel).** Believed to require personnel "adequate in number,
  educational background, training and experience" with "a thorough understanding of the
  procedures or control operations they perform." It would be a strong m1/m6 competence
  hook. **Run `fetch-source` once and verify the text** before quoting. If the fetch fails,
  use AABB QSE 2 (paraphrase) instead and don't mention 606.20.
- **21 CFR 211.22 / 210.2 (quality control unit, applicability to blood).** Unverified per
  QSE's plan. Don't cite. Don't claim a regulatory independence requirement.
- **HIPAA (45 CFR Part 164).** Out of scope here (`healthcare-security-and-privacy`).
  Breach is an escalation *trigger category* only. No citation, no clock.
- **FDA BECS validation guidance.** fda.gov returns 401 from these sessions. Name at most,
  as `becs-in-the-pipeline` did.
- **SOC 2 / AICPA material, GAMP 5 / ISPE.** Don't quote. Name only. AICPA and ISPE pages
  may be bot-blocked. Verify with curl before listing any in `resources.qmd`.
- **Industry claims in m6** (Goodhart-style metric gaming, "watermelon" metrics): label them
  as management commentary or ITSM practice, not as sourced facts.

**Resources-page candidates** (each must be curl-verified before listing): Cornell LII
606.100, 606.170, 606.171, 11.10; AABB's "Updated Quality Systems Essentials" page and the
2021 framework PDF (both verified 200 during QSE); the GovInfo CFR collection. For m5, an
AICPA SOC page only if it verifies, labeled "what a SOC 2 is, for later."

## Progress log

- **2026-09-22**: Course scoped (Phase 1/2). Syllabus page
  (`courses/directing-the-quality-analyst/index.qmd`, `order: 27`) and this plan written.
  No lesson content yet. Key decisions:
  1. **Seven listed topics merged into the six budgeted modules.** Delegation's static half
     went into m1 (ownership and decision rights). Coaching and delegation's dynamic half
     went into m6 with KPIs and upward reporting.
  2. **Order changed from curriculum.md's listing.** Escalation moved to m3, right after
     dev/CAPA review. Validation and vendor review went to m4 and m5. Coaching and reporting
     stays last as the synthesis.
  3. **Modules 4 and 5 are scoped to decision-trail review only**, with an explicit in-lesson
     boundary statement and a planted "non-gap" that teaches the boundary. The deferrals are
     tabled above for a later deepening pass.
  4. **One shared review instrument** (the cold-read test: Conclusion, Evidence, Reasoning,
     Criteria first, Decision trail, Loose ends) plus gap triage, introduced in m1 and
     applied by name in m2, m4, and m5.
  5. **Teaching device:** a complete flawed QA document with 4–6 mixed-severity gaps, one
     non-gap, and at least one Director-only IT-evidence catch, with the hunt before the
     reveal.
  6. **Scenarios:** m2 runs the ICCBBA product-code-table event (from
     `component-processing-and-labeling`, never before run as a deviation) and locks its
     facts. m5 reviews the BECS vendor reassessment that m2's CAPA triggers. m4 finally
     shows the OS-patch validation impact assessment from `becs-in-the-pipeline`. m6
     rebuilds QSE m7's superficial management-review packet.
  7. **The QA stays unnamed** ("your QA," "she"). Her planted two-part pattern (right
     conclusion with reasoning off the page, and stopping at the first credible source)
     runs through m2, m4, and m5 for m6 to coach.
  Verified this session: the max `order:` in `courses/**` was 26 with no duplicates, so this
  course uses 27–39 and the next course starts at 40 (SKILL.md updated). Checked the
  contents of `sources/` for usable hooks. 606.171(a) (contract steps), 606.171(c)'s
  "reasonably suggesting," and 11.10's introductory "persons who use" sentence were never
  quoted before and fit this course. Next: build m1, `qa-deliverables-and-ownership`.
