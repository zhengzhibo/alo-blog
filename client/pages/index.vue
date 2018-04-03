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

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
</style>
