<template>
  <section class="max-h-fit px-5 lg:pl-20 2xl:px-16 pb-12">
    <h1 class="text-2xl md:text-3xl font-bold text-slate-100 md:pt-10 2xl:pl-8">Videos we think you'll like</h1>
    <HomePopularArea title="Commercial" :videos="videos?.commercialVideos">
      <img src="@/assets/img/home-page/carp.webp" class="h-14 w-20 md:h-20 md:w-32" />
    </HomePopularArea>
    <HomePopularArea title="Natural" :videos="videos?.naturalVideos">
      <img src="@/assets/img/home-page/roach.webp" class="h-12 w-14 md:h-20 md:w-24" />
    </HomePopularArea>
  </section>
</template>

<script setup lang="ts">
import type { VideoData } from '@/types/videoTypes'
import { useVideosFetch } from '~/composables/useVideoApiFetch'

interface HomeTopVideos {
  naturalVideos: VideoData[]
  commercialVideos: VideoData[]
}

const videos = (await useVideosFetch(`/topvideos?limit=3&skip=0`)) as unknown as HomeTopVideos
</script>
