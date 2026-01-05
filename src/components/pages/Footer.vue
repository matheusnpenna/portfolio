<script setup lang="ts">
import { Github, Linkedin, Mail, Heart } from 'lucide-vue-next'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer
    id="contact"
    class="border-t border-border bg-secondary/20"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div class="space-y-4">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg" />
            <span class="font-bold text-xl">Matheus Penna</span>
          </div>
          <p class="text-sm text-muted-foreground">
            Desenvolvedor Full Stack especializado em criar experiências web modernas e inovadoras.
          </p>
        </div>

        <div class="space-y-4">
          <h4 class="font-bold">
            Navegação
          </h4>
          <nav class="flex flex-col space-y-2">
            <a
              href="#home"
              class="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Início
            </a>
            <a
              href="#about"
              class="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Sobre
            </a>
            <a
              href="#skills"
              class="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Habilidades
            </a>
            <a
              href="#blog"
              class="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Blog
            </a>
            <a
              href="#portfolio"
              class="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Portfolio
            </a>
          </nav>
        </div>

        <div class="space-y-4">
          <h4 class="font-bold">
            Social
          </h4>
          <nav class="flex flex-col space-y-2">
            <a
              href="https://github.com/matheusnpenna"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="linkedin.com/in/matheuspenna"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:dev.matheusnpenna@gmail.com"
              class="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Email
            </a>
          </nav>
        </div>

        <div class="space-y-4">
          <h4 class="font-bold">
            Contato
          </h4>
          <div class="space-y-3">
            <a
              href="mailto:dev.matheusnpenna@gmail.com"
              class="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail :size="18" />
              <span>dev.matheusnpenna@gmail.com</span>
            </a>
            <div class="flex gap-3 pt-2">
              <a
                href="https://github.com/matheusnpenna"
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 border border-border rounded-lg hover:bg-secondary hover:border-primary transition-all hover:scale-110"
              >
                <Github :size="20" />
              </a>
              <a
                href="https://linkedin.com/in/matheuspenna"
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 border border-border rounded-lg hover:bg-secondary hover:border-primary transition-all hover:scale-110"
              >
                <Linkedin :size="20" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-sm text-muted-foreground">
          © {{ currentYear }} Matheus Penna. Todos os direitos reservados.
        </p>
        <p class="text-sm text-muted-foreground flex items-center gap-2">
          Feito com <Heart
            :size="16"
            class-name="text-primary fill-primary"
          /> usando Vue, Nuxt, Tailwind CSS
        </p>
      </div>
    </div>
  </footer>
</template>
