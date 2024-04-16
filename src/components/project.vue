<script setup>
import DescriptionComponent from './description.vue';
import semiboldtitle from './semiboldtitle.vue';
import LinkComponent from './contactLink.vue';
import squareimage from './squareimage.vue';
import box from './box.vue';
defineProps({
  projectDescription: String,
  projectImage: String,
  projectTitle: String,
  projectUrl: String,
  projectImageWebp: String,

});
</script>

<template>
  <box extraClass="content-left mx-auto mb-5 w-full text-left sm:w-3/4 lg:w-1/2">
    <div class="flex">
      <squareimage :src="projectImage" :alt="projectTitle" extraClass="h-43 w-32 mr-4" />
      <div>
        <semiboldtitle :title="projectTitle" />
        <DescriptionComponent>{{ projectDescription }}</DescriptionComponent>
        <LinkComponent :href="projectUrl" text='Bekijk hier de code op github'
          :aClass="'mt-2 block text-lg font-medium leading-tight text-black hover:underline'" />
      </div>
    </div>
  </box>
</template>
