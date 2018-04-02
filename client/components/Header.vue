<template>
  <div class="header">
    <nuxt-link tag="span" to="/" class="logo">Blog</nuxt-link>
    <div class="nav">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
      <a href="http://github.com" target="_blank">GITHUB</a>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.logo {
  font-size: 3rem;
}
.nav {
  float: right;
}
.nav a {
  line-height: 3rem;
  font-size: 2rem;
  margin-right: 1rem;
  color: black;
  text-decoration: none;
}
</style>
