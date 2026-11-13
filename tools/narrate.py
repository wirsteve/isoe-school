#!/usr/bin/env python3
"""Turn audio-briefing scripts into MP3s with the Kokoro-82M open-weights TTS model.

Usage:
  python tools/narrate.py --setup                 # download model files (~350 MB) to ~/.cache/isoe-tts
  python tools/narrate.py audio/scripts/<course>/<module>.txt [...]
  python tools/narrate.py --missing               # every script without an up-to-date MP3

Needs: pip install kokoro-onnx soundfile numpy ; ffmpeg on PATH.
See .claude/course-authoring/audio-briefings.md.
"""
import argparse, os, pathlib, re, subprocess, sys, tempfile, urllib.request

ROOT = pathlib.Path(__file__).resolve().parent.parent
CACHE = pathlib.Path(os.environ.get("ISOE_TTS_CACHE", pathlib.Path.home() / ".cache" / "isoe-tts"))
MODEL_URL = "https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/"
FILES = ["kokoro-v1.0.onnx", "voices-v1.0.bin"]
VOICE, SPEED, PAUSE_S = "af_heart", 1.0, 0.55


def setup():
    CACHE.mkdir(parents=True, exist_ok=True)
    for f in FILES:
        dest = CACHE / f
        if not dest.exists():
            print("downloading", f)
            urllib.request.urlretrieve(MODEL_URL + f, dest)


def module_title(course, module):
    base = ROOT / ("foundations" if course == "foundations" else f"courses/{course}") / module / "index.qmd"
    m = re.search(r'^title:\s*"?(.*?)"?\s*$', base.read_text(), re.M)
    return m.group(1) if m else module


def narrate(script: pathlib.Path, kokoro):
    import numpy as np, soundfile as sf
    rel = script.relative_to(ROOT / "audio" / "scripts")
    course, module = rel.parts[0], rel.stem
    out = ROOT / "audio" / course / f"{module}.mp3"
    out.parent.mkdir(parents=True, exist_ok=True)
    paras = [p.strip().replace("\n", " ") for p in script.read_text().split("\n\n") if p.strip()]
    chunks, sr = [], 24000
    for p in paras:
        samples, sr = kokoro.create(p, voice=VOICE, speed=SPEED, lang="en-us")
        chunks += [samples, np.zeros(int(sr * PAUSE_S), dtype=samples.dtype)]
    audio = np.concatenate(chunks)
    with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as tmp:
        sf.write(tmp.name, audio, sr)
    subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-i", tmp.name, "-ac", "1", "-b:a", "48k",
                    "-metadata", f"title={module_title(course, module)}",
                    "-metadata", "artist=ISOE School", "-metadata", "album=ISOE School audio briefings",
                    str(out)], check=True)
    os.unlink(tmp.name)
    print(f"{out.relative_to(ROOT)}  {len(audio)/sr/60:.1f} min")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("scripts", nargs="*")
    ap.add_argument("--setup", action="store_true")
    ap.add_argument("--missing", action="store_true")
    a = ap.parse_args()
    if a.setup:
        setup(); return
    targets = [pathlib.Path(s).resolve() for s in a.scripts]
    if a.missing:
        for s in sorted((ROOT / "audio" / "scripts").rglob("*.txt")):
            rel = s.relative_to(ROOT / "audio" / "scripts")
            mp3 = ROOT / "audio" / rel.parts[0] / f"{s.stem}.mp3"
            if not mp3.exists() or mp3.stat().st_mtime < s.stat().st_mtime:
                targets.append(s)
    if not targets:
        print("nothing to narrate"); return
    setup()
    from kokoro_onnx import Kokoro
    k = Kokoro(str(CACHE / FILES[0]), str(CACHE / FILES[1]))
    for s in targets:
        narrate(s, k)


if __name__ == "__main__":
    main()
