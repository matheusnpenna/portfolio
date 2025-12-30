<script setup lang="ts">
import { Calendar, Clock, ArrowRight } from 'lucide-vue-next'

const blogPosts = [
  {
    id: 1,
    title: 'Como criar aplicações React escaláveis com TypeScript',
    excerpt: 'Aprenda as melhores práticas para estruturar projetos React com TypeScript, garantindo escalabilidade e manutenibilidade.',
    category: 'React',
    date: '15 de Dezembro, 2024',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1653387319597-84bde7e5368e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMHByb2dyYW1taW5nfGVufDF8fHx8MTc2NzA1OTkyMHww&ixlib=rb-4.1.0&q=80&w=1080',
    featured: true
  },
  {
    id: 2,
    title: 'Node.js: Performance e otimização de APIs',
    excerpt: 'Descubra técnicas avançadas para otimizar suas APIs Node.js e melhorar a performance das suas aplicações.',
    category: 'Node.js',
    date: '10 de Dezembro, 2024',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1687603917313-ccae1a289a9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXZhc2NyaXB0JTIwY29kZXxlbnwxfHx8fDE3NjcwNTk5MjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: false
  },
  {
    id: 3,
    title: 'Tailwind CSS: Design System na prática',
    excerpt: 'Como construir um design system eficiente usando Tailwind CSS e componentes reutilizáveis.',
    category: 'CSS',
    date: '5 de Dezembro, 2024',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc2Njk1NjE3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    featured: false
  },
  {
    id: 4,
    title: 'Deploy automatizado com CI/CD',
    excerpt: 'Guia completo para configurar pipelines de CI/CD e automatizar seus deploys.',
    category: 'DevOps',
    date: '1 de Dezembro, 2024',
    readTime: '12 min',
    image: 'https://images.unsplash.com/photo-1570841512628-a93d7bc5aaf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwYmxvZ3xlbnwxfHx8fDE3NjY5NzQ3NDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: false
  },
  {
    id: 5,
    title: 'Clean Architecture em projetos modernos',
    excerpt: 'Entenda os princípios da Clean Architecture e como aplicá-los em projetos web modernos.',
    category: 'Arquitetura',
    date: '28 de Novembro, 2024',
    readTime: '15 min',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY3MDMyMDI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: false
  },
  {
    id: 6,
    title: 'Next.js 14: Novidades e recursos',
    excerpt: 'Explore os novos recursos do Next.js 14 e como utilizá-los em seus projetos.',
    category: 'Next.js',
    date: '25 de Novembro, 2024',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc2Njk1NjE3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    featured: false
  }
]
const featuredPost = blogPosts.find(post => post.featured)
const regularPosts = blogPosts.filter(post => !post.featured)
</script>

<template>
  <section
    id="blog"
    class="py-24 bg-secondary/30"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="space-y-12">
        <div class="space-y-4 text-center max-w-3xl mx-auto">
          <h2 class="text-3xl sm:text-4xl font-bold">
            Blog & <span class="text-primary">Artigos</span>
          </h2>
          <p class="text-lg text-muted-foreground">
            Compartilhando conhecimento sobre desenvolvimento web, tecnologia e boas práticas
          </p>
        </div>

        <div
          v-if="featuredPost"
          class="group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/50 transition-all"
        >
          <div class="grid lg:grid-cols-2 gap-0">
            <div class="relative h-64 lg:h-auto overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
              <img
                :src="featuredPost.image"
                :alt="featuredPost.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              >
              <div class="absolute top-4 left-4 z-20">
                <span class="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm">
                  Destaque
                </span>
              </div>
            </div>
            <div class="p-8 lg:p-12 flex flex-col justify-center space-y-6">
              <div class="space-y-4">
                <span class="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm border border-accent/20">
                  {{ featuredPost.category }}
                </span>
                <h3 class="text-2xl lg:text-3xl font-bold group-hover:text-primary transition-colors">
                  {{ featuredPost.title }}
                </h3>
                <p class="text-muted-foreground">
                  {{ featuredPost.excerpt }}
                </p>
              </div>
              <div class="flex items-center gap-6 text-sm text-muted-foreground">
                <div class="flex items-center gap-2">
                  <Calendar :size="16" />
                  <span>{{ featuredPost.date }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <Clock :size="16" />
                  <span>{{ featuredPost.readTime }}</span>
                </div>
              </div>
              <div>
                <a
                  :href="`#post-${featuredPost.id}`"
                  class="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all"
                >
                  Ler artigo completo
                  <ArrowRight :size="20" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="post in regularPosts"
            :key="post.id"
            class="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all hover:scale-[1.02]"
          >
            <div class="relative h-48 overflow-hidden">
              <img
                :src="post.image"
                :alt="post.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              >
              <div class="absolute top-4 right-4">
                <span class="px-3 py-1 bg-accent/90 text-accent-foreground rounded-full text-sm">
                  {{ post.category }}
                </span>
              </div>
            </div>
            <div class="p-6 space-y-4">
              <h3 class="text-lg font-bold group-hover:text-primary transition-colors line-clamp-2">
                {{ post.title }}
              </h3>
              <p class="text-sm text-muted-foreground line-clamp-3">
                {{ post.excerpt }}
              </p>
              <div class="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border">
                <div class="flex items-center gap-1">
                  <Calendar :size="14" />
                  <span>{{ post.date }}</span>
                </div>
                <div class="flex items-center gap-1">
                  <Clock :size="14" />
                  <span>{{ post.readTime }}</span>
                </div>
              </div>
              <a
                :href="`#post-${post.id}`"
                class="inline-flex items-center gap-2 text-sm text-primary hover:gap-4 transition-all"
              >
                Ler mais
                <ArrowRight :size="16" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
