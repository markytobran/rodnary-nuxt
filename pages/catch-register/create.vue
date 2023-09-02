<template>
  <section class="h-full w-full mt-3 flex justify-center">
    <div class="w-full md:max-w-[1100px] rounded-lg dark-green-background mb-10">
      <h1 class="heading-h1 text-white mt-5 ml-10">Add your most recent catch</h1>
      <form method="POST" class="w-full mt-10 px-10 text-white mb-10 flex flex-col gap-6" @submit.prevent="postData">
        <p class="text-size-5 font-bold">Add your most recent catch or edit and update pictures of your older catch.</p>
        <label class="flex cursor-pointer">
          <span class="text-size-5 font-bold w-1/2 my-auto">Catch date*:</span>
          <UIFormCalendar v-model="catchData.catchDate" required :config="{ enableTime: true }" placeholder="Select date" />
        </label>
        <label class="flex cursor-pointer">
          <span class="text-size-5 font-bold w-1/2 my-auto">Fish*:</span>
          <UIFormSelect
            class="w-1/2"
            v-model="catchData.fish"
            required
            default-option="Choose"
            :options="['Barbel', 'Carp', 'Catfish', 'F1', 'Grass Carp']"
          />
        </label>
        <div class="grid grid-cols-3 gap-20">
          <label class="flex cursor-pointer relative">
            <span class="text-size-5 font-bold my-auto mr-5">Weight*:</span>
            <UIFormInput v-model="catchData.weight" placeholder="0" required class="w-full" />
            <span class="absolute top-3 right-3 font-semibold">kg</span>
          </label>
          <label class="flex cursor-pointer relative">
            <span class="text-size-5 font-bold my-auto mr-5">Length:</span>
            <UIFormInput v-model="catchData.length" placeholder="0" class="w-full" />
            <span class="absolute top-3 right-3 text-white font-semibold">cm</span>
          </label>
          <label class="flex cursor-pointer relative">
            <span class="text-white text-size-5 font-bold my-auto mr-5">District:</span>
            <UIFormInput v-model="catchData.district" placeholder="0" class="w-full" />
            <span class="absolute top-3 right-3 font-semibold">cm</span>
          </label>
        </div>
        <label class="flex cursor-pointer">
          <span class="text-size-5 font-bold w-1/2 my-auto">Method*:</span>
          <UIFormSelect
            class="w-1/2"
            v-model="catchData.method"
            required
            default-option="Choose"
            :options="['Feeder', 'Waggler', 'Pellet Waggler', 'Bomb feeder', 'Spinning']"
          />
        </label>
        <label class="flex cursor-pointer">
          <span class="text-size-5 font-bold w-1/2 my-auto">Bait*:</span>
          <UIFormSelect
            class="w-1/2"
            v-model="catchData.bait"
            required
            default-option="Choose"
            :options="['Boilies', 'Caster', 'Corn', 'Maggot', 'Pellet', 'Wafter', 'Wobbler']"
          />
        </label>
        <label class="flex cursor-pointer">
          <span class="text-size-5 font-bold w-1/2 my-auto">Weather:</span>
          <UIFormSelect
            class="w-1/2"
            v-model="catchData.weather"
            required
            default-option="Choose"
            :options="['Clear', 'Cloudy', 'Overcast', 'Rainy', 'Snowy', 'Storm']"
          />
        </label>
        <label class="flex cursor-pointer">
          <span class="text-size-5 font-bold w-1/2 my-auto">Day period*:</span>
          <UIFormSelect
            class="w-1/2"
            v-model="catchData.dayPeriod"
            required
            default-option="Choose"
            :options="['Dawn', 'Daytime', 'Night', 'Dusk']"
          />
        </label>
        <label class="flex cursor-pointer">
          <span class="text-size-5 font-bold w-1/2 my-auto">Catch location*:</span>
          <UIFormSelect
            class="w-1/2"
            v-model="catchData.catchLocation"
            required
            default-option="Choose"
            :options="['Albans lakes', 'Barston lakes', 'Boddington reservoir']"
          />
        </label>
        <label class="flex cursor-pointer">
          <span class="text-size-5 font-bold w-1/2 my-auto">Catch circumstances*:</span>
          <UIFormTextArea
            class="w-1/2"
            v-model="catchData.catchCircumstances"
            placeholder="Explain the catch circumstances..."
            required
            minlength="3"
            maxlength="500"
          />
        </label>
        <div class="flex flex-col gap-5 cursor-pointer">
          <p class="text-size-5 font-bold w-1/2 my-auto">Images* You must upload only 1 image</p>
          <input type="file" name="image" @change="handleFileInputChange" />
          <img v-if="catchData.imgSrc" :src="catchData.imgSrc" alt="Catch" width="300" height="300" />
        </div>
        <div>
          <h2 class="heading-h2 font-bold mb-3">l accept the Diary catch upload conditions:</h2>
          <ul role="list" class="marker:text-secondary-color list-disc pl-5 space-y-3">
            <li>Entries without images (for authenticity) will not be accepted.</li>
            <li>
              If the image is not in line with the guidelines of our site, it will not be displayed. If the fish is displayed in a room, on a balcony,
              in a kitchen, etc., the image WILL NOT BE DISPLAYED!
            </li>
            <li>Please attach photos that clearly show the fish and the angler holding the fish!</li>
            <li>
              Please ensure that the data is accurate. An 8 kg carp should not have a circumference of 22 cm. It often happens that the weight of the
              fish in the declaration is 0 kg. These entries should also not appear.
            </li>
            <li>
              For other parameters, we ask you to select the options we have already provided. For example: if the bait was an 18mm home made
              strawberry fish boilie, you should list it as a boilie.
            </li>
          </ul>
          <div class="flex gap-5 items-center mt-5">
            <input type="checkbox" v-model="catchData.acceptTermsAndConditions" class="h-5 w-5" required />
            <p class="mt-auto">I accept the Diary catch upload conditions</p>
          </div>
        </div>
        <button class="text-bold bg-secondary-color rounded-lg h-10 font-bold w-[300px] mt-10">Save catch</button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { usePostCatch } from '~/composables/useCatchApi'

