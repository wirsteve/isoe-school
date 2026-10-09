# `vendor-and-third-party-risk-management` — course plan

Read this whole file before drafting any module. Update the module table and append a progress
log entry after every module, same discipline as every other course in this curriculum.

## Finish line

Read a SOC 2 report and an ISO 27001 certificate/Statement of Applicability well enough to know
what they do and don't cover, tier a vendor's risk, and say what a BAA and a vendor change notice
each obligate you to do.

## Why this course exists, and what it must not re-teach

- **`quality-system-essentials`**'s change control module already teaches Lakeshore's own
  internal change-control process in depth. Module 5 of this course places a vendor's own
  change-notification duty directly against that process; it does not re-teach change control
  from scratch.
- **`grc-frameworks-and-risk-management`** already teaches a full categorize→select→implement→
  assess→authorize→monitor cycle and risk tiering by impact. Module 1 of this course may reuse
  "tiering by impact" vocabulary by name without rebuilding the cycle.
- **`healthcare-security-and-privacy`** already built the device-management platform vendor and
  its migration incident in depth (the Brookfield laptop, the permanently unresolved encryption
  question). This course reuses that vendor and incident as its own running example — never
  contradicting anything that course locked, including its own final, honest determination that
  the encryption status will likely never be known.

**Through-line characters, reused, not re-established:** the Director (learner, second person
"you"), the Quality Analyst ("she," competent, improving), the unnamed systems administrator
("he"). Locations: Lakeshore's central site, Brookfield, Fairview.

## This course's own scenario — locked once, here, for every module to share

The running example is **the device-management platform vendor** from `healthcare-security-and-
privacy` — never given a real product/vendor name, described generically throughout (as that
course already did). Lakeshore, prompted directly by the unresolved Brookfield incident, decides
to formally evaluate this vendor's own security posture and contractual obligations for the first
time — not because the incident proved the vendor did anything wrong (it didn't; the migration's
data-loss defect was a disclosed, known issue class, per that course's own locked finding), but
because the incident exposed that Lakeshore had never actually tiered this vendor's risk, read its
assurance reports, or confirmed what its own contract requires.

**Do not reopen or alter anything `healthcare-security-and-privacy` locked**, including: the
incident's own facts (the Brookfield laptop, the six-field extract, the permanently unresolved
encryption status), the final breach determination (164.404/164.408(c) notification proceeding,
no BPDR triggered), and the ranked root cause (the deployment-sequencing gap, ahead of the
physical-handling gap, ahead of the minimum-necessary severity-multiplier). This course's own new
material is entirely about the vendor relationship itself — tiering it, reading its assurance
reports, and formalizing its contract terms — not about re-litigating the incident's own facts.

No calendar years in the Lakeshore narrative. Never name a real vendor, product, device-management
platform, OS, or cloud-platform brand.

## Modules

| # | Slug | Finish line | `order:` | Status |
|---|---|---|---|---|
| — | (syllabus) | — | 103 | Published |
| 1 | `supplier-qualification-and-risk-tiering` | Apply AABB's QSE 4 (Supplier and Customer Issues) to a real vendor decision: which vendors need deep qualification and which don't, and why that's risk-tiering, not a one-size-fits-all checklist. | 104/105 | Published |
| 2 | `reading-a-soc-2-report` | Tell a Type I report from a Type II, name the five Trust Services Criteria, and read a report's complementary-user-entity-controls section and bridge letter for what they mean for Lakeshore. | 106/107 | Not started |
| 3 | `reading-an-iso-27001-certificate` | Know what a certificate actually certifies, and read a Statement of Applicability to see which Annex A control domains a vendor claims and which it excludes, with a stated reason. | 108/109 | Not started |
| 4 | `business-associate-agreements` | Walk the actual HIPAA text requiring a BAA's contract terms — what it obligates a vendor to do, report, and return or destroy. | 110/111 | Not started |
| 5 | `vendor-change-notifications-and-your-own-change-control` | Place a vendor's change-notification/incident-reporting duties against Lakeshore's own change control, and close the course by returning to the Brookfield incident with this course's own new lens. | 112/113 | Not started |

