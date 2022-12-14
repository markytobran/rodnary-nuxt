<template>
  <header class="absolute md:relative bottom-0 h-20 md:h-screen w-full z-50">
    <nav class="bg-primary-color h-full fixed rounded-r-3xl z-20 w-full md:w-40">
      <NuxtLink to="/" class="mb-32 pt-6 flex justify-center absolute -top-1 left-2 md:left-0 md:relative">
        <img src="@/assets/img/logo/rodnary-logo.png" alt="rodnary-logo" class="w-18 h-9 md:w-22 md:h-16" />
      </NuxtLink>
      <div>
        <ul class="flex md:flex-col pl-20 md:pl-0">
          <HeaderNavItem v-for="(path, index) in pathList" :key="index" :path="path" />
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
const pathList = ['/', '/about']
</script>
