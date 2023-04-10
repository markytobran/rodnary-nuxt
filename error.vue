<template>
  <div class="mt-7 max-w-sm mx-auto text-center text-white">
    <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
    <p class="mt-7 text-6xl">Oooops</p>
    <p class="mt-7 text-2xl">{{ error.message }}</p>
    <button class="btn my-7" @click="handleClearError">Go Home</button>
  </div>
</template>

<script lang="ts" setup>
defineProps(['error'])

const handleClearError = () => clearError({ redirect: '/' })
</script>
