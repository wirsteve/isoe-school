# TEACHING.md: the teaching contract

How every lesson is taught. Who is being taught lives in
`.claude/course-authoring/learner-profile.md`: an experienced Director who already does
this job. The goal is **understanding, not homework**. A lesson should read like a sharp
mentor explaining how things really work over coffee — never like a textbook chapter or
a corporate training module. No filler, no hand-holding, no "let's learn about." Two
principles still decide every judgment call: **retrieval beats re-reading** (the learner
should have to produce a short answer, not just recognize one) and **anchor every rule to
something concrete** (a scenario, a failure, or an ITSM concept the learner already owns).

There is no separate practice page. Everything — the teaching and the two or three
questions that check it landed — lives on one lesson page, built to be read start to
finish on a phone in one sitting.

## The lesson spine (in this order)

**0. The short version (every lesson from 2026-11-13 on).** Right after the front matter, a
`::: {.callout-tip appearance="simple"}` titled `## The short version` with 4–6 bullets: the finish
line, the scenario's punchline, the rule in one line, the one thing to ask on Monday, the trap. The
learner has little time to read; this box is the skim layer. The lesson below it stays in depth.

1. **The scenario first.** Open with a short, concrete situation at the fictional
   Lakeshore Blood Center — a change ticket, a deviation, an inspector's question, a
   mislabeled unit. No citations yet. Write this scene with real texture — specific
   dialogue, a specific role reacting, a specific stake — not a one-line setup.
2. **Why the rule exists.** Name the patient-safety or product-quality failure the rule
   prevents, in plain words. Then bridge it to an ITSM/ITIL concept the learner already
   knows ("this is change enablement with a regulator watching"). This needs a real
   failure mode and a real bridge, not a restatement of the rule.
3. **The rule in plain English.** Say what the requirement demands, referring back to
   the scenario, before showing any regulatory text.
4. **Citation decoder table.** Every citation used in the lesson gets a row:
   `Citation | How to read it aloud | What it requires | In our scenario`.
   The first lesson a learner takes also explains the anatomy of a citation
   (title, part, section, paragraph levels).
