<template>
  <div class="flex mb-2">
    <h3 class="mr-5">{{ props.title }}:</h3>
    <img v-for="name in flag" :src="useImageUrl(name)" alt="rodnary-logo" class="h-5 w-8 mr-2 mt-1" />
  </div>
</template>

<script setup lang="ts">
import useImageUrl from '~/composables/useImageUrl'
const props = defineProps({ title: String, flag: Array })
</script>
