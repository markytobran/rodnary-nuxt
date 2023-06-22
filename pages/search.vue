<template>
  <section class="px-5">
    <div class="w-full lg:w-9/12 mx-auto mt-10 overflow-hidden rounded-xl">
      <SearchInput />
    </div>
    <div class="w-full lg:w-9/12 mx-auto mt-10 lg:mt-20 mb-56">
      <div class="ml-2 mt-6">
        <h2 class="font-bold heading-h2 text-slate-100 tracking-wide">Results</h2>
      </div>
      <ClientOnly>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-4 mb-24">
          <UIBaseVideoCard v-for="video in videos" :video="video" />
        </div>
        <UILoader v-if="loading" text="Loading videos" />
        <UINoResults v-if="showNoResults" text="No results found" />
      </ClientOnly>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { Ref } from 'vue'
import { VideoData } from '@/types/videoTypes'
import { useVideosFetch } from '~/composables/useVideoApiFetch'
import VideoSliderClient from '~~/components/UI/base/VideoSlider.client.vue'
const videos: Ref<VideoData[] | null> = ref(null)
const route = useRoute()
const router = useRouter()
const loading = ref(false)
const showNoResults = ref(false)

const toggleLoading = () => (loading.value = !loading.value)

const redirectToSearchWithQuery = () => {
  if (!route.query.q) {
    router.push('/search?q=')
  }
}

//Redirect
onBeforeMount(redirectToSearchWithQuery)

watch(
  route,
  async ({ query }) => {
    showNoResults.value = false
    const { q } = query
    toggleLoading()
    const data = await useVideosFetch(`/search?q=` + q)

    if (data.value.length) {
      videos.value = data.value
    } else {
      videos.value = []
      showNoResults.value = true
    }
    toggleLoading()
  },
  { deep: true, immediate: true }
)
</script>
