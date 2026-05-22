---
layout: page
title: books
permalink: /books/
nav: true
collection: books
nav_order: 3
---
<div class="row">
  {% for book in site.books reversed %}
    <div class="col-sm-6 col-md-4 mb-4">
      <div class="card h-100">
        <!-- Book Thumbnail -->
        {% if book.img %}
          <img src="{{ book.img | relative_url }}" class="card-img-top" alt="{{ book.title }}" style="max-height: 300px; object-fit: contain;">
        {% endif %}
        
        <!-- Book Information -->
        <div class="card-body">
          <h5 class="card-title">{{ book.title }}</h5>
          <p class="card-text text-muted">{{ book.author }} | {{ book.year }}</p>
          {% if book.publisher %}
            <p class="card-text"><small>Publisher: {{ book.publisher }}</small></p>
          {% endif %}
          
          <!-- Link to details or external purchase -->
          {% if book.redirect %}
            <a href="{{ book.redirect }}" target="_blank" class="btn btn-primary">View / Buy</a>
          {% endif %}
        </div>
      </div>
    </div>
  {% endfor %}
</div>

