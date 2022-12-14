<template>
  <section class="min-h-screen md:px-36 xl:px-20">
    <div>
      <h1 class="font-bold text-lg text-slate-100 mb-5 md:mb-10 text-xl md:text-2xl">Popular Videos</h1>
      <div>
        <UITitleSlider title="All Videos" url="/search" />
        <UIBaseSlider :videos="allVideos" @fetch-video="fetchAllVideo" class="mt-24 md:mt-20" />
      </div>
    </div>
    <div class="-mt-44">
      <h1 class="font-bold text-lg text-slate-100 text-xl md:text-2xl">Popular Videos By Category</h1>
      <div class="mt-10">
        <UITitleSlider title="Natural Venue Fishing" url="/categories/venue/natural" />
        <UIBaseSlider :videos="naturalVideos" @fetch-video="fetchNaturalVideos" class="mt-24 md:mt-20 -mb-32" />
      </div>

      <div class="-mt-44">
        <UITitleSlider title="Commercial Venue Fishing" url="/categories/venue/commercial" />
        <UIBaseSlider :videos="commercialVideos" @fetch-video="fetchCommercialVideos" class="mt-24 md:mt-20" />
      </div>
      <div class="-mt-44">
        <UITitleSlider title="River Fishing" url="/categories/water/river" />
        <UIBaseSlider :videos="riverVideos" @fetch-video="fetchRiverVideos" class="mt-24 md:mt-20" />
      </div>
      <div class="-mt-44">
        <UITitleSlider title="Feeder Fishing" url="/categories/fishing/feeder" />
        <UIBaseSlider :videos="feederVideos" @fetch-video="fetchFeederVideos" class="mt-24 md:mt-20" />
      </div>
      <div class="-mt-44">
        <UITitleSlider title="Float Fishing" url="/categories/fishing/feeder" />
        <UIBaseSlider :videos="floatVideos" @fetch-video="fetchFloatVideos" class="mt-24 md:mt-20" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { API, VideoDataType } from '@/types/videoTypes.ts'
import { useVideoFetch } from '~/composables/useApiFetch'
const allVideos: Ref<VideoDataType | unknown> = ref()
const commercialVideos: Ref<VideoDataType | unknown> = ref()
const naturalVideos: Ref<VideoDataType | unknown> = ref()
const riverVideos: Ref<VideoDataType | unknown> = ref()
const feederVideos: Ref<VideoDataType | unknown> = ref()
const floatVideos: Ref<VideoDataType | unknown> = ref()

interface limitAndSkip {
  limit: number
  skip: number
}

interface HomePageVideos {
  all: VideoDataType[]
  natural: VideoDataType[]
  commercial: VideoDataType[]
  river: VideoDataType[]
  feeder: VideoDataType[]
  float: VideoDataType[]
}

const { data } = await useVideoFetch(`/allvideos`)

const { all, natural, commercial, river, feeder, float } = (data.value as unknown) as HomePageVideos
allVideos.value = all
commercialVideos.value = commercial
naturalVideos.value = natural
riverVideos.value = river
feederVideos.value = feeder
floatVideos.value = float

async function fetchAllVideo({ limit, skip }: limitAndSkip) {
  const { data } = await useVideoFetch(`?limit=${limit}&skip=${skip}`)
  allVideos.value = allVideos.value instanceof Array ? allVideos.value.concat(data.value) : allVideos.value
}

async function fetchNaturalVideos({ limit, skip }: limitAndSkip) {
  const { data } = await useVideoFetch(`/categories/venue/natural?limit=${limit}&skip=${skip}`)
  naturalVideos.value = naturalVideos.value instanceof Array ? naturalVideos.value.concat(data.value) : naturalVideos.value
}

async function fetchCommercialVideos({ limit, skip }: limitAndSkip) {
  const { data } = await useVideoFetch(`/categories/venue/commercial?limit=${limit}&skip=${skip}`)
  commercialVideos.value = commercialVideos.value instanceof Array ? commercialVideos.value.concat(data.value) : commercialVideos.value
}

async function fetchRiverVideos({ limit, skip }: limitAndSkip) {
  const { data } = await useVideoFetch(`/categories/water/river?limit=${limit}&skip=${skip}`)
  riverVideos.value = riverVideos.value instanceof Array ? riverVideos.value.concat(data.value) : riverVideos.value
}

async function fetchFeederVideos({ limit, skip }: limitAndSkip) {
  const { data } = await useVideoFetch(`/categories/fishing/feeder?limit=${limit}&skip=${skip}`)
  feederVideos.value = feederVideos.value instanceof Array ? feederVideos.value.concat(data.value) : feederVideos.value
}

async function fetchFloatVideos({ limit, skip }: limitAndSkip) {
  const { data } = await useVideoFetch(`/categories/fishing/float?limit=${limit}&skip=${skip}`)
  floatVideos.value = floatVideos.value instanceof Array ? floatVideos.value.concat(data.value) : floatVideos.value
}
</script>
