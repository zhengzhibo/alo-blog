<template>
    <section class="section">
        <div v-for="p in post" :key="p.id">
            <span>{{p.title}}</span>
            <i @click="editPost(p.permaLink)" class="far fa-edit"></i>
            <i @click="deletePost(p.id)" class="far fa-trash-alt"></i>
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
  methods: {
    editPost: function(permaLink) {
      this.$router.push({path: `/manage/post/${permaLink}`});
    },

    deletePost: async function(id) {
      this.$axios.defaults.headers.common['Authorization'] = "Bearer " + this.$store.state.token;
      try {
        let {data} = await this.$axios.delete(`/api/admin/post/${id}`);
        if (data.success) {
          let res = await this.$axios.get("/api/post");
          this.$set(this, 'post', res.data);
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
};
</script>