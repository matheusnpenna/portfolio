<template>
  <section
    id="portfolio"
    class="py-24 portfolio-component"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-6xl text-center mb-8">
        Portfolio
      </h2>
      <p class="text-md text-center mb-16">
        Confira abaixo alguns dos projetos feitos ao longo do tempo, bem como projetos em que contribuí.
      </p>
      <div
        v-if="loading"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
      >
        <SkeletonProject />
        <SkeletonProject />
        <SkeletonProject />
        <SkeletonProject />
        <SkeletonProject />
        <SkeletonProject />
        <SkeletonProject />
        <SkeletonProject />
        <SkeletonProject />
        <SkeletonProject />
      </div>
      <div
        v-else
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <div
          v-for="(item, i) in projects"
          :key="`project-${i}`"
          class="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all hover:scale-[1.02]"
        >
          <div class="relative h-48 overflow-hidden">
            <img
              :src="item.picture"
              :alt="item.name"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            >
          </div>
          <div class="p-6 space-y-4">
            <h3 class="text-lg font-bold group-hover:text-primary transition-colors line-clamp-2">
              {{ item.name }}
            </h3>
            <div class="flex flex-wrap gap-3">
              <span
                v-for="(tag, tagIndex) in item.tags"
                :key="tagIndex"
                class="px-4 py-2 bg-secondary border border-border rounded-lg text-xs hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default"
              >
                #{{ tag }}
              </span>
            </div>
            <a
              v-if="item.url"
              :href="item.url"
              class="inline-flex items-center gap-2 text-sm text-primary hover:gap-4 transition-all"
            >
              Acessar
              <ArrowRight :size="16" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import SkeletonProject from '~/components/SkeletonProject.vue'
import { useProjectsApi } from '~/composable/api/projects'
import type { TProject } from '~/types'

const { getProjects } = useProjectsApi()
const projects = reactive<TProject[]>([])
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
