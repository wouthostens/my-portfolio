<template>
  <div
    :class="['rounded-2xl border border-zinc-900/10 bg-white/70 p-5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-500/5 dark:border-white/10 dark:bg-white/[0.04] md:p-7 mx-2', extraClass]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BoxComponent',
  props: {
    extraClass: {
      type: String,
      default: ''
    }
  }
}
</script>
