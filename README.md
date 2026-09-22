# ISOE School

A personal course factory for blood-center IT, regulation, and IS governance. It's
modeled on [Professor Claude](https://github.com/radlinsky/professor-claude) but
rebuilt for regulatory learning. Claude does all the building from
**claude.ai/code** (Claude Code in the browser). You just read the site.

**How it works:** each Claude session writes one module as plain files and pushes them.
`auto-merge.yml` merges the branch into main, and `publish.yml` builds the site with
Quarto and deploys it to GitHub Pages. It's free, works on your phone, and has no
per-page API calls, so there's nothing to rate-limit.

**Site:** `https://wirsteve.github.io/isoe-school/`

## What to type at claude.ai/code (with this repo selected)

- Start the whole curriculum, or keep going: `Continue`
- Start one specific course out of sequence: `Create a course: I want to be able to <finish line>`

## Layout

| Path | What it is |
|---|---|
| `foundations/` | Shared building blocks, taught once and linked from every course |
| `courses/<slug>/` | One folder per course: syllabus, modules, capstone |
| `sources/` | Local copies of public regulations and guidance, downloaded once |
| `plans/curriculum.md` | The master roadmap: all courses, prerequisite order, recommended sequence |
| `plans/<slug>.md` | One progress file per course, which carries state between sessions |
| `TEACHING.md` | How every lesson is taught |
| `.claude/course-authoring/learner-profile.md` | Who is being taught |
| `.claude/skills/` | `create-course`, `fetch-source`, `publish` |

## The one rule

This repo is **public**. Only public material goes in. Nothing internal from work.
