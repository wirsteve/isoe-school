# Production retrofit — tracker

The full 13-course ISOE School curriculum (61 modules: 3 foundations + 58 course modules)
was built and published under the *original* teaching standard (10-step spine, 2,000–4,000
word lessons, 2–4 link resources pages, no video, no diagrams). The user then asked for a
full retrofit to a richer, more professional standard: longer lessons, a Mermaid diagram per
module where one earns its place, a verified real video embed per module where one exists,
and a 4–8 link resources page — see `TEACHING.md`'s current 12-step spine and
`.claude/course-authoring/video-sourcing.md` for the exact rules.

**This file is the retrofit's own memory between sessions**, the same role
`plans/curriculum.md` plays for the base curriculum. `create-course`'s own "Figure out what
to build" step 0 checks this file first and resumes the retrofit before looking for any new
course — the retrofit takes priority until it's done.

## What "retrofit a module" means, concretely

For each module below, rebuild `index.qmd` and `resources.qmd` **in place** (same
folder, same `order:` values — do not renumber anything):

1. Re-read the existing `index.qmd`/`resources.qmd` in full first. Every locked
   fact, scenario detail, citation, and continuity thread the original module set
   (character names, device/system names, prior-module references, the specific
   numbers and dates already on the record) **must survive unchanged** — this is a
   depth/production upgrade, not a content rewrite. Treat every existing fact as
   "locked" exactly the way a later course in the original build treated an earlier
   course's facts.
2. Expand the lesson to the new spine and word-count target: add the Mermaid
   diagram (step 6) and the verified video embed (step 7) where they earn a place;
   deepen the existing sections with more worked examples, more edge cases, a
   fuller quote where the original trimmed one; keep everything the original
   lesson already got right.
3. Expand `resources.qmd` to 4–8 entries per the new standard.
4. Independently verify before publishing — same discipline as every module in the
   original build: re-read both files in full, grep for every other course's
   locked identifiers to confirm nothing was touched, run the YouTube oEmbed check
   yourself on any video URL the drafting subagent used (don't just trust its
   report), confirm the Mermaid code block is syntactically sane, check the new
   word count, curl every resources.qmd link.
5. Update this file's own progress log and the status table below, then publish
   (one commit, one push, per module — same as the original build).
6. Loop to the next unbuilt module in the table below.

## Status table

