<template>
  <section class="px-5">
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
  </section>
</template>

<script lang="ts" setup>
import type { Ref } from 'vue'
import { VideoData } from '@/types/videoTypes'
import { useVideosFetch } from '~/composables/useVideoApiFetch'
const videos: Ref<VideoData[] | null> = ref(null)
const route = useRoute()
const titleKey: Ref<string> = ref('')
const LIMIT = 12
const skip = ref(0)
const loading = ref(false)
const showNoResults = ref(false)

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

const title = computed(() => titleData[titleKey.value as keyof TitleData])

const links = [
  { name: 'Commercial', path: '/categories?venue=commercial' },
  { name: 'Natural', path: '/categories?venue=natural' },
  { name: 'River', path: '/categories?water=river' },
  { name: 'Feeder', path: '/categories?fishing=feeder' },
  { name: 'Float', path: '/categories?fishing=float' },
]

const setTitleKey = (value: string) => {
  titleKey.value = value.toLowerCase()
}

const toggleLoading = () => (loading.value = !loading.value)

const resetSkip = () => (skip.value = 0)

const intersected = async () => {
  if (!showNoResults.value) {
    toggleLoading()
    const [key, value] = Object.entries(route.query)[0]
    skip.value += 12
    const data = await useVideosFetch(`/categories/${key}/${value}?limit=${LIMIT}&skip=${skip.value}`)

    if (data.value && data.value.length) {
      videos.value = [...videos.value, ...data.value]
    } else {
      showNoResults.value = true
    }
    toggleLoading()
  }
}

watch(
  route,
  async ({ query }) => {
    showNoResults.value = false
    resetSkip()
    toggleLoading()

    const [key, value] = Object.entries(query)[0]

    //Set title
    setTitleKey(value as string)

    const data = await useVideosFetch(`/categories/${key}/${value}?limit=${LIMIT}&skip=0`)
    videos.value = data.value
    toggleLoading()
  },
  { deep: true, immediate: true }
)
</script>
