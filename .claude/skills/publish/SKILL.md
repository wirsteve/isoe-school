---
name: publish
description: Commit and push the current module's changes. Use after finishing a module (lesson, practice, resources pages) or any other content change in this repo, so the auto-merge/publish GitHub Actions pipeline can deploy the site.
---

# Publish

One commit, one push. GitHub Actions does the rest (merge to `main`, render with Quarto, deploy
to Pages) — this skill never merges or deploys directly.

## Steps

1. `git status` to see what changed. If nothing changed, stop and say so — don't create an
   empty commit.
2. If `quarto` is available on this machine, run `quarto render` from the repo root and fix any
   rendering errors before committing. If it isn't available (cloud sessions usually don't have
   it), skip this — the GitHub Action renders the site.
3. Stage only the files this session actually changed. Never `git add -A` blindly; check the
   diff for anything that looks like a secret, credential, or non-public material first (repo
   rule 2 in `CLAUDE.md` — public repo, no employer names, internal SOPs, vendor configs, or
   real audit findings).
4. Commit with a message naming what was built, e.g.
   `Add module: deviations & nonconformances (quality-system-essentials)`.
5. Push to the current branch: `git push -u origin <branch-name>`.
6. Report to the user in plain English: what was built, that it's been pushed, and the live
   site URL (`https://<github-username>.github.io/isoe-school/`) — note that the update will
   appear there once GitHub Actions finishes (usually a minute or two). Tell them to start a
   fresh session for the next module — don't offer to keep going in this one (throughput rule:
   one module per session).