Build/retrofit order matches the original curriculum sequence (foundations first, then
course-by-course in `plans/curriculum.md`'s own track order). Status: Not started /
In progress / Done.

| # | Course | Slug | `order:` | Status |
|---|---|---|---|---|
| 1 | Foundations | `reading-a-cfr-citation` | 1/2 | Done |
| 2 | Foundations | `regulatory-landscape-orientation` | 3/4 | Done |
| 3 | Foundations | `risk-and-controls-vocabulary` | 5/6 | Done |
| 4 | `blood-center-operations` | `donor-recruitment-and-screening` | 2/3 | Done |
| 5 | `blood-center-operations` | `collection-and-testing` | 4/5 | Done |
| 6 | `blood-center-operations` | `component-processing-and-labeling` | 6/7 | Done |
| 7 | `blood-center-operations` | `storage-distribution-and-hemovigilance` | 8/9 | Done |
| 8 | `blood-center-operations` | `becs-in-the-pipeline` | 10/11 | Done |
| 9 | `quality-system-essentials` | `aabb-qse-framework` | 13/14 | Done |
| 10 | `quality-system-essentials` | `deviations-and-nonconformances` | 15/16 | Done |
| 11 | `quality-system-essentials` | `capa-root-cause-to-effectiveness` | 17/18 | Done |
| 12 | `quality-system-essentials` | `change-control-for-regulated-systems` | 19/20 | Done |
| 13 | `quality-system-essentials` | `document-control-and-records` | 21/22 | Done |
| 14 | `quality-system-essentials` | `quality-risk-management` | 23/24 | Done |
| 15 | `quality-system-essentials` | `internal-audits-and-management-review` | 25/26 | Done |
| 16 | `directing-the-quality-analyst` | `qa-deliverables-and-ownership` | 28/29 | Done |
| 17 | `directing-the-quality-analyst` | `reviewing-deviations-and-capas` | 30/31 | Done |
| 18 | `directing-the-quality-analyst` | `escalation-criteria` | 32/33 | Done |
| 19 | `directing-the-quality-analyst` | `reviewing-validation-packages` | 34/35 | Done |
| 20 | `directing-the-quality-analyst` | `reviewing-vendor-risk-assessments` | 36/37 | Done |
| 21 | `directing-the-quality-analyst` | `coaching-and-reporting-upward` | 38/39 | Done |
| 22 | `csv-and-becs` | `gamp5-and-the-v-model` | 41/42 | Done |
| 23 | `csv-and-becs` | `iq-oq-pq-and-traceability` | 43/44 | Done |
| 24 | `csv-and-becs` | `becs-as-a-regulated-device` | 45/46 | Done |
| 25 | `csv-and-becs` | `qmsr-iso-13485-and-the-vendor` | 47/48 | Done |
| 26 | `csv-and-becs` | `part-11-for-validated-systems` | 49/50 | Done |
| 27 | `csv-and-becs` | `validated-state-lifecycle-and-patching` | 51/52 | Done |
| 28 | `csv-and-becs` | `becs-interfaces-and-data-integrity` | 53/54 | Done |
| 29 | `data-integrity-and-records` | `alcoa-and-data-integrity` | 56/57 | Done |
| 30 | `data-integrity-and-records` | `audit-trails-and-esignatures` | 58/59 | Done |
| 31 | `data-integrity-and-records` | `predicate-rules-and-hybrid-systems` | 60/61 | Done |
| 32 | `data-integrity-and-records` | `legacy-systems-and-part-11-gaps` | 62/63 | Done |
| 33 | `data-integrity-and-records` | `retention-across-record-types` | 64/65 | Done |
| 34 | `data-integrity-and-records` | `multi-site-governance-and-donor-identification` | 66/67 | Done |
| 35 | `fda-and-aabb-in-practice` | `fda-inspection-authority-and-outcomes` | 69/70 | Done |
| 36 | `fda-and-aabb-in-practice` | `warning-letters-and-recalls` | 71/72 | Done |
| 37 | `fda-and-aabb-in-practice` | `filing-a-biological-product-deviation-report` | 73/74 | Done |
| 38 | `fda-and-aabb-in-practice` | `the-aabb-assessment-process` | 75/76 | Done |
| 39 | `fda-and-aabb-in-practice` | `designing-an-internal-audit-program` | 77/78 | Done |
| 40 | `fda-and-aabb-in-practice` | `mock-inspections-and-presenting-it-becs-evidence` | 79/80 | Done |
| 41 | `grc-frameworks-and-risk-management` | `risk-frameworks-side-by-side` | 82/83 | Done |
| 42 | `grc-frameworks-and-risk-management` | `categorize-and-select-controls` | 84/85 | Done |
| 43 | `grc-frameworks-and-risk-management` | `implement-and-assess-controls` | 86/87 | Done |
| 44 | `grc-frameworks-and-risk-management` | `authorize-and-monitor` | 88/89 | Done |
| 45 | `grc-frameworks-and-risk-management` | `poams-and-capas` | 90/91 | Done |
| 46 | `healthcare-security-and-privacy` | `information-governance-in-a-covered-entity` | 93/94 | Done |
| 47 | `healthcare-security-and-privacy` | `the-hipaa-privacy-rule` | 95/96 | Done |
| 48 | `healthcare-security-and-privacy` | `security-rule-safeguards-and-part-11` | 97/98 | Done |
| 49 | `healthcare-security-and-privacy` | `breach-notification-and-dual-reporting` | 99/100 | Done |
| 50 | `healthcare-security-and-privacy` | `investigating-a-healthcare-data-incident` | 101/102 | Done |
| 51 | `vendor-and-third-party-risk-management` | `supplier-qualification-and-risk-tiering` | 104/105 | Done |
| 52 | `vendor-and-third-party-risk-management` | `reading-a-soc-2-report` | 106/107 | Done |
| 53 | `vendor-and-third-party-risk-management` | `reading-an-iso-27001-certificate` | 108/109 | Done |
| 54 | `vendor-and-third-party-risk-management` | `business-associate-agreements` | 110/111 | Done |
| 55 | `vendor-and-third-party-risk-management` | `vendor-change-notifications-and-your-own-change-control` | 112/113 | Done |
| 56 | `itsm-for-regulated-blood-services` | `itil-to-qse-crosswalk-change-and-problem` | 115/116 | Not started |
| 57 | `itsm-for-regulated-blood-services` | `itil-to-qse-crosswalk-cmdb-and-continual-improvement` | 117/118 | Not started |
| 58 | `itsm-for-regulated-blood-services` | `itil-to-grc-crosswalk` | 119/120 | Not started |
| 59 | `itsm-for-regulated-blood-services` | `building-an-inspection-ready-service-catalog-and-cmdb` | 121/122 | Done |
| 60 | `itsm-for-regulated-blood-services` | `translating-itsm-and-risk-metrics-for-executives` | 123/124 | Not started |
| 61 | `itsm-for-regulated-blood-services` | `presenting-it-service-and-risk-performance` | 125/126 | Not started |

**Next up: #46, `healthcare-security-and-privacy`/`information-governance-in-a-covered-entity`.** `fda-and-aabb-in-practice` (6/6) and `grc-frameworks-and-risk-management` (5/5) are fully retrofitted.

Course index pages (`courses/<slug>/index.qmd`) and the two top-level pages
(`index.qmd`, `curriculum.qmd`) are not in this table — they're short syllabus/landing
pages, not lessons, and don't need the video/diagram treatment. Revisit them only if a
module retrofit changes a course's own module list or description.

## Progress log

- **2026-11-10**: Retrofit scoped. `TEACHING.md` rewritten to a 12-step spine (added "See
  it in one picture" — a Quarto-native Mermaid diagram per module where one earns its
  place — and "Watch it explained" — a verified YouTube embed, never invented, see
  `.claude/course-authoring/video-sourcing.md` for the full sourcing/verification
  procedure built this session). Word-count target raised to 3,500–6,000 words of prose
  (diagrams/video/tables on top). Resources pages raised from 2–4 to 4–8 links.
  `.claude/skills/create-course/SKILL.md` updated: a new step 0 makes the retrofit take
  priority over new-course work whenever this file shows unfinished modules, and Phase 3
  now points new module builds at the same video-sourcing doc so anything built from here
  forward already meets the new bar without a second retrofit pass. Added `styles.css`
  (the `.video-embed` responsive 16:9 wrapper) and wired it into `_quarto.yml`'s HTML
  format. This table lists all 61 modules in original build order; retrofit proceeds in
  the same order. No module retrofit has started yet.
  Next: module 1, foundations/`reading-a-cfr-citation`.

- **2026-11-11**: Module 1, foundations/`reading-a-cfr-citation` (`order: 1/2`), retrofitted
  and published. Every original locked fact confirmed unchanged on independent re-read: the
  606.160(b)(3) and 606.160(d) quotes, the Quality Analyst/temperature-excursion scenario, the
  original decoder table, the CMDB/ITSM bridge, the "Part vs section" trap, all three original
  Q&A questions, and the original 4 job-bullets (now 6, with 2 new ones appended, not replacing
  the originals). New depth added, nothing invented: a four-level structural walk of
  606.160(b)(3)(iii) — independently cross-checked against `sources/cfr/606.160.md`'s own
  7-category list under (b) and 5-item list under (3), both confirmed to match exactly — and a
  second full worked example, 21 CFR 11.10(e), quoted verbatim and independently re-verified
  character-for-character against `sources/cfr/11.10.md`. Added a `flowchart TD` Mermaid diagram
  (step 6) walking Title 21 → Chapter I → Subchapter F → Part 606 → Subpart D → Section 606.160 →
  (b) → (3) → (iii), highlighting the final node. Added a verified video embed (step 7): "Master
  the CFR: Researching the Code of Federal Regulations" (US National Archives) — independently
  re-verified via YouTube oEmbed (HTTP 200, title/author match) both when sourced and again at
  publish time; framing is honest that it's a general CFR-navigation tutorial, not blood-specific.
  `resources.qmd` expanded from 3 to 5 links (3 original + the video + one new Cornell 11.10
  mirror); all 5 independently curl-verified HTTP 200 at publish time. Word count 3,789 (prose),
  within the new 3,500–6,000 target. `order:` values (1, 2) confirmed unchanged. `quarto` is
  unavailable in this cloud session — Mermaid syntax reviewed by hand, not locally rendered; the
  GitHub Action renders on push.
  Next: module 2, foundations/`regulatory-landscape-orientation`.

- **2026-11-11**: Module 2, foundations/`regulatory-landscape-orientation` (`order: 3/4`),
  retrofitted and published. Every original locked fact confirmed unchanged on independent
  re-read: the BECS/platelet-bacterial-detection scenario, the four-tier statute/regulation/
  guidance/AABB-Standard breakdown and its SOX/ITIL/ISO-27001 bridge, the four-question sorting
  list, the 606.100(b)(22)/(d)/(a) quotes, the FDA-investigator/AABB-assessor comparison, the
  original 3 traps, all 3 Q&As, and the original 5 job bullets (now 7). New depth added, nothing
  invented: a second worked example (606.171(c), independently re-verified character-for-
  character against `sources/cfr/606.171.md` — the "should...as soon as possible but must...not
  to exceed 45-calendar days" clause); a new 4th trap built on it ("if the word is 'should,' the
  document must be guidance"); an AABB-accreditation-mechanics paragraph (APEX self-assessment →
  on-site assessment, PPPs followed as written, 2-year reaccreditation, nonconformance
  resolution) independently re-verified against `sources/aabb/accreditation-process.md` and
  confirmed to match exactly; and a new, deliberately generic CLIA subsection that names no
  invented citation. Added a `flowchart TD` Mermaid diagram (step 6) rendering the lesson's own
  four-question decision path, with AABB Standards drawn as a parallel, non-chained branch rather
  than forced into a strict hierarchy — correctly matching what the lesson actually teaches.
  Added a verified video embed (step 7): "Is There a Legal Difference Between Statutes and
  Rules? [No. 86]" (The Federalist Society) — independently re-verified via YouTube oEmbed
  (HTTP 200, title/author match) at publish time; framing is honest that it only covers the
  statute-vs-regulation (Q1/Q2) distinction, not guidance or AABB Standards. `resources.qmd`
  expanded from 3 to 5 links (3 original + the video + a new Cornell 21 CFR 10.115 mirror); all 4
  non-video links independently curl-verified HTTP 200 at publish time. Word count 4,606 (prose),
  within target. `order:` values (3, 4) confirmed unchanged.
  Next: module 3, foundations/`risk-and-controls-vocabulary`.

- **2026-11-11**: Module 3, foundations/`risk-and-controls-vocabulary` (`order: 5/6`),
  retrofitted and published — **completes the foundations track (3/3).** Every original locked
  fact confirmed unchanged on independent re-read: Deviation A (late callback) and Deviation B
  (label mix-up near-miss), the ICH Q9 framing, the likelihood/severity/detectability and
  preventive/detective/corrective definitions, the inherent-vs-residual discussion, the
  606.100(c) and 606.171(b)/(c) quotes (both independently re-verified character-for-character
  against `sources/cfr/606.100.md` and `sources/cfr/606.171.md`), all 3 original Q&As, the
  original 3 traps, and the original 5 job bullets (now 7). New depth added, nothing invented: a
  worked 1-5 FMEA-style RPN scoring table for Deviations A (RPN=6) and B (RPN=80), explicitly
  labeled illustrative/not a cited ICH Q9 formula; a fresh third scenario (Deviation C, a
  cold-chain reagent-refrigerator excursion with a misconfigured real-time alert) — independently
  grepped for every other course's locked identifier (VAL-1203, VIA-0842, DEV-1147, CAPA-1147-A,
  VRA-0219, DI-0301, DED-0458, LAB-07) with a clean result, confirming it reuses nothing; and a
  4th common trap built on it ("a logged event isn't automatically a working detective control").
  Added a `flowchart TD` Mermaid diagram (step 6) mapping the preventive→occurrence→detective→
  corrective sequence onto Deviation B, with a feedback loop from the corrective action back to
  the preventive layer. Added a verified video embed (step 7): "Preventive, Detective & Corrective
  controls | Administrative, Physical & Technical measures" (Security For You) — independently
  re-verified via YouTube oEmbed (HTTP 200, title/author match) at publish time; framing is honest
  that its examples are general security controls, not blood-establishment ones.
  `resources.qmd` expanded from 3 to 5 links (3 original + the video + a new iSixSigma FMEA/RPN
  link); all 4 non-video links independently curl-verified at publish time (3 returned HTTP 200
  directly, the iSixSigma link 301-redirects to its dictionary page, confirmed 200 on follow).
  Word count 5,231 (prose), within target. `order:` values (5, 6) confirmed unchanged.
  Next: module 4, `blood-center-operations`/`donor-recruitment-and-screening` — the retrofit's
  first Track 1 course module.

