# Repo rules for every Claude session

1. **Read before writing:** `TEACHING.md`, then `.claude/course-authoring/learner-profile.md`,
   then the relevant `plans/<slug>.md`.
2. **Public repo.** Never write employer names, internal SOPs, system or vendor
   configurations, audit findings, or anything non-public. Scenarios use a fictional
   "Lakeshore Blood Center."
3. **Throughput rules (keep usage limits from biting):**
   - Build at most **one module per session** (lesson + practice + resources). Update the
     plan file's progress log, publish, then tell the user to start a fresh session.
   - The plan file is the memory between sessions. Anything the next session needs goes
     there, not in chat.
   - Read regulations from `sources/` (local copies), never re-fetch them from the web.
     If a source is missing, run `fetch-source` once.
   - Draft with the default model. Use the strongest model only for the course map
     (create-course Phase 2) and the final audit.
   - Reuse `foundations/` modules; never re-teach something a foundation already covers.
     Link to it instead.
4. **Accuracy:** every regulatory claim cites its source (e.g., 21 CFR 606.160(b)(1)).
   Quote CFR text only from `sources/`. Never invent a citation, a clause number, or an
   AABB standard number. If unsure, say so in the lesson and flag it in the plan.
5. **Site mechanics:** Quarto builds the sidebar automatically from folders. Pages order
   by the `order:` front-matter field. Hidden answers use
   `::: {.callout-tip collapse="true"}`. If `quarto` is available, render before
   publishing and fix any errors; if it isn't (cloud sessions), don't install it — the
   GitHub Action renders the site.
6. **Publish** with the `publish` skill: one commit and one push per module. In cloud
   sessions, pushing your working branch is enough: `auto-merge.yml` merges it into
   main and deploys the site. Never ask the user to review or merge a pull request.
7. **The user is not technical.** Never ask them to run commands, edit files, or use
   git. Report results in plain English, ending with the live page link:
   `https://<github-username>.github.io/isoe-school/`.
