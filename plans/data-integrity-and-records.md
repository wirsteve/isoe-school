# `data-integrity-and-records` — course plan

Read this whole file before drafting any module. Update the module table and append a progress
log entry after every module, same discipline as every other course in this curriculum.

## Finish line

Apply ALCOA+ to a real electronic record, explain Part 11's e-signature and predicate-rule
requirements (including for hybrid paper/electronic and legacy systems), and describe how
multi-state data governance holds up under audit.

## What "defensible" means in this course

Same two-layer idea `csv-and-becs` built (decision trail + technical adequacy), applied to a
different object: not a validation package, but a **record itself** and the system that produced
it. A record can look complete and still fail data integrity if its metadata, audit trail, or
signature linkage don't actually prove what the record claims. This course doesn't invent a third
named instrument — it reuses the cold-read test where a document is under review, and otherwise
teaches record-level questions directly (is this ALCOA? is this record's signature properly
linked? does this system still qualify for Part 11 enforcement discretion?).

## Why this course exists, and what it must not re-teach

Three courses already touch adjacent ground. Read each boundary before drafting:

- **`reading-a-cfr-citation`** (foundation, built first in this curriculum) already quotes
  606.160(d) in full — the 10-year-or-6-months-past-expiration retention clock for *individual
  product records* — and uses it as its own worked example. **Never re-quote 606.160(d) as new
  teaching.** Module 5 references it in one line and builds past it to record types 606.160(d)
  doesn't cover.
- **`quality-system-essentials`'s `document-control-and-records`** module owns the *paper*
  document lifecycle under AABB's Documents and Records QSE: draft/approval/effective-date/
  periodic-review/retirement, physical distribution and acknowledgment, obsolete-version removal
  at the point of use. It explicitly notes that document and record retention schedules can
  differ from 606.160(d)'s product-record clock, and that working out exactly what those
  schedules are "is a level of detail this module doesn't build out further" — **that's this
  course's module 5 to build out.** Don't re-teach document control's own lifecycle stages here.
- **`csv-and-becs`'s `part-11-for-validated-systems`** module scoped Part 11 to what a
  *validation* has to prove the system enforces: 11.1, 11.3(b)(4)/(b)(9) closed/open systems,
  11.30 named, 11.10(d)/(f)/(g)/(h) as functional controls, with 11.10(a), (j), (k)(2) used
  elsewhere in the curriculum as concepts only. It explicitly deferred three things to this
  course: **predicate rules in full** (named once, pointed here), **11.50–11.300's e-signature
  components** (named not taught), and **audit-trail review in practice** (11.10(e) named, not
  developed). This course's modules 2 and 3 are where those debts get paid.

**Through-line characters, reused, not re-established:** the Director (learner, system-owner),
the Quality Analyst ("she," competent, improving — now running her own self-assessment project
largely independently, a visible step up from earlier courses), the systems administrator ("he,"
unnamed). Locations: Lakeshore's central site, Brookfield and Fairview (satellite collection
sites), Riverside General Hospital (consignee, 340 beds, established in
`blood-center-operations`). **VAL-1203, VIA-0842, DEV-1147, CAPA-1147-A, VRA-0219 are all closed
history from earlier courses. This course does not reopen any of them** — if a drafter wants a
BECS example, invent a new, distinct one; don't retcon a locked fact from `csv-and-becs` or
`directing-the-quality-analyst`.

## This course's own scenario

