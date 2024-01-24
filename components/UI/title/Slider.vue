<template>
  <div class="-mb-16 md:-mb-20 font-bold text-lg text-slate-100 tracking-wide break-all">
    <span class="text-lime-600 mr-3">rodnary</span>
    <span class="heading-h4 mr-3">{{ title }}</span>
    <NuxtLink v-if="url" class="text-secondary-color text-sm cursor-pointer relative z-40" :to="url" :aria-label="title"> See more </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  url: String,
})
</script>
