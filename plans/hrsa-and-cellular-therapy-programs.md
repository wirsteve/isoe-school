# `hrsa-and-cellular-therapy-programs` — course plan

Read this whole file before drafting any module. Update the module table and append a progress log
entry after every module.

Added 2026-11-13 at the user's request ("I need HRSA … where they might be touched by IT"). Track 7,
course 4.

## Finish line

Explain which HRSA program touches a blood center (the C.W. Bill Young Cell Transplantation Program:
its donor registry, cord blood inventory and outcomes database) and which other rules ride along with
it (FDA's 21 CFR 1271 and biologics licensing for cord blood; CLIA for the donor infectious-disease testing, with HLA identity testing on cells/tissue outside CLIA). Then say exactly
where IT carries the obligations: registry donor data and its confidentiality, cord blood unit
identification, records and tracking, and the data feeds a blood center sends into the program. That
is enough to put these systems under the same control as BECS and to answer a regulator's or the
program's questions about them.

## Sources (all local)

| Source | Tier | Use for |
|---|---|---|
| `sources/usc/42-usc-274k-274l.md` | Statute | 274k(a) Secretary acting through the HRSA Administrator, by contract; (b) recognized accreditation entities (do **not** name them, since no source does); (d) program functions: matching and search systems, (d)(3) single point of access and **standard dataset in standardized electronic format**, (d)(4) "qualified cord blood bank" incl. **(D) strict confidentiality** and **(F) confidential maternal linkage**; (f) bone marrow standards incl. **(f)(5) confidentiality and disclosure purposes** and **(f)(6) integrating donor files with the Program**; (m) records; **(n) criminal penalty for disclosure**; 274l outcomes database (standardized electronic format; public data without individually identifiable information). Statutory note: Cord Blood Inventory (Pub. L. 109–129 § 2): contracts with qualified cord blood banks; **(b)(5)/(b)(6) data in standardized electronic format** to the program and the outcomes database; 10-year participation |
| `sources/hrsa/cw-bill-young-program-operators.md` | Contract holders' own pages | CIBMTR holds the SCTOD contract; NMDP operates the program; TRANSPLANT Act set to expire Sept. 30, 2026, with a 2025 reauthorization bill introduced (advocacy page) |
| `sources/cfr/21-1271-hctp-excerpt.md` | Regulation | 1271.1 scope (361 vs 351 HCT/Ps); 1271.3(d) HCT/P definition incl. HPCs from peripheral and cord blood, and **exclusions: blood components (d)(2), minimally manipulated bone marrow (d)(4)**; 1271.10, 1271.15; donor eligibility 1271.45/.47/.50/.55; CGTP 1271.150/.160; 1271.250 labeling; 1271.260 storage; **1271.270 records** (10-year retention); **1271.290 tracking** (distinct identification code: no name/SSN/MRN; new-code mapping procedure; tracking both directions); **1271.330** (subpart E reporting does **not** apply to 351 biological products); 1271.350 reporting (361 HCT/Ps only) |
| `sources/fda-web/approved-hpc-cord-blood-products.md` | FDA information page | licensed HPC, Cord Blood products exist and some holders are community blood centers. **Never name any listed organization in a lesson.** |
| `sources/cms/qso-25-18-clia-applicability-2025.md` | CMS policy memo | CLIA applicability. **Cells/tissue table: "Identity testing (ABO/Rh, HLA)" = No**; FDA-required communicable-disease testing = Yes; emerging infectious disease = Yes; sterility with donor-notification policies (e.g., stem cells) = Yes; purity/potency (TNC, CD34, viability) = No. (Blood table: HLA testing = Yes; organs table: histocompatibility = Yes.) **Never say HLA typing for HPCs/cord blood is CLIA "Yes".** |
| `sources/cfr/606.171.md` and the BPDR module | Regulation | the blood-side deviation report, as an analogy only |

**Gaps (say so in lessons; never quote or describe their text):**

- 21 CFR 600.14 (deviation reporting for licensed biological products other than blood) is not in
  `sources/`.
- HRSA's own program pages and the HHS privacy impact assessment returned 403 and were not retried.
- No program-operator forms, software, or agreement terms are in `sources/`.

## Binding rules for every module

- **Contracts are not public.** Lakeshore's obligations to the program come from its agreements with
  the program's operator. Lessons never invent a clause, a data element, a deadline or a format from
  those agreements. Say "the agreement in your contract file says what data, in what format, by when.
  Read it with Contracts and Quality."
- **Program operators.** NMDP (program operator) and CIBMTR (SCTOD contract holder) may be named as
  public facts from the source file. Never describe their software, forms, data fields or internal
  rules.
- **Reauthorization.** `sources/` doesn't show whether the program was reauthorized after
  Sept. 30, 2026. Say that, and tell the learner to check current status. Never claim it lapsed or was
  renewed.
- **Classification questions stay with Quality/Regulatory Affairs.**
  - Whether a given registry collection (e.g., peripheral blood stem cells for an unrelated
    recipient) is a 361 HCT/P, a 351 product, or neither is not decided in any lesson.
  - What the lessons can state from 1271.3(d): HPCs from peripheral and cord blood are listed as
    HCT/Ps, and minimally manipulated bone marrow (homologous use, not combined with another article)
    is excluded.
- **Licensed cord blood.** Lakeshore's licensed units are 351 biological products.
  - Per 1271.1(b)(2), they follow 1271 subparts C and D (donor eligibility, CGTP, which includes
    records and tracking).
  - Per 1271.330, they do not follow subpart E reporting (1271.350).
  - Deviation reporting for them falls under the biologics rules (600.14, not in `sources/`; flag
    it, don't describe it).
- No real blood center, cord blood bank, hospital, product or vendor names in scenarios.

## Scenario — locked for every module

Lakeshore Blood Center (fictional) has three program-related roles:

1. **Registry donor center.** Lakeshore recruits potential unrelated stem-cell donors to the national
   registry at its blood drives. When a member is matched, Lakeshore works them up and collects them
   at its apheresis unit, under its program affiliation (fictional). Registry members' records live
   in Lakeshore's **registry donor database**, a separate system from BECS. It exchanges data with
   the program operator.
2. **Lakeshore Cord Blood Bank.** A public cord blood bank collecting at partner hospitals. It holds a
   (fictional) BLA for HPC, Cord Blood and a (fictional) National Cord Blood Inventory contract. Units
   are listed for search through the program. Its records live in the **cord blood bank system** (CBB
   system), a validated system separate from BECS.
3. **HLA typing** comes from a contracted histocompatibility laboratory outside Lakeshore. QSO-25-18's
   cells/tissue table lists HLA identity testing as **not** CLIA-applicable. The lab's certificate,
   accreditation and director are recorded in the contract file. Donor infectious-disease testing for
   HPCs/cord blood **is** CLIA-applicable.

**Characters:**

- the Director ("you")
- the Quality Analyst ("she")
- the systems administrator ("he")
- the **cord blood bank's medical director** ("they")
- the **registry program manager** ("they")
- Lakeshore's **privacy officer** ("they")

No calendar years.

**IDs:** CBB system change records **CBC-0xx**; registry data requests **RDR-0xx**.

**Locked arc:**

1. **The map.** The CIO's compliance-system inventory lists BECS and the LIS but leaves out the
   registry donor database and the CBB system ("HRSA doesn't inspect us"). The Director builds an
   obligations map: statute → program contracts → FDA (1271 and the BLA) → CLIA (donor infectious-disease testing; HLA identity testing on cells/tissue = No per QSO-25-18) →
   accreditation (themes only). Both systems join the inventory with named owners and listed
   requirement sources.
2. **Registry data and confidentiality.** Recruitment marketing asks (**RDR-003**) to copy registry
   members' contact details and HLA typing into the blood-donor CRM to target blood-drive invitations.
   - The request is declined: 274k(f)(5) strict confidentiality and disclosure purposes; (n)
     criminal penalty.
   - Registry data stays in its own store with role-based access, an access review and a disclosure
     log.
   - Any use outside program purposes needs the agreement's permission and privacy-officer review.
   - Whether the records are also HIPAA PHI is the privacy officer's call; the lesson doesn't assert
     it.
3. **Cord blood unit identification, records and tracking.** In the CBB system replacement
   (**CBC-031**), the vendor's default unit-ID scheme builds the code from the maternal hospital MRN
   plus a date. That breaks 1271.290(c). The same design puts the maternal linkage (274k(d)(4)(F)) in
   a table every user can read. Decisions:
   - Lakeshore generates its own distinct codes.
   - A documented old-to-new code mapping procedure, per 1271.290(c).
   - Maternal linkage moves to a restricted store.
   - Retention set from 1271.270(d) and 1271.55(d)(4).
   - Migration validation tests tracking in both directions: consignee to donor, and donor to
     consignee or final disposition.
4. **Capstone: program data feeds and reporting.** After go-live, the nightly unit-status feed to the
   program's search listing silently stopped sending "distributed" and "discarded" changes for one
   mapping edge case. Units no longer available stayed searchable, and a transplant center's request
   for one exposed it. Response:
   - Change record **CBC-034**.
   - A listed-versus-actual reconciliation.
   - Program notification per the agreement (terms not invented).
   - The cord blood bank's medical director and Quality decide FDA reporting. For the licensed
     product that means biologics deviation reporting (600.14, not in sources; flag it). 1271.350
     doesn't apply (1271.330).
   - Tie back to the Cord Blood Inventory note's (b)(5)/(b)(6) data duties.
   - Close with a course wrap.

## Lesson format

- "The short version" callout first.
- TEACHING.md spine, in depth.
- index.qmd prose ≤ 5,000 words.
- A "Keep learning" section.
- No narration.

## Modules

| # | Slug | Finish line | `order:` | Status |
|---|---|---|---|---|
| — | (syllabus) | — | 174 | Published |
| 1 | `hrsa-and-the-cell-transplant-program` | Say what HRSA's C.W. Bill Young program is (274k/274l, run by contract), how a blood center plugs in (donor center, cord blood bank, outcomes data), and which other regulators ride along (FDA 1271/BLA, CLIA for HLA). Put the registry and cord blood systems on the compliance map. | 175/176 | Published |
| 2 | `registry-donor-data-and-confidentiality` | Apply 274k's confidentiality, disclosure-purpose and penalty provisions to a registry donor database and its interfaces, and decide a data-reuse request. | 177/178 | Published |
| 3 | `cord-blood-identification-records-and-tracking` | Direct IT's part in 1271.290 tracking (distinct ID codes, code mapping, two-way tracking), 1271.270/1271.55 records and retention, and confidential maternal linkage during a CBB system replacement. | 179/180 | Published |
| 4 | `program-data-feeds-and-reporting` | Run a data feed into the program like a regulated interface: standardized data duties, reconciliation, change control and the right reporting path when it fails. | 181/182 | Published |

## Progress log

- 2026-11-13 — Course scoped (Phase 2). Sources saved: 42 USC 274k/274l (+ Cord Blood Inventory
  note), 21 CFR 1271 excerpt (incl. 1271.330), FDA HPC Cord Blood list, program operators' statements.
  Syllabus `order:` 174; modules 175–182 (next unused: **183**).
- 2026-11-13 — Corrections after module 1's drafter flagged them: (1) QSO-25-18 cells/tissue table says HLA
  identity testing = **No** (plan previously said Yes; fixed above). (2) The Cord Blood Inventory note text
  was missing from the 274k source (extraction bug); re-extracted, now present verbatim.
- 2026-11-13 — Module 1 `hrsa-and-the-cell-transplant-program` published (verified; prose ~3,930 words).
  Video: NMDP "How does the donor search happen?" (F5wSZ3ICxPA; title-only claim). **Locked:** the program
  reaches Lakeshore through agreements, not an HRSA inspection; FDA inspects the CBB as a licensed
  establishment (one sentence, no specifics). Compliance inventory now includes the registry donor
  database (business owner: registry program manager) and the CBB system (business owner: the cord blood
  bank's medical director), each with an IT owner and listed requirement sources. Map tiers: statute →
  program agreements → FDA (1271 subparts C/D + BLA) → CLIA (contracted lab; QSO-25-18 tables differ on
  HLA — cells/tissue "Identity testing (ABO/Rh, HLA)" = No; the contracted lab's certificate and director
  define its scope; certificate kept in the contract file) → accreditation (274k(b), no entity named).
  1271.3(d) taught as definition only; registry-collection classification = Quality/Regulatory Affairs
  (dotted edge). 1271.1(b)(2) → licensed units follow subparts C and D; 1271.330 → subpart E/1271.350 do
  not apply to 351 products; 600.14 named as the path but not in sources. Decoder rows/quotes for 274k(a),
  (b), (d)(3), (d)(4), (f)(5), (f)(6), (n) live here — modules 2–3 link back. Module 1 did not use the
  Cord Blood Inventory note (it was missing at drafting time); module 4 may now quote it.
- 2026-11-13 — Module 2 `registry-donor-data-and-confidentiality` published (verified; prose ~4,950 words;
  links module 3 by slug ahead of its publication). Video: NMDP "How Patients and Blood Stem Cell Donors Are
  Matched" (6q879w-bVWQ). **Locked:** RDR-003 (from a recruitment marketing lead) declined at the purpose
  test, resting on 274k(f)(5)(A)–(B) and (n); room = Director, registry program manager, privacy officer.
  Controls (labelled IT design, not 274k text): registry data in its own store — no copies, test data or
  derived "registry member" flags elsewhere; role-based access with periodic access review signed by the
  registry program manager; disclosure log; interfaces send only what the agreement specifies. Non-program
  use needs the agreement's permission AND privacy-officer review. 8-question purpose test for any RDR-0xx.
  An extract already outside the store = potential 274k(n) disclosure: restrict without deleting, preserve
  logs, escalate same day to privacy officer and legal, IT doesn't investigate alone. (f)(5)(B)'s "records
  described in subparagraph (A)" undefined → every registry field treated in scope as a posture (not a
  legal conclusion). (n) fine amounts (title 18) not in sources — none given. PHI question = privacy
  officer. No CLIA/HLA claim made. (d)(4)(D)/(F) left to module 3.
- 2026-11-13 — Module 3 `cord-blood-identification-records-and-tracking` published (verified; prose ~4,790
  words). Video: WSJ "Inside an Umbilical-Cord-Blood Bank" (c38INeIVLHg; title-only; main session replaced
  the drafter's pick because it came from a real blood center's channel — rule: no videos from real blood
  centers' own channels). **Locked:** CBC-031 vendor default = maternal hospital MRN + collection date →
  breaks 1271.290(c); maternal link in a table every CBB user can read → against 274k(d)(4)(D)/(F).
  Decisions (Director, cord blood bank's medical director, Quality Analyst): Lakeshore-generated codes from
  nothing identifying (vendor default off); existing units keep codes or get new ones under a documented,
  owned old-to-new mapping procedure; mapping must resolve old codes held by pre-cutover consignees;
  maternal linkage in restricted store with logged access; retention per 1271.270(d)/1271.55(d)(4) (≥10
  years from administration, else from distribution/disposition/expiration, whichever latest), modelled as
  date fields + approved purge date; related records (mapping table, label history, maternal-link access
  log, migration audit trail) retained with the unit's records = lesson's own reading, Quality/RA to
  confirm; stored unit with no expiration → retention end open (1271.260(c) "where appropriate"; Quality's
  call). Migration validation: consignee→donor (d), donor→consignee/final disposition (e) timed for
  "prompt", consignee information (f), label (1271.250), maternal-link access, record fidelity, legacy
  retrieval; failed tracking test = no-go for cutover; legacy archive retrievable and read-only after
  decommissioning (1271.55(d)(3), 1271.270(c)). 1271.160(d) software validation incl. changes. Note
  §2(c)(1) "10 years" = program participation, not records clock. One-way MRN transformation question →
  Regulatory Affairs. No coding standard asserted for cord blood.
- 2026-11-13 — Module 4 `program-data-feeds-and-reporting` published (verified; prose ~4,700 words; no
  verifiable video — said honestly). **Locked:** CBC-034 root cause = status events for units remapped
  old-to-new carried the new code while the listing knew only the old one; the feed's mapping step dropped
  unmatched events silently, so "distributed"/"discarded" never reached the listing; nightly job reported
  success. Detected by a transplant center's request for a discarded unit; refused at Lakeshore; nothing
  shipped wrong; no harm asserted. Owners: Quality Analyst owns CBC-034 completeness; Director owns fix
  delivery. Standing daily listed-vs-actual reconciliation, three exception classes (listed-not-available,
  available-not-listed, attributes differ), named owners, daily evidence record. Silence monitoring: volume
  vs CBB event count, unmatched-event counter, heartbeat. Post-release review asks why CBC-031's migration
  validation didn't test the outbound feed on remapped units. Program notification per agreement (terms not
  invented). FDA reporting = cord blood bank's medical director + Quality; licensed unit → 600.14 (not in
  sources); 1271.350 n/a (1271.330). Quotes: note (b)(5)/(b)(6), 274k(d)(3)(A)–(B), 274l(b), "fiscal years
  2022 through 2026". "Currency of status is part of the standard dataset's purpose" labelled as the
  lesson's own reasoning. Course wrap points to `blood-operations-deep-dive`. **Course complete (4/4).**