- **2026-11-11**: User feedback after modules 1-3: too much of the added depth was original
  prose I wrote myself (a second/third invented worked example per module) rather than linking
  out to trustworthy existing material. Adjusted `TEACHING.md`: word-count target lowered from
  3,500–6,000 to 2,500–4,500 (prose only), step 5 and the Style section now explicitly say to
  check for a trustworthy external explainer before writing a new self-authored worked example,
  and the Resources section is rewritten to make curating links (6–10 now, up from 4–8) at least
  as much of the job as writing lesson prose — official sources, professional-body explainers,
  practical tools/calculators, not just the embedded video. Modules 1-3 (already published) are
  accurate and not being redone solely for this — they're left as-is — but every module from
  here forward follows the adjusted balance: lean on real external links wherever a sub-point
  isn't specific to Lakeshore's own scenario, write original material only for what's actually
  scenario-specific or this curriculum's own continuity.
  Next: module 4, `blood-center-operations`/`donor-recruitment-and-screening`.

- **2026-11-11**: Module 4, `blood-center-operations`/`donor-recruitment-and-screening`
  (`order: 2/3`), retrofitted under the REBALANCED standard and published — first module built
  with the new link-first balance, and noticeably leaner on self-authored additions than modules
  1-3. Every original locked fact confirmed unchanged on independent re-read: the Marcus Webb
  scenario (Monday hemoglobin deferral, Thursday second attempt at a different site), all six
  630.10/630.40 quotes, all 3 Q&As, both traps, the 5 job bullets. Only two insertions into
  index.qmd, nothing else touched: a Marcus-specific `flowchart TD` Mermaid diagram (step 6,
  walking his actual Monday and Thursday visits through the four-step sequence, syntax-validated
  by the drafting agent via a real `mermaid.parse()` run, not just eyeballed) and a verified
  video embed (step 7): "Who Can Donate Blood? Eligibility Requirements Explained | Interview
  with Dr. Courtney Lawrence" (American Red Cross) — independently re-verified via YouTube
  oEmbed (HTTP 200, title/author match) at publish time. No new invented scenario, numeric
  example, or narrative content was added — consistent with the rebalanced standard.
  `resources.qmd` expanded from 4 to 8 links: kept all 4 original, added the video, the
  `sources/nih/reds-program.md`-backed REDS-IV-P link (framed honestly as research context, not
  a citable requirement), an AABB Standards overview link, and a general master-data-management
  explainer backing the lesson's own CMDB/identity-matching bridge. All 7 non-embedded links
  independently re-verified at publish time (6 direct HTTP 200, the IBM MDM link 301-redirects
  to `ibm.com/think/topics/...`, confirmed 200 on follow). `order:` values (2, 3) confirmed
  unchanged.
  Next: module 5, `blood-center-operations`/`collection-and-testing`.

