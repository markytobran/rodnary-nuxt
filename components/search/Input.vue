<template>
  <form class="flex mx-auto w-full md:w-1/2" @submit.prevent="searchSubmit">
    <div class="relative w-full">
      <UIFormInput
        v-model="searchText"
        type="text"
        placeholder="Carps, Baits, Tackles and More"
        classes="border-t-2 border-l-2 border-b-2 h-16 py-3 px-4 w-full bg-transparent rounded-l-full outline-none text-white cursor-pointer"
        @keydown.enter.prevent="searchSubmit"
      />
      <button v-if="showDeleteBtn" @click="resetInputField" class="absolute top-3 w-8 right-2 my-auto">
        <IconClose class="text-secondary-color" />
      </button>
    </div>
    <button
      class="w-20 md:w-24 border-t-2 border-b-2 border-l-2 cursor-pointer hidden xl:flex xl:flex-col xl:justify-center xl:items-center"
      aria-label="Search by voice"
      :class="isListening ? 'pt-2 bg-average-pink' : 'bg-secondary-color'"
      @click="listenUser"
    >
      <IconMicrophone :class="isListening ? 'animate-bounce' : ''" />
      <span v-if="isListening" class="text-sm font-bold">On</span>
    </button>
    <button
      class="w-20 md:w-24 flex justify-center items-center border-2 rounded-r-full"
      type="submit"
      aria-label="Search"
      :disabled="props.isLoading"
      :class="isLoading ? 'bg-slate-400 cursor-not-allowed' : 'bg-secondary-color cursor-pointer'"
    >
      <IconMagnifier />
    </button>
  </form>
</template>

<script setup lang="ts">
const searchText = ref('')

const props = defineProps({
  isLoading: {
    type: Boolean,
    required: false,
    default: false,
  },
})

const showDeleteBtn = computed(() => searchText.value.length > 0)

const router = useRouter()
const searchSubmit = () => {
  const encoded = encodeURI(searchText.value)
  router.push('/search?q=' + encoded)
}

const resetInputField = () => {
  searchText.value = ''
  router.push('/search?q=')
}

const isListening = ref(false)
const listenUser = () => {
  isListening.value = true
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  const rec = new SpeechRecognition()
  rec.lang = 'en-US'

  rec.onresult = (e: any) => {
    searchText.value = e.results[0][0].transcript
    searchSubmit()
    isListening.value = false
  }

  rec.start()
}
</script>
