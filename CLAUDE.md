# Repo rules for every Claude session

1. **Read before writing:** `TEACHING.md`, then `.claude/course-authoring/learner-profile.md`,
   then `plans/curriculum.md`, then the relevant `plans/<slug>.md`.
2. **"Continue" means the whole curriculum, not one course.** When the user types `Continue`
   (or anything that doesn't name a specific course), use the `create-course` skill: it reads
   `plans/curriculum.md`'s progress tracker and "Next up" line to decide which course and
   module to build next, scoping a new course first if the next one hasn't been started, then
   keeps building module after module (rule 4) until the curriculum is done or the session hits
   a limit. When the user does name a course or module, build that instead, regardless of
   sequence.
3. **Public repo.** Never write employer names, internal SOPs, system or vendor
   configurations, audit findings, or anything non-public. Scenarios use a fictional
   "Lakeshore Blood Center."
4. **Throughput rules (keep usage limits from biting):**
   - Build **module after module in curriculum order, for as long as the session allows**
     (lesson + resources). After each module: update the plan file's progress log, update
     `plans/curriculum.md`'s progress tracker, publish immediately, then move straight to the
     next unbuilt module. Stop only when the curriculum is done or the session hits a real
     limit — never after just one module.
   - Delegate the actual drafting of each module to a subagent so the main session's context
     stays clean across many modules in one sitting.
   - The plan file is the memory between sessions. Anything the next session needs goes
     there, not in chat.
   - Read regulations from `sources/` (local copies), never re-fetch them from the web.
     If a source is missing, run `fetch-source` once.
   - Draft with the default model. Use the strongest model only for the course map
     (create-course Phase 2) and the final audit.
   - Reuse `foundations/` modules; never re-teach something a foundation already covers.
     Link to it instead.
5. **Accuracy:** every regulatory claim cites its source (e.g., 21 CFR 606.160(b)(1)).
   Quote CFR text only from `sources/`. Never invent a citation, a clause number, or an
   AABB standard number. If unsure, say so in the lesson and flag it in the plan.
6. **Site mechanics:** Quarto builds the sidebar automatically from folders. Pages order
   by the `order:` front-matter field. Hidden answers use
   `::: {.callout-tip collapse="true"}`. If `quarto` is available, render before
   publishing and fix any errors; if it isn't (cloud sessions), don't install it — the
   GitHub Action renders the site.
7. **Publish** with the `publish` skill: one commit and one push per module. In cloud
   sessions, pushing your working branch is enough: `auto-merge.yml` merges it into
   main and deploys the site. Never ask the user to review or merge a pull request.
8. **The user is not technical.** Never ask them to run commands, edit files, or use
   git. Report results in plain English, ending with the live page link:
   `https://<github-username>.github.io/isoe-school/`.
