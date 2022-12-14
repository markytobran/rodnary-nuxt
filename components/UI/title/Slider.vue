<template>
  <div class="-mb-20 font-bold text-lg text-slate-100 tracking-wide">
    <span class="text-lime-600 mr-3">rodnary</span>
    <span class="text-xl md:text-2xl mr-3">{{ title }}</span>
    <NuxtLink class="text-secondary-color text-base cursor-pointer relative z-40" :to="url"> See more </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  url: String,
})
</script>
