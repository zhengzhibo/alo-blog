<template>
  <div class="app">
    <Header/>
    <nuxt/>
    <Footer/>
  </div>
</template>
<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Header,
    Footer
  }
};
</script>
<style>
.app {
  width: 100%;
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
  padding: 2em 1em;
  font-size: 1em;
}
</style>
