<template>
  <div class="flex gap-5 mb-5">
    <span class="text-xl font-bold" :class="generateColor(index + 1)">{{ index + 1 }}</span>
    <img :src="imgSrc" :alt="fish" class="w-14 h-14" />
    <p class="flex flex-col">
      <span class="font-bold">{{ weight }} kg</span>
      <span class="font-bold">{{ catchLocation }}</span>
    </p>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  index: {
    type: Number,
    required: true,
  },
  imgSrc: {
    type: String,
    required: true,
  },
  fish: {
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
})

function generateColor(index: number) {
  if (index === 1) {
    return 'text-yellow-500'
  }
  if (index === 2) {
    return 'text-stone-500'
  }
  if (index === 3) {
    return 'text-amber-700'
  }
}
</script>
