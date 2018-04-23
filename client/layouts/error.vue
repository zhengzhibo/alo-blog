<template>
  <div class="container">
    <h1 class="title" v-if="error.statusCode === 404">Page not found</h1>
    <h1 class="title" v-else>{{error.message}}</h1>
    <nuxt-link to="/">Home page</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "default"
};
</script>