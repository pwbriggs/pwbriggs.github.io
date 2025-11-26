---
title: Thoughts
eleventyExcludeFromCollections: true
---

*Thoughts* are intended to be the "evergreen" content, the sort of stuff that gets updated continually as I develop my thoughts about it.

<ul>
{%- for post in collections.post -%}
<li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{%- endfor -%}
</ul>