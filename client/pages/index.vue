<template>
  <section class="section">
    <div v-for="p in post" :key="p.id">
      <post :post="p" />
    </div>
    <span>{{post.length}} Posts</span>
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
