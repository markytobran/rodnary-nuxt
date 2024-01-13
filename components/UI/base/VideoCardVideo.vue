<template>
  <iframe
    class="h-[250px] md:h-[450px] w-full z-10"
    :src="'https://www.youtube.com/embed/' + id"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  />
</template>

<script lang="ts" setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
})
</script>
