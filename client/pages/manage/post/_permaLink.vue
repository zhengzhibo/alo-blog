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
          <button class="button is-link" @click="saveOrUpdatePost">Save</button>
        </div>
        <div class="control">
          <button class="button is-text">Cancel</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData(app) {
    if (app.params.permaLink) {
      let res = await app.$axios.get(`/api/post/${app.params.permaLink}`);
      return { post: res.data };
    } else {
      return { post: {} };
    }
  },
  methods: {
    saveOrUpdatePost: (params) => {
      alert(this.$route.params.permaLink)
    }
  }

};
</script>

<style scoped>

</style>
