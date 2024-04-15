<script setup>
import titlecomponent from '../components/title.vue';
</script>

<template>
  <div>
    <titlecomponent title="Strava" />
    <div class="box overflow-auto ">
      <div class="mx-auto sm:w-3/4 lg:w-1/2 w-full">
        <div class="dark:bg-slate-800 bg-gray-200  rounded-lg shadow-lg p-5 md:p-10 mx-2 text-center">
          <div class="my-2 flex flex-col items-center">
            <div
              class="dark:bg-slate-900 p-6 w-full sm:w-3/4 lg:w-1/2 mx-auto bg-white rounded-xl shadow-md overflow-hidden flex mb-3">
              <p class="dark:text-slate-400 pb-3">
                Hier kan je een oplijsting zien van mijn laatste loopjes alsook een overzicht van deze week. Ik loop
                graag als ontspanning, maar alleen wanneer het weer aangenaam is.
              </p>
            </div>
            <iframe class="mb-3 w-full sm:w-3/4 lg:w-1/2 dark:bg-slate-900 bg-white" height='454' frameborder='0'
              allowtransparency='true' scrolling='no'
              src='https://www.strava.com/athletes/7422402/latest-rides/fa96379fe34efd1a6d0a7982ff862e0c6f5a284b'></iframe>
            <iframe class="w-full sm:w-3/4 lg:w-1/2 dark:bg-slate-900 bg-white" height='160 ' frameborder='0'
              allowtransparency='true' scrolling='no'
              src='https://www.strava.com/athletes/7422402/activity-summary/fa96379fe34efd1a6d0a7982ff862e0c6f5a284b'></iframe>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.box {
  height: 85vh;
}
</style>