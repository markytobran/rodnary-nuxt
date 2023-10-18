<template>
  <div :class="videoCardClasses" @pointerdown="onClickHandler">
    <UIBaseVideoCardVideo :id="video?.videoID" :url="getPicture" :is-new-video="isNewVideo" />
    <div
      :class="
        showDescription
          ? 'h-60 w-full bg-primary-color-600 rounded-lg -mt-1 flex'
          : 'h-60 w-full bg-primary-color-600 rounded-lg -mt-1 flex video-card-description-hover-effect'
      "
    >
      <div class="w-5/6 pt-4 pl-3 pr-2 relative">
        <NuxtLink :to="dynamicVideoRoute" class="text-gray-100 pt-1 font-bold w-5/6 text-left underline">
          {{ reducedTitle }}
        </NuxtLink>
        <p class="text-gray-100 text-xs font-light pb-5 mt-4 text-left break-words">
          {{ reducedDescription }}
        </p>
        <img src="@/assets/img/logo/rodnary-logo.webp" alt="Rodnary-logo" class="h-10 w-18 absolute bottom-3 left-3" />
        <span class="h-8 w-15 absolute -bottom-2 right-16 text-gray-100 text-xs font-semibold">{{ modifiedTime }}</span>
        <IconSubtitle v-if="isSubtitle" class="absolute bottom-2 right-4" />
      </div>
      <div class="h-full w-1/6 bg-primary-color-200 rounded-lg flex flex-col justify-between items-center pt-3 pb-2">
        <img :src="useImageUrl(video?.videoLanguage)" :alt="`${video?.videoLanguage} flag`" class="h-10 w-16 -mt-2" />
        <img :src="useImageUrl(video?.subFishing)" alt="Sub fishing icon" class="h-14 w-14 rounded-full border-4 border-secondary-color" />
        <img :src="useImageUrl(video?.water)" alt="Water icon" class="h-14 w-14 rounded-full border-4 border-secondary-color" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  video: Object,
  showDescription: Boolean,
})

const isTouchOn = ref(false)
const isSubtitle = props.video?.subtitles.length > 0

const dynamicVideoRoute = computed(() => `/videos/${props.video?._id}`)

const reducedTitle = computed(() => props.video?.title.substring(0, 52))

const modifiedTime = computed(() => {
  const year = props.video?.publishedAt.substring(0, 4)
  const month = props.video?.publishedAt.substring(5, 7)
  return `${month}/${year}`
})

const reducedDescription = computed(() => props.video?.description.substring(0, 136))

const isNewVideo = computed(() => {
  const today = new Date()
  const createdAt = new Date(props.video?.publishedAt)
  const week = 604800
  const sub = (today.getTime() - createdAt.getTime()) / 1000

  return sub <= week
})

const getPicture = computed(() => {
  return props.video.thumbnails.find((el) => el.name === 'medium')?.url
})

const videoCardClasses = computed(() => {
  const touchClass = isTouchOn.value ? ' touch' : ''
  if (props.showDescription) return 'h-96 rounded-lg video-card cursor-pointer video-card-effect'
  return 'h-44 rounded-lg video-card cursor-pointer video-card-without-description' + touchClass
})

function onClickHandler(event: PointerEvent): void {
  if (event.pointerType === 'touch') {
    isTouchOn.value = !isTouchOn.value
  }
}
</script>

<style scoped>
.video-card {
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.4);
  transform: translateY(12%);
  transition: all 0.3s;
}

.video-card-description-hover-effect {
  transform: translateY(-80%);
  opacity: 0;
  transition-delay: 250ms;
  transition: all 0.3s linear;
}

.video-card.touch {
  z-index: 50;
}

.video-card.touch {
  box-shadow: 0 54px 99px rgba(0 0 0 / 70%);
  transform: scale(1.03);
}

.video-card-without-description.touch {
  transform: translateY(-0%);
}
.video-card.touch .video-card-description-hover-effect {
  opacity: 1;
  transform: translateY(0%);
}

@media (max-width: 768px) {
  .video-card {
    transform: translateY(0%);
  }
}

@media (hover: hover) {
  .video-card:hover {
    z-index: 50;
  }

  .video-card-effect:hover {
    box-shadow: 0 54px 99px rgba(0 0 0 / 70%);
    transform: scale(1.03);
  }

  .video-card-without-description:hover {
    transform: translateY(-0%);
  }
  .video-card:hover .video-card-description-hover-effect {
    opacity: 1;
    transform: translateY(0%);
  }
}
</style>
