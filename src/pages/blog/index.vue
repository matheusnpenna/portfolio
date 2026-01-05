<template>
  <div class="content-view pt-8">
    <Blog />
  </div>
</template>

<script setup lang="ts">
import Blog from '~/components/pages/Blog.vue'

useSeoMeta({
  title: 'Blog - Desenvolvimento de software',
  description: 'Os melhores conteúdos de desenvolvimento de software'
})
</script>

<style lang="scss" scoped>
.content-view {

}
</style>
