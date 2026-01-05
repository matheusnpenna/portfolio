<script setup lang="ts">
const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'JavaScript',
      'HTML5/CSS3',
      'Redux',
      'Vue.js',
      'Nuxt'
    ]
  },
  {
    title: 'Backend',
    skills: [
      'Node.js',
      'Express',
      'NestJS',
      'PostgreSQL',
      'MongoDB',
      'REST APIs',
      'GraphQL',
      'Prisma'
    ]
  },
  {
    title: 'DevOps & Tools',
    skills: [
      'Git',
      'Docker',
      'CI/CD',
      'AWS',
      'Vercel',
      'Linux',
      'Jest',
      'Webpack'
    ]
  }
]
</script>

<template>
  <section
    id="skills"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="space-y-12">
        <div class="space-y-4 text-center max-w-3xl mx-auto">
          <h2 class="text-3xl sm:text-4xl font-bold">
            Tecnologias & <span class="text-primary">Habilidades</span>
          </h2>
          <p class="text-lg text-muted-foreground">
            Experiência com as principais tecnologias e frameworks do mercado
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="(category, index) in skillCategories"
            :key="index"
            class="p-8 bg-card border border-border rounded-xl space-y-6"
          >
            <h3 class="text-xl font-bold text-primary">
              {{ category.title }}
            </h3>
            <div class="flex flex-wrap gap-3">
              <span
                v-for="(skill, skillIndex) in category.skills"
                :key="skillIndex"
                class="px-4 py-2 bg-secondary border border-border rounded-lg text-sm hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
