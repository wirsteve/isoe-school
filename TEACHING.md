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
   mislabeled unit. No citations yet.
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
5. **The actual text.** Give a short verbatim quote from `sources/`, with each clause
   mapped back to the scenario. Use "shall" versus "should" deliberately: regulation
   versus guidance.
6. **What an inspector would actually look for.** Name the document or record that
   proves compliance, who owns it, and what a bad answer sounds like when an inspector
   asks for it.
7. **Common traps.** Name 1–2 real misconceptions, such as "Part 11 only applies to
   signatures" or "validation is a one-time event," and refute each with the text.
8. **What this means for your job.** 3–5 practical takeaways a director would actually
   use: a question to ask the Quality Analyst, a red flag to watch for in their work, a
   trigger for when this must escalate. This is the payoff section — write it like advice
   from someone who has sat across from an inspector, not a summary of the lesson.
9. **Check your understanding.** 2–3 questions, answered in a minute, not worked like
   homework. Answers go in collapsed callouts (`::: {.callout-tip collapse="true"}`).
   Include at least one question, across the course of a course, where the honest answer
   is "this is NOT a regulatory requirement" or "this is guidance, not regulation" — not
   necessarily every lesson, but don't let every question resolve to "yes, cite the rule."
10. **Where this goes next.** One or two sentences linking forward to the next lesson.

## Resources pages

Each module also gets a short `resources.qmd`: 2–4 external links, each verified to
load. Prefer primary sources (eCFR, FDA, AABB public pages, ICCBBA, NIST). Say what each
link is for and when to use it.

## Style

- Write for reading on a phone. Keep paragraphs short. Put tables only where the spine
  requires them. Target length: roughly 2,000–4,000 words for the whole lesson page —
  enough to actually teach, not so much it becomes a slog.
- Define every acronym on first use in every lesson (BECS, QSE, CAPA, GAMP…).
- Be direct. No filler, no pep talk, no "in this lesson we will."
- Always keep regulation, guidance, standard (AABB), and industry practice (GAMP 5)
  distinct. Label which one a statement comes from.
- Quote regulatory text only from local copies in `sources/`, verbatim, with the exact
  citation. Never quote from memory and never invent a citation or clause number.
