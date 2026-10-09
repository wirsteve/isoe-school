# `vendor-and-third-party-risk-management` — course plan

**Status: COMPLETE (5/5 modules published).**

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
| 2 | `reading-a-soc-2-report` | Tell a Type I report from a Type II, name the five Trust Services Criteria, and read a report's complementary-user-entity-controls section and bridge letter for what they mean for Lakeshore. | 106/107 | Published |
| 3 | `reading-an-iso-27001-certificate` | Know what a certificate actually certifies, and read a Statement of Applicability to see which Annex A control domains a vendor claims and which it excludes, with a stated reason. | 108/109 | Published |
| 4 | `business-associate-agreements` | Walk the actual HIPAA text requiring a BAA's contract terms — what it obligates a vendor to do, report, and return or destroy. | 110/111 | Published |
| 5 | `vendor-change-notifications-and-your-own-change-control` | Place a vendor's change-notification/incident-reporting duties against Lakeshore's own change control, and close the course by returning to the Brookfield incident with this course's own new lens. | 112/113 | Published |

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

- **2026-10-09**: Module 2, `reading-a-soc-2-report` (`order: 106/107`), drafted and published.
  SOC 2 handled strictly as a paid/proprietary framework — no AICPA text independently fetched or
  quoted, same tier as ISO 31000/19011/GAMP 5 elsewhere in this curriculum; the citation-decoder
  row names it "industry practice / proprietary framework — described in this curriculum's own
  words, not a cited standard," matching `risk-frameworks-side-by-side`'s handling of ISO 31000.
  Taught, in the lesson's own words only: Type I (design, point in time) vs. Type II (operating
  effectiveness, typically a 6-12 month period — materially stronger assurance); the five Trust
  Services Criteria by name (Security — the only mandatory one, sometimes called the "common
  criteria" — Availability, Processing Integrity, Confidentiality, Privacy), with the vendor
  selecting which of the last four apply to its own report's scope; Complementary User Entity
  Controls (CUECs) as the customer-side-responsibility section a reader often skips; and bridge
  letters as the vendor's own interim attestation covering the gap between a Type II report's
  period-end date and whenever the customer actually relies on it.

  **Reasoned findings applied to the device-management platform vendor — locked for modules 3-5 to
  build on, not contradict:**
  - **Trust Services Criteria selected (reasoned, not asserted):** Security almost certainly (the
    only mandatory criterion, and squarely applicable to a platform managing enrollment, policy
    push, and remote lock/wipe across every device at every site). Availability as the next
    strong, reasoned guess — the platform's core value is being reachable (enrollment, policy
    pushes, and a remote-wipe command only matter if the platform is up when needed, directly
    tying back to `investigating-a-healthcare-data-incident`'s confirmed-issued/never-confirmed-
    delivered wipe command). Confidentiality included as a plausible, reasoned third criterion
    given the e-PHI-adjacent device data this platform's enrolled devices carry off-site (drafter's
    choice, made and justified, not left unaddressed). Processing Integrity and Privacy reasoned
    as less likely selections — this is a device-management function, not a data-transformation
    or primary personal-data-collection function — but not asserted as definitely excluded; the
    module is explicit that only the report's own stated scope section can confirm this.
  - **Type I vs. Type II:** Reasoned toward **Type II** as the stronger, more plausible case for a
    vendor at this scale and this tier — a Type I report would only attest to control *design* on
    one date and could never speak to whether controls held up through an event like a platform
    migration, which is exactly the kind of event sitting at the center of the still-unresolved
    Brookfield question. Framed explicitly as the drafter's reasoned choice, not an asserted fact
    about a real report nobody has read.
  - **CUEC content (concrete, plausible example built for this module):** a clause to the effect
    that the customer is responsible for configuring and enforcing its own device-enrollment and
    encryption policies, and for confirming encryption status on each device before it is placed
    into field or travel use. Explicitly tied back, honestly and without altering any locked fact,
    to `investigating-a-healthcare-data-incident`'s own root-cause ranking (the deployment-
    sequencing gap, ranked ahead of the physical-handling gap and the minimum-necessary gap) and
    that course's own finding that the vendor's migration defect was a known, disclosed issue
    class, not a hidden vendor failure, while Lakeshore's own *verification* of this one device's
    encryption status — not the vendor's control over the device — was the actual gap. The module
    states plainly that a SOC 2 report was never going to reveal one laptop's actual encryption
    status on one day (that remains the permanent unknown `investigating-a-healthcare-data-
    incident` already closed), but that an earlier reading of this exact CUEC section would have
    told Lakeshore, in writing, that this verification was always Lakeshore's own job.
  - **Bridge letter determination:** reasoned, not asserted as a fixed fact — a meaningful gap
    almost certainly exists between a Type II report's past period-end date and the date Lakeshore
    is reading it for the first time (this file didn't exist until this course started), so the
    module's conclusion is to check that gap against today's date, request a bridge letter now,
    and build a standing annual request for one into this vendor's ongoing file review — not a
    one-time check.

  Files written: `courses/vendor-and-third-party-risk-management/reading-a-soc-2-report/
  index.qmd` (lesson, ~3,820 words including front matter/markup) and `.../resources.qmd`.
  Resources link two AICPA public pages about SOC 2 (`https://www.aicpa-cima.com/resources/
  landing/soc-2` and `https://www.aicpa-cima.com/topic/audit-assurance/audit-and-assurance-
  greater-than-soc-2-greater-than-soc-for-service-organizations`), both curl-verified 200 this
  session directly against the live AICPA domain. Note for whoever next edits these links:
  AICPA's site is a client-rendered React application — curl confirms the pages are live and
  served from aicpa-cima.com (200, real HTML shell), but page-specific `<title>`/meta content
  isn't present in the server-rendered markup to grep for, so reachability was verified by status
  code and URL/domain, the same depth of verification module 1 applied to its AABB links, not by
  reading rendered page text. No AICPA text was fetched or quoted anywhere in the lesson itself.
  Resources also link back to module 1 (`supplier-qualification-and-risk-tiering`) rather than
  re-linking `healthcare-security-and-privacy` directly, since module 1 already carries that link
  and this module assumes module 1 was read first. No new regulatory/standard source saved to
  `sources/`; no change to `sources/INDEX.md` needed.
  Next: build m3, `reading-an-iso-27001-certificate`. Whoever drafts it still needs to
  independently find and curl-verify ISO's own public catalogue page for ISO/IEC 27001:2022 before
  publishing a link — not resolved this session either; see m3's own guardrails above.

- **2026-10-09**: Module 3, `reading-an-iso-27001-certificate` (`order: 108/109`), drafted and
  published. ISO/IEC 27001 handled strictly as a paid/proprietary international standard — no ISO
  text independently fetched or quoted, no specific Annex A control number asserted anywhere, same
  tier as ISO 31000/19011/GAMP 5/SOC 2 elsewhere in this curriculum; the citation-decoder row names
  it "industry practice / proprietary framework — described in this curriculum's own words, not a
  cited standard," matching module 2's own SOC 2 row exactly. Taught, in the lesson's own words
  only: a certificate attests to an ISMS (Information Security Management System) — the vendor's
  *process* for selecting, implementing, and reviewing controls, not a certification of zero
  incidents or of every individual technical control directly; the two-stage initial audit (Stage
  1 documentation review, Stage 2 implementation audit) followed by periodic surveillance audits
  (commonly annual) and a longer recertification cycle (commonly three years); a certificate's
  stated **scope** (which org unit/location/system it actually covers — the single most commonly
  overlooked thing when reading one); and the **Statement of Applicability (SoA)** — every control
  domain, implemented vs. formally excluded with a stated reason, an exclusion not automatically a
  red flag unless unexplained or implausible. Only general, widely known control-domain categories
  were named (access control, supplier relationships, change management, incident management,
  business continuity, asset management) — no specific control numbering scheme asserted, per the
  module's own guardrail.

  **Scope-verification finding applied to the device-management platform vendor (reasoned, not
  asserted as fact about a real document — locked for modules 4-5 to build on, not contradict):**
  the module's central teaching move is that a real, currently valid ISO 27001 certificate can
  still fail to cover the specific device-management product Lakeshore actually uses, if that
  product sits in a different business unit, a different data-center footprint, or was simply never
  brought inside the certified boundary — so the first, non-skippable step in reading this vendor's
  certificate is confirming its own stated scope names the actual product and environment Lakeshore
  relies on, not just the vendor's corporate name. The lesson does not assert a specific real-world
  outcome (i.e., it doesn't claim the vendor's actual scope does or doesn't cover the product) —
  it teaches the scope-verification *method* and flags that skipping this check is the most common
  reader error, consistent with the module's own guardrails.

  **SoA control-domain findings for the device-management platform vendor (reasoned):** three
  domains were identified as most relevant to the Brookfield incident and walked through
  individually — **change management** (most directly relevant: a mature, properly implemented
  change-management domain would plausibly include validating that compliance-relevant fields, like
  a device's encryption-attestation status, survive a migration or get re-verified afterward,
  directly on point for the deployment-sequencing gap `investigating-a-healthcare-data-incident`
  already ranked as the incident's most structural root cause); **supplier relationships** (relevant
  because the vendor's own migrations likely involve its own downstream providers, and a vendor
  that manages its own supplier risk is doing to its suppliers what this course is now doing to it);
  and **asset management** (relevant because the entire failure class here is, at bottom, a tracked
  asset — one enrolled device — whose state wasn't reliably carried through a transition).

  **Honest reasoning on prevention (matches module 2's own honest conclusion and
  `investigating-a-healthcare-data-incident`'s locked findings, does not contradict either):** the
  module states plainly that ISO 27001 certification would **not** have definitely prevented the
  Brookfield migration-era defect. A certified ISMS with change management genuinely implemented
  *plausibly reduces the likelihood* of this class of gap — it does **not** guarantee zero defects,
  because the standard certifies a management process, checked at a point in time and on an ongoing
  surveillance cycle, not perfection on every migration for every customer. This is explicitly tied,
  without altering any locked fact, to `investigating-a-healthcare-data-incident`'s own finding that
  the vendor's migration defect was a known, disclosed issue class, not a concealed failure —
  reasoned in the lesson as consistent with a vendor that has *some* functioning change-management
  discipline, just not one airtight enough to catch this one device's attestation gap. The lesson's
  own "check your understanding" Q3 states this explicitly as a locked teaching point: reading the
  certificate and SoA earlier would have been a real, useful signal to act on, not a guarantee the
  incident could never have happened.

  **How the ISO link issue was resolved:** tried, in order — (1) direct `curl` against ISO's own
  site: `iso.org/standard/27001`, `iso.org/search.html?q=27001`, `iso.org/isoiec-27001-information-
  security.html`, and the bare root `iso.org`/`iso.org/home.html` all returned HTTP 403 (ISO's own
  bot-protection block, consistent with this curriculum's prior experience with ISO 31000/19011,
  just wider here — even the root domain was blocked, not only a specific standard page); (2) the
  Internet Archive's Wayback Machine availability API (`archive.org/wayback/available`), tried
  multiple times across this session with pauses in between in case the rate limit cleared, returned
  HTTP 429 every single time; its CDX API alternative (`web.archive.org/cdx/search/cdx`) was blocked
  outright by this environment's own egress policy, not by archive.org itself; (3) a specific ANSI
  webstore URL guess (`webstore.ansi.org/standards/iso/isoiec270012022`) returned 403; (4) a guessed
  BSI product-page URL (`bsigroup.com/.../ISO-IEC-27001-Information-Security-Management/`)
  301-redirected to a generic "explore standards by category" landing page, not content specifically
  about ISO 27001, so it was **not** used. Per the module's own explicit instruction not to guess or
  fabricate a catalogue number, **no ISO.org link was published.** In its place, two independent,
  directly curl-verified pages from accredited ISO 27001 certification bodies were found and used
  instead — `bsigroup.com/en-GB/iso-27001-information-security/` (HTTP 200, title confirmed "ISO
  27001 - Information Security Management | BSI UK") and `nqa.com/en-us/certification/standards/
  iso-27001` (HTTP 200, title confirmed "ISO 27001 for Information Security | Get Certified") — both
  disclosed explicitly in `resources.qmd` as certification-body pages, not ISO's own site, with the
  full attempt history stated honestly so a future session can retry ISO's own catalogue page once
  this environment's block may have lifted.

  Files written: `courses/vendor-and-third-party-risk-management/reading-an-iso-27001-certificate/
  index.qmd` (lesson, ~3,400 words including front matter/markup) and `.../resources.qmd`. No new
  regulatory/standard source saved to `sources/`; no change to `sources/INDEX.md` needed (no new
  verbatim source was fetched — ISO/IEC 27001 remains, deliberately, never independently fetched
  anywhere in this curriculum).
  Next: build m4, `business-associate-agreements`.

- **2026-10-09**: Module 4, `business-associate-agreements` (`order: 110/111`), drafted and
  published. 164.314(a) (full, Security Rule side, including (a)(2)(i)(C)'s incident/breach-
  reporting clause) and 164.504(e)(1)-(2) (full, Privacy Rule side, including the
  (e)(2)(ii)(A)-(J) ten-item contract-terms checklist) both quoted verbatim from
  `sources/cfr/45-164-business-associate-excerpt.md`, the only source used. 164.308(b), 164.410,
  and 164.502(e) named only, never quoted or paraphrased beyond naming that they exist, per the
  module's own guardrail and the source file's own "not saved" section.

  **The central reasoned question, answered — locked for module 5 to build on:** does Lakeshore
  actually need a BAA with the device-management platform vendor? **Reasoned conclusion: plausibly
  yes, not certainly yes.** The case for "maybe not" was walked honestly first — the platform's
  core function (device configuration, enrollment, policy push) doesn't inherently require reading
  the *content* on a device, the same way a shipping company doesn't need to know what's in the box
  it carries. The case against that comfortable answer, built entirely on `healthcare-security-and-
  privacy`'s own locked facts (not reopened or altered): this vendor's enrollment/check-in
  telemetry and migration tooling plausibly involve awareness of what data types a device carries,
  and its remote lock/wipe capability acts directly on a device's data layer regardless of whether
  any vendor employee ever views donor data. Weighing both, the module concludes this vendor
  plausibly crosses from "manages the box" into "maintains, or has the practical ability to access,
  PHI on Lakeshore's behalf" — the general, well-established HIPAA threshold for requiring a BAA
  (referenced only as a general concept, tied loosely to 164.308(b)/164.502(e) which the module
  explicitly does NOT quote or cite for specific mechanics, consistent with the source file's own
  note that those sections weren't independently fetched). The module states plainly, and locks for
  module 5: this is a reasoned judgment, not a certified legal determination — the actual,
  defensible answer requires Lakeshore's own counsel/compliance reading the real contract and
  determining whether it already functions as a BAA in substance or needs converting into one. The
  scenario's actual contract-on-hand was described as a standard commercial services agreement with
  a thin "Data Protection Addendum" that does not appear to meet the (e)(2)(ii)(A)-(J) checklist as
  found — not asserted as a certain real-world fact, consistent with the module's own "reasoned, not
  certain" framing throughout.

  **Checklist findings, (e)(2)(ii)(A)-(J) applied concretely to this vendor — locked for module 5:**
  (A) permitted/required uses tied directly to `healthcare-security-and-privacy`'s own locked
  minimum-necessary finding (three of six Brookfield extract fields never needed to travel
  off-site) as the operational content a use-limitation clause should encode; (B) safeguards tied to
  this course's own module 2 (SOC 2 Type II, Security/Availability criteria) and module 3 (ISO 27001
  certificate, change-management/asset-management SoA domains) as the evidence a vendor would offer
  to demonstrate it meets this clause, explicitly framed as evidence FOR the clause, not a substitute
  for it; (C) incident/breach reporting identified as the single highest-value clause for this
  vendor specifically, reasoned as the textual basis for the proactive notice Lakeshore would have
  wanted during the Brookfield migration, explicitly not used to reopen or alter
  `investigating-a-healthcare-data-incident`'s own closed breach determination (locked as
  unchanged — Q3 in the lesson states this explicitly); (D) subcontractor flow-down tied back to
  module 3's "supplier relationships" SoA domain finding; (E)-(G) access/amendment/accounting walked
  as a real, if narrow, exposure for a device-management platform's own enrollment/telemetry
  records; (H) carrying-out-the-covered-entity's-own-duties noted as a narrow fit for this vendor
  type; (I) Secretary access for compliance review and (J) return-or-destroy-at-termination both
  walked as non-negotiable, with (J) tied forward to the vendor's own migration/offboarding history
  as a reason to confirm this clause in writing now.

  Files written:
  `courses/vendor-and-third-party-risk-management/business-associate-agreements/index.qmd` (lesson,
  ~4,400 words including front matter/markup — slightly over this course's usual ~3,400-3,800 word
  range because the module's job required quoting both CFR provisions in full verbatim plus walking
  all ten (e)(2)(ii) sub-clauses concretely against the vendor; judged a reasonable, deliberate
  exception given the source material) and `.../resources.qmd`.

  **eCFR link issue, same class of problem module 3 hit with ISO.org, resolved differently:** eCFR's
  own human-readable pages (`www.ecfr.gov/current/...`, the exact URLs already recorded in the saved
  source file) were tried directly this session — plain `curl`, with a browser user-agent, and with
  `--compressed` — and every attempt redirected to `unblock.federalregister.gov`, a bot-protection
  wall specific to this environment. The eCFR Versioner API itself (machine-readable XML, reached
  with `--compressed`) DID return HTTP 200 with current section text matching the saved excerpt,
  confirming eCFR's underlying data is live, but that endpoint isn't a page for a person to read.
  Resolved by linking GovInfo (the U.S. Government Publishing Office's own official archive)
  instead: both section pages
  (`govinfo.gov/app/details/CFR-2023-title45-vol2/CFR-2023-title45-vol2-sec164-314` and `...-
  sec164-504`) curl-verified HTTP 200 this session, and — since GovInfo's own page title tag is
  client-rendered and uninformative (the same AICPA-page situation module 2 already documented) —
  additionally cross-checked by reading GovInfo's underlying XML for both sections directly, which
  was confirmed word-for-word against the quotes in this lesson. `resources.qmd` discloses the full
  attempt history and suggests eCFR's own current-text pages as the better source for a future
  session or reader whose own connection isn't blocked. No new regulatory source fetched (the
  excerpt file was already complete and correct from scoping); no change to `sources/INDEX.md`
  needed.

  Next: build m5, `vendor-change-notifications-and-your-own-change-control` — this course's FINAL
  module. It should reference, not re-quote, (a)(2)(i)(C)/(e)(2)(ii)(C)'s incident-reporting clause
  as the BAA-specific instance of the broader vendor-change-notification theme, place it against
  Lakeshore's own internal change-control process (`quality-system-essentials`, reference only), and
  close the course with a genuine ending passage per this curriculum's established practice (arc of
  all five modules; what's resolved; what stays open by honest design — the Brookfield incident's own
  permanently unresolved encryption status; forward pointer to the Track 5 capstone
  `itsm-for-regulated-blood-services`).

- **2026-10-09**: Module 5, `vendor-change-notifications-and-your-own-change-control` (`order:
  112/113`), drafted and published — **this course's final module. The course is now COMPLETE,
  5/5.** Owns synthesis only, no new citation: 45 CFR 164.314(a)(2)(i)(C)/164.504(e)(2)(ii)(C), the
  incident-reporting clause, is referenced and partially restated (one short fragment, clearly
  flagged as already quoted in full in module 4) rather than re-quoted at length, exactly per the
  module's own guardrail. `quality-system-essentials/change-control-for-regulated-systems` (that
  course's module 4, the five-stage request→impact-assessment→approval→implementation→verification
  process, Quality as a required approver) was read in full and referenced by name — its mechanics
  were not redeveloped here.

  **The central teaching move, locked:** a vendor's **incident-reporting duty** ((a)(2)(i)(C)/
  (e)(2)(ii)(C)) is reactive — it obligates the vendor to report only after it becomes aware
  something has already gone wrong. A **change-notification clause** — not a HIPAA requirement,
  a possible negotiated contract term — would be proactive, obligating advance notice of a planned
  material change (an infrastructure migration, a platform upgrade, a subcontractor change). These
  are different promises, and conflating "they have to report incidents" with "they have to warn us
  before they do something that could cause one" is named explicitly as the module's central,
  real-world trap. Per this course's own locked facts (`healthcare-security-and-privacy`'s closed
  incident), the device-management platform vendor's earlier migration happened without, as far as
  established, any advance notice Lakeshore could have acted on ahead of time — the structural gap
  this module's proposed fix addresses going forward, not retroactively.

  **Scenario used:** a routine quarterly vendor "what's new" email, three paragraphs into which sits
  a disclosure of an upcoming backend-infrastructure consolidation ("no expected disruption"),
  recognized by the Director as structurally identical to the kind of event that produced the
  Brookfield incident. The QA's own instinct — "doesn't the BAA already cover this?" — is used as the
  live demonstration of the trap, then corrected.

  **A second conflation named and resolved, consistent with module 3's own locked SoA (Statement of
  Applicability) finding:** the vendor's plausible ISO/IEC 27001 "change management" SoA domain
  (module 3) governs the vendor's own **internal** change process — it is not, and was never asserted
  to be, a contractual promise to notify Lakeshore specifically before a change. A vendor can have a
  mature internal change-management domain and zero contractual duty to warn any given customer in
  advance; these rest on different documents (the vendor's own ISMS vs. the signed contract).

  **Honest reasoning on the contract-gap question, locked as this course's actual closing
  position:** a change-notification clause is a genuine, real, forward-looking improvement worth
  Lakeshore pursuing at this vendor's next contract renewal — the single most directly on-point fix
  this course's five modules have identified for preventing a *repeat* of the visibility gap
  `investigating-a-healthcare-data-incident` already ranked as the incident's structural root cause.
  It is explicitly **not** a retroactive fix: `investigating-a-healthcare-data-incident`'s own final,
  closed determination (164.404 individual-notification clock, no BPDR, the laptop's encryption
  status permanently, honestly unresolved) is not reopened, altered, or in any way changed by this
  module. And whether the clause actually gets added is stated plainly as a genuine, unresolved,
  forward decision this course sets up (a contract-renewal negotiation for Lakeshore's own
  procurement/legal/compliance function to run) and explicitly does not resolve — consistent with
  this course's own established pattern of honest, undecided endings (module 2's eventual-bridge-
  letter check, module 4's "ask counsel" conclusion).

  **The course-closing passage, written into the lesson's own final section:** summarizes the arc of
  all five modules (tiering → SOC 2 → ISO 27001 → BAA → change notifications); states what's now
  resolved (a real, applied tiering scheme; the vendor's own SOC 2 report and ISO 27001
  certificate/SoA actually read; a reasoned BAA position and full checklist walkthrough); states what
  stays open by honest design (the Brookfield incident's own permanently unresolved encryption
  status — not reopened, only lensed; whether the contract actually gets strengthened — a forward
  decision, not resolved here); and forward-points explicitly to the Track 5 capstone,
  `itsm-for-regulated-blood-services`, naming this course's vendor-relationship crosswalk thinking as
  exactly the kind of problem-management-shaped reasoning that capstone generalizes.

  Files written:
  `courses/vendor-and-third-party-risk-management/vendor-change-notifications-and-your-own-change-
  control/index.qmd` (lesson, ~3,845 words including front matter/markup) and `.../resources.qmd`.
  No new external source fetched or cited — `resources.qmd` states this plainly and links back to
  module 4 (the incident-reporting clause), `quality-system-essentials/change-control-for-regulated-
  systems` (referenced, not redeveloped), module 3 (the ISO 27001 change-management SoA finding), and
  `healthcare-security-and-privacy/investigating-a-healthcare-data-incident` (the closed incident
  this course's running example is built on). No `csv-and-becs`/`data-integrity-and-records`/
  `healthcare-security-and-privacy` locked identifier or fact was touched, reopened, or altered.

  **Course complete: 5/5 modules published.** `plans/curriculum.md`'s progress tracker and "Next up"
  line are being updated in this same session to reflect this course's completion and to point to
  the next course in the curriculum's own recommended sequence.
  Next (for the curriculum, not this course — this plan file's own job is done): see
  `plans/curriculum.md` for what's next across the whole curriculum.
