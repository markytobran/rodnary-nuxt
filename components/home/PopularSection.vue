<template>
  <section class="max-h-fit pl-3 md:pl-36 xl:pl-20 pb-20">
    <h1 class="pt-5 text-2xl md:text-3xl font-bold text-slate-100 md:mt-5">Videos we think you'll like</h1>
    <HomePopularArea title="Commercial" :videos="videos.commercialVideos">
      <img src="@/assets/img/home-page/carp.webp" class="h-14 w-20 md:h-20 md:w-32" />
    </HomePopularArea>
    <HomePopularArea title="Natural" :videos="videos.naturalVideos">
      <img src="@/assets/img/home-page/roach.webp" class="h-12 w-14 md:h-20 md:w-24" />
    </HomePopularArea>
  </section>
</template>

<script setup lang="ts">
import type { VideoData } from '@/types/videoTypes'
import { useVideoFetch } from '~/composables/useApiFetch'

interface HomeTopVideos {
  data: {
    naturalVideos: VideoData[]
    commercialVideos: VideoData[]
  }
}

const { data: videos } = (await useVideoFetch(`/topvideos?limit=3&skip=0`)) as unknown as HomeTopVideos
</script>
