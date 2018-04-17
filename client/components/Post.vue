<template>
  <article class="list-item">
    <div class="post-info">
      <time :datetime="postDate.toISOString()">{{postDateStr}}</time>
      <h3 class="list-item-title">
        <nuxt-link :to="'/'+ post.permaLink"> {{post.title}} </nuxt-link>
      </h3>
    </div>
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
.post-info {
  margin-bottom: 0.5em;
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

.post-info h1 {
  margin: 0.3em 0 1em 0;
}

.post-info time {
  color: #ccc;
}
</style>

