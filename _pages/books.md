---
layout: page
permalink: /books/
title: books
description: authored and edited volumes
nav: true
nav_order: 3
---

<div class="books">
  {% assign sorted_books = site.books | sort: "year" | reverse %}
  {% for book in sorted_books %}
    <div class="row mb-4 align-items-start">
      <div class="col-md-3 col-sm-4 col-5 mb-3">
  {% if book.cover %}
    {% if book.link %}
      <a href="{{ book.link }}" target="_blank" rel="noopener">
        <img class="img-fluid rounded shadow-sm" src="{{ book.cover | relative_url }}" alt="{{ book.title }}">
      </a>
    {% else %}
      <img class="img-fluid rounded shadow-sm" src="{{ book.cover | relative_url }}" alt="{{ book.title }}">
    {% endif %}
  {% endif %}
</div>
      <div class="col-md-9 col-sm-8 col-7">
        <h4 class="mb-1">
          {% if book.link %}
            <a href="{{ book.link }}">{{ book.title }}</a>
          {% else %}
            {{ book.title }}
          {% endif %}
        </h4>
        {% if book.subtitle %}<p class="text-muted mb-2"><em>{{ book.subtitle }}</em></p>{% endif %}
        {% if book.authors %}
	  <p class="mb-1">{{ book.authors }}</p>
		{% elsif book.editors %}
  			<p class="mb-1">{{ book.editors }} ({% if book.editors contains " and " %}eds.{% else %}ed.{% endif %})</p>
			{% endif %}
        <p class="mb-1 text-muted">{{ book.publisher }}{% if book.year %}, {{ book.year }}{% endif %}</p>
        {% if book.description %}<p class="mt-2">{{ book.description }}</p>{% endif %}
        {% if book.links %}
          <p class="mt-2">
            {% for link in book.links %}
              <a href="{{ link.url }}">{{ link.label }}</a>{% unless forloop.last %} · {% endunless %}
            {% endfor %}
          </p>
        {% endif %}
      </div>
    </div>
  {% endfor %}
</div>