<template>
  <div class="mt-3 md:mt-10">
    <h3 class="font-semibold heading-h3 flex text-slate-100 mb-5 md:mb-0 2xl:pl-10">
      {{ title }}
      <slot />
    </h3>
  </div>
  <div class="grid grid-cols-1 gap-2 xl:grid-cols-3 lg:mb-28">
    <UIBaseVideoCard
      v-for="(video, index) in videos"
      :key="index"
      :video="video"
      show-description
      class="max-w-[350px] mx-auto mb-20 xl:mb-0 xl:first:mt-5 xl:last:mt-16"
    />
  </div>
</template>

<script lang="ts" setup>
import type { VideoDataPropType } from '@/types/videoTypes'

defineProps({
  videos: Array as PropType<VideoDataPropType>,
  title: String,
})
</script>
