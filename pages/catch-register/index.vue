<template>
  <section class="h-full w-full mt-3 flex justify-center">
    <div class="w-full md:w-1/2 rounded-lg dark-green-background min-h-screen px-10 pb-20">
      <h2 class="heading-h2 text-white mt-5 mb-10">Latest catches</h2>
      <NuxtLink to="/catch-register/create" class="px-4 py-2 text-xs md:text-lg rounded-xl bg-secondary-color text-primary-color-800 font-bold">
        Upload new catch
      </NuxtLink>
      <CatchRegisterCard v-for="el in catches" :key="el._id" class="my-5" v-bind="el" />

      <h2 class="heading-h2 text-white my-10">Latest catches</h2>
      <div class="grid grid-cols-2 gap-10">
        <div class="text-white border-2 border-primary-color-300 p-5 rounded-xl">
          <h3 class="heading-h3 mb-10">Carp</h3>
          <img :src="carp[0].imgSrc" :alt="carp[0].fish" class="h-[230px] mb-10 mx-auto w-[290px]" width="290" height="250" />
          <CatchRegisterMiniCard v-for="(el, index) in carp" :key="el._id" v-bind="el" :index="index" />
        </div>
        <div class="text-white border-2 border-primary-color-300 p-5 rounded-xl">
          <h3 class="heading-h3 mb-10">Catfish</h3>
          <img :src="catfish[0].imgSrc" :alt="catfish[0].fish" class="h-[230px] mb-10 mx-auto w-[290px]" width="290" height="250" />
          <CatchRegisterMiniCard v-for="(el, index) in catfish" :key="el._id" v-bind="el" :index="index" />
        </div>
        <div class="text-white border-2 border-primary-color-300 p-5 rounded-xl">
          <h3 class="heading-h3 mb-10">Grass Carp</h3>
          <img :src="grassCarp[0].imgSrc" :alt="grassCarp[0].fish" class="h-[230px] mb-10 mx-auto w-[290px]" width="290" height="250" />
          <CatchRegisterMiniCard v-for="(el, index) in grassCarp" :key="el._id" v-bind="el" :index="index" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useGetCatches } from '~/composables/useCatchApi'
const catches = await useGetCatches('/')

const carp = computed(() => catches.value.filter((el) => el.fish === 'Carp'))
const catfish = computed(() => catches.value.filter((el) => el.fish === 'Catfish'))
const grassCarp = computed(() => catches.value.filter((el) => el.fish === 'Grass Carp'))
</script>
