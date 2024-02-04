<template>
  <vueper-slides
    class="no-shadow pointer-events-none hover:z-50 mt-20"
    :visible-slides="4"
    :touchable="false"
    :bullets="false"
    slide-multiple
    fixed-height="410px"
    :gap="2"
    disable-arrows-on-edges
    :breakpoints="breakpoints"
    @next="incrementLimitAndSkip"
  >
    <template #arrow-left>
      <span
        class="-mt-32 -ml-7 md:-mt-24 md:ml-10 pointer-events-auto bg-secondary-color text-white text-3xl rounded-full h-12 w-12 flex justify-center items-center"
      >
        <img src="@/assets/img/icons/arrow.svg" alt="rodnary-logo" class="w-7 -rotate-90 mr-1" loading="lazy" />
      </span>
    </template>

    <template #arrow-right>
      <span
        class="-mt-32 -mr-7 md:-mt-24 md:mr-10 pointer-events-auto bg-secondary-color text-white text-3xl rounded-full h-12 w-12 flex justify-center items-center"
      >
        <img src="@/assets/img/icons/arrow.svg" alt="rodnary-logo" class="w-7 rotate-90 ml-1" loading="lazy" />
      </span>
    </template>
    <vueper-slide v-for="video in videos" :key="video._id">
      <template #content>
        <UIBaseVideoCard :video="video" class="pointer-events-auto" />
      </template>
    </vueper-slide>
  </vueper-slides>
</template>

<script lang="ts" setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import type { VideoDataPropType } from '@/types/videoTypes'
import 'vueperslides/dist/vueperslides.css'

const emit = defineEmits(['fetchVideo'])

const LIMIT = 6
const skip = ref(0)

const incrementLimitAndSkip = () => {
  skip.value += 6
  emit('fetchVideo', {
    limit: LIMIT,
    skip: skip.value,
  })
}

defineProps({
  videos: {
    type: Array as PropType<VideoDataPropType>,
    default: [],
    required: true,
  },
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
