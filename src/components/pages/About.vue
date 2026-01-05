<template>
  <section
    id="about"
    class="bg-secondary/30"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="space-y-12">
        <div class="space-y-4 text-center max-w-3xl mx-auto">
          <h2 class="text-3xl sm:text-4xl font-bold">
            Sobre <span class="text-primary">Mim</span>
          </h2>
          <p class="text-lg text-muted-foreground">
            Desenvolvedor web com paixão por tecnologia e inovação. Especializado em criar aplicações web modernas, escaláveis e de alta performance. Sempre buscando aprender novas tecnologias e compartilhar conhecimento através de artigos e projetos open source.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(item, index) in highlights"
            :key="index"
            class="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all hover:scale-105 group"
          >
            <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <component
                :is="item.icon"
                class="text-primary"
                :size="24"
              />
            </div>
            <h3 class="mb-2">
              {{ item.title }}
            </h3>
            <p class="text-sm text-muted-foreground">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Code2, Rocket, Users, Zap } from 'lucide-vue-next'

const highlights = [
  {
    icon: Code2,
    title: 'Desenvolvimento Full Stack',
    description: 'Especialista em React, Node.js e tecnologias modernas para web'
  },
  {
    icon: Rocket,
    title: 'Entrega Ágil',
    description: 'Foco em soluções eficientes com metodologias ágeis'
  },
  {
    icon: Users,
    title: 'Trabalho em Equipe',
    description: 'Experiência colaborando com times multidisciplinares'
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Otimização e boas práticas para aplicações rápidas'
  }
]
</script>
