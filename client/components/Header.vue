<template>
  <header>
    <nav class="navbar">
      <span class="brace">{</span>
      <nuxt-link to="/" :class="activeClass('index')">HOME</nuxt-link>
      <nuxt-link to="/about" :class="activeClass('about')">ABOUT</nuxt-link>
      <nuxt-link to="/tags" :class="activeClass('tags')">TAGS</nuxt-link>
      <a href="https://github.com/zhengzhibo" target="_blank">GITHUB</a>
      <span class="brace">}</span>
    </nav>
    <h1>Lonely Rail</h1>
  </header>
</template>
<script>
export default {
  methods: {
    activeClass(name) {
      if (this.$route.name == name) {
        return "active";
      }
    }
  }
};
</script>

<style scoped>
h1 {
  margin: 20px 0 40px 0;
}
.navbar a {
  font-size: 1em;
  text-transform: uppercase;
  margin: 0 0.333em;
  color: #455a64;
}

.navbar a.active {
  font-weight: 700;
}

.brace {
  font-size: 1.2em;
  font-weight: 500;
}
</style>


