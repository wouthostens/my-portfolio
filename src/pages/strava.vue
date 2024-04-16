<script setup>
import TitleComponent from '../components/title.vue';
import BoxComponent from '../components/box.vue';
import DescriptionComponent from '../components/description.vue';
</script>

<template>
  <div>
    <TitleComponent title="Strava" />
    <div class="h-85vh overflow-auto ">
        <BoxComponent extraClass=" flex flex-col items-center mx-auto sm:w-3/4 lg:w-1/2 w-full">
            <DescriptionComponent>
              Hier kan je een oplijsting zien van mijn laatste loopjes alsook een overzicht van deze week. Ik loop
              graag als ontspanning, maar alleen wanneer het weer aangenaam is. Dit doe ik meestal in de omgeving van Avelgem. Het doel is om ooit een marathon te lopen.
            </DescriptionComponent>
            <iframe class="mb-3 w-full sm:w-3/4 lg:w-1/2 dark:bg-slate-900 bg-white" height='454' frameborder='0'
              allowtransparency='true' scrolling='no'
              src='https://www.strava.com/athletes/7422402/latest-rides/fa96379fe34efd1a6d0a7982ff862e0c6f5a284b'></iframe>
            <iframe class="w-full sm:w-3/4 lg:w-1/2 dark:bg-slate-900 bg-white" height='160 ' frameborder='0'
              allowtransparency='true' scrolling='no'
              src='https://www.strava.com/athletes/7422402/activity-summary/fa96379fe34efd1a6d0a7982ff862e0c6f5a284b'></iframe>
        </BoxComponent>
    </div>
  </div>
</template>
