/* ISOE School study layer: narration, quizzes, progress and XP.
 *
 * Runs on every page of the Quarto site. It reads the page as it already exists and
 * adds tools on top; it never changes lesson content. Everything is driven by
 * conventions the lessons already follow, so new lessons pick it up automatically:
 *   - lesson pages:  courses/<course>/<module>/index.html, foundations/<slug>/index.html
 *   - course pages:  courses/<course>/index.html
 *   - questions:     a collapsible tip callout titled "Q1: ..." (answer inside), or a
 *                    paragraph starting "Q1." followed by a collapsible callout titled "Answer"
 *   - the catalog:   the Quarto sidebar, which lists every page in curriculum order
 * Progress is stored in this browser only (localStorage), with export/import on the hub.
 */
(function () {
  'use strict';

  // ---------------------------------------------------------------- basics
  var ROOT = typeof window.ISOE_ROOT === 'string' ? window.ISOE_ROOT : '';
  var ROOT_URL = new URL(ROOT || './', location.href);
  var STORE_KEY = 'isoe-study-v1';
  var main = document.getElementById('quarto-document-content') || document.querySelector('main');
  if (!main) return;

  function $(sel, el) { return (el || document).querySelector(sel); }
  function $all(sel, el) { return Array.prototype.slice.call((el || document).querySelectorAll(sel)); }
  function h(tag, attrs, kids) {
    var el = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      var v = attrs[k];
      if (v == null || v === false) return;
      if (k === 'class') el.className = v;
      else if (k === 'text') el.textContent = v;
      else if (k === 'html') el.innerHTML = v;
      else if (k.slice(0, 2) === 'on') el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v === true ? '' : v);
    });
    (kids || []).forEach(function (c) { if (c != null) el.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return el;
  }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  /** Site-relative key for a URL, e.g. "courses/csv-and-becs/part-11/index.html". */
  function keyOf(href) {
    try {
      var u = new URL(href, location.href);
      var p = decodeURIComponent(u.pathname);
      var base = decodeURIComponent(ROOT_URL.pathname);
      if (p.indexOf(base) === 0) p = p.slice(base.length);
      p = p.replace(/^\/+/, '');
      if (p === '' || /\/$/.test(p)) p += 'index.html';
      return p;
    } catch (e) { return null; }
  }
  function urlOf(key) { return new URL(key, ROOT_URL).href; }
  var PAGE = keyOf(location.href);

  function kindOf(key) {
    if (!key) return 'other';
    if (/^courses\/[^/]+\/[^/]+\/index\.html$/.test(key)) return 'lesson';
    if (/^foundations\/[^/]+\/index\.html$/.test(key)) return 'lesson';
    if (/^courses\/[^/]+\/index\.html$/.test(key)) return 'course';
    if (key === 'study.html') return 'hub';
    if (key === 'index.html') return 'home';
    return 'other';
  }
  function courseOf(key) {
    var m = /^courses\/([^/]+)\//.exec(key || '');
    if (m) return m[1];
    if (/^foundations\//.test(key || '')) return 'foundations';
    return null;
  }
  var KIND = kindOf(PAGE);

  // ---------------------------------------------------------------- storage
  var memStore = null;
  function blank() {
    return { v: 1, xp: 0, days: {}, completed: {}, cards: {}, listened: {}, badges: {}, gradedOn: {}, awarded: {},
      listenPos: {}, last: null, prefs: { rate: 1, voice: '', readAnswers: false, outline: false, goal: 50 } };
  }
  function load() {
    var s = null;
    try { s = JSON.parse(localStorage.getItem(STORE_KEY) || 'null'); } catch (e) { s = memStore; }
    var b = blank();
    if (!s || typeof s !== 'object') return b;
    Object.keys(b).forEach(function (k) { if (s[k] == null) s[k] = b[k]; });
    Object.keys(b.prefs).forEach(function (k) { if (s.prefs[k] == null) s.prefs[k] = b.prefs[k]; });
    return s;
  }
  var S = load();
  function save() {
    memStore = S;
    try { localStorage.setItem(STORE_KEY, JSON.stringify(S)); } catch (e) { /* private mode: keep in memory */ }
  }

  // ---------------------------------------------------------------- dates, XP, levels
  function today() { var d = new Date(); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
  function dayNum(iso) { var p = (iso || today()).split('-'); return Math.round(Date.UTC(+p[0], +p[1] - 1, +p[2]) / 86400000); }
  function isoOf(n) { var d = new Date(n * 86400000); return d.getUTCFullYear() + '-' + ('0' + (d.getUTCMonth() + 1)).slice(-2) + '-' + ('0' + d.getUTCDate()).slice(-2); }
  function streak() {
    var n = dayNum(), count = 0;
    if (!S.days[isoOf(n)]) n -= 1;            // today not started yet: streak still alive from yesterday
    while (S.days[isoOf(n)]) { count++; n--; }
    return count;
  }
  var LEVELS = [
    [0, 'Intern'], [100, 'Analyst I'], [250, 'Analyst II'], [500, 'Senior Analyst'], [850, 'Team Lead'],
    [1300, 'Manager'], [1900, 'Senior Manager'], [2600, 'Director'], [3500, 'Senior Director'],
    [4600, 'Vice President'], [6000, 'CIO'], [8000, 'Hall of Fame']
  ];
  function levelInfo(xp) {
    var i = 0;
    while (i + 1 < LEVELS.length && xp >= LEVELS[i + 1][0]) i++;
    var next = LEVELS[i + 1];
    return { n: i + 1, name: LEVELS[i][1], floor: LEVELS[i][0], next: next ? next[0] : null,
      pct: next ? Math.round(100 * (xp - LEVELS[i][0]) / (next[0] - LEVELS[i][0])) : 100 };
  }
  function addXP(n, why) {
    var before = levelInfo(S.xp).n;
    S.xp += n;
    S.days[today()] = (S.days[today()] || 0) + n;
    save();
    toast('+' + n + ' XP · ' + why);
    var after = levelInfo(S.xp);
    if (after.n > before) toast('Level up! You are now ' + after.name + ' (level ' + after.n + ')', 'level');
    checkBadges();
    refreshChip();
  }

  // ---------------------------------------------------------------- toasts
  var toastBox = null;
  function toast(msg, kind) {
    if (!toastBox) { toastBox = h('div', { class: 'isoe-toasts', 'aria-live': 'polite', role: 'status' }); document.body.appendChild(toastBox); }
    var t = h('div', { class: 'isoe-toast' + (kind ? ' isoe-toast-' + kind : ''), text: msg });
    toastBox.appendChild(t);
    setTimeout(function () { t.classList.add('isoe-out'); }, kind ? 4200 : 2600);
    setTimeout(function () { t.remove(); }, kind ? 4800 : 3200);
  }

  // ---------------------------------------------------------------- catalog (from the sidebar)
  var CATALOG = null;
  function catalog() {
    if (CATALOG) return CATALOG;
    var courses = {}, order = [], lessons = [];
    var sb = document.getElementById('quarto-sidebar');
    $all('a.sidebar-link', sb).forEach(function (a) {
      var key = keyOf(a.href), kind = kindOf(key), slug = courseOf(key);
      var title = (a.textContent || '').replace(/\s+/g, ' ').trim();
      if (!slug) return;
      if (!courses[slug]) { courses[slug] = { slug: slug, title: slug === 'foundations' ? 'Foundations' : slug, key: null, lessons: [] }; order.push(slug); }
      if (kind === 'course' || key === 'foundations/index.html') { courses[slug].title = title; courses[slug].key = key; }
      else if (kind === 'lesson' && !courses[slug].lessons.some(function (l) { return l.key === key; })) {
        var l = { key: key, title: title, course: slug };
        courses[slug].lessons.push(l); lessons.push(l);
      }
    });
    order = order.filter(function (s) { return courses[s].lessons.length; });
    CATALOG = { courses: courses, order: order, lessons: lessons };
    return CATALOG;
  }
  function lessonInfo(key) { var c = catalog(); for (var i = 0; i < c.lessons.length; i++) if (c.lessons[i].key === key) return c.lessons[i]; return null; }
  function nextLesson(key) {
    var ls = catalog().lessons;
    for (var i = 0; i < ls.length; i++) if (ls[i].key === key) return ls[i + 1] || null;
    return null;
  }
  function firstIncomplete(list) { for (var i = 0; i < list.length; i++) if (!S.completed[list[i].key]) return list[i]; return null; }
  function courseDone(slug) { var c = catalog().courses[slug]; return !!c && c.lessons.length > 0 && c.lessons.every(function (l) { return S.completed[l.key]; }); }

  // ---------------------------------------------------------------- questions (both formats)
  function hash(s) { var x = 5381; for (var i = 0; i < s.length; i++) x = ((x << 5) + x + s.charCodeAt(i)) | 0; return (x >>> 0).toString(36); }
  function cleanTitle(el) {
    var c = el.cloneNode(true);
    $all('.screen-reader-only', c).forEach(function (n) { n.remove(); });
    return (c.textContent || '').replace(/\s+/g, ' ').trim();
  }
  /** Find question/answer pairs in a document. pageKey namespaces the card ids. */
  function extractQA(root, pageKey, baseURL) {
    var out = [];
    $all('.callout', root).forEach(function (c) {
      var coll = $('.callout-collapse', c), titleEl = $('.callout-title-container', c), body = $('.callout-body', c);
      if (!coll || !titleEl || !body) return;
      var title = cleanTitle(titleEl), q = null, qEl = null, m;
      if ((m = /^Q(\d+)\s*[:.)]\s*(.+)$/i.exec(title))) { q = m[2]; }
      else if (/^(answer|show answer|reveal answer)\b/i.test(title)) {
        var p = c.previousElementSibling, hops = 0;
        while (p && hops < 4) {
          var t = (p.textContent || '').replace(/\s+/g, ' ').trim();
          if (/^Q\d+\s*[.:)]/i.test(t)) { q = t.replace(/^Q\d+\s*[.:)]\s*/i, ''); qEl = p; break; }
          if (p.classList.contains('callout') || /^H[1-6]$/.test(p.tagName)) break;
          p = p.previousElementSibling; hops++;
        }
      }
      if (!q) return;
      var ans = body.cloneNode(true);
      if (baseURL) {
        $all('a[href]', ans).forEach(function (a) { try { a.setAttribute('href', new URL(a.getAttribute('href'), baseURL).href); } catch (e) {} });
        $all('img[src]', ans).forEach(function (a) { try { a.setAttribute('src', new URL(a.getAttribute('src'), baseURL).href); } catch (e) {} });
      }
      $all('.isoe-grade', ans).forEach(function (n) { n.remove(); });
      out.push({ id: pageKey + '#' + hash(q.slice(0, 120)), page: pageKey, q: q, answer: ans.innerHTML, el: c, qEl: qEl });
    });
    return out;
  }
  var pageCache = {};
  function fetchQA(key) {
    if (pageCache[key]) return pageCache[key];
    pageCache[key] = fetch(urlOf(key), { credentials: 'same-origin' }).then(function (r) {
      if (!r.ok) throw new Error(r.status); return r.text();
    }).then(function (html) {
      var doc = new DOMParser().parseFromString(html, 'text/html');
      var m = doc.getElementById('quarto-document-content') || doc.body;
      return extractQA(m, key, urlOf(key));
    }).catch(function () { return []; });
    return pageCache[key];
  }

  // Leitner boxes: 1 = new/missed ... 5 = mastered. Days until the next review per box.
  var INTERVAL = [0, 1, 2, 4, 9, 21];
  function grade(card, ok) {
    var c = S.cards[card.id] || { box: 0, right: 0, wrong: 0, page: card.page };
    var firstToday = S.gradedOn[card.id] !== today();
    if (ok) { c.box = Math.min(5, (c.box || 0) + 1); c.right++; }
    else { c.box = 1; c.wrong++; }
    c.lastOk = !!ok;
    c.due = dayNum() + (ok ? INTERVAL[c.box] : 0);
    c.page = card.page; c.q = card.q.slice(0, 200);
    S.cards[card.id] = c; S.gradedOn[card.id] = today();
    save();
    if (ok && firstToday) addXP(c.right === 1 ? 10 : 5, c.box >= 5 ? 'Mastered a question' : 'Correct answer');
    else if (!ok && firstToday) addXP(2, 'Honest miss: it will come back for review');
    else refreshChip();
    return c;
  }
  function dueCards() { var n = dayNum(); return Object.keys(S.cards).filter(function (id) { return (S.cards[id].due || 0) <= n; }); }
  function mastered() { return Object.keys(S.cards).filter(function (id) { return S.cards[id].box >= 4; }).length; }
  function rightCount() { var n = 0; Object.keys(S.cards).forEach(function (id) { if (S.cards[id].right) n++; }); return n; }

  // ---------------------------------------------------------------- badges
  function badgeDefs() {
    var defs = [
      { id: 'first-lesson', icon: '🎓', name: 'First lesson', hint: 'Complete any lesson', test: function () { return Object.keys(S.completed).length >= 1; } },
      { id: 'ten-lessons', icon: '📚', name: 'Ten down', hint: 'Complete 10 lessons', test: function () { return Object.keys(S.completed).length >= 10; } },
      { id: 'all-lessons', icon: '🏛️', name: 'Whole curriculum', hint: 'Complete every lesson', test: function () { var ls = catalog().lessons; return ls.length > 0 && ls.every(function (l) { return S.completed[l.key]; }); } },
      { id: 'listen-1', icon: '🎧', name: 'Ears on', hint: 'Listen to a whole lesson', test: function () { return Object.keys(S.listened).length >= 1; } },
      { id: 'listen-10', icon: '📻', name: 'Commute scholar', hint: 'Listen to 10 whole lessons', test: function () { return Object.keys(S.listened).length >= 10; } },
      { id: 'right-25', icon: '✅', name: 'Quick study', hint: 'Get 25 different questions right', test: function () { return rightCount() >= 25; } },
      { id: 'right-100', icon: '🧠', name: 'Question bank', hint: 'Get 100 different questions right', test: function () { return rightCount() >= 100; } },
      { id: 'mastered-50', icon: '💎', name: 'Locked in', hint: 'Master 50 questions (review box 4+)', test: function () { return mastered() >= 50; } },
      { id: 'streak-3', icon: '🔥', name: 'On a roll', hint: 'Study 3 days in a row', test: function () { return streak() >= 3; } },
      { id: 'streak-7', icon: '⚡', name: 'Week streak', hint: 'Study 7 days in a row', test: function () { return streak() >= 7; } },
      { id: 'streak-30', icon: '🏆', name: 'Month streak', hint: 'Study 30 days in a row', test: function () { return streak() >= 30; } },
      { id: 'xp-1000', icon: '⭐', name: '1,000 XP', hint: 'Earn 1,000 XP', test: function () { return S.xp >= 1000; } }
    ];
    var c = catalog();
    c.order.forEach(function (slug) {
      defs.push({ id: 'course-' + slug, icon: '🏅', name: c.courses[slug].title, hint: 'Complete every lesson in this course', course: slug,
        test: function () { return courseDone(slug); } });
    });
    return defs;
  }
  function checkBadges() {
    badgeDefs().forEach(function (b) {
      if (!S.badges[b.id] && b.test()) { S.badges[b.id] = today(); save(); toast(b.icon + ' Badge earned: ' + b.name, 'badge'); }
    });
  }

  // ---------------------------------------------------------------- dock (every page)
  var chip = null;
  function refreshChip() {
    if (!chip) return;
    var L = levelInfo(S.xp), st = streak(), due = dueCards().length;
    chip.innerHTML = '<span class="isoe-chip-lv">Lv ' + L.n + '</span> <span>' + S.xp + ' XP</span>' +
      (st ? ' <span title="Day streak">🔥' + st + '</span>' : '') +
      (due ? ' <span class="isoe-chip-due" title="Questions due for review">' + due + ' due</span>' : '');
    chip.setAttribute('aria-label', 'Study hub: level ' + L.n + ', ' + S.xp + ' XP, ' + st + ' day streak, ' + due + ' questions due');
  }
  function buildDock() {
    var dock = h('div', { class: 'isoe-dock' });
    if (Narrator.supported) dock.appendChild(h('button', { class: 'isoe-btn isoe-btn-primary isoe-listen-btn', type: 'button', 'aria-label': 'Listen to this page', title: 'Listen to this page', onclick: function () { Narrator.toggle(); } }, ['🎧 Listen']));
    chip = h('a', { class: 'isoe-chip', href: urlOf('study.html') });
    dock.appendChild(chip);
    document.body.appendChild(dock);
    refreshChip();
  }

  // ---------------------------------------------------------------- narration
  var Narrator = (function () {
    var synth = window.speechSynthesis;
    var supported = !!(synth && window.SpeechSynthesisUtterance);
    var blocks = [], idx = 0, chunks = [], ci = 0, playing = false, bar = null, gen = 0, voices = [], heard = {};
    var BLOCK_SEL = 'h1.title, h2, h3, h4, h5, p, li, blockquote, tr, .callout-title-container, figcaption, dt, dd, .cell, .video-embed, .quarto-figure';
    var SKIP_IN = 'pre, code, nav, #TOC, .isoe-ui, .isoe-dock, .isoe-player, .sidebar, script, style, .quarto-title-breadcrumbs, .footnotes .footnote-back';

    function loadVoices() {
      voices = (synth.getVoices() || []).filter(function (v) { return /^en(-|_|$)/i.test(v.lang); });
      if (bar) fillVoices();
    }
    function bestVoice() {
      if (S.prefs.voice) { var f = voices.filter(function (v) { return v.name === S.prefs.voice; })[0]; if (f) return f; }
      var rank = function (v) {
        var n = v.name, s = 0;
        if (/natural|neural|premium|enhanced/i.test(n)) s += 6;
        if (/online/i.test(n)) s += 3;
        if (/google/i.test(n)) s += 3;
        if (/samantha|ava|allison|aria|jenny|guy|zoe|evan/i.test(n)) s += 2;
        if (/en-US/i.test(v.lang)) s += 1;
        if (v.localService === false) s += 1;
        return s;
      };
      return voices.slice().sort(function (a, b) { return rank(b) - rank(a); })[0] || null;
    }

    function textOf(el) {
      var c = el.cloneNode(true);
      $all('.screen-reader-only, .anchorjs-link, .isoe-ui, sup.footnote-ref, .callout-btn-toggle, ul, ol, pre, code.sourceCode', c).forEach(function (n) { n.remove(); });
      // keep inline <code> text (CFR cites, slugs) but not code blocks
      return (c.textContent || '').replace(/\s+/g, ' ').trim();
    }
    function speakable(t) {
      return t
        .replace(/§§/g, 'sections ').replace(/§/g, 'section ')
        .replace(/\be\.g\.,?/gi, 'for example,').replace(/\bi\.e\.,?/gi, 'that is,').replace(/\bvs\.?\s/gi, 'versus ')
        .replace(/\betc\./gi, 'etcetera.').replace(/→|⟶|->/g, ' to ').replace(/←/g, ' from ')
        .replace(/≥/g, ' at least ').replace(/≤/g, ' at most ').replace(/≠/g, ' not equal to ')
        .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}️]/gu, '')
        .replace(/\s*\|\s*/g, ', ').replace(/_/g, ' ').replace(/\s+/g, ' ').trim();
    }
    function isHiddenAnswer(el) {
      var coll = el.closest('.callout-collapse');
      return !!coll && !coll.classList.contains('show') && !S.prefs.readAnswers;
    }
    function collect() {
      var cand = $all(BLOCK_SEL, main), list = [];
      cand.forEach(function (el) {
        if (el.closest(SKIP_IN)) return;
        if (el.closest('.cell') && !el.classList.contains('cell')) return;          // inside a diagram
        if (el.closest('.video-embed') && !el.classList.contains('video-embed')) return;
        if (el.closest('.quarto-figure') && !el.classList.contains('quarto-figure') && !el.matches('figcaption')) return;
        if (el.tagName === 'LI' && el.querySelector('p')) return;                      // its paragraphs are read instead
        if (el.tagName === 'BLOCKQUOTE' && el.querySelector('p, li')) return;
        if ((el.tagName === 'TD' || el.tagName === 'TH')) return;
        if (el.tagName === 'P' && el.closest('td, th')) return;                         // read as part of the row
        var t;
        if (el.classList.contains('cell') || el.classList.contains('quarto-figure')) {
          if (el.closest('.cell') && el.closest('.cell') !== el) return;
          t = 'A diagram appears here on the page.';
        } else if (el.classList.contains('video-embed')) {
          t = 'A video appears here on the page.';
        } else if (el.tagName === 'TR') {
          var cells = $all('th, td', el).map(textOf).filter(Boolean);
          if (!cells.length) return;
          t = (el.closest('thead') ? 'Table. Columns: ' : '') + cells.join('; ') + '.';
        } else if (el.classList.contains('callout-title-container')) {
          var tt = textOf(el), m = /^Q(\d+)\s*[:.)]\s*(.+)$/i.exec(tt);
          var coll = el.closest('.callout') && $('.callout-collapse', el.closest('.callout'));
          var isAns = /^(answer|show answer|reveal answer)\b/i.test(tt);
          if (m) t = 'Question ' + m[1] + '. ' + m[2];
          else if (isAns) t = '';
          else t = tt;
          if (coll && (m || isAns)) { list.push({ el: el, text: t, gate: coll }); return; }
        } else {
          t = textOf(el);
          if (el.tagName === 'P' && el.parentElement && el.parentElement.tagName === 'BLOCKQUOTE' && el === el.parentElement.firstElementChild) t = 'Quote. ' + t;
          if (/^H[2-5]$/.test(el.tagName)) t = t.replace(/\.$/, '') + '.';
        }
        if (t) list.push({ el: el, text: t });
      });
      return list;
    }
    function chunk(text) {
      var parts = speakable(text).match(/[^.!?;:]+[.!?;:]+["'”’)\]]*\s*|[^.!?;:]+$/g) || [text], out = [], cur = '';
      parts.forEach(function (p) {
        if ((cur + p).length > 220 && cur) { out.push(cur.trim()); cur = ''; }
        while (p.length > 260) { var cut = p.lastIndexOf(',', 240); if (cut < 80) cut = p.lastIndexOf(' ', 240); out.push(p.slice(0, cut + 1).trim()); p = p.slice(cut + 1); }
        cur += p;
      });
      if (cur.trim()) out.push(cur.trim());
      return out;
    }

    function highlight() {
      $all('.isoe-reading').forEach(function (n) { n.classList.remove('isoe-reading'); });
      var b = blocks[idx]; if (!b) return;
      var target = b.el.classList.contains('callout-title-container') ? b.el.closest('.callout') : b.el;
      target.classList.add('isoe-reading');
      var sec = target.closest('section.level2');
      if (sec && document.body.classList.contains('isoe-outline')) sec.classList.add('isoe-open');
      var r = target.getBoundingClientRect();
      if (r.top < 70 || r.bottom > window.innerHeight - 110) target.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center' });
      updateBar();
    }
    function speakBlock() {
      var my = ++gen;
      if (idx >= blocks.length) { finish(); return; }
      var b = blocks[idx];
      var text = b.text;
      if (b.gate) {
        // a question callout: read the question, then say the answer is hidden (unless revealed or "read answers" is on)
        var hidden = !b.gate.classList.contains('show') && !S.prefs.readAnswers;
        text = (text ? text + ' ' : '') + (hidden ? 'Answer hidden. Pause and think, then tap the question to reveal it.' : 'Answer.');
      }
      if (isHiddenAnswer(b.el)) { idx++; speakBlock(); return; }
      chunks = chunk(text); if (ci >= chunks.length) ci = 0;
      heard[idx] = 1;
      highlight();
      S.listenPos[PAGE] = idx; save();
      speakChunk(my);
    }
    function speakChunk(my) {
      if (my !== gen || !playing) return;
      if (ci >= chunks.length) { ci = 0; idx++; speakBlock(); return; }
      var u = new SpeechSynthesisUtterance(chunks[ci]);
      var v = bestVoice(); if (v) { u.voice = v; u.lang = v.lang; } else u.lang = 'en-US';
      u.rate = S.prefs.rate || 1;
      u.onend = function () { if (my !== gen) return; ci++; speakChunk(my); };
      u.onerror = function (e) { if (my !== gen) return; if (e && (e.error === 'interrupted' || e.error === 'canceled')) return; ci++; speakChunk(my); };
      synth.speak(u);
    }
    function finish() {
      playing = false; gen++;
      $all('.isoe-reading').forEach(function (n) { n.classList.remove('isoe-reading'); });
      S.listenPos[PAGE] = 0; save();
      updateBar();
      var enough = Object.keys(heard).length >= Math.max(1, Math.floor(blocks.length * 0.6));
      if (KIND === 'lesson' && !S.listened[PAGE] && enough) { S.listened[PAGE] = today(); save(); addXP(20, 'Listened to a whole lesson'); }
      else toast('Finished reading this page');
    }
    function play() {
      if (!blocks.length) blocks = collect();
      if (!blocks.length) return;
      playing = true; restart();
    }
    // Safari can drop an utterance queued in the same tick as cancel(); give it a moment.
    function restart() { if (synth.speaking || synth.pending) { synth.cancel(); setTimeout(speakBlock, 80); } else speakBlock(); }
    function pause() { playing = false; gen++; synth.cancel(); updateBar(); }
    function jump(n) { idx = Math.max(0, Math.min(blocks.length - 1, n)); ci = 0; if (playing) { gen++; restart(); } else highlight(); }
    function skipToHeading(dir) {
      var i = idx + dir;
      while (i >= 0 && i < blocks.length && !/^H[1-4]$/.test(blocks[i].el.tagName)) i += dir;
      jump(i < 0 ? 0 : i);
    }

    function fillVoices() {
      var sel = $('.isoe-voice', bar); if (!sel) return;
      var cur = bestVoice();
      sel.innerHTML = '';
      if (!voices.length) { sel.appendChild(h('option', { text: 'Default voice', value: '' })); return; }
      voices.forEach(function (v) { sel.appendChild(h('option', { value: v.name, text: v.name.replace(/Microsoft |Google /, '') + ' (' + v.lang + ')', selected: cur && v.name === cur.name ? 'selected' : null })); });
    }
    function updateBar() {
      if (!bar) return;
      $('.isoe-pp', bar).textContent = playing ? '⏸' : '▶';
      $('.isoe-pp', bar).setAttribute('aria-label', playing ? 'Pause' : 'Play');
      var pct = blocks.length ? Math.round(100 * idx / blocks.length) : 0;
      $('.isoe-pos', bar).textContent = blocks.length ? (pct + '%') : '';
      $('.isoe-player-fill', bar).style.width = pct + '%';
    }
    function open() {
      if (bar) { bar.hidden = false; document.body.classList.add('isoe-listening'); return; }
      blocks = collect();
      idx = Math.min(S.listenPos[PAGE] || 0, Math.max(0, blocks.length - 1));
      bar = h('div', { class: 'isoe-player isoe-ui', role: 'region', 'aria-label': 'Narration controls' }, [
        h('div', { class: 'isoe-player-track' }, [h('div', { class: 'isoe-player-fill' })]),
        h('div', { class: 'isoe-player-row' }, [
          h('button', { class: 'isoe-ib', type: 'button', title: 'Previous section', 'aria-label': 'Previous section', onclick: function () { skipToHeading(-1); } }, ['⏮']),
          h('button', { class: 'isoe-ib', type: 'button', title: 'Back one paragraph', 'aria-label': 'Back one paragraph', onclick: function () { jump(idx - 1); } }, ['↶']),
          h('button', { class: 'isoe-ib isoe-pp', type: 'button', 'aria-label': 'Play', onclick: function () { playing ? pause() : play(); } }, ['▶']),
          h('button', { class: 'isoe-ib', type: 'button', title: 'Forward one paragraph', 'aria-label': 'Forward one paragraph', onclick: function () { jump(idx + 1); } }, ['↷']),
          h('button', { class: 'isoe-ib', type: 'button', title: 'Next section', 'aria-label': 'Next section', onclick: function () { skipToHeading(1); } }, ['⏭']),
          h('span', { class: 'isoe-pos', 'aria-live': 'off' }),
          h('select', { class: 'isoe-rate', 'aria-label': 'Speed', title: 'Speed', onchange: function (e) { S.prefs.rate = +e.target.value; save(); if (playing) { synth.cancel(); ci = Math.max(0, ci); speakBlock(); } } },
            [0.8, 0.9, 1, 1.1, 1.25, 1.5, 1.75, 2].map(function (r) { return h('option', { value: r, text: r + '×', selected: (S.prefs.rate || 1) === r ? 'selected' : null }); })),
          h('select', { class: 'isoe-voice', 'aria-label': 'Voice', title: 'Voice', onchange: function (e) { S.prefs.voice = e.target.value; save(); if (playing) { synth.cancel(); speakBlock(); } } }),
          h('label', { class: 'isoe-ans', title: 'Read hidden answers aloud too' }, [
            h('input', { type: 'checkbox', checked: S.prefs.readAnswers ? 'checked' : null, onchange: function (e) { S.prefs.readAnswers = e.target.checked; save(); } }), ' Read answers']),
          h('button', { class: 'isoe-ib isoe-close', type: 'button', title: 'Stop and close', 'aria-label': 'Stop and close narration', onclick: close }, ['✕'])
        ]),
        h('div', { class: 'isoe-player-hint', text: 'Tip: tap any paragraph to start reading from there.' })
      ]);
      document.body.appendChild(bar);
      document.body.classList.add('isoe-listening');
      fillVoices(); updateBar(); highlight();
    }
    function close() {
      pause();
      $all('.isoe-reading').forEach(function (n) { n.classList.remove('isoe-reading'); });
      if (bar) bar.hidden = true;
      document.body.classList.remove('isoe-listening');
    }
    function toggle() { if (bar && !bar.hidden) { playing ? pause() : play(); } else { open(); play(); } }

    // tap-to-start while the player is open
    main.addEventListener('click', function (e) {
      if (!bar || bar.hidden) return;
      if (e.target.closest('a, button, input, select, label, summary, .callout-header, .isoe-ui')) return;
      for (var i = 0; i < blocks.length; i++) {
        var el = blocks[i].el.classList.contains('callout-title-container') ? blocks[i].el.closest('.callout') : blocks[i].el;
        if (el.contains(e.target)) { idx = i; ci = 0; playing = true; gen++; restart(); return; }
      }
    });

    /** One-off reading of arbitrary text (used by flashcards). */
    function say(text) {
      if (!supported) return;
      pause(); var my = ++gen; playing = true; chunks = chunk(text); ci = 0;
      var next = function () {
        if (my !== gen || ci >= chunks.length) { if (my === gen) playing = false; return; }
        var u = new SpeechSynthesisUtterance(chunks[ci]); var v = bestVoice(); if (v) { u.voice = v; u.lang = v.lang; }
        u.rate = S.prefs.rate || 1; u.onend = function () { ci++; next(); }; synth.speak(u);
      };
      synth.cancel(); next();
    }
    function hush() { pause(); }

    if (supported) {
      loadVoices();
      if (synth.addEventListener) synth.addEventListener('voiceschanged', loadVoices); else synth.onvoiceschanged = loadVoices;
      window.addEventListener('beforeunload', function () { synth.cancel(); });
    }
    return { supported: supported, toggle: toggle, open: open, close: close, say: say, hush: hush, isOpen: function () { return !!bar && !bar.hidden; } };
  })();

  // ---------------------------------------------------------------- flashcard sessions (hub + lesson quick quiz)
  function session(cards, title) {
    if (!cards.length) { toast('No questions to review right now'); return; }
    var i = 0, right = 0, xp0 = S.xp, queue = cards.slice(), retried = {};
    var prevFocus = document.activeElement;
    var box = h('div', { class: 'isoe-modal-card', role: 'dialog', 'aria-modal': 'true', 'aria-label': title || 'Review' });
    var wrap = h('div', { class: 'isoe-modal isoe-ui', onclick: function (e) { if (e.target === wrap) end(); } }, [box]);
    function end() { Narrator.hush(); wrap.remove(); document.removeEventListener('keydown', onKey); if (prevFocus && prevFocus.focus) prevFocus.focus(); if (KIND === 'hub') renderHub(); }
    function onKey(e) { if (e.key === 'Escape') end(); }
    document.addEventListener('keydown', onKey);
    function show() {
      if (i >= queue.length) return summary();
      var c = queue[i], info = lessonInfo(c.page), state = S.cards[c.id];
      box.innerHTML = '';
      box.appendChild(h('div', { class: 'isoe-modal-top' }, [
        h('span', { class: 'isoe-muted', text: (title || 'Review') + ' · ' + (i + 1) + ' of ' + queue.length }),
        h('button', { class: 'isoe-ib', type: 'button', 'aria-label': 'Close review', onclick: end }, ['✕'])]));
      box.appendChild(h('div', { class: 'isoe-bar' }, [h('div', { class: 'isoe-bar-fill', style: 'width:' + Math.round(100 * i / queue.length) + '%' })]));
      if (info) box.appendChild(h('a', { class: 'isoe-src', href: urlOf(c.page), text: '📘 ' + info.title }));
      box.appendChild(h('div', { class: 'isoe-q', text: c.q }));
      if (state && state.box) box.appendChild(h('div', { class: 'isoe-muted isoe-small', text: 'Review box ' + state.box + ' of 5' }));
      var ans = h('div', { class: 'isoe-a', hidden: true, html: c.answer });
      var actions = h('div', { class: 'isoe-actions' });
      var reveal = h('button', { class: 'isoe-btn isoe-btn-primary', type: 'button', onclick: function () {
        ans.hidden = false; reveal.remove(); actions.appendChild(gotIt); actions.appendChild(notYet); gotIt.focus();
      } }, ['Show answer']);
      var gotIt = h('button', { class: 'isoe-btn isoe-btn-good', type: 'button', onclick: function () { grade(c, true); right++; i++; show(); } }, ['✓ Got it']);
      var notYet = h('button', { class: 'isoe-btn isoe-btn-warn', type: 'button', onclick: function () { grade(c, false); if (!retried[c.id]) { retried[c.id] = 1; queue.push(c); } i++; show(); } }, ['↻ Not yet']);
      actions.appendChild(reveal);
      if (Narrator.supported) actions.appendChild(h('button', { class: 'isoe-btn', type: 'button', title: 'Read aloud', onclick: function () {
        var tmp = h('div', { html: c.answer }); Narrator.say('Question. ' + c.q + (ans.hidden ? '' : ' Answer. ' + tmp.textContent));
      } }, ['🔊']));
      box.appendChild(actions); box.appendChild(ans);
      reveal.focus();
    }
    function summary() {
      box.innerHTML = '';
      var gained = S.xp - xp0;
      box.appendChild(h('div', { class: 'isoe-done' }, [
        h('div', { class: 'isoe-big', text: right >= queue.length * 0.8 ? '🎉' : '💪' }),
        h('h3', { text: 'Session complete' }),
        h('p', { text: right + ' right out of ' + queue.length + ' answers · +' + gained + ' XP' }),
        h('p', { class: 'isoe-muted', text: 'Questions you missed come back sooner; ones you got right come back later, spaced out until they stick.' }),
        h('button', { class: 'isoe-btn isoe-btn-primary', type: 'button', onclick: end }, ['Done'])]));
      $('button', box).focus();
    }
    document.body.appendChild(wrap);
    show();
  }

  // ---------------------------------------------------------------- lesson pages
  function wordsIn(el) {
    var c = el.cloneNode(true);
    $all('pre, .cell, script, style, nav, .isoe-ui, table', c).forEach(function (n) { n.remove(); });
    return ((c.textContent || '').match(/\S+/g) || []).length;
  }
  function enhanceQuestions(cards) {
    cards.forEach(function (card) {
      var body = $('.callout-body', card.el);
      if (!body || $('.isoe-grade', body)) return;
      var st = S.cards[card.id];
      var label = h('span', { class: 'isoe-muted', text: st && st.box ? 'Review box ' + st.box + ' of 5 · how did you do this time?' : 'How did you do?' });
      var g = h('div', { class: 'isoe-grade isoe-ui' }, [label,
        h('button', { class: 'isoe-btn isoe-btn-good isoe-sm', type: 'button', onclick: function () { var r = grade(card, true); label.textContent = 'Nice. Review box ' + r.box + ' of 5. It comes back in ' + INTERVAL[r.box] + ' day' + (INTERVAL[r.box] === 1 ? '' : 's') + '.'; card.el.classList.add('isoe-ok'); card.el.classList.remove('isoe-miss'); } }, ['✓ Got it']),
        h('button', { class: 'isoe-btn isoe-btn-warn isoe-sm', type: 'button', onclick: function () { grade(card, false); label.textContent = 'No problem. It goes into your review deck for tomorrow.'; card.el.classList.add('isoe-miss'); card.el.classList.remove('isoe-ok'); } }, ['↻ Not yet'])]);
      body.appendChild(g);
      if (st && st.box >= 1) card.el.classList.add(st.lastOk ? 'isoe-ok' : 'isoe-miss');
      var hdr = $('.callout-header', card.el);
      if (hdr && !$('.isoe-qhint', hdr)) {
        var tc = $('.callout-title-container', hdr);
        if (tc) tc.appendChild(h('span', { class: 'isoe-qhint isoe-ui', text: 'Think first, then tap to reveal' }));
      }
    });
  }
  function outlineMode(on) {
    document.body.classList.toggle('isoe-outline', on);
    $all('section.level2', main).forEach(function (sec) {
      var hd = sec.querySelector(':scope > h2');
      if (!hd) return;
      if (!hd.dataset.isoeOutline) {
        hd.dataset.isoeOutline = '1';
        hd.setAttribute('tabindex', '0');
        var t = function () { if (document.body.classList.contains('isoe-outline')) sec.classList.toggle('isoe-open'); };
        hd.addEventListener('click', function (e) { if (!e.target.closest('a')) t(); });
        hd.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); t(); } });
      }
      if (!on) sec.classList.remove('isoe-open');
    });
  }
  function enhanceLesson() {
    var info = lessonInfo(PAGE);
    S.last = PAGE; save();
    var cards = extractQA(main, PAGE, null);
    enhanceQuestions(cards);
    var words = wordsIn(main);
    var readMin = Math.max(1, Math.round(words / 230)), listenMin = Math.max(1, Math.round(words / 155 / (S.prefs.rate || 1)));
    var done = !!S.completed[PAGE];

    var completeBtn = h('button', { class: 'isoe-btn ' + (done ? 'isoe-btn-done' : 'isoe-btn-good'), type: 'button', onclick: toggleComplete }, [done ? '✓ Completed' : 'Mark complete (+50 XP)']);
    function setDone(d) {
      $all('.isoe-complete-btn').forEach(function (b) { b.className = 'isoe-btn isoe-complete-btn ' + (d ? 'isoe-btn-done' : 'isoe-btn-good'); b.textContent = d ? '✓ Completed' : 'Mark complete (+50 XP)'; });
    }
    function toggleComplete() {
      if (S.completed[PAGE]) { delete S.completed[PAGE]; save(); setDone(false); refreshChip(); toast('Marked as not complete'); return; }
      S.completed[PAGE] = today(); save(); setDone(true);
      if (!S.awarded[PAGE]) { S.awarded[PAGE] = today(); addXP(50, 'Lesson complete'); } else { refreshChip(); checkBadges(); toast('Marked complete again'); }
      if (info && courseDone(info.course)) toast('🏁 You finished every lesson in ' + catalog().courses[info.course].title + '!', 'badge');
    }
    completeBtn.classList.add('isoe-complete-btn');

    var strip = h('div', { class: 'isoe-strip isoe-ui' }, [
      h('span', { class: 'isoe-pill', title: 'Estimated reading time', text: '⏱ ' + readMin + ' min read' }),
      Narrator.supported ? h('button', { class: 'isoe-pill isoe-pill-btn', type: 'button', title: 'Listen to this lesson', onclick: function () { Narrator.toggle(); } }, ['🎧 ' + listenMin + ' min listen']) : null,
      cards.length ? h('button', { class: 'isoe-pill isoe-pill-btn', type: 'button', title: 'Quiz yourself on this lesson', onclick: function () { session(shuffle(cards.slice()), 'This lesson'); } }, ['❓ ' + cards.length + ' question' + (cards.length === 1 ? '' : 's')]) : null,
      h('label', { class: 'isoe-pill isoe-pill-btn', title: 'Collapse sections so you can open them one at a time' }, [
        h('input', { type: 'checkbox', checked: S.prefs.outline ? 'checked' : null, onchange: function (e) { S.prefs.outline = e.target.checked; save(); outlineMode(e.target.checked); } }), ' Outline view']),
      completeBtn
    ]);
    var header = $('#title-block-header', main);
    if (header) header.insertAdjacentElement('afterend', strip); else main.insertBefore(strip, main.firstChild);

    var nxt = nextLesson(PAGE);
    var foot = h('div', { class: 'isoe-finish isoe-ui' }, [
      h('div', { class: 'isoe-finish-title', text: '🏁 Finish line' }),
      h('p', { class: 'isoe-muted', text: cards.length ? 'Answer the questions above (tap ✓ or ↻ after each), then mark this lesson complete.' : 'When this makes sense to you, mark the lesson complete.' }),
      h('div', { class: 'isoe-actions' }, [
        (function () { var b = completeBtn.cloneNode(true); b.addEventListener('click', toggleComplete); return b; })(),
        cards.length ? h('button', { class: 'isoe-btn', type: 'button', onclick: function () { session(shuffle(cards.slice()), 'This lesson'); } }, ['Quiz me on this lesson']) : null,
        nxt ? h('a', { class: 'isoe-btn isoe-btn-primary', href: urlOf(nxt.key) }, ['Next: ' + nxt.title + ' →']) : h('a', { class: 'isoe-btn isoe-btn-primary', href: urlOf('study.html') }, ['Open your study hub →'])
      ])
    ]);
    var footnotes = $('section.footnotes', main) || $('#quarto-appendix', document);
    if (footnotes && main.contains(footnotes)) main.insertBefore(foot, footnotes); else main.appendChild(foot);

    if (S.prefs.outline) outlineMode(true);
    // In outline view, jumping to a section (table of contents, links, #hash) opens it.
    function openTarget(hash) {
      if (!hash || hash.length < 2) return;
      var el = null; try { el = document.getElementById(decodeURIComponent(hash.slice(1))); } catch (e) {}
      var sec = el && (el.matches('section.level2') ? el : el.closest('section.level2'));
      if (sec && document.body.classList.contains('isoe-outline')) sec.classList.add('isoe-open');
    }
    document.addEventListener('click', function (e) { var a = e.target.closest('a[href*="#"]'); if (a && a.pathname === location.pathname) openTarget(a.hash); });
    window.addEventListener('hashchange', function () { openTarget(location.hash); });
    openTarget(location.hash);
    readingProgress();
  }
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function readingProgress() {
    var bar = h('div', { class: 'isoe-progress isoe-ui', 'aria-hidden': 'true' }, [h('div')]);
    document.body.appendChild(bar);
    var fill = bar.firstChild, tick = false;
    function upd() { tick = false; var r = main.getBoundingClientRect(); var total = r.height - window.innerHeight; var p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 1; fill.style.width = (p * 100).toFixed(1) + '%'; }
    window.addEventListener('scroll', function () { if (!tick) { tick = true; requestAnimationFrame(upd); } }, { passive: true });
    upd();
  }

  // ---------------------------------------------------------------- course pages
  function progressBlock(slug, compact) {
    var c = catalog().courses[slug]; if (!c) return null;
    var n = c.lessons.filter(function (l) { return S.completed[l.key]; }).length, tot = c.lessons.length;
    var nxt = firstIncomplete(c.lessons);
    var el = h('div', { class: 'isoe-course isoe-ui' + (compact ? ' isoe-compact' : '') }, [
      h('div', { class: 'isoe-course-head' }, [
        h(compact ? 'a' : 'strong', compact ? { href: urlOf(c.key || c.lessons[0].key), text: c.title } : { text: 'Your progress' }),
        h('span', { class: 'isoe-muted', text: n + ' of ' + tot + ' lessons' + (n === tot ? ' · 🏅 complete' : '') })]),
      h('div', { class: 'isoe-bar' }, [h('div', { class: 'isoe-bar-fill', style: 'width:' + Math.round(100 * n / tot) + '%' })])
    ]);
    if (!compact) {
      var ul = h('ol', { class: 'isoe-lessons' });
      c.lessons.forEach(function (l) { ul.appendChild(h('li', { class: S.completed[l.key] ? 'isoe-done-item' : '' }, [h('span', { class: 'isoe-check', text: S.completed[l.key] ? '✓' : '○', 'aria-label': S.completed[l.key] ? 'complete' : 'not complete' }), ' ', h('a', { href: urlOf(l.key), text: l.title })])); });
      el.appendChild(ul);
      el.appendChild(h('div', { class: 'isoe-actions' }, [
        nxt ? h('a', { class: 'isoe-btn isoe-btn-primary', href: urlOf(nxt.key) }, [(n ? 'Continue: ' : 'Start: ') + nxt.title + ' →']) : h('span', { text: '🏅 Course complete. Keep it fresh with reviews on your study hub.' }),
        h('button', { class: 'isoe-btn', type: 'button', onclick: function () { quizCourse(slug, 5); } }, ['Quick quiz: 5 questions'])
      ]));
    }
    return el;
  }
  function enhanceCourse() {
    var slug = courseOf(PAGE), blk = progressBlock(slug, false);
    if (!blk) return;
    var header = $('#title-block-header', main);
    if (header) header.insertAdjacentElement('afterend', blk); else main.insertBefore(blk, main.firstChild);
  }
  function quizCourse(slug, n) {
    var ls = slug ? catalog().courses[slug].lessons : catalog().lessons;
    toast('Gathering questions…');
    var pool = shuffle(ls.slice()).slice(0, slug ? ls.length : 12);
    Promise.all(pool.map(function (l) { return fetchQA(l.key); })).then(function (lists) {
      var all = []; lists.forEach(function (x) { all = all.concat(x); });
      session(shuffle(all).slice(0, n), slug ? catalog().courses[slug].title : 'Mixed quiz');
    });
  }

  // ---------------------------------------------------------------- hub page
  function stat(big, label) { return h('div', { class: 'isoe-stat' }, [h('div', { class: 'isoe-stat-big', text: String(big) }), h('div', { class: 'isoe-muted isoe-small', text: label })]); }
  function renderHub() {
    var host = document.getElementById('isoe-hub'); if (!host) return;
    host.innerHTML = ''; host.classList.add('isoe-ui');
    var L = levelInfo(S.xp), st = streak(), due = dueCards(), cat = catalog();
    var doneCount = cat.lessons.filter(function (l) { return S.completed[l.key]; }).length;
    var todayXP = S.days[today()] || 0, goal = S.prefs.goal || 50;

    host.appendChild(h('div', { class: 'isoe-hero' }, [
      h('div', {}, [h('div', { class: 'isoe-muted isoe-small', text: 'Level ' + L.n }), h('div', { class: 'isoe-level', text: L.name }),
        h('div', { class: 'isoe-bar isoe-bar-lg' }, [h('div', { class: 'isoe-bar-fill', style: 'width:' + L.pct + '%' })]),
        h('div', { class: 'isoe-muted isoe-small', text: S.xp + ' XP' + (L.next ? ' · ' + (L.next - S.xp) + ' to ' + levelInfo(L.next).name : ' · top level') })]),
      h('div', { class: 'isoe-stats' }, [stat('🔥 ' + st, 'day streak'), stat(doneCount + '/' + cat.lessons.length, 'lessons done'), stat(mastered(), 'questions mastered'), stat(Object.keys(S.badges).length, 'badges')])
    ]));

    // today
    var nxt = (S.last && !S.completed[S.last] && lessonInfo(S.last)) || firstIncomplete(cat.lessons);
    host.appendChild(h('div', { class: 'isoe-grid' }, [
      h('div', { class: 'isoe-panel' }, [
        h('h3', { text: 'Today' }),
        h('div', { class: 'isoe-bar' }, [h('div', { class: 'isoe-bar-fill isoe-goal', style: 'width:' + Math.min(100, Math.round(100 * todayXP / goal)) + '%' })]),
        h('p', { class: 'isoe-muted', text: todayXP + ' of ' + goal + ' XP daily goal' + (todayXP >= goal ? ' ✓ — goal met' : '') }),
        nxt ? h('a', { class: 'isoe-btn isoe-btn-primary', href: urlOf(nxt.key) }, [(S.completed[nxt.key] ? 'Revisit: ' : 'Continue: ') + nxt.title + ' →']) : h('p', { text: '🏛️ Every lesson complete. Reviews keep it fresh.' })
      ]),
      h('div', { class: 'isoe-panel' }, [
        h('h3', { text: 'Review deck' }),
        h('p', { class: 'isoe-muted', text: Object.keys(S.cards).length ? due.length + ' question' + (due.length === 1 ? '' : 's') + ' due · ' + Object.keys(S.cards).length + ' in your deck' : 'Your deck fills up as you answer questions in lessons (tap ✓ or ↻ after revealing an answer).' }),
        h('div', { class: 'isoe-actions' }, [
          due.length ? h('button', { class: 'isoe-btn isoe-btn-primary', type: 'button', onclick: reviewDue }, ['Review ' + Math.min(due.length, 20) + ' due →']) : null,
          h('button', { class: 'isoe-btn', type: 'button', onclick: function () { quizCourse(null, 10); } }, ['Mixed quiz: 10 questions'])
        ])
      ])
    ]));

    // courses
    var cp = h('div', { class: 'isoe-panel' }, [h('h3', { text: 'Courses' })]);
    cat.order.forEach(function (slug) { var b = progressBlock(slug, true); if (b) { b.appendChild(h('button', { class: 'isoe-link-btn', type: 'button', onclick: function () { quizCourse(slug, 5); } }, ['Quick quiz'])); cp.appendChild(b); } });
    host.appendChild(cp);

    // badges
    var bp = h('div', { class: 'isoe-panel' }, [h('h3', { text: 'Badges' })]);
    var grid = h('div', { class: 'isoe-badges' });
    badgeDefs().forEach(function (b) {
      var got = !!S.badges[b.id];
      grid.appendChild(h('div', { class: 'isoe-badge' + (got ? ' isoe-got' : ''), title: b.hint + (got ? ' · earned ' + S.badges[b.id] : '') }, [
        h('div', { class: 'isoe-badge-icon', text: b.icon }), h('div', { class: 'isoe-small', text: b.name }), h('div', { class: 'isoe-muted isoe-tiny', text: got ? 'Earned' : b.hint })]));
    });
    bp.appendChild(grid); host.appendChild(bp);

    // how XP works + settings
    host.appendChild(h('div', { class: 'isoe-grid' }, [
      h('div', { class: 'isoe-panel' }, [h('h3', { text: 'How you earn XP' }), h('ul', { html:
        '<li><strong>+50</strong> mark a lesson complete</li><li><strong>+20</strong> listen to a whole lesson</li>' +
        '<li><strong>+10</strong> get a question right the first time, <strong>+5</strong> on later reviews</li>' +
        '<li><strong>+2</strong> an honest "not yet" (it comes back tomorrow)</li>' +
        '<li>Any XP in a day keeps your 🔥 streak alive</li>' }),
        h('p', { class: 'isoe-muted isoe-small', text: 'Review timing: a missed question comes back the same day; each correct answer pushes it further out (1, 2, 4, 9, then 21 days). Box 4 or 5 counts as mastered.' })]),
      h('div', { class: 'isoe-panel' }, [h('h3', { text: 'Settings and backup' }),
        h('label', { class: 'isoe-row' }, ['Daily goal ', h('select', { onchange: function (e) { S.prefs.goal = +e.target.value; save(); renderHub(); } },
          [20, 50, 100, 150].map(function (g) { return h('option', { value: g, text: g + ' XP', selected: goal === g ? 'selected' : null }); }))]),
        h('p', { class: 'isoe-muted isoe-small', text: 'Progress lives in this browser only. To move it to another device, export here and import there.' }),
        h('div', { class: 'isoe-actions' }, [
          h('button', { class: 'isoe-btn', type: 'button', onclick: exportProgress }, ['⬇ Export progress']),
          h('label', { class: 'isoe-btn' }, ['⬆ Import', h('input', { type: 'file', accept: 'application/json,.json', hidden: true, onchange: importProgress })]),
          h('button', { class: 'isoe-btn isoe-btn-warn', type: 'button', onclick: function () { if (confirm('Erase all XP, badges and review history in this browser?')) { S = blank(); save(); renderHub(); refreshChip(); } } }, ['Reset'])])])
    ]));
  }
  function reviewDue() {
    var ids = dueCards().sort(function (a, b) { return (S.cards[a].box || 0) - (S.cards[b].box || 0); }).slice(0, 20);
    var pages = {}; ids.forEach(function (id) { pages[S.cards[id].page] = 1; });
    toast('Loading your due questions…');
    Promise.all(Object.keys(pages).map(fetchQA)).then(function (lists) {
      var byId = {}; lists.forEach(function (l) { l.forEach(function (c) { byId[c.id] = c; }); });
      var cards = ids.map(function (id) { return byId[id]; }).filter(Boolean);
      ids.forEach(function (id) { if (!byId[id]) delete S.cards[id]; });   // question was edited or removed from the lesson
      save();
      session(shuffle(cards), 'Review deck');
    });
  }
  function exportProgress() {
    var blob = new Blob([JSON.stringify(S, null, 1)], { type: 'application/json' });
    var a = h('a', { href: URL.createObjectURL(blob), download: 'isoe-progress-' + today() + '.json' });
    document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }
  function importProgress(e) {
    var f = e.target.files && e.target.files[0]; if (!f) return;
    f.text().then(function (txt) {
      var d = JSON.parse(txt);
      if (!d || typeof d !== 'object' || typeof d.xp !== 'number') throw new Error('not a progress file');
      S = d; var b = blank(); Object.keys(b).forEach(function (k) { if (S[k] == null) S[k] = b[k]; });
      save(); renderHub(); refreshChip(); toast('Progress imported');
    }).catch(function () { toast('That file is not an ISOE progress export'); });
  }

  // ---------------------------------------------------------------- home page teaser
  function enhanceHome() {
    var L = levelInfo(S.xp), cat = catalog(), nxt = (S.last && !S.completed[S.last] && lessonInfo(S.last)) || firstIncomplete(cat.lessons);
    var box = h('div', { class: 'isoe-panel isoe-home isoe-ui' }, [
      h('div', { class: 'isoe-course-head' }, [h('strong', { text: '🎮 Your study hub' }), h('span', { class: 'isoe-muted', text: 'Level ' + L.n + ' ' + L.name + ' · ' + S.xp + ' XP · 🔥 ' + streak() })]),
      h('p', { class: 'isoe-muted isoe-small', text: 'Every lesson can be read aloud (🎧 Listen), quizzes you as you go, and tracks your progress, XP and badges.' }),
      h('div', { class: 'isoe-actions' }, [
        nxt ? h('a', { class: 'isoe-btn isoe-btn-primary', href: urlOf(nxt.key) }, [(Object.keys(S.completed).length || S.last ? 'Continue: ' : 'Start: ') + nxt.title + ' →']) : null,
        h('a', { class: 'isoe-btn', href: urlOf('study.html') }, ['Open study hub'])])
    ]);
    var header = $('#title-block-header', main);
    if (header) header.insertAdjacentElement('afterend', box); else main.insertBefore(box, main.firstChild);
  }

  // ---------------------------------------------------------------- start
  function start() {
    buildDock();
    if (KIND === 'lesson') enhanceLesson();
    else if (KIND === 'course') enhanceCourse();
    else if (KIND === 'hub') renderHub();
    else if (KIND === 'home') enhanceHome();
    checkBadges();
    window.ISOE = { state: function () { return S; }, narrator: Narrator, catalog: catalog, extractQA: extractQA };
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
