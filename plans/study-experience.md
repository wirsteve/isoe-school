# Study experience (narration, gamification, digestibility) — plan

Added 2026-11-14 at the user's request. Their words: "Now I want a narration but don't rebuild all
content. Make it so the narration can narrate whatever. Also just make the content easy to digest
and easy to study. Don't lose content but gamify it. Eventually add more."

## Design rules (binding)

- **No content rewrites.** Everything is a browser-side layer (`assets/study.js`,
  `assets/study.css`, loaded by `assets/loader.html` via `_quarto.yml` `include-after-body`).
  Lessons stay exactly as written.
- **Narration reads any page.** It uses the browser's built-in speech (Web Speech API), so there
  are no audio files, no podcast and no per-page build step. Voice quality depends on the device:
  Safari and iOS, Edge's "Natural" voices and Chrome's Google voices sound best.
- **Progress is per browser** (localStorage, key `isoe-study-v1`), with export and import on the
  hub. There is no server and no account. Nothing is sent anywhere.
- **New lessons join automatically** if they follow the conventions in TEACHING.md, section "The
  study layer".

## Shipped (2026-11-14, loader v1)

- **Narration (every page).**
  - A 🎧 Listen button opens the player: play/pause, ±paragraph, ±section, speed 0.8–2×, voice
    picker (best English voice chosen by default), and "Read answers".
  - It highlights and scrolls to the block being read, and you can tap any paragraph to start from
    there.
  - It remembers where you stopped on each page.
  - Questions are read with "Answer hidden. Pause and think…".
  - Diagrams and videos are announced, not read.
  - Text is chunked to dodge Chrome's long-utterance cutoff.
- **Lesson pages.**
  - A strip at the top: read time, listen time, question count (starts a quiz), Outline view
    toggle, and Mark complete.
  - A thin reading-progress bar.
  - ✓ Got it / ↻ Not yet buttons inside each revealed answer, with each answered question marked
    by a green ✓ or orange ↻.
  - A "Finish line" box at the end: Mark complete, quiz this lesson, and Next lesson →.
- **Outline view.** Folds each section so it can be opened one at a time. Table-of-contents jumps
  open the target section.
- **Course pages.** A progress bar, a lesson checklist, Continue → and a 5-question quick quiz.
- **Home page.** A "Your study hub" card with Continue →.
- **Study hub** (`study.qmd`):
  - level, XP bar, streak, lessons done, questions mastered and badges
  - a daily XP goal
  - a spaced-repetition review deck (Leitner boxes 1–5; intervals 0/1/2/4/9/21 days)
  - a 10-question mixed quiz
  - per-course progress with quick quizzes
  - a badge wall
  - settings: daily goal, export/import, reset
- **XP.**
  - +50 for a lesson completed (once per lesson).
  - +20 for listening to a whole lesson (at least 60% of it heard).
  - +10 for a question right the first time; +5 when it's right again on a later day.
  - +2 for an honest miss.
  - Any XP keeps the streak alive.
  - 12 levels, from Intern to CIO to Hall of Fame.
- **Badges.** First lesson, 10 lessons, the whole curriculum, listening ×1/×10, 25/100 questions
  right, 50 mastered, streaks of 3/7/30 days, 1,000 XP, and one per course.
- **Phones.** Wide tables scroll inside their own box, so pages no longer zoom out.

## Roadmap ("eventually add more") — not built yet; build in roughly this order

1. **Key-term flashcards.** Build cards from each lesson's citation-decoder table (citation →
   plain-English meaning). The tables already exist, so no new content is needed.
2. **Course "boss quiz".** A timed 10-question run per course that awards a gold badge at 90% or
   better.
3. **Scenario choices.** Optional "what would you do?" branches at each lesson's opening scene.
   This one does need new content, so draft it per course with the plan files.
4. **Weekly recap.** A hub panel listing what you learned this week (lessons done, questions
   mastered) as a shareable checklist.
5. **Narration polish.**
   - a sleep timer
   - "listen to the whole course" (auto-advance to the next lesson)
   - a pronunciation dictionary for acronyms (BECS, CLIA, HCT/P)
6. **Cross-device sync.** Only if the user asks. It would need a hosted backend, which the static
   site doesn't have; export/import covers it for now.

## Testing recipe

Load a live page in Playwright and inject `study.css` and `study.js`. Set `window.ISOE_ROOT` from
the `site_libs/quarto-nav` script path, and mock `speechSynthesis` to record what it would say.
Cover:

- one page in each question format
- a course page and the home page
- the hub, by serving `study.html` as another page with `<div id="isoe-hub">` injected
- an iPhone viewport
