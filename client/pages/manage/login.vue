<template>
  <section class="container">
    <div>
        <input type="text" v-model="form.username" class="username">
        <input type="password" v-model="form.password" class="password">
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
      form : {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    async login() {
      if (this.form.username && this.form.password) {
        let res = await this.$axios.post(`/api/login`, this.form);
      }
    }
  }
};
</script>

<style scoped>

</style>
