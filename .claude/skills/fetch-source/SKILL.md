---
name: fetch-source
description: Download a public regulatory or standards source (CFR text, FDA guidance, AABB public material) into sources/ for local, offline citation. Use when a lesson needs to quote or cite a source not already present in sources/INDEX.md.
---

# Fetch source

Lessons quote regulatory text only from local copies in `sources/` (CLAUDE.md rule 4) — never
re-fetch from the web at lesson-writing time, and never invent a citation. This skill is how a
missing source gets added, once, before the lesson that needs it is written.

## Steps

1. Check `sources/INDEX.md` first. If the source is already listed, stop — use the local copy,
   don't re-fetch.
2. Identify the primary, public source: eCFR (ecfr.gov) for CFR text, fda.gov for guidance
   documents, AABB's public pages for standard *numbers and titles* (AABB Standards text itself
   is copyrighted and sold — never fetch, quote, or reproduce the standard's actual text; cite
   the standard number and title only, and say "per AABB Standards for Blood Banks and
   Transfusion Services" without quoting).
3. Fetch the smallest reasonable unit (one CFR section, one guidance document), not an entire
   part or an entire site.
4. Save it under `sources/` in a path that groups by source type, e.g. `sources/cfr/606.160.md`
   or `sources/fda-guidance/becs-2020.md`. Save as plain text/Markdown — strip navigation chrome,
   keep the substantive text verbatim.
5. Append one line to `sources/INDEX.md`: path · what it is · source URL · retrieved date
   (today).
6. Do not summarize or edit the regulatory text when saving it — verbatim only. Summarizing and
   explaining happens in the lesson, not in the source copy.
