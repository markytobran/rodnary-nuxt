<template>
  <section class="min-h-screen px-5 md:px-10 lg:pl-24 lg:pr-16 overflow-x-hidden">
    <div>
      <h2 class="font-bold text-slate-100 mb-2 md:mb-10 heading-h2">Popular Videos</h2>
      <div>
        <UITitleSlider title="All Videos" url="/search?q=" />
        <UIBaseVideoSlider :videos="allVideos" @fetch-video="fetchAllVideo" class="mt-24 md:mt-20" />
      </div>
    </div>

    <div class="-mt-44 mb-36">
      <h3 class="font-bold heading-h3 text-slate-100 md:mb-8">Popular Videos By Category</h3>
      <div class="mt-2">
        <UITitleSlider title="Natural Fishing" url="/categories?venue=natural" />
        <UIBaseVideoSlider :videos="naturalVideos" @fetch-video="fetchNaturalVideos" class="mt-24 md:mt-20 -mb-32" />
      </div>

      <div class="-mt-44">
        <UITitleSlider title="Commercial Fishing" url="/categories?venue=commercial" />
        <UIBaseVideoSlider :videos="commercialVideos" @fetch-video="fetchCommercialVideos" class="mt-24 md:mt-20" />
      </div>
      <div class="-mt-44">
        <UITitleSlider title="River Fishing" url="/categories?water=river" />
        <UIBaseVideoSlider :videos="riverVideos" @fetch-video="fetchRiverVideos" class="mt-24 md:mt-20" />
      </div>
      <div class="-mt-44">
        <UITitleSlider title="Feeder Fishing" url="/categories?fishing=feeder" />
        <UIBaseVideoSlider :videos="feederVideos" @fetch-video="fetchFeederVideos" class="mt-24 md:mt-20" />
      </div>
      <div class="-mt-44">
        <UITitleSlider title="Float Fishing" url="/categories?fishing=float" />
        <UIBaseVideoSlider :videos="floatVideos" @fetch-video="fetchFloatVideos" class="mt-24 md:mt-20" />
      </div>
      <UIBaseSlider class="-mt-44" :data="homePageSliderData" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { homePageSliderData } from '../../constants/imgUrls'
import type { VideoData } from '@/types/videoTypes'
import { VideoAPI } from '@/types/videoTypes'
import { useGetAllVideos } from '~/composables/useVideoApi'
const { $api } = useNuxtApp()
const videoRepo = videoRepository($api)
const allVideos: Ref<VideoData[] | null> = ref(null)
const commercialVideos: Ref<VideoData[] | null> = ref(null)
const naturalVideos: Ref<VideoData[] | null> = ref(null)
const riverVideos: Ref<VideoData[] | null> = ref(null)
const feederVideos: Ref<VideoData[] | null> = ref(null)
const floatVideos: Ref<VideoData[] | null> = ref(null)

export interface limitAndSkip {
  limit: number
  skip: number
}

interface HomePageVideos {
  all: VideoData[]
  natural: VideoData[]
  commercial: VideoData[]
  river: VideoData[]
  feeder: VideoData[]
  float: VideoData[]
}

const data = await useGetAllVideos({ limit: VideoAPI.LIMIT, skip: VideoAPI.SKIP })

const { all, natural, commercial, river, feeder, float } = data.value as unknown as HomePageVideos
allVideos.value = all
commercialVideos.value = commercial
naturalVideos.value = natural
riverVideos.value = river
feederVideos.value = feeder
floatVideos.value = float

async function fetchAllVideo(query: limitAndSkip) {
  try {
    const videos = await videoRepo.getVideos(query)
    allVideos.value = allVideos.value ? allVideos.value.concat(videos) : allVideos.value
  } catch (e) {
    allVideos.value = []
  }
}

async function fetchNaturalVideos(query: limitAndSkip) {
  try {
    const videos = await videoRepo.getCategoryVideos('venue', 'natural', query)
    naturalVideos.value = naturalVideos.value ? naturalVideos.value.concat(videos) : naturalVideos.value
  } catch (e) {
    naturalVideos.value = []
  }
}

async function fetchCommercialVideos(query: limitAndSkip) {
  try {
    const videos = await videoRepo.getCategoryVideos('venue', 'commercial', query)
    commercialVideos.value = commercialVideos.value ? commercialVideos.value.concat(videos) : commercialVideos.value
  } catch (e) {
    commercialVideos.value = []
  }
}

async function fetchRiverVideos(query: limitAndSkip) {
  try {
    const videos = await videoRepo.getCategoryVideos('water', 'river', query)
    riverVideos.value = riverVideos.value ? riverVideos.value.concat(videos) : riverVideos.value
  } catch (e) {
    riverVideos.value = []
  }
}

async function fetchFeederVideos(query: limitAndSkip) {
  try {
    const videos = await videoRepo.getCategoryVideos('fishing', 'feeder', query)
    feederVideos.value = feederVideos.value ? feederVideos.value.concat(videos) : feederVideos.value
  } catch (e) {
    feederVideos.value = []
  }
}

async function fetchFloatVideos(query: limitAndSkip) {
  try {
    const videos = await videoRepo.getCategoryVideos('fishing', 'float', query)
    floatVideos.value = floatVideos.value ? floatVideos.value.concat(videos) : floatVideos.value
  } catch (e) {
    floatVideos.value = []
  }
}
</script>
