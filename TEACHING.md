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

## Resources pages

Each module also gets a richer `resources.qmd`: **4–8** external links, each verified to
load (`curl` the URL, don't assume). Prefer primary sources (eCFR, FDA, AABB public pages,
ICCBBA, NIST) but also include, where genuinely useful: the video(s) embedded in the
lesson (with their verification method noted — see
`.claude/course-authoring/video-sourcing.md`), a second video or reading that goes deeper
than the lesson needed to for anyone who wants more, and links back to any prior module
this lesson built on. Say what each link is for and when to use it — a resources page is
a curated reading/watching list, not a bibliography dump. If a genuinely good video
couldn't be found or verified for this module, say that plainly here too, the same way
this curriculum already discloses an unreachable ISO catalogue page or a blocked eCFR
mirror.

## Style

- Write for reading on a phone. Keep paragraphs short. Put tables only where the spine
  requires them, and diagrams only where step 6 calls for one. Target length: roughly
  **3,500–6,000 words** for the whole lesson page's prose — enough to actually teach in
  depth, with real worked examples and more than one angle on the harder points, not so
  much it becomes a slog. (This is prose only; diagrams, tables, and embedded video are
  on top of this target, not counted against it.)
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
