# Audio briefings — how every module gets narrated

The learner has little time to read. Every module gets a **narrated audio briefing** of about
5–7 minutes, embedded at the top of the lesson and published in the site's podcast feed
(`podcast.xml`, subscribable in Apple Podcasts / Overcast / Pocket Casts). The briefing is the
"listen in the car" version of the lesson; the page stays the reference.

## The script (what a drafting agent writes)

Save to `audio/scripts/<course-slug>/<module-slug>.txt` (foundations use `foundations` as the
course slug). Plain text only, written **for the ear**:

- **Length: 750–1,000 words** (about 5–7 minutes at the narrator's pace). Never over 1,100.
- **Structure:**
  1. Open: "This is the ISOE School audio briefing for <module title>, from the <course name>
     course." Then one sentence on why it matters to a director.
  2. The story: the module's Lakeshore Blood Center scenario in a few sentences.
  3. The three or four ideas that matter, each in plain spoken English.
  4. The rule, in plain words: name at most two or three key citations, spoken out (see the
     pronunciation guide), and say what they require — no clause-number soup.
  5. What to ask or do on Monday: two or three concrete questions or actions.
  6. The trap to avoid.
  7. Close: "That's the briefing. The lesson page has the diagram, the video, and the links if
     you want to go deeper."
- **No new facts.** Everything comes from the module's own `index.qmd`. Same accuracy rules as
  the lesson: never add a citation, number, or claim the lesson doesn't make. AABB Standards text
  is never quoted.
- **Spoken style:** short sentences; second person ("you"); signpost ("Here's the first thing.",
  "Second.", "Now the catch."); no lists with bullets, no tables, no URLs, no parentheses, no
  markdown, no symbols (§, &, /, %, →). Spell numbers the way they should be said.
- **One paragraph per breath group** (2–5 sentences); blank line between paragraphs — the
  narrator pauses there.

## Pronunciation guide (write these spellings into the script)

| Write | Not |
|---|---|
| "becks" | BECS |
| "double-A B B" | AABB |
| "C F R" | CFR |
| "twenty-one C F R six-oh-six point one-sixty" | 21 CFR 606.160 |
| "paragraph b, one" | (b)(1) |
| "F D A", "C-ber" (for CBER), "C M S", "N I H", "H R S A", "N I S T" (or "nist") | FDA, CBER, CMS, NIH, HRSA, NIST |
| "I S B T one-twenty-eight" | ISBT 128 |
| "kay-pah" | CAPA |
| "S O P", "Q A", "Q C", "I T" | SOP, QA, QC, IT |
| "hippa" | HIPAA |
| "I Q, O Q, and P Q" | IQ/OQ/PQ |
| "gamp five" | GAMP 5 |
| "al-co-ah plus" | ALCOA+ |
| "R M F", "C S F" | RMF, CSF |
| "poe-am" | POA&M |
| "eye-till four" | ITIL 4 |
| "C M D B" | CMDB |
| "sock two" | SOC 2 |
| "I S O twenty-seven-oh-oh-one" | ISO 27001 |
| "B A A" | BAA |
| "clee-ah" | CLIA |
| "the College of American Pathologists" (first), then "cap" | CAP |
| "reds" | REDS |
| "S D L C" | SDLC |
| "four-eighty-three" | 483 |
| "B P D R" | BPDR |
| "C I C D" | CI/CD |
| "paragraph ay", "bee", "see", "dee", "ee", "eff", "gee", "aitch", "eye", "kay" | paragraph (a), (b), (c), (d), (e), (f), (g), (h), (i), (k) — a lone letter is misread by the voice |
| "V A L twelve-oh-three" | VAL-1203 (spell ticket prefixes, say numbers naturally) |
| "two-thousand-three" | 2003 |

## Synthesis (what the main session runs)

`tools/narrate.py` turns each script into `audio/<course-slug>/<module-slug>.mp3` with the
Kokoro-82M open-weights TTS model (voice `af_heart`, 48 kbps mono MP3, ID3 title set), and
`tools/build_podcast_feed.py` rebuilds `podcast.xml` and `listen.qmd` from every MP3 in curriculum
order. Model files are not in the repo; `tools/narrate.py --setup` downloads them. Then the
module's `index.qmd` gets the listen block right after its front matter:

```
::: {.callout-note appearance="simple" icon=false}
## Listen: audio briefing (N min)
<audio controls preload="none" style="width:100%" src="../../../audio/<course>/<module>.mp3"></audio>
:::
```

(Foundations pages are one level shallower: `../../audio/foundations/<module>.mp3`.)
