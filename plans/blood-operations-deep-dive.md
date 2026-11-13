# `blood-operations-deep-dive` — course plan

Read this whole file before drafting any module. Update the module table and append a progress log
entry after every module.

Added 2026-11-13 at the user's request ("Potentially more blood ops too"). Track 7, course 5, the last
course in Track 7.

## Finish line

Go deeper than `blood-center-operations` on five blood operations that IT carries:

- apheresis platelets and their bacterial-risk controls
- immunohematology reference work and antigen-negative inventory
- inventory integrity across hospital returns and reissue
- mobile collections on offline systems
- lookback with consignee notification

For each one, say what the regulation or guidance asks, where the system makes it true or false, and
what evidence proves it.

## Prerequisites (link, never re-teach)

The five `blood-center-operations` modules:

- `donor-recruitment-and-screening`
- `collection-and-testing` (it already introduces lookback in one paragraph; this course goes deep)
- `component-processing-and-labeling` (ISBT 128)
- `storage-distribution-and-hemovigilance` (606.165 distribution records, hemovigilance)
- `becs-in-the-pipeline`

Also:

- `csv-and-becs/becs-interfaces-and-data-integrity`
- `data-integrity-and-records/multi-site-governance-and-donor-identification`
- `fda-and-aabb-in-practice/filing-a-biological-product-deviation-report`
- the release-management course (BECS change discipline)
- CLIA course modules 1–4 (the reference lab, LCR records)

## Sources (all local)

| Source | Tier | Use for |
|---|---|---|
| `sources/cfr/606.110.md` | Regulation | plateletpheresis/leukapheresis/plasmapheresis |
| `sources/cfr/640-subpart-c-platelets.md` | Regulation | 640.20–640.25, platelets: donors, collection, testing, processing, general requirements |
| `sources/cfr/606.145.md` | Regulation | bacterial contamination control; no release of contaminated platelets or co-components; transfusion service notifies the collector; responsible physician's determination |
| `sources/fda-guidance/platelet-bacterial-risk-control-2020-excerpt.md` | FDA guidance (nonbinding) | sections I, II, III.A and III.B.1 **only**: hours-versus-days timing conventions (day 0, expiry at 23:59), split units each sampled, 12-hour minimum incubation before release, **alerts when a distributed platelet later tests positive (III.A.3)**, **traceability of bacterial testing status in inventory (III.A.8)**, LVDS 36h/48h, pathogen reduction. Two-step strategies, implementation dates and 601.12 reporting were not copied, so never describe them |
| `sources/cfr/610.53.md` | Regulation | dating periods (platelets 5 days unless device IFU says otherwise) |
| `sources/cfr/606.151.md` | Regulation | compatibility testing procedures (transfusion-service side; the reference lab supports it) |
| `sources/cfr/606.160.md`, `606.165.md`, `606.121.md`, `606.100.md` | Regulation | records, distribution/receipt records, labeling, SOPs |
| `sources/cfr/610.41.md`, `630.10.md`, `630.15.md`, `630.30.md`, `630.40.md` | Regulation | deferral, donor eligibility (general and apheresis-specific), donation suitability, notifying deferred donors |
| `sources/cfr/610.46.md`, `610.47.md` | Regulation | HIV/HCV lookback: 3-calendar-day actions, consignee notification, further-testing results, records; (c) lookback actions are not a recall |
| `sources/cfr/610.40.md` | Regulation | donor test requirements |
| `sources/cfr/11.10.md`, `sources/fda-guidance/becs-validation-users-facility-2013.md` | Regulation/guidance | offline clients, sync, audit trails, interfaces |
| `sources/aabb/*` | AABB public material | themes only; never quote Standards or invent numbers |

**Gaps (say so in lessons; never describe their content):**

