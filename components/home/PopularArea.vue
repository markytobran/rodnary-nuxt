<template>
  <div class="mt-6">
    <h3 class="text-xl md:text-2xl font-semibold flex text-slate-100 mb-10 md:mb-0 2xl:pl-10">
      {{ title }}
      <slot />
    </h3>
  </div>
  <div class="grid grid-cols-1 gap-2 lg:grid-cols-3 mb-10 md:mb-16">
    <UIBaseVideoCard
      v-for="(video, index) in videos"
      :key="index"
      :video="video"
      :show-description="true"
      class="max-w-[350px] mx-auto mb-20 xl:mb-0 xl:first:mt-8 xl:last:mt-12"
    />
  </div>
</template>

<script lang="ts" setup>
import { VideoDataPropType } from '@/types/videoTypes'
const props = defineProps({
  videos: Array as PropType<VideoDataPropType>,
  title: String,
})
</script>
