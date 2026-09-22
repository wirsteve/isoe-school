# Plan — `blood-center-operations` (Track 1)

Course page: `courses/blood-center-operations/index.qmd`.
This file is the memory between sessions. Update the status table and append to the progress
log at the end of every module.

## Finish line

Walk a unit of blood from donor screening to hospital transfusion, name the regulated step at
each stage, and say which systems (BECS, LIS, HIS) touch it.

## Prerequisites

All three foundations, done and published. Link back to them rather than re-teaching:
`foundations/reading-a-cfr-citation`, `foundations/regulatory-landscape-orientation`,
`foundations/risk-and-controls-vocabulary`. In particular, do not re-explain how to read a
citation, the regulation/guidance/standard distinction, or likelihood–severity–detectability.
Use that vocabulary as if the learner owns it, because they do.

## Modules

Build in order. One module per session (lesson `index.qmd` + `resources.qmd`).

| # | Slug | Finish line | Status |
|---|---|---|---|
| 1 | `donor-recruitment-and-screening` | Walk a donor from recruitment through registration, health history, and the eligibility decision, and name the record that proves that decision was made correctly | Published |
| 2 | `collection-and-testing` | Follow a donation from venipuncture through the required infectious-disease and blood-typing panel, and explain why nothing leaves quarantine until every result is in | Published |
| 3 | `component-processing-and-labeling` | Explain how one donation becomes several products with different shelf lives, and read an ISBT 128 label well enough to say what each part of it guarantees | Published |
| 4 | `storage-distribution-and-hemovigilance` | Track a released unit through storage, shipping, and the hospital transfusion service to the patient, and say what has to happen, and be reported, when something goes wrong | Published |
| 5 | `becs-in-the-pipeline` | Point at every place BECS touches the pipeline, and say in two sentences to a CIO why it isn't governed like a normal enterprise application | Not started |

Pages live at `courses/blood-center-operations/<slug>/index.qmd` and `.../resources.qmd`.
The sidebar picks them up automatically via the `courses/**` glob in `_quarto.yml` — nothing
to add there. The course syllabus page is `order: 1`, so **module pages use `order:` 2, 3, 4,
5, 6** in that sequence, or they'll sort above the syllabus.

## Scoping decisions (read before drafting any module)

### Altitude

Director altitude, per the learner profile: enough to place each regulated step and know which
system touches it. Not phlebotomy technique, not assay chemistry, not centrifuge settings.
The test for any paragraph: does it help him ask a better question of his Quality Analyst, a
vendor, or an inspector? If not, cut it.

### Where each module stops (guard these boundaries)

- **1 → 2 boundary:** module 1 ends the moment the donor has been determined eligible and has
  consented — *before* the needle. Module 1 owns recruitment and drive logistics, registration
  and donor identity, the donor history questionnaire, eligibility criteria and vitals,
  deferral decisions and the deferral registry, and the donor record. It does **not** cover the
  collection itself.
- **2 → 3 boundary:** module 2 owns the donation event and everything done to *test* it —
  venipuncture and the donor-to-unit identity link, whole blood vs. apheresis, donor adverse
  reactions, the sample tubes, the infectious-disease screening panel, ABO/Rh and antibody
  testing, and the quarantine-until-results-are-in logic plus what happens on a reactive result
  (unit disposition, donor deferral, notification/lookback). Module 3 owns everything done to
  *manufacture and label* the products.
- **Important nuance to teach in module 2 or 3, not both:** the pipeline is not strictly
  serial. Components are physically separated within hours of collection while testing is still
  running. That parallelism is exactly *why* quarantine and label control matter. Put the
  parallel-track explanation in module 2 (as the reason quarantine exists) and have module 3
  refer back to it in one line, not re-explain it.
- **3 → 4 boundary:** module 3 ends when a component carries a complete, correct label and is
  eligible for release into inventory. Module 3 owns separation into components (red cells,
  plasma, platelets, cryoprecipitate), modifications (leukoreduction, irradiation, washing,
  pooling), component-specific expiration dating and why it differs, the container label's
  required content, the Circular of Information, and ISBT 128 in full. Module 4 owns everything
  after the label: storage and monitoring, inventory, shipping, distribution to the hospital,
  what the hospital's transfusion service does, transfusion, and what happens afterward.
- **4 → 5 boundary:** modules 1–4 are the *pipeline*, told in order, naming systems only in
  passing ("BECS holds the deferral record," "the label prints from BECS"). Module 5 is the
  *systems* pass over that same pipeline. No module 1–4 should stop to explain what makes BECS
  regulatorily unusual; that's module 5's whole job.