**DI-0301**: a data-integrity self-assessment the QA is running across Lakeshore's systems ahead
of the next AABB reassessment cycle (and the live possibility of an FDA inspection before then —
don't invent a specific date). Unlike `csv-and-becs`'s single validation package, DI-0301 touches
several *different* systems, one per module's natural fit:

- **BECS** (familiar from `csv-and-becs` — may reference that course's established facts about
  BECS's role, never its closed deviations).
- **A paper donor file still in use at one satellite site** (pick Brookfield or Fairview;
  drafter's choice, log which) — the hybrid-system example for module 3.
- **A legacy stand-alone laboratory instrument** that predates Part 11 (August 20, 1997) and has
  never been replaced — module 4's subject. Invent no real instrument brand; describe it
  generically ("a stand-alone benchtop analyzer," consistent with this curriculum's practice of
  never naming real products).
- **The cumulative deferred-donor record** spanning all Lakeshore locations — module 6's subject,
  directly sourced from 606.160(e).

**Facts each module locks, for the next module not to contradict:** track these in each
module's own section below and in the progress log. No calendar years anywhere, per this
curriculum's standing convention.

## Modules

| # | Slug | Finish line | `order:` | Status |
|---|---|---|---|---|
| — | (syllabus) | — | 55 | Published |
| 1 | `alcoa-and-data-integrity` | Define data integrity the way FDA's own guidance does (ALCOA, verified, five letters), distinguish it from "ALCOA+" (industry/international term, used carefully), and apply both to a real Lakeshore electronic record. | 56/57 | Published |
| 2 | `audit-trails-and-esignatures` | Review an audit trail the way an inspector would (who reviews it, how often, what a real review looks like versus a rubber stamp) and name the specific controls (11.50, 11.70, 11.100, 11.200, 11.300) an e-signature has to satisfy to stand in for a handwritten one. | 58/59 | Published |
| 3 | `predicate-rules-and-hybrid-systems` | Explain what a predicate rule is and how it decides whether a given record is a "Part 11 record" at all, and judge whether a system mixing paper and electronic records is handling that mix defensibly. | 60/61 | Not started |
| 4 | `legacy-systems-and-part-11-gaps` | Apply FDA's own four-part legacy-system test to a system older than Part 11, and say what has to stay true for its enforcement-discretion status to hold. | 62/63 | Not started |
| 5 | `retention-across-record-types` | Go beyond 606.160(d)'s product-record clock to the records that don't share its schedule, and say what "retain the record" requires for a dynamic electronic record versus a static printout. | 64/65 | Not started |
| 6 | `multi-site-governance-and-donor-identification` | Explain how Lakeshore keeps one donor's identity and eligibility history consistent across a central system and every satellite site, using 606.160(e)'s cumulative deferred-donor record, and say what breaks if two sites' records disagree. | 66/67 | Not started |

The next course after this one continues at **68**. Update `create-course`'s SKILL.md when this
course's numbering is final (it won't be until module 6 is drafted and `order:` values are
confirmed by grep with no duplicates, same discipline as every prior course).

## Module-by-module guardrails and sourcing

**m1 `alcoa-and-data-integrity`.**
- Owns: "data integrity" defined exactly as FDA's 2018 guidance states it (quote: "data integrity
  refers to the completeness, consistency, and accuracy of data. Complete, consistent, and
  accurate data should be attributable, legible, contemporaneously recorded, original or a true
  copy, and accurate (ALCOA)"); "metadata" defined (quote, with the "23 mg" example); the
  "systems" definition from the same guidance (ANSI's people/machines/methods framing, computer
  hardware/software/peripherals/networks/cloud/personnel/documentation — a near-twin of BECS
  guidance's own "system" definition from `csv-and-becs` m3, worth a one-line callback); the
  **ALCOA vs. "ALCOA+" distinction, carefully**: FDA's 2018 guidance uses only "ALCOA" (5
  letters) and never "ALCOA+" (confirmed by direct search of the saved source — see
  `sources/fda-guidance/data-integrity-cgmp-qa-2018.md`'s own terminology note at the top of the
  file). "ALCOA+" (commonly: + Complete, Consistent, Enduring, Available) is industry/
  international-regulator practice (associate it with bodies like MHRA generally, without
  inventing or quoting a specific MHRA document — none is saved). Label the tier of every claim:
  ALCOA itself is guidance-tier (FDA's own words); "ALCOA+" is industry practice, described not
  cited to FDA.
- Does **not** own: audit trails in depth (m2); Part 11 record-scoping (predicate rules, m3);
  retention periods (m5).
- Scenario: DI-0301 opens here. The QA picks one BECS-generated electronic record (e.g., a
  donor-eligibility determination, or reuse a generic VAL-1203-adjacent example *without*
  touching any locked `csv-and-becs` fact) and runs it through ALCOA letter by letter. Good
  device: one letter the record satisfies cleanly, one it only looks like it satisfies (e.g.,
  "contemporaneous" — timestamped, but the clock was the workstation's unsynced local time, not
  a trusted source), teaching that each letter is a real test, not a checkbox.
- AABB (paraphrase, no number): none specifically assigned; skip rather than force one, or note
  QSE 6 (Documents and Records) as the adjacent AABB drawer if it fits naturally in one line.

**m2 `audit-trails-and-esignatures`.**
- Owns: "audit trail" defined (quote FDA's 2018 guidance: "a secure, computer-generated,
  time-stamped electronic record that allows for reconstruction of the course of events relating
  to the creation, modification, or deletion of an electronic record," plus the HPLC example and
  the "audit trail review is similar to assessing cross-outs on paper" line); **who reviews audit
  trails** (quote: personnel responsible for record review under CGMP should review the audit
  trails as they review the rest of the record) and **how often** (quote: if a review frequency
  is specified in CGMP regulations, apply that same frequency to the audit trail; if not, use
  risk assessment); this is the first real depth on 11.10(e) in this curriculum — say so
  explicitly, with a one-line reconciliation (11.10(e) is on the 2003 guidance's
  enforcement-discretion list for Part 11 *itself*, but FDA's 2018 guidance shows what a real
  CGMP audit-trail review looks like under the *predicate rule*, which is the enforcement
  mechanism that actually reaches it — same pattern `csv-and-becs` m5/m6 already taught for
  validation). **Electronic-signature components, in full, for the first time**: 11.50 (signature
  manifestations: printed name, date/time, meaning — quote), 11.70 (signature/record linking,
  quote), 11.100 (general requirements: unique to one individual, identity verified before
  assignment, certification to FDA that e-signatures are the legal equivalent of handwritten
  ones — quote), 11.200 (components and controls: at least two distinct identification
  components for non-biometric signatures, used only by genuine owners, two-person collaboration
  required to misuse — quote), 11.300 (controls for ID codes/passwords: uniqueness, periodic
  revision, loss management, transaction safeguards, periodic device testing — quote). Also:
  FDA's 2018 guidance's own answer that an electronic signature *can* replace a handwritten
  signature on a master record, with 21 CFR 11.2(a) as the cited mechanism (quote both).
- Does **not** own: predicate-rule doctrine itself (m3, though it's used here as a concept, named
  once); legacy-system Part 11 status (m4); retention (m5).
- Scenario: DI-0301's audit-trail finding — the QA samples BECS's own audit trail for a recent
  record and asks whether anyone has actually reviewed it versus just confirmed it exists.
  Second thread: an e-signature question — does Lakeshore's current e-signature setup actually
  satisfy 11.200's two-component-and-two-person-collaboration standard, or does it rely on a
  single password anyone could guess or share (echo `csv-and-becs` m5's shared-credential
  material only if useful, don't re-teach it).
- AABB: optional, skip or name QSE 6 lightly.

**m3 `predicate-rules-and-hybrid-systems`.**
- Owns: **predicate rule, defined and developed for the first time in this curriculum** (named
  but never explained in `csv-and-becs` m1 and m5). Source it from the 2003 Part 11 guidance
  (`sources/fda-guidance/part-11-scope-and-application-2003.md`): quote its definition ("The
  underlying requirements set forth in the Act, PHS Act, and FDA regulations (other than part 11)
  are referred to in this guidance document as predicate rules") and its scoping logic (quote the
  guidance's own "narrow interpretation" passage: Part 11 applies when a person *chooses* to keep
  a record required by a predicate rule in electronic format in place of paper; when a paper
  record is generated and relied upon to perform regulated activities, and electronic records
  merely accompany it, Part 11 doesn't reach the electronic copy the same way). Use this to
  answer, concretely: is a given Lakeshore record even a "Part 11 record" at all, and who
  decides? (The guidance's own recommendation: document that decision, e.g. in an SOP.) **Hybrid
  systems**: paper as record of record with an electronic convenience copy, or the reverse —
  develop both directions honestly. Tie to FDA's 2018 guidance's "static vs. dynamic" distinction
  (quote in full: static = fixed-data record like paper or an electronic image; dynamic = format
  allows interaction, e.g. a reprocessable chromatographic record) and its Q&A on retaining paper
  printouts instead of original electronic records from a stand-alone instrument (quote in full —
  this is the direct source for module 4's legacy-instrument scenario, so plant the question here
  and let m4 answer it for Lakeshore's own instrument). 21 CFR 11.2 (quote in full) is the
  regulatory hook: Part 11 governs the *choice* to use electronic records/signatures in lieu of
  paper, under § 11.2 — it doesn't force electronic records into existence where a predicate rule
  didn't already require a record.
- Does **not** own: legacy-system enforcement discretion itself (m4 applies the concept to a
  specific pre-1997 system); retention periods (m5); e-signature components (m2, already built).
- Scenario: the Brookfield or Fairview paper donor file (drafter's choice, log which site) —
  some fields are later re-keyed into BECS for central reporting. Which one is the record of
  record? DI-0301's finding: nobody had actually written down the answer; the SOP was silent.
  Teach the fix: document the choice, and make sure whichever one is authoritative is the one
  protected, retained, and reviewed as such.
- AABB: QSE 4 (Suppliers and Customers) doesn't fit; QSE 6 lightly, or skip.

**m4 `legacy-systems-and-part-11-gaps`.**
- Owns: FDA's 2003 guidance's **four-part legacy-system test**, quoted in full
  (`sources/fda-guidance/part-11-scope-and-application-2003.md`, "Legacy Systems" section): the
  system was operational before August 20, 1997; it met all applicable predicate rule
  requirements before that date; it currently meets all applicable predicate rule requirements;
  documented evidence and justification exists that the system is fit for its intended use
  (including an acceptable level of record security and integrity). Quote also: "If a system has
  been changed since August 20, 1997, and if the changes would prevent the system from meeting
  predicate rule requirements, Part 11 controls should be applied." Apply this honestly to
  Lakeshore's stand-alone legacy instrument (invented, generic, no real brand): walk through each
  of the four criteria as a real yes/no/uncertain assessment, not a rubber stamp. **Copies of
  records enforcement discretion** (quote the 2003 guidance's "Copies of Records" section: FDA
  exercises enforcement discretion on specific §11.10(b) requirements for generating copies,
  while all records remain subject to inspection under predicate rules; the guidance's
  recommended copy formats — common portable formats, PDF/XML/SGML-style conversions) — tie this
  to the legacy instrument's own static printouts, resolving the question m3 planted (can a
  static printout stand in for the dynamic original? FDA's 2018 guidance says no for a truly
  dynamic record format, quoted again briefly here in this module's own context if useful, with
  a one-line callback to m3 rather than a re-quote).
- Does **not** own: predicate-rule doctrine's own definition (m3, already built — apply it here,
  don't re-derive it); retention schedule mechanics (m5); multi-site governance (m6).
- Scenario: DI-0301's legacy-instrument finding is this module's main document — walk the
  four-part test against it, with at least one criterion genuinely uncertain (e.g., "currently
  meets all applicable predicate rule requirements" turns out to be undocumented, not
  necessarily false — the gap is the missing evidence, not a confirmed violation), modeling how
  to flag a real gap without overclaiming a violation that isn't proven.
- AABB: QSE 3 (Equipment) fits naturally here (qualification/fitness for use, paraphrase only, no
  number, consistent with how `csv-and-becs` m2 used it).

**m5 `retention-across-record-types`.**
- Owns: explicitly builds *past* 606.160(d) (already fully taught in `reading-a-cfr-citation` —
  reference it in one line, never re-quote it at length). New ground: different record types
  carry different retention logic. Donor records under 606.160(b)(1) (already saved in full in
  `sources/cfr/606.160.md`) don't share the *product*-record clock exactly — point out that
  606.160(d)'s own text ties its interval to "the blood or blood component," so a donor record
  tied to a donor with many donations over years raises a real question about which expiration
  date starts that clock (a genuine, honest "this is why retention needs a documented policy,
  not just a memorized number" teaching moment — don't invent a specific resolved answer beyond
  what 606.160(d)'s own text supports). Electronic-record retention specifics from FDA's 2018
  guidance: "backup" defined and required to be exact, complete, secure from alteration (quote
  211.68(b) via `sources/cfr/211.68.md`, already saved, and the guidance's own gloss on it);
  temporary backups (e.g., for a computer crash) do NOT satisfy 211.68(b)'s backup requirement
  (quote); a backup/archive must preserve the record's *metadata* and its static-or-dynamic
  nature, not just the raw value (tie to m3's static/dynamic distinction). True copies: FDA's
  2018 guidance answer on electronic copies as accurate reproductions (quote in full) and the
  record-retention consequence of the m3/m4 "which one's the record of record" question — once
  decided, retention attaches to *that* one, in its native (static or dynamic) format.
- Does **not** own: product-record retention math itself (`reading-a-cfr-citation`, already
  built); document-control's own retention-schedule-documentation practice
  (`document-control-and-records`, already built — this module supplies content that practice
  should apply, doesn't re-teach the practice itself); multi-site consistency (m6).
- Scenario: DI-0301 finds that Lakeshore's backup policy for BECS creates a nightly snapshot
  described internally as a "backup," but it's actually a temporary rotation deleted after 30
  days — exactly the gap FDA's 2018 guidance calls out by name. Second, smaller thread: a donor
  record retention question with a genuinely correct "it depends, document the policy" answer,
  not a false precise number.
- AABB: QSE 6 (Documents and Records) is the natural anchor; paraphrase only, no number, brief.

**m6 `multi-site-governance-and-donor-identification`.**
- Owns: 606.160(c), quoted in full (`sources/cfr/606.160.md`, already saved): the donor-number
  requirement linking a unit, the donor, their medical record, every component from that unit,
  and all disposition records. 606.160(e) in full, quoted (also already saved): the cumulative
  record of donors deferred across *all locations operating under the same license or under
  common management*, tied to 610.41/610.40 reactive-test deferrals, updated at least monthly,
  revised to remove requalified donors. This is the course's main regulatory floor for "multi-site
  data governance" — treat it as the load-bearing citation, developed at real depth (this
  curriculum's first full treatment of 606.160(e), never used before). Apply it concretely to
  Brookfield, Fairview, and the central site: if a donor is deferred at Fairview, how fast and
  how reliably does the cumulative record reach Brookfield and the central system, so the same
  donor can't be accepted there instead? This is a genuine interface/data-governance question,
  distinct from (but may lightly echo, without re-teaching) `csv-and-becs` m7's interface
  material — keep any callback to one line.
- Does **not** own: BECS interface validation mechanics themselves (`csv-and-becs` m7, already
  built — name a parallel, don't rebuild the interface-testing content).
- Scenario: DI-0301's capstone finding, since this is the course's last module — write a genuine
  closing passage (per this curriculum's established practice for a course's final module): the
  cumulative deferred-donor record's update cadence ("at least monthly," per 606.160(e)(3)) is
  being met on paper, but a specific donor's deferral took three weeks to reach Brookfield's own
  local check — compliant with the letter of "at least monthly," and still a real patient-safety
  gap if that window allows a deferred donor to donate again at a different site before the
  monthly update catches up. Use this to make an honest, non-regulatory point: the regulation
  sets a floor, and Lakeshore's own risk tolerance, not 606.160(e) itself, should decide whether
  monthly is actually fast enough for this risk — an industry-practice judgment, not a citation.
  Close the course by naming what's still open for future courses: GRC/vendor-risk framing for
  any cloud or hosted record-keeping vendor (`vendor-and-third-party-risk-management`), and
  HIPAA-specific privacy obligations for donor/patient data (`healthcare-security-and-privacy`).

## Sourcing notes (read before citing anything)

**Verified and saved this session** (quote only from these, verbatim):
- `sources/cfr/11.2.md`, `11.50.md`, `11.70.md`, `11.100.md`, `11.200.md`, `11.300.md` — fetched
  via the eCFR Versioner API, full Part 11 XML, 2026-10-09.
- `sources/fda-guidance/data-integrity-cgmp-qa-2018.md` — FDA/CDER (with CBER, CVM, ORA),
  *Data Integrity and Compliance With Drug CGMP: Questions and Answers*, December 2018, final,
  full text via verbatim PDF extraction. **Confirmed: uses "ALCOA," never "ALCOA+."** Written for
  drug CGMP (Parts 210/211/212) — reaches blood establishments via 210.2(a) supplementation, not
  written for Part 606 directly. Say so in every module that cites it.
- Already saved, reusable: `sources/fda-guidance/part-11-scope-and-application-2003.md` (full
  text — this course uses its predicate-rule definition, narrow-scope passage, legacy-system
  test, and copies-of-records section, none of which `csv-and-becs` used in depth);
  `sources/cfr/11.10.md` (full section, already have (a)-(k)); `sources/cfr/11.1.md`,
  `11.3.md`, `11.30.md`; `sources/cfr/606.160.md` (full section — (c), (d), (e) are this course's
  to develop; (a), (b), parts of (d) already used elsewhere, cite accordingly); `sources/cfr/
  211.68.md` (both (a) and (b), already quoted in `csv-and-becs`).

**Verified, not saved (name only):**
- MHRA's or WHO's own "ALCOA+" guidance — not fetched, not verified. Describe "ALCOA+" as
  industry/international-regulator practice in general terms (complete, consistent, enduring,
  available, commonly added to ALCOA) without citing a specific document or quoting one.

**Still NOT verified. Don't assert:**
- Any specific MHRA/WHO document's title, date, or exact wording for "ALCOA+" — don't invent one.
- Any real instrument brand or model for the legacy-system scenario (m4) — keep it generic.
- Any specific retention interval for donor records beyond what 606.160(d)'s own text supports —
  m5's donor-record thread is deliberately an open question, not a resolved number.
- 610.41 and 610.40's own full text — named only (already referenced this way via 606.160(e)'s
  own cross-reference) since neither has been fetched and saved independently; don't quote them,
  only the fact that 606.160(e) cites them.

## Progress log

- **2026-10-09**: Course scoped (Phase 1/2) by the orchestrating session itself (per
  `create-course`'s instruction to run Phase 2 without delegating). Syllabus page
  (`courses/data-integrity-and-records/index.qmd`, `order: 55`) and this plan written. Six new
  Part 11 e-signature sections (11.2, 11.50, 11.70, 11.100, 11.200, 11.300) and one new FDA
  guidance (`data-integrity-cgmp-qa-2018.md`, full text) fetched and saved; `sources/INDEX.md`
  updated. Key decisions: six modules matching curriculum.md's own module list; careful ALCOA vs.
  "ALCOA+" terminology handling (FDA's own 2018 guidance never uses "ALCOA+"); new course
  scenario DI-0301 (a QA-led data-integrity self-assessment ahead of an AABB reassessment),
  deliberately distinct from `csv-and-becs`'s VAL-1203/VIA-0842 threads, which stay closed
  history and are not reopened. Not committed or pushed yet (held for review per this session's
  practice of auditing the Phase 2 course map before publishing, same as every prior course).
  Next: review this plan one more time, then publish the course map and build module 1,
  `alcoa-and-data-integrity`.
- **2026-10-09**: Module 1, `alcoa-and-data-integrity`, drafted (via subagent), audited, and
  published (`courses/data-integrity-and-records/alcoa-and-data-integrity/index.qmd` and
  `resources.qmd`, `order: 56`/`57`, ~3,360 words). Quotes (the data-integrity definition,
  ALCOA's footnote-5 citation chain, the metadata definition, the ANSI "systems" definition) all
  verified verbatim against `sources/fda-guidance/data-integrity-cgmp-qa-2018.md`. ALCOA-vs-
  "ALCOA+" distinction held precisely throughout: ALCOA labeled guidance-tier with a real FDA
  citation; "ALCOA+" named only as industry/international practice (MHRA referenced generally,
  no document cited or quoted), never attributed to FDA. All three `resources.qmd` links
  curl-verified 200. **Locked scenario facts:** DI-0301 (the course's self-assessment project)
  opens here; its first test case is **DED-0458**, a BECS donor-eligibility determination record,
  walked through all five ALCOA letters (Attributable and Legible pass cleanly; Contemporaneously
  recorded is the planted trap — a timestamp from an unsynchronized local workstation clock;
  Original/true copy passes with a nuance pointed to module 3; Accurate is left deliberately
  open/unresolved, modeling an honest "still checking" finding rather than a false resolution).
  No `csv-and-becs` locked fact (VAL-1203, VIA-0842, DEV-1147, CAPA-1147-A, VRA-0219) referenced
  or altered.
  Next: build m2, `audit-trails-and-esignatures`.
- **2026-10-09**: Module 2, `audit-trails-and-esignatures`, drafted (via subagent), audited, and
  published (`courses/data-integrity-and-records/audit-trails-and-esignatures/index.qmd` and
  `resources.qmd`, `order: 58`/`59`, ~4,830 words). Quotes (the audit-trail definition and HPLC
  example, the who/how-often review questions, 11.50/11.70/11.100/11.200/11.300 in full, and the
  e-signatures-can-replace-handwritten answer citing 11.2(a)) all verified verbatim against
  `sources/fda-guidance/data-integrity-cgmp-qa-2018.md` and the five `sources/cfr/11.*.md` files.
  Reconciles 11.10(e)'s enforcement-discretion status with a real predicate-rule review duty,
  the same pattern `csv-and-becs` modules 5-6 taught for validation. All four `resources.qmd`
  links curl-verified 200. **Scenario outcomes:** Lakeshore never explicitly decided an
  audit-trail review frequency for BECS (an undecided gap, not a wrong default); DI-0301's
  e-signature test of the BECS Quality sign-off found 11.100 (uniqueness) and 11.200
  (two-component, two-person-collaboration) hold up cleanly, while 11.300(b) (periodic password
  revision) is a real documented-but-unenforced gap. DED-0458's module-1 ALCOA findings were
  referenced, not altered ("accurate" stays open). No `csv-and-becs` locked fact was referenced
  or altered.
  Next: build m3, `predicate-rules-and-hybrid-systems`.
