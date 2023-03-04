<template>
  <section>
    <div class="w-full lg:w-9/12 mx-auto mt-10 overflow-hidden rounded-xl card-shadow">
      <div class="relative">
        <img src="~/assets/img/category-banner.webp" class="w-full h-1/2" />
      </div>
      <div class="h-32 bg-primary-color-600 flex justify-center items-center">
        <ul class="flex gap-10 text-white font-bold text-lg">
          <li v-for="link in links">
            <NuxtLink
              :to="link.path"
              class="px-4 py-2 border-2 border-primary-color-200 rounded-xl"
              :class="titleKey === link.name.toLowerCase() ? 'bg-primary-color-300' : ''"
            >
              {{ link.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-full lg:w-9/12 mx-auto mt-20 mb-56">
      <div class="ml-2 mt-6">
        <h3 class="font-bold text-2xl text-slate-100 tracking-wide">{{ title[titleKey.toLowerCase()] }}</h3>
      </div>
      <ClientOnly>
        <div class="grid grid-cols-3 gap-14 mt-4">
          <UIBaseVideoCard v-for="video in videos" :video="video" />
        </div>
      </ClientOnly>
    </div>
  </section>
</template>

<script setup>
const videos = ref([])
const route = useRoute()
const titleKey = ref('')

const title = {
  commercial: 'Commercial Venue Fishing',
  natural: 'Natural Venue Fishing',
  river: 'River Fishing',
  feeder: 'Feeder Fishing',
  natural: 'Natural Venue Fishing',
  float: 'Float Fishing',
}

const links = [
  { name: 'Commercial', path: '/categories?venue=commercial' },
  { name: 'Natural', path: '/categories?venue=natural' },
  { name: 'River', path: '/categories?water=river' },
  { name: 'Feeder', path: '/categories?fishing=feeder' },
  { name: 'Float', path: '/categories?fishing=float' },
]

const setTitleKey = (value) => {
  titleKey.value = value.toLowerCase()
}

watch(
  route,
  async ({ query }) => {
    const [key, value] = Object.entries(query)[0]

    //Set title
    setTitleKey(value)

    const { data } = await useVideoFetch(`/categories/${key}/${value}?limit=12&skip=0`)
    videos.value = data.value
  },
  { deep: true, immediate: true }
)
</script>
