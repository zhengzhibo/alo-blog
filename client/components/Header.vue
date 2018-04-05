<template>
  <div class="header">
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <span class="title">Blog</span>
        </a>
        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample"></div>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <nuxt-link tag="a" class="button is-primary" to="/"><span>Home</span></nuxt-link>
              </p>
              <p class="control">
                <nuxt-link tag="a" class="button" to="/about"><span>About</span></nuxt-link>
              </p>
              <p class="control">
                <a class="button" href="https://github.com/zhengzhibo" target="_blank">
                  <span>Github</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>

</style>
