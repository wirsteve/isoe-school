---
name: create-course
description: Build module after module of a course (or scope a new course) in the ISOE School curriculum, for as long as the session allows. Use when the user says "Create a course: I want to be able to <finish line>", "Continue", "Continue the course", or names a specific course/module to build. Reads plans/curriculum.md to decide what's next when nothing specific is named.
---

# Create course

Builds the ISOE School curriculum, module after module, publishing each one as it's finished.
Read `CLAUDE.md`, `TEACHING.md`, `.claude/course-authoring/learner-profile.md`, and
`plans/curriculum.md` before doing anything else — in that order, every session, no exceptions
(CLAUDE.md rule 1).

## Figure out what to build

1. **User named an explicit new course** ("Create a course: I want to be able to X") that isn't
   in `plans/curriculum.md` → this is an ad hoc addition. Scope it (Phase 1/2 below), add a row
   for it to `plans/curriculum.md`'s progress tracker, then build its first module.
2. **User said "Continue", "Continue the course", or gave no specifics** → open
   `plans/curriculum.md`, read the progress tracker, and take the course/module named under
   **Next up**. If that course has no `plans/<slug>.md` yet, scope it first (Phase 1/2), then
   build its first module. If it has a plan file, build the next unbuilt module listed there.
3. **User named a specific course or module** → build that one, regardless of sequence.

Keep building modules in curriculum order for as long as the session allows (CLAUDE.md
throughput rule) — after finishing one module, immediately move to the next unbuilt module and
repeat the full loop (figure out what to build → Phase 3 → After building, including publish)
until the curriculum is done or the session hits a limit. "Scope a course" (Phase 1/2) and
"build its first module" (Phase 3) together in one pass is fine and expected.

Delegate the actual drafting of each module (Phase 3) to a subagent so the main session's context
stays clean across many modules in one sitting. Give the subagent everything it needs in the
prompt — the module's finish line, the relevant slice of `plans/<slug>.md`, the learner profile,
and the lesson spine from `TEACHING.md` — since it starts with no memory of this conversation.
Have it report back the files it wrote and anything it flagged (missing source, uncertain
citation). Run Phase 2 (course map) yourself with the strongest available model rather than
delegating it — it sets the syllabus every later module depends on.

## Phase 1 — Scope the course (new courses only)

Turn the finish line into a syllabus: an ordered list of modules, each with its own one-line
finish line, that together deliver the course's finish line. Check `foundations/` first — if a
module would just re-teach something a foundation already covers, link to the foundation
instead of writing it again (CLAUDE.md rule 3).

## Phase 2 — Course map (use the strongest available model for this step only)

Turn the module list into:
- `courses/<slug>/index.qmd` — the syllabus page: course finish line, module list with one-line
  descriptions, prerequisite foundations linked.
- `plans/<slug>.md` — the progress file: full module list with a status column (not
  started/drafted/published), and a "Progress log" section future sessions append to (what was
  built, what decisions were made, anything the next session needs that shouldn't be
  re-derived).

Draft everything else (Phase 3) with the default model.

## Phase 3 — Build one module

Follow the lesson spine in `TEACHING.md` exactly, in order, for the module's lesson page.
Build two pages under `courses/<slug>/<module-slug>/`:
- `index.qmd` — the lesson (the 10-step spine, including the inline "check your
  understanding" questions — there is no separate practice page).
- `resources.qmd` — 2–4 verified external links.

Every regulatory claim needs a source. Check `sources/INDEX.md` first; if the citation isn't
there yet, use the `fetch-source` skill once to get it — never invent a citation or quote from
memory (CLAUDE.md rule 4).

Add the module to `_quarto.yml`'s render list if the sidebar doesn't already pick it up
automatically via the `courses/**` glob (it should — check `_quarto.yml` before adding anything
manually).

## After building each module

1. Audit the finished lesson against `TEACHING.md`'s spine — every step present, every citation
   sourced from `sources/`, length in range, phone-readable. Fix anything missing before moving
   on.
2. Update `plans/<slug>.md`: mark the module built, append a progress-log entry.
3. Update `plans/curriculum.md`'s progress tracker row for this course, and update **Next up**
   to point at the next module in the recommended sequence.
4. If this was the course's last module, mark it done in `plans/curriculum.md` and set **Next
   up** to the next course in the recommended sequence.
5. Invoke the `publish` skill — one commit, one push, per module, immediately. Never batch
   multiple modules into one publish; a session that stops mid-stream should still have
   everything up to that point live.
6. Loop back to "Figure out what to build" for the next module. Keep going until the curriculum
   is done or the session hits a real limit (usage, time, or an explicit stop from the user).

Only when stopping for good (curriculum complete, or the session is ending): report to the user
in plain English which modules are now live, with links, and what's next. Do not tell them to
start a fresh session — "Continue" in a new session picks up wherever this one left off either
way.

## Guardrails

- Public repo: no employer names, internal SOPs, vendor configs, or real audit findings.
  Scenarios use the fictional Lakeshore Blood Center (CLAUDE.md rule 2).
- Never invent a citation, clause number, or AABB standard number. If unsure, say so in the
  lesson and flag it in the plan file rather than guessing.
- AABB Standards text is copyrighted — cite standard numbers and titles, never reproduce their
  text verbatim (see `fetch-source`).
- The user is not technical — never ask them to run commands, edit files, or review a pull
  request. Report results in plain English only.
