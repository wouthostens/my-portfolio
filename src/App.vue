<script setup>
import { ref, computed } from 'vue'
import projecten from './pages/projecten.vue'
import education from './pages/education.vue'
import notFound from './pages/notFound.vue'
import home from './pages/home.vue'
import studentjobs from './pages/studentjobs.vue'
import maze from './pages/maze.vue'
import strava from './pages/strava.vue'
import contact from './pages/contact.vue'


const darkMode = ref(true);
document.body.classList.add('dark');

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
  if (darkMode.value) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
};

defineExpose({
  toggleDarkMode
});

const routes = {
  '/': home,
  '/education': education,
  '/projecten': projecten,
  '/studentjobs': studentjobs,
  '/snake': maze,
  '/strava': strava,
  '/contact': contact
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || notFound
})

</script>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },
};
</script>

<template>
  <div class=" bg-white dark:bg-gray-900 content-center h-screen ">
    <nav
      class="flex items-center justify-between flex-wrap bg-white p-4 text-center shadow-md dark:bg-slate-800 dark:text-yellow-500 text-indigo-500 z-60 fixed top-0 w-full">
      <div class="flex items-center flex-shrink-0 text-white mr-6 lg:hidden">
        <!-- Empty div to balance the flexbox -->
      </div>
      <div class="flex-1 lg:hidden">
        <button @click="open = !open"
          class="flex items-center px-3 py-2 border-4 rounded dark:bg-slate-700 dark:text-yellow-400 dark:border-yellow-400 border-indigo-400 text-indigo-400 bg-white mx-auto">
          <!-- Hamburger icon -->
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="flex items-center flex-shrink-0 text-white mr-6 lg:hidden">
        <!-- Empty div to balance the flexbox -->
      </div>
      <div :class="{ 'block': open, 'hidden': !open }" class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <span class="hidden lg:inline">|</span>
          <a @click="open = false" href="#/"
            class="block mt-4 lg:inline-block lg:mt-0 dark:text-slate-400 dark:hover:text-yellow-500 mx-2 text-gray-700 hover:text-indigo-500">Over
            Mezelf</a>
          <span class="hidden lg:inline">|
          </span> <a @click="open = false" href="#/projecten"
            class="block mt-4 lg:inline-block lg:mt-0 dark:text-slate-400 dark:hover:text-yellow-500 mx-2 text-gray-700 hover:text-indigo-500">Projecten</a>
          <span class="hidden lg:inline">|
          </span> <a @click="open = false" href="#/education"
            class="block mt-4 lg:inline-block lg:mt-0 dark:text-slate-400 dark:hover:text-yellow-500 mx-2 text-gray-700 hover:text-indigo-500">School</a>
          <span class="hidden lg:inline">| </span>
          <a @click="open = false" href="#/studentjobs"
            class="block mt-4 lg:inline-block lg:mt-0 dark:text-slate-400 dark:hover:text-yellow-500 mx-2 text-gray-700 hover:text-indigo-500">Studenten
            Jobs</a>
          <span class="hidden lg:inline">|</span>
          <a @click="open = false" href="#/snake"
            class="block mt-4 lg:inline-block lg:mt-0 dark:text-slate-400 dark:hover:text-yellow-500 mx-2 text-gray-700 hover:text-indigo-500">Snake
            game</a>
          <span class="hidden lg:inline">|</span>
          <a @click="open = false" href="#/strava"
            class="block mt-4 lg:inline-block lg:mt-0 dark:text-slate-400 dark:hover:text-yellow-500 mx-2 text-gray-700 hover:text-indigo-500">Mijn strava</a>
          <span class="hidden lg:inline">|</span>
          <a @click="open = false" href="#/contact"
            class="block mt-4 lg:inline-block lg:mt-0 dark:text-slate-400 dark:hover:text-yellow-500 mx-2 text-gray-700 hover:text-indigo-500">Contact <menu></menu></a>
          <span class="hidden lg:inline">|</span>
          <span @click="toggleDarkMode"
            class="dark:text-slate-400 dark:hover:text-yellow-500 hover:text-indigo-500 text-gray-700 font-medium mx-2">
            {{ darkMode ? '&#9728;' : '&#x1F324;' }}
          </span>
          <span class="hidden lg:inline">|</span>
        </div>
      </div>
    </nav>
    <div class=" pt-16">
      <component class="" :is="currentView" />
    </div>
  </div>
</template>

<style>
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 15px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  padding-top: 5px;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #EAB308;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 12px;
  width: 12px;
  left: 2px;
  bottom: 1.5px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked+.slider {
  background-color: #6366F1;
}

input:focus+.slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked+.slider:before {
  -webkit-transform: translateX(15px);
  -ms-transform: translateX(15px);
  transform: translateX(15px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 15px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
