<template>
  <p :class="['text-[15px] text-zinc-600 dark:text-zinc-400', pClass]">
    <slot></slot>
    <a :href="href" target="_blank"
      :class="['font-medium text-indigo-600 underline-offset-4 transition-colors hover:text-fuchsia-500 hover:underline dark:text-indigo-400 dark:hover:text-fuchsia-400', aClass]"
      v-html="text"></a>
  </p>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    pClass: {
      type: String,
      default: ''
    },
    aClass: {
      type: String,
      default: ''
    }
  }
}
</script>
