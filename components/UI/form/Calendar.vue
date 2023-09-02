<template>
  <flat-pickr
    :class="classes"
    :required="required"
    :modelValue="modelValue"
    :config="config"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup lang="ts">
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
defineProps({
  modelValue: {
    type: String,
    required: false,
  },
  required: {
    type: Boolean,
    required: false,
    default: false,
  },
  config: {
    type: Object,
    required: false,
    default: {},
  },
  placeholder: {
    type: String,
    required: true,
  },
  classes: {
    type: String,
    required: false,
    default: 'h-12 default-form',
  },
})
</script>
