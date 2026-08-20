<script setup>
import DescriptionComponent from './description.vue';
import semiboldtitle from './semiboldtitle.vue';
import squareimage from './squareimage.vue';
import box from './box.vue';

defineProps({
  projectDescription: String,
  projectLinkText: {
    type: String,
    default: 'Bekijk de code op GitHub'
  },
  projectImage: String,
  projectTitle: String,
  projectUrl: String,
  projectImageWebp: String,
});
</script>

<template>
  <box extraClass="animate-fade-up mx-auto mb-5 w-full text-left sm:w-3/4 lg:w-1/2">
    <div class="flex flex-col gap-5 sm:flex-row">
      <div class="shrink-0">
        <squareimage :src="projectImage" :alt="projectTitle" extraClass="w-full sm:w-36 object-cover" />
      </div>
      <div class="min-w-0">
        <semiboldtitle :title="projectTitle" />
        <DescriptionComponent :description="projectDescription" />
        <a v-if="projectUrl" :href="projectUrl" target="_blank"
          class="group mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 transition-colors hover:text-fuchsia-500 dark:text-indigo-400 dark:hover:text-fuchsia-400">
          {{ projectLinkText }}
          <span class="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </div>
  </box>
</template>
