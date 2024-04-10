<template>
  <section class="home-view">
    <project-item
      v-for="(item, i) in projects"
      :key="`project-${i}`"
      :data="item"
    />
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
