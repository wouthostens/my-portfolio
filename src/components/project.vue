<script setup>

defineProps({
  projectDescription: String,
  projectImage: String,
  projectTitle: String,
  projectUrl: String,
  projectImageWebp: String

})
</script>

<template>
<div class="dark:bg-slate-800 sm:w-3/4 lg:w-1/2 w-full mb-5 p-6  mx-auto bg-gray-200   rounded-xl shadow-md   pt-2 text-left content-left">
      <link rel="preload" :href="projectImageWebp" as="image">
      <div class="md:flex">
        <div class="md:shrink-0">
          <img class=" m-5 object-cover w-32 h-43  rounded-lg" :src="projectImageWebp" :alt="projectImageWebp">
        </div>
        <div class="pb-8 mt-5">
          <div class="dark:text-yellow-500 uppercase tracking-wide text-sm text-indigo-500 font-semibold">{{ projectTitle }}</div>
          <p class="dark:text-slate-400 mt-2 mr-2 text-black-500">{{ projectDescription }}</p>
          <a target="_blank" :href="projectUrl" class="dark:text-slate-300 dark:hover:text-yellow-500 block mt-2 text-lg leading-tight font-medium text-black hover:underline">Bekijk hier de code op github</a>
        </div>
      </div>
    </div>
</template>

<style scoped>

.read-the-docs {
  color: #888;
}
</style>
