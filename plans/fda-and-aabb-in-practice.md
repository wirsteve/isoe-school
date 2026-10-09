# `fda-and-aabb-in-practice` — course plan

Read this whole file before drafting any module. Update the module table and append a progress
log entry after every module, same discipline as every other course in this curriculum.

## Finish line

Design a defensible internal audit program, prepare a system or process for an FDA inspection or
AABB assessment, and respond to a 483 observation.

## Why this course exists, and what it must not re-teach

Three courses already touch adjacent ground. Read each boundary before drafting:

- **`quality-system-essentials`'s `deviations-and-nonconformances`** already teaches 606.171's
  full reportability test (the two-prong "deviation that may affect safety/purity/potency" +
  "involves distributed product" test) and its 45-calendar-day reporting clock, sourced from
  `risk-and-controls-vocabulary` (a foundation) where 606.171 was first fully quoted. That
  module's own text says explicitly: "Filing Form FDA-3486 itself — the BPDR's filing mechanics —
  belongs to a later course; this module stops at the determination." **This course's module 3 is
  that later course.** Never re-derive the reportability test or re-quote the 45-day clock at
  length — one line of reference is enough. Own the filing mechanics instead: who reports (606.171(a)),
  how (Form FDA-3486, (d)), where (CBER, paper or electronic, (e)), and how this section relates
  to other FDA regulations ((f)).
- **`quality-system-essentials`'s `internal-audits-and-management-review`** already teaches what
  an internal audit *is* (independent verification that practice matches documentation) and what
  management review *is* (periodic leadership review of aggregate quality-system performance).
  It does not develop auditor independence/competency criteria, risk-based audit scheduling
  mechanics, evidence-sampling methodology, or a formal nonconformance grading scale — **this
  course's module 5 builds that program-design layer on top**, assuming the learner already knows
  what an audit and a management review are for.
- **`directing-the-quality-analyst`'s `escalation-criteria`** already teaches when an event must
  reach the Director (FDA-reportable events, a confirmed breach, etc.) — don't re-teach escalation
  triggers; this course assumes that judgment is already built and moves straight to the mechanics
  of actually dealing with FDA and AABB once something has escalated or a scheduled review arrives.

**Through-line characters, reused, not re-established:** the Director (learner, system-owner),
the Quality Analyst ("she," competent, improving), the systems administrator ("he," unnamed).
Locations: Lakeshore's central site, Brookfield and Fairview. **VAL-1203, VIA-0842, DEV-1147,
CAPA-1147-A, VRA-0219 (all from `csv-and-becs`) and DI-0301, DED-0458, LAB-07 (all from
`data-integrity-and-records`) are closed or ongoing history from earlier courses. This course
reuses their *outcomes* as background and, in module 6, puts the still-open ones in front of a
reviewer — it does not reopen or alter any locked fact from either course.**

## This course's own scenario

Lakeshore's next AABB reassessment cycle, named in `data-integrity-and-records`'s own scenario as
"on the calendar" while DI-0301 ran, is now close enough to have a real timeline (weeks away, no
calendar year, consistent with this curriculum's convention). Separately, it's also time in
Lakeshore's own inspection history for a **routine** FDA inspection (not a for-cause one — pick
routine deliberately, since "routine vs. for-cause" is module 1's own teaching point and a
routine cycle is the more common, more widely applicable case to teach from). The Director has to
get Lakeshore ready for both, using everything DI-0301 already surfaced:

- **DED-0458**'s still-open "accurate" ALCOA letter (from `data-integrity-and-records` module 1).
- **LAB-07**'s documented-fitness-for-use gap (module 4) and its split pH-meter/dormant-FT-IR
  finding.
- **The cumulative deferred-donor record's monthly-floor-vs-real-risk finding** (module 6) —
  whether Lakeshore decided to go faster than the regulatory floor, and if so, what it decided,
  is a live detail a later module's drafter may specify once (log it in the progress log so later
  modules in this course stay consistent) — don't leave it ambiguous across multiple modules of
  this course.

No calendar years anywhere. Never name a real BECS vendor, product, OS, database, or instrument
brand — all already-established conventions this course continues.

## Modules

