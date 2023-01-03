<template>
  <li
    class="mb-12 mr-8 md:mr-auto md:ml-auto relative h-12 flex justify-center rounded-lg w-1/12 md:w-11/12 transform nav-link z-20"
    :class="$route.path === props.path ? 'md:bg-primary-color-200 translate-x-10' : 'bg-transparent'"
  >
    <NuxtLink :to="props.path" class="flex justify-center items-center mt-5 md:mt-0">
      <IconHome class="fill-current" :class="$route.path === props.path ? 'text-white -translate-x-10' : 'text-secondary-color'" />
    </NuxtLink>
    <span
      class="rounded-xl h-3 w-3 bg-average-pink absolute -bottom-7 -left-7 md:bottom-4 md:left-auto md:right-2"
      :class="$route.path === props.path ? 'block animate-bounce' : 'hidden'"
    >
    </span>
  </li>
</template>

<script setup>
const props = defineProps({ path: String })
</script>

<style scoped>
.header-nav-link-animation {
  transition: all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@media (max-width: 768px) {
  .header-nav-link-animation {
    transition: none;
  }
}
</style>
