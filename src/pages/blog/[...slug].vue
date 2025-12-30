<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})
</script>

<template>
  <ContentRenderer
    v-if="page"
    :value="page"
  />
  <p v-else>
    Artigo não encontrado
  </p>
</template>
