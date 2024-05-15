<template>
  <HomeMainImage />
  <HomePopularSection />
  <UIObserver @intersect="setAllVideos" />
  <LazyHomeAllVideos v-if="showAllVideos" />
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { getSessionItem, setSessionItem } from '~/composables/useSessionStorage'
const showAllVideos: Ref<string> = ref('false')

useHead({
  title: 'Home | Rodnary',
  meta: [{ name: 'description', content: 'Rodnary home page' }],
})

onMounted(() => {
  const displayVideos = getSessionItem('showAllVideos')
  if (displayVideos) showAllVideos.value = displayVideos
})

function setAllVideos() {
  setSessionItem('showAllVideos', 'true')
  showAllVideos.value = 'true'
}
</script>
