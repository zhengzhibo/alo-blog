<template>
  <section class="container">
    <div>
      <p class="error" v-if="formError">{{ formError }}</p>
      <input type="text" v-model="username" class="username">
      <input type="password" v-model="password" class="password">
      <button @click="login">login</button>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: "Login"
    };
  },
  data() {
    return {
      username: "",
      password: "",
      formError: ""
    };
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch("login", {
          username: this.username,
          password: this.password
        });
        this.username = "";
        this.username = "";
        this.formError = null;
        this.$router.push({ path: `/manage/post/` });
      } catch (e) {
        this.formError = e.message;
      }
    }
  }
};
</script>

<style scoped>

</style>
