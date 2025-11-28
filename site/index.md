---
layout: base.njk
title: Peter Briggs
eleventyExcludeFromCollections: true
---
# Peter Briggs
I'm a student in Seattle, WA.

## Accounts
Here are some profiles around the internet that I control:

* [pwbriggs on GitHub](https://github.com/pwbriggs/)
* [pwbriggs on OpenStreetMap](https://www.openstreetmap.org/user/pwbriggs)
* Any others found under [*aspe:keyoxide.org:WI3ZLJSSNA2I6TMXZXA3OC2EYQ*](https://keyoxide.org/aspe:keyoxide.org:WI3ZLJSSNA2I6TMXZXA3OC2EYQ)

## Writing
I'm experimenting with writing content here. Here are some pages:

<ul>
{%- for page in collections.page -%}
<li><a href="{{ page.url }}">{{ page.data.title }}</a></li>
{%- endfor -%}
</ul>

## Contact
Thoughts? I'd love to hear them! You can email me at [contact@email.peter.briggs.seattle.wa.us](mailto:contact@email.peter.briggs.seattle.wa.us). Thanks!
