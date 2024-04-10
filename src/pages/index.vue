<template>
  <section class="home-view pt-8">
    <h2 class="text-6xl text-center mb-16">Portfolio</h2>
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
.home-view {

}
</style>
