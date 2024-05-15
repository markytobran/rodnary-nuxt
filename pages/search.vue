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
import { useLoading } from '~/composables/useLoading'

const { $api } = useNuxtApp()
const videoRepo = videoRepository($api)
const { isLoading, toggleLoading } = useLoading()

const videos: Ref<VideoData[] | null> = ref(null)
const showNoResults: Ref<boolean> = ref(false)

const LIMIT = 12
const skip: Ref<number> = ref(0)
const text: Ref<string> = ref('No results found')
const showScrollUp: Ref<boolean> = ref(false)

useHead({
  title: 'Search | Rodnary',
  meta: [{ name: 'description', content: '' }],
})

const route = useRoute()
const searchTerm = computed(() => {
  return route.query.q
})

const router = useRouter()
const redirectToSearchWithQuery = () => {
  if (!searchTerm.value) {
    router.push('/search?q=')
  }
}

function resetValues() {
  showNoResults.value = false
  text.value = 'No results found'
  skip.value = 0
}

function setShowNoResults(val: boolean) {
  showNoResults.value = val
}

//Redirect
onBeforeMount(redirectToSearchWithQuery)

const intersected = async () => {
  if (!showNoResults.value && !isLoading.value) {
    showScrollUp.value = true
    toggleLoading()

    try {
      skip.value += LIMIT
      const data = await videoRepo.getSearchVideos(searchTerm.value as string, { limit: LIMIT, skip: skip.value })

      if (data.length) {
        videos.value = [...(videos.value ?? []), ...data]
        setShowNoResults(false)
      } else {
        text.value = 'End of videos'
        setShowNoResults(true)
      }
    } catch (error) {
      console.error('Error fetching more videos:', error)
    } finally {
      toggleLoading()
    }
  }
}

watch(
  () => route.query.q,
  async (q) => {
    resetValues()
    toggleLoading()

    try {
      const data = await videoRepo.getSearchVideos(q as string, { limit: LIMIT, skip: skip.value })

      if (data.length) {
        videos.value = data
        setShowNoResults(false)
      } else {
        videos.value = []
        setShowNoResults(true)
      }
      skip.value += LIMIT
    } catch (error) {
      console.error('Error fetching search videos:', error)
    } finally {
      toggleLoading()
    }
  },
  { deep: true, immediate: true }
)
</script>
