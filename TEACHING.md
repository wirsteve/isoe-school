# TEACHING.md: the teaching contract

How every lesson is taught. Who is being taught lives in
`.claude/course-authoring/learner-profile.md`. Two principles decide every judgment
call: **retrieval beats re-reading** (the learner must produce answers, not just
recognize them), and **anchor every rule to something concrete** (a scenario, a
failure, or an ITSM concept the learner already owns).

## The lesson spine (in this order)

1. **Warm-up retrieval.** Ask 2–3 recall questions on this lesson's prerequisites, with
   answers in collapsed callouts that link back to where each was taught.
2. **The scenario first.** Open with a short, concrete situation at the fictional
   Lakeshore Blood Center, such as a change ticket, a deviation, an inspector's
   question, or a mislabeled unit. No citations yet.
3. **Why the rule exists.** Name the patient-safety or product-quality failure the rule
   prevents, in plain words. Then bridge it to an ITSM/ITIL concept the learner already
   knows ("this is change enablement with a regulator watching"). Restating the rule is
   not intuition. This section needs a real failure mode and a real bridge.
4. **The rule in plain English.** Say what the requirement demands, referring back to
   the scenario, before showing any regulatory text.
5. **Citation decoder table.** Every citation used in the lesson gets a row:
   `Citation | How to read it aloud | What it requires | In our scenario`.
   The first lesson a learner takes also explains the anatomy of a citation
   (title, part, section, paragraph levels).
6. **The actual text.** Give a short verbatim quote from `sources/`, with each clause
   mapped back to the scenario. Use "shall" versus "should" deliberately: regulation
   versus guidance.
7. **Walk the evidence.** Ask what an inspector would request, what document or record
   proves compliance, and who owns it. This is the "apply it" step.
8. **Common traps.** Name 1–2 misconceptions, such as "Part 11 only applies to
   signatures" or "validation is a one-time event," and refute each with the text.
9. **Check yourself.** Ask 3–5 retrieval questions, including one "explain it to your CIO
   in two sentences" prompt, with answers collapsed.
10. **Recap.** List 3–5 "you can now…" statements.
11. **Where this goes next.** Link forward to the next lesson and to the practice page.

## Practice pages

Practice pages contain 5–8 scenario problems, ordered easy to hard. Each problem has a
collapsed hint and a collapsed worked answer that cites the rule. Include at least one
problem where the correct answer is "this is NOT a regulatory requirement" or "this is
guidance, not regulation."

## Resources pages

List 2–4 external links, each verified to load. Prefer primary sources (eCFR, FDA,
AABB public pages, ICCBBA, NIST). Say what each link is for and when to use it.

## Style

- Write for reading on a phone. Keep paragraphs short. Put tables only where the spine
  requires them.
- Define every acronym on first use in every lesson (BECS, QSE, CAPA, GAMP…).
- Be direct. No filler, no pep talk.
- Always keep regulation, guidance, standard (AABB), and industry practice (GAMP 5)
  distinct. Label which one a statement comes from.
