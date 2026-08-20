<script setup>
defineProps({
  title: String,
  font: {
    type: String,
    default: 'font-bold'
  },
  height: {
    type: String,
    default: 'my-1'
  },
  otherCss: String
});
</script>

<template>
  <div class="animate-fade-up py-4 text-center">
    <h1
      :class="`${height} mx-auto font-display text-3xl tracking-tight text-zinc-900 dark:text-white md:text-4xl ${font} ${otherCss}`">
      {{ title }}
    </h1>
    <div class="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500">
    </div>
  </div>
</template>