- **2026-11-11**: Module 5, `blood-center-operations`/`collection-and-testing` (`order: 4/5`),
  retrofitted under the rebalanced standard and published. Every original locked fact confirmed
  unchanged on independent re-read: the Tuesday donation/Wednesday reactive-result scenario, the
  single-donor-number framing, all six CFR quotes (606.160(c), 606.160(b)(1)(iii),
  610.40(a)(1)-(2), 606.40(a)(3)/(4)/(6), 610.40(g), 610.40(h)(1)), all 3 Q&As, both traps, the 5
  job bullets. Only two insertions into index.qmd: a Tuesday/Wednesday-scenario-specific
  `flowchart TD` Mermaid diagram (step 6, the physical component-separation path and the testing
  path both converging on one release-gate node) — the drafting agent validated syntax by
  actually rendering it to SVG with `mermaid-cli`, not just parsing — and a verified video embed
  (step 7): "The Journey of Blood... | NHS Give Blood" (NHS Blood Donation) — independently
  re-verified via YouTube oEmbed (HTTP 200, title/author match) at publish time, honestly framed
  as UK-regulated, not FDA/CFR-specific. No new invented scenario or narrative content was added.
  `resources.qmd` expanded from 4 to 7 links: kept all 4 original, added the video, an AABB
  Circular of Information link (component shelf-life/storage detail), and a Microsoft Learn
  "deployment gates" explainer backing the lesson's own release-gate ITSM bridge. All 5
  non-embedded links independently re-verified at publish time (4 direct HTTP 200, the Microsoft
  Learn link 301-redirects to a locale-qualified URL, confirmed 200 on follow). Word count 4,010
  (prose), within target. `order:` values (4, 5) confirmed unchanged.
  Next: module 6, `blood-center-operations`/`component-processing-and-labeling`.