| # | Slug | Finish line | `order:` | Status |
|---|---|---|---|---|
| — | (syllabus) | — | 68 | Published |
| 1 | `fda-inspection-authority-and-outcomes` | Name what FDA's inspection authority actually lets an investigator do and ask for, explain Form FDA 483's real purpose and legal weight, and name the three possible outcomes an inspection can end in. | 69/70 | Not started |
| 2 | `warning-letters-and-recalls` | Explain when a 483 escalates into a Warning Letter, and sort any product problem into the right recall classification (Class I, II, or III) using FDA's own health-hazard test. | 71/72 | Not started |
| 3 | `filing-a-biological-product-deviation-report` | Pick up exactly where `deviations-and-nonconformances` left off (the reportability determination) and finish the job: file the report on the right form, to the right office, in the right window. | 73/74 | Not started |
| 4 | `the-aabb-assessment-process` | Walk Lakeshore through both phases of an AABB reassessment (self-assessment and on-site) and say precisely what an assessor expects that an FDA investigator doesn't. | 75/76 | Not started |
| 5 | `designing-an-internal-audit-program` | Build the program an internal audit needs to actually hold up: auditor independence/competency, risk-based scheduling, real evidence sampling, and a nonconformance grading scale with teeth. | 77/78 | Not started |
| 6 | `mock-inspections-and-presenting-it-becs-evidence` | Put everything this course (and `csv-and-becs`/`data-integrity-and-records`) taught in front of a reviewer who's actually in the room, and resolve, out loud, what's still open from `data-integrity-and-records`. | 79/80 | Not started |

The next course after this one continues at **81**. Update `create-course`'s SKILL.md when this
course's numbering is final (verify by grep with no duplicates before assigning, same discipline
as every prior course).

## Module-by-module guardrails and sourcing

