<script setup>
defineProps({
  projectDescription: String,
  projectImage: String,
  projectTitle: String,
  projectUrl: String,
  projectImageWebp: String,

});
</script>

<template>
  <div
    class="content-left mx-auto mb-5 w-full rounded-xl bg-gray-200 p-6 pt-2 text-left shadow-md dark:bg-slate-800 sm:w-3/4 lg:w-1/2"
  >
    <link rel="preload" :href="projectImageWebp" as="image">
    <div class="md:flex">
      <div class="md:shrink-0">
        <img class=" h-43 m-5 w-32 rounded-lg object-cover" :src="projectImageWebp" alt="Simon Says">
      </div>
      <div class="mt-5 pb-8">
        <h2 class="text-sm font-semibold uppercase tracking-wide text-indigo-500 dark:text-yellow-500">
          {{ projectTitle }}
        </h2>
        <p class="mr-2 mt-2 text-black dark:text-slate-400">
          {{ projectDescription }}
        </p>
        <a
          target="_blank" :href="projectUrl"
          class="mt-2 block text-lg font-medium leading-tight text-black hover:underline dark:text-slate-300 dark:hover:text-yellow-500"
        >Bekijk hier de code op github</a>
      </div>
    </div>
  </div>
</template>
