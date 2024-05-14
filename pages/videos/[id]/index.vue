<template>
  <section class="h-full w-full mt-3 flex justify-center flex-column overflow-x-hidden relative pb-48 text-white">
    <div class="w-11/12 rounded-lg dark-green-background relative min-h-[170vh] lg:min-h-[120vh] mt-4 z-10">
      <div :style="`background-image: url(${video?.coverImgLink})`" class="absolute top-0 left-0 w-full h-full opacity-5 z-0 bg-cover" />
      <div class="flex flex-col lg:flex-row gap-5 pl-3">
        <div class="w-full lg:w-1/2 flex flex-col pt-3">
          <div class="flex">
            <img v-show="video?.logoURL && showLogo" :src="video?.logoURL" class="h-20 w-20 rounded-full ml-3 mt-4" alt="Logo" @error="removeLogo" />
            <span class="font-bold text-lg capitalize block mt-10 ml-5"> {{ video?.channelTitle }}</span>
            <ul class="mt-10 ml-10 gap-24 hidden lg:grid grid-cols-4">
              <IconWrapper v-for="link in socialLinks" :name="link.name" :url="link.url">
                <IconFacebook v-if="link.name === 'facebook'" />
                <IconInstagram v-if="link.name === 'instagram'" />
                <IconWebsite v-if="link.name === 'website'" />
                <IconYoutube v-if="link.name === 'youtube'" />
              </IconWrapper>
            </ul>
          </div>
          <div class="flex flex-col mt-10 ml-5 h-full">
            <div class="flex">
              <span class="h-8 w-15 text-gray-100 text-xs font-semibold mr-8">{{ publishedAt }}</span>
              <IconSubtitle class="-mt-2" />
            </div>
            <div class="hidden lg:block relative z-10">
              <h5 class="font-bold mt-6">{{ video?.title }}</h5>
              <p class="w-12/12 mt-4 pr-12 font-medium mb-4" :class="readMore ? '' : 'line-clamp-6'">{{ video?.description }}</p>
              <UIButtonSeeMore v-if="showReadMore" @toggle-read-more="setReadMore" :read-more="readMore" />
              <div>
                <UITitleSubtitles title="Subtitles" :flag="video?.subtitles" />
                <UITitleAudioLang title="Audio Language" :flag="video?.videoLanguage" />
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 px-3 lg:px-0 mt-6 mr-6 relative">
          <UIBaseVideoCardVideo :id="video?.videoID" />
        </div>
        <div class="block lg:hidden px-3 relatve z-10">
          <h2 class="font-bold mt-6 heading-h3">{{ video?.title }}</h2>
          <p class="w-full mt-2 font-medium mb-4 text-sm break-words" :class="readMore ? '' : 'line-clamp-6'">{{ video?.description }}</p>
          <UIButtonSeeMore v-if="showReadMore" @toggle-read-more="setReadMore" :read-more="readMore" />
          <div>
            <UITitleSubtitles title="Subtitle" :flag="video?.subtitles" />
            <UITitleAudioLang title="Audio Language" :flag="video?.videoLanguage" />
          </div>
          <h3 class="heading-h3 font-bold mt-8">Social links</h3>
          <ul class="grid grid-cols-4 mt-8 gap-3 lg:hidden">
            <IconWrapper v-for="link in socialLinks" :name="link.name" :url="link.url">
              <IconFacebook v-if="link.name === 'facebook'" />
              <IconInstagram v-if="link.name === 'instagram'" />
              <IconWebsite v-if="link.name === 'website'" />
              <IconYoutube v-if="link.name === 'youtube'" />
            </IconWrapper>
          </ul>
        </div>
      </div>
      <div class="w-full px-5 mt-36">
        <LazyClientOnly>
          <UITitleSlider title="Related Videos" />
          <UIBaseVideoSlider :videos="relatedVideos ?? []" @fetch-video="fetchChannelVideos" />
        </LazyClientOnly>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import type { VideoData } from '~/types/videoTypes'
import { useGetVideo } from '~/composables/useVideoApi'
import type { limitAndSkip } from '~/components/home/AllVideos.vue'
import { VideoAPI } from '@/types/videoTypes'
const { $api } = useNuxtApp()
const videoRepo = videoRepository($api)
const relatedVideos: Ref<VideoData[] | null> = ref(null)
const { id } = useRoute().params
const video: Ref<VideoData | null> = ref(null)
const readMore = ref(false)
const showLogo = ref(true)

// Fetch data
const data = await useGetVideo(id as string)
video.value = data.value

onMounted(async () => {
  const channelId = video?.value?.channelId as string
  const videos = await videoRepo.getChannelVideos(channelId, { limit: VideoAPI.LIMIT, skip: VideoAPI.SKIP })
  relatedVideos.value = videos
})

const socialLinks = computed(() => video.value?.socialLinks)
const metaDesciption = computed(() => video?.value?.description.substring(0, 160) + '...')

useHead({
  title: video?.value?.title ?? 'Rodnary Single Video Page',
  meta: [{ name: 'description', content: metaDesciption.value }],
})

const showReadMore = computed(() => (video.value?.description?.length ?? 0) > 750)

const publishedAt = computed(() => {
  if (video.value?.publishedAt) {
    const inputDate = new Date(video.value?.publishedAt)
    const year = inputDate.getFullYear() + 1
    const month = inputDate.getMonth() + 1
    const day = inputDate.getDate()

    return `${day}/${month}/${year}`
  }
  return ''
})

function setReadMore() {
  readMore.value = !readMore.value
}

async function fetchChannelVideos(query: limitAndSkip) {
  try {
    const channelId = video?.value?.channelId as string
    const videos = await videoRepo.getChannelVideos(channelId, query)
    relatedVideos.value = relatedVideos.value ? relatedVideos.value.concat(videos) : []
  } catch (e) {
    relatedVideos.value = []
  }
}

function removeLogo() {
  return (showLogo.value = false)
}
</script>

<style scoped>
.details-header::after {
  content: '';
  background: linear-gradient(to right, #182b12 50%, transparent 75%);
  width: 100%;
  height: 100%;
}

:deep(.social-icon:hover .icon) {
  fill: #f1f1f1;
}

:deep(.youtube:hover a),
:deep(.youtube:hover a:before),
:deep(.youtube:hover a:after) {
  background: red;
}

:deep(.facebook:hover a),
:deep(.facebook:hover a:before),
:deep(.facebook:hover a:after) {
  background: #3b5998;
}

:deep(.website:hover a),
:deep(.website:hover a:before),
:deep(.website:hover a:after) {
  background: black;
}

:deep(.instagram:hover a),
:deep(.instagram:hover a:before),
:deep(.instagram:hover a:after) {
  background: #e46880;
}
</style>