**m1 `fda-inspection-authority-and-outcomes`.**
- Owns: 21 U.S.C. 374(a)(1) (quote the core authority sentences from `sources/usc/21-usc-374.md`
  — entry and inspection authority, what an inspection may extend to, what it may NOT extend to
  — financial/sales/pricing/personnel/research data, named exclusions); 374(b)(1) (the written
  inspection report requirement — Form 483's actual statutory basis, quote in full); 374(c)
  (sample receipts, quote briefly); 374(h)(1) (the one place "for-cause inspection" is actual
  statutory language, device-establishment-specific — name this honestly as a narrow textual
  anchor, not a general statutory definition); Form 483 itself, described from FDA's own public
  page (`sources/fda-guidance/inspection-observations-page.md`, quote its own description
  verbatim) — what it is, when it's issued, that it is not a final agency determination; the
  three post-inspection outcomes, **NAI/VAI/OAI**, verified via
  `sources/fda-guidance/cder-gcp-inspections-outcomes-2022-excerpt.md` **with its scope caveat
  stated explicitly in the lesson** (that source is GCP/clinical-trial-specific; the
  classification scheme itself is general FDA practice, the specific slide content is not
  blood-establishment-specific and must not be presented as such). "Routine vs. for-cause" as
  **FDA operational vocabulary**, not a single universally-defined statutory or regulatory term
  — say this honestly, perhaps the single most important tier-accuracy point in this module.
- Does **not** own: Warning Letters, recalls (m2); BPDR filing (m3); AABB's own assessment
  process (m4, a completely separate, non-FDA, voluntary accreditation process — keep the two
  clearly distinct the whole course, this module's a good place to draw that line once).
- Scenario: Lakeshore's routine FDA inspection is announced (or, if the drafter prefers, framed
  as "due" per Lakeshore's own inspection history — keep it routine, not for-cause). Walk through
  what the investigator can actually ask to see (tying back lightly to BECS records and physical
  facility records established across this curriculum, no new invented records needed) and what's
  off-limits (financial/pricing/personnel data). A 483 is issued with a small number of
  observations (invent 1-2 plausible, generic ones consistent with this curriculum's established
  facts — e.g., something adjacent to LAB-07's documented-fitness-for-use gap, already a real,
  standing finding from `data-integrity-and-records` — using it here is a strong continuity
  moment, not a new fact). End with the question of which outcome (NAI/VAI/OAI) this inspection
  likely lands in, left as live tension for module 2 to carry forward if useful, or resolved here
  if the drafter prefers a clean module boundary (drafter's choice, log it).

**m2 `warning-letters-and-recalls`.**
- Owns: Warning Letters — described from the verified source (`cder-gcp-inspections-outcomes-2022-excerpt.md`'s OAI/Warning-Letter slide, with the same scope caveat restated briefly): public
  (redacted), informal and advisory, an opportunity to improve compliance, often followed by a
  follow-up inspection. Be explicit that a Warning Letter is **not itself a formal legal
  action** — it's advisory, a step before one, consistent with the source's own "informal and
  advisory" description. Recalls, developed in real depth for the first time in this curriculum:
  21 CFR 7.3's definitions (quote in full or near-full) — **recall** vs. **market withdrawal**
  (minor/no violation) vs. **stock recovery** (never left the firm's control) — three genuinely
  different things people conflate; **recall classification**, Class I/II/III, quoted exactly
  (reasonable probability of serious adverse health consequences or death; temporary/reversible
  consequences or remote probability of serious ones; not likely to cause adverse health
  consequences, respectively). 7.40 (recall policy — voluntary, an alternative to FDA-initiated
  court action/seizure, quote the key framing sentences). 7.41 (health hazard evaluation factors
  — quote the six-factor list, used to actually *derive* a classification rather than guess one).
  7.46 (firm-initiated recall — the nine pieces of information FDA wants when a firm recalls on
  its own initiative, quote the list; note explicitly that recall classification is FDA's call,
  not the firm's, even for a firm-initiated recall).
- Does **not** own: BPDR filing (m3, a distinct, blood-specific reporting duty — a recall and a
  BPDR can both apply to the same event, but they're separate obligations; say this once, don't
  develop it twice); AABB's own process (m4).
- Scenario: a plausible, generic blood-component recall scenario (invent one consistent with this
  curriculum's conventions — e.g., units distributed before a reference-table or labeling issue
  was caught, echoing DEV-1147's shape from `csv-and-becs` *without* reopening or altering
  DEV-1147 itself — a new, distinct event). Walk the health-hazard-evaluation factors to actually
  reach a classification (Class I, II, or III — drafter's choice, with reasoning shown, not
  asserted) rather than naming one and moving on.

**m3 `filing-a-biological-product-deviation-report`.**
- Owns: 606.171(a) ("Who must report" — quote in full, including the "arrange for another person
  to perform a... step" clause, since this applies directly to any contracted/outsourced step in
  Lakeshore's pipeline); **606.171(d) and (e)**, quoted in full — Form FDA-3486, filed to CBER, in
  paper (addressed per 600.2(a), named only, not independently sourced) or electronic format via
  CBER's web-based application, with the BPDR-enclosed notation for paper filings. **This is the
  new ground this module exists to cover** — the actual filing mechanics `deviations-and-
  nonconformances` explicitly deferred. 606.171(f) ("How does this regulation affect other FDA
  regulations" — quote in full: supplements, doesn't supersede; applies even to deviations not
  required to be reported, which should still be investigated under Parts 211/606/820). 606.171(c)'s
  45-day clock: **reference only, one line, point back to `risk-and-controls-vocabulary` and
  `deviations-and-nonconformances` where it's already fully taught** — never re-quote or
  re-derive.
- Does **not** own: the reportability test itself (606.171(b), already fully taught elsewhere —
  one-line reference only, the test has already been applied to a locked scenario fact in
  `deviations-and-nonconformances` and should not be re-litigated here); CAPA mechanics
  (`capa-root-cause-to-effectiveness`, already built).
- Scenario: pick up a reportability determination already reached in an earlier course (don't
  invent a brand-new deviation from scratch if a usable one already exists and isn't closed in a
  way that contradicts reuse — check `deviations-and-nonconformances` and
  `reviewing-deviations-and-capas` for a determination that was left at "reportable" without its
  filing having been shown) OR invent a new, small, clearly-reportable event if reusing an old one
  risks contradicting locked facts (drafter's judgment, log which path taken). Either way, the
  module's actual teaching content is the filing walkthrough: which form, who signs/submits it,
  paper vs. electronic, where it goes, and how this duty sits alongside (not instead of) a
  possible recall (m2) for the same event if the deviation involves distributed product with a
  real health hazard.

**m4 `the-aabb-assessment-process`.**
- Owns: AABB's own public accreditation-process description, developed in real depth for the
  first time in this curriculum (`sources/aabb/accreditation-process.md`, safe to quote directly
  — it's AABB's own public program description, not Standards text): the two phases (self-
  assessment, then on-site assessment); **self-assessment performed in APEX**, AABB's online
  accreditation portal; AABB reviews and approves the self-assessment before on-site proceeds;
  accreditation achieved only upon successful completion of the on-site assessment **including
  resolution of any nonconformances**; the expectation that "all standards are addressed in
  policies, processes and procedures (PPPs), and that PPPs are followed as written" (quote
  directly); the two-year on-site reassessment cycle once accredited; the 6-month minimum
  operating history before a first accreditation can begin (useful context, not directly
  applicable to Lakeshore's reassessment scenario, name briefly). **Draw the FDA-vs-AABB contrast
  explicitly and honestly**: AABB accreditation is **voluntary, industry-run, and an assessor
  checks policies/processes/procedures against AABB Standards** (named/paraphrased only, no
  Standards text quoted — consistent with every AABB reference in this curriculum); FDA inspection
  is **mandatory, government-run, and an investigator checks facility/records/practice against
  binding federal regulation**. The two overlap in subject matter (the same quality system gets
  reviewed by both) but differ completely in legal character, voluntariness, and what "failing"
  actually means (a 483/Warning Letter/OAI classification vs. an AABB nonconformance that blocks
  accreditation until resolved).
- Does **not** own: FDA's own inspection authority/outcomes (m1, already built — a one-line
  contrast is fine, don't redevelop); internal-audit program design (m5, though AABB's own PPP-
  compliance expectation is a natural bridge into "how do you actually verify PPPs are followed as
  written" that m5 then builds out).
- Scenario: Lakeshore's self-assessment phase in APEX surfaces some of the same findings DI-0301
  already found independently (a nice continuity point — AABB's own self-assessment tooling and
  Lakeshore's own internal data-integrity self-assessment converging on the same gaps is a strong,
  honest teaching moment about why internal self-assessment matters even before an external one
  arrives). Walk through what AABB's on-site assessment would actually probe that an FDA
  inspection wouldn't (and vice versa) using LAB-07's and the deferred-donor-record findings as
  concrete examples.

**m5 `designing-an-internal-audit-program`.**
- Owns: the program-design layer `internal-audits-and-management-review` left unbuilt, developed
  as **industry practice** (ASQ's Certified Quality Auditor body of knowledge, described in this
  course's own words, never quoted or cited by section/exam-objective number, consistent with how
  this curriculum handles GAMP 5 and AABB Standards): **auditor independence** (an auditor should
  not audit their own work or a process they directly own — the same principle this curriculum
  has used for QC-unit/release independence elsewhere, applied here to internal audit specifically);
  **auditor competency** (training, experience, and demonstrated understanding of both the process
  being audited and audit technique itself — not just "someone available that day"); **risk-based
  audit scheduling** (higher-risk processes/sites audited more frequently — a direct callback to
  `quality-risk-management`'s FMEA/risk-ranking-and-filtering concept already built in QSE, one
  line, don't redevelop); **evidence sampling** (an audit can't check every record, so a defensible
  sample size and selection method matters — describe the general principle: large enough and
  random/representative enough that a clean sample result actually supports a conclusion about the
  whole population, not a cherry-picked handful); **nonconformance grading** (a scale — e.g.
  critical/major/minor, or similarly named tiers, your choice of exact labels since this is
  industry practice not a cited standard — that sorts findings by severity and sets different
  required response timelines and escalation paths per tier, tied back to this curriculum's
  established gap-triage vocabulary from `directing-the-quality-analyst`'s cold-read test, one
  line, don't redevelop that instrument either).
- Does **not** own: what an audit or management review fundamentally *are* (already built in
  `internal-audits-and-management-review` — assume the learner knows this, build on it, don't
  re-explain it from scratch).
- Scenario: the Director is asked to strengthen Lakeshore's own internal audit program ahead of
  the AABB reassessment and in light of DI-0301's findings — design (at a real, concrete level,
  not just named) an auditor-independence rule, a risk-based schedule, a sampling approach, and a
  grading scale, applying each to Lakeshore's actual situation (LAB-07, the deferred-donor-record
  cadence question, Fairview's paper-file practice) rather than discussing them abstractly.

**m6 `mock-inspections-and-presenting-it-becs-evidence`.**
- This is the course's final module — write a genuine closing passage, per this curriculum's
  established practice.
- Owns: a worked mock-inspection/mock-assessment exercise that actually puts the Director in the
  room, presenting IT/BECS evidence to a reviewer (either an FDA investigator or an AABB assessor,
  or both in turn — drafter's choice how to structure it). **This module's real job: resolve, out
  loud, in the scenario, what DI-0301 left open in `data-integrity-and-records`** — DED-0458's
  "accurate" ALCOA letter, LAB-07's documented-fitness-for-use gap, and the deferred-donor-record
  cadence decision (if m4 or an earlier module in this course hasn't already specified what
  Lakeshore decided, this module should — log whichever decision is made so it's consistent going
  forward). These don't have to resolve to "everything was fine" — a defensible, well-presented
  finding that's still open but properly documented and being actively worked is itself a
  successful outcome to model, consistent with this curriculum's honesty conventions (an open,
  well-documented finding is not a failure).
- Combine everything: FDA's inspection authority and Form 483 (m1), the recall/BPDR mechanics if
  relevant to the mock scenario (m2/m3), AABB's own assessment expectations (m4), and the internal
  audit program's own evidence trail (m5) as what actually gets presented to prove the program
  works.
- Does **not** own: any new regulatory content — this module's job is synthesis and application,
  not introducing new citations (a light, already-established citation may be re-referenced, not
  re-derived).
- Close with a genuine course-ending passage: the arc of all six modules, what's now resolved from
  `data-integrity-and-records`'s open findings and what (if anything) stays open by honest design,
  and forward pointers to whatever future courses remain (Track 4's GRC/vendor-risk/privacy
  courses, and the Track 5 capstone `itsm-for-regulated-blood-services`).

## Sourcing notes (read before citing anything)

**Verified and saved this session:**
- `sources/cfr/7.3.md`, `7.40.md`, `7.41.md`, `7.46.md` — Part 7 recall framework, full sections,
  eCFR Versioner API.
- `sources/usc/21-usc-374.md` — 21 U.S.C. 374 (FD&C Act § 704), EXCERPT only (not the full,
  heavily amended section) via Cornell LII. Confirmed "for-cause inspection" is actual statutory
  language only in subsection (h), which is device-establishment-specific (added 2017) — do not
  present "routine vs. for-cause" as if the general distinction has one universal statutory
  definition reaching every FDA-regulated industry.
- `sources/fda-guidance/inspection-observations-page.md` — FDA's own public page describing Form
  483. Informational page, not guidance or regulation.
- `sources/fda-guidance/cder-gcp-inspections-outcomes-2022-excerpt.md` — **GCP/clinical-trial-
  specific** FDA presentation, EXCERPT (NAI/VAI/OAI slides and the Warning Letter slide only).
  **Its own saved file carries an explicit scope caveat — read and restate it in any module that
  cites this source**: the classification scheme is general FDA practice; the specific examples
  and statistics in the source are clinical-trial-specific and must not be presented as
  blood-establishment or CGMP-specific content.
- `sources/aabb/accreditation-process.md` — AABB's own public process description. Safe to quote
  directly (not Standards text).
- Already saved, reusable: `sources/cfr/606.171.md` (full section — (a), (d), (e), (f) are this
  course's new ground; (b) and (c) are already fully taught elsewhere, reference only).

**Still NOT verified. Don't assert:**
- Any specific FDA Warning Letter's content, recipient, or date — name the instrument and its
  general character only, never a real example.
- Any specific recall's real-world details — Lakeshore's recall scenario is entirely fictional.
- A single universal statutory or regulatory definition of "routine inspection" versus "for-cause
  inspection" reaching all FDA-regulated industries — not found in any saved source; treat as FDA
  operational vocabulary, described honestly as such.
- Any ASQ CQA exam content, section number, or body-of-knowledge document text — describe the
  *themes* (independence, competency, sampling, grading) in this course's own words only, the same
  handling as GAMP 5 and AABB Standards elsewhere in this curriculum.
- 21 U.S.C. 374's full text beyond the excerpted subsections saved — if a drafter needs a
  subsection not in the saved excerpt, fetch and verify it first via Cornell LII or a similar
  reliable mirror; don't quote from memory of the full statute.

## Progress log

- **2026-10-09**: Course scoped (Phase 1/2) by the orchestrating session itself (per
  `create-course`'s instruction to run Phase 2 without delegating). Syllabus page
  (`courses/fda-and-aabb-in-practice/index.qmd`, `order: 68`) and this plan written. New sources
  fetched and saved: 21 CFR Part 7's recall framework (7.3, 7.40, 7.41, 7.46), an excerpt of 21
  U.S.C. 374 (FD&C Act § 704, inspection authority), FDA's own public page on Form 483, an excerpt
  of an FDA GCP-inspection presentation (used only for its general NAI/VAI/OAI classification
  scheme, with an explicit scope caveat), and AABB's own public accreditation-process page.
  `sources/INDEX.md` updated. Key decisions: six modules matching curriculum.md's own module list;
  careful boundary-setting against `deviations-and-nonconformances` (BPDR filing mechanics, not
  the reportability test) and `internal-audits-and-management-review` (program-design depth, not
  audit/management-review basics); scenario continues directly from `data-integrity-and-records`'s
  DI-0301 self-assessment and its still-open findings (DED-0458's "accurate," LAB-07's
  fitness-for-use gap, the deferred-donor-record cadence question), explicitly planned to be
  resolved (or honestly left open) in this course's final module. Not committed or pushed yet
  (held for review per this session's practice of auditing the Phase 2 course map before
  publishing, same as every prior course).
  Next: review this plan one more time, then publish the course map and build module 1,
  `fda-inspection-authority-and-outcomes`.
