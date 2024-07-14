<script setup>
import DescriptionComponent from './description.vue';
import semiboldtitle from './semiboldtitle.vue';
import LinkComponent from './contactLink.vue';
import squareimage from './squareimage.vue';
import box from './box.vue';

defineProps({
  projectDescription: String,
  projectLinkText: {
    type: String,
    default: 'Bekijk hier de code op github'
  },
  projectImage: String,
  projectTitle: String,
  projectUrl: String,
  projectImageWebp: String,

});
</script>

<template>
  <box extraClass="content-left mx-auto mb-5 w-full text-left sm:w-3/4 lg:w-1/2">
    <div class="flex">
      <div class="md:shrink-0">
        <squareimage :src="projectImage" :alt="projectTitle"
          extraClass="sm:w-32 lg:w-32 w-full h-43  rounded-lg mr-5" />
      </div>
      <div>
        <semiboldtitle :title="projectTitle" />
        <DescriptionComponent :description="projectDescription"/>
        <LinkComponent v-if="projectUrl" :href="projectUrl" :text="projectLinkText"
          :aClass="'mt-2 block text-lg font-medium leading-tight text-black hover:underline'" />
      </div>
    </div>
  </box>
</template>

<script>
export default {
  props: {
    projectDescription: String,
   
  },
};
</script>