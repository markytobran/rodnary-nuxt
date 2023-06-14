<template>
  <div :class="props.classes">
    <img alt="loading" src="@/assets/img/loading/loading.gif" class="mb-5" />
    <span class="font-bold text-white text-xl">{{ props.text }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  classes: {
    type: String,
    required: false,
    default: 'flex flex-col justify-center items-center',
  },
})
</script>
