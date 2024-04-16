<template>
  <p :class="['dark:text-slate-400 text-gray-700', pClass]">
    <slot></slot>
    <a :href="href" target="_blank" :class="['dark:text-slate-300 dark:hover:text-yellow-500 text-indigo-500', aClass]" v-html="text"></a>
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