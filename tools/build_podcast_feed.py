#!/usr/bin/env python3
"""Rebuild podcast.xml and listen.qmd from audio/**.mp3, and add/refresh the listen block at the
top of each narrated module's index.qmd. Idempotent. See .claude/course-authoring/audio-briefings.md.
"""
import datetime as dt, html, json, pathlib, re, subprocess

ROOT = pathlib.Path(__file__).resolve().parent.parent
SITE = "https://wirsteve.github.io/isoe-school/"
START = "<!-- listen-block:start -->"
END = "<!-- listen-block:end -->"


def front(path):
    t = path.read_text()
    m = re.match(r"---\n(.*?)\n---\n", t, re.S)
    fm = m.group(1) if m else ""
    title = re.search(r'^title:\s*"?(.*?)"?\s*$', fm, re.M)
    order = re.search(r"^order:\s*(\d+)", fm, re.M)
    return (title.group(1) if title else path.parent.name), (int(order.group(1)) if order else 999)


def duration(mp3):
    out = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "json", str(mp3)],
                         capture_output=True, text=True, check=True).stdout
    return float(json.loads(out)["format"]["duration"])


def episodes():
    eps = []
    for mp3 in (ROOT / "audio").glob("*/*.mp3"):
        course, module = mp3.parent.name, mp3.stem
        base = ROOT / "foundations" if course == "foundations" else ROOT / "courses" / course
        idx = base / module / "index.qmd"
        if not idx.exists():
            continue
        title, order = front(idx)
        ctitle, _ = front(base / "index.qmd")
        group = 0 if course == "foundations" else 1
        eps.append(dict(course=course, module=module, title=title, order=(group, order), ctitle=ctitle,
                        mp3=mp3, idx=idx, secs=duration(mp3), size=mp3.stat().st_size,
                        page=f"{SITE}{idx.relative_to(ROOT).with_suffix('.html').as_posix()}",
                        url=f"{SITE}{mp3.relative_to(ROOT).as_posix()}"))
    return sorted(eps, key=lambda e: e["order"])


def listen_block(e):
    depth = len(e["idx"].relative_to(ROOT).parts) - 1
    rel = "../" * depth + e["mp3"].relative_to(ROOT).as_posix()
    mins = max(1, round(e["secs"] / 60))
    return (f"{START}\n::: {{.callout-note appearance=\"simple\" icon=false}}\n"
            f"## Listen: audio briefing ({mins} min)\n\n"
            f"<audio controls preload=\"none\" style=\"width:100%\" src=\"{rel}\"></audio>\n\n"
            f"Short on time? This narrated briefing covers the lesson's key points. Subscribe to every "
            f"briefing in your podcast app from the [Listen](" + "../" * depth + "listen.qmd) page.\n:::\n"
            f"{END}\n")


def embed(e):
    t = e["idx"].read_text()
    block = listen_block(e)
    if START in t:
        t = re.sub(re.escape(START) + r".*?" + re.escape(END) + r"\n", block.replace("\\", "\\\\"), t, flags=re.S)
    else:
        m = re.match(r"---\n.*?\n---\n", t, re.S)
        t = t[:m.end()] + "\n" + block + t[m.end():]
    e["idx"].write_text(t)


def feed(eps):
    now = dt.datetime(2026, 11, 13, 12, 0, tzinfo=dt.timezone.utc)
    items = []
    for n, e in enumerate(eps, 1):
        pub = (now - dt.timedelta(minutes=len(eps) - n)).strftime("%a, %d %b %Y %H:%M:%S +0000")
        s = int(e["secs"])
        items.append(f"""    <item>
      <title>{html.escape(f"{n:02d}. {e['title']}")}</title>
      <description>{html.escape(f"{e['ctitle']}: audio briefing. Full lesson: {e['page']}")}</description>
      <link>{e['page']}</link>
      <guid isPermaLink="false">isoe-{e['course']}-{e['module']}</guid>
      <pubDate>{pub}</pubDate>
      <enclosure url="{e['url']}" length="{e['size']}" type="audio/mpeg"/>
      <itunes:duration>{s//60}:{s%60:02d}</itunes:duration>
      <itunes:episode>{n}</itunes:episode>
      <itunes:episodeType>full</itunes:episodeType>
      <itunes:explicit>false</itunes:explicit>
    </item>""")
    xml = f"""<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>ISOE School: Audio Briefings</title>
    <link>{SITE}</link>
    <atom:link href="{SITE}podcast.xml" rel="self" type="application/rss+xml"/>
    <language>en-us</language>
    <description>Narrated briefings for every ISOE School lesson: blood-center operations, FDA and AABB compliance, validation, data integrity, security, risk and IT service management, for an IT operations leader at a blood center. Scenarios use the fictional Lakeshore Blood Center.</description>
    <itunes:author>ISOE School</itunes:author>
    <itunes:image href="{SITE}podcast-cover.png"/>
    <itunes:category text="Education"/>
    <itunes:explicit>false</itunes:explicit>
    <itunes:type>serial</itunes:type>
{chr(10).join(items)}
  </channel>
</rss>
"""
    (ROOT / "podcast.xml").write_text(xml)


def listen_page(eps):
    total = sum(e["secs"] for e in eps) / 60
    out = ["---", 'title: "Listen"', 'subtitle: "Every lesson as a narrated audio briefing"', "order: 3", "toc: true", "---", "",
           f"{len(eps)} briefings, about {round(total)} minutes in all. Each one is the five-to-seven-minute "
           "spoken version of a lesson: the scenario, the ideas that matter, the rule in plain words, and "
           "what to do on Monday. The lesson pages stay the reference.", "",
           "## Put them in your podcast app", "",
           f"Copy this feed address: **`{SITE}podcast.xml`**", "",
           "- **Apple Podcasts (iPhone):** open the Library tab, tap the three-dot menu at the top, choose "
           "*Follow a Show by URL*, and paste the address.",
           "- **Overcast:** tap **+**, then *Add URL*, and paste the address.",
           "- **Pocket Casts:** tap Search and paste the address.", "",
           "Episodes are numbered in curriculum order. New briefings show up automatically as lessons are added.", ""]
    cur = None
    for n, e in enumerate(eps, 1):
        if e["ctitle"] != cur:
            cur = e["ctitle"]; out += [f"## {cur}", ""]
        rel = e["mp3"].relative_to(ROOT).as_posix()
        page = e["idx"].relative_to(ROOT).as_posix()
        out += [f"**{n:02d}. [{e['title']}]({page})** ({max(1, round(e['secs']/60))} min)", "",
                f'<audio controls preload="none" style="width:100%" src="{rel}"></audio>', ""]
    (ROOT / "listen.qmd").write_text("\n".join(out))


if __name__ == "__main__":
    eps = episodes()
    for e in eps:
        embed(e)
    feed(eps)
    listen_page(eps)
    print(f"{len(eps)} episodes, {sum(e['secs'] for e in eps)/60:.0f} min")
