<template>
  <button class="text-secondary-color text-base cursor-pointer font-bold my-3 tracking-wide" @click="emit('toggleReadMore')">
    {{ readMoreText }}
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits(['toggleReadMore'])
const props = defineProps({
  readMore: {
    type: Boolean,
    required: true,
  },
})
const readMoreText = computed(() => (props?.readMore ? 'Read less' : 'Read more'))
</script>
