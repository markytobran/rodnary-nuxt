<template>
  <select :class="classes" @change="$emit('update:modelValue', $event.target.value)" :value="modelValue" :required="required">
    <option value="" selected disabled hidden>{{ defaultOption }}</option>
    <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
  </select>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  defaultOption: {
    type: String,
    required: true,
  },
  required: {
    type: Boolean,
    required: false,
    default: false,
  },
  options: {
    type: Array as PropType<string[]>,
    required: true,
  },
  classes: {
    type: String,
    required: false,
    default: 'h-12 default-form',
  },
})
defineEmits(['update:modelValue'])
</script>
