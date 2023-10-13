<template>
  <li :class="props.name" class="list-none">
    <a
      :href="props.url"
      class="social-icon no-underline absolute block mr-20 w-10 h-5 md:w-14 md:h-7 bg-white text-left before:bg-slate-200 after:bg-slate-400"
      target="_blank"
    >
      <slot></slot>
    </a>
  </li>
</template>

<script setup lang="ts">
const props = defineProps({ name: String, url: String })
</script>

<style scoped>
.social-icon {
  transform: rotate(-20deg) skew(25deg) translate(0, 0);
  transition: 0.5s;
  box-shadow: -20px 20px 10px rgba(0, 0, 0, 0.5);
}
.social-icon:before {
  content: '';
  position: absolute;
  top: 10px;
  left: -20px;
  height: 100%;
  width: 20px;
  transform: 0.5s;
  transform: rotate(0deg) skewY(-45deg);
}
.social-icon:after {
  content: '';
  position: absolute;
  bottom: -20px;
  left: -10px;
  height: 20px;
  width: 100%;
  transform: 0.5s;
  transform: rotate(0deg) skewX(-45deg);
}

.social-icon:hover {
  transform: rotate(-30deg) skew(25deg) translate(20px, -15px);
  box-shadow: -50px 50px 50px rgba(0, 0, 0, 0.5);
}
</style>
