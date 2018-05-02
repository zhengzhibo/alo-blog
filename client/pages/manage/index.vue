<template>
  <section class="section">

    <p>
      <nuxt-link tag="b" to="/manage/post">{{post.length}}</nuxt-link> Posts</p>

  </section>
</template>

<script>
import Post from "~/components/Post.vue";
export default {
  async asyncData({ app }) {
    let res = await app.$axios.get("/api/post");
    return { post: res.data };
  },
  middleware: "auth",
  methods: {}
};
</script>