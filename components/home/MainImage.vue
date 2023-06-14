<template>
  <section class="relative home-page">
    <picture>
      <source srcset="@/assets/img/home-page/home-background-mobile.webp" media="(max-width: 600px)" />
      <source srcset="@/assets/img/home-page/home-background-tablet.webp" media="(max-width: 991px)" />
      <img src="@/assets/img/home-page/home-background.webp" alt="title" class="absolute w-full -top-10 md:top-0 h-screen" />
    </picture>
    <img
      id="leaf1"
      class="w-12 h-12 absolute bottom-1/3 left-48 transform rotate-90 leafs"
      src="@/assets/img/home-page/leaf1.webp"
      alt="autumn-leaf"
    />
    <img id="leaf2" class="w-10 h-10 absolute bottom-1/3 right-12 leafs" src="@/assets/img/home-page/leaf2.webp" alt="autumn-leaf" />
    <img
      id="leaf3"
      src="@/assets/img/home-page/autumn-leaf.webp"
      alt="autumn-leaf"
      class="w-12 h-12 absolute top-1/3 left-3/12 md:left-2/4 right-12 leafs rotate-180"
    />
    <img
      id="leaf4"
      class="w-12 h-12 absolute left-10 md:left-auto md:bottom-1/3 md:right-1/3 transform rotate-90 leafs"
      src="@/assets/img/home-page/leaf1.webp"
      alt="autumn-leaf"
    />
    <img id="leaf5" class="w-10 h-10 absolute bottom-2/3 left-48 leafs" alt="autumn-leaf" src="@/assets/img/home-page/leaf2.webp" />
    <img
      id="leaf6"
      src="@/assets/img/home-page/autumn-leaf.webp"
      alt="autumn-leaf"
      class="w-12 h-12 absolute left-10 top-1/3 md:top-auto md:left-auto md:bottom-1/3 md:right-2/3 transform rotate-90 leafs"
    />
    <p class="hidden md:block absolute bottom-3 right-48 text-white font-bold font-serif">Happiness isn't found, it's created within us</p>
  </section>
</template>

<style scoped>
.home-page {
  height: 95vh;
}
.leafs {
  filter: drop-shadow(22px -12px 7px rgba(0, 0, 0, 0.5));
}

#leaf1,
#leaf4 {
  animation: leaf1 5s infinite alternate-reverse;
}

#leaf2,
#leaf5 {
  animation: leaf2 5s infinite alternate-reverse;
}

#leaf3,
#leaf6 {
  animation: leaf3 5s infinite alternate-reverse;
}

@keyframes leaf1 {
  from {
    transform: translateY(40px) rotate(90deg);
  }
  to {
    transform: translateY(0) rotate(120deg);
  }
}

@keyframes leaf2 {
  from {
    transform: translateY(0) rotate(110deg);
  }
  to {
    transform: translateY(20px) rotate(120deg);
  }
}

@keyframes leaf3 {
  from {
    transform: translateY(0) rotate(0deg);
  }
  to {
    transform: translateY(40px) rotate(80deg);
  }
}
</style>
