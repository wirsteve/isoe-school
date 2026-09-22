---
name: create-course
description: Build one module of a course (or scope a new course) in the ISOE School curriculum. Use when the user says "Create a course: I want to be able to <finish line>", "Continue", "Continue the course", or names a specific course/module to build. Reads plans/curriculum.md to decide what's next when nothing specific is named.
---

# Create course

Builds the ISOE School curriculum one module at a time. Read `CLAUDE.md`, `TEACHING.md`,
`.claude/course-authoring/learner-profile.md`, and `plans/curriculum.md` before doing anything
else — in that order, every session, no exceptions (CLAUDE.md rule 1).

## Figure out what to build

1. **User named an explicit new course** ("Create a course: I want to be able to X") that isn't
   in `plans/curriculum.md` → this is an ad hoc addition. Scope it (Phase 1/2 below), add a row
   for it to `plans/curriculum.md`'s progress tracker, then build its first module.
2. **User said "Continue", "Continue the course", or gave no specifics** → open
   `plans/curriculum.md`, read the progress tracker, and take the course/module named under
   **Next up**. If that course has no `plans/<slug>.md` yet, scope it first (Phase 1/2), then
   build its first module. If it has a plan file, build the next unbuilt module listed there.
3. **User named a specific course or module** → build that one, regardless of sequence.

Never build more than one module per session (CLAUDE.md throughput rule). "Scope a course" (Phase
1/2) and "build its first module" (Phase 3) together in one session is fine and expected — that's
still one module's worth of new content, just with its syllabus alongside it.

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
Build three pages under `courses/<slug>/<module-slug>/`:
- `index.qmd` — the lesson (the 11-step spine).
- `practice.qmd` — 5–8 scenario problems, easy to hard, per `TEACHING.md`.
- `resources.qmd` — 2–4 verified external links.

Every regulatory claim needs a source. Check `sources/INDEX.md` first; if the citation isn't
there yet, use the `fetch-source` skill once to get it — never invent a citation or quote from
memory (CLAUDE.md rule 4).

Add the module to `_quarto.yml`'s render list if the sidebar doesn't already pick it up
automatically via the `courses/**` glob (it should — check `_quarto.yml` before adding anything
manually).

## After building

1. Update `plans/<slug>.md`: mark the module built, append a progress-log entry.
2. Update `plans/curriculum.md`'s progress tracker row for this course, and update **Next up**
   to point at the next module in the recommended sequence.
3. If this was the course's last module, mark it done in `plans/curriculum.md` and set **Next
   up** to the next course in the recommended sequence (scope it next session).
4. Invoke the `publish` skill.
5. Report to the user in plain English: what was built, and the live site URL. Tell them to
   start a fresh session (or just type "Continue" again in a new one) for the next module — do
   not keep building in this session.

## Guardrails

- Public repo: no employer names, internal SOPs, vendor configs, or real audit findings.
  Scenarios use the fictional Lakeshore Blood Center (CLAUDE.md rule 2).
- Never invent a citation, clause number, or AABB standard number. If unsure, say so in the
  lesson and flag it in the plan file rather than guessing.
- AABB Standards text is copyrighted — cite standard numbers and titles, never reproduce their
  text verbatim (see `fetch-source`).
- The user is not technical — never ask them to run commands, edit files, or review a pull
  request. Report results in plain English only.
