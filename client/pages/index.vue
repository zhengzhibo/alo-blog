<template>
  <section class="container">
    <div>
        <nuxt-link tag="div" v-for="p in post" :key="p.id" :to="'/'+p.permaLink">
          <post :post="p"/>
        </nuxt-link>
    </div>
  </section>
</template>

<script>
import Post from "~/components/Post.vue"
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