- 606.65 (supplies and reagents) is not in sources.
- 601.12 is not in sources.
- FDA's two-step platelet strategies and implementation timelines were not copied.
- Criteria for reissuing returned units come from AABB Standards and Lakeshore's SOPs (themes only).
- No FDA regulation in sources defines "antigen-negative" labeling claims. Treat that as a lab and
  Quality decision.

## Binding rules for every module

- Clinical and operational decisions belong to the people who own them:
  - the medical director ("the responsible physician" where 606.145(d) or 630 applies)
  - Quality
  - the laboratory director (reference lab)
  - IT owns system behavior, configuration, evidence and data integrity
- Never pick a platelet bacterial-risk strategy for Lakeshore beyond what the scenario locks.
- No calendar years. Never name real BECS, apheresis devices, culture systems, pathogen-reduction
  products or vendors.
- Fictional hospital: Riverside General Hospital, from `storage-distribution-and-hemovigilance`.
- Fictional system: the Hospital Ordering Portal (HOP), from the release course.

## Scenario — locked for every module

**Characters:**

- the Director ("you")
- the Quality Analyst ("she")
- the systems administrator ("he")
- the **medical director** ("they")
- the **component lab supervisor** ("they")
- the **distribution manager** ("they")
- the **mobile collections manager** ("they")
- the **laboratory director** from the CLIA course, for the reference lab ("they")
- the **BECS analyst** on the Director's team ("they")

**IDs:** blood-operations change records **BOC-0xx** under Lakeshore's BECS change control. The CLIA
course's LCR-0xx records stay with lab systems.

**Locked arc:**

1. **Apheresis platelets and bacterial risk** (`apheresis-platelets-and-bacterial-risk`).
   - Lakeshore's platelet strategy (medical director's decision, fixed for the course): large volume,
     delayed sampling (LVDS) no sooner than 36 hours for apheresis platelets, with 5-day dating.
   - BOC-012 introduced a BECS rule that let a **split** apheresis unit inherit the parent's "culture
     negative" status without its own sample record.
   - Guidance III.B.1.a: each split unit should be sampled. Guidance III.A.8: traceability of
     bacterial testing status.
   - The component lab supervisor caught it at release. No unit was transfused under the rule; no harm
     is asserted.
   - Decisions:
     - Revert the rule.
     - Each split gets its own sample linkage, and release is blocked without it.
     - Expiry and sampling-time calculations are tested against the guidance's hour and day
       conventions (III.A.4).
     - The positive-after-distribution alert path (III.A.3; 606.145(b)/(c)) is tested end to end
       through HOP and phone escalation.
     - Quality assesses deviation reporting (link the BPDR module).
2. **Immunohematology reference work and antigen-negative inventory**
   (`immunohematology-reference-and-antigen-negative-inventory`).
   - Riverside requests antigen-negative red cells for a patient with multiple antibodies.
   - BECS shows units as "antigen-negative" from a **historical** donor antigen type carried forward
     from an earlier donation. The current unit was never typed, and the source of the historical
     type is a legacy import with no method record.
   - Decisions, owned by the laboratory director and the medical director:
     - What counts as an acceptable antigen history.
     - Confirmation typing before an antigen-negative claim.
   - IT's part:
     - Lineage fields (source, method, date, lab).
     - Separate "historical" and "confirmed" attributes.
     - The interface from the reference lab's LIS.
     - Change under BOC-0xx, with the laboratory director as approver (Lakeshore's rule from the CLIA
       course).
   - 606.151 is the transfusion-service frame. CLIA applies to the typing (CLIA course module 1).
3. **Inventory integrity: returns, reissue and the count**
   (`inventory-returns-reissue-and-reconciliation`).
   - Riverside returns platelets and red cells. One red cell unit is reissued to another hospital.
   - The HOP-to-BECS return message posted the return but dropped the temperature-evidence attachment
     reference.
   - BECS-versus-physical inventory reconciliation shows a "ghost" unit: one BECS lists as available,
     but it had been discarded at the hospital.
   - 606.165 requires both distributions to be traceable. 606.160 covers the records.
   - Reissue criteria are SOP and AABB themes only.
   - Decisions:
     - Return acceptance is blocked without temperature evidence.
     - Weekly reconciliation, with exceptions worked by the distribution manager.
     - An interface fix under BOC-0xx, with regression of HOP flows.
