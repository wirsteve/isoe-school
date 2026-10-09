# `itsm-for-regulated-blood-services` — course plan

Read this whole file before drafting any module. Update the module table and append a progress
log entry after every module, same discipline as every other course in this curriculum. **This is
the capstone — the curriculum's final course.**

## Finish line

Crosswalk any ITIL practice to its AABB QSE, NIST RMF, and ISO 27001 equivalents, and present IT
service and risk performance to the CIO and the exec quality council in language that survives
every audience.

## Why this course exists, and what it must not re-teach

This course is pure synthesis. It introduces **no new regulation, standard, or framework** — every
citation it needs was already fetched, verified, and locked earlier in this curriculum. Its entire
job is building the crosswalk between ITIL vocabulary (the learner's own professional background,
used as a bridge throughout this curriculum, never itself treated as a cited standard) and four
already-built vocabularies:

- **AABB's Quality System Essentials** — named/themed only, `sources/aabb/qse-framework.md`,
  reused from `quality-system-essentials` and `fda-and-aabb-in-practice`. Never quote Standards
  text or invent a standard number — same discipline every prior course held to.
- **NIST SP 800-37 Rev. 2** — `sources/nist/sp-800-37r2-excerpt.md`, U.S. government work, public
  domain, safe to quote verbatim, reused from `grc-frameworks-and-risk-management`.
- **ISO/IEC 27001** — paid standard, paraphrase-only, reused from
  `vendor-and-third-party-risk-management`. Never quote ISO's own text or invent an Annex A
  control number.
- **Lakeshore's own already-built mechanics**: change control, CAPA, document control, internal
  audits (`quality-system-essentials`); the eQMS's full categorize→select→implement→assess→
  authorize→monitor cycle and its POA&M (`grc-frameworks-and-risk-management`); BECS's validation
  lifecycle (`csv-and-becs`, `data-integrity-and-records`); the Brookfield incident, now already
  crosswalked through `healthcare-security-and-privacy`'s own HIPAA-lensed investigation and
  `vendor-and-third-party-risk-management`'s vendor-risk lens.

**Through-line characters, reused, not re-established:** the Director (learner, second person
"you"), the Quality Analyst ("she," competent, improving), the unnamed systems administrator
("he"). Locations: Lakeshore's central site, Brookfield, Fairview.

## This course's own scenario — locked once, here, for every module to share

This course's running artifact is **the eQMS's own service catalog and CMDB entry** — built fresh
in this course, using the eQMS (`grc-frameworks-and-risk-management`'s own running example,
already fully categorized/selected/implemented/assessed/authorized/monitored in that course) as the
system every crosswalk module applies its mapping to. The Brookfield incident and the device-
management platform vendor relationship are reused as the course's own worked example for modules
5-6 specifically (translating metrics, and the final capstone presentation), since that incident
has now been built out in enough depth, across three prior courses, to make a genuinely rich
closing exercise — **do not reopen or alter anything any prior course locked about it.**

No calendar years in the Lakeshore narrative. Never name a real ITSM tool, CMDB product, or
ticketing platform — describe generically.

## Modules

| # | Slug | Finish line | `order:` | Status |
|---|---|---|---|---|
| — | (syllabus) | — | 114 | Published |
| 1 | `itil-to-qse-crosswalk-change-and-problem` | Map ITIL's change enablement onto Lakeshore's change control, and problem management onto CAPA. | 115/116 | Published |
| 2 | `itil-to-qse-crosswalk-cmdb-and-continual-improvement` | Map a CMDB onto an equipment/validated-system inventory, a service catalog onto quality-system scope, and continual improvement onto process improvement. | 117/118 | Published |
| 3 | `itil-to-grc-crosswalk` | Map service asset/config management onto RMF's Categorize/Select, continual improvement onto Monitor, and security management onto ISO 27001's Annex A domains. | 119/120 | Published |
| 4 | `building-an-inspection-ready-service-catalog-and-cmdb` | Apply all three crosswalks to build one real service-catalog/CMDB entry for the eQMS that survives an FDA inspection, an AABB assessment, and a security assessment at once. | 121/122 | Published |
| 5 | `translating-itsm-and-risk-metrics-for-executives` | Present the same underlying fact (an incident, a residual risk, a control gap) in CIO language and exec-quality-council language without changing what it means. | 123/124 | Not started |
| 6 | `presenting-it-service-and-risk-performance` | The capstone exercise and the curriculum's closing module: present the Brookfield incident's full, four-lens history to both audiences at once, and close the entire curriculum. | 125/126 | Not started |

