<template>
  <div class="flex">
    <h3 class="mr-5">{{ props.title }}:</h3>
    <img :src="useImageUrl(props.flag)" alt="rodnary-logo" class="h-5 w-8 mt-1" />
  </div>
</template>

<script setup lang="ts">
import useImageUrl from '~/composables/useImageUrl'
const props = defineProps({ title: String, flag: { type: String, default: 'ENG' } })
</script>
