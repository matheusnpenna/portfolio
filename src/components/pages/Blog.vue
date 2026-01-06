<script setup lang="ts">
import { Calendar, Clock, ArrowRight } from 'lucide-vue-next'

const { data: allPosts } = await useAsyncData('content-home', () => {
  return queryCollection('content').order('date', 'DESC').all()
})

const featuredPost = allPosts.value?.find(post => post.featured)
const regularPosts = allPosts.value?.filter(post => !post.featured)
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
                :src="featuredPost.imageUrl"
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
                  {{ featuredPost.description }}
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
                  :href="`/blog/${featuredPost.slug}`"
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
                :src="post.imageUrl"
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
                {{ post.description }}
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
                :href="`/blog/${post.slug}`"
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
