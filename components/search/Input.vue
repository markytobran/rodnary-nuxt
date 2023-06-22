<template>
  <form class="flex mx-auto w-full md:w-1/2" @submit.prevent="searchSubmit">
    <div class="relative w-full">
      <input
        type="text"
        v-model="searchText"
        placeholder="What do you want to watch?"
        class="border-t-2 border-l-2 border-b-2 h-14 py-3 px-4 w-full bg-transparent rounded-l-full outline-none text-white cursor-pointer"
        @keydown.enter.prevent="searchSubmit"
      />
      <button v-if="showDeleteBtn" @click="resetInputField" class="absolute top-3 w-8 right-2 my-auto">
        <IconClose class="text-secondary-color" />
      </button>
    </div>
    <button class="w-20 md:w-24 bg-secondary-color flex justify-center items-center border-2 rounded-r-full" type="submit">
      <IconMagnifier class="text-white" />
    </button>
  </form>
</template>

<script setup lang="ts">
const searchText = ref('')
const showDeleteBtn = computed(() => searchText.value.length > 0)
const resetInputField = () => (searchText.value = '')
const router = useRouter()

const searchSubmit = () => {
  const encoded = encodeURI(searchText.value)
  router.push('/search?q=' + encoded)
}
</script>
