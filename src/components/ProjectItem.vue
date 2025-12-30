<template>
  <a
    :href="data.url"
    class="project-item-component max-w-sm rounded overflow-hidden"
    target="_blank"
  >
    <img
      class="w-full"
      :src="data.picture"
      alt="Sunset in the mountains"
    >
    <div class="py-3">
      <div class="font-bold text-md mb-2">{{ data.name }}</div>
      <p class="text-gray-700 text-base">
        {{ data.descripition }}
      </p>
    </div>
    <div class="pt-3 pb-2">
      <span
        v-for="(tag, i) in data.tags"
        :key="`tag-${data.name}-${i}`"
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2"
      >
        #{{ tag }}
      </span>
    </div>
  </a>
</template>

<script setup lang="ts">
import type { ProjectType } from '~/types'

defineProps<{ data: ProjectType }>()
</script>

<style lang="scss" scoped>
.project-item-component {
  transition: all .3s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }

  img {
    border-radius: 4px;
  }
}
</style>
