---
title: All Volumes
layout: page
permalink: /volume/
---

<div class="volume-list grid-x" id="volume-archive">
    {% for volume in site.data.volumes %}
    <div class="volume">
        <span class="volume-number">{{ forloop.index }}</span>
        <a href="{{ site.baseurl }}/volume/{{ volume.title }}">
        <img src="/assets/img/{{ volume.img_dir }}/cover-bw.jpg" alt="Cover for Volume {{ volume.volume }} {{ volume.title }}">
        <img src="/assets/img/{{ volume.img_dir }}/cover-color.jpg" alt="Cover for Volume {{ volume.volume }} {{ volume.title }}">
        </a>
    </div>
    {% endfor %}
</div>