This is the curriculum's final course. No further course continues after it — if a future session
ever adds one, it would start at **127**.

## Module-by-module guardrails and sourcing

**m1 `itil-to-qse-crosswalk-change-and-problem`.**
- Owns: two crosswalks, built concretely, not just asserted as analogous.
  - **Change enablement ↔ change control.** ITIL's change enablement practice (assess a proposed
    change's risk and impact, get it authorized by the right body, schedule and implement it,
    review the outcome) mapped directly onto `quality-system-essentials`'s own change-control
    module (request → impact/risk assessment → approval → implementation → verification,
    reference only, don't redevelop). Name the real difference honestly: ITIL's change authority
    is usually a CAB (change advisory board); Lakeshore's is Quality, specifically, as a required
    approver — a narrower, regulation-shaped version of the same gate.
  - **Problem management ↔ CAPA.** ITIL's problem management (root-cause analysis behind a
    recurring incident, a known-error record, a permanent fix) mapped onto CAPA's own root-cause-
    through-effectiveness-check structure (reference `quality-system-essentials`'s CAPA module,
    don't redevelop). Name the real difference: a known-error record in ITIL can simply document a
    workaround indefinitely; CAPA expects an actual effectiveness check with a stated criterion and
    closure — a stricter standard of "done."
- Does **not** own: CMDB/service-catalog mapping (m2); GRC crosswalk (m3).
- Scenario: apply both crosswalks to a concrete, freshly-invented (not locked-fact) change and a
  freshly-invented recurring incident at Lakeshore — drafter's choice of specifics, generic and
  plausible, consistent with house rules.

**m2 `itil-to-qse-crosswalk-cmdb-and-continual-improvement`.**
- Owns: three crosswalks.
  - **CMDB ↔ equipment/validated-system inventory.** A CMDB's configuration items (CIs) and their
    relationships mapped onto AABB's own equipment-qualification and validated-system inventory
    concept (QSE 3, Equipment — named/themed only, reused from `fda-and-aabb-in-practice`,
    confirmed real in `sources/aabb/qse-framework.md`) and onto BECS's own validation lifecycle
    (`csv-and-becs`, reference only).
  - **Service catalog ↔ quality-system scope.** A service catalog's own listing of what IT actually
    offers, to whom, at what service level, mapped onto a quality system's own defined scope of
    activities (which processes Lakeshore actually runs, and what quality commitments attach to
    each).
  - **Continual improvement ↔ process improvement.** ITIL's continual improvement register mapped
    onto AABB's own QSE 9 (Process Improvement Through Corrective and Preventive Action, named only,
    reused from `sources/aabb/qse-framework.md`).
- Does **not** own: change/problem crosswalk (m1, already built); GRC crosswalk (m3).
- Scenario: build a real, if partial, CMDB entry and service-catalog entry for the eQMS specifically
  — this is the first appearance of this course's own running artifact, picked up again in m4.

**m3 `itil-to-grc-crosswalk`.**
- Owns: three crosswalks against `grc-frameworks-and-risk-management`'s own already-built content
  (reference only, don't redevelop the RMF cycle itself).
  - **Service asset and configuration management ↔ Categorize/Select.** Knowing what you have and
    what it's worth (ITIL) mapped onto RMF's own Categorize step (determining adverse impact to
    confidentiality/integrity/availability) and Select step (sizing controls to that impact) —
    both already built in depth for the eQMS in `categorize-and-select-controls`.
  - **Continual improvement ↔ Monitor.** ITIL's standing commitment to keep checking mapped onto
    RMF's own Monitor step (already quoted in full in `risk-frameworks-side-by-side` and applied in
    `authorize-and-monitor`).
  - **Security management ↔ ISO 27001 Annex A.** ITIL's security management practice mapped onto
    ISO 27001's own Annex A control domains (paraphrase-only, reused from
    `reading-an-iso-27001-certificate` — change management, access control, supplier relationships,
    incident management, business continuity, asset management; no new control number invented).