5. **The actual text.** Give a verbatim quote from `sources/`, with each clause
   mapped back to the scenario. Use "shall" versus "should" deliberately: regulation
   versus guidance. Favor the fuller quote over the shortest one that technically covers
   the point — this is where the learner reads the regulator's own words, so give them
   enough to actually parse the sentence structure, not just a fragment.
   **Before writing a second or third worked example yourself to add depth, check
   whether a trustworthy external source already covers that exact angle well** (an
   official FAQ, a professional body's explainer, a well-regarded industry walkthrough).
   If one exists and is verified to load, link it — in the lesson body where it's
   relevant, not just buried in resources.qmd — instead of writing a new example from
   scratch. The goal is a well-curated lesson that points to the best existing
   explanation of a sub-point, not a lesson that re-derives everything itself. Write new
   original material only for what's actually specific to Lakeshore's scenario or to
   this curriculum's own continuity — the parts nothing else on the internet could cover
   because they're about this fictional blood center, not generic regulatory concepts.
6. **See it in one picture.** A diagram — built with Quarto's native Mermaid support
   (` ```{mermaid} `) — showing the specific workflow, decision, or relationship this
   lesson's rule governs, using this lesson's own scenario (not a generic textbook
   version of the process). A flowchart for a decision path, a sequence diagram for a
   multi-party handoff, a state diagram for a record's lifecycle — pick whichever shape
   actually matches what's being taught. Every diagram must be code (Mermaid), never a
   fabricated claim about what a chart "shows" — if there's nothing worth diagramming
   this lesson (some lessons are pure interpretation, not process), skip this step rather
   than forcing one in.
7. **Watch it explained.** One embedded video, directly relevant to this lesson's exact
   topic, from a real, verifiable, reputable source — an FDA/HHS/NIST/AABB/ICCBBA channel
   where one exists, otherwise a clearly authoritative or professionally produced
   explainer. Embed with a privacy-respecting `youtube-nocookie.com` iframe (see
   `.claude/course-authoring/video-sourcing.md` for the exact markup and the verification
   procedure — every embed must pass a live oEmbed check before it's used, no exceptions).
   Frame it in 1–2 sentences: what to watch for, and how it does or doesn't map onto
   Lakeshore's specific situation (a general compliance-training video almost never
   matches the scenario exactly — say so rather than pretending it does).
   **If no real, verifiably embeddable, genuinely relevant video exists for this specific
   topic, don't embed one.** Say so honestly in this module's `resources.qmd` (the same
   honesty this curriculum already shows when a citation or a standard's catalogue page
   can't be verified) and rely on the diagram and text instead. A missing video is a far
   smaller problem than an invented, mistitled, or wrongly-attributed one.
8. **What an inspector would actually look for.** Name the document or record that
   proves compliance, who owns it, and what a bad answer sounds like when an inspector
   asks for it.
9. **Common traps.** Name 2–3 real misconceptions, such as "Part 11 only applies to
   signatures" or "validation is a one-time event," and refute each with the text.
10. **What this means for your job.** 4–6 practical takeaways a director would actually
   use: a question to ask the Quality Analyst, a red flag to watch for in their work, a
   trigger for when this must escalate. This is the payoff section — write it like advice
   from someone who has sat across from an inspector, not a summary of the lesson.
11. **Check your understanding.** 3–4 questions, answered in a minute, not worked like
   homework. Answers go in collapsed callouts (`::: {.callout-tip collapse="true"}`).
   Include at least one question, across the course of a course, where the honest answer
   is "this is NOT a regulatory requirement" or "this is guidance, not regulation" — not
   necessarily every lesson, but don't let every question resolve to "yes, cite the rule."
12. **Where this goes next.** One or two sentences linking forward to the next lesson.

## Resources pages — the priority is curating, not authoring

Each module also gets a richer `resources.qmd`: **6–10** external links, each verified to
load (`curl` the URL, don't assume). This page is where the lesson leans on the wider
internet instead of re-explaining everything itself — treat finding good links as at
least as much of the job as writing lesson prose, not an afterthought at the end.
Actively search for, not just passively accept: the official primary source (eCFR, FDA,
AABB public pages, ICCBBA, NIST), a well-regarded explainer or walkthrough from a
professional body or recognized publication that covers a sub-topic better or in more
depth than this lesson needs to, a practical tool or calculator if one genuinely exists
for the topic, the video(s) embedded in the lesson (with verification method noted — see
`.claude/course-authoring/video-sourcing.md`), and links back to any prior module this
lesson built on. Say what each link is for and when to use it — a resources page is a
curated reading/watching list a learner would actually work through, not a bibliography
dump and not padding. If a genuinely good video or link couldn't be found or verified for
this module, say that plainly, the same way this curriculum already discloses an
unreachable ISO catalogue page or a blocked eCFR mirror — an honest gap beats a forced or
mediocre link every time.

**Keep learning (added 2026-11-11 at the user's request).** Below the 6–10 curated links, every
`resources.qmd` ends with a `## Keep learning` section of **3–5 extra learning links that don't
have to be official** — just genuinely good for learning: well-regarded educators, professional-
body explainers (ISC2, ISACA, ASQ, AHIMA, HIMSS, ISPE), certification study material (CISSP,
HCISPP, CISA, CRISC, CQA, ITIL), podcasts, free courses, and practitioner blogs with real depth.
Each still gets a one-line "why it's worth your time" and a verification note (curl 200, or
oEmbed for a video), and the same honesty rules apply: label vendor or commercial content as
such, never quote it as authority for a regulatory claim. These links don't count toward the
6–10. The site-wide [Study resources](study-resources.qmd) page collects the certifications
that map to this curriculum.

## Style

- Write for reading on a phone. Keep paragraphs short. Put tables only where the spine
  requires them, and diagrams only where step 6 calls for one. Target length: roughly
  **2,500–4,500 words** for the whole lesson page's prose — enough to actually teach the
  scenario and this curriculum's own continuity in depth, without re-deriving material a
  good external link already covers. Don't pad toward the top of this range by writing
  another self-invented worked example when a well-sourced link would serve the learner
  better and cost nothing to maintain. (This is prose only; diagrams, tables, and
  embedded video/links are on top of this target, not counted against it.)
- Prefer linking a trustworthy existing source over writing new explanatory prose,
  anywhere a sub-point isn't specific to Lakeshore's own scenario. The curriculum's job
  is to teach the scenario, make the regulatory reasoning concrete, and curate the best
  already-existing explanations of the general concepts underneath — not to be the sole
  source of everything a learner reads.
- Define every acronym on first use in every lesson (BECS, QSE, CAPA, GAMP…).
- Be direct. No filler, no pep talk, no "in this lesson we will."
- Always keep regulation, guidance, standard (AABB), and industry practice (GAMP 5)
  distinct. Label which one a statement comes from.
- Quote regulatory text only from local copies in `sources/`, verbatim, with the exact
  citation. Never quote from memory and never invent a citation or clause number.
- The same discipline applies to video and diagrams as to citations: never invent a
  video's existence, title, channel, or embeddability, and never caption a diagram as
  showing something it doesn't actually show. An honest "no video for this one" or a
  skipped diagram step beats a fabricated one, every time.

## The study layer: what every lesson must keep doing

Every page loads `assets/study.js` and `assets/study.css` through `assets/loader.html`, which is
included from `_quarto.yml`. That script adds narration (🎧 Listen), quizzes, progress, XP, badges
and the study hub (`study.qmd`) on top of the rendered pages. **It never edits lesson content, and
new lessons join it automatically** as long as they keep these conventions:

- **Folders.** A lesson is `courses/<course>/<module>/index.qmd` or `foundations/<slug>/index.qmd`.
  A course page is `courses/<course>/index.qmd`. The script reads the sidebar for titles and order,
  so `order:` still decides the sequence.
- **Questions.** Use one of the two formats already in use, with the answer always in a collapsed
  tip callout:
  - a callout titled with the question, i.e. `::: {.callout-tip collapse="true"}` followed by
    `## Q1: question text`, with the answer inside; or
  - a paragraph starting `**Q1.** question text`, followed by a callout whose heading is
    `## Answer`.

  Keep the question wording stable once published: a card's review history is keyed to its text.
- **Readable structure.** Use real headings, paragraphs and lists, not text inside images. The
  narrator reads headings, paragraphs, list items, quotes and table rows. It announces diagrams and
  videos instead of reading them, and it keeps hidden answers hidden unless the learner turns on
  "Read answers".
- **The short version** callout stays first. It is the skim layer, and also what Outline view leaves
  open.

Changing `study.js` or `study.css`: bump `v` in `assets/loader.html` so browsers fetch the new
version. Test against live pages with Playwright before pushing; no Quarto install is needed. Ideas
and their status are tracked in `plans/study-experience.md`.
