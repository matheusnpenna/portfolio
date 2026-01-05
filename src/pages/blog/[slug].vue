<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.params.slug).first()
})
useSeoMeta({
  title: page.value?.title || 'Blog - Desenvolvimento de software',
  description: page.value?.description || 'Os melhores conteúdos de desenvolvimento de software'
})
</script>

<template>
  <div class="container">
    <ContentRenderer
      v-if="page"
      :value="page"
    />
    <p v-else class="py-48 bg-red">
      Artigo não encontrado: {{ route.params.slug }}
    </p>
  </div>
</template>
