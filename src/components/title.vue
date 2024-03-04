<script setup>
import { ref } from 'vue'

defineProps({
    title: String
})

</script>

<template>
  <div >
    <h1 class="dark:text-yellow-500 mx-auto text-4xl font-bold text-center text-indigo-500">{{ title }}</h1>
  </div>
</template>


<style scoped>
h1 {
  font-size: 24px;
}
</style>
