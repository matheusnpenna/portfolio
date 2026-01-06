<script setup lang="ts">
import { motion } from 'motion-v'
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Instagram } from 'lucide-vue-next'
import useMailAPI from '~/composable/api/mail'
import useNotification from '~/composable/useNotification'

const { sendMail } = useMailAPI()
const notification = useNotification()

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})
const status = ref<'idle' | 'success' | 'error'>('idle')
const isLoading = ref(false)

async function handleSubmit() {
  isLoading.value = true

  try {
    await sendMail({
      from: formData.email,
      to: 'dev.matheuspenna@gmail.com',
      subject: `[Contato do site] ${formData.subject}`,
      data: formData
    })

    notification.success({
      title: 'Contato enviado',
      description: 'Sua mensagem foi enviada com sucesso! Entrarei em contato em breve.'
    })
  } catch (e) {
    notification.error({
      title: 'Erro ao enviar contato',
      description: 'Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde',
      error: e as Error
    })
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <section
    id="contact"
    class="py-24 relative"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :viewport="{ once: true }"
        :transition="{ duration: 0.6 }"
        class="text-center mb-16"
      >
        <span class="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
          Contato
        </span>
        <h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Vamos trabalhar juntos?
        </h2>
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
          Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades para fazer parte de suas visões.
        </p>
      </motion.div>

      <div class="grid lg:grid-cols-5 gap-12">
        <motion.div
          :initial="{ opacity: 0, x: -20 }"
          :while-in-view="{ opacity: 1, x: 0 }"
          :viewport="{ once: true }"
          :transition="{ duration: 0.6 }"
          class="lg:col-span-2 space-y-8"
        >
          <div class="bg-secondary/40 backdrop-blur-sm border border-border rounded-2xl p-8 space-y-6">
            <div>
              <h3 class="text-2xl font-bold mb-6">
                Informações de Contato
              </h3>
              <p class="text-muted-foreground mb-8">
                Preencha o formulário ou entre em contato através dos canais abaixo.
              </p>
            </div>

            <div class="space-y-6">
              <a
                href="mailto:dev.matheuspenna@gmail.com"
                target="_blank"
                class="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/60 transition-colors group"
              >
                <div class="p-3 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail :size="24" />
                </div>
                <div>
                  <h4 class="font-semibold mb-1">Email</h4>
                  <p class="text-sm text-muted-foreground">dev.matheuspenna@gmail.com</p>
                </div>
              </a>
              <a
                href="https://www.instagram.com/penna.dev/"
                target="_blank"
                class="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/60 transition-colors group"
              >
                <div class="p-3 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                  <Instagram :size="24" />
                </div>
                <div>
                  <h4 class="font-semibold mb-1">Instagram</h4>
                  <p class="text-sm text-muted-foreground">@penna.dev</p>
                </div>
              </a>

              <div class="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/60 transition-colors group">
                <div class="p-3 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                  <MapPin :size="24" />
                </div>
                <div>
                  <h4 class="font-semibold mb-1">
                    Localização
                  </h4>
                  <p class="text-sm text-muted-foreground">
                    Bahia, Brasil
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            :initial="{ opacity: 0, y: 20 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :viewport="{ once: true }"
            :transition="{ duration: 0.6, delay: 0.2 }"
            class="bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 rounded-2xl p-6"
          >
            <div class="flex items-center gap-3 mb-3">
              <div class="w-3 h-3 bg-accent rounded-full animate-pulse" />
              <span class="font-semibold">Disponível para projetos</span>
            </div>
            <p class="text-sm text-muted-foreground">
              Aberto a novos desafios e oportunidades.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          :initial="{ opacity: 0, x: 20 }"
          :while-in-view="{ opacity: 1, x: 0 }"
          :viewport="{ once: true }"
          :transition="{ duration: 0.6 }"
          class="lg:col-span-3"
        >
          <form
            class="bg-secondary/40 backdrop-blur-sm border border-border rounded-2xl p-8 space-y-6"
            @submit.prevent="handleSubmit"
          >
            <motion.div
              v-if="status === 'success'"
              :initial="{ opacity: 0, y: -10 }"
              :animate="{ opacity: 1, y: 0 }"
              class="flex items-center gap-3 p-4 bg-accent/10 border border-accent/30 rounded-xl text-accent"
            >
              <CheckCircle2 :size="24" />
              <p class="font-medium">
                Mensagem enviada com sucesso! Entrarei em contato em breve.
              </p>
            </motion.div>

            <motion.div
              v-else-if="status === 'error'"
              :initial="{ opacity: 0, y: -10 }"
              :animate="{ opacity: 1, y: 0 }"
              class="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-500"
            >
              <AlertCircle :size="24" />
              <p class="font-medium">
                Erro ao enviar mensagem. Tente novamente.
              </p>
            </motion.div>

            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label
                  htmlFor="name"
                  class="text-sm font-medium"
                >
                  Nome *
                </label>
                <input
                  id="name"
                  v-model="formData.name"
                  type="text"
                  name="name"
                  required
                  class="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Seu nome completo"
                >
              </div>

              <div class="space-y-2">
                <label
                  htmlFor="email"
                  class="text-sm font-medium"
                >
                  Email *
                </label>
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  name="email"
                  required
                  class="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="seu@email.com"
                >
              </div>
            </div>

            <div class="space-y-2">
              <label
                htmlFor="subject"
                class="text-sm font-medium"
              >
                Assunto *
              </label>
              <input
                id="subject"
                v-model="formData.subject"
                type="text"
                name="subject"
                required
                class="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="Como posso ajudar?"
              >
            </div>

            <div class="space-y-2">
              <label
                htmlFor="message"
                class="text-sm font-medium"
              >
                Mensagem *
              </label>
              <textarea
                id="message"
                v-model="formData.message"
                name="message"
                required
                :rows="6"
                class="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                placeholder="Conte-me sobre seu projeto ou ideia ou vaga..."
              />
            </div>

            <motion.button
              type="submit"
              :disabled="isLoading"
              :while-hover="{ scale: 1.02 }"
              :while-tap="{ scale: 0.98 }"
              class="w-full px-8 py-4 bg-gradient-to-r from-primary to-accent cursor-pointer text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <template v-if="isLoading">
                <div class="cursor-not-allowed w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Enviando...
              </template>
              <template v-else>
                Enviar Mensagem
                <Send :size="20" />
              </template>
            </motion.button>

            <p class="text-xs text-muted-foreground text-center">
              Seus dados estão seguros e nunca serão compartilhados com terceiros.
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  </section>
</template>
