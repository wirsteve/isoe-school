# `grc-frameworks-and-risk-management` — course plan

Read this whole file before drafting any module. Update the module table and append a progress
log entry after every module, same discipline as every other course in this curriculum.

## Finish line

Run a system or process through categorize→select→implement→assess→authorize→monitor, and track
remediation the way a POA&M does — then say in one sentence how that's the same motion as a
validation release and periodic review.

## Why this course exists, and what it must not re-teach

- **`risk-and-controls-vocabulary`** (foundation) already teaches likelihood/severity/
  detectability and inherent-vs-residual risk. Assume fluent; never re-derive.
- **`quality-system-essentials`'s `quality-risk-management`** already teaches ICH Q9(R1) in real
  depth: its four-stage process (Risk Assessment [Identification/Analysis/Evaluation] → Risk
  Control [Reduction/Acceptance] → Risk Communication → Risk Review), FMEA with RPN scoring, and
  Risk Ranking and Filtering. This course's module 1 names ICH Q9 only as the third point of
  comparison — one paragraph, pointing back to that module — never re-teaching the four stages or
  re-running an FMEA.
- **`csv-and-becs`** already teaches the validation lifecycle (IQ/OQ/PQ, periodic review, patch
  management under a validated state). Module 4 of this course draws the "authorization = release,
  monitoring = periodic review" parallel explicitly, referencing that lifecycle by name, never
  re-deriving IQ/OQ/PQ from scratch.
- **`directing-the-quality-analyst`** and `quality-system-essentials`'s CAPA module already teach
  what a CAPA is end to end (root cause through effectiveness check). Module 5 of this course
  compares a POA&M to a CAPA; it does not re-teach CAPA mechanics.

**Through-line characters, reused, not re-established:** the Director (learner, second person
"you"), the Quality Analyst ("she," competent, improving), the unnamed systems administrator
("he"). Locations: Lakeshore's central site, Brookfield, Fairview.

## This course's own scenario — locked once, here, for every module to share

Lakeshore is adopting a new, generic electronic quality-management system module — call it
**the eQMS** throughout this course, never a real product name — to centralize CAPA records,
document control, and internal-audit logs across all three sites in one place, replacing a mix
of the BECS-adjacent tools and paper processes (including some of Fairview's own paper practice,
named in `fda-and-aabb-in-practice` — this course may reference that paper practice as context
for why the eQMS matters, but does **not** resolve or alter anything `fda-and-aabb-in-practice`
already locked about Fairview). The eQMS is a new system, distinct from BECS itself — BECS stays
exactly as validated and governed as `csv-and-becs` and `data-integrity-and-records` already left
it; this course never reopens BECS's own locked facts (VAL-1203, VIA-0842, DEV-1147, CAPA-1147-A,
VRA-0219, DI-0301, DED-0458, LAB-07). The eQMS is this course's own, fresh running example,
walked through a full RMF-inspired categorize→select→implement→assess→authorize→monitor cycle
before go-live.

**Say this honestly, every module that touches it:** Lakeshore is not a federal agency and the
eQMS never receives an actual federal "Authorization to Operate." Lakeshore *borrows* RMF's
structure as its own internal risk-management methodology, voluntarily, the same way this
curriculum has already shown Lakeshore borrowing ICH Q9's structure and AABB's own accreditation
structure elsewhere. Never imply RMF is a legal requirement for a blood establishment.

No calendar years in the Lakeshore narrative. Never name a real vendor, product, OS, database,
or cloud-platform brand for the eQMS — describe it generically.

## Modules

| # | Slug | Finish line | `order:` | Status |
|---|---|---|---|---|
| — | (syllabus) | — | 81 | Published |
| 1 | `risk-frameworks-side-by-side` | Put NIST RMF, ISO 31000, and ICH Q9 next to each other and show they're the same underlying motion in three different vocabularies, issued by three very different kinds of body. | 82/83 | Published |
| 2 | `categorize-and-select-controls` | Apply RMF's Categorize and Select steps to the eQMS: determine its impact level, then select and tailor a control set sized to that, not a one-size-fits-all checklist. | 84/85 | Published |
| 3 | `implement-and-assess-controls` | Build the selected controls, then run an independent assessment of whether they actually work. | 86/87 | Published |
| 4 | `authorize-and-monitor` | Make and document the authorization decision (accepting a named residual risk), and build the ongoing monitoring plan — say in one sentence why this is the same decision as a validation release and periodic review. | 88/89 | Not started |
| 5 | `poams-and-capas` | Track every control gap to closure on a POA&M, then place it next to a CAPA and show they do the identical job in two vocabularies. | 90/91 | Not started |