- Does **not** own: QSE crosswalks (m1/m2); the actual service-catalog/CMDB build (m4).
- Scenario: apply all three mappings to the eQMS's own already-authorized state
  (`grc-frameworks-and-risk-management`'s own locked facts: moderate-impact categorization, the
  three control families, the POA&M'd access-review deficiency) — show that the eQMS's own RMF
  history already *is* this crosswalk's proof of concept, not a new exercise.

**m4 `building-an-inspection-ready-service-catalog-and-cmdb`.**
- Owns: synthesis only, no new citation. Build one real, concrete artifact — the eQMS's own service-
  catalog entry and CMDB entry, assembled from every crosswalk m1-m3 built — and show it actually
  survives three different reviewers reading it: an FDA investigator (would it support a 483
  response — reference `fda-and-aabb-in-practice`, don't redevelop), an AABB assessor (would it
  support a QSE-based assessment — reference `the-aabb-assessment-process`, don't redevelop), and a
  security assessor (would it support an ISO 27001 or SOC 2 review — reference
  `vendor-and-third-party-risk-management`, don't redevelop). The real teaching point: one
  well-built artifact, not three separate documents maintained in parallel for three audiences.
- Does **not** own: the metrics-translation layer (m5); the final capstone presentation (m6).

**m5 `translating-itsm-and-risk-metrics-for-executives`.**
- Owns: synthesis only, no new citation. Take a single underlying fact — reuse the eQMS's own
  locked POA&M entry (`grc-frameworks-and-risk-management`'s own locked finding: the quarterly
  access-review control, implemented and documented, not yet exercised on its first cycle, accepted
  as a named residual risk with a 30-day remediation commitment) — and present it two ways: in CIO
  language (risk-accepted, remediation-dated, tied to business impact) and in exec-quality-council
  language (a documented, time-bound nonconformance with an owner and a closure date, tied to
  AABB/FDA expectations) — showing both presentations describe the *same* underlying fact, worded
  for what each audience actually needs to act on it.
- Does **not** own: the service-catalog/CMDB artifact (m4, already built); the full capstone
  presentation (m6, which goes further and uses the Brookfield incident instead of the eQMS POA&M).

**m6 `presenting-it-service-and-risk-performance`.**
- This is the capstone module AND the curriculum's final module — write a genuine closing passage
  for this course AND for the entire curriculum.
- Owns: synthesis only, no new citation. The capstone exercise: present the Brookfield incident's
  full history — now built across three prior courses (`healthcare-security-and-privacy`'s own
  closed investigation; `vendor-and-third-party-risk-management`'s tiering/SOC 2/ISO 27001/BAA/
  change-notification treatment of the same vendor) — to the CIO and the exec quality council at
  once, in one presentation, using every crosswalk this course built (change/problem, CMDB/service
  catalog/continual improvement, GRC, the inspection-ready artifact, the dual-audience metrics
  translation). Do not reopen, alter, or re-resolve anything any prior course locked about that
  incident — the final breach determination stays final, the encryption status stays permanently
  unresolved, the root cause stays ranked exactly as `investigating-a-healthcare-data-incident` left
  it. This module's job is presentation and synthesis, not new resolution.
- Close with a genuine two-layer closing passage: first, this course's own five-module arc (change/
  problem → CMDB/continual improvement → GRC → the inspection-ready artifact → metrics translation
  → this capstone); second, and more significantly, **the entire curriculum's own arc**, named
  plainly — foundations, Track 1 (blood center operations), Track 2 (quality systems and FDA/AABB
  practice), Track 3 (CSV/BECS and data integrity), Track 4 (GRC, healthcare security/privacy,
  vendor risk), Track 6 (directing the quality analyst), and this capstone tying all of it into one
  shared vocabulary. State plainly that the curriculum is now complete — there is no next course —
  and that the Director's own job, from here, is applying what's been built, not waiting for the
  next module.

## Sourcing notes

**No new source needed for this entire course.** Every citation reuses an already-saved, already-
verified file:
- `sources/aabb/qse-framework.md` (QSE 3, QSE 4, QSE 9 — named/themed only).
- `sources/nist/sp-800-37r2-excerpt.md` (the seven RMF steps, already quoted in full elsewhere —
  reference, don't re-quote at length unless a specific module's own teaching point genuinely needs
  a short, already-verified fragment restated, the same discipline `poams-and-capas` and
  `vendor-change-notifications-and-your-own-change-control` already modeled for reusing a prior
  quote without re-deriving it).
- ISO/IEC 27001 — paraphrase-only, no new fetch, no new control number.
- Every Lakeshore-internal mechanic (change control, CAPA, document control, the eQMS's own RMF
  history, BECS's validation lifecycle, the Brookfield incident across three lenses) — reference
  only, never redeveloped from scratch.

**Still NOT verified anywhere in this curriculum. Don't assert:**
- Any specific ITIL 4 practice's own official, copyrighted definition text — ITIL's general
  vocabulary (change enablement, problem management, CMDB, service catalog, continual improvement,
  service asset and configuration management, security management) is used throughout this
  curriculum as the learner's own professional background knowledge, described in this curriculum's
  own words, never cited to a specific AXELOS/PeopleCert publication or page number.
- Any specific ISO 27001 Annex A control number (never verified anywhere in this curriculum).
- Any specific AABB Standard number (never verified for QSE 3/4/9 anywhere in this curriculum).

## Progress log

- **2026-10-09**: Course scoped (Phase 1/2) by the orchestrating session itself (per
  `create-course`'s instruction to run Phase 2 without delegating). Syllabus page
  (`courses/itsm-for-regulated-blood-services/index.qmd`, `order: 114`) and this plan written. No
  new source fetched — this course is pure synthesis across everything the curriculum already
  built and locked. Key decisions: `curriculum.md`'s own module list named four broad topics (ITIL-
  to-QSE crosswalk, ITIL-to-GRC crosswalk, an inspection-ready service catalog/CMDB, and executive
  metrics translation) against a 6-module budget in the Recommended Sequence table; split the
  ITIL-to-QSE crosswalk topic across two modules (m1: change/problem; m2: CMDB/service-catalog/
  continual-improvement) to fit the slot count without thinning any single crosswalk, and added a
  genuine capstone module (m6) as this curriculum's own final, closing module, distinct from m5's
  narrower metrics-translation exercise. The eQMS (from `grc-frameworks-and-risk-management`) is
  this course's own running artifact for its first five modules; the Brookfield incident (from
  `healthcare-security-and-privacy` and `vendor-and-third-party-risk-management`) is reserved for
  the capstone module specifically, where its now-three-lens history makes the richest possible
  closing exercise. No locked fact from any prior course is to be reopened or altered anywhere in
  this course — every module's guardrails say so explicitly. `.claude/skills/create-course/
  SKILL.md`'s running order-counter updated to 127 (this course used 114-126, verified by grep with
  no duplicates before assigning) — noted as the curriculum's final course; no further course is
  expected to continue after it.
  Next: build m1, `itil-to-qse-crosswalk-change-and-problem`.

- **2026-10-09**: Module 1, `itil-to-qse-crosswalk-change-and-problem` (`order: 115/116`),
  drafted and published. Built both crosswalks this module owns, concretely, against freshly
  invented scenarios (not reusing any BECS/eQMS/Brookfield locked fact): **(1) change
  enablement ↔ change control** — a routine vendor security patch to Lakeshore's reagent/
  supply inventory-tracking system (fresh, generic, quality-adjacent because it tracks lot
  numbers and expiration dates, but not a locked fact from any prior course) walked stage-for-
  stage through both ITIL's change enablement (RFC → risk/impact assessment → CAB authorization
  → implementation → PIR) and `quality-system-essentials`'s own five-stage change-control
  process, using that module's exact stage names verified by reading it in full: **change
  request → impact and risk assessment → approval → implementation → verification**. Named the
  honest difference plainly, per the plan's own guardrail: a CAB is a cross-functional body that
  could in principle outvote a dissenting member; Lakeshore's approval stage makes **Quality a
  required approver, not a notified party, and not one vote among several** — a narrower,
  regulation-shaped version of the same gate, not an identical process. **(2) Problem management
  ↔ CAPA** — a freshly invented recurring incident (repeated mid-shift lockouts from the
  inventory system at one satellite site, resolved each time with a password reset and never
  investigated further) walked through both ITIL's problem management (known-error record:
  problem, workaround, root cause, tracked in a KEDB) and `quality-system-essentials`'s own
  CAPA structure, using that module's exact four stages verified by reading it in full: **root
  cause analysis → corrective action → preventive action → effectiveness check** (the
  effectiveness check's four required pieces — measurable criterion, time window, data source,
  pre-agreed failure definition — stated explicitly, matching the CAPA module's own language).
  Named the honest difference: a known-error record can, in ITIL's own practice, document a
  workaround indefinitely without a hard requirement that it ever close; CAPA cannot — it stays
  open until a scheduled, independent effectiveness check with a pre-agreed criterion either
  passes, fails (CAPA reopened), or is extended, which the lesson states is a stricter, more
  final standard of "actually fixed," not just "tracked." No new citation introduced anywhere in
  the module — it references `change-control-for-regulated-systems` (21 CFR 606.100(b), AABB's
  Process Control QSE) and `capa-root-cause-to-effectiveness` (21 CFR 606.100(c)/606.171(f),
  AABB's Process Improvement QSE) by name, without re-quoting either module's citations or
  redeveloping their content, and states plainly that ITIL itself is never cited to a specific
  publication anywhere in this curriculum. One check-your-understanding question (Q3) lands on
  "this is NOT a regulatory requirement" — confirming neither AABB nor FDA requires Lakeshore to
  use ITIL vocabulary anywhere in its actual change-control or CAPA records. `resources.qmd`
  states plainly that no new sourcing was needed and links back to both
  `quality-system-essentials` modules, following the exact pattern
  `grc-frameworks-and-risk-management`'s `poams-and-capas/resources.qmd` set for a synthesis-
  only module. Lesson page is ~3,350 words of prose (TEACHING.md's 2,000–4,000-word target,
  counting only body text, not front matter/table markup). `quarto` is unavailable in this
  cloud session (per CLAUDE.md rule 6) — not rendered locally; the GitHub Action renders on
  push. Published via the `publish` skill to branch `claude/confident-brahmagupta-b499un`.
  Next: build m2, `itil-to-qse-crosswalk-cmdb-and-continual-improvement` (`order: 117/118`) —
  CMDB ↔ equipment/validated-system inventory, service catalog ↔ quality-system scope,
  continual improvement ↔ QSE 9 — the first module to pick up the eQMS as this course's own
  running artifact.

- **2026-10-09**: Module 2, `itil-to-qse-crosswalk-cmdb-and-continual-improvement`
  (`order: 117/118`), drafted and published. Built all three crosswalks this module owns,
  concretely, using the eQMS (electronic quality-management system) as this course's first
  running artifact, picked up again in m4. No new citation introduced anywhere in the module —
  it names AABB's QSE 3 (Equipment, explicitly extended to IT systems per
  `sources/aabb/qse-framework.md`) and QSE 9 (Process Improvement, titled "Process Improvement
  Through Corrective and Preventive Action" in an older AABB template per that same source
  file's own note) by theme only, no Standards text, no standard number, and references
  `csv-and-becs`'s validation lifecycle (validated state, periodic review, IQ/OQ/PQ,
  traceability matrix) by name without redeveloping it. **(1) CMDB ↔ equipment/validated-system
  inventory** — built an honest field-by-field comparison and named the real gap plainly: a
  CMDB's CI (configuration item) record tracks identity, version, and dependencies, but does
  not, in plain ITIL practice, carry a required qualification/validation-status field, where an
  AABB-governed equipment or system inventory entry is built around that field as its whole
  point. **(2) Service catalog ↔ quality-system scope** — built two concrete, partial artifacts
  side by side and used a deliberate, catchable inconsistency as the teaching device: the
  service-catalog entry (drafted by IT) lists document control as offered to all three sites,
  while the quality-system scope statement (owned by Quality) names document control in scope
  only for the central site and Brookfield, with Fairview's document control still under its
  existing paper-based process pending migration — consistent with, not contradicting,
  Fairview's already-established paper habit from `fda-and-aabb-in-practice`/
  `risk-frameworks-side-by-side`. **(3) Continual improvement ↔ process improvement (QSE 9)** —
  named the honest difference (ITIL's register can hold a purely aspirational/efficiency idea
  with no compliance stakes; QSE 9's own CAPA-linked process improvement is specifically about
  closing a gap a deviation, audit, or nonconformance actually found) and built a fresh,
  non-locked example: the eQMS's CAPA-entry screen requires the same lot/batch number to be
  re-keyed into three separate fields, logged as a continual-improvement register entry (owner:
  systems administrator; status: proposed, pending a build-effort estimate; review: next
  quarterly IT service review) and explicitly contrasted with what would turn it into an actual
  CAPA (an audit or investigation tracing a real transcription error to that same field design).

  **The exact eQMS CMDB entry built (module 4 builds on this directly):** CI name "eQMS
  (electronic quality-management system)"; CI type "Application"; current version "current
  production release"; owner (system) "systems administrator, on behalf of IT"; in production at
  "Lakeshore's central site, Brookfield, and Fairview"; depends on "the central identity/access
  system (authentication for all eQMS accounts across all three sites); each site's local network
  infrastructure; the underlying storage/backup system the eQMS's records are written to"; feeds/
  relied on by "Quality staff at all three sites, for CAPA tracking, document control, and
  internal-audit logging; site operations leadership, for document-control access"; qualification/
  validation status: explicitly left blank, flagged as "not a standard CMDB field," the exact gap
  crosswalk 1 names and module 4 is expected to fill. Note the entry explicitly does NOT assert
  any data interface between the eQMS and BECS — they're described as separate systems, since no
  such interface was established anywhere in `grc-frameworks-and-risk-management` or elsewhere;
  the eQMS replaced an older "BECS-*adjacent*" tool per `risk-frameworks-side-by-side`, which this
  module is careful to read as proximity, not integration.

  **The exact eQMS service-catalog entry built (module 4 builds on this directly):** service
  "eQMS"; provides "CAPA tracking, document control, internal-audit logging"; offered to "Quality
  staff and site operations leadership"; offered at "central site, Brookfield, and Fairview";
  service level "business-hours support; next-business-day response for access issues" — sitting
  next to the quality-system scope statement's own text (owned by Quality, not IT): "The eQMS is
  in scope for CAPA management and internal-audit logging across all three sites. The eQMS is in
  scope for document control at the central site and Brookfield. Fairview's document-control
  records remain under the site's existing paper-based process pending migration." The mismatch
  (service catalog claims document control at all three sites; scope statement names only two) is
  the deliberate, catchable inconsistency this module built — unresolved on purpose, left for
  module 4 to actually reconcile as part of building one artifact that survives all three
  reviewer lenses.

  **No `grc-frameworks-and-risk-management` locked eQMS fact was touched or contradicted**: the
  eQMS's moderate-impact categorization, its three control families (account and identity
  management, audit/logging, physical and environmental protection), and its POA&M'd access-
  review deficiency (owner: systems administrator; 30-day window; reviewed/accepted by: the
  Director) are referenced by name only where relevant (the "central identity/access system"
  dependency and the account-and-identity-management control family are consistent, not
  identical — the dependency is this module's own plausible CMDB addition, not a re-assertion of
  the control family itself) and never restated as if newly decided here. Lesson page is ~3,730
  words of prose (TEACHING.md's 2,000–4,000-word target). `quarto` is unavailable in this cloud
  session (per CLAUDE.md rule 6) — not rendered locally; the GitHub Action renders on push.
  Published via the `publish` skill to branch `claude/confident-brahmagupta-b499un`.
  Next: build m3, `itil-to-grc-crosswalk` (`order: 119/120`) — service asset/config management ↔
  RMF Categorize/Select, continual improvement ↔ Monitor, security management ↔ ISO 27001 Annex
  A — applied to the eQMS's own already-authorized RMF history, reference only, no new citation.

- **2026-10-09**: Module 3, `itil-to-grc-crosswalk` (`order: 119/120`), drafted and published. No
  new citation introduced — the module restates exactly ONE short, already-quoted-elsewhere
  fragment (the Categorize purpose statement, from `risk-frameworks-side-by-side` and
  `categorize-and-select-controls`), clearly marked as reused, and references Monitor's one-line
  action without re-quoting it a third time (it already appears in full in those same two
  modules). ISO/IEC 27001's Annex A domains are paraphrase-only, reusing the exact six general
  category names `reading-an-iso-27001-certificate` already established (access control, supplier
  relationships, change management, incident management, business continuity, asset management) —
  no new control number invented. Built all three crosswalks this module owns. **(1) Service
  asset/config management ↔ Categorize/Select** — framed as recognition, not new work: the eQMS's
  own CMDB entry from module 2 (blank "qualification/validation status" row, flagged there as "not
  a standard CMDB field") already has its answer sitting in a different document under a different
  name — `categorize-and-select-controls`'s own moderate-impact categorization and three-family
  control selection (account and identity management, audit/logging, physical and environmental
  protection), referenced accurately, not re-decided. **(2) Continual improvement ↔ Monitor** —
  also framed as recognition: `authorize-and-monitor`'s own five-part ongoing monitoring plan (the
  30-day remediation check, the standing quarterly cycle, periodic audit-log spot-checks, a fresh
  look on material change, the standing trigger to reopen the authorization) re-expressed field for
  field as a continual improvement register (idea/finding, owner, status, review cadence), in the
  same table shape module 2 used for its own CI register entry — with the honest distinction that
  every row here carries a named owner and a real consequence (an authorization reopening) if
  ignored, unlike an ordinary no-stakes backlog item. **(3) Security management ↔ ISO 27001 Annex
  A** — the one genuinely new crosswalk, explicitly framed as the Director's own hypothetical
  ("what if Lakeshore ever pursued ISO 27001 certification for the eQMS") and explicitly stated
  that Lakeshore has NOT decided to pursue this. Reasoned, domain by domain, against the eQMS's
  three RMF-selected control families: **account and identity management ↔ access control** named
  as a clean match; **audit/logging** named as *not* mapping cleanly to any single domain — treated
  honestly as a capability that feeds multiple domains (auditable access, incident detection)
  rather than forced into one; **physical and environmental protection** named as a partial fit at
  best against **asset management** (the closest of the six established domains, not a clean
  match, since this curriculum never established a domain literally named "physical and
  environmental security"); and **supplier relationships** and **business continuity** named
  plainly as domains with NO counterpart at all in the eQMS's existing RMF-selected controls,
  because Select was tailored narrowly to three specific CIA (confidentiality/integrity/
  availability) failure modes, not built as a comprehensive ISMS covering every domain a real
  certification would expect. Locked conclusion: real, genuine overlap on one domain, partial
  overlap on two, no coverage at all on two — RMF's narrower, impact-sized selection and ISO
  27001's broader ISMS scope are not interchangeable, and this module says so explicitly rather
  than overclaiming "basically already compliant."

  **No `grc-frameworks-and-risk-management` locked eQMS fact was touched or contradicted**: the
  moderate-impact categorization, the three control families, the quarterly-access-review
  deficiency (implemented/documented, not yet exercised on its first cycle), and the
  authorize/monitor outcome (accepted as a named, 30-day time-bound residual risk, with the
  five-part ongoing monitoring plan) are all referenced by name, exactly as `categorize-and-
  select-controls` and `authorize-and-monitor` built them, never re-decided or altered. No
  `reading-an-iso-27001-certificate` locked fact (the ISMS/Stage 1/Stage 2/surveillance-audit
  structure, the six general domain names, or the device-management vendor's own reasoned
  findings) was touched, reopened, or contradicted — only the six domain names were reused, applied
  for the first time to the eQMS itself rather than to that vendor. No new ITIL publication or page
  number was cited anywhere in the module. Lesson page is ~3,780 words of prose (TEACHING.md's
  2,000–4,000-word target, body text only). `quarto` is unavailable in this cloud session (per
  CLAUDE.md rule 6) — not rendered locally; the GitHub Action renders on push. Published via the
  `publish` skill to branch `claude/confident-brahmagupta-b499un`.
  Next: build m4, `building-an-inspection-ready-service-catalog-and-cmdb` (`order: 121/122`) —
  synthesis only, no new citation: assemble one real eQMS service-catalog entry and CMDB entry from
  every crosswalk m1-m3 built (including explicitly filling the CMDB's own blank qualification-
  status row this module pointed to, and reconciling the service-catalog/quality-scope Fairview
  mismatch module 2 left deliberately unresolved), and test it against an FDA investigator's, an
  AABB assessor's, and a security assessor's three different questions at once.

- **2026-10-09**: Module 4, `building-an-inspection-ready-service-catalog-and-cmdb`
  (`order: 121/122`), drafted and published. Pure synthesis, no new citation introduced anywhere
  — it references `categorize-and-select-controls` and `authorize-and-monitor`
  (`grc-frameworks-and-risk-management`), `the-aabb-assessment-process`,
  `fda-inspection-authority-and-outcomes`, and `warning-letters-and-recalls` (all
  `fda-and-aabb-in-practice`), and `reading-a-soc-2-report`/`reading-an-iso-27001-certificate`
  (both `vendor-and-third-party-risk-management`) entirely by name, redeveloping none of them.
  Scene: the Director, QA, and systems administrator sit down together to actually finish the
  artifact modules 2-3 built in pieces.

  **(1) Filled the CMDB's blank "Qualification/validation status" field** with a pointer, not a
  new qualification exercise — the exact teaching point the module built around. **Final field
  text:** "Categorized moderate-impact per RMF (reasoned through three CIA failure modes specific
  to this system). Three control families selected and implemented: account and identity
  management, audit/logging, and physical and environmental protection. Two confirmed operating
  as intended at Assess (audit/logging; physical and environmental protection). One — the
  quarterly access-review control, within account and identity management — accepted as a named,
  time-bound residual risk at Authorize, not a failure: implemented and documented, its first
  scheduled cycle tracked under a 30-day remediation window, now folded into a standing
  monitoring plan (ongoing quarterly cadence, periodic audit-log spot-checks, a standing trigger
  to reopen the authorization on material change). Authorization: active. Full file:
  `categorize-and-select-controls` and `authorize-and-monitor`." Every other CMDB field (CI name,
  type, version, owner, in-production sites, dependencies, feeds/relied-on-by) is carried forward
  unchanged from module 2's own entry — nothing else was touched.

  **(2) Reconciled the Fairview service-catalog/scope-statement mismatch** with both halves of
  the available resolution, not just one: corrected the service-catalog entry's false "document
  control at all three sites" claim to match the scope statement's own accurate text (document
  control in scope for central site and Brookfield only; Fairview's document-control records
  remain on the site's existing paper-based process), AND gave the underlying "pending migration"
  question a real, dated, owned action item for the first time — **Fairview document-control
  migration onto the eQMS: owner — systems administrator, with sign-off from the QA and
  Fairview's site operations lead; target — within two quarters; trigger to revisit if missed —
  next quarterly IT service review.** Explicitly named as Lakeshore's own operational choice, not
  a new regulatory requirement — a paper-based document-control process, properly controlled,
  remains a legitimate choice under AABB's framework. **Final reconciled service-catalog entry:**
  service "eQMS"; provides "CAPA tracking (all three sites); internal-audit logging (all three
  sites); document control (central site and Brookfield — see note)"; offered to "Quality staff
  and site operations leadership"; offered at "Central site, Brookfield, and Fairview (full eQMS
  access for CAPA tracking and audit logging at all three; document-control access follows the
  note below)"; service level "Business-hours support; next-business-day response for access
  issues"; note "Fairview's document control remains on the site's existing paper-based process.
  This is not an unexplained mismatch — see the dated action item [above]." The quality-system
  scope statement itself (Quality-owned) was not altered — it was already accurate; only the
  IT-owned service catalog needed correcting.

  **(3) Tested the reconciled artifact against three reviewers**, per the plan's own guardrail,
  referencing each by name, redeveloping none: an **FDA investigator** (`fda-inspection-
  authority-and-outcomes`, `warning-letters-and-recalls`) — satisfied: the qualification pointer
  answers "is this system qualified," and the reconciled catalog/scope-statement pair answers "do
  your own records agree," with the one remaining open item (the Fairview migration) itself
  tracked and dated rather than hidden or silently fixed. An **AABB assessor**
  (`the-aabb-assessment-process`) — satisfied: a self-identified, actively-managed gap (Fairview)
  grades differently than one an assessor finds cold, per that module's own teaching. A **security
  assessor** (`reading-a-soc-2-report`, `reading-an-iso-27001-certificate`) — **honestly NOT fully
  satisfied, and the module says so explicitly**: the artifact is strong partial evidence toward
  the one clean ISO 27001 Annex A match `itil-to-grc-crosswalk` already found (access control, via
  account and identity management), but does nothing to close the two domains that module already
  found with no counterpart at all in the eQMS's RMF-selected controls (supplier relationships,
  business continuity) — named again here as a real, standing boundary, not something this
  assembly closes. **Locked conclusion for m5/m6 to reuse:** one reconciled artifact satisfies an
  FDA investigator and an AABB assessor without a separate document built for either; it is strong
  but incomplete evidence for a full ISO 27001/SOC 2-style security review, for reasons named
  honestly, not glossed over.

  No `grc-frameworks-and-risk-management` locked fact (the moderate-impact categorization, the
  three control families, the quarterly-access-review deficiency, the 30-day window, the
  five-part monitoring plan) was altered — only cross-referenced, exactly as `authorize-and-
  monitor` left it. No `itil-to-grc-crosswalk` locked fact (the one clean ISO 27001 domain match,
  the two domains with no counterpart) was reopened or altered — only reapplied to test this
  module's own artifact. No `fda-and-aabb-in-practice` or `vendor-and-third-party-risk-
  management` locked identifier or fact was touched. Lesson page is ~3,180 words of prose
  (TEACHING.md's 2,000-4,000-word target, body text only). This course's own established pattern
  for a pure-synthesis module (no new citation) carried forward again: no separate citation
  decoder table — the note-on-citations section points back to the modules that already own each
  decoder and verbatim text. `quarto` is unavailable in this cloud session (per CLAUDE.md rule
  6) — not rendered locally; the GitHub Action renders on push. Published via the `publish` skill
  to branch `claude/confident-brahmagupta-b499un`.
  Next: build m5, `translating-itsm-and-risk-metrics-for-executives` (`order: 123/124`) —
  synthesis only, no new citation: take the eQMS's own locked POA&M entry (the quarterly
  access-review control, accepted as a named residual risk with a 30-day remediation commitment)
  and present it two ways — CIO language and exec-quality-council language — showing both describe
  the same underlying fact.
