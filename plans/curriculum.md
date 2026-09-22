# ISOE School — Curriculum

The master roadmap for the whole school. `create-course` reads this file to decide what to
build next when the learner types **"Continue"** without naming a course. Per-course detail
(module-by-module progress) lives in `plans/<course-slug>.md`, created by `create-course` the
first time it scopes that course. This file only tracks: what courses exist, in what order,
and which module is next.

## Who this is for

Full profile: `.claude/course-authoring/learner-profile.md`. In one line: a Director of IT
Service Operations & Excellence at a multi-state blood services organization, strong in
ITSM/ITIL, new to blood-center regulatory and quality depth, who supervises a Quality Analyst
and must be credible with FDA, AABB, and the CIO.

## Design principle

A Director doesn't do the Quality Analyst's job — deviation write-ups, validation protocol
execution, audit checklists. A Director **directs and reviews** that work, defends it upward to
the CIO and outward to FDA/AABB, and decides when to escalate. Every track below is scoped to
that altitude: enough depth to ask the right question and catch a wrong answer, not enough to
replace the specialist. The one deliberate exception is the final track, which is specifically
about reviewing and directing the Quality Analyst's output.

---

## Competency map

| Domain | The Director must be able to... | Why it matters | Track |
|---|---|---|---|
| Blood center operations | Explain the donor-to-hospital pipeline and where IT touches each step | Can't govern systems you can't place in the workflow | 1 |
| Regulatory landscape | Tell statute, regulation, guidance, and standard apart, and know which body (FDA, AABB, CLIA, state) owns which | Wrong citation = lost credibility with inspectors and counsel | Foundations |
| Quality systems | Run/oversee deviations, CAPA, change control, document control, audits to AABB QSE expectations | This *is* the job's compliance backbone | 2 |
| CSV & BECS | Read and defend a validation package; know what makes BECS different from ordinary enterprise software | BECS failures are patient-safety failures, not just outages | 3 |
| Data integrity | Apply ALCOA+ and Part 11 to electronic records across sites | The single most common FDA citation category in this industry | 3 |
| Security & privacy | Map security controls to both HIPAA and FDA/Part 11 expectations at once | Two regulators, one control set — get the overlap wrong and you satisfy neither | 4 |
| Vendor oversight | Qualify, audit, and manage change from BECS/cloud vendors | The org's compliance is only as strong as its weakest vendor | 4 |
| Inspection readiness | Prepare for and survive an FDA inspection or AABB assessment | The job's highest-stakes recurring event | 2 |
| ITSM bridge | Translate ITIL practice into QSE language and back | The Director's unique value: nobody else in the building speaks both | 5 |
| Directing the QA | Review a deviation, CAPA, or validation package for defensibility; know when to escalate | The explicit ask: supervising a direct report competently | 6 |

---

## Foundations (shared, taught once, linked everywhere)

| Slug | Finish line | Status |
|---|---|---|
| `reading-a-cfr-citation` | Read any CFR citation aloud and state what it requires | Built (placeholder lesson exists — first real module) |
| `regulatory-landscape-orientation` | Given any rule, correctly label it FDA regulation, FDA guidance, AABB standard, or industry practice, and say which is binding | Not started |

Foundations are prerequisites for every track below and are built before any course that
depends on them.

---

## Tracks and courses

### Track 1 — Blood Center Operations
*Prerequisite for: Tracks 3, 5, 6. Depends on: foundations.*

| Slug | Finish line |
|---|---|
| `blood-center-operations` | Walk a unit of blood from donor screening to hospital transfusion, name the regulated step at each stage, and say which systems (BECS, LIS, HIS) touch it |

Modules: donor recruitment & screening · collection & testing · component processing &
labeling (ISBT 128) · storage, distribution & hemovigilance · where BECS sits in the pipeline
and why it's a different animal from a normal enterprise system.

### Track 2 — Quality Systems & Regulatory Compliance
*Prerequisite for: Tracks 5, 6. Depends on: foundations, Track 1 (for scenarios).*

| Slug | Finish line |
|---|---|
| `quality-system-essentials` | Run a deviation from discovery through CAPA effectiveness check, and explain document control and change control well enough to defend them to an assessor |
| `fda-and-aabb-in-practice` | Prepare a system or process for an FDA inspection or AABB assessment, and respond to a 483 observation |

`quality-system-essentials` modules: the AABB QSE framework at a glance · deviations &
nonconformances · CAPA (root cause through effectiveness check) · change control for regulated
systems · document control & records · internal audits & management review.

`fda-and-aabb-in-practice` modules: FDA inspection authority (routine vs. for-cause) · Form 483,
Warning Letters, and recalls (Class I/II/III) · Biological Product Deviation Reports (BPDRs) ·
the AABB assessment process · mock inspections & presenting IT/BECS evidence to an inspector.

### Track 3 — Computerized Systems: Validation, BECS, Data Integrity
*Depends on: foundations, Track 1.*

| Slug | Finish line |
|---|---|
| `csv-and-becs` | Read a validation package (URS/FRS, IQ/OQ/PQ, traceability matrix) and say whether it's defensible, for a BECS or BECS-adjacent system |
| `data-integrity-and-records` | Apply ALCOA+ to a real electronic record, explain Part 11's e-signature requirements, and describe how multi-state data governance holds up under audit |

`csv-and-becs` modules: GAMP 5 categories & the V-model · IQ/OQ/PQ in practice · BECS
specifics (FDA guidance on blood establishment computer software, 510(k)-cleared vs.
custom/legacy systems) · Part 11 electronic records & signatures · validation lifecycle,
periodic review & patch management under a validated state · BECS-to-LIS/HIS interfaces and
data integrity across them.