- **2026-11-11**: Module 6, `blood-center-operations`/`component-processing-and-labeling`
  (`order: 6/7`), retrofitted under the rebalanced standard and published. Every original locked
  fact confirmed unchanged: the Wednesday 6:40am forty-units scenario, all citations
  (606.121(c)(1)-(4), (c)(9), (c)(13), (c)(8)(ii), 610.53(b)), the full dating table, the "ISBT
  128, in full" section, all 3 Q&As, both traps, the 5 job bullets. Added a scenario-specific
  `flowchart TD` Mermaid diagram (step 6, the five-step release-eligibility sequence showing
  steps 1-3 clean and step 4's drifted product code blocking step 5) — syntax validated by
  actually rendering to SVG via `mermaid-cli`. Added a verified video embed (step 7): "Overview
  of the ISBT 128 Standard" — from **ICCBBA's own official channel**, the exact standards body
  this lesson covers, about as close to a primary source as a video gets — independently
  re-verified via YouTube oEmbed (HTTP 200, title/author match) at publish time. No new invented
  scenario content. `resources.qmd` expanded from 4 to 8 links: kept all 4 original, added the
  video, a Code 128 barcode-symbology technical explainer, an Atlassian CMDB explainer (backing
  the lesson's own naming-convention ITSM bridge), and an AABB accreditation overview. All 7
  non-embedded links independently re-verified at publish time, all HTTP 200 directly. Word
  count 4,396 (prose), within target. `order:` values (6, 7) confirmed unchanged.
  Next: module 7, `blood-center-operations`/`storage-distribution-and-hemovigilance`.

- **2026-11-11**: Module 7, `blood-center-operations`/`storage-distribution-and-hemovigilance`
  (`order: 8/9`), retrofitted under the rebalanced standard and published. Every original locked
  fact confirmed unchanged: the Thursday-shipment/Friday-9:52pm scenario, the LIS/HIS
  distinction, all five citations (600.15, 606.165(a)-(c), 606.160(b)(3)(iii), 606.170(a),
  606.170(b)), all 3 Q&As, both traps, the 5 job bullets. Added a scenario-specific `flowchart
  TD` Mermaid diagram (step 6, the full chain-of-custody: storage → shipment → distribution/
  receipt handoff → the LIS/HIS boundary at Riverside → the reaction → investigation → fork on
  fatality/fault) — syntax validated by rendering to SVG via `mermaid-cli`. Added a verified
  video embed (step 7): "Blood Transfusions - Med-Surg..." (Level Up RN, a well-regarded nursing-
  education channel) — independently re-verified via YouTube oEmbed (HTTP 200, title/author
  match) at publish time, honestly framed as the clinical/bedside side, not Lakeshore-specific.
  `resources.qmd` expanded from 4 to 8 links. **Two links needed a fix during my own independent
  re-verification** (the drafting subagent's own curl checks had passed them, but a second
  check caught issues): the AABB hemovigilance link 301-redirects — updated to show the actual
  landing URL; the CDC NHSN link returned inconsistent results (200 on a HEAD request, 403 on a
  GET, both independently re-tried) — kept, with an honest caveat added matching this
  curriculum's established eCFR/FDA bot-blocking disclosure pattern, rather than asserting it
  loads cleanly. All other links (4 original CFR/GovInfo mirrors, the video, the TechTarget LIS
  explainer) confirmed clean HTTP 200. Word count 4,091 (prose), within target. `order:` values
  (8, 9) confirmed unchanged.
  Next: module 8, `blood-center-operations`/`becs-in-the-pipeline` — this course's final module.

- **2026-11-11**: Module 8, `blood-center-operations`/`becs-in-the-pipeline` (`order: 10/11`),
  retrofitted under the rebalanced standard and published — **completes Track 1
  (`blood-center-operations`), 8/8.** Every original locked fact confirmed unchanged: the Friday
  3:40pm OS-patch scenario, the four-module BECS recap, the CGMP/device-law dual footing, all
  three citations (606.100(b), 11.10(a), 606.171(b)(1)(ii)), all 3 Q&As, all 3 traps, the 5 job
  bullets. Added the AABB §3.9 "Information Systems" research from earlier this session: one
  prose sentence (no new citation-decoder row, no AABB text quoted) noting the accreditation-
  side counterpart to this lesson's FDA-side validated-state discussion. Added a scenario-
  specific `flowchart TD` Mermaid diagram (step 6, the "one incident, two tracks" concept forking
  into the IT-restore track and the Quality/606.171 deviation track, with an explicit dotted
  non-connection showing the IT ticket's closure doesn't close the quality track) — syntax
  validated by rendering to SVG via `mermaid-cli`. Added a verified video embed (step 7): "#26
  Computer System Validation (CSV)" (Waters Corporation) — independently re-verified via YouTube
  oEmbed (HTTP 200, title/author match) at publish time. `resources.qmd` expanded from 4 to 9
  links: kept all 4 original, added the video, the AABB §3.9 entry (honestly noting the full
  standard text sits behind AABB's paywall), FDA's own BECS validation guidance page, FDA's SaMD
  page, and ISPE's GAMP 5 guide page. All 7 non-embedded links independently re-verified at
  publish time, all HTTP 200 (ISPE's redirects, confirmed 200 on follow) — notably, the fda.gov
  pages this session's drafting agent found were reachable loaded cleanly on independent re-check
  too, an improvement over earlier sessions' fda.gov bot-blocking. Word count 4,105 (prose),
  within target. `order:` values (10, 11) confirmed unchanged.
  Next: module 9, `quality-system-essentials`/`aabb-qse-framework` — the start of Track 2.

- **2026-11-11**: Module 9, `quality-system-essentials`/`aabb-qse-framework` (`order: 13/14`),
  retrofitted under the rebalanced standard and published. Every original locked fact confirmed
  unchanged: the new-QA/org-chart/AABB-assessor scenario, the quality-system-vs-quality-control
  distinction, the ISO 9001/ITIL and ISO 9001/ISO 20000-1 bridges, the full ten-QSE list, the
  six concrete ITIL pairings, the 606.100(d) quote, all 3 Q&As, both traps, the 5 job bullets.
  Added a `flowchart LR` Mermaid diagram (step 6) drawing exactly the lesson's own six existing
  pairings (QSEs on one side, ITIL practices on the other) plus the Q2 cross-reference case as a
  dotted edge — deliberately leaves the other four QSEs unconnected since the lesson itself never
  pairs them — syntax validated by rendering to SVG via `mermaid-cli`. Added a verified video
  embed (step 7): "046: Top 5 Changes in the NEW AABB Standards with Pat Ooley" (Blood Bank Guy /
  Dr. D. Joe Chaffin MD — a real, AABB-credentialed transfusion-medicine educational podcast;
  AABB itself partners with the channel for CE credit) — independently re-verified via YouTube
  oEmbed (HTTP 200, title/author match) at publish time. `resources.qmd` expanded from 4 to 8
  links: kept all 4 original, added the video, a BSI ISO 9001 explainer, an ITSM.tools ITIL 4
  service value chain walkthrough, and a Wikipedia ISO/IEC 20000 page backing the lesson's Annex
  SL claim. All 7 non-embedded links independently re-verified at publish time, all HTTP 200.
  Word count 3,306 (prose), within target. `order:` values (13, 14) confirmed unchanged.
  Next: module 10, `quality-system-essentials`/`deviations-and-nonconformances`.

- **2026-11-11**: Module 10, `quality-system-essentials`/`deviations-and-nonconformances`
  (`order: 15/16`), retrofitted under the rebalanced standard and published. Every original
  locked fact confirmed unchanged: the Owen Pruitt/Brookfield downtime-binder scenario, the
  vocabulary-check section, all five citations (606.100(b), 630.10(e)(2)(iii), 630.10(h),
  606.171(b)(1)(i)/(b)(3), 606.160(b)(7)(iii)), all 3 Q&As, all 3 traps, the 5 job bullets. Added
  a `flowchart TD` Mermaid diagram (step 6, the lesson's own five stages applied to Owen Pruitt's
  donation, ending in the "sixth question" CAPA-decision fork) — syntax validated by rendering to
  SVG via `mermaid-cli`. Added a verified video embed (step 7): "Deviation Investigation in the
  Pharmaceutical Industry" (GMP-SOP Videos) — independently re-verified via YouTube oEmbed (HTTP
  200, title/author match) at publish time, honestly framed as the broader pharma-GMP version of
  the same five-stage discipline. `resources.qmd` expanded from 4 to 8 links: kept all 4 original,
  added the video, a root-cause-analysis (5-Why/Fishbone) explainer, ICH Q9's original guideline
  PDF (honestly noting it's the 2005 text, not the 2023 Q9(R1) revision — no verified link to R1
  was found), and a TapRooT explainer on extent-of-condition specifically. All 7 non-embedded
  links independently re-verified at publish time, all HTTP 200 (TapRooT's redirects, confirmed
  200 on follow). Word count 3,990 (prose), within target. `order:` values (15, 16) confirmed
  unchanged.
  Next: module 11, `quality-system-essentials`/`capa-root-cause-to-effectiveness`.

- **2026-11-11**: Module 11, `quality-system-essentials`/`capa-root-cause-to-effectiveness`
  (`order: 17/18`), retrofitted under the rebalanced standard and published. Every original
  locked fact confirmed unchanged: the Owen Pruitt/Brookfield CAPA write-up, the full 5-Whys
  chain, the four-part CAPA process, the effectiveness check's four required pieces, both
  citations (606.100(c), 606.171(f)), all 3 Q&As, all 3 traps, the 5 job bullets. Added a
  `flowchart TD` Mermaid diagram (step 6, the lesson's own 5-Whys chain forking into corrective/
  preventive action and converging on the effectiveness check) — syntax validated by rendering
  to SVG via `mermaid-cli`. Added a verified video embed (step 7): "What Is a CAPA? From Root
  Cause to Effectiveness Check" (Matrix One) — independently re-verified via YouTube oEmbed (HTTP
  200, title/author match) at publish time. `resources.qmd` expanded from 3 to 8 links: kept all
  3 original, added the video, a fishbone-diagram explainer, a CAPA-effectiveness-check design
  piece, and a "why CAPAs fail" industry piece — all independently re-verified HTTP 200. **One
  link needed a fix during independent re-verification**: the MindTools 5-Whys link returned 200
  on the subagent's own check but 403 on my independent re-check — added an honest caveat noting
  the inconsistent, bot-protection-style behavior rather than asserting it loads cleanly, matching
  this curriculum's established eCFR/FDA/CDC disclosure pattern. Word count 4,065 (prose), within
  target. `order:` values (17, 18) confirmed unchanged.
  Next: module 12, `quality-system-essentials`/`change-control-for-regulated-systems`.

- **2026-11-11**: Module 12, `quality-system-essentials`/`change-control-for-regulated-systems`
  (`order: 19/20`), retrofitted under the rebalanced standard and published. Every original
  locked fact confirmed unchanged: the "email it and call it done" scenario, the five-stage
  change process, the standard-change/planned-deviation mapping, the dual Quality+IT approval
  requirement, both 606.100(b) quotes, all 3 Q&As, all 3 traps, the 5 job bullets. Added a linear
  `flowchart TD` Mermaid diagram (step 6, the lesson's own five stages applied to the document-
  control-distribution fix, no fork since this lesson's process has none) — syntax validated by
  rendering to SVG via `mermaid-cli`. Added a verified video embed (step 7): "Change Control in
  Pharmaceuticals..." (PharmaZonner) — independently re-verified via YouTube oEmbed (HTTP 200,
  title/author match) at publish time. `resources.qmd` expanded from 3 to 9 links: kept all 3
  original, added the video, two Atlassian ITSM explainers (change enablement, CAB), ICH Q10's
  official guideline PDF, and FDA's own Q10 adoption page. All 6 non-embedded links independently
  re-verified at publish time, all HTTP 200. Word count 3,991 (prose), within target. `order:`
  values (19, 20) confirmed unchanged.
  Next: module 13, `quality-system-essentials`/`document-control-and-records`.

- **2026-11-11**: Module 13, `quality-system-essentials`/`document-control-and-records`
  (`order: 21/22`), retrofitted under the rebalanced standard and published. Every original
  locked fact confirmed unchanged: the six-months-later audit scenario, the departed-site-lead
  near-catch, the document-vs-record distinction, the six-stage lifecycle, the controlled/
  uncontrolled-copy distinction, all four citations (606.100(b), 606.160(a)(1), 606.120(b)(2),
  606.160(d)), all 3 Q&As, all 3 traps, the 5 job bullets. Added a `flowchart TD` Mermaid diagram
  (step 6, the lesson's own six-stage lifecycle with Brookfield's binder and the departed-site-
  lead catch annotated at the Issue stage) — syntax validated by rendering to SVG via
  `mermaid-cli`. Added a verified video embed (step 7): "What Is The Difference In Controlled &
  Uncontrolled Documents?" (InstantGMP) — independently re-verified via YouTube oEmbed (HTTP 200,
  title/author match) at publish time. `resources.qmd` expanded from 4 to 8 links: kept all 4
  original, added the video, an Atlassian ITIL knowledge-management explainer, a Red Hat CMDB
  explainer, and a Pharmaguideline Good Documentation Practice piece. All 7 non-embedded links
  independently re-verified at publish time, all HTTP 200. Word count 4,108 (prose), within
  target. `order:` values (21, 22) confirmed unchanged.
  Next: module 14, `quality-system-essentials`/`quality-risk-management`.

- **2026-11-11**: Module 14, `quality-system-essentials`/`quality-risk-management`
  (`order: 23/24`), retrofitted under the rebalanced standard and published. Every original
  locked fact confirmed unchanged: the QA's uneasy follow-up scenario, the four-stage ICH
  Q9(R1) process, the full FMEA worked table (5 failure modes, RPN 60/50/30/25/16), the risk-
  ranking-and-filtering section, both citations (ICH Q9(R1), 606.100(c)), all 3 Q&As, all 3
  traps, the 5 job bullets. Added a `flowchart TD` Mermaid diagram (step 6, the lesson's own
  four-stage process with Risk Evaluation branching on its own RPN-40 threshold into reduction
  vs. acceptance, looping back through Risk Review) — syntax validated by rendering to SVG via
  `mermaid-cli`. Added a verified video embed (step 7): "ICH Q9(R1): Quality Risk Management"
  (BioBoston Consulting) — independently re-verified via YouTube oEmbed (HTTP 200, title/author
  match) at publish time. `resources.qmd` expanded from 3 to 8 links: kept all 3 original, added
  the video, an iSixSigma FMEA explainer, a PIC/S risk-based-inspection piece, an ISO 14971
  explainer, and an InvGate ITIL risk-management piece. All 7 non-embedded links independently
  re-verified at publish time, all HTTP 200. Word count 4,175 (prose), within target. `order:`
  values (23, 24) confirmed unchanged.
  Next: module 15, `quality-system-essentials`/`internal-audits-and-management-review` — the
  final module of this course.

- **2026-11-11**: Module 15, `quality-system-essentials`/`internal-audits-and-management-review`
  (`order: 25/26`), retrofitted and published — **completes `quality-system-essentials`, 7/7.**
  All locked content unchanged (index.qmd diff purely additive). Added a `flowchart TD` diagram
  showing Fairview's audit finding and module 2's other discovery channels converging on the same
  five-stage deviation process (rendered to SVG via `mermaid-cli`), and a verified video embed:
  "What Is Management Review in ISO 9001?" (Standarity), oEmbed re-verified at publish time.
  `resources.qmd` expanded from 4 to 9 links (ISO 9001 clause 9.2 explainer, a PMC peer-reviewed
  blood-centre audit study, AABB Press's audit book page, an ITIL/COBIT governance explainer);
  all 8 non-video links independently re-verified HTTP 200. Word count 3,844.
  **Model note (user request, 2026-11-11):** the user switched the main session to Opus 5.5 and
  asked that the rest of the retrofit keep the same model as blood-center-operations. From here,
  drafting subagents are pinned to `model: sonnet` (blood-ops modules were drafted on Sonnet), and
  every module keeps the identical blood-ops pattern: diagram + one verified video + link-first
  resources page, no new invented content.
  Next: module 16, `directing-the-quality-analyst`/`qa-deliverables-and-ownership`.

- **2026-11-11**: Modules 16–21, all of `directing-the-quality-analyst`, retrofitted and
  published — **completes that course, 6/6.** First course drafted as a parallel batch: one Sonnet
  subagent per module, each following a shared brief (scratchpad `retrofit-brief.md`) that
  restates the blood-ops pattern, and each finding and oEmbed-verifying its own video. Every module
  then got the same independent check before publishing (scripted: diff additions-only, `order:`
  unchanged, oEmbed re-run with title matched to the iframe, every link curl'd 200, diagram facts
  spot-checked against the original lesson text). Videos: Pharmaguideline (QA vs QC), PathWise
  (pushing past "human error"), **FDA's own channel** (BPDR update — escalation-criteria), GMP Detox
  (IQ/OQ/PQ + GAMP 5), WhitehallTraining (supplier management), Bernard Marr (leading vs lagging
  indicators). Two drafting agents had skipped the video as not authoritative enough; since the
  user explicitly wants videos and every blood-ops module has one, I picked the most on-topic
  verified candidate for each and replaced the "no video" notes, framed honestly as training
  content, not regulator material. Trimmed escalation-criteria's resources from 11 to 10 entries.
  One open question flagged for the csv-and-becs retrofit: a drafting agent noticed
  `sources/fda-guidance/csa-production-qms-software-2026-excerpt.md` gives a 2026 issue date while
  a related FDA PDF banner references September 2025 — re-check the CSA date against FDA's own
  page before citing it.
  Next: module 22, `csv-and-becs`/`gamp5-and-the-v-model`.
- 2026-11-11 — `csv-and-becs` retrofitted, 7/7 (#22–#28), one commit per module, drafted by
  Sonnet subagents in parallel and independently verified (diff additions-only apart from
  resources-intro link-count sentences, `order:` unchanged, oEmbed title match, no reused video ID,
  every link curl 200, diagram facts grep-checked against the pre-retrofit lesson).
  Videos: ISPE (GAMP 5 2nd ed.), Matrix One (IQ/OQ/PQ), UW Video (SaMD talk), FDA (QMSR overview),
  FDA (electronic systems/records/signatures webinar, clinical-investigation context), Group-IB
  (generic patch management — weakest; no GxP periodic-review video passed oEmbed, framed honestly),
  Sidharth Ramesh/Medblocks (HL7 v2). AABB §3.9 folded into `becs-as-a-regulated-device` and
  `validated-state-lifecycle-and-patching` as one prose sentence + one resources entry each (themes
  only, never quoted). CSA date question resolved: the source file's 02/03/2026 issue date is from
  FDA's guidance database listing (docket FDA-2022-D-0795); the "September 2025" banner was on the
  separate General Principles PDF — no conflict.
  Next: module 29, `data-integrity-and-records`/`alcoa-and-data-integrity`.
- 2026-11-11 — `data-integrity-and-records` retrofitted, 6/6 (#29–#34), same pipeline and checks.
  Videos: FDA GCP Data Integrity Workshop parts 4 and 10 (ALCOA overview; audit trails — clinical
  context, framed as such), Pharma Best Practices (2003 Part 11 scope/narrow interpretation),
  Learnaboutgmp (2003 guidance course), Arkivum (vendor product overview — reframed explicitly as a
  sales piece; no regulator video on long-term readability found; replace if a better one turns up),
  ICCBBA (ISBT 128 and traceability).
  Next: module 35, `fda-and-aabb-in-practice`/`fda-inspection-authority-and-outcomes`.
- 2026-11-11 — `fda-and-aabb-in-practice` (6/6, #35–#40) and `grc-frameworks-and-risk-management`
  (5/5, #41–#45) retrofitted, same pipeline and checks. Videos: FDA SBIA "Understanding FDA
  Inspections and Data", NSF (483s/Warning Letters), FDA BPDR video EtLmHnBuNJQ **deliberately
  reused** in `filing-a-biological-product-deviation-report` (also in `escalation-criteria`; the
  only FDA BPDR video findable — framed as a reuse; replace if a CBER blood-BPDR video appears),
  Blood Bank Guy with AABB's Director of Accreditation (2018), Doctor ISO (risk-based auditing),
  FDA REdI 2020 drug inspections, Mike Chapple (RMF overview), Denise Tawwab (Categorize; Assess),
  Enterprise Security Architecture (Authorize), Optic Cyber (POA&M).
  Next: module 46, `healthcare-security-and-privacy`/`information-governance-in-a-covered-entity`.
