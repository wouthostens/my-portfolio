<template>
  <img :src="src" :alt="alt"
    :class="['mx-auto m-2 rounded-xl ring-1 ring-zinc-900/10 dark:ring-white/10', extraClass]" />
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
