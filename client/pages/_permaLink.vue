<template>
  <section class="container">
    <div>
      <post :post="post"/>
    </div>
  </section>
</template>
<script>
import Post from "~/components/Post.vue";
export default {
  components: {
    Post
  },
  async asyncData(app) {
    let res = await app.$axios.get(`/api/post/${app.params.permaLink}`);
    return { post: res.data };
  }
};
</script>
<style scoped>

</style>
