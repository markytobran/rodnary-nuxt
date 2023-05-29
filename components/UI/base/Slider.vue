<template>
  <vueper-slides
    class="no-shadow"
    fixed-height="280px"
    :visible-slides="3"
    :breakpoints="breakpoints"
    autoplay
    :gap="1"
    :touchable="false"
    :arrows="false"
  >
    <vueper-slide v-for="img in data">
      <template #content>
        <NuxtLink :to="img.path" class="cursor-pointer rounded-md">
          <img loading="lazy" :src="img.imgUrl" class="pointer-events-none rounded-md h-full w-full" />
        </NuxtLink>
      </template>
    </vueper-slide>
  </vueper-slides>
</template>

<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

const props = defineProps({
  data: Array,
})

const breakpoints = {
  1300: {
    visibleSlides: 4,
  },
  992: {
    visibleSlides: 3,
  },
  600: {
    visibleSlides: 1,
  },
}
</script>

<style scoped>
:deep(.vueperslides__bullet .default) {
  @apply transition;
  @apply duration-150;
  @apply bg-secondary-color;
  @apply border-none;
  @apply w-3;
  @apply h-3;
}

:deep(.vueperslides__bullet--active .default) {
  @apply bg-white;
}
</style>
