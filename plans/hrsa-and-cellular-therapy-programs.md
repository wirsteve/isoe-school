# `hrsa-and-cellular-therapy-programs` — course plan

Read this whole file before drafting any module. Update the module table and append a progress log
entry after every module.

Added 2026-11-13 at the user's request ("I need HRSA … where they might be touched by IT"). Track 7,
course 4.

## Finish line

Explain which HRSA program touches a blood center (the C.W. Bill Young Cell Transplantation Program:
its donor registry, cord blood inventory and outcomes database) and which other rules ride along with
it (FDA's 21 CFR 1271 and biologics licensing for cord blood; CLIA for HLA testing). Then say exactly
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
| `sources/cms/qso-25-18-clia-applicability-2025.md` | CMS policy memo | CLIA applicability for cells/tissue: histocompatibility (HLA) testing and donor infectious-disease testing = Yes; purity/potency = No |
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
3. **HLA typing** comes from a contracted, CLIA-certified histocompatibility laboratory (outside
   Lakeshore; QSO-25-18: histocompatibility testing = Yes).

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
   obligations map: statute → program contracts → FDA (1271 and the BLA) → CLIA (HLA, contracted) →
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
| 1 | `hrsa-and-the-cell-transplant-program` | Say what HRSA's C.W. Bill Young program is (274k/274l, run by contract), how a blood center plugs in (donor center, cord blood bank, outcomes data), and which other regulators ride along (FDA 1271/BLA, CLIA for HLA). Put the registry and cord blood systems on the compliance map. | 175/176 | Not started |
| 2 | `registry-donor-data-and-confidentiality` | Apply 274k's confidentiality, disclosure-purpose and penalty provisions to a registry donor database and its interfaces, and decide a data-reuse request. | 177/178 | Not started |
| 3 | `cord-blood-identification-records-and-tracking` | Direct IT's part in 1271.290 tracking (distinct ID codes, code mapping, two-way tracking), 1271.270/1271.55 records and retention, and confidential maternal linkage during a CBB system replacement. | 179/180 | Not started |
| 4 | `program-data-feeds-and-reporting` | Run a data feed into the program like a regulated interface: standardized data duties, reconciliation, change control and the right reporting path when it fails. | 181/182 | Not started |

## Progress log

- 2026-11-13 — Course scoped (Phase 2). Sources saved: 42 USC 274k/274l (+ Cord Blood Inventory
  note), 21 CFR 1271 excerpt (incl. 1271.330), FDA HPC Cord Blood list, program operators' statements.
  Syllabus `order:` 174; modules 175–182 (next unused: **183**).
