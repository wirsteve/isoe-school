# Learner profile

Read by every lesson-building session so scenarios, ITSM bridges, and difficulty land right.
This describes the learner in general professional terms only — no employer name, no real
system or vendor names. See `CLAUDE.md` rule 2.

## Who they are

A Director of IT Service Operations & Excellence at a multi-state blood services organization.
Supervises a Quality Analyst as a direct report. Reports into IT leadership (a CIO) but sits at
the table with the Quality/Regulatory organization, Medical Director, and Compliance.

## What they already know (don't re-teach this)

- **ITSM/ITIL fluency.** Incident, problem, change, configuration/CMDB, service catalog,
  service level management, continual improvement — all familiar as practices, in the ITIL v3/v4
  vocabulary. Every lesson should bridge new regulatory/quality concepts to this vocabulary
  rather than explain ITSM basics from scratch.
- **General IT operations leadership.** Comfortable with vendor relationships, budgets, staff
  management, incident command, executive reporting, and translating technical risk into
  business risk for non-technical leaders.
- **Working knowledge of "IT compliance" in the generic sense** — SOX-style controls, generic
  change advisory boards, generic access reviews — but not the blood-industry-specific
  regulatory framework (FDA biologics regulation, AABB accreditation, BECS-specific
  requirements) that sits on top of it.

## What they don't know yet (this is the gap the curriculum fills)

- Blood center operations end to end: the donor-to-hospital pipeline and where each regulated
  step sits.
- The FDA/AABB/CLIA/state regulatory landscape specific to blood establishments, and how to
  read and cite it correctly.
- AABB Quality System Essentials (QSEs) as a formal framework: deviations, CAPA, change control,
  document control, audits, in the specific vocabulary an assessor or inspector uses.
- Computerized system validation (GAMP 5, IQ/OQ/PQ) and what makes Blood Establishment Computer
  Software (BECS) different from a normal enterprise application.
- 21 CFR Part 11 electronic records/signatures and ALCOA+ data integrity as applied to blood
  records specifically.
- How to review and defend a Quality Analyst's work product (deviation write-ups, CAPA
  effectiveness checks, validation packages) well enough to catch what an inspector would catch.

## How to use this in a lesson

- When introducing a new regulatory or quality concept, bridge it to the closest ITIL practice
  first ("this is change enablement, but the CAB includes a Quality Analyst and the record has
  to survive an FDA inspector's question"). Don't explain what a CAB is — they know.
  Don't explain what CAPA is without also bridging it, because they don't know it yet.
- Assume executive-level reasoning ability and business-risk framing already exist. Don't
  over-explain "why documentation matters to a business" — do explain "why this specific
  documentation gap is a 483 waiting to happen."
- The "explain it to your CIO in two sentences" check-yourself question (see `TEACHING.md`)
  should assume a CIO who is smart, cares about risk and cost, but doesn't know AABB/FDA
  specifics either — so the two sentences must translate, not just summarize.
- Scenarios use the fictional Lakeshore Blood Center and can involve a Quality Analyst
  character reporting to the learner's role, since directing that relationship is part of the
  curriculum (see `plans/curriculum.md` Track 6).
