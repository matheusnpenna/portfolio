<template>
  <main class="default-template bg-slate-900 px-8">
    <AppHeader />
    <slot />
    <AppFooter />
  </main>
</template>

<script setup>
import AppFooter from '~/components/AppFooter.vue'
import AppHeader from '~/components/AppHeader.vue'
</script>

<style>
.default-template {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
}
</style>
