# `healthcare-security-and-privacy` — course plan

Read this whole file before drafting any module. Update the module table and append a progress
log entry after every module, same discipline as every other course in this curriculum.

## Finish line

Apply HIPAA Privacy and Security Rule requirements to a donor/patient record, and run a breach
through both HIPAA notification and FDA reporting obligations at once.

## Why this course exists, and what it must not re-teach

- **`data-integrity-and-records`** already teaches Part 11 in real depth — 11.10, 11.50, 11.70,
  11.100, 11.200, 11.300, all quoted in full, plus ALCOA, audit trails, and legacy-system
  handling. Module 3 of this course maps HIPAA's Security Rule safeguards against that content;
  it does not re-derive Part 11 from scratch.
- **`fda-and-aabb-in-practice`** already teaches 606.171's BPDR filing mechanics (who reports, the
  form, the 45-day clock) and 21 CFR Part 7's recall framework in depth. Module 4 of this course
  compares HIPAA's own 60-day breach-notification clock against the 45-day BPDR clock; it does
  not re-derive either one's own mechanics.
- **`grc-frameworks-and-risk-management`** already teaches a full categorize→select→implement→
  assess→authorize→monitor cycle and POA&M tracking. This course may reference that vocabulary by
  name (e.g., "categorizing" a system's HIPAA-relevant impact) without rebuilding the cycle.
- **`directing-the-quality-analyst`**'s `escalation-criteria` already teaches what must reach the
  Director (FDA-reportable events, a confirmed breach, etc.) — this course assumes that judgment
  already exists and builds the actual HIPAA-specific mechanics on top of it.

**Through-line characters, reused, not re-established:** the Director (learner, second person
"you"), the Quality Analyst ("she," competent, improving), the unnamed systems administrator
("he"). Locations: Lakeshore's central site, Brookfield, Fairview.

## This course's own first question — answer it honestly, once, in module 1

**Is Lakeshore a HIPAA covered entity at all?** Reasoned from 45 CFR 160.103's own definitions
(`sources/cfr/45-160.103.md`): "covered entity" includes "a health care provider who transmits any
health information in electronic form in connection with a transaction covered by this
subchapter," and "health care provider" is defined broadly enough ("any other person or
organization who furnishes, bills, or is paid for health care in the normal course of business")
to plausibly include a blood establishment that bills hospitals or health plans electronically for
blood products or services. **This is a reasoned interpretation of real text, not an assumed
fact — module 1 must show the reasoning, not assert the conclusion.** Once reasoned through, the
rest of this course proceeds on the premise that Lakeshore is a covered entity (the more
interesting, more widely-applicable teaching case) — state this premise explicitly after reasoning
to it, so later modules don't have to re-derive it.

## This course's own scenario — locked once, here, for every module to share

A **new, invented incident**, distinct from anything locked in `csv-and-becs` or
`data-integrity-and-records` (never reuse or reopen VAL-1203, VIA-0842, DEV-1147, CAPA-1147-A,
VRA-0219, DI-0301, DED-0458, or LAB-07): a Brookfield-based staff member's work laptop, used to
pull donor-eligibility extracts from BECS for a quality review, goes missing — lost in transit, or
left behind somewhere outside Lakeshore's control (drafter's choice of exact circumstance, logged
for later modules). The laptop's specific facts — whether its local copy of the extract was
encrypted per an NIST-specified method (which would mean the data was never "unsecured protected
health information" under 164.402's own definition, and arguably no reportable breach occurred at
all), what data fields the extract contained, and whether any donor named in it is also connected
to a live quality event — are **module 1's own choice to make and log**, since modules 2-5 build
directly on these facts and must not contradict them. A genuinely interesting course gets more
mileage from an incident where the facts are not perfectly clean (e.g., the laptop was supposed to
be encrypted per policy, but whether it actually was enforced is the first open question) —
consistent with this curriculum's "documented but not implemented" throughline from
`data-integrity-and-records`, drafter's choice whether to reuse that exact shape of gap.

No calendar years in the Lakeshore narrative. Never name a real device/OS/encryption-product
vendor.

## Modules

