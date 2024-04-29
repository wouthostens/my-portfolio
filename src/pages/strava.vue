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
    <div class="h-85vh overflow-auto pb-5">
      <BoxComponent extraClass=" flex flex-col items-center mx-auto sm:w-3/4 lg:w-1/2 w-full">
        <DescriptionComponent description="Hier kun je een overzicht van mijn loopweek vinden, samen met een lijst van mijn laatste 5 loopjes. Ik geniet van mijn tijd buiten tijdens het rennen, maar als het weer het niet toelaat, ben ik uitzonderlijk ook wel eens te vinden op de loopband. Meestal verken ik de prachtige omgeving van Avelgem tijdens mijn runs. Mijn ultieme doel? Ooit een marathon lopen!"/>
        <StravaIframe src="activity-summary" />
        <StravaIframe src="latest-rides" height="454" />
      </BoxComponent>
    </div>
  </div>
</template>
