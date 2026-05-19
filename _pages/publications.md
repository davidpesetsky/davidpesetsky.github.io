---
layout: page
permalink: /publications/
title: publications
description: Publications in reversed chronological order.
nav: true
nav_order: 2
---

<style>
/* ── Hide year headings and numbered counters ── */
.bibliography h2 { display: none !important; }
ol.bibliography    { list-style: none !important; padding-left: 0 !important; }
ol.bibliography li { counter-increment: none !important; }
ol.bibliography li::before { content: none !important; }

/* ── Tighten spacing ── */
ol.bibliography li {
  margin-bottom: 0.55rem !important;
  padding-bottom: 0.55rem !important;
  border-bottom: 1px solid var(--global-divider-color, #e8e8e8);
}
ol.bibliography li:last-child { border-bottom: none; }

/* ── Hide the thumbnail/preview column that adds blank space ── */
.bibliography .col-sm-2.abbr { display: none !important; }

/* ── DOI / HTML: show as plain inline links, not buttons ── */
.bibliography .links a.btn {
  display: inline !important;
  padding: 0 !important;
  margin: 0 !important;
  border: none !important;
  border-radius: 0 !important;
  background: none !important;
  box-shadow: none !important;
  font-size: 0.85em !important;
  color: var(--global-theme-color) !important;
  text-transform: none !important;
  letter-spacing: normal !important;
  font-weight: normal !important;
  line-height: inherit !important;
}
.bibliography .links a.btn::before { content: "" }
.bibliography .links a.btn + a.btn::before { content: " · " }
.bibliography .links { margin-top: 0.15rem; }
</style>

{% include bib_search.liquid %}

{% bibliography %}
