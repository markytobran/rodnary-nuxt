<template>
  <section class="px-5 relative">
    <div class="w-full lg:w-9/12 mx-auto mt-10 overflow-hidden rounded-xl">
      <SearchInput :isLoading="isLoading" />
    </div>
    <div class="w-full lg:w-9/12 mx-auto mt-10 lg:mt-20 mb-56">
      <div class="ml-2 mt-6">
        <h2 class="font-bold heading-h2 text-slate-100 tracking-wide">Results</h2>
      </div>
      <ClientOnly>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-4 mb-24">
          <UIBaseVideoCard v-for="video in videos" :video="video" />
        </div>
        <UILoader v-if="isLoading" text="Loading videos" />
        <UINoResults v-if="showNoResults" :text="text" />
        <UIObserver @intersect="intersected" />
      </ClientOnly>
    </div>
    <UIScrollUp v-if="showScrollUp" @scrollToTop="showScrollUp = false" />
  </section>
</template>

<script lang="ts" setup>
import type { Ref } from 'vue'
import type { VideoData } from '@/types/videoTypes'
import { useGetVideos } from '~/composables/useVideoApi'
const videos: Ref<VideoData[] | null> = ref(null)
const route = useRoute()
const router = useRouter()
const isLoading: Ref<boolean> = ref(false)
const showNoResults: Ref<boolean> = ref(false)
const LIMIT = 12
const skip: Ref<number> = ref(0)
const text: Ref<string> = ref('No results found')
const showScrollUp: Ref<boolean> = ref(false)

const redirectToSearchWithQuery = () => {
  if (!route.query.q) {
    router.push('/search?q=')
  }
}

const resetValues = () => {
  showNoResults.value = false
  text.value = 'No results found'
  skip.value = 0
}

//Redirect
onBeforeMount(redirectToSearchWithQuery)

const intersected = async () => {
  if (!showNoResults.value) {
    showScrollUp.value = true
    isLoading.value = true
    const { q } = route.query
    skip.value += 12
    const data = await useGetVideos(`/search?q=${q}&limit=${LIMIT}&skip=${skip.value}`)

    if (data.value && data.value.length) {
      videos.value = [...(videos.value ?? []), ...data.value]
    } else {
      text.value = 'End of videos'
      showNoResults.value = true
    }
    isLoading.value = false
  }
}

watch(
  () => route.query.q,
  async (q) => {
    resetValues()
    isLoading.value = true

    const data = await useGetVideos(`/search?q=${q}&limit=${LIMIT}&skip=${skip.value}`)

    if (data.value && data.value.length) {
      videos.value = data.value
    } else {
      videos.value = []
      showNoResults.value = true
    }
    skip.value += 12
    isLoading.value = false
  },
  { deep: true, immediate: true }
)
</script>
