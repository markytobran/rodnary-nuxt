<template>
  <section class="px-5 relative">
    <div class="w-full lg:w-9/12 mx-auto mt-10 overflow-hidden rounded-xl card-shadow">
      <div class="relative">
        <img src="~/assets/img/category-banner.webp" class="w-full h-60 md:h-[450px]" />
      </div>
      <div class="h-32 bg-primary-color-600 flex justify-center items-center">
        <ul class="flex flex-wrap justify-center gap-5 md:gap-10 text-white font-bold text-lg">
          <li v-for="link in links">
            <NuxtLink
              :to="link.path"
              class="px-4 py-2 text-xs md:text-lg rounded-xl"
              :class="titleKey === link.name.toLowerCase() ? 'bg-secondary-color' : 'bg-primary-color-300'"
            >
              {{ link.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-full lg:w-9/12 mx-auto mt-10 lg:mt-20 mb-56">
      <div class="ml-2 mt-6">
        <h2 class="font-bold heading-h2 text-slate-100 tracking-wide">{{ title }}</h2>
      </div>
      <ClientOnly>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-4 mb-24">
          <UIBaseVideoCard v-for="video in videos" :video="video" />
        </div>
        <UILoader v-if="loading" text="Loading videos" />
        <UINoResults v-if="showNoResults" text="End of videos" />
        <UIObserver @intersect="intersected" />
      </ClientOnly>
    </div>
    <UIScrollUp v-if="showScrollUp" @scrollToTop="showScrollUp = false" />
  </section>
</template>

<script lang="ts" setup>
import type { Ref } from 'vue'
import type { VideoData } from '@/types/videoTypes'

const { $api } = useNuxtApp()
const videoRepo = videoRepository($api)

const videos: Ref<VideoData[] | null> = ref(null)
const route = useRoute()
const titleKey: Ref<string> = ref('')
const LIMIT = 12
const skip = ref(0)
const loading = ref(false)
const showNoResults = ref(false)
const showScrollUp: Ref<boolean> = ref(false)

interface TitleData {
  commercial: string
  natural: string
  river: string
  feeder: string
  float: string
}

const titleData = {
  commercial: 'Commercial Venue Fishing',
  natural: 'Natural Venue Fishing',
  river: 'River Fishing',
  feeder: 'Feeder Fishing',
  float: 'Float Fishing',
}

useHead({
  title: 'Category Page | Rodnary',
  meta: [
    {
      name: 'description',
      content:
        'Welcome to our category page! Here, you can explore a variety of fascinating videos about fishing, ranging from tips and tricks to amazing catches. Discover something new and exciting today!',
    },
  ],
})

const links = [
  { name: 'Commercial', path: '/categories?venue=commercial' },
  { name: 'Natural', path: '/categories?venue=natural' },
  { name: 'River', path: '/categories?water=river' },
  { name: 'Feeder', path: '/categories?fishing=feeder' },
  { name: 'Float', path: '/categories?fishing=float' },
]

// Computed properties
const title = computed(() => titleData[titleKey.value as keyof TitleData])

// Methods
const setTitleKey = (value: string) => {
  titleKey.value = value.toLowerCase()
}

const toggleLoading = () => (loading.value = !loading.value)

const resetSkip = () => (skip.value = 0)

const intersected = async () => {
  if (!showNoResults.value && !loading.value) {
    try {
      toggleLoading()
      showScrollUp.value = true
      const [key, value] = Object.entries(route.query)[0]
      skip.value += LIMIT

      const data = await videoRepo.getCategoryVideos(key, value as string, { limit: LIMIT, skip: skip.value })

      if (data && data.length) {
        videos.value = [...(videos.value ?? []), ...data]
      } else {
        showNoResults.value = true
      }
    } catch (error) {
      console.error('Error fetching category videos:', error)
      showNoResults.value = true
    } finally {
      toggleLoading()
    }
  }
}

watch(
  () => route.query,
  async (query) => {
    try {
      showNoResults.value = false
      resetSkip()
      toggleLoading()

      const [key, value] = Object.entries(query)[0]

      // Set title
      setTitleKey(value as string)

      const data = await videoRepo.getCategoryVideos(key, value as string, { limit: LIMIT, skip: skip.value })

      videos.value = data
    } catch (error) {
      console.error('Error fetching category videos:', error)
      showNoResults.value = true
    } finally {
      toggleLoading()
    }
  },
  { deep: true, immediate: true }
)
</script>
