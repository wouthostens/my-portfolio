<script setup>
defineProps({
  title: String,
});
</script>

<template>
  <div>
    <h1 class="mx-auto my-1 text-center text-2xl font-bold text-indigo-500 dark:text-yellow-500">
      {{ title }}
    </h1>
  </div>
</template>
