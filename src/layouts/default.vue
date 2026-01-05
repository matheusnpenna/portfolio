<template>
  <div className="dark min-h-screen bg-background text-foreground">
    <Header />
    <main class="py-24">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/pages/Header.vue'
import Footer from '~/components/pages/Footer.vue'
</script>
