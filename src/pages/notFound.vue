<script setup>
import titlecomponent from '../components/title.vue';
</script>

<template>
  <div>
    <titlecomponent title="Not Found" />
    <div class="box overflow-auto">
      <div
        class="dark:bg-slate-800 p-6 w-full sm:w-3/4 lg:w-1/2 mx-auto bg-gray-200 rounded-xl shadow-md overflow-hidden flex">
        <div>
          <p class="dark:text-slate-400">Deze pagina bestaat niet door hieronder te klikken kom je terug op de home
            pagina terecht</p>
          <a href="#/"
            class="dark:text-slate-300 dark:hover:text-yellow-500 block mt-2 mb-4 text-lg leading-tight font-medium text-black hover:underline">Ga
            terug naar de homepagina</a>
          <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div class="relative group">
              <img src="/images/Poes.jpg" alt="404" class="w-64 h-64 object-cover rounded-full">
              <span
                class="hidden group-hover:block absolute bottom-0 bg-black bg-opacity-50 text-white w-full text-center py-2">Charlie</span>
            </div>
            <div class="relative group">
              <img src="/images/Poes3.jpg" alt="404" class="w-64 h-64 object-cover rounded-full">
              <span
                class="hidden group-hover:block absolute bottom-0 bg-black bg-opacity-50 text-white w-full text-center py-2">Billy</span>
            </div>
            <div class="relative group">
              <img src="/images/Poes2.jpg" alt="404" class="w-64 h-64 object-cover rounded-full">
              <span
                class="hidden group-hover:block absolute bottom-0 bg-black bg-opacity-50 text-white w-full text-center py-2">Briek</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}

</script>

<style scoped></style>
