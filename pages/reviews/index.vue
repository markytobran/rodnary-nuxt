<template>
  <section class="h-full w-full mt-3 flex justify-center">
    <div class="w-full md:w-1/2 rounded-lg dark-green-background min-h-screen px-10 pb-20">
      <h2 class="heading-h2 text-white mt-5 mb-10">Latest gear reviews</h2>
      <NuxtLink to="/reviews/create" class="px-4 py-2 text-xs md:text-lg rounded-xl bg-secondary-color text-white font-bold">
        Upload new review
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useGetReviews } from '~/composables/useReviewApi'
const reviews = await useGetReviews('/')
</script>
