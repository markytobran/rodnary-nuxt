<template>
  <section class="md:px-36 xl:px-20 mb-10">
    <h3 class="font-bold text-lg text-slate-100 md:text-2xl mb-5 md:mb-10">Rodnary specials</h3>
    <div class="bg-primary-color-200 w-full mb-10 rounded-xl flex gap-24 pl-32 mt-20" style="height: 550px">
      <div class="flex flex-col justify-between p-2">
        <div class="h-24 w-24 rounded-full" v-for="(item, i) in logoList.firstColumn" :key="i">
          <img :src="item.url" class="w-full h-full rounded-full" :alt="item.alt" />
        </div>
      </div>
      <div class="flex flex-col justify-between">
        <div class="h-24 w-24 rounded-full" v-for="(item, i) in logoList.secondColumn" :key="i" :class="item?.classes">
          <img :src="item.url" class="w-full h-full rounded-full" :alt="item.alt" />
        </div>
      </div>
      <div class="flex flex-col justify-between p-2">
        <div class="h-24 w-24 rounded-full" v-for="(item, i) in logoList.thirdColumn" :key="i">
          <img :src="item.url" class="w-full h-full rounded-full" :alt="item.alt" />
        </div>
      </div>
      <div class="flex flex-col justify-between">
        <div class="h-24 w-24 rounded-full" v-for="(item, i) in logoList.fourthColumn" :key="i" :class="item?.classes">
          <img :src="item.url" class="w-full h-full rounded-full" :alt="item.alt" />
        </div>
      </div>

      <div class="flex flex-col justify-between">
        <div class="h-24 w-24 bg-black rounded-full mt-10"></div>
        <div class="h-24 w-24 bg-black rounded-full mb-10"></div>
      </div>
      <div class="flex justify-between items-center -ml-32">
        <div>
          <p class="font-bold text-lg text-slate-100 text-xl md:text-5xl">Are you ready to watch them?</p>
          <NuxtLink
            to="/search"
            class="px-3 py-2 text-slate-100 font-semibold bg-secondary-color w-48 h-14 text-xl rounded-md flex items-center justify-center mt-10"
          >
            <IconPlay class="mr-3" />
            Search
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const logoList = {
  firstColumn: [
    {
      url: 'https://yt3.googleusercontent.com/ytc/AL5GRJUvWEvf_EjfUc2taDW4I7Xef5GJeqpbHf3pEY7lSQ=s88-c-k-c0x00ffffff-no-rj',
      alt: 'hello',
    },
    {
      url: 'https://yt3.googleusercontent.com/ytc/AL5GRJUvWEvf_EjfUc2taDW4I7Xef5GJeqpbHf3pEY7lSQ=s88-c-k-c0x00ffffff-no-rj',
      alt: 'hello',
    },
    {
      url: 'https://yt3.googleusercontent.com/ytc/AL5GRJUvWEvf_EjfUc2taDW4I7Xef5GJeqpbHf3pEY7lSQ=s88-c-k-c0x00ffffff-no-rj',
      alt: 'hello',
    },
    {
      url: 'https://yt3.googleusercontent.com/ytc/AL5GRJUvWEvf_EjfUc2taDW4I7Xef5GJeqpbHf3pEY7lSQ=s88-c-k-c0x00ffffff-no-rj',
      alt: 'hello',
    },
  ],
  secondColumn: [
    {
      url: 'https://yt3.googleusercontent.com/ytc/AL5GRJUvWEvf_EjfUc2taDW4I7Xef5GJeqpbHf3pEY7lSQ=s88-c-k-c0x00ffffff-no-rj',
      alt: 'hello',
      classes: '-mt-10',
    },
    {
      url: 'https://yt3.googleusercontent.com/ytc/AL5GRJUvWEvf_EjfUc2taDW4I7Xef5GJeqpbHf3pEY7lSQ=s88-c-k-c0x00ffffff-no-rj',
      alt: 'hello',
    },
    {
      url: 'https://yt3.googleusercontent.com/ytc/AL5GRJUvWEvf_EjfUc2taDW4I7Xef5GJeqpbHf3pEY7lSQ=s88-c-k-c0x00ffffff-no-rj',
      alt: 'hello',
    },
    {
      url: 'https://yt3.googleusercontent.com/ytc/AL5GRJUvWEvf_EjfUc2taDW4I7Xef5GJeqpbHf3pEY7lSQ=s88-c-k-c0x00ffffff-no-rj',
      alt: 'hello',
    },
    {
      url: 'https://yt3.googleusercontent.com/ytc/AL5GRJUvWEvf_EjfUc2taDW4I7Xef5GJeqpbHf3pEY7lSQ=s88-c-k-c0x00ffffff-no-rj',
      alt: 'hello',
      classes: '-mb-10',
    },
  ],
  thirdColumn: [
    {
      url: 'https://yt3.googleusercontent.com/ytc/AL5GRJUvWEvf_EjfUc2taDW4I7Xef5GJeqpbHf3pEY7lSQ=s88-c-k-c0x00ffffff-no-rj',
      alt: 'hello',
    },
    {
      url: 'https://yt3.googleusercontent.com/ytc/AL5GRJUvWEvf_EjfUc2taDW4I7Xef5GJeqpbHf3pEY7lSQ=s88-c-k-c0x00ffffff-no-rj',
      alt: 'hello',
    },
    {
      url: 'https://yt3.googleusercontent.com/ytc/AL5GRJUvWEvf_EjfUc2taDW4I7Xef5GJeqpbHf3pEY7lSQ=s88-c-k-c0x00ffffff-no-rj',
      alt: 'hello',
    },
    {
      url: 'https://yt3.googleusercontent.com/ytc/AL5GRJUvWEvf_EjfUc2taDW4I7Xef5GJeqpbHf3pEY7lSQ=s88-c-k-c0x00ffffff-no-rj',
      alt: 'hello',
    },
  ],
  fourthColumn: [
    {
      url: 'https://yt3.googleusercontent.com/ytc/AL5GRJUvWEvf_EjfUc2taDW4I7Xef5GJeqpbHf3pEY7lSQ=s88-c-k-c0x00ffffff-no-rj',
      alt: 'hello',
      classes: '-mt-10',
    },
    {
      url: 'https://yt3.googleusercontent.com/ytc/AL5GRJUvWEvf_EjfUc2taDW4I7Xef5GJeqpbHf3pEY7lSQ=s88-c-k-c0x00ffffff-no-rj',
      alt: 'hello',
    },
    {
      url: 'https://yt3.googleusercontent.com/ytc/AL5GRJUvWEvf_EjfUc2taDW4I7Xef5GJeqpbHf3pEY7lSQ=s88-c-k-c0x00ffffff-no-rj',
      alt: 'hello',
    },
    {
      url: 'https://yt3.googleusercontent.com/ytc/AL5GRJUvWEvf_EjfUc2taDW4I7Xef5GJeqpbHf3pEY7lSQ=s88-c-k-c0x00ffffff-no-rj',
      alt: 'hello',
    },
    {
      url: 'https://yt3.googleusercontent.com/ytc/AL5GRJUvWEvf_EjfUc2taDW4I7Xef5GJeqpbHf3pEY7lSQ=s88-c-k-c0x00ffffff-no-rj',
      alt: 'hello',
      classes: '-mb-10',
    },
  ],
}
</script>
