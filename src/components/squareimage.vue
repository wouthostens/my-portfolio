<template>
  <img :src="src" :alt="alt" :class="[' rounded-lg mx-auto m-2  object-cover', extraClass]" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    extraClass: {
      type: String,
      default: ''
    }
  }
}
</script>