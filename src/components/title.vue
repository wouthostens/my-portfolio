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
  <div>
    <h1 :class="`${height} mx-auto text-center text-2xl  text-indigo-500 dark:text-yellow-500 ${font} ${otherCss}`">
      {{ title }}
    </h1>
  </div>
</template>