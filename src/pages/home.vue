<script setup>
import titlecomponent from '../components/title.vue';
</script>

<template>
  <div class=" ">
    <titlecomponent title="Home" />
    <div class="box mx-auto sm:w-3/4 lg:w-1/2 w-full">
      <link rel="preload" href="/images/wouthostens.webp" as="image">
      <div class="dark:bg-slate-800 bg-gray-200  rounded-lg shadow-lg p-5 md:p-10 mx-2 text-center">
        <div class="my-2">
          <img class=" h-44 rounded-lg mx-auto " src="/images/wouthostens.webp" alt="Your Name">
        </div>
        <titlecomponent title="Wout Hostens" />
        <h2 class="dark:text-slate-300 text-xl">Software developer</h2>
        <p class="dark:text-slate-400 text-gray-800 mt-4">
          Hey, mijn naam is Wout Hostens, geboren op 24 mei 2000 en momenteel woonachtig in Avelgem, België. In het dagelijkse leven probeer ik wat loop kilometers te verzamelen afhankelijk van het weer natuurlijk.  Mijn sterke punten liggen vooral in het backend gedeelte van software
          ontwikkeling.
          Ik voel me thuis bij het ontwerpen van websites en applicaties. Wat me het meeste aanspreekt aan de
          programmeer wereld is het probleem oplossend denken.
        </p>
        <p class="dark:text-slate-400 text-gray-700 mt-4">
          Je kunt mij bereiken via mijn gsm op <a href="tel:+32468166869"
            class="dark:text-slate-300 dark:hover:text-yellow-500 text-indigo-500 ">+32 468 16 68 69</a> <br> of
          contacteer me via
          <a href="mailto:wout.hostens@gmail.com"
            class="dark:text-slate-300 dark:hover:text-yellow-500 text-indigo-500 ">wout.hostens@gmail.com</a>.
          <br> Je kan me ook bereiken via LinkedIn door<a href="https://www.linkedin.com/in/Wout-Hostens/"
            class=" dark:text-slate-300 dark:hover:text-yellow-500 text-indigo-500 "> hier</a> te klikken.
        </p>
      </div>
    </div>
  </div>
</template>


<script>

</script>

<style scoped>
.box {
  height: 85vh;
}
</style>
