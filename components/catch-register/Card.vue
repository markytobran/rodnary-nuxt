<template>
  <div class="grid grid-cols-9 justify-center items-center gap-10 text-white border-2 border-primary-color-300 rounded-md cursor-pointer">
    <img :src="imgSrc" :alt="fish" width="100" height="100" class="w-28 h-24 col-span-2" />
    <span class="font-bold text-xl col-span-1">{{ weight }} kg</span>
    <span class="col-span-1 font-semibold">{{ fish }}</span>
    <span class="col-span-2 font-semibold">{{ catchDate }}</span>
    <span class="col-span-2 font-semibold">{{ catchLocation }}</span>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  catchDate: {
    type: String,
    required: true,
  },
  fish: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  catchLocation: {
    type: String,
    required: true,
  },
  imgSrc: {
    type: String,
    required: true,
  },
})
</script>
