# Video sourcing: the same discipline as a citation, applied to a play button

A video embed is a claim, exactly like a CFR citation: "this real, specific thing exists,
says what I'm about to tell you, and anyone can click through and check." Treat it with
the same rigor as `fetch-source` and `sources/INDEX.md` — never invent a title, a channel,
a URL, or a claim about what a video covers. An honest "no video for this lesson" is
always better than a fabricated one, and nobody will ever catch a missing video the way
they'd catch a wrong one.

## Step 1 — Find a real candidate

Search (WebSearch, or a `web-fetch`/general-purpose agent if you don't have WebSearch
directly) for a video that is:

- **Directly on this lesson's specific topic** — not "a HIPAA video" for a lesson about
  the breach-notification four-factor test specifically, but one that actually covers
  that test, or close enough that the lesson can say precisely what it covers and doesn't.
- **From a source worth embedding.** In priority order:
  1. An official regulator/standards-body channel — FDA, HHS/OCR, NIST, CDC, AABB,
     ICCBBA, ASQ, AXELOS/PeopleCert (ITIL topics).
  2. A recognized professional/educational channel with a track record on this exact
     subject (a law firm's compliance-explainer series, a university's open lecture, a
     well-known industry-training channel) — judge this honestly; "has lots of views"
     is not the same as "is authoritative."
  3. If neither exists for this specific topic, there is no acceptable third tier.
     Don't embed a random explainer just to have a video. Skip the step instead (see
     TEACHING.md step 7's own fallback).
- **Plausibly embeddable** — a normal, public YouTube upload, not something that reads
  as likely to be region-locked, age-restricted, or embedding-disabled (final proof is
  Step 2, not a guess, but don't even try a video that's obviously the wrong kind).

Never reconstruct a video from memory or "this is probably on YouTube somewhere" —
actually search and actually look at the result (title, channel, upload source) before
treating it as a candidate.

## Step 2 — Verify it, every time, no exceptions

Before a video is embedded anywhere, run this check and get a clean result:

```bash
curl -sS "https://www.youtube.com/oembed?url=<FULL_VIDEO_URL>&format=json"
```

- **HTTP 200 with a JSON body containing `title`, `author_name`, and `html`** → the video
  exists, is public, and allows embedding. Record the returned `title` and `author_name`
  verbatim — these go in `resources.qmd`, not a guessed or remembered title.
- **Anything else (404, 401, empty body)** → the video does not exist at that URL, is
  private, or has embedding disabled. Do not embed it. Try a different candidate or fall
  back to no video for this lesson.

Also sanity-check the returned `author_name` and `title` actually match what you searched
for — an oEmbed 200 only proves *a* video is embeddable at that URL, not that it's the one
you think it is.

## Step 3 — Extract the video ID and embed

From a URL like `https://www.youtube.com/watch?v=VIDEOID` or `https://youtu.be/VIDEOID`,
the ID is the `v=` parameter or the path segment after `youtu.be/`. Embed with:

```html
::: {.video-embed}
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/VIDEOID"
  title="EXACT TITLE FROM OEMBED" frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
:::
```

Use `youtube-nocookie.com` (not `youtube.com`) for the embed domain — it doesn't set
tracking cookies until the viewer actually plays the video, which matters on a public
educational site. The `.video-embed` div is styled by `styles.css` (16:9 responsive
frame, centered, max-width) — don't hand-roll inline sizing.

## Step 4 — Write the framing sentence, and the resources.qmd entry

In the lesson, 1–2 sentences immediately before or after the embed: what to watch for,
and — explicitly — how well it maps onto Lakeshore's specific scenario. A general FDA
inspection-overview video does not know about Lakeshore; say plainly where it lines up
and where the lesson's own scenario goes further or differs.

In `resources.qmd`, add a line of this shape:

```
- **[Exact title from oEmbed](https://www.youtube.com/watch?v=VIDEOID)** (Channel name,
  from oEmbed `author_name`) — one sentence on what it covers and why it's here.
  Verified embeddable via YouTube oEmbed on <today's date>.
```

## When you can't find or verify one

Say so, once, plainly, in `resources.qmd`: "No video embed for this module — searched for
X, Y; nothing both specific enough and independently verifiable as embeddable was found."
This is not a failure to flag apologetically — it's the same honest disclosure this
curriculum already uses for an unreachable ISO catalogue page or a blocked eCFR mirror.
Never embed a worse video just to avoid writing that sentence.

## Never do this

- Never write an iframe with a video ID you didn't get from a URL you found and verified
  this session.
- Never caption a video with a title or channel name you didn't read directly from its
  oEmbed response.
- Never claim a video "covers" something you haven't actually confirmed — read the title,
  the channel, and if there's any doubt, use the `web-fetch` agent to read the video's own
  description/transcript page before relying on it.
- Never embed a video behind a login, a paywall, or a platform other than YouTube — this
  site has no infrastructure for anything else, and an iframe to a source that doesn't
  reliably embed (most non-YouTube platforms, for a public static site) will just show a
  broken box to every reader.
