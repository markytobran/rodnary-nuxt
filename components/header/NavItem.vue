<template>
  <li class="translate-x-5 lg:px-3 lg:py-2 lg:rounded-3xl" :class="$route.path === props.path ? 'lg:bg-primary-color-200 lg:w-36' : ''">
    <NuxtLink :to="props.url" class="flex flex-col justify-center items-center lg:flex-row md:justify-between">
      <component :is="iconComponent" class="fill-current" :class="$route.path === props.path ? 'text-white' : 'text-secondary-color'" />
      <span class="rounded-xl h-3 w-3 bg-average-pink mt-2" :class="$route.path === props.path ? 'block animate-bounce' : 'hidden'"> </span>
    </NuxtLink>
  </li>
</template>

<script setup>
import Home from '~/components/icon/Home.vue'
import Magnifier from '~/components/icon/Magnifier.vue'
import Fish from '~/components/icon/Fish.vue'
import Review from '~/components/icon/Review.vue'

const props = defineProps({
  path: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
})

const iconComponent = computed(() => {
  switch (props.icon) {
    case 'home':
      return Home
    case 'search':
      return Magnifier
    case 'catch-register':
      return Fish
    case 'review':
      return Review
    default:
      return Home
  }
})
</script>
