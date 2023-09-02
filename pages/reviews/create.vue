<template>
  <section class="h-full w-full mt-3 flex justify-center">
    <div class="w-full md:max-w-[1100px] rounded-lg dark-green-background mb-10">
      <h1 class="heading-h1 text-white mt-5 ml-10">Tell us more about your favourite fishing gear</h1>
      <form method="POST" class="w-full mt-10 px-10 text-white mb-10 flex flex-col gap-6" @submit.prevent="postData">
        <label class="flex cursor-pointer">
          <span class="text-size-5 font-bold w-1/2 my-auto">Gear type*:</span>
          <UIFormSelect v-model="reviewData.gearType" class="w-1/2" required default-option="Choose" :options="['Rod', 'Reel']" />
        </label>
        <label class="flex cursor-pointer relative">
          <span class="text-size-5 font-bold my-auto mr-5">Name*:</span>
          <UIFormInput v-model="reviewData.name" placeholder="Daiwa feeder rod" required class="w-1/2 ml-auto" />
        </label>
        <label class="flex cursor-pointer">
          <span class="text-size-5 font-bold w-1/2 my-auto">Brand*:</span>
          <UIFormSelect
            class="w-1/2"
            v-model="reviewData.brand"
            required
            default-option="Choose"
            :options="['Daiwa', 'Shimano', 'MAP fishing', 'Middy', 'Free Spirit']"
          />
        </label>
        <label class="flex cursor-pointer relative">
          <span class="text-size-5 font-bold my-auto mr-5">Weight*:</span>
          <UIFormInput v-model="reviewData.weight" placeholder="0" required class="w-1/4 ml-auto" />
          <span class="absolute top-3 right-3 font-semibold">g</span>
        </label>
        <label class="flex cursor-pointer">
          <span class="text-size-5 font-bold w-1/2 my-auto">Casting weight*:</span>
          <UIFormSelect
            class="w-1/2"
            v-model="reviewData.castingWeight"
            required
            default-option="Choose"
            :options="['0-5g', '10-20g', '30-50g', '100g+', '130g']"
          />
        </label>

        <label class="flex cursor-pointer">
          <span class="text-size-5 font-bold w-1/2 my-auto">Review text*:</span>
          <UIFormTextArea
            class="w-1/2"
            v-model="reviewData.reviewText"
            placeholder="Tell us what you think about the product ..."
            required
            minlength="3"
            maxlength="500"
          />
        </label>
        <div class="flex flex-col gap-5 cursor-pointer">
          <p class="text-size-5 font-bold w-1/2 my-auto">Images* You must upload only 1 image</p>
          <input type="file" name="image" @change="handleFileInputChange" />
          <img v-if="reviewData.imgSrc" :src="reviewData.imgSrc" alt="Review" width="300" height="300" />
        </div>
        <button class="text-bold bg-secondary-color rounded-lg h-10 font-bold w-[300px] mt-10 text-primary-color-800">Save review</button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { usePostReview } from '~/composables/useReviewApi'

interface ReviewData {
  gearType: string
  name: string
  brand: string
  castingWeight: string
  reviewText: string
  weight: string
  imgSrc: string
}
const reviewData: Ref<ReviewData> = ref({
  gearType: '',
  name: '',
  brand: '',
  castingWeight: '',
  reviewText: '',
  weight: '',
  imgSrc: '',
})

function resetInputField() {
  reviewData.value = {
    gearType: '',
    name: '',
    brand: '',
    castingWeight: '',
    reviewText: '',
    weight: '',
    imgSrc: '',
  }
}

function checkInputFields() {
  const { gearType, name, brand, castingWeight, reviewText, weight, imgSrc } = reviewData.value

  return gearType && name && brand && castingWeight && reviewText && weight && imgSrc
}

function handleFileInputChange(e: any) {
  const file = e.target.files[0]
  previewFile(file)
}

function previewFile(file: any) {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onloadend = () => {
    reviewData.value.imgSrc = reader.result
  }
}

async function postData() {
  if (!checkInputFields()) {
    return
  }
  try {
    await usePostReview('/', reviewData.value).then(() => {
      resetInputField()
    })
  } catch (e) {
    console.log(e)
  }
}
</script>
