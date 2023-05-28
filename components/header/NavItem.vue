<template>
  <li class="lg:bg-primary-color-200 translate-x-5 lg:px-3 lg:py-2 lg:rounded-3xl lg:w-36">
    <NuxtLink :to="props.path" class="flex flex-col justify-center items-center lg:flex-row md:justify-between">
      <IconHome class="fill-current h-8" :class="$route.path === props.path ? 'text-white' : 'text-secondary-color'" />
      <span class="rounded-xl h-3 w-3 bg-average-pink mt-2" :class="$route.path === props.path ? 'block animate-bounce' : 'hidden'"> </span>
    </NuxtLink>
  </li>
</template>

<script setup>
const props = defineProps({ path: String })
</script>
