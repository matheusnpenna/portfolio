<template>
  <header class="app-header flex justify-center py-6">
    <div class="w-full flex items-center justify-between">
      <NuxtLink to="/" class="logo">penna.dev</NuxtLink>
      <div class="flex items-center">
        <NuxtLink class="mr-8" to="/">Início</NuxtLink>
        <NuxtLink class="" to="/contato">Contato</NuxtLink>
      </div>
    </div>
  </header>
</template>
<style>
.app-header {
  border-bottom: 1px solid var(--Semantic-Neutral-048, rgba(215, 215, 215, 0.28));
}
</style>
