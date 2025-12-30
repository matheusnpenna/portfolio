<template>
  <a
    :href="`#${anchorId}`"
    class="btn btn-floating-anchor text-white flex flex-col items-center"
  >
    <span class="font-normal text-white">{{ label }}</span>
    <svg
      stroke="currentColor"
      fill="currentColor"
      height="2em"
      width="2em"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
    >
      <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
    </svg>
  </a>
</template>

<script setup lang="ts">
interface AnchorButtonProps {
  anchorId: string
  label?: string
}
defineProps<AnchorButtonProps>()
</script>

<style lang="scss" scoped>
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {transform: translateX(-50%) translateY(-30px);}
    60% {transform: translateX(-50%) translateY(-15px);}
}
.btn-floating-anchor {
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s ease infinite;

  @media screen and (max-width: 991px) {
    position: relative;
  }
}
</style>
