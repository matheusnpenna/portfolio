<template>
  <section
    id="portfolio"
    class="portfolio-component pt-8"
  >
    <h2 class="text-6xl text-center mb-8">
      Portfolio
    </h2>
    <p class="text-md text-center mb-16">
      Confira abaixo alguns dos projetos feitos ao longo do tempo, bem como projetos que contribuí.
    </p>
    <div
      v-if="loading"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
    >
      <skeleton-project />
      <skeleton-project />
      <skeleton-project />
      <skeleton-project />
      <skeleton-project />
      <skeleton-project />
      <skeleton-project />
      <skeleton-project />
      <skeleton-project />
      <skeleton-project />
    </div>
    <div
      v-else
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
    >
      <ProjectItem
        v-for="(item, i) in projects"
        :key="`project-${i}`"
        :data="item"
        class="mx-auto"
      />
    </div>
  </section>
</template>

<script setup>
import SkeletonProject from '~/components/SkeletonProject.vue'
import ProjectItem from '~/components/ProjectItem.vue'
import { useProjectsApi } from '~/composable/api/projects'

const { getProjects } = useProjectsApi()
const projects = reactive([])
const loading = ref(false)
onMounted(() => {
  loading.value = true
  getProjects().then((data) => {
    projects.push(...data)
  }).finally(() => {
    loading.value = false
  })
})
</script>