The next course after this one continues at **92**. Update `create-course`'s SKILL.md when this
course's numbering is final (verify by grep with no duplicates before assigning, same discipline
as every prior course) — already done as part of Phase 2 scoping below.

## Module-by-module guardrails and sourcing

**m1 `risk-frameworks-side-by-side`.**
- Owns: a genuine side-by-side comparison of three frameworks, each correctly tiered:
  - **NIST SP 800-37 Rev 2** (`sources/nist/sp-800-37r2-excerpt.md`) — a U.S. federal government
    publication, public domain, safe to quote verbatim. Quote the seven RMF steps' own framing
    (Prepare, Categorize, Select, Implement, Assess, Authorize, Monitor) and the Categorize step's
    purpose statement, both verbatim from the saved excerpt. Say honestly that Prepare is Rev 2's
    own addition and that RMF is written for federal agencies — borrowed structure, not a legal
    requirement for Lakeshore.
  - **ISO 31000** — a paid international standard. Name it and describe its general risk-
    management-process themes (establishing context, risk assessment, risk treatment, monitoring
    and review, recording and reporting) in this course's own words only. Never quote its text.
    Its public listing page (`https://www.iso.org/standard/65694.html`) returns HTTP 403 from
    this environment's own proxy (confirmed ISO's own bot protection, not a dead link, the same
    issue `designing-an-internal-audit-program` hit with ISO 19011 — verify via Wayback Machine
    before linking, and disclose the same way that module's resources page did).
  - **ICH Q9(R1)** — already fully taught in `quality-risk-management`. Name it only as the third
    point of comparison; one paragraph, pointing back to that module, never re-deriving its four
    stages.
  - The actual comparison: all three frameworks run the same underlying motion — identify/assess
    risk, decide how to respond (control/treat), implement the response, verify it works, accept
    the residual risk (formally or informally), keep monitoring — expressed as 7, 6(ish, ISO
    31000's own named stages differ slightly, describe honestly), and 4 named stages
    respectively. Build a comparison table. Be honest about what's genuinely different, not just
    vocabulary: NIST RMF is federal-government-specific and produces a formal authorization
    decision; ISO 31000 is a general-purpose, industry-agnostic standard with no single
    authorization-style decision point; ICH Q9 is pharma/biologics-specific and already deeply
    embedded in this curriculum's own quality-risk-management content.
- Does **not** own: RMF's own step-by-step mechanics (Categorize/Select in m2, Implement/Assess in
  m3, Authorize/Monitor in m4) — introduce the steps' names and one-line purposes here, build the
  actual mechanics later.
- Scenario: the Director, prompted by the eQMS adoption decision (introduced fresh in this
  module), realizes Lakeshore has been using three different risk vocabularies in three different
  rooms (ICH Q9 in quality meetings, an unnamed ad hoc process for anything IT-security-flavored,
  nothing at all for a new system like the eQMS) and wants one framework to run the eQMS through,
  end to end. This module is the comparison that justifies choosing RMF's structure for that one
  job, without claiming the other two are wrong or unnecessary elsewhere.

**m2 `categorize-and-select-controls`.**
- Owns: RMF's Categorize step (quote its purpose statement verbatim from the saved excerpt;
  describe impact to confidentiality/integrity/availability as the actual categorization
  question, in Lakeshore's own terms — e.g., what happens if the eQMS's CAPA records were
  altered undetected (integrity), exposed (confidentiality), or unavailable during an audit
  (availability)) and the Select step (quote its one-line action verbatim; describe selecting and
  tailoring a set of controls — name "control families" as a concept from SP 800-53, per the
  saved excerpt's own reference to it, without inventing specific control numbers; use 2-3
  plausible, generically-named control examples — e.g., account/identity management, audit
  logging, physical and environmental protection — all real family names the saved excerpt itself
  names).
- Does **not** own: control implementation or assessment (m3); the authorization decision (m4).
- Scenario: the Director and QA walk the eQMS through Categorize (deciding it's a moderate- or
  high-impact system — drafter's choice, reasoned not asserted, since it holds CAPA/audit
  records that feed real regulatory and AABB-facing decisions) and Select (choosing a tailored
  control set, explicitly sized to that impact level, not copied wholesale from a template built
  for a lower-stakes system).

**m3 `implement-and-assess-controls`.**
- Owns: RMF's Implement step (quote its one-line action verbatim) and Assess step (quote its
  one-line action verbatim) — building the controls m2 selected, then having someone
  independent of that build assess whether they actually work. Draw the parallel to a validation
  assessment and to this curriculum's own established auditor-independence principle
  (`designing-an-internal-audit-program`'s rule that an auditor can't check their own work) —
  one line, don't redevelop that module's own content.
