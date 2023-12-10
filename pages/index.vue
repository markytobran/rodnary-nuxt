<template>
  <HomeMainImage />
  <HomePopularSection @showAllVideos="showAllVideos = true" />
  <LazyHomeAllVideos v-if="showAllVideos" />
</template>

<script setup lang="ts">
const showAllVideos = ref(false)
useHead({
  title: 'Rodnary',
})
</script>
