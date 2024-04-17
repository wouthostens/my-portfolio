<script setup>
import TitleComponent from '../components/title.vue';
import BoxComponent from '../components/box.vue';
import DescriptionComponent from '../components/description.vue';
import StravaIframe from '../components/stravaiframe.vue';
</script>

<template>
  <div>
    <link rel="prefetch"
      href="https://www.strava.com/athletes/7422402/latest-rides/fa96379fe34efd1a6d0a7982ff862e0c6f5a284b"
      as="document">
    <link rel="prefetch"
      href="https://www.strava.com/athletes/7422402/activity-summary/fa96379fe34efd1a6d0a7982ff862e0c6f5a284b"
      as="document">
    <TitleComponent title="Strava" />
    <div class="h-85vh overflow-auto ">
      <BoxComponent extraClass=" flex flex-col items-center mx-auto sm:w-3/4 lg:w-1/2 w-full">
        <DescriptionComponent>
          Hier kan je  een overzicht van deze week zien alsook een oplijsting van mijn laatste 5 loopjes. Ik loop
          graag als ontspanning, maar alleen wanneer het weer aangenaam is. Dit doe ik meestal in de omgeving van
          Avelgem. Het doel is om ooit een marathon te lopen.
        </DescriptionComponent>
        <StravaIframe src="activity-summary" />
        <StravaIframe src="latest-rides" height="454" />
      </BoxComponent>
    </div>
  </div>
</template>