### First-use framing (these recur for the rest of the curriculum — get them right once)

- **BECS (Blood Establishment Computer Software)** is first *named* in module 1, defined in one
  clause as the system of record for donor eligibility and deferrals, and nothing more. Modules
  2, 3, and 4 each name one more thing BECS does (holds units in quarantine and releases them;
  controls whether a final label can print; drives inventory, shipping, and final disposition)
  without generalizing. **Module 5 is the real introduction**: what BECS is, why FDA treats it
  as a regulated medical device rather than ordinary enterprise software, and what that changes
  about patching, change control, vendor relationship, and defect reporting. Every later
  reference in Tracks 3, 5, and 6 assumes module 5's framing, so it has to be the definitive
  one. (Note: TEACHING.md still requires defining the acronym on first use in *each* lesson.)
- **ISBT 128** is first *named* in module 2 only to the extent that the donation gets a unique
  Donation Identification Number at collection that ties donor, unit, and sample tubes together
  — one sentence, with a forward pointer. **Module 3 is the real introduction**: ISBT 128 as an
  international labeling and barcoding standard, ICCBBA as the registration authority behind
  it, what the data structures on the label each identify, and why a globally governed
  identifier is the backbone of traceability. Module 4 then uses it for traceback/lookback
  without re-teaching it. Later tracks (data integrity, unique donor identification across
  sites) assume module 3's treatment.
- **LIS vs. HIS** get distinguished properly in module 4, where both the blood center's and the
  hospital's systems are in play, and the handoff boundary between "our system" and "their
  system" becomes the point. Earlier modules can name LIS in passing for donor testing.

### ITSM/ITIL bridge angle per module (the lesson spine step 2 needs one)

Noted here so whoever drafts a lesson doesn't have to invent it cold. These are angles, not
finished copy.

1. **Donor recruitment and screening** — identity and authoritative master data. The deferral
   registry is a single source of truth that must be consulted before service is delivered, and
   a stale or unmerged donor record is a data-quality defect with a patient-safety consequence.
   Also service intake: eligibility screening is an intake gate with a documented decision.
2. **Collection and testing** — quarantine is a change freeze / release gate. Nothing moves to
   the next environment until every check has passed and the result is recorded; a reactive
   result is a failed gate with downstream notification obligations, not just a red flag in a
   report.
3. **Component processing and labeling** — configuration identity and naming standards. ISBT
   128 is what a CMDB naming convention would look like if an international registration
   authority enforced it and an inspector audited it. Label template and product-code table
   updates are changes under change control, not content edits.
4. **Storage, distribution, and hemovigilance** — monitoring, alerting, and major-incident
   handling. Temperature monitoring is condition monitoring with alarms and defined response;
   a transfusion reaction is the incident, hemovigilance reporting is the external
   notification obligation, and traceback is problem management with regulatory deadlines.
