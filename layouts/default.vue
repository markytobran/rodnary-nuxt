<template>
  <HeaderNav />
  <main class="lg:pl-20 2xl:pl-24">
    <NuxtLoadingIndicator :throttle="300" :duration="1000">
      <div class="fixed left-0 top-0 h-screen w-full z-50 bg-primary-color-800 flex justify-center items-center">
        <UILoader text="Loading" />
      </div>
    </NuxtLoadingIndicator>
    <slot />
  </main>
</template>
