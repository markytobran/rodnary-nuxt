<template>
  <form class="flex mx-auto w-full md:w-1/2" @submit.prevent="searchSubmit">
    <div class="relative w-full">
      <UIFormInput
        v-model="searchText"
        type="text"
        placeholder="Carps, Baits, Tackles and More"
        classes="border-t-2 border-l-2 border-b-2 h-14 py-3 px-4 w-full bg-transparent rounded-l-full outline-none text-white cursor-pointer"
        @keydown.enter.prevent="searchSubmit"
      />
      <button v-if="showDeleteBtn" @click="resetInputField" class="absolute top-3 w-8 right-2 my-auto">
        <IconClose class="text-secondary-color" />
      </button>
    </div>
    <button
      class="w-20 md:w-24 flex justify-center items-center border-2 rounded-r-full"
      type="submit"
      :disabled="props.isLoading"
      :class="isLoading ? 'bg-slate-400 cursor-not-allowed' : 'bg-secondary-color cursor-pointer'"
    >
      <IconMagnifier class="text-white" />
    </button>
  </form>
</template>

<script setup lang="ts">
const searchText = ref('')
const showDeleteBtn = computed(() => searchText.value.length > 0)
const resetInputField = () => {
  searchText.value = ''
  router.push('/search?q=')
}
const router = useRouter()
const props = defineProps({
  isLoading: {
    type: Boolean,
    required: false,
    default: false,
  },
})

const searchSubmit = () => {
  const encoded = encodeURI(searchText.value)
  router.push('/search?q=' + encoded)
}
</script>
