<template>
  <header class="fixed bottom-0 z-50 bg-primary-color-600 w-full lg:rounded-r-3xl lg:w-32 2xl:36 lg:top-0">
    <nav class="flex p-3 gap-3 lg:flex-col">
      <NuxtLink to="/">
        <img src="@/assets/img/logo/rodnary-logo.webp" alt="rodnary-logo" class="w-14 lg:w-9/12 lg:mt-2 lg:mb-10 lg:mx-auto" />
      </NuxtLink>
      <ul class="flex lg:flex-col gap-4">
        <HeaderNavItem path="/" icon="home" url="/" />
        <HeaderNavItem path="/search" url="/search?q=" icon="search" />
        <HeaderNavItem path="/catch-register" url="/catch-register" icon="catch-register" />
        <HeaderNavItem path="/reviews" url="/reviews" icon="review" />
      </ul>
    </nav>
  </header>
</template>