interface CatchData {
  catchDate: string
  fish: string
  weight: string
  length: string
  district: string
  method: string
  bait: string
  weather: string
  dayPeriod: string
  catchLocation: string
  catchCircumstances: string
  imgSrc: string
  acceptTermsAndConditions: boolean
}
const catchData: Ref<CatchData> = ref({
  catchDate: '',
  fish: '',
  weight: '',
  length: '',
  district: '',
  method: '',
  bait: '',
  weather: '',
  dayPeriod: '',
  catchLocation: '',
  catchCircumstances: '',
  imgSrc: '',
  acceptTermsAndConditions: false,
})

function resetInputField() {
  catchData.value = {
    catchDate: '',
    fish: '',
    weight: '',
    length: '',
    district: '',
    method: '',
    bait: '',
    weather: '',
    dayPeriod: '',
    catchLocation: '',
    catchCircumstances: '',
    imgSrc: '',
    acceptTermsAndConditions: false,
  }
}

function checkInputFields() {
  const { catchDate, fish, weight, method, bait, dayPeriod, catchLocation, catchCircumstances, imgSrc, acceptTermsAndConditions } = catchData.value

  return catchDate && fish && weight && method && bait && dayPeriod && catchLocation && catchCircumstances && acceptTermsAndConditions && imgSrc
}

function handleFileInputChange(e: any) {
  const file = e.target.files[0]
  previewFile(file)
}

function previewFile(file: any) {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onloadend = () => {
    catchData.value.imgSrc = reader.result
  }
}

async function postData() {
  if (!checkInputFields()) {
    return
  }
  try {
    await usePostCatch('/', catchData.value).then(() => {
      resetInputField()
    })
  } catch (e) {
    console.log(e)
  }
}
</script>
