<template>
  <div class="mt-6">
    <h3 class="text-xl md:text-2xl font-semibold flex text-slate-100 mb-10 md:mb-0">
      {{ title }}
      <slot />
    </h3>
  </div>
  <div class="flex flex-col xl:flex-row xl:justify-between w-full mb-10 md:mb-40 mx-auto">
    <UIBaseVideoCard
      v-for="(video, index) in videos"
      :key="index"
      :video="video"
      :show-description="true"
      class="w-80 md:w-96 xl:w-84 mx-auto mb-20 xl:mb-0 xl:first:mt-8 xl:last:mt-12"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  videos: Object,
  title: String,
})
</script>
