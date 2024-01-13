<template>
  <HomeMainImage />
  <HomePopularSection @showAllVideos="setAllVideos" />
  <LazyHomeAllVideos v-if="showAllVideos" />
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { getSessionItem, setSessionItem } from '~/composables/useSessionStorage'
const showAllVideos: Ref<string> = ref('false')

onMounted(() => {
  if (getSessionItem('showAllVideos')) showAllVideos.value = getSessionItem('showAllVideos')
})

useHead({
  title: 'Rodnary',
  meta: [{ name: 'description', content: 'Rodnary home page' }],
})

function setAllVideos() {
  setSessionItem('showAllVideos', 'true')
  showAllVideos.value = 'true'
}
</script>
