<template>
  <section class="h-full w-full mt-3 flex justify-center flex-column relative">
    <div class="w-11/12 rounded-lg details-section relative video-container">
      <div class="flex pl-3">
        <div class="w-1/2 flex flex-col pt-3">
          <div class="flex">
            <img :src="video?.logoURL" class="h-20 w-20 rounded-full ml-3 mt-4" alt="Logo" />
            <span class="text-white font-bold text-lg capitalize block mt-10 ml-2"> {{ video?.channelTitle }}</span>
            <ul class="mt-10 ml-20 flex" v-for="link in socialLinks">
              <IconWrapper :name="link.name" :url="link.url">
                <IconFacebook v-if="link.name === 'facebook'" />
                <IconInstagram v-if="link.name === 'instagram'" />
                <IconWebsite v-if="link.name === 'website'" />
                <IconYoutube v-if="link.name === 'youtube'" />
              </IconWrapper>
            </ul>
          </div>
          <div class="flex flex-col mt-10 ml-5 h-full">
            <div class="flex">
              <span class="h-8 w-15 text-gray-100 text-xs font-semibold mr-5">0 h 00 min</span>
              <span class="h-8 w-15 text-gray-100 text-xs font-semibold mr-8">{{ video?.publishedAt }}</span>
              <svg class="-mt-2" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" fill="white" clip-rule="evenodd">
                <path
                  d="M24 1v16.981h-13l-7 5.02v-5.02h-4v-16.981h24zm-2 15v-12.999h-20v12.999h4v3.105l4.357-3.105h11.643zm-4-9.715l-6.622 7.715-4.378-3.852 1.319-1.489 2.879 2.519 5.327-6.178 1.475 1.285z"
                />
              </svg>
            </div>
            <div>
              <h5 class="text-white font-bold mt-6">{{ video?.title }}</h5>
              <p class="w-12/12 mt-6 pr-12 text-white font-medium mb-4">{{ description }}</p>
              <div class="text-white">
                <UITitleSubtitles title="Subtitles" :flag="video?.subtitles" />
                <UITitleAudioLang title="Audio Language" :flag="video?.videoLanguage" />
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/2 relative">
          <img class="cover-image rounded-tr-lg w-10/12 ml-auto details-header" :src="video?.coverImgLink" alt="Video cover photo" />
        </div>
      </div>
      <div class="w-full px-5 absolute -bottom-12">
        <UITitleSlider title="Related Videos" />
        <UIBaseVideoSlider :videos="relatedVideos" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { VideoData } from '~/types/videoTypes'
import { useVideosFetch, useVideoFetch } from '~/composables/useVideoApiFetch'
const relatedVideos: Ref<VideoData[] | null> = ref(null)
const { id } = useRoute().params
const video: Ref<VideoData | null> = ref(null)

const socialLinks = computed(() => video.value?.socialLinks)

const description = computed(() => video.value?.description.substring(0, 700) + '...')

onMounted(async () => {
  const { data } = await useVideoFetch(`/${id}`)
  video.value = data.value

  const { data: channelVideos } = await useVideosFetch(`/channels/${video?.value?.channelId}`)
  relatedVideos.value = channelVideos.value
})
</script>

<style scoped>
.details-section {
  background: linear-gradient(#1a2c21, 85%, black);
}

.video-container {
  height: 120vh;
}

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
