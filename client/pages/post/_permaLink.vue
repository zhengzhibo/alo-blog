<template>
  <div>
    <h2>{{ post.title }}</h2>
    <article>{{ post.content }}</article>
  </div>
</template>
<script>
export default {
    async asyncData(app) {
      let res = await app.$axios.get(`/api/post/${app.params.permaLink}`);
      return {post: res.data}; 
  },
}
</script>
<style scoped>

</style>
