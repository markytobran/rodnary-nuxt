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
        <UITitleSlider title="Natural Venue Fishing" url="/categories?venue=natural" />
        <UIBaseVideoSlider :videos="naturalVideos" @fetch-video="fetchNaturalVideos" class="mt-24 md:mt-20 -mb-32" />
      </div>

      <div class="-mt-44">
        <UITitleSlider title="Commercial Venue Fishing" url="/categories?venue=commercial" />
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
import { homePageSliderData } from '../../utils/imgUrls'
import type { VideoData } from '@/types/videoTypes'
import { useGetVideos } from '~/composables/useVideoApi'
const allVideos: Ref<VideoData[] | null> = ref(null)
const commercialVideos: Ref<VideoData[] | null> = ref(null)
const naturalVideos: Ref<VideoData[] | null> = ref(null)
const riverVideos: Ref<VideoData[] | null> = ref(null)
const feederVideos: Ref<VideoData[] | null> = ref(null)
const floatVideos: Ref<VideoData[] | null> = ref(null)

interface limitAndSkip {
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

const data = await useGetVideos(`/allvideos?limit=6&skip=0`)
const { all, natural, commercial, river, feeder, float } = data.value as unknown as HomePageVideos
allVideos.value = all
commercialVideos.value = commercial
naturalVideos.value = natural
riverVideos.value = river
feederVideos.value = feeder
floatVideos.value = float

async function fetchAllVideo({ limit, skip }: limitAndSkip) {
  const data = await useGetVideos(`?limit=${limit}&skip=${skip}`)
  allVideos.value = allVideos.value instanceof Array ? allVideos.value.concat(data.value) : allVideos.value
}

async function fetchNaturalVideos({ limit, skip }: limitAndSkip) {
  const data = await useGetVideos(`/categories/venue/natural?limit=${limit}&skip=${skip}`)
  naturalVideos.value = naturalVideos.value instanceof Array ? naturalVideos.value.concat(data.value) : naturalVideos.value
}

async function fetchCommercialVideos({ limit, skip }: limitAndSkip) {
  const data = await useGetVideos(`/categories/venue/commercial?limit=${limit}&skip=${skip}`)
  commercialVideos.value = commercialVideos.value instanceof Array ? commercialVideos.value.concat(data.value) : commercialVideos.value
}

async function fetchRiverVideos({ limit, skip }: limitAndSkip) {
  const data = await useGetVideos(`/categories/water/river?limit=${limit}&skip=${skip}`)
  riverVideos.value = riverVideos.value instanceof Array ? riverVideos.value.concat(data.value) : riverVideos.value
}

async function fetchFeederVideos({ limit, skip }: limitAndSkip) {
  const data = await useGetVideos(`/categories/fishing/feeder?limit=${limit}&skip=${skip}`)
  feederVideos.value = feederVideos.value instanceof Array ? feederVideos.value.concat(data.value) : feederVideos.value
}

async function fetchFloatVideos({ limit, skip }: limitAndSkip) {
  const data = await useGetVideos(`/categories/fishing/float?limit=${limit}&skip=${skip}`)
  floatVideos.value = floatVideos.value instanceof Array ? floatVideos.value.concat(data.value) : floatVideos.value
}
</script>
