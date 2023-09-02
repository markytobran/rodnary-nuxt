<template>
  <input
    :class="classes"
    :required="required"
    :placeholder="placeholder"
    :value="modelValue"
    :type="type"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  required: {
    type: Boolean,
    required: false,
    default: false,
  },
  type: {
    type: String,
    required: false,
    default: 'text',
  },
  classes: {
    type: String,
    required: false,
    default: 'h-12 default-form',
  },
})
defineEmits(['update:modelValue'])
</script>
