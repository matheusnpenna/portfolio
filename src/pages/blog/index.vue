<template>
  <div class="content-view pt-8">

    <div class="grid grid-cols-3 gap-20">
      <UCard
        v-for="(post, i) in allPosts"
        :key="i"
        variant="solid"
      >
        <NuxtImg :src="post.imageUrl" />
        <h4>{{ post.title }}</h4>
  
        <template #footer>
          <small>{{ post.timeToRead }}</small>
          <div class="flex items-center justify-left flex-wrap">
            <small
              v-for="(tag, j) in getTagList(post.tags)"
              :key="j"
              class="mr-2"
            >#{{ tag }}</small>
          </div>
        </template>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: allPosts } = await useAsyncData('content-home', () => {
  return queryCollection('content').order('date', 'DESC').all()
})

useSeoMeta({
  title: 'Blog - Desenvolvimento de software',
  description: 'Os melhores conteúdos de desenvolvimento de software'
})

function getTagList(tagText: string): string[] {
  return tagText.split(',')
}
</script>

<style lang="scss" scoped>
.content-view {

}
</style>
