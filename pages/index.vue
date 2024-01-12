<template>
  <HomeMainImage />
  <UIObserver @intersect="showAllVideos = true" />
  <HomePopularSection />
  <LazyHomeAllVideos v-if="showAllVideos" />
</template>

<script setup lang="ts">
const showAllVideos = ref(false)
useHead({
  title: 'Rodnary',
})
</script>
