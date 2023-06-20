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
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-14 mt-4 mb-24">
          <UIBaseVideoCard v-for="video in videos" :video="video" />
        </div>
        <UILoader v-if="loading" text="Loading videos" />
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
const loading = ref(false)

const toggleLoading = () => (loading.value = !loading.value)

watch(
  route,
  async ({ query }) => {
    const { q } = query
    toggleLoading()
    const data = await useVideosFetch(`/search?q=` + q)

    videos.value = data.value
    toggleLoading()
  },
  { deep: true, immediate: true }
)
</script>
