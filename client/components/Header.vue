<template>
  <header>
    <nav class="navbar">
      <span class="brace">{</span>
      <nuxt-link to="/" class="navbar-item">HOME</nuxt-link>
      <nuxt-link to="/about" class="navbar-item">ABOUT</nuxt-link>
      <nuxt-link to="/posts" class="navbar-item">POSTS</nuxt-link>
      <a href="https://github.com/zhengzhibo" target="_blank" class="navbar-item">GITHUB</a>
      <span class="brace">}</span>
    </nav>
    <h1>Lonely Rail</h1>
  </header>
</template>
<script>
export default {};
</script>

<style scoped>
h1 {
  margin: 20px 0 40px 0;
}
.navbar-item {
  font-size: 1em;
  text-transform: uppercase;
  margin: 0 0.333em;
  color: #455a64;
}

.brace {
  font-size: 1.2em;
  font-weight: 500;
}

.nuxt-link-exact-active {
  font-weight: 700;
}
</style>


