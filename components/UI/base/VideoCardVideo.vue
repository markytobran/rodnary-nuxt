<template>
  <NuxtLink :to="to" :class="`${height} w-full rounded-lg relative z-40 overflow-hidden cursor-pointer`">
    <img :src="url" loading="lazy" draggable="false" alt="Video cover image" :class="`${height} w-full`" />
    <span
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-12 w-16 ease-in-out duration-100 bg-icon-grey hover:bg-secondary-color rounded-xl flex justify-center items-center"
    >
      <IconVideoBtn class="ml-1 h-7 w-7" color="white" />
    </span>
    <span v-if="isNewVideo" class="absolute top-5 -right-8 text-xl bg-average-pink text-black font-extrabold rotate-45 w-32 text-center"> NEW </span>
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps({
  url: {
    type: String,
    required: true,
  },
  id: {
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
