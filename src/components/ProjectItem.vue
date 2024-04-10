<template>
  <div class="project-item-component">
    {{ props.data.name }}
  </div>
</template>
<script setup>
  const props = defineProps({
    data: Object
  })

  const { data } = toRefs(props);
</script>