5. **BECS in the pipeline** — the richest bridge: change enablement under a validated state
   (why you can't just patch on Tuesday), service asset and configuration management, and the
   fact that a BECS incident may simultaneously be a quality event. This is where the learner's
   existing ITIL fluency does the most work.

### What belongs to later tracks — do not teach it here

- **Validation, GAMP 5, IQ/OQ/PQ, the V-model, 510(k) detail.** Module 5's job is to make the
  case that BECS is a different animal and to set up Track 3's `csv-and-becs`. It explains
  *why* validation is heavier here; it does not teach *how* to validate. End module 5 with an
  explicit hand-off to that course.
- **Deviations, CAPA, and the mechanics of Biological Product Deviation Reports.** Module 4
  names the reporting obligations that exist and why they exist. The process depth is Track 2
  (`quality-system-essentials`, `fda-and-aabb-in-practice`).
- **Part 11, ALCOA+, audit trails, retention detail.** Named in passing at most; Track 3 owns
  them.
- **HIPAA and donor privacy.** Out of scope here. Track 4.

### Sourcing notes

`sources/` currently holds only `606.160` (records), `606.100` (SOPs), and `606.171` (product
deviation reporting) — see `sources/INDEX.md`. Every other citation this course needs must be
fetched with the `fetch-source` skill before it's quoted or cited. Likely areas to look up,
listed as **pointers to verify, not as citations** — do not cite anything from this list until
the actual text is in `sources/`:

- 21 CFR Part 606 (current good manufacturing practice for blood and blood components) — the
  spine of modules 2, 3, and 4, including its records, labeling, equipment, and quarantine
  sections.
- 21 CFR Part 630 (requirements for blood and blood components, including donor eligibility) —
  module 1.
- 21 CFR Part 610 (general biological product standards) and Part 640 (additional standards for
  blood products) — modules 2 and 3.
- 21 CFR Part 600 (fatality and adverse-experience reporting) — module 4.
- ICCBBA public material on ISBT 128 — module 3, for the standard itself (a standard, not a
  regulation: label it as such).
- FDA guidance on blood establishment computer software — module 5. Guidance, not regulation;
  say so plainly.

AABB standards may be cited by number and title only, never quoted. If a specific standard
number can't be verified from public material, say so in the lesson rather than guessing, and
flag it in the progress log below.

## Progress log

- **2026-09-22** — Course scoped (Phase 1/2). Syllabus page and this plan written; no lesson
  content yet. Five modules fixed as listed above, matching the module list in
  `plans/curriculum.md`. Key decisions recorded above: the 2→3 boundary is testing vs.
  manufacture-and-label (with the parallel-track nuance taught in module 2), the 3→4 boundary
  is the completed label, and modules 1–4 stay narrative about systems so module 5 can own the
  BECS argument. ISBT 128 is introduced properly in module 3; BECS is introduced properly in
  module 5 and only named before then. Next: build module 1,
  `donor-recruitment-and-screening` — it will need at least one donor-eligibility source
  fetched into `sources/` first.
- **2026-09-22** — Module 1, `donor-recruitment-and-screening`, drafted (lesson `index.qmd` +
  `resources.qmd`), not yet published. Fetched two new sources via the eCFR Versioner API:
  `sources/cfr/630.10.md` (general donor eligibility requirements — the main citation, covering
  paragraphs (a) and (d) through (h): consulting the deferred-donor record, the DHQ medical
  history assessment, physical assessment/vitals including the hemoglobin/hematocrit cutoffs,
  proof-of-identity, and the must-not-collect-if-ineligible consequence) and
  `sources/cfr/630.40.md` (deferred-donor notification requirements — the 8-week notification
  clock and required content). Both appended to `sources/INDEX.md`. Lesson scenario: a donor
  deferred for a low hemoglobin reading at one Lakeshore drive site attempts to donate again
  three days later at a different site, testing whether the deferral registry (maintained under
  606.160(e), consulted per 630.10(d)(1)) actually resolves him as the same person — used to
  teach the ITSM bridge (donor identity/deferral registry as authoritative master data; a stale
  or unmerged donor record as a data-quality defect with a patient-safety consequence) and the
  intake-gate framing for eligibility screening. BECS named exactly once, defined in one clause
  as "the system of record for donor eligibility and deferrals," per the module-5 hand-off rule.
  Module ends at consent, before venipuncture — collection itself was not covered.
  Resources.qmd links (Cornell LII 630.10, Cornell LII 630.40, Cornell LII Part 630 browse
  index, GovInfo CFR collection) all verified via curl to return real content before listing.
  Nothing flagged as uncertain. Next: module 2, `collection-and-testing` — will need Part 606
  (quarantine/testing sections), Part 610, and Part 640 sources fetched; can reuse 606.160
  already on hand for the records angle.
- **2026-09-22** — Module 2, `collection-and-testing`, drafted (lesson `index.qmd` +
  `resources.qmd`), not yet published. Fetched two new sources via the eCFR Versioner API:
  `sources/cfr/610.40.md` (test requirements — the core infectious-disease testing panel,
  the default-hold-until-tested rule in (g), and the reactive-result shipment/use restriction
  in (h)(1); paragraphs (c) and (d), covering dedicated and autologous donation exceptions, were
  left out of the local excerpt as out of scope) and `sources/cfr/606.40.md` (facilities — found
  by checking Part 606 Subpart C per the scoping note, and it turned out to hold a direct,
  citable quarantine requirement: (a)(3)/(4)/(6) require a designated quarantine storage location
  for products pending testing, pending repeat testing, and for unsuitable products). Both
  appended to `sources/INDEX.md`. Reused already-saved `sources/cfr/606.160.md` for two more
  clauses not yet quoted elsewhere in this course: (c) (the donor-number/identity link — the
  regulatory basis for the DIN forward-pointer) and (b)(1)(iii) (donor adverse reaction records).
  Did not fetch 606.145 (platelet bacterial detection) — judged unnecessary for a director-level
  treatment of this module's scope and would have crowded the lesson without adding a citation
  the finish line needs. Did not find or cite a Part 606 Subpart E source for ABO/Rh typing
  procedure itself, since the only codified typing requirements found are inside 606.121
  (labeling), which is explicitly module 3's territory — typing is described narratively in the
  lesson instead of citing a labeling-section clause out of scope.
  Scenario: a Tuesday-morning whole blood donation is fully processed into three separated
  components (red cells, plasma, platelets, in three different storage locations) by Tuesday
  afternoon while the sample tubes are still running the infectious-disease panel; Wednesday, one
  test comes back reactive, and all three products — not one — have to be located and quarantined
  by the same donation number. Used to teach the ITSM bridge (quarantine as a change freeze /
  release gate, not a sequencing rule — parallel work is normal, the gate is what matters) and the
  parallelism nuance the plan flagged: components get physically separated within hours of
  collection while testing runs in parallel, which is exactly why quarantine status (not
  processing order) is the real control. DIN (Donation Identification Number) forward-pointer
  language used: "This number is the seed of something you'll get the full picture of in module
  3: the Donation Identification Number, or DIN — a globally standardized identifier under a
  labeling system called ISBT 128. One sentence is all this module needs; the rest is module 3's
  job." Module 3 should pick up ISBT 128 from that exact framing (DIN already named and defined
  as an acronym; don't redefine DIN as a new acronym, and don't re-explain the donor-number-links-
  everything concept, which is grounded here in 606.160(c)). BECS was not renamed or redefined in
  this module — not mentioned at all, since nothing in this module's scope needed a new one-clause
  addition to the BECS definition (the module-5 hand-off rule expects one new thing per module,
  but quarantine status here is described as a system behavior generally, not attributed
  specifically to BECS by name, since the donation/testing systems in play are more the LIS
  (laboratory information system, named only in passing) than BECS specifically — worth a check in
  module 5 that this doesn't create a gap in the "BECS does X" accumulation). Resources.qmd links
  (Cornell LII 610.40, Cornell LII 606.40, Cornell LII Part 610 browse index, GovInfo CFR
  collection) all verified via curl to return real content before listing. Nothing else flagged as
  uncertain. Next: module 3, `component-processing-and-labeling` — will need component-specific
  processing/modification and labeling sources (606.121 labeling, and Part 640 component-specific
  standards) fetched, plus ICCBBA public material for ISBT 128 itself.
- **2026-09-22** — Module 3, `component-processing-and-labeling`, drafted (lesson `index.qmd` +
  `resources.qmd`), not yet published. Fetched two new sources via the eCFR Versioner API:
  `sources/cfr/606.121.md` (Container label — the core citation for this module: general label
  requirements in (a)-(b), required content in (c)(1)-(4)/(c)(8)/(c)(9), the machine-readable
  barcode requirement in (c)(13) listing unique facility identifier/lot number/product code/ABO-Rh
  as the required minimum data elements, the color-coding rules in (d), and the "NOT FOR
  TRANSFUSION" and emergency-release labeling in (f)/(h); product-specific subparagraphs under (e)
  for Whole Blood/Red Blood Cells/Plasma/Source Plasma and the autologous-labeling content under
  (i) were summarized rather than quoted in full, as director-altitude judgment — full text is
  linked via Cornell LII in resources.qmd) and `sources/cfr/610.53.md` (Dating periods for Whole
  Blood and blood components — the full storage-temperature/dating-period table, used to show that
  one donation's components run on genuinely different expiration clocks: platelets 5 days,
  red cells 21-42 days depending on additive/irradiation, plasma frozen up to 5 years, cryo 1
  year). Both appended to `sources/INDEX.md`. Confirmed by direct grep of both fetched Part 606
  and Part 610 XML that neither ISBT 128 nor ICCBBA is named anywhere in either part's text — this
  grounds the module's regulation-vs-standard teaching point (606.121(c)(13) requires *a*
  CBER-approved machine-readable format with specific data elements; it never mandates ISBT 128 by
  name) with actual source verification, not assumption.
  ISBT 128 given its full, definitive treatment per the module-3 hand-off rule: defined as an
  international standard (not regulation, not AABB Standard) for terminology/identification/
  coding/labeling of blood, cell, tissue and other products of human origin, maintained by ICCBBA
  (International Council for Commonality in Blood Banking Automation), a global nonprofit
  registration/standards-management authority. Covered in the lesson: the DIN (picked up directly
  from module 2's one-sentence forward-pointer, not redefined as a new acronym), the product code
  (what it identifies — component + modifications + additive/anticoagulant — and why an outdated
  product-code-table entry is a real labeling problem even when the physical product is correct),
  ABO/Rh and expiration date/time as the other core machine-readable elements, and ICCBBA's role
  administering the "unique facility identifier" 606.121(c)(2)/(c)(13)(A) requires without naming
  who assigns it. ICCBBA's own site (iccbba.org) was reachable and fetched successfully (both via
  WebFetch and via curl returning HTTP 200 on the homepage) — used for the standard's own framing
  language ("global standard for the terminology, identification, coding and labeling of medical
  products of human origin," ICCBBA as "the standards development and management authority for
  ISBT 128," Code 128/2-D data matrix/RFID as delivery mechanisms). One page fetch returned HTTP
  404 from curl (`iccbba.org/isbt-128/`) despite WebFetch rendering real-looking content from the
  same URL — treated as unverified and not used or linked; the resources.qmd link instead points to
  the confirmed-200 homepage. Flag for later modules: exact DIN character structure (country/year
  encoding, digit count) and exact product-code format were **not** independently verified via a
  live fetch beyond ICCBBA's general framing language — the lesson describes both functionally
  (what they identify and why) without asserting a specific character structure, and no later
  module should assume more precision than that unless a session fetches and verifies ICCBBA's more
  detailed technical documentation.
  Scenario: continuing Tuesday's donation from module 2, a vendor-pushed BECS update at 2 a.m.
  refreshes ICCBBA's product code table mid-shift with no change-control review; ~40 units label
  Print between 2:00-6:15 a.m. carrying now-outdated product codes before anyone catches it at
  shift handoff. Used to teach the ITSM bridge exactly as scoped (ISBT 128 as a CMDB naming
  convention enforced by an international registration authority and auditable by an inspector;
  a product-code-table push into a live labeling system as a change under change control, not a
  content edit) and to ground the "label is governed data, not a sticker" trap. BECS named for a
  third time, third clause: "it controls whether a final label can print" — exact wording an
  inspector/module-5 session should reuse for consistency.
  **Release-eligible hand-off wording for module 4**: this module ends with "a component isn't
  eligible for release into inventory until it carries a complete, correct label reflecting
  [separation, modifications, dating] — accurately, and against the *current* version of whatever
  table or standard the label's coded content depends on." Module 4 should open from a component
  that has already cleared that bar — storage, shipping, distribution, and hospital handoff of an
  already-correctly-labeled unit, not labeling itself.
  Resources.qmd links (Cornell LII 606.121, Cornell LII 610.53, ICCBBA homepage, GovInfo CFR
  collection) all verified via curl/WebFetch to return real content (HTTP 200) before listing.
  Next: module 4, `storage-distribution-and-hemovigilance` — will need storage/shipping/
  distribution and hemovigilance/adverse-event-reporting sources (likely Part 606 storage/
  distribution sections beyond 606.40, and Part 600 fatality/adverse-experience reporting per the
  sourcing notes above) fetched.
- **2026-09-22** — Module 4, `storage-distribution-and-hemovigilance`, drafted (lesson `index.qmd`
  + `resources.qmd`), not yet published (per this session's instructions — written for review,
  not committed/pushed). Fetched three new sources via the eCFR Versioner API: `sources/cfr/
  606.165.md` (Distribution and receipt; procedures and records — the paired shipper/receiver
  record, (a)-(c), that marks the exact point a unit crosses from Lakeshore's system into a
  hospital's), `sources/cfr/606.170.md` (Adverse reaction file — (a) the investigation-and-
  forwarding requirement for any adverse reaction, including the "copies... forwarded to and
  maintained by the manufacturer or collecting facility" clause when the product is found at
  fault, and (b) fatal-complication reporting to CBER within 7 days, filed by the collecting
  facility for a donor reaction or by the facility that performed compatibility testing for a
  transfusion reaction — this is the fatality-reporting citation the task asked to verify, and it
  checked out cleanly, real section, confirmed text, no invented numbering needed), and
  `sources/cfr/600.15.md` (Temperatures during shipment — the product-by-product shipping
  temperature table; saved with the full table verbatim, including the vaccine rows outside this
  lesson's scope, per the fetch-source skill's verbatim-only rule, rather than trimming the
  source file itself). All three appended to `sources/INDEX.md`. Reused already-saved
  `sources/cfr/606.160.md` for one more clause (b)(3)(iii), storage temperature charts, already
  established in the reading-a-cfr-citation foundation lesson — no new fetch needed. Did not
  re-fetch or re-quote 606.171 (BPDR reportability); referenced the risk-and-controls-vocabulary
  foundation lesson by name instead, per the module's explicit scope limit (deviations/CAPA/BPDR
  mechanics belong to Track 2). Could not find or use a real AABB public hemovigilance page —
  aabb.org's own pages returned 404 on every URL pattern tried (site appears to be JS-rendered,
  no crawlable links found in raw HTML either) — resources.qmd uses four verified links instead
  (three Cornell LII mirrors plus GovInfo), which is within TEACHING.md's 2-4 range; flagging this
  in case a later session wants to try again with a working AABB URL.
  LIS vs. HIS given their first proper, distinguishing treatment per the module-4 hand-off rule:
  LIS defined as the hospital-side lab/blood-bank system running compatibility testing and
  crossmatch; HIS defined as the hospital's broader clinical/EHR-adjacent system holding nursing
  documentation and the transfusion record itself. Framed as a real governance question (what
  data crosses the Lakeshore-to-hospital boundary via 606.165(b)/(c)'s paired records — the lot
  number, but not Riverside's crossmatch results or HIS documentation) rather than a technical
  aside. BECS given its fourth and final clause in this course's running definition: "it drives
  inventory, shipping, and final disposition" — exact wording, one clause only, matching the
  module-5 hand-off rule; the other three clauses (system of record for donor eligibility/
  deferrals — module 1; gate for quarantine release — module 2; controls whether a final label
  can print — module 3) are named in this module's own text for module 5 to reference directly
  when it assembles the full BECS picture.
  Scenario: a released, correctly labeled unit of leukoreduced Red Blood Cells ships from
  Lakeshore to a fictional Riverside General Hospital with an in-range temperature chart the
  whole trip (used to teach storage/shipping monitoring as a control that worked, not a
  near-miss); Riverside crossmatches and transfuses it two days later; ten minutes in, the patient
  has a non-fatal febrile-type reaction, which triggers Riverside's 606.170(a) investigation and
  raises the question of what Lakeshore's obligations are versus Riverside's. Used to teach the
  ITSM bridge exactly as scoped (temperature monitoring as condition monitoring with alarms and a
  defined response; the reaction as the incident; hemovigilance reporting as the external
  notification obligation; traceback as problem management on a regulatory clock) and to ground
  two common traps: "once it ships, it's the hospital's problem" (busted by 606.170(a)'s
  forwarding-to-Lakeshore clause) and confusing Riverside's transfusion service with an extension
  of Lakeshore's own quality system (it isn't — separately regulated, inspected on its own cycle).
  Check-understanding Q2 is deliberately a "this is NOT a regulatory requirement" question (a
  non-fatal reaction does not trigger 606.170(b)'s FDA notification, only (a)'s internal
  investigation/forwarding), per TEACHING.md's requirement that not every question resolve to
  "yes, cite the rule."
  Resources.qmd links (Cornell LII 606.165, Cornell LII 606.170, Cornell LII 600.15, GovInfo CFR
  collection) all verified via curl to return HTTP 200 before listing. Nothing else flagged as
  uncertain.
  **For module 5, `becs-in-the-pipeline` (the last module of this course):** all four BECS
  clauses are now on record, verbatim, ready to be assembled — (1) module 1: "the system of
  record for donor eligibility and deferrals," (2) module 2: holds units in quarantine and
  releases them (described narratively as "no product carrying this donation's identifier moves
  past release... until BECS says the gate has opened," not tied to a single quoted clause
  because module 2 deliberately treated quarantine status as a general system behavior rather
  than naming BECS by name — worth double-checking this doesn't read as a gap when module 5
  assembles the full picture), (3) module 3: "it controls whether a final label can print," (4)
  module 4: "it drives inventory, shipping, and final disposition." Module 5 should also pick up
  the LIS/HIS distinction from this module rather than re-deriving it, and can lean on this
  module's framing of the hospital handoff as the moment BECS visibility ends and a
  Lakeshore-external system takes over. Next: module 5, `becs-in-the-pipeline` — the real, full
  introduction to BECS (why FDA treats it as a regulated medical device, not ordinary enterprise
  software) and this course's hand-off to Track 3's validation/CSV coursework. Likely needs FDA
  guidance on blood establishment computer software fetched and verified (guidance-tier, not
  regulation — label it as such).
