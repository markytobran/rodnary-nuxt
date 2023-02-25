<template>
  <section class="min-h-screen md:px-36 xl:px-20 mb-32">
    <ClientOnly>
      <div>
        <h3 class="font-bold text-lg text-slate-100 mb-5 md:mb-10 text-xl md:text-2xl">Popular Videos</h3>
        <div>
          <UITitleSlider title="All Videos" url="/search" />
          <UIBaseVideoSlider :videos="allVideos" @fetch-video="fetchAllVideo" class="mt-24 md:mt-20" />
        </div>
      </div>
      <template #fallback>
        <div class="h-48 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <div class="content-loading h-full"></div>
          <div class="content-loading h-full"></div>
          <div class="content-loading h-full"></div>
          <div class="content-loading h-full"></div>
        </div>
      </template>
    </ClientOnly>

    <div class="-mt-44">
      <ClientOnly>
        <h3 class="font-bold text-lg text-slate-100 text-xl md:text-2xl">Popular Videos By Category</h3>
        <div class="mt-10">
          <UITitleSlider title="Natural Venue Fishing" url="/categories/venue/natural" />
          <UIBaseVideoSlider :videos="naturalVideos" @fetch-video="fetchNaturalVideos" class="mt-24 md:mt-20 -mb-32" />
        </div>
        <template #fallback>
          <p>Loading comments...</p>
        </template>
      </ClientOnly>

      <div class="-mt-44">
        <ClientOnly>
          <UITitleSlider title="Commercial Venue Fishing" url="/categories/venue/commercial" />
          <UIBaseVideoSlider :videos="commercialVideos" @fetch-video="fetchCommercialVideos" class="mt-24 md:mt-20" />
          <template #fallback>
            <p>Loading comments...</p>
          </template>
        </ClientOnly>
      </div>
      <div class="-mt-44">
        <ClientOnly>
          <UITitleSlider title="River Fishing" url="/categories/water/river" />
          <UIBaseVideoSlider :videos="riverVideos" @fetch-video="fetchRiverVideos" class="mt-24 md:mt-20" />
          <template #fallback>
            <p>Loading comments...</p>
          </template>
        </ClientOnly>
      </div>
      <div class="-mt-44">
        <ClientOnly>
          <UITitleSlider title="Feeder Fishing" url="/categories/fishing/feeder" />
          <UIBaseVideoSlider :videos="feederVideos" @fetch-video="fetchFeederVideos" class="mt-24 md:mt-20" />
          <template #fallback>
            <!-- this will be rendered on server side -->
            <p>Loading comments...</p>
          </template>
        </ClientOnly>
      </div>
      <div class="-mt-44">
        <ClientOnly>
          <UITitleSlider title="Float Fishing" url="/categories/fishing/feeder" />
          <UIBaseVideoSlider :videos="floatVideos" @fetch-video="fetchFloatVideos" class="mt-24 md:mt-20" />
          <template #fallback>
            <p>Loading comments...</p>
          </template>
        </ClientOnly>
      </div>
      <div class="-mt-20"></div>
      <UIBaseSlider :data="homePageSliderData" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { homePageSliderData } from '../../utils/imgUrls'
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

const { data } = await useVideoFetch(`/allvideos?limit=6&skip=0`)
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