The next course after this one continues at **114**. Update `create-course`'s SKILL.md when this
course's numbering is final (verify by grep with no duplicates before assigning, same discipline
as every prior course) — already done as part of Phase 2 scoping below.

## Module-by-module guardrails and sourcing

**m1 `supplier-qualification-and-risk-tiering`.**
- Owns: AABB's QSE 4, "Supplier and Customer Issues" (named and themed only, from
  `sources/aabb/qse-framework.md` — "qualifying and managing suppliers and customer agreements,"
  no Standards text quoted); building a real risk-tiering scheme for Lakeshore's vendors (e.g.,
  high-tier: vendors touching e-PHI or validated-system data directly, like the device-management
  platform or BECS-adjacent tooling; lower-tier: a vendor supplying generic office equipment with
  no data access) — a direct, named callback (one line, don't redevelop) to
  `grc-frameworks-and-risk-management`'s categorize-by-impact vocabulary.
- Does **not** own: SOC 2 or ISO 27001 report-reading mechanics (m2/m3); BAA contract terms (m4).
- Scenario: the Director, prompted by the Brookfield incident, asks why the device-management
  platform vendor was never formally tiered, and builds the tiering scheme that should have
  existed before this incident, applying it retroactively to place that vendor in its proper tier
  (high, given it touches e-PHI-adjacent device data directly) alongside 2-3 other invented,
  generic, lower-stakes vendor examples for contrast.

**m2 `reading-a-soc-2-report`.**
- Owns: SOC 2 (AICPA's System and Organization Controls framework) — a paid/proprietary framework,
  never independently fetched or quoted. Describe, in this course's own words, the real, publicly
  known structure: **Type I** (controls designed appropriately as of a point in time) vs. **Type
  II** (controls operating effectively over a period, typically 6-12 months — the stronger
  assurance); the **five Trust Services Criteria** (Security, Availability, Processing Integrity,
  Confidentiality, Privacy — Security is the only one every SOC 2 report must include; the other
  four are selected by the vendor based on what it wants assessed); **complementary user entity
  controls (CUECs)** — controls the report explicitly states the *customer* (Lakeshore) must
  implement for the vendor's own controls to work as intended, a frequently-missed section; and a
  **bridge letter** (a vendor's own interim attestation covering the gap between a Type II
  report's period-end date and the date Lakeshore is actually relying on it). Name an AICPA public
  page if useful, verified reachable this session.
- Does **not** own: ISO 27001 (m3, a different, non-US-specific framework from a different body);
  BAA mechanics (m4).
- Scenario: Lakeshore finally requests and reads the device-management platform vendor's own SOC 2
  report for the first time. Walk a realistic read: which Trust Services Criteria the vendor
  selected (reasoned, not asserted — e.g., Security and Availability, given what the vendor's
  platform does), whether it's Type I or Type II (drafter's choice, reasoned), what the CUEC
  section actually requires of Lakeshore (a concrete, plausible example — e.g., Lakeshore must
  itself enforce its own device-enrollment policy; the vendor's own controls assume Lakeshore does
  its part), and whether a bridge letter is needed given the report's own period-end date relative
  to when Lakeshore is reading it.
- **Scenario note on the Brookfield incident:** the SOC 2 report's CUEC section is a strong,
  honest place to reveal that the migration-era data-loss defect, if real and known to the vendor,
  should show up (or conspicuously not show up) in the report's own described controls and
  exceptions — a genuine teaching moment about what a SOC 2 report can and can't promise, without
  re-litigating or altering `healthcare-security-and-privacy`'s own locked facts.

**m3 `reading-an-iso-27001-certificate`.**
- Owns: ISO/IEC 27001 — a paid international standard, never independently fetched or quoted,
  named and described in this course's own words only, the same handling this curriculum gives
  ISO 31000 and ISO 19011. Describe the real, publicly known structure: a certificate attests
  that a vendor's **information security management system (ISMS)** — not every individual
  control, the *management system* that governs how controls are chosen, implemented, and
  reviewed — meets the standard, following an initial audit (Stage 1 documentation review, Stage 2
  implementation audit) and **surveillance audits** on an ongoing cycle; the certificate itself
  typically states a **scope** (what part of the vendor's organization/systems it actually
  covers — a certificate can be real and still not cover the specific system Lakeshore uses); and
  the **Statement of Applicability (SoA)** — the document listing every Annex A control domain,
  which ones the vendor has implemented, and which it has formally excluded with a stated
  justification (exclusion isn't automatically a red flag; an unjustified or implausible exclusion
  is).
- Does **not** own: SOC 2 (m2, already built); BAA mechanics (m4).
- Scenario: Lakeshore requests the device-management platform vendor's ISO 27001 certificate and
  SoA. Walk a realistic read: confirm the certificate's stated scope actually covers the product
  Lakeshore uses (not just "the company is certified" in some other business unit); check the SoA
  for the control domains most relevant to the Brookfield incident (e.g., supplier relationships,
  change management, asset management) and reason honestly about whether an ISO 27001 certificate
  would have prevented or caught the migration-era defect (a good, honest answer: a certified ISMS
  reduces the likelihood of this class of gap but doesn't guarantee zero defects — the standard
  certifies a management *process*, not perfection).
- **Sourcing note:** ISO's own public listing page for ISO/IEC 27001 was not successfully
  identified or verified this session (ISO's site blocks this environment's proxy the same way it
  has for ISO 31000/19011 elsewhere in this curriculum, and the Wayback Machine's own availability
  API was rate-limited when checked). Whoever drafts this module must independently find and
  curl-verify ISO's real catalogue page for the current edition (ISO/IEC 27001:2022) — via a
  direct check, a Wayback Machine snapshot, or a reliable secondary source (e.g., a national
  standards body's own listing) — before publishing a link. Do not guess a catalogue number.

**m4 `business-associate-agreements`.**
- Owns: 45 CFR 164.314(a) (quote in full from `sources/cfr/45-164-business-associate-excerpt.md`)
  and 164.504(e)(1)-(2) (quote in full from the same file) — the actual required BAA contract
  terms: permitted/required uses, safeguards, incident/breach reporting to the covered entity
  ((a)(2)(i)(C) and (e)(2)(ii)(C) — the real textual basis for a vendor's reporting duty), making
  PHI available for access/amendment/accounting, subcontractor flow-down, Secretary access for
  compliance review, and the return-or-destroy-at-termination requirement. Apply this directly:
  does Lakeshore actually have a BAA with the device-management platform vendor, and if the
  platform never touches PHI directly (a device-management tool manages devices, not necessarily
  PHI itself) — a genuinely interesting, honest question worth reasoning through rather than
  assuming a BAA is automatically required for every vendor Lakeshore uses.
- Does **not** own: SOC 2/ISO 27001 (m2/m3, already built); the vendor's own change-notification
  practice generally (m5, though (a)(2)(i)(C)'s reporting clause is the BAA-specific instance of
  that broader theme).
- Scenario: the Director asks whether Lakeshore's contract with the device-management platform
  vendor is actually a BAA, or just a standard commercial services agreement — and reasons through
  whether one is legally required here (depends on whether the platform creates, receives,
  maintains, or transmits PHI on Lakeshore's behalf — a device-management tool that only manages
  device configuration and never touches BECS data directly might not need one; one that pulls
  device-level data including the kind of extract the Brookfield laptop carried might. Reason this
  honestly, don't assert either way without working through the actual facts established in
  `healthcare-security-and-privacy`).

**m5 `vendor-change-notifications-and-your-own-change-control`.**
- This is the course's final module — write a genuine closing passage, per this curriculum's
  established practice.
- Owns: synthesis only, no new citation. Place a vendor's own change-notification duty — real
  contractual instances include (a)(2)(i)(C)/(e)(2)(ii)(C)'s incident-reporting clause (reference,
  already quoted in m4, don't re-quote at length) and, more broadly, whatever a vendor's own
  contract says about notifying Lakeshore before a material change (a platform migration, for
  instance — the exact kind of event that produced the Brookfield incident's unresolved
  encryption question) — directly against Lakeshore's own internal change-control process
  (`quality-system-essentials`'s change-control module, reference only, not re-taught). The real
  teaching point: Lakeshore controls and reviews its own changes to BECS and the eQMS; it has no
  equivalent visibility into a vendor's own change calendar unless the contract requires advance
  notice — and per this course's own locked facts, the device-management platform's migration
  happened without (as far as established) any advance notice Lakeshore could have acted on. Ask,
  honestly, whether that's a contract gap worth fixing going forward (a change-notification clause
  Lakeshore's current agreement may not have), without pretending this course can retroactively
  fix the Brookfield incident itself.
- Close with a genuine course-ending passage: the arc of all five modules (supplier tiering → SOC
  2 → ISO 27001 → BAA → vendor change notifications), what's now resolved (Lakeshore has a real
  vendor-risk tiering scheme, has actually read this vendor's own assurance reports, knows what
  its BAA does or doesn't require), what stays open by honest design (the Brookfield incident's
  own encryption status, still permanently unresolved — this course adds a lens, not a retroactive
  fix), and forward pointers to the Track 5 capstone `itsm-for-regulated-blood-services`.

## Sourcing notes (read before citing anything)

**Verified and saved this session:**
- `sources/aabb/qse-framework.md` — already saved (QSE 4, "Supplier and Customer Issues," named
  only, reused from earlier in this curriculum).
- `sources/cfr/45-164-business-associate-excerpt.md` — 164.314(a) (full) and 164.504(e)(1)-(2)
  (full), both verbatim, via the eCFR Versioner API, full-Part-164 XML.

**Still NOT verified. Don't assert:**
- SOC 2's actual AICPA-authored text (the Trust Services Criteria's own detailed point-of-focus
  language, the actual structure of a real report) — never independently fetched. Describe the
  publicly known structural facts (Type I/II, the five criteria's names, CUECs, bridge letters)
  in this course's own words; never quote or cite an AICPA document by section/paragraph number.
- ISO/IEC 27001's actual text (Annex A's specific control names/numbers beyond general, publicly
  known categories like "supplier relationships" or "access control") — never independently
  fetched. Describe the certificate/SoA structure in general terms; never invent a specific Annex
  A control number.
- ISO's own public catalogue page for ISO/IEC 27001:2022 — not identified or verified this
  session (blocked by ISO's own bot protection; Wayback Machine rate-limited when checked).
  Whoever drafts m3 must independently find and verify this link before publishing.
- 164.308(b), 164.410, and 164.502(e) — referenced by the saved BAA excerpt but not independently
  fetched. Name only that they exist; don't quote or paraphrase their specific mechanics.

## Progress log

- **2026-10-09**: Course scoped (Phase 1/2) by the orchestrating session itself (per
  `create-course`'s instruction to run Phase 2 without delegating). Syllabus page
  (`courses/vendor-and-third-party-risk-management/index.qmd`, `order: 103`) and this plan
  written. New source fetched and saved: 45 CFR 164.314(a) and 164.504(e)(1)-(2), the full
  required Business Associate Agreement contract-terms text, via the eCFR Versioner API
  (full-Part-164 XML, already cached locally from scoping `healthcare-security-and-privacy`).
  `sources/INDEX.md` updated. Key decisions: five modules matching `curriculum.md`'s own module
  list; the running example is the device-management platform vendor from
  `healthcare-security-and-privacy`, reused deliberately (per that course's own forward-pointer)
  rather than inventing a fresh vendor, since the Brookfield incident is the natural reason
  Lakeshore would finally formalize this vendor relationship — no fact that course locked is
  reopened or altered, only the vendor-relationship lens is new. SOC 2 and ISO 27001 both handled
  as paid/proprietary frameworks, paraphrase-only, the same tier as ISO 31000/19011 elsewhere in
  this curriculum — neither was independently fetched. ISO 27001's own public catalogue link
  could not be verified this session (ISO's site blocked this environment's proxy and the Wayback
  Machine's availability API was rate-limited); flagged explicitly in m3's own guardrails for
  whoever drafts that module to resolve before publishing. `.claude/skills/create-course/
  SKILL.md`'s running order-counter updated to 114 (this course used 103-113, verified by grep
  with no duplicates before assigning).
  Next: build m1, `supplier-qualification-and-risk-tiering`.

- **2026-10-09**: Module 1, `supplier-qualification-and-risk-tiering` (`order: 104/105`), drafted
  and published. AABB's QSE 4 named and themed only, no Standards text quoted, no standard number
  invented — this module makes that limitation explicit to the learner instead of glossing over
  it (QSE 4's own title drift between the 2021 proposed framework, "Supplier and Customer
  Agreements," and the 2023/34th-edition proposal, "Suppliers and Customers," is used as the
  teaching point for why no precise sentence gets attributed to AABB). One-line callback to
  `categorize-and-select-controls`'s confidentiality/integrity/availability framing included,
  not redeveloped.

  **The tiering scheme built — locked for modules 2-5 to build on:**
  Three tiers (High / Medium / Low), decided by four questions asked in order for any vendor:
  (1) **Data touch** — does the vendor touch PHI/e-PHI, directly or indirectly/adjacently, at
  all; (2) **System criticality** — does the vendor support a validated system (BECS-adjacent) or
  the eQMS; (3) **Access level** — logical/data access into Lakeshore's environment, or physical-
  only/no access; (4) **Blast radius** — how far a failure of the vendor's own security or
  availability would spread (one shipment/lot, or multi-site/data-confidentiality).
  - **High** = a meaningful "yes" on data touch or system criticality, *paired with* logical/data
    access, where blast radius reaches across sites or touches data confidentiality directly. Gets
    a full qualification file: documented tier decision, the vendor's own assurance evidence (SOC
    2/ISO 27001 — m2/m3), contract terms reviewed specifically for its risk (BAA — m4).
  - **Medium** = no data access and no validated-system/eQMS touch, but the vendor's product or
    service still bears on a regulated process or product quality (a failure could plausibly
    produce a deviation/CAPA). Gets a lighter record: confirmation of what's supplied, a basic
    quality agreement where relevant, periodic review.
  - **Low** = no data access, no validated-system touch, no plausible path to a quality or
    compliance consequence — failure is purely operational (delay, cost). Gets a basic vendor
    record only.

  **Vendor placements (all locked facts for m2-m5):**
  - **The device-management platform vendor — High.** Data touch: yes (manages devices carrying
    e-PHI-adjacent extracts off-site, per `healthcare-security-and-privacy`'s own locked
    Brookfield facts — not reopened or altered here). System criticality: adjacent to BECS (the
    platform isn't BECS itself, but manages devices that carry BECS-adjacent extracts). Access
    level: logical/data access (enrollment, check-in telemetry, remote lock/wipe, migration of
    account data). Blast radius: multi-site, both confidentiality and availability exposure. All
    four questions land high-side — reasoned as having always been High tier; the file simply
    never existed until today.
  - **A reagent/consumables supplier (invented, generic) — Medium.** No data access, no validated-
    system/eQMS touch, but reagent quality bears directly on testing accuracy (a GMP-governed
    process) — a bad lot could produce an invalid test run and a vendor-caused deviation/CAPA.
    Blast radius bounded to a lot/site, not multi-site, not a confidentiality event. The
    instructive middle case: no data touch, still not Low.
  - **A facilities/janitorial services vendor (invented, generic) — Low, with a named condition.**
    No data/system access; physical presence limited to common areas (not server rooms or
    restricted equipment areas) as currently contracted. Blast radius: operational only (missed
    cleaning, scheduling delay). Explicit condition recorded: if this vendor's access ever expands
    to a restricted area, re-run all four questions — Low isn't assumed permanent.
  - **An office-supplies vendor (invented, generic) — Low.** No data/system access beyond a
    delivery dock; blast radius is a delayed shipment. The clean, uncontroversial Low case.

  Files written: `courses/vendor-and-third-party-risk-management/supplier-qualification-and-risk-
  tiering/index.qmd` (lesson, ~3,470 words including front matter/markup) and
  `.../resources.qmd`. Resources link AABB's "Updated Quality Systems Essentials" page and the
  proposed 34th-edition Standards PDF (both curl-verified 200 this session; the first page's own
  un-redirected URL 301-redirects to the second, confirmed via `curl -L`), plus an internal link
  back to `healthcare-security-and-privacy/investigating-a-healthcare-data-incident` for the
  incident this module reuses. No new regulatory source fetched — QSE 4 reused entirely from the
  already-saved `sources/aabb/qse-framework.md`; no change to `sources/INDEX.md` needed.
  Next: build m2, `reading-a-soc-2-report`.
