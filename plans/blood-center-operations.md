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
| 2 | `collection-and-testing` | Follow a donation from venipuncture through the required infectious-disease and blood-typing panel, and explain why nothing leaves quarantine until every result is in | Not started |
| 3 | `component-processing-and-labeling` | Explain how one donation becomes several products with different shelf lives, and read an ISBT 128 label well enough to say what each part of it guarantees | Not started |
| 4 | `storage-distribution-and-hemovigilance` | Track a released unit through storage, shipping, and the hospital transfusion service to the patient, and say what has to happen, and be reported, when something goes wrong | Not started |
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
