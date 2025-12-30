<template>
  <UPageHeader
    title="PENNA.DEV"
    headline="Desenvolvedor de software"
    :links="[
      {
        label: 'Início',
        to: '/',
        size: 'xl',
        variant: 'link'
      },
      {
        label: 'Conteúdo/Blog',
        to: '/blog',
        target: '_blank',
        size: 'xl',
        color: 'neutral',
        variant: 'link'
      },
      {
        label: 'Contato',
        to: '/contato',
        size: 'xl',
        color: 'neutral',
        variant: 'link'
      }
    ]"
  />
</template>

<style>
.app-header {
  border-bottom: 1px solid var(--Semantic-Neutral-048, rgba(215, 215, 215, 0.28));
}
</style>
