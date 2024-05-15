<template>
  <NuxtLink :to="to" :class="`${height} w-full rounded-lg relative z-40 overflow-hidden cursor-pointer block`">
    <img :src="url" loading="lazy" draggable="false" alt="Video cover image" :class="`${height} w-full`" />
    <span v-if="isNewVideo" class="absolute top-5 -right-8 text-xl bg-average-pink text-black font-extrabold rotate-45 w-32 text-center"> NEW </span>
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps({
  url: {
    type: String,
    required: true,
  },
  isNewVideo: {
    type: Boolean,
    required: false,
    default: false,
  },
  height: {
    type: String,
    required: false,
    default: 'h-44',
  },
  to: {
    type: String,
    required: true,
  },
})
</script>
