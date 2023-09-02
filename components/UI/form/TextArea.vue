<template>
  <textarea
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
    default: 'h-56 default-form p-3',
  },
})
defineEmits(['update:modelValue'])
</script>
