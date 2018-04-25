<template>
  <section class="section">
    <div v-for="p in post" :key="p.id">
      <post :post="p" />
    </div>
    <p>{{post.length}} Posts</p>
  </section>
</template>

<script>
import Post from "~/components/Post.vue";
export default {
  async asyncData({ app }) {
    let res = await app.$axios.get("/api/post");
    return { post: res.data };
  },
  components: {
    Post
  },
  methods: {}
};
</script>

<style>

</style>
