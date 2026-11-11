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
| 2 | Foundations | `regulatory-landscape-orientation` | 3/4 | Not started |
| 3 | Foundations | `risk-and-controls-vocabulary` | 5/6 | Not started |
| 4 | `blood-center-operations` | `donor-recruitment-and-screening` | 2/? | Not started |
| 5 | `blood-center-operations` | `collection-and-testing` | 4/? | Not started |
| 6 | `blood-center-operations` | `component-processing-and-labeling` | 6/? | Not started |
| 7 | `blood-center-operations` | `storage-distribution-and-hemovigilance` | 8/? | Not started |
| 8 | `blood-center-operations` | `becs-in-the-pipeline` | 10/? | Not started |
| 9 | `quality-system-essentials` | `aabb-qse-framework` | 13/14 | Not started |
| 10 | `quality-system-essentials` | `deviations-and-nonconformances` | 15/16 | Not started |
| 11 | `quality-system-essentials` | `capa-root-cause-to-effectiveness` | 17/18 | Not started |
| 12 | `quality-system-essentials` | `change-control-for-regulated-systems` | 19/20 | Not started |
| 13 | `quality-system-essentials` | `document-control-and-records` | 21/22 | Not started |
| 14 | `quality-system-essentials` | `quality-risk-management` | 23/24 | Not started |
| 15 | `quality-system-essentials` | `internal-audits-and-management-review` | 25/26 | Not started |
| 16 | `directing-the-quality-analyst` | `qa-deliverables-and-ownership` | 28/29 | Not started |
| 17 | `directing-the-quality-analyst` | `reviewing-deviations-and-capas` | 30/31 | Not started |
| 18 | `directing-the-quality-analyst` | `escalation-criteria` | 32/33 | Not started |
| 19 | `directing-the-quality-analyst` | `reviewing-validation-packages` | 34/35 | Not started |
| 20 | `directing-the-quality-analyst` | `reviewing-vendor-risk-assessments` | 36/37 | Not started |
| 21 | `directing-the-quality-analyst` | `coaching-and-reporting-upward` | 38/39 | Not started |
| 22 | `csv-and-becs` | `gamp5-and-the-v-model` | 41/42 | Not started |
| 23 | `csv-and-becs` | `iq-oq-pq-and-traceability` | 43/44 | Not started |
| 24 | `csv-and-becs` | `becs-as-a-regulated-device` | 45/46 | Not started |
| 25 | `csv-and-becs` | `qmsr-iso-13485-and-the-vendor` | 47/48 | Not started |
| 26 | `csv-and-becs` | `part-11-for-validated-systems` | 49/50 | Not started |
| 27 | `csv-and-becs` | `validated-state-lifecycle-and-patching` | 51/52 | Not started |
| 28 | `csv-and-becs` | `becs-interfaces-and-data-integrity` | 53/54 | Not started |
| 29 | `data-integrity-and-records` | `alcoa-and-data-integrity` | 56/57 | Not started |
| 30 | `data-integrity-and-records` | `audit-trails-and-esignatures` | 58/59 | Not started |
| 31 | `data-integrity-and-records` | `predicate-rules-and-hybrid-systems` | 60/61 | Not started |
| 32 | `data-integrity-and-records` | `legacy-systems-and-part-11-gaps` | 62/63 | Not started |
| 33 | `data-integrity-and-records` | `retention-across-record-types` | 64/65 | Not started |
| 34 | `data-integrity-and-records` | `multi-site-governance-and-donor-identification` | 66/67 | Not started |
| 35 | `fda-and-aabb-in-practice` | `fda-inspection-authority-and-outcomes` | 69/70 | Not started |
| 36 | `fda-and-aabb-in-practice` | `warning-letters-and-recalls` | 71/72 | Not started |
| 37 | `fda-and-aabb-in-practice` | `filing-a-biological-product-deviation-report` | 73/74 | Not started |
| 38 | `fda-and-aabb-in-practice` | `the-aabb-assessment-process` | 75/76 | Not started |
| 39 | `fda-and-aabb-in-practice` | `designing-an-internal-audit-program` | 77/78 | Not started |
| 40 | `fda-and-aabb-in-practice` | `mock-inspections-and-presenting-it-becs-evidence` | 79/80 | Not started |
| 41 | `grc-frameworks-and-risk-management` | `risk-frameworks-side-by-side` | 82/83 | Not started |
| 42 | `grc-frameworks-and-risk-management` | `categorize-and-select-controls` | 84/85 | Not started |
| 43 | `grc-frameworks-and-risk-management` | `implement-and-assess-controls` | 86/87 | Not started |
| 44 | `grc-frameworks-and-risk-management` | `authorize-and-monitor` | 88/89 | Not started |
| 45 | `grc-frameworks-and-risk-management` | `poams-and-capas` | 90/91 | Not started |
| 46 | `healthcare-security-and-privacy` | `information-governance-in-a-covered-entity` | 93/94 | Not started |
| 47 | `healthcare-security-and-privacy` | `the-hipaa-privacy-rule` | 95/96 | Not started |
| 48 | `healthcare-security-and-privacy` | `security-rule-safeguards-and-part-11` | 97/98 | Not started |
| 49 | `healthcare-security-and-privacy` | `breach-notification-and-dual-reporting` | 99/100 | Not started |
| 50 | `healthcare-security-and-privacy` | `investigating-a-healthcare-data-incident` | 101/102 | Not started |
| 51 | `vendor-and-third-party-risk-management` | `supplier-qualification-and-risk-tiering` | 104/105 | Not started |
| 52 | `vendor-and-third-party-risk-management` | `reading-a-soc-2-report` | 106/107 | Not started |
| 53 | `vendor-and-third-party-risk-management` | `reading-an-iso-27001-certificate` | 108/109 | Not started |
| 54 | `vendor-and-third-party-risk-management` | `business-associate-agreements` | 110/111 | Not started |
| 55 | `vendor-and-third-party-risk-management` | `vendor-change-notifications-and-your-own-change-control` | 112/113 | Not started |
| 56 | `itsm-for-regulated-blood-services` | `itil-to-qse-crosswalk-change-and-problem` | 115/116 | Not started |
| 57 | `itsm-for-regulated-blood-services` | `itil-to-qse-crosswalk-cmdb-and-continual-improvement` | 117/118 | Not started |
| 58 | `itsm-for-regulated-blood-services` | `itil-to-grc-crosswalk` | 119/120 | Not started |
| 59 | `itsm-for-regulated-blood-services` | `building-an-inspection-ready-service-catalog-and-cmdb` | 121/122 | Not started |
| 60 | `itsm-for-regulated-blood-services` | `translating-itsm-and-risk-metrics-for-executives` | 123/124 | Not started |
| 61 | `itsm-for-regulated-blood-services` | `presenting-it-service-and-risk-performance` | 125/126 | Not started |

**Next up: #2, foundations/`regulatory-landscape-orientation`.**

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
