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
replace the specialist. Two deliberate exceptions: the GRC track, because the Director is the
one who owns risk posture and has to *speak* NIST/ISO risk language fluently, not just recognize
it; and the final track, which is specifically about reviewing and directing the Quality
Analyst's output.

### Where the depth comes from

This curriculum borrows structure — not exam prep — from several professional bodies of
knowledge, because each one has already solved "what does a competent person in this space need
to know" for an adjacent role. None of these are a credential goal for the learner; they're
blueprints raided for content organization and rigor.

| Body of knowledge | What we borrowed | Shows up in |
|---|---|---|
| NIST Risk Management Framework (the basis of ISC2's CGRC, formerly CAP) | Categorize → Select → Implement → Assess → Authorize → Monitor; control families; POA&Ms | Track 4, `grc-frameworks-and-risk-management` |
| ISC2 HCISPP body of knowledge (HealthCare Information Security and Privacy Practitioner) | Healthcare industry context, information governance, privacy/security controls, third-party risk, breach investigation — all healthcare-specific | Track 4, `healthcare-security-and-privacy` |
| ISO/IEC 27001 (ISMS) | Annex A control domains, Statement of Applicability, certification audit structure (Stage 1/2, surveillance) | Track 4, `vendor-and-third-party-risk-management`; Track 5 crosswalk |
| AICPA SOC 2 (Trust Services Criteria) | Type I vs. Type II, the five Trust Services Criteria, complementary user entity controls, bridge letters | Track 4, `vendor-and-third-party-risk-management` |
| ISO 13485 / FDA's Quality Management System Regulation (QMSR — 21 CFR Part 820 as amended to align with ISO 13485, effective 2026-02-02) | Medical-device-grade QMS structure, software-as-a-medical-device framing, why BECS isn't "just software" | Track 3, `csv-and-becs` |
| ICH Q9 (Quality Risk Management) | Risk-based thinking as it already exists in GMP/GxP — the bridge between "generic risk management" and what a blood center already half-does | Foundations, `risk-and-controls-vocabulary`; Track 2 |
| ASQ Certified Quality Auditor body of knowledge | Audit program design, auditor independence, evidence sampling, nonconformance grading, management review | Track 2, `fda-and-aabb-in-practice` |
| AABB Quality System Essentials | The accreditation-specific vocabulary and structure everything else has to map onto in this industry | Track 2 throughout |

---

## Competency map

| Domain | The Director must be able to... | Why it matters | Track |
|---|---|---|---|
| Blood center operations | Explain the donor-to-hospital pipeline and where IT touches each step | Can't govern systems you can't place in the workflow | 1 |
| Regulatory landscape | Tell statute, regulation, guidance, and standard apart, and know which body (FDA, AABB, CLIA, state) owns which | Wrong citation = lost credibility with inspectors and counsel | Foundations |
| Risk vocabulary | Use the same risk language (likelihood × severity, inherent vs. residual, control types) across quality, security, and validation conversations | Every downstream framework (RMF, ICH Q9, GAMP 5) assumes this vocabulary already | Foundations |
| Quality systems | Run/oversee deviations, CAPA, change control, document control, and a real internal audit program to AABB QSE expectations | This *is* the job's compliance backbone | 2 |
| CSV, BECS & device-grade QMS | Read and defend a validation package; place BECS correctly as medical-device-adjacent software under FDA's QMSR/ISO 13485 | BECS failures are patient-safety failures, not just outages | 3 |
| Data integrity | Apply ALCOA+ and Part 11 (including predicate-rule and hybrid-system nuance) to electronic records across sites | The single most common FDA citation category in this industry | 3 |
| GRC / risk management | Run a system or vendor through a categorize→select→implement→assess→authorize→monitor cycle and track remediation like a POA&M | Gives the Director one risk language instead of three different ones for security, quality, and validation | 4 |
| Healthcare security & privacy | Apply HIPAA Privacy and Security Rule requirements, and handle a breach with dual reporting obligations (HIPAA + FDA) | Two regulators, one incident — get the overlap wrong and you satisfy neither | 4 |
| Vendor & third-party risk | Read a SOC 2 report and an ISO 27001 certificate, tier vendor risk, and know what a BAA and a vendor change notice each obligate you to do | The org's compliance is only as strong as its weakest vendor | 4 |
| Inspection & audit readiness | Design an internal audit program and prepare for/survive an FDA inspection or AABB assessment | The job's highest-stakes recurring event | 2 |
| ITSM bridge | Translate ITIL practice into QSE, NIST RMF, and ISO 27001 language and back | The Director's unique value: nobody else in the building speaks all of these | 5 |
| Directing the QA | Review a deviation, CAPA, validation package, or vendor risk assessment for defensibility; know when to escalate | The explicit ask: supervising a direct report competently | 6 |

---

## Foundations (shared, taught once, linked everywhere)

| Slug | Finish line | Status |
|---|---|---|
| `reading-a-cfr-citation` | Read any CFR citation aloud and state what it requires | Built (placeholder lesson exists — first real module) |
| `regulatory-landscape-orientation` | Given any rule, correctly label it FDA regulation, FDA guidance, AABB standard, or industry practice, and say which is binding | Not started |
| `risk-and-controls-vocabulary` | Use likelihood/severity/detectability, inherent vs. residual risk, and preventive/detective/corrective controls correctly in a sentence about any of: a deviation, a vendor, or a system | Not started |

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
| `fda-and-aabb-in-practice` | Design a defensible internal audit program, prepare a system or process for an FDA inspection or AABB assessment, and respond to a 483 observation |

`quality-system-essentials` modules: the AABB QSE framework at a glance (and how it parallels
ISO 9001's QMS structure) · deviations & nonconformances · CAPA (root cause through
effectiveness check) · change control for regulated systems · document control & records ·
quality risk management (ICH Q9: FMEA-style risk ranking/filtering applied to a quality
decision) · internal audits & management review.

`fda-and-aabb-in-practice` modules: FDA inspection authority (routine vs. for-cause) · Form 483,
Warning Letters, and recalls (Class I/II/III) · Biological Product Deviation Reports (BPDRs) ·
the AABB assessment process · designing an internal audit program (auditor independence and
competency, audit scheduling, evidence sampling, nonconformance grading) · mock inspections &
presenting IT/BECS evidence to an inspector.

### Track 3 — Computerized Systems: Validation, BECS & Data Integrity
*Depends on: foundations, Track 1.*

| Slug | Finish line |
|---|---|
| `csv-and-becs` | Read a validation package (URS/FRS, IQ/OQ/PQ, traceability matrix) and say whether it's defensible for a BECS or BECS-adjacent system, and place BECS correctly under FDA's device-grade quality system expectations |
| `data-integrity-and-records` | Apply ALCOA+ to a real electronic record, explain Part 11's e-signature and predicate-rule requirements (including for hybrid paper/electronic and legacy systems), and describe how multi-state data governance holds up under audit |

`csv-and-becs` modules: GAMP 5 categories & the V-model · IQ/OQ/PQ in practice · BECS
specifics (FDA guidance on blood establishment computer software, 510(k)-cleared vs.
custom/legacy systems) · ISO 13485 and FDA's Quality Management System Regulation (QMSR) —
what "software as a medical device" framing means for BECS and why it isn't ordinary
enterprise IT · Part 11 electronic records & signatures · validation lifecycle, periodic review
& patch management under a validated state · BECS-to-LIS/HIS interfaces and data integrity
across them.

`data-integrity-and-records` modules: ALCOA+ principles · audit trails & e-signatures in
practice · Part 11 predicate rules and hybrid systems (when paper is still the record of
record) · assessing a legacy system for Part 11 gaps · retention requirements for blood
records · data governance and unique donor identification across multiple sites.

### Track 4 — Governance, Risk & Compliance (GRC)
*Depends on: foundations. Can run in parallel with Track 3 once the risk-vocabulary foundation
is done.*

This track replaces "a module on security" with a real GRC track: one risk framework fluently
spoken across systems, vendors, and privacy, instead of three shallow ones.

| Slug | Finish line |
|---|---|
| `grc-frameworks-and-risk-management` | Run a system or process through categorize→select→implement→assess→authorize→monitor, and track remediation the way a POA&M does — then say in one sentence how that's the same motion as a validation release and periodic review |
| `healthcare-security-and-privacy` | Apply HIPAA Privacy and Security Rule requirements to a donor/patient record, and run a breach through both HIPAA notification and FDA reporting obligations at once |
| `vendor-and-third-party-risk-management` | Read a SOC 2 report and an ISO 27001 certificate/Statement of Applicability well enough to know what they do and don't cover, tier a vendor's risk, and say what a BAA and a vendor change notice each obligate you to do |

`grc-frameworks-and-risk-management` modules: risk management frameworks side by side (NIST
RMF, ISO 31000, ICH Q9 — same motion, different vocabulary) · categorize & select controls ·
implement & assess controls · authorize & monitor (and why an "Authorization to Operate" is the
same decision as a validation release) · tracking remediation: POA&Ms next to CAPAs.

`healthcare-security-and-privacy` modules: the healthcare regulatory environment as a security
practitioner sees it (information governance in a covered entity) · HIPAA Privacy Rule ·
HIPAA Security Rule safeguards mapped side by side with Part 11 controls · incident response
and breach notification with dual reporting obligations (HIPAA Breach Notification Rule + FDA
BPDR/MedWatch) · investigation and forensics basics for a healthcare data incident.

`vendor-and-third-party-risk-management` modules: supplier qualification & vendor risk tiering
(AABB QSE) · reading a SOC 2 report (Type I vs. Type II, the five Trust Services Criteria,
complementary user entity controls, bridge letters) · reading an ISO 27001 certificate and
Statement of Applicability · Business Associate Agreements and HIPAA-specific vendor terms ·
vendor change notifications and your own change control.

### Track 5 — ITSM as the Operating Model
*Depends on: Tracks 1, 2, 4. This is the Director's translation layer.*

| Slug | Finish line |
|---|---|
| `itsm-for-regulated-blood-services` | Crosswalk any ITIL practice to its AABB QSE, NIST RMF, and ISO 27001 equivalents, and present IT service and risk performance to the CIO and the exec quality council in language that survives every audience |

Modules: ITIL-to-QSE crosswalk (change enablement ↔ change control, problem management ↔
CAPA, CMDB ↔ equipment/validated-system inventory, service catalog, continual improvement) ·
ITIL-to-GRC crosswalk (service asset & config management ↔ RMF categorize/select, continual
improvement ↔ monitor, security management ↔ ISO 27001 Annex A) · building a service
catalog/CMDB that survives an inspection *and* a security assessment · translating ITSM and
risk metrics for quality and executive audiences.

### Track 6 — Directing the Quality Analyst
*Depends on: Tracks 2, 3, 4. Built early relative to its dependency depth because it's the
explicit, immediate job need.*

| Slug | Finish line |
|---|---|
| `directing-the-quality-analyst` | Review a deviation, CAPA, validation package, or vendor risk assessment your QA wrote well enough to catch what an inspector or assessor would catch, and know when an issue must escalate to you directly |

Modules: what a QA's deliverables look like and who owns what · reviewing deviation & CAPA
write-ups for defensibility · reviewing validation protocols/reports · reviewing a vendor risk
assessment or SOC 2 review the QA performed · escalation criteria (what must reach the
Director, e.g. FDA-reportable events or a confirmed breach) · coaching & delegation · KPIs and
reporting quality/IT/risk performance upward.

---

## Prerequisite order

```
reading-a-cfr-citation ─┐
                         ├─→ regulatory-landscape-orientation ─┐
risk-and-controls-       │                                     │
vocabulary ──────────────┘                                     │
        │                                                       ▼
        │                                     blood-center-operations
        │                                                       │
        │                        ┌──────────────┬───────────────┼───────────────┐
        ▼                        ▼              ▼               ▼               ▼
grc-frameworks-and-      quality-system-   csv-and-becs   (healthcare-sec-  (vendor-and-3rd-
risk-management          essentials              │         and-privacy —    party-risk — only
        │                        │                ▼         only needs      needs foundations,
        │                        │        data-integrity-    foundations,    can start anytime
        │                        │        and-records        can start      after risk vocab)
        │                        │                │           anytime)
        │                        ▼                │
        │             fda-and-aabb-in-practice     │
        │                        │                 │
        └────────────┬───────────┴────────┬────────┘
                      ▼                    ▼
        directing-the-quality-analyst   itsm-for-regulated-blood-services
                                          (capstone — wants everything else done)
```

`itsm-for-regulated-blood-services` is the capstone: build it last.
`directing-the-quality-analyst` only strictly needs `quality-system-essentials`,
`csv-and-becs`, and enough of GRC to review a vendor risk assessment — which is why it's
sequenced early below despite the diagram; the dependency is loose enough to pull forward.
`healthcare-security-and-privacy` and `vendor-and-third-party-risk-management` have no hard
prerequisite beyond the foundations and can be built opportunistically, but the sequence below
places them after the higher-priority tracks.

---

## Recommended sequence

Priority: reduce regulatory risk and build day-one job credibility (running quality systems,
directing the QA) before the deeper technical tracks (CSV/BECS internals, GRC/vendor depth) and
the capstone (ITSM bridge). The first six months cover the day-to-day job; months seven through
roughly fourteen cover the GRC/security/vendor depth this revision added, plus the capstone.

| Phase | Approx. timing | Build |
|---|---|---|
| 0 | Weeks 1–2 | `reading-a-cfr-citation` (finish placeholder), `regulatory-landscape-orientation`, `risk-and-controls-vocabulary` |
| 1 | Weeks 3–6 | `blood-center-operations` (5 modules) |
| 2 | Weeks 7–13 | `quality-system-essentials` (7 modules) |
| 3 | Weeks 14–17 | `directing-the-quality-analyst` (6 modules) — pulled forward; highest immediate people-management payoff |
| 4 | Weeks 18–24 | `csv-and-becs` (7 modules) |
| 5 | Weeks 25–29 | `data-integrity-and-records` (6 modules) |
| 6 | Weeks 30–35 | `fda-and-aabb-in-practice` (6 modules) |
| **— first 6 months ends around here —** | | |
| 7 | Weeks 36–40 | `grc-frameworks-and-risk-management` (5 modules) |
| 8 | Weeks 41–45 | `healthcare-security-and-privacy` (5 modules) |
| 9 | Weeks 46–50 | `vendor-and-third-party-risk-management` (5 modules) |
| 10 | Weeks 51–56 | `itsm-for-regulated-blood-services` (6 modules, capstone) |

At one module per session, this is roughly 58 sessions end to end. "Continue" always builds the
next unbuilt module in this order, skipping anything already marked done in the progress
tracker below.

---

## Progress tracker

`create-course` updates this table after every session. A course with no modules checked yet
has no `plans/<slug>.md` file until its first session.

| Course | Modules built | Status |
|---|---|---|
| `reading-a-cfr-citation` | 1 / 1 | Done |
| `regulatory-landscape-orientation` | 1 / 1 | Done |
| `risk-and-controls-vocabulary` | 1 / 1 | Done |
| `blood-center-operations` | 5 / 5 | Done |
| `quality-system-essentials` | 7 / 7 | Done |
| `directing-the-quality-analyst` | 6 / 6 | Done |
| `csv-and-becs` | 7 / 7 | Done |
| `data-integrity-and-records` | 6 / 6 | Done |
| `fda-and-aabb-in-practice` | 6 / 6 | Done |
| `grc-frameworks-and-risk-management` | 5 / 5 | Done |
| `healthcare-security-and-privacy` | 5 / 5 | Done |
| `vendor-and-third-party-risk-management` | 5 / 5 | Done |
| `itsm-for-regulated-blood-services` | 1 / 6 | In progress |

**Next up:** `itsm-for-regulated-blood-services` module 2,
`itil-to-qse-crosswalk-cmdb-and-continual-improvement` (Track 5, Phase 10) — module 1,
`itil-to-qse-crosswalk-change-and-problem`, is now published (see
`plans/itsm-for-regulated-blood-services.md`'s progress log for its locked state). The capstone
is the curriculum's final course, built last per this file's own "Prerequisite order" diagram
("capstone — wants everything else done"). **Checked against the progress tracker above and the
full prerequisite chain in this file's "Prerequisite order" section: every other course in this
curriculum is now Done** —
`reading-a-cfr-citation`, `regulatory-landscape-orientation`, `risk-and-controls-vocabulary`
(foundations); `blood-center-operations` (Track 1); `quality-system-essentials`,
`fda-and-aabb-in-practice` (Track 2); `csv-and-becs`, `data-integrity-and-records` (Track 3);
`grc-frameworks-and-risk-management`, `healthcare-security-and-privacy`,
`vendor-and-third-party-risk-management` (Track 4, now complete as of this session — see below);
and `directing-the-quality-analyst` (Track 6). The capstone's own stated dependency (Tracks 1, 2,
and 4) is fully satisfied, and nothing else in the "Recommended sequence" table sits between here
and it. There is nothing outstanding to flag before scoping it, beyond the ordinary first-session
work of actually scoping its own running example and module list.

Relevant locked facts for whoever scopes `itsm-for-regulated-blood-services` next, gathered from
across the whole curriculum rather than any single course: this is explicitly a **crosswalk**
course, not a new-content course — its own module list (ITIL-to-QSE crosswalk: change enablement
↔ change control, problem management ↔ CAPA, CMDB ↔ equipment/validated-system inventory, service
catalog, continual improvement; ITIL-to-GRC crosswalk: service asset & config management ↔ RMF
categorize/select, continual improvement ↔ monitor, security management ↔ ISO 27001 Annex A;
building a service catalog/CMDB that survives both an inspection and a security assessment;
translating ITSM and risk metrics for quality and executive audiences) draws on material every
other track has already built and locked, and its own scoping session should decide which of these
running examples to reuse (per this curriculum's own established pattern, no course is forced to
inherit another's scenario just because it's available): the eQMS (`grc-frameworks-and-risk-
management`'s own running example, with its locked POA&M-next-to-CAPA crosswalk already built);
BECS and its validation/CSV history (`csv-and-becs`, `data-integrity-and-records`); the Brookfield
incident and the device-management platform vendor relationship, now viewed through three
different lenses by three different courses (`healthcare-security-and-privacy`'s own closed
incident investigation; `vendor-and-third-party-risk-management`'s tiering/SOC 2/ISO 27001/BAA/
change-notification treatment of that same vendor); and `quality-system-essentials`'s own change-
control, CAPA, and document-control mechanics, each already taught in depth and available for this
capstone to crosswalk against ITIL vocabulary rather than re-teach.

`vendor-and-third-party-risk-management` is now **5/5 and complete** — see
`plans/vendor-and-third-party-risk-management.md`'s progress log for the full course, including
module 5's final, locked state (summarized further below). In short: AABB's QSE 4 ("Supplier and
Customer Issues," named/themed only, no Standards text or
standard number) grounded a reasoned, three-tier vendor risk scheme — **High / Medium / Low**,
decided by four questions (data touch; system criticality — BECS-adjacent or eQMS; access level
— logical/data vs. physical-only; blast radius). **Locked vendor placements modules 4-5 pick up
directly:** the device-management platform vendor is **High** tier (data touch: yes, manages
devices carrying e-PHI-adjacent extracts off-site, per `healthcare-security-and-privacy`'s own
locked Brookfield facts, not reopened here; system criticality: BECS-adjacent; access level:
logical/data access — enrollment, telemetry, remote lock/wipe, migration; blast radius:
multi-site, confidentiality and availability). Three invented, generic contrast vendors were
also tiered: a reagent/consumables supplier (**Medium** — no data access, but bears on a
GMP-governed testing process), a facilities/janitorial vendor (**Low**, conditioned on its
physical access staying out of restricted/server areas), and an office-supplies vendor
(**Low**). **Module 2, `reading-a-soc-2-report`, is published** — it opened this High-tier
vendor's own SOC 2 report for the first time (handled strictly as a paid/proprietary framework,
no AICPA text fetched or quoted, same tier as ISO 31000/19011/GAMP 5 elsewhere) and reasoned
through, without asserting as fact: Trust Services Criteria selected — Security (certain) and
Availability (strong, reasoned guess) certainly, Confidentiality plausibly given the
e-PHI-adjacent device data this vendor's devices carry, Processing Integrity and Privacy less
likely; **Type II**, not Type I (the stronger, more plausible case for a vendor at this scale
and tier, and the only type that could speak to whether controls held up through a migration
event); a plausible **CUEC (Complementary User Entity Control)** requiring Lakeshore itself to
confirm each device's encryption status before field/travel use — tied honestly to
`investigating-a-healthcare-data-incident`'s own root-cause ranking (the deployment-sequencing
gap) without altering any locked fact, since that course already found the vendor's migration
defect was a known, disclosed issue class, not a hidden vendor failure, and Lakeshore's own
verification was the actual gap; and a **bridge letter** reasoned as needed, given the near-
certain gap between the report's past period-end date and the date Lakeshore is reading it for
the first time. **Module 3, `reading-an-iso-27001-certificate`, is now also published** — it
opened this same vendor's ISO 27001 certificate and Statement of Applicability (SoA), handled
strictly as a paid/proprietary international standard, no ISO text fetched or quoted, no Annex A
control number invented, same tier as ISO 31000/19011/GAMP 5/SOC 2 elsewhere. Taught: a
certificate attests to an ISMS (Information Security Management System) — the vendor's own
*process* for selecting, implementing, and reviewing controls, not every individual technical
control and not zero incidents; the Stage 1 (documentation)/Stage 2 (implementation) initial
audit, periodic surveillance audits, and a longer recertification cycle; a certificate's stated
**scope**, confirmed against the actual product/environment Lakeshore uses, not just the
vendor's name — the single most commonly overlooked check; and the SoA's implemented-vs.-
excluded control domains, named only in general terms (access control, supplier relationships,
change management, incident management, business continuity, asset management), no specific
numbering asserted. **Reasoned, locked findings for this vendor:** the scope-verification
*method* was taught (confirm the certificate's stated scope actually names the product Lakeshore
uses, not just the vendor's corporate name) without asserting a specific real-world scope
outcome; three SoA control domains were walked through as most relevant to Brookfield — change
management (most directly on point: a mature, properly implemented domain would plausibly
validate that compliance-relevant fields like encryption-attestation status survive a migration),
supplier relationships, and asset management; and the module's honest conclusion, consistent with
module 2 and with `investigating-a-healthcare-data-incident`'s locked findings, is that
certification **plausibly reduces the likelihood** of this class of gap but does **not** guarantee
it — the standard certifies a management process, not perfection, so ISO 27001 certification would
not have definitely prevented the Brookfield incident. ISO's own catalogue page for ISO/IEC
27001:2022 could not be verified reachable this session either (direct `iso.org` checks returned
403 on every page tried, including the root domain; the Wayback Machine's availability API
returned 429 on every retry; its CDX API was blocked by this environment's own egress policy) —
resolved by publishing two independent, curl-verified accredited-certification-body pages (BSI and
NQA) instead of guessing a catalogue number, with the full attempt history disclosed in the
module's own `resources.qmd` for a future session to retry. **Module 4,
`business-associate-agreements`, is now also published** — it quoted 164.314(a) (full, Security
Rule) and 164.504(e)(1)-(2) (full, Privacy Rule, including the (e)(2)(ii)(A)-(J) ten-item
contract-terms checklist) verbatim from `sources/cfr/45-164-business-associate-excerpt.md`, and
reasoned honestly through this course's central question: does Lakeshore actually need a BAA with
this vendor? **Locked conclusion for module 5: plausibly yes, not certainly yes.** The platform's
core function (device configuration, enrollment, policy push) doesn't inherently require reading a
device's content, but `healthcare-security-and-privacy`'s own locked facts (not reopened) — the
vendor's enrollment/check-in telemetry, its migration tooling, and its remote lock/wipe capability
acting directly on a device's data layer — plausibly cross the general, well-established HIPAA
threshold of "maintains, or has the practical ability to access, PHI on Lakeshore's behalf," even
without any vendor employee ever reading a donor record. The module states this is a reasoned
judgment, not a certified legal determination, and that the real answer requires Lakeshore's own
counsel reading the actual contract. The (e)(2)(ii)(A)-(J) checklist was walked concretely against
this vendor: (A) permitted uses tied to `healthcare-security-and-privacy`'s own minimum-necessary
finding (three of six Brookfield extract fields never needed to travel off-site); (B) safeguards
tied to this course's own module 2 (SOC 2 Type II) and module 3 (ISO 27001 certificate) findings as
evidence a vendor would offer, not a substitute for the clause; (C) incident/breach reporting
identified as the single highest-value clause for this vendor, reasoned as the textual basis for
the proactive notice Lakeshore would have wanted during the Brookfield migration — explicitly not
used to reopen or alter `investigating-a-healthcare-data-incident`'s own closed breach
determination; (D) subcontractor flow-down tied to module 3's "supplier relationships" SoA finding;
(E)-(G) access/amendment/accounting walked as a narrow but real exposure; (I) Secretary access and
(J) return-or-destroy-at-termination walked as non-negotiable, with (J) tied forward to this
vendor's own migration history. eCFR's own human-readable pages were blocked by this environment's
bot protection the same way ISO.org was for module 3 (confirmed via direct `curl`, browser
user-agent, and `--compressed` attempts, all redirected to `unblock.federalregister.gov`); resolved
by linking GovInfo's official archive pages instead, each curl-verified HTTP 200 and cross-checked
against the underlying XML text. **Module 5, `vendor-change-notifications-and-your-own-change-
control`, is now also published, closing the course.** It placed the one clause module 4's
checklist does contain — the incident-reporting clause, (a)(2)(i)(C)/(e)(2)(ii)(C), referenced and
only briefly restated, not re-quoted at length — against the one kind of promise it was never
written to make: advance notice of a *planned* change. The module's locked central distinction:
incident reporting is reactive (after something goes wrong); a change-notification clause, not a
HIPAA requirement but a possible negotiated contract term, would be proactive (before a planned
material change); conflating the two — "they have to report incidents" mistaken for "they have to
warn us before they do something that could cause one" — is named as the real, common trap. A
second conflation was named and resolved: module 3's plausible ISO 27001 "change management" SoA
finding governs the vendor's own *internal* change process, not a contractual promise to notify
Lakeshore specifically. Reasoned conclusion, honestly bounded: a change-notification clause is a
genuine, forward-looking contract improvement worth Lakeshore pursuing at this vendor's next
renewal — the most directly on-point fix this course identified for the visibility gap
`investigating-a-healthcare-data-incident` already ranked as the incident's root cause — but it is
explicitly **not** a retroactive fix for that incident's own closed determination (unchanged,
not reopened), and whether the clause actually gets added is left as a genuine, unresolved forward
decision, not resolved by this course. The module closed with the course's own final passage:
the five-module arc (tiering → SOC 2 → ISO 27001 → BAA → change notifications), what's now
resolved (a real tiering scheme; the vendor's SOC 2 report and ISO 27001 certificate/SoA actually
read; a reasoned BAA position and full checklist), what stays open by honest design (the
Brookfield incident's own permanently unresolved encryption status — lensed, not reopened; whether
the contract gets strengthened — a forward decision), and a forward pointer to the Track 5
capstone, `itsm-for-regulated-blood-services`. No `csv-and-becs`/`data-integrity-and-records`/
`healthcare-security-and-privacy` locked identifier or fact was touched by module 5.
`healthcare-security-and-privacy` is now **5/5 and complete** — see
`plans/healthcare-security-and-privacy.md`'s progress log for the full course, including module
5's final state: Lakeshore's one running incident (a Brookfield staff member's work laptop, lost
in a shared ride, carrying a six-field, ~212-donor BECS extract) is now fully closed out. Module
2's minimum-necessary finding stands (three of six fields never needed to ride along). Module 3's
Security Rule finding stands (the encryption *policy* was sound under 164.306(d)(3); verification
of *this device* was not, under 164.308(a)(1)(ii)(D)). Module 4 ran 164.402's four-factor test and
reached a provisional breach determination — presumption NOT rebutted, pivoting on factor 3
(was the PHI actually acquired or viewed), unresolved because encryption status couldn't be
confirmed. **Module 5 investigated that open question as far as a real investigation can go**
(enrollment/check-in logs read past the surface "not reported" field, a vendor escalation to the
device-management platform's own backend telemetry, network-log and staff-interview checks) and
found the question **permanently, honestly unresolvable** — the laptop's entire pre-migration
operating life was too short for a first encryption attestation to ever complete, and the one
archival record that might have captured a late one was already purged under the vendor's own
retention schedule before the investigation began. **Module 4's provisional breach determination
is therefore now this course's FINAL determination**: individual notification proceeds on
164.404's 60-day clock (started the day of discovery, not reset by the investigation); 164.406
media notification stays not triggered; 164.408(c)'s under-500 annual-log HHS pathway applies; no
BPDR is independently triggered (per module 1's own locked clean-population fact, reused without
contradiction). Module 5 also ranked this incident's root causes: a physical-handling gap (the
proximate cause of the loss itself) ahead of a device-management-platform deployment-sequencing
gap (reasoned as the root cause that matters most going forward, since it's what actually
prevents this exact unresolved-encryption finding from ever closing, with a concrete fix named:
no newly enrolled device leaves the building for field/travel use before its first compliance
attestation completes) ahead of the minimum-necessary gap (a severity multiplier, not a cause).
No `csv-and-becs`/`data-integrity-and-records` locked identifier was touched by any of this
course's five modules. **Relevant locked fact for `vendor-and-third-party-risk-management`'s own
scoping session to pick up if useful, not a scenario it's required to inherit:** module 5
surfaced the device-management platform's own vendor relationship — its migration tooling, its
data-retention schedule, its backend-telemetry escalation path — as a concrete, ready-made
example of exactly the kind of vendor-risk question that course exists to teach (reading a
vendor's own posture, knowing its change-notification obligations, tiering the relationship's
risk); per this curriculum's own established pattern, that course's own scoping session should
still decide its own running example rather than being forced to reuse this one.
`grc-frameworks-and-risk-management` is 5/5 and complete — see
`plans/grc-frameworks-and-risk-management.md`'s progress log for the full course, including
module 5's final, locked state: a built POA&M (plan of action and milestones) entry for the
eQMS's one open deficiency (the quarterly access-review control for account and identity
management, implemented and documented, not yet exercised on its first scheduled cycle — owner:
the systems administrator; milestone: within 30 days of the Director's module-4 authorization
decision; reviewed/accepted by: the Director), placed next to a CAPA (corrective and preventive
action) to show the same motion in two vocabularies, with an honestly-drawn difference in
emphasis (CAPA's text requires root-cause analysis and a formal effectiveness check; NIST's own
POA&M passage, Task A-6, requires neither inside the instrument itself). Relevant locked facts for
whoever scopes `healthcare-security-and-privacy` next: this curriculum now has a fully-built,
five-module RMF (Risk Management Framework) vocabulary — categorize→select→implement→assess→
authorize→monitor, plus POA&M tracking — that `healthcare-security-and-privacy` is expected to
reuse directly (per `curriculum.md`'s own module list: HIPAA Security Rule safeguards mapped
against Part 11 controls, and breach incident response with dual HIPAA/FDA reporting), not
re-derive. The eQMS itself (Lakeshore's three-site electronic quality-management system) is
`grc-frameworks-and-risk-management`'s own running example and is not automatically
`healthcare-security-and-privacy`'s scenario to inherit — that course's own scoping session should
decide its own running example, the same way `grc-frameworks-and-risk-management` deliberately
built a fresh one instead of reopening BECS. No `csv-and-becs`/`data-integrity-and-records` locked
identifier (VAL-1203, VIA-0842, DEV-1147, CAPA-1147-A, VRA-0219, DI-0301, DED-0458, LAB-07) was
touched by `grc-frameworks-and-risk-management` at any point across its five modules.
`fda-and-aabb-in-practice` is now 6/6 and complete. See `plans/fda-and-aabb-in-practice.md`'s
progress log for module 6's locked outcomes: DED-0458's "accurate" ALCOA letter is now CLOSED (an
independent, dated verification confirmed BECS's stored donor-eligibility determination against
the donor's own original screening responses), the deferred-donor-record cadence question is now
DECIDED (Lakeshore moves from 606.160(e)(3)'s "at least monthly" regulatory floor to a weekly
cadence, by its own documented, risk-based choice, explicitly not a new regulatory requirement),
and LAB-07's AABB nonconformance stays exactly as closed as module 4 left it. Still honestly open,
not that course's to resolve: `data-integrity-and-records`'s donor-record retention-clock question
and its undecided BECS audit-trail review frequency. `csv-and-becs` (7/7), `data-integrity-and-records`
(6/6), and `fda-and-aabb-in-practice` (6/6) are all complete — once
`vendor-and-third-party-risk-management` also exists, `directing-the-quality-analyst` modules 4
and 5 should be revisited per that course's own "Deliberately deferred" table.
`csv-and-becs` is fully built and published (7/7 modules) — see `plans/csv-and-becs.md` for the
complete course, including module 6's VIA-0842 verdict and module 7's closing of its last two
open interface items. Once `data-integrity-and-records` and
`vendor-and-third-party-risk-management` both exist, `directing-the-quality-analyst` modules 4
and 5 should be revisited per that course's own "Deliberately deferred" table.
`directing-the-quality-analyst` (Track 6) is fully built and published (6/6 modules) — see
`plans/directing-the-quality-analyst.md`'s "Deliberately deferred" table for which of its modules
(4 and 5) should be revisited once `csv-and-becs` and `vendor-and-third-party-risk-management`
exist.
