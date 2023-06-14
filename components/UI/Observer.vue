<template>
  <div ref="element" />
</template>

<script setup>
const emit = defineEmits(['intersect'])
const element = ref(null)
let observer = null

const props = defineProps({
  options: {
    type: Object,
    default: {},
    required: false,
  },
})

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    if (entry && entry.isIntersecting) {
      emit('intersect')
    }
  }, props.options)

  observer.observe(element.value)
})

onUnmounted(() => {
  observer.disconnect()
})
</script>
