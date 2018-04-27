<template>
  <section class="container">
    <div>
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input v-model="post.title" class="input" type="text">
        </div>
      </div>

      <div class="field">
        <label class="label">Perma Link</label>
        <div class="control">
          <input v-model="post.permaLink" class="input" type="text">
        </div>
      </div>

      <div class="field">
        <label class="label">Content</label>
        <div class="control">
          <textarea v-model="post.content" class="textarea"></textarea>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button" @click="saveOrUpdatePost">Save</button>
          <button class="button" @click="backToList">Cancel</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  middleware: "auth",
  data() {
    return {
      post: {
        title: "",
        permaLink: "",
        content: ""
      }
    };
  },
  async asyncData(app) {
    if (app.params.permaLink) {
      let { data } = await app.$axios.get(`/api/post/${app.params.permaLink}`);
      if (data) {
        return { post: data };
      }
    }
  },
  head() {
    return {
      title: "manage"
    };
  },
  methods: {
    async saveOrUpdatePost() {
      this.$axios.defaults.headers.common["Authorization"] =
        "Bearer " + this.$store.state.token;
      let res;
      if (this.post.id) {
        res = await this.$axios.put(
          `/api/admin/post/${this.post.id}`,
          this.post
        );
        alert("modify success");
      } else {
        res = await this.$axios.post(`/api/admin/post/`, this.post);
        alert("add success");
        this.$router.push("/manage/post");
      }
    },
    backToList({ app }) {
      this.$router.push("/manage/post");
    }
  }
};
</script>

<style scoped>

</style>
