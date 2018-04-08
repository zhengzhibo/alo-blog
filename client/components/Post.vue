<template>
  <section class="hero">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        {{post.title}}
      </h1>
      <div class="content">
        {{post.content}}
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  props: ['post'],
}
</script>

<style>
</style>

