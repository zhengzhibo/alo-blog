<template>
  <div>
    <h2>{{post.title}}</h2>
    <div>
      {{post.content}}
    </div>
  </div>
</template>

<script>
export default {
  props: ['post'],
}
</script>

<style>
</style>

