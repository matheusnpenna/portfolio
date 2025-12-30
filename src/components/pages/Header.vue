<script setup lang="ts">
import { Menu, X } from 'lucide-vue-next'

const isMenuOpen = ref(false)
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex-shrink-0">
          <a
            href="#home"
            class="flex items-center gap-2"
          >
            <div class="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg" />
            <span class="font-bold text-xl">Matheus Penna</span>
          </a>
        </div>

        <nav class="hidden md:flex items-center gap-8">
          <a
            href="#home"
            class="text-foreground hover:text-primary transition-colors"
          >
            Início
          </a>
          <a
            href="#about"
            class="text-foreground hover:text-primary transition-colors"
          >
            Sobre
          </a>
          <a
            href="#skills"
            class="text-foreground hover:text-primary transition-colors"
          >
            Habilidades
          </a>
          <a
            href="#blog"
            class="text-foreground hover:text-primary transition-colors"
          >
            Blog
          </a>
          <a
            href="#contact"
            class="text-foreground hover:text-primary transition-colors"
          >
            Contato
          </a>
        </nav>

        <button
          class="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          @click="isMenuOpen = !isMenuOpen"
        >
          <X
            v-if="isMenuOpen"
            :size="24"
          />
          <Menu
            v-else
            :size="24"
          />
        </button>
      </div>

      <nav
        v-if="isMenuOpen"
        class="md:hidden py-4 space-y-4"
      >
        <a
          href="#home"
          class="block text-foreground hover:text-primary transition-colors"
          @click="isMenuOpen = false"
        >
          Início
        </a>
        <a
          href="#about"
          class="block text-foreground hover:text-primary transition-colors"
          @click="isMenuOpen = false"
        >
          Sobre
        </a>
        <a
          href="#skills"
          class="block text-foreground hover:text-primary transition-colors"
          @click="isMenuOpen = false"
        >
          Habilidades
        </a>
        <a
          href="#blog"
          class="block text-foreground hover:text-primary transition-colors"
          @click="isMenuOpen = false"
        >
          Blog
        </a>
        <a
          href="#contact"
          class="block text-foreground hover:text-primary transition-colors"
          @click="isMenuOpen = false"
        >
          Contato
        </a>
      </nav>
    </div>
  </header>
</template>
