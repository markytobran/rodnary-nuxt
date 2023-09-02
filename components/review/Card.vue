<template>
  <div class="mt-10 flex text-white border-2 border-primary-color-300 p-3 relative min-h-[350px] rounded-lg">
    <img :src="imgSrc" alt="Review item" class="w-[280px] h-full rounded-lg" />
    <img class="rounded-full h-16 w-16 absolute top-3 right-3" :src="useBrandUrl(brand)" alt="logo" />
    <ul class="flex flex-col gap-5 ml-5">
      <li class="font-bold text-xl w-10/12">Name: {{ name }}</li>
      <li class="font-semibold text-lg">Weight: {{ weight }}g</li>
      <li class="font-semibold text-lg">Casting weight: {{ castingWeight }}</li>
      <li>
        <span class="font-semibold text-lg">Description:</span><br />
        <p class="mt-2">{{ reviewText }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import useBrandUrl from '~/composables/useBrandImageUrl'
defineProps({
  reviewText: {
    type: String,
    required: true,
  },
  castingWeight: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  imgSrc: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
})
</script>
