<template>
  <section class="portfolio-component pt-8">
    <h2 class="text-6xl text-center mb-8">Portfolio</h2>
    <p class="text-md text-center mb-16">
      Confira abaixo alguns dos projetos feitos ao longo do tempo
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
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
  import ProjectItem from "@/components/ProjectItem.vue";
  import { useProjectsApi } from "@/composable/api/projects"
  const { getProjects } = useProjectsApi();
  const projects = reactive([]);
  onMounted(() => {
    getProjects().then(data => {
      projects.push(...data);
    })
  })
</script>
<style lang="scss" scoped>
.portfolio-component {
}
</style>
