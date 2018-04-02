<template>
  <section class="container">
    <div>
      <h1>{{ post.title }}</h1>
      <article>{{ post.content }}</article>
    </div>
  </section>
</template>
<script>
export default {
  async asyncData(app) {
    let res = await app.$axios.get(`/api/post/${app.params.permaLink}`);
    return { post: res.data };
  }
};
</script>
<style scoped>

</style>
