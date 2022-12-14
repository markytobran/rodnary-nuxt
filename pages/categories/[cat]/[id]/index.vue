<template>
  <section>
    <div
      class="h-96 bg-black -ml-10 flex justify-center pt-20 relative after:block after:absolute after:top-0 after:left-0 after:bg-black after:opacity-70 after:w-full after:h-96"
    >
      <video autoplay muted loop playsinline data-src-lg="" data-src-sm="" class="absolute top-0 left-0 w-full h-full object-fill">
        <source src="@/assets/video/carp.mp4" type="video/mp4" />
      </video>
      <div>
        <NuxtLink
          v-for="link in links"
          :to="link.path"
          class="h-10 px-5 py-2 rounded-xl font-semibold relative z-50 mr-6 inline-block"
          :class="$router.currentRoute.value.fullPath === link.path ? 'bg-secondary-color text-white' : 'bg-white'"
        >
          {{ link.name }}
        </NuxtLink>
        <p class="relative z-50 text-white text-xl font-semibold mt-10">Browse the top five fishing categories</p>
      </div>
    </div>

    <div class="ml-7 mt-6">
      <h3 class="font-bold text-2xl text-slate-100 tracking-wide">{{ title }}</h3>
    </div>
    <div class="grid grid-cols-4 gap-14 ml-7 mt-12 md:px-36 xl:px-10">
      <UIBaseVideoCard v-for="video in videos" :video="video" />
    </div>
  </section>
</template>

<script setup>
const { cat, id } = useRoute().params

const title = computed(() => {
  if (id === 'commercial') return 'Commercial Venue Fishing'
  if (id === 'natural') return 'Natural Venue Fishing'
  if (id === 'river') return 'River Fishing'
  if (id === 'feeder') return 'Feeder Fishing'
  return 'Natural Venue Fishing'
})

const links = [
  { name: 'Commercial', path: '/categories/venue/commercial' },
  { name: 'Natural', path: '/categories/venue/natural' },
  { name: 'River', path: '/categories/water/river' },
  { name: 'Feeder', path: '/categories/fishing/feeder' },
  { name: 'Float', path: '/categories/fishing/float' },
]

const { data: videos } = useVideoFetch(`/categories/${cat}/${id}?limit=12&skip=12`)
</script>
