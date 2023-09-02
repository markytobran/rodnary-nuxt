<template>
  <ClientOnly>
    <span
      @click="scrollToTop"
      class="bg-secondary-color cursor-pointer flex justify-center items-center rounded-full z-20 cursor fixed bottom-5 right-10 w-14 h-14"
    >
      <IconChevronUp width="30" height="30" />
    </span>
  </ClientOnly>
</template>

<script lang="ts" setup>
const emit = defineEmits(['scrollToTop'])
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
  emit('scrollToTop')
}
</script>
