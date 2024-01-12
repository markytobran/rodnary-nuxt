<template>
  <section class="max-h-fit px-5 lg:px-20 2xl:px-16 pt-10">
    <h1 class="heading-h1 font-bold text-slate-100 md:pt-10 2xl:pl-8 mb-6">Videos we think you'll like</h1>
    <HomePopularArea title="Commercial" :videos="videos?.commercialVideos">
      <img src="@/assets/img/home-page/carp.webp" alt="Carp" class="h-14 w-20 md:h-20 md:w-32 -mt-5 md:-mt-8 ml-5 mb-5" />
    </HomePopularArea>
    <HomePopularArea title="Natural" :videos="videos?.naturalVideos">
      <img src="@/assets/img/home-page/roach.webp" alt="Roach" class="h-12 w-14 md:h-20 md:w-24 -mt-5 md:-mt-10 ml-5 mb-5" />
    </HomePopularArea>
    <UIObserver @intersect="$emit('showAllVideos')" />
  </section>
</template>

<script setup lang="ts">
import type { VideoData } from '@/types/videoTypes'
import { useGetVideos } from '~/composables/useVideoApi'

interface HomeTopVideos {
  naturalVideos: VideoData[]
  commercialVideos: VideoData[]
}

const videos = (await useGetVideos(`/topvideos?limit=3&skip=0`)) as unknown as HomeTopVideos
</script>
