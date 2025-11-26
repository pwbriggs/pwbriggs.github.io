---
title: Posts
eleventyExcludeFromCollections: true
---

The idea is that posts are thought I have that I'm not necessarily super committed to. More time-based, or fleeting, perhaps. Or something. We'll see. But I feel like there's a distinction to be drawn between [thoughts](/thoughts) and whatever these turn out to be.

<ul>
{%- for post in collections.post -%}
<li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{%- endfor -%}
</ul>