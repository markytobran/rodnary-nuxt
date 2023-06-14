<template>
  <div :class="props.classes">
    <img alt="loading" src="@/assets/img/neting-fish.gif" class="w-[110px] mb-5" />
    <span class="font-bold text-white text-xl">End of videos</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  classes: {
    type: String,
    required: false,
    default: 'flex flex-col justify-center items-center',
  },
})
</script>