`data-integrity-and-records` modules: ALCOA+ principles · audit trails & e-signatures in
practice · retention requirements for blood records · data governance and unique donor
identification across multiple sites.

### Track 4 — Security, Privacy & Vendor Oversight
*Depends on: foundations. Can run in parallel with Track 3.*

| Slug | Finish line |
|---|---|
| `security-privacy-and-vendors` | Map a security control to both HIPAA and Part 11/FDA expectations, qualify a BECS vendor, and know what a vendor's change notice obligates you to do in your own change control |

Modules: HIPAA and donor/patient privacy · security controls in a regulated environment (access
control, segregation of duties, audit logging) · incident response with dual reporting
obligations (breach notification + FDA reporting) · supplier qualification & vendor audits
(reading a SOC 2) · vendor change notifications and your own change control.

### Track 5 — ITSM as the Operating Model
*Depends on: Tracks 1, 2. This is the Director's translation layer.*

| Slug | Finish line |
|---|---|
| `itsm-for-regulated-blood-services` | Crosswalk any ITIL practice to its AABB QSE equivalent, and present IT service performance to the CIO and the exec quality council in language that survives both audiences |

Modules: ITIL-to-QSE crosswalk (change enablement ↔ change control, problem management ↔
CAPA, CMDB ↔ equipment/validated-system inventory, service catalog, continual improvement) ·
building a service catalog/CMDB that survives an inspection · translating ITSM metrics for
quality and executive audiences.

### Track 6 — Directing the Quality Analyst
*Depends on: Tracks 2, 3. Built early relative to its dependency depth because it's the
explicit, immediate job need.*

| Slug | Finish line |
|---|---|
| `directing-the-quality-analyst` | Review a deviation, CAPA, or validation package your QA wrote well enough to catch what an inspector would catch, and know when an issue must escalate to you directly |

Modules: what a QA's deliverables look like and who owns what · reviewing deviation & CAPA
write-ups for defensibility · reviewing validation protocols/reports · escalation criteria
(what must reach the Director, e.g. FDA-reportable events) · coaching & delegation · KPIs and
reporting quality/IT performance upward.

---

## Prerequisite order

```
reading-a-cfr-citation ─┐
                         ├─→ regulatory-landscape-orientation ─┐
                         │                                     │
                         ▼                                     ▼
              blood-center-operations              quality-system-essentials
                         │                                     │
        ┌────────────────┼─────────────────┐                  │
        ▼                ▼                 ▼                  ▼
   csv-and-becs   security-privacy-   (parallel, no      fda-and-aabb-in-practice
        │          and-vendors         hard prereq)              │
        ▼                                                        │
data-integrity-and-records                                       │
        │                                                         │
        └──────────────┬──────────────────────┬───────────────────┘
                        ▼                      ▼
        directing-the-quality-analyst   itsm-for-regulated-blood-services
                                          (wants everything else done first)
```

`itsm-for-regulated-blood-services` is the capstone: build it last.
`directing-the-quality-analyst` only strictly needs `quality-system-essentials`, which is why
it's sequenced early below despite the diagram — the dependency is loose enough to pull forward.

---

## Recommended sequence — first 6 months

Priority: reduce regulatory risk and build day-one job credibility (running quality systems,
directing the QA) before the deeper technical tracks (CSV/BECS internals) and the capstone
(ITSM bridge).

| Phase | Weeks (approx.) | Build |
|---|---|---|
| 0 | 1 | `reading-a-cfr-citation` (finish the placeholder), `regulatory-landscape-orientation` |
| 1 | 2–5 | `blood-center-operations` (all 5 modules) |
| 2 | 6–11 | `quality-system-essentials` (all 6 modules) |
| 3 | 12–14 | `directing-the-quality-analyst` (all 6 modules) — pulled forward; highest immediate people-management payoff |
| 4 | 15–20 | `csv-and-becs` (all 6 modules) |
| 5 | 21–24 | `data-integrity-and-records` (all 4 modules) |
| 6 | 25–28 | `fda-and-aabb-in-practice` (all 5 modules) |
| 7 | 29–32 | `security-privacy-and-vendors` (all 5 modules) |
| 8 | 33–36 | `itsm-for-regulated-blood-services` (all 5 modules, capstone) |

At one module per session, this is roughly 37 sessions. "Continue" always builds the next
unbuilt module in this order, skipping anything already marked done in the progress tracker
below.

---

## Progress tracker

`create-course` updates this table after every session. A course with no modules checked yet
has no `plans/<slug>.md` file until its first session.

| Course | Modules built | Status |
|---|---|---|
| `reading-a-cfr-citation` | 0 / 1 (placeholder only) | Not started |
| `regulatory-landscape-orientation` | 0 / — | Not started |
| `blood-center-operations` | 0 / 5 | Not started |
| `quality-system-essentials` | 0 / 6 | Not started |
| `directing-the-quality-analyst` | 0 / 6 | Not started |
| `csv-and-becs` | 0 / 6 | Not started |
| `data-integrity-and-records` | 0 / 4 | Not started |
| `fda-and-aabb-in-practice` | 0 / 5 | Not started |
| `security-privacy-and-vendors` | 0 / 5 | Not started |
| `itsm-for-regulated-blood-services` | 0 / 5 | Not started |

**Next up:** `reading-a-cfr-citation` — replace the placeholder with the real first lesson.
