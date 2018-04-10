<template>
  <article class="list-item">
    <div class="meta">
      <span>
        <span class="screen-reader">Posted on </span>
        <time :datetime="postDate.toISOString()">{{postDateStr}}</time>
      </span>
    </div>
    <header class="list-item-header">
      <h3 class="list-item-title">
        <nuxt-link :to="'/'+ post.permaLink"> {{post.title}} </nuxt-link>
      </h3>
    </header>
  </article>
</template>

<script>
export default {
  props: ["post"],
  computed: {
    postDate: function() {
      return new Date(this.post.date);
    },
    postDateStr: function() {
      return (
        this.postDate.getFullYear() +
        "/" +
        (this.postDate.getMonth() + 1) +
        "/" +
        this.postDate.getDate()
      );
    }
  }
};
</script>

<style scoped>
.screen-reader {
  width: 1px;
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  clip: rect(1px, 1px, 1px, 1px);
  -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);
  clip-path: polygon(0 0, 0 0, 0 0, 0 0);
}

.list-item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-flow: row nowrap;
  flex-flow: row nowrap;
  -webkit-box-align: baseline;
  -ms-flex-align: baseline;
  align-items: baseline;
  margin-bottom: 0.8333333333333334em;
}

.list-item .meta {
  -ms-flex-preferred-size: 6em;
  flex-basis: 6em;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  color: #37474f;
}

.list-item-title > a {
  color: #666;
  text-decoration: underline;
  font-size: 1.3em;
  font-weight: 400;
}

.list-item-title > a:hover {
  text-decoration: none;
}
</style>