- Does **not** own: the authorization decision itself (m4); POA&M tracking of what the assessment
  finds (m5, though this module's assessment is what *produces* the deficiencies m5 tracks).
- Scenario: the eQMS's selected controls are implemented, then assessed by someone who didn't
  build them (the Director should apply the independence principle deliberately, naming it). The
  assessment finds at least one real, concrete deficiency (invent something plausible and
  generic — e.g., an access-review control that was implemented but not yet actually exercised
  on schedule) to carry forward into m4's authorization decision and m5's POA&M.

**m4 `authorize-and-monitor`.**
- Owns: RMF's Authorize step (quote its purpose/action verbatim, and quote the
  authorization-to-operate definition verbatim from the saved excerpt, attributed honestly to
  OMB Circular A-130 as the source NIST's own document cites) and Monitor step (quote its
  one-line action verbatim). The authorization decision itself: accepting a *named* residual
  risk (the deficiency m3's assessment found, if not yet fully remediated) on the record, the way
  an Authorizing Official does — not a vague "looks fine." Build the ongoing monitoring plan:
  what gets checked, how often, and what would trigger revisiting the authorization.
  **Explicitly say, in one sentence, why this is the same decision as a validation release
  followed by periodic review** — this is the module's single most load-bearing sentence, the
  one the course's own finish line names directly.
- Does **not** own: POA&M mechanics (m5, though this module's accepted-and-not-yet-remediated
  deficiency is exactly what becomes a POA&M entry there).
- Scenario: the Director, as Lakeshore's own version of an authorizing official, reviews the
  eQMS's assessment results and either accepts the one remaining deficiency as a documented,
  time-bound residual risk (with a POA&M entry to follow in m5) or requires it fixed before
  go-live — drafter's choice, reasoned, logged in the progress log for m5 to build on
  consistently.

**m5 `poams-and-capas`.**
- Owns: building a POA&M entry for the eQMS's own open deficiency (quote the POA&M discussion
  verbatim from the saved excerpt — what it includes: planned actions, resources, milestones,
  scheduled completion dates, authorizing-official review) and placing it next to a CAPA
  (reference `quality-system-essentials`'s CAPA module by name, one line, don't redevelop its
  mechanics) to show the parallel explicitly: both are a prioritized, dated, owned remediation
  record for a known gap, tracked to a real closure date, reviewed by someone with authority to
  accept or reject the plan — same motion, different vocabulary, different originating
  framework.