| # | Slug | Finish line | `order:` | Status |
|---|---|---|---|---|
| — | (syllabus) | — | 92 | Published |
| 1 | `information-governance-in-a-covered-entity` | Answer whether Lakeshore is a HIPAA covered entity, reasoned from HIPAA's own definitions, and introduce the incident this course's remaining four modules carry forward. | 93/94 | Published |
| 2 | `the-hipaa-privacy-rule` | Apply the actual rules governing when a donor's PHI can be used or disclosed without authorization, when it can't, and the specific exception covering an FDA-regulated recall/BPDR disclosure. | 95/96 | Published |
| 3 | `security-rule-safeguards-and-part-11` | Map HIPAA's administrative/physical/technical safeguards against Part 11's own controls — genuine overlaps and one genuine structural difference (required vs. addressable). | 97/98 | Not started |
| 4 | `breach-notification-and-dual-reporting` | Run the incident through HIPAA's breach test and 60-day clock side by side with FDA's 45-day BPDR clock, and say honestly when one incident triggers both. | 99/100 | Not started |
| 5 | `investigating-a-healthcare-data-incident` | Walk the investigation a HIPAA breach demands — scope, root cause, the four-factor compromise assessment — to the closing decision. | 101/102 | Not started |

The next course after this one continues at **103**. Update `create-course`'s SKILL.md when this
course's numbering is final (verify by grep with no duplicates before assigning, same discipline
as every prior course) — already done as part of Phase 2 scoping below.

## Module-by-module guardrails and sourcing

**m1 `information-governance-in-a-covered-entity`.**
- Owns: the covered-entity reasoning (quote 160.103's "covered entity" and "health care provider"
  definitions verbatim from `sources/cfr/45-160.103.md`; reason through them honestly, concluding
  Lakeshore is plausibly a covered entity because it bills electronically — state this as a
  reasoned conclusion, not a bare assertion); the PHI/individually-identifiable-health-information
  definitions (quote verbatim), applied to what BECS actually holds (donor eligibility
  determinations, donation history) — a light, by-name reference to BECS's own established role
  from `csv-and-becs`, never reopening any of that course's locked facts; introducing the
  lost-laptop incident and logging its specific facts (encryption status, data fields, any
  quality-event connection) for later modules.
- Does **not** own: the Privacy Rule's specific use/disclosure rules (m2); Security Rule
  safeguards (m3); the breach determination itself (m4, though m1 sets up the facts m4 reasons
  from).
- Scenario: the Director, prompted by the Brookfield laptop going missing, has to answer a
  question nobody at Lakeshore has asked before — are we even subject to HIPAA? — before any
  further response makes sense.

**m2 `the-hipaa-privacy-rule`.**
- Owns: 164.502(a)'s general permitted/required uses and disclosures (quote verbatim from
  `sources/cfr/45-164-privacy-rule-excerpt.md`); 164.506 (treatment/payment/operations, quote the
  standard verbatim); 164.508(a)(1)/(b)(2) (authorization required, defective authorizations,
  quote verbatim); **164.512(b)(1)(iii)**, the FDA-regulated-product public-health exception
  (quote in full — this is the course's single most curriculum-connecting citation: it is the
  actual textual basis for saying a BPDR filing or a Part-7 recall doesn't itself violate HIPAA,
  tying directly back to `fda-and-aabb-in-practice`); 164.514(d) minimum necessary (quote
  verbatim); 164.524(a)(1)/(b)(2) right of access and its 30-day timing (quote verbatim).