4. **Mobile collections on offline systems** (`mobile-collections-and-offline-systems`).
   - At a rural mobile drive, the registration laptops run offline and sync at night.
   - A donor deferred at a fixed site that morning donated at the drive that afternoon. The laptop's
     deferral list was from the previous night.
   - At sync, BECS flagged the donation, and the unit was quarantined and not released (630.30
     donation suitability; 610.41 deferral; 606.160(e) deferred-donor records check).
   - Decisions:
     - A deferral-list freshness rule: refresh before the drive and at midday where any connectivity
       exists, otherwise a documented check by phone.
     - Sync-time suitability checks block release.
     - An offline audit-trail and time-sync evidence pack (11.10).
     - Mobile kit change control under BOC-0xx.
     - The mobile collections manager owns the procedure.
     - Donor notification follows 630.40, owned by Quality and the medical director.
5. **Capstone: lookback and consignee notification** (`lookback-and-consignee-notification`).
   - A repeat donor tests reactive for HCV.
   - The BECS lookback query (610.47) found prior donations under the current donor record but missed
     two earlier donations recorded under a duplicate donor record that was merged imperfectly years
     ago (link the multi-site donor identification module).
   - The Quality Analyst caught it by searching on demographics.
   - Clock: the 3-calendar-day actions run from the reactive test. Consignee notification must
     follow the section's own requirements.
   - Decisions:
     - The query is extended to linked and merged records.
     - The duplicate-record merge is remediated under BOC-0xx.
     - Consignee notifications are tracked in a log with timestamps.
     - 610.47(c)/610.46(c): lookback actions are not a recall.
     - Quality decides deviation reporting.
   - Close with a **Track 7 wrap**.

## Lesson format

- Open with "The short version" callout.
- Follow the TEACHING.md spine, in depth.
- index.qmd prose ≤ 5,000 words.
- Include a Keep learning section.
- No narration.

## Modules

| # | Slug | Finish line | `order:` | Status |
|---|---|---|---|---|
| — | (syllabus) | — | 183 | Published |
| 1 | `apheresis-platelets-and-bacterial-risk` | Explain 606.110, 640 subpart C and 606.145 with FDA's platelet bacterial-risk guidance, and make BECS enforce sampling linkage, timing conventions, testing-status traceability and the positive-after-distribution alert. | 184/185 | Not started |
| 2 | `immunohematology-reference-and-antigen-negative-inventory` | Keep antigen-negative claims honest: lineage of antigen types, historical versus confirmed attributes, and the reference-lab-to-BECS path, under 606.151 and CLIA. | 186/187 | Not started |
| 3 | `inventory-returns-reissue-and-reconciliation` | Keep BECS inventory true across returns, reissue and discards: 606.165 traceability, temperature evidence, and reconciliation. | 188/189 | Not started |
| 4 | `mobile-collections-and-offline-systems` | Run offline collection systems so deferral, suitability and audit-trail requirements still hold: freshness, sync checks, quarantine and evidence. | 190/191 | Not started |
| 5 | `lookback-and-consignee-notification` | Run an HIV/HCV lookback under 610.46/610.47 end to end from IT's side: the query, the clock, consignee notification and the records. | 192/193 | Not started |

## Progress log

- 2026-11-13 — Course scoped (Phase 2).
  - Sources saved: 606.110, 606.145, 606.151, 610.41, 610.46, 610.47, 630.15, 630.30, 640.20–640.25,
    and FDA's platelet bacterial-risk guidance (excerpt).
  - Syllabus `order:` 183; modules 184–193. Next unused: **194**.