- This is the course's final module — write a genuine closing passage per this curriculum's
  established practice: summarize the arc of all five modules, state plainly that Lakeshore now
  has one shared vocabulary for "here's a known gap, here's the plan, here's the date, here's who
  signed off on it" that spans security risk (POA&M) and quality risk (CAPA) alike, and
  forward-point to `healthcare-security-and-privacy` and `vendor-and-third-party-risk-management`
  (which will each use this course's RMF vocabulary again) and the Track 5 capstone
  `itsm-for-regulated-blood-services`.
- Does **not** own: any new regulatory content — synthesis and application only.

## Sourcing notes (read before citing anything)

**Verified and saved this session:**
- `sources/nist/sp-800-37r2-excerpt.md` — NIST SP 800-37 Rev 2, EXCERPT (the seven RMF steps and
  purpose statements, Categorize's purpose statement, the Select/Implement/Assess/Authorize/
  Monitor one-line actions, the authorization-to-operate definition sourced to OMB A-130, and the
  POA&M Task A-6 discussion). U.S. government work, public domain — safe to quote verbatim,
  unlike ISO 31000 or AABB Standards. Full task-by-task tables and national-security-system
  material NOT saved — don't assert detail beyond what's in the excerpt.

**Still NOT verified. Don't assert:**
- ISO 31000's own text — a paid standard, never independently fetched or quoted in this
  curriculum. Name its themes only, in this course's own words, the same handling as AABB
  Standards/GAMP 5/ISO 19011 elsewhere.
- NIST SP 800-53's actual control catalog (specific control numbers/text) — not fetched. Only
  "control families" as a *concept*, and the handful of real family names SP 800-37 itself
  names in the saved excerpt, may be used. Never invent a specific control number (e.g., don't
  write "AC-2" unless it is independently fetched and verified first).
- Any claim that RMF, an ATO, or a POA&M is a legal requirement for a private blood establishment
  — it is not, and no module should imply otherwise.

## Progress log

- **2026-10-09**: Course scoped (Phase 1/2) by the orchestrating session itself (per
  `create-course`'s instruction to run Phase 2 without delegating). Syllabus page
  (`courses/grc-frameworks-and-risk-management/index.qmd`, `order: 81`) and this plan written.
  New source fetched and saved: NIST SP 800-37 Rev 2 (Risk Management Framework), EXCERPT, direct
  PDF download and verbatim text extraction (U.S. government work, public domain — the first
  source in this curriculum safe to quote verbatim without any copyright caveat, unlike AABB
  Standards/GAMP 5/ISO standards). ISO 31000's own public listing page confirmed reachable via a
  recent Wayback Machine snapshot after a direct curl returned HTTP 403 (ISO's own bot
  protection), the same pattern `designing-an-internal-audit-program` hit with ISO 19011.
  `sources/INDEX.md` updated. Key decisions: five modules matching `curriculum.md`'s own module
  list; a fresh, invented running example — a new, generic "eQMS" (electronic quality-management
  system module) Lakeshore is adopting — chosen deliberately instead of reusing BECS itself, so
  this course doesn't reopen `csv-and-becs`/`data-integrity-and-records`'s own locked facts; the
  eQMS is explicitly NOT a federal system and never receives an actual federal ATO — Lakeshore
  borrows RMF's structure voluntarily, the same pattern this curriculum already used for ICH Q9
  and AABB's own accreditation structure. `.claude/skills/create-course/SKILL.md`'s running
  order-counter updated to 92 (this course used 81-91, verified by grep with no duplicates before
  assigning).
  Next: build m1, `risk-frameworks-side-by-side`.

- **2026-10-09**: Module 1, `risk-frameworks-side-by-side` (`order: 82/83`), built and published.
  Scenario: the eQMS planning meeting surfaces two disconnected risk conversations (QA's fluent ICH
  Q9 reasoning on the CAPA-record migration; the systems administrator's informal, undocumented
  access-control judgment) — the gap that motivates borrowing RMF's structure for the eQMS, end to
  end, voluntarily. Quoted verbatim from `sources/nist/sp-800-37r2-excerpt.md`: the Figure 2
  five-step framing (Select/Implement/Assess/Authorize/Monitor), the nonsequential-ordering note,
  and both the Prepare and Categorize purpose statements (Prepare named honestly as Rev 2's own
  addition; Categorize's purpose statement reused lightly here and left for m2 to actually apply).
  ISO 31000 named and described only in this course's own words (establishing context, risk
  assessment, risk treatment, monitoring and review, recording and reporting), explicitly hedged as
  not a confident exact enumeration since the standard itself was never read. ICH Q9(R1) named only
  as the third comparison point, one paragraph, pointing back to `quality-risk-management`. Built a
  genuine "same motion, three vocabularies" mapping table showing where the three frameworks
  diverge, not just differ in vocabulary (RMF's single named Authorize decision point; ISO 31000's
  lack of one, being general-purpose; ICH Q9's pharma/biologics scope). One check-your-understanding
  question lands on "this is NOT a legal requirement" (RMF/ATO has no legal force over Lakeshore).
  Sourcing verified this session: NIST PDF curl-checked directly, returns HTTP 200
  (`https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-37r2.pdf`). ISO 31000's
  listing page re-confirmed HTTP 403 direct (ISO's own bot protection) and reachable via the
  Wayback Machine's availability API (live snapshot, HTTP 200, captured 2026-10-01) — disclosed in
  `resources.qmd` the same way `designing-an-internal-audit-program` handled ISO 19011. No
  `csv-and-becs`/`data-integrity-and-records` locked facts touched; Fairview's paper practice
  referenced only in passing, not resolved. Word count: ~4,100 words for the lesson page.
  Next: build m2, `categorize-and-select-controls`.

- **2026-10-09**: Module 2, `categorize-and-select-controls` (`order: 84/85`), built and published.
  Scenario: the QA and systems administrator surface three concrete eQMS failure questions (a CAPA
  record altered undetected after closure; an open CAPA visible across sites before it's ready; the
  eQMS or a specific audit log unreachable the week an AABB assessor asks for it) — the
  confidentiality/integrity/availability question named directly, not abstractly. Quoted verbatim
  from `sources/nist/sp-800-37r2-excerpt.md`: Categorize's purpose statement (reused from m1, now
  actually applied) and Select's one-line action (the same line already quoted in full as part of
  m1's Figure 2 passage, reused here alone per the plan's instruction not to requote the whole
  passage). Categorization reached: **moderate-impact** — reasoned, not asserted, on the grounds
  that the eQMS's worst plausible failure (an undetected altered CAPA record, cross-site exposure of
  an in-progress record, or an unreachable audit log during an active assessment) is serious
  regulatory/reputational exposure across all three sites, but short of the loss-of-life or
  organization-ending stakes a true high-impact system would carry; explicitly flagged that a
  reasonable reviewer could argue high-impact instead, and named one concrete condition (the eQMS
  becoming the *sole* system of record with no other copy of a given entry) that would be real
  grounds to revisit the categorization upward. Control families named as concepts only, per the
  saved excerpt's own reference to SP 800-53 (never fetched, no control numbers invented): account
  and identity management (mapped to the confidentiality/access question and the systems
  administrator's module-1 access-control worry), audit/logging (mapped to the integrity question —
  detecting, not just preventing, alteration), and physical and environmental protection (mapped to
  the availability question, naming wherever the eQMS's infrastructure sits generically). Explicit
  callback (one paragraph, not re-argued) that RMF/categorization/ATO remain Lakeshore's own
  voluntary methodology, never a federal requirement. No `csv-and-becs`/`data-integrity-and-records`
  locked facts touched. Does not own control implementation/assessment (m3) or the authorization
  decision (m4) — neither was drafted here. Sourcing verified this session: NIST PDF curl-checked
  directly, returns HTTP 200 (same URL as m1, re-verified, not re-fetched as a new source — no new
  independent source was fetched this module since all new content was application of the already-
  saved excerpt). Word count: ~3,100 words for the lesson page (markdown word count including front
  matter and headings).
  Next: build m3, `implement-and-assess-controls`.

- **2026-10-09**: Module 3, `implement-and-assess-controls` (`order: 86/87`), built and published.
  Scenario: six weeks after Select, the systems administrator reports all three control families
  built and hands over a one-page summary; the Director notices the access-review schedule's first
  review date already passed with no review run, which becomes the scene that motivates the
  Assess step. Quoted verbatim from `sources/nist/sp-800-37r2-excerpt.md`: Implement's one-line
  action ("Implement the controls and describe how the controls are employed within the system
  and its environment of operation") and Assess's one-line action ("Assess the controls to
  determine if the controls are implemented correctly, operating as intended, and producing the
  desired outcomes with respect to satisfying the security and privacy requirements") — both
  reused as single lines from the Figure 2 passage already quoted in full in module 1, per the
  plan's instruction not to requote the whole passage. **What actually got built** (concrete, not
  just named): account and identity management — every eQMS account across all three sites tied to
  a named individual and role (no shared logins), a documented request/approval step for new
  access, and a quarterly access-review cycle owned by the systems administrator; audit/logging —
  the eQMS's built-in audit-logging feature turned on across all three sites, capturing who/what/
  when for every CAPA, document-control, and audit-log-entry change, retained at least as long as
  the underlying records; physical and environmental protection — written, dated confirmation
  obtained from the (unnamed, generic) hosting facility that it provides backup power, fire
  suppression, and controlled physical access to the server room. Implement's own documentation
  requirement applied explicitly: each of the three families now has a written "how it operates"
  description (owner, trigger, evidence produced), not just a verbal understanding. **Independent
  assessment**: handed to the Quality Analyst specifically because she didn't build any of the
  three families, applying (one-line callback, not redeveloped) `designing-an-internal-audit-
  program`'s auditor-independence rule that the person checking the work can't be the person who
  did it. Audit/logging and physical/environmental protection both assessed as implemented
  correctly, operating as intended, and producing the desired outcomes. Account and identity
  management assessed as implemented correctly and documented, but **NOT yet verified as
  operating as intended** — its first scheduled quarterly access review never actually ran; the
  due date had already passed by the time the QA assessed it.
  **LOCKED DEFICIENCY FOR MODULES 4-5 (verbatim as stated in the lesson):** "the quarterly eQMS
  access-review control is implemented and documented, but has not yet been exercised on its first
  scheduled cycle." This is the one open item m4's authorization decision must address (accept as
  a named, time-bound residual risk, or hold go-live until it closes — drafter's choice when m4 is
  built) and the one open item m5's POA&M entry is built around. No new deficiency should be
  invented in m4 or m5 — this is the only one. No `csv-and-becs`/`data-integrity-and-records`
  locked facts touched. Does not own the authorization decision (m4) or POA&M mechanics (m5) —
  neither was drafted here; the assessment stops at naming the deficiency, nobody "accepts" it in
  this module. Sourcing verified this session: NIST PDF curl-checked directly, returns HTTP 200
  (same URL as m1/m2, re-verified, not re-fetched as a new source — no new independent source was
  needed since all new content applies the already-saved excerpt). Word count: ~2,655 words for
  the lesson page (markdown word count including front matter and headings).
  Next: build m4, `authorize-and-monitor`.