- Does **not** own: Security Rule safeguards (m3); breach notification (m4, a completely separate
  subpart with its own definitions and clock — 164.502's general use/disclosure rules are a
  different question from "was this a breach," say so once, don't conflate).
- Scenario: apply the Privacy Rule to the missing laptop's donor-eligibility extract itself — was
  pulling that extract for a quality review a permitted use in the first place (164.506, health
  care operations), did it need an authorization (probably not, if it's healthcare operations —
  reasoned, not asserted), and does it matter that the extract likely contained more data fields
  than the review strictly needed (164.514(d), minimum necessary) — a good, concrete minimum-
  necessary teaching moment regardless of how the breach question itself resolves.

**m3 `security-rule-safeguards-and-part-11`.**
- Owns: 164.306 (general rules, required vs. addressable — quote in full from
  `sources/cfr/45-164-security-rule-excerpt.md`); 164.308 (administrative safeguards, quote in
  full); 164.310 (physical safeguards, quote in full); 164.312 (technical safeguards, quote in
  full). Build a genuine, honest comparison table against Part 11 (11.10, 11.50, 11.70, 11.100,
  11.200, 11.300 — reference only, already fully quoted in `data-integrity-and-records`, never
  re-quoted at length here): real overlaps (164.312(a) unique user ID ≈ 11.100 uniqueness;
  164.312(b) audit controls ≈ 11.10(e) audit trails; 164.312(d) person/entity authentication ≈
  11.200 e-signature identity components) and the one genuine structural difference worth naming
  honestly — Part 11 has no "addressable" concept (a control applies or it doesn't); HIPAA's
  Required/Addressable split (164.306(d)) has no Part 11 equivalent at all. Don't flatten the two
  rules into "basically the same" — they regulate different things that happen to overlap.
- Does **not** own: the breach-notification clock (m4); the Privacy Rule (m2, a different subpart
  governing a different question — confidentiality/use-and-disclosure vs. this module's
  integrity/availability/access-control focus).
- Scenario: whether the missing laptop's encryption status was actually a Required or an
  Addressable implementation specification under 164.312(a)(2)(iv) (Addressable, per the saved
  text) — and what "addressable" actually obligates Lakeshore to do when a control wasn't
  implemented (assess reasonableness, document why not, implement an equivalent alternative) —
  this is the real mechanism that decides whether the missing encryption was itself a compliance
  gap, independent of whether a breach occurred.

**m4 `breach-notification-and-dual-reporting`.**
- Owns: 164.402's breach definition and its four-factor risk-assessment test (quote in full from
  `sources/cfr/45-164-breach-notification-excerpt.md`); 164.404 (notification to individuals, the
  60-day clock, quote in full); 164.406/164.408 (media and HHS notification, the 500-person
  threshold, quote in full); 164.414 (burden of proof, quote in full). Run the laptop incident
  through the actual four-factor test to reach a reasoned breach/no-breach determination (not
  asserted) — and if module 1 made the laptop's encryption status genuinely uncertain, that
  uncertainty is exactly what this module's reasoning should sit with honestly, the same way this
  curriculum has always modeled a genuine, unresolved-until-reasoned-through finding. Compare the
  60-day HIPAA clock against 606.171's own 45-day BPDR clock (reference only, already fully taught
  in `fda-and-aabb-in-practice`) and say honestly when a single incident could trigger both — e.g.,
  if the same extract's data quality issue also raises an independent, separate question about
  whether a distributed product's safety/purity/potency may have been affected.
