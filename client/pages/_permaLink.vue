<template>
  <section class="container">
    <div>
      <div class="post-info">
        <span>{{postDateStr}}</span>
        <h1>{{post.title}}</h1>
      </div>

      <article>
        {{post.content}}
      </article>
    </div>
  </section>
</template>
<script>
export default {
  async asyncData({ app, error, params }) {
    let res = await app.$axios.get(`/api/post/${params.permaLink}`);

    if (!res.data) {
      error({ statusCode: 404, message: "This page could not be found" });
    }

    return { post: res.data };
  },
  head() {
    return {
      title: this.post.title
    };
  },
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
.post-info h1 {
  margin: 0.3em 0 1em 0;
}

.post-info span {
  color: #ccc;
}
</style>
