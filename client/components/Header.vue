<template>
  <header>
    <nav class="navbar">
      <nuxt-link to="/" class="navbar-item">HOME</nuxt-link>
      <nuxt-link to="/about" class="navbar-item">ABOUT</nuxt-link>
      <nuxt-link to="/posts" class="navbar-item">POSTS</nuxt-link>
      <a href="https://github.com/zhengzhibo" target="_blank" class="navbar-item">GITHUB</a>
    </nav>
    <h1>Blog</h1>
  </header>
</template>
<script>
export default {};
</script>

<style scoped>
.navbar-item {
  font-size: 1em;
  text-transform: uppercase;
  margin-right: 0.666666666em;
  color: #455a64;
}

.nuxt-link-exact-active {
  font-weight: 700;
}
</style>