- Does **not** own: the investigation mechanics that produce the facts this determination rests on
  (m5, though m4's determination is necessarily provisional on what m5's investigation confirms —
  a drafter's choice how tightly to sequence this, logged either way).
- Scenario: the Director and QA (and likely counsel/compliance, named generically, never a real
  title lifted from Lakeshore's own org chart beyond what's already established) walk through
  164.402's four factors against the actual facts module 1 locked, reach a reasoned determination,
  and map out which notifications are owed, to whom, and on what clock — including whether a
  parallel BPDR analysis is independently warranted.

**m5 `investigating-a-healthcare-data-incident`.**
- This is the course's final module — write a genuine closing passage, per this curriculum's
  established practice.
- Owns: the investigation itself — scoping what was actually on the laptop, confirming or
  resolving the encryption-status question m1/m3 left open, re-running or refining the 164.402
  four-factor assessment m4 began as new facts surface, and reaching a final, honest closing
  decision (resolved cleanly, or honestly left open with a stated next step and owner — both are
  acceptable per this curriculum's established honesty conventions). Introduces no new CFR
  citation; synthesis and application of what modules 1-4 already built.
- Close with a genuine course-ending passage: the arc of all five modules, what's resolved and
  what (if anything) stays open by honest design, and forward pointers to
  `vendor-and-third-party-risk-management` (reading a vendor's own security posture — directly
  relevant if the missing laptop's data was ever synced to a vendor-hosted backup) and the Track 5
  capstone `itsm-for-regulated-blood-services`.

## Sourcing notes (read before citing anything)

**Verified and saved this session:**
- `sources/cfr/45-160.103.md` — covered entity, business associate, health care provider, PHI,
  individually identifiable health information. EXCERPT (full section read, only relevant
  definitions saved).
- `sources/cfr/45-164-privacy-rule-excerpt.md` — 164.502, 164.506, 164.508, 164.512(b), 164.514(d),
  164.524(a)-(b). EXCERPT (each full section read, relevant clauses saved; see the file's own
  "not saved" note for what wasn't captured — 164.510, 164.512's other paragraphs, 164.514(a)-(c)/
  (e)-(g), 164.520/522/526/528/530).
- `sources/cfr/45-164-security-rule-excerpt.md` — 164.306, 164.308, 164.310, 164.312, all quoted
  in FULL (164.314 and 164.316 not fetched).
- `sources/cfr/45-164-breach-notification-excerpt.md` — 164.402, 164.404, 164.406, 164.408,
  164.414, all quoted in FULL (164.412, law-enforcement delay, referenced but not fetched — name
  only that the exception exists, don't describe its mechanics).

**Still NOT verified. Don't assert:**
- Any specific HHS/OCR enforcement action, settlement, or penalty amount — name the possibility
  of enforcement generically, never a real example.
- MedWatch's own specific mechanics (curriculum.md's module list names "FDA BPDR/MedWatch" —
  MedWatch itself, FDA's general adverse-event reporting program, has not been independently
  researched this session; if a module needs MedWatch specifically rather than 606.171's BPDR
  pathway already taught, research and verify it first, or stick to BPDR, which is already fully
  sourced).
- 164.412's law-enforcement-delay mechanics, 164.314/164.316, 164.510, 164.512's non-(b)
  paragraphs, 164.514(a)-(c)/(e)-(g), 164.520/522/526/528/530 — none independently fetched.

## Progress log

- **2026-10-09**: Course scoped (Phase 1/2) by the orchestrating session itself (per
  `create-course`'s instruction to run Phase 2 without delegating). Syllabus page
  (`courses/healthcare-security-and-privacy/index.qmd`, `order: 92`) and this plan written. New
  sources fetched and saved: 45 CFR 160.103 (covered entity/business associate/health care
  provider/PHI definitions), 45 CFR 164's Privacy Rule excerpt (164.502, 164.506, 164.508,
  164.512(b)'s FDA-regulated-product exception, 164.514(d) minimum necessary, 164.524 right of
  access), Security Rule excerpt (164.306, 164.308, 164.310, 164.312, all in full), and Breach
  Notification Rule excerpt (164.402, 164.404, 164.406, 164.408, 164.414, all in full) — all via
  the eCFR Versioner API, full-Part-160/164 XML, verbatim text extraction. `sources/INDEX.md`
  updated. Key decisions: five modules matching `curriculum.md`'s own module list; the course's
  first real question — is Lakeshore a HIPAA covered entity at all — must be reasoned from
  160.103's own text in module 1, not asserted; a fresh, invented incident (a Brookfield laptop
  holding a BECS donor-eligibility extract, gone missing) carries all five modules, with its exact
  facts (encryption status, data fields, any quality-event connection) left to module 1 to decide
  and log, deliberately not resolved too cleanly so the breach determination in m4 has real
  reasoning to do; no `csv-and-becs`/`data-integrity-and-records` locked identifier is reused or
  reopened. `.claude/skills/create-course/SKILL.md`'s running order-counter updated to 103 (this
  course used 92-102, verified by grep with no duplicates before assigning).
  Next: build m1, `information-governance-in-a-covered-entity`.

- **2026-10-09**: Module 1, `information-governance-in-a-covered-entity`, drafted and published
  (`courses/healthcare-security-and-privacy/information-governance-in-a-covered-entity/index.qmd`,
  `order: 93`, ~4,300 words; `resources.qmd`, `order: 94`). Covered-entity reasoning done in full:
  walked 160.103's "covered entity" clause (3) and "health care provider" catch-all ("furnishes,
  bills, or is paid for health care in the normal course of business") to the conclusion that
  Lakeshore plausibly qualifies as a covered entity because it bills hospitals/health plans
  electronically — stated explicitly as a reasoned interpretation nobody at Lakeshore has had
  confirmed by counsel or compliance, not an asserted fact. This course now formally adopts
  "Lakeshore is a covered entity" as its own working premise for modules 2-5, per this plan's own
  instruction. PHI (protected health information) and IIHI (individually identifiable health
  information) definitions quoted in full and applied to BECS's donor-eligibility determinations
  and donation history (BECS referenced only by name/role from `csv-and-becs`; no locked
  identifier from that course touched).

  **The incident — locked facts for modules 2-5, stated exactly:**
  - **Circumstance:** a Brookfield-based staff member traveled to Lakeshore's central site to
    present a deferral-coding consistency review; after the meeting, left their work laptop
    (inside a shoulder bag) in the back seat of a shared ride en route to the airport; the loss
    wasn't discovered until hours later; the device has not been recovered.
  - **Data fields in the extract:** a standing BECS report template, pulled for the review,
    covering a rolling 12-month window at Brookfield, roughly 212 donor records. Six fields per
    donor: BECS-internal donor identifier, donor name, date of birth, each eligibility
    determination with its date, the deferral reason code (where applicable), and total lifetime
    donation count at Lakeshore. The review itself only needed three of the six (donor
    identifier, determination + date, deferral reason code) — name, date of birth, and lifetime
    donation count rode along because the standing template wasn't scoped down. This gap is
    deliberately left open here for `the-hipaa-privacy-rule`'s minimum-necessary (164.514(d))
    teaching moment.
  - **Encryption status: genuinely, honestly unresolved — not resolved either way.** Lakeshore's
    device policy requires full-disk encryption on every end-user laptop, auto-enforced via
    central device management at enrollment, and this laptop was enrolled under that policy. But
    it was issued shortly before a device-management platform migration, and the migration's own
    inventory shows this specific device's encryption-status field as "not reported" (neither
    "on" nor "off") for the window spanning the migration and the loss. The systems administrator
    can confirm enrollment; he cannot yet confirm whether full-disk encryption was actually
    active on this device when it went missing. This ambiguity is intentional and must stay open
    through `security-rule-safeguards-and-part-11` (164.312(a)(2)(iv), addressable) and
    `breach-notification-and-dual-reporting` (164.402's four-factor test) — do not resolve it
    before module 5 reasons it through (or leaves it honestly open).
  - **Quality-event connection: none.** The ~212 donors in the extract are a clean population —
    not connected to any other open deviation, CAPA, or quality event at Lakeshore. No
    `csv-and-becs`/`data-integrity-and-records` locked identifier (VAL-1203, VIA-0842, DEV-1147,
    CAPA-1147-A, VRA-0219, DI-0301, DED-0458, LAB-07) was touched or reopened.

  Sources: no new source fetched this module — `sources/cfr/45-160.103.md` (already saved) was
  the only source used, all four quotes (covered entity, health care provider, PHI, IIHI)
  verbatim from that file. `resources.qmd` links the eCFR page for 45 CFR 160.103 (curl-verified,
  `-L` follows a redirect to 200), 45 CFR 160.102 (applicability, curl-verified 200 via redirect),
  and a Cornell LII mirror of 160.103 (curl-verified 200) — `hhs.gov` pages were tried and
  rejected (403 to `curl`, including with a browser user agent; not used).

  Next: build m2, `the-hipaa-privacy-rule` — apply 164.502(a), 164.506, 164.508(a)(1)/(b)(2),
  164.512(b)(1)(iii), 164.514(d), and 164.524(a)(1)/(b)(2) to this same extract: was pulling it
  for a quality review a permitted use (164.506, health care operations) without an
  authorization, and does the minimum-necessary standard (164.514(d)) flag the three extra
  fields (name, date of birth, lifetime donation count) the review didn't strictly need — a
  concrete minimum-necessary teaching moment independent of how the eventual breach
  determination resolves.

- **2026-10-09**: Module 2, `the-hipaa-privacy-rule`, drafted and published
  (`courses/healthcare-security-and-privacy/the-hipaa-privacy-rule/index.qmd`, `order: 95`,
  ~3,250 words of lesson prose; `resources.qmd`, `order: 96`). All quotes verbatim from
  `sources/cfr/45-164-privacy-rule-excerpt.md` — no other source used, no citation or clause
  number invented.

  **What was reasoned and decided:**
  - **164.502(a) / 164.506(a) applied to the extract pull:** walked 164.502(a)'s default-deny
    standard to its one open door for this scenario — 164.502(a)(1)(ii)'s pointer to 164.506 —
    and reasoned (not asserted) that the Brookfield deferral-coding consistency review plausibly
    qualifies as a "health care operations" use, as a quality assessment/improvement activity
    consistent with what 164.506(a)'s own text permits. **Explicitly flagged limitation, logged
    honestly rather than papered over:** 164.501's own numbered definition of "health care
    operations" was NOT independently fetched or verified this session (per this plan's own
    sourcing notes) — no specific sub-clause of 164.501 was quoted or asserted; the module states
    this gap directly in its own text and in a check-your-understanding question.
  - **164.508(a)(1)/(b)(2) applied:** since the TPO use is reasoned to be permitted under
    164.506(a), 164.508(a)(1)'s authorization requirement never engages for the act of pulling
    the extract — no authorization was needed for that specific act. Stated explicitly, twice in
    the lesson, as a narrow finding: this is a different and separate question from whether
    taking the extract off-site on a laptop was handled safely, which stays `security-rule-
    safeguards-and-part-11`'s and `breach-notification-and-dual-reporting`'s job, not this
    module's.
  - **164.512(b)(1)(iii) quoted in full ((A)-(C)):** explained as the general textual reason a
    real future BPDR filing or Part 7 recall/lookback disclosure wouldn't itself violate the
    Privacy Rule, referencing `filing-a-biological-product-deviation-report`'s already-taught
    606.171 mechanics by name/one line only, not redeveloping them. Explicitly precise that this
    laptop incident is NOT a BPDR-triggering event, consistent with module 1's locked fact that
    the ~212-donor population has no connection to any quality event — the clause explains why
    the two regulatory worlds don't conflict in general, not a claim that this incident is a BPDR
    case.
  - **164.514(d)(1)-(3) applied — this module's real, locked finding:** ran the minimum-necessary
    standard against the exact six-field extract module 1 locked, concluding **the extract as
    pulled likely did NOT satisfy minimum necessary** — three of its six fields (donor name, date
    of birth, lifetime donation count) were not needed for a deferral-coding consistency review
    that only required the donor identifier, the determination + date, and the deferral reason
    code, and the extract came from a standing, routine/recurring report template that
    164.514(d)(3)(i) obligates Lakeshore to have scoped to the purpose of each disclosure — which
    it apparently hadn't. **This finding is independent of the breach question and independent of
    the encryption-status question** — it would hold even if the laptop had never left the
    building. **New locked fact for modules 3-5:** this minimum-necessary gap (extract exceeded
    its purpose by three fields, per a routine/recurring report template never scoped down) is
    now part of this incident's record; later modules may reference it but should not contradict
    or re-litigate it.
  - **164.524(a)(1)/(b)(2) applied lightly, as instructed:** introduced as a separate, standing
    right (donor access to their own eligibility records, 30-day clock, one 30-day extension
    available) unrelated to and unaffected by this incident — not developed further, not treated
    as the center of this module.
  - No `csv-and-becs`/`data-integrity-and-records` locked identifier touched. No real device/OS/
    vendor name or calendar year used in the Lakeshore narrative.

  Sources: no new source fetched — `sources/cfr/45-164-privacy-rule-excerpt.md` (already saved)
  was the only source used, all seven quotes (164.502(a), 164.506(a), 164.508(a)(1), 164.508(b)
  (2), 164.512(b)(1)(iii), 164.514(d)(1)-(3), 164.524(a)(1)/(b)(2)) verbatim from that file.
  `resources.qmd` links the eCFR pages for 164.506, 164.512, and 164.514 — all three curl-verified
  (`curl -s -o /dev/null -w "%{http_code}" -L <url>`, each returned `200`) before publishing;
  164.502, 164.508, and 164.524 were also curl-verified (all `200`) but not included in the final
  resources page, since 164.506/512/514 carry this module's heaviest teaching weight and
  `resources.qmd` only needs 2-4 links.

  Next: build m3, `security-rule-safeguards-and-part-11` — map 164.306/164.308/164.310/164.312
  against Part 11 (11.10, 11.50, 11.70, 11.100, 11.200, 11.300, reference only, already fully
  quoted in `data-integrity-and-records`), and resolve whether the missing laptop's encryption
  status was a Required or an Addressable implementation specification under 164.312(a)(2)(iv)
  (Addressable, per the saved text) — independent of, and without resolving, the breach
  determination itself (m4's job) or re-litigating this module's minimum-necessary finding.
