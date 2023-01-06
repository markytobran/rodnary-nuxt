<template>
  <section>
    <div class="w-full lg:w-9/12 mx-auto mt-10 overflow-hidden rounded-xl category-page">
      <div class="category-page-image-container relative">
        <img src="~/assets/img/category-banner.webp" class="w-full" />
      </div>
      <div class="h-32 bg-primary-color-600 flex justify-center items-center">
        <ul class="flex gap-10 text-white font-bold text-lg">
          <li v-for="link in links">
            <NuxtLink :to="link.path" class="px-4 py-2 border-2 border-primary-color-200 rounded-xl">{{ link.name }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-full lg:w-9/12 mx-auto mt-20">
      <div class="ml-2 mt-6">
        <h3 class="font-bold text-2xl text-slate-100 tracking-wide">{{ title }}</h3>
      </div>
      <div class="grid grid-cols-3 gap-14 mt-4">
        <UIBaseVideoCard v-for="video in videos" :video="video" />
      </div>
    </div>
  </section>
</template>

<script setup>
import useImageUrl from '~/composables/useImageUrl'
const { key, value } = useRoute().params

const title = computed(() => {
  if (value === 'commercial') return 'Commercial Venue Fishing'
  if (value === 'natural') return 'Natural Venue Fishing'
  if (value === 'river') return 'River Fishing'
  if (value === 'feeder') return 'Feeder Fishing'
  return 'Natural Venue Fishing'
})

const links = [
  { name: 'Commercial', path: '/categories/venue/commercial' },
  { name: 'Natural', path: '/categories/venue/natural' },
  { name: 'River', path: '/categories/water/river' },
  { name: 'Feeder', path: '/categories/fishing/feeder' },
  { name: 'Float', path: '/categories/fishing/float' },
]

const { data: videos } = useVideoFetch(`/categories/${key}/${value}?limit=12&skip=12`)
</script>

<style scoped>
.category-page {
  box-shadow: -20px 31px 19px 4px rgba(0, 0, 0, 0.5);
}
.category-page-image-container img {
  height: 50vh;
}

.router-link-active.router-link-exact-active {
  background: #566b34;
}
</style>
