// DentalCraft site: language links, mobile menu, current section, video, transcript link.
(function () {
  "use strict";
  var doc = document;
  var root = doc.documentElement;
  root.classList.add("js");

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (s, c) { return (c || doc).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || doc).querySelectorAll(s)); };

  // --- Sticky block height, used by the menu sheet and by scroll-margin ---
  var top = $("#top-block");
  function measureTop() {
    if (top) root.style.setProperty("--top-h", top.offsetHeight + "px");
  }
  measureTop();
  window.addEventListener("resize", measureTop);
  if (window.ResizeObserver && top) new ResizeObserver(measureTop).observe(top);

  // --- Language links keep the hash; remember the choice in this browser only ---
  var langLinks = $$("[data-lang-link]");
  function syncLang() {
    langLinks.forEach(function (a) {
      var base = a.getAttribute("href").split("#")[0];
      a.setAttribute("href", base + location.hash);
    });
  }
  syncLang();
  window.addEventListener("hashchange", syncLang);
  langLinks.forEach(function (a) {
    a.addEventListener("click", function () {
      try { localStorage.setItem("dc-lang", a.getAttribute("data-lang-link")); } catch (e) { /* ignore */ }
    });
  });

  // --- Mobile menu sheet ---
  var btn = $(".menu-btn");
  var sheet = $("#menu-sheet");
  function focusables() {
    return [btn].concat($$("a[href], button:not([disabled])", sheet)).filter(function (el) { return el.offsetParent !== null || el === btn; });
  }
  function setMenu(open) {
    if (!btn || !sheet) return;
    measureTop();
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.setAttribute("aria-label", btn.getAttribute(open ? "data-label-close" : "data-label-open"));
    sheet.classList.toggle("open", open);
    root.classList.toggle("menu-open", open);
    if (open) {
      var first = $("a", sheet);
      if (first) first.focus();
    }
  }
  if (btn && sheet) {
    btn.addEventListener("click", function () { setMenu(btn.getAttribute("aria-expanded") !== "true"); });
    sheet.addEventListener("click", function (e) {
      if (e.target.closest && e.target.closest("a")) setMenu(false);
    });
    doc.addEventListener("keydown", function (e) {
      if (btn.getAttribute("aria-expanded") !== "true") return;
      if (e.key === "Escape") { setMenu(false); btn.focus(); return; }
      if (e.key === "Tab") {
        var items = focusables();
        var i = items.indexOf(doc.activeElement);
        if (e.shiftKey && (i <= 0)) { e.preventDefault(); items[items.length - 1].focus(); }
        else if (!e.shiftKey && (i === items.length - 1 || i === -1)) { e.preventDefault(); items[0].focus(); }
      }
    });
    var mq = window.matchMedia("(min-width: 1200px)");
    var onMq = function () { if (mq.matches) setMenu(false); };
    if (mq.addEventListener) mq.addEventListener("change", onMq);
  }

  // --- Current section in the nav ---
  var links = $$(".hdr__nav a[data-section], #menu-sheet a[data-section]").filter(function (a) { return a.getAttribute("data-section"); });
  var ids = {};
  links.forEach(function (a) { ids[a.getAttribute("data-section")] = true; });
  var sections = Object.keys(ids).map(function (id) { return doc.getElementById(id); }).filter(Boolean);
  function setCurrent(id) {
    links.forEach(function (a) {
      if (a.getAttribute("data-section") === id) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
  }
  if ("IntersectionObserver" in window && sections.length) {
    var visible = {};
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { visible[en.target.id] = en.isIntersecting ? en.intersectionRatio : 0; });
      var best = null, bestV = 0;
      sections.forEach(function (s) { if ((visible[s.id] || 0) > bestV) { bestV = visible[s.id]; best = s.id; } });
      setCurrent(best);
    }, { rootMargin: "-" + (top ? top.offsetHeight : 112) + "px 0px -45% 0px", threshold: [0, 0.1, 0.3, 0.6, 1] });
    sections.forEach(function (s) { io.observe(s); });
  }

  // --- Video: the poster button starts the native player. No autoplay. ---
  $$("[data-player]").forEach(function (box) {
    var video = $("video", box);
    var start = $("[data-player-start]", box);
    if (!video || !start) return;
    // With JS the poster button starts playback; the native controls appear only then.
    video.removeAttribute("controls");
    function play() {
      video.controls = true;
      box.classList.add("is-playing");
      video.focus();
      var p = video.play();
      if (p && p.catch) p.catch(function () { /* user can press play in the native controls */ });
    }
    start.addEventListener("click", play);
    video.addEventListener("play", function () { video.controls = true; box.classList.add("is-playing"); });
    // Hero "Watch the presentation" scrolls to the player but never starts it.
  });

  if (reduce) root.classList.add("reduce-motion");
})();
