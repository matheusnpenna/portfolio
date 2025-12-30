<script setup lang="ts">
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <section
    id="home"
    class="min-h-screen flex items-center pt-16"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-8">
          <div class="space-y-4">
            <div class="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <span class="text-primary">Desenvolvedor Full Stack</span>
            </div>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Olá, eu sou
              <span class="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Matheus Penna
              </span>
            </h1>
            <p class="text-xl text-muted-foreground max-w-2xl">
              Desenvolvedor web apaixonado por criar experiências digitais inovadoras e soluções tecnológicas que fazem a diferença.
            </p>
          </div>

          <div class="flex flex-wrap gap-4">
            <a
              href="#contact"
              class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:scale-105"
            >
              Entre em contato
              <ArrowRight :size="20" />
            </a>
            <a
              href="#blog"
              class="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-secondary transition-colors"
            >
              Ver Blog
            </a>
          </div>

          <div class="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              class="p-3 border border-border rounded-lg hover:bg-secondary hover:border-primary transition-all hover:scale-110"
            >
              <Github :size="24" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              class="p-3 border border-border rounded-lg hover:bg-secondary hover:border-primary transition-all hover:scale-110"
            >
              <Linkedin :size="24" />
            </a>
            <a
              href="mailto:contato@matheuspenna.com"
              class="p-3 border border-border rounded-lg hover:bg-secondary hover:border-primary transition-all hover:scale-110"
            >
              <Mail :size="24" />
            </a>
          </div>
        </div>

        <div class="relative">
          <div class="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
          <div class="relative aspect-square rounded-3xl overflow-hidden border border-border">
            <img
              src="https://images.unsplash.com/photo-1489438497675-d1a8d6e0632e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wZXIlMjBjb2Rpbmd8ZW58MXx8fHwxNjcwNTk5MTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Developer workspace"
              class="w-full h-full object-cover"
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
