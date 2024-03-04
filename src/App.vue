<script setup>
import { ref, computed } from 'vue'
import projecten from './pages/projecten.vue'
import education from './pages/education.vue'
import notFound from './pages/notFound.vue'
import home from './pages/home.vue'
import studentjobs from './pages/studentjobs.vue'
import maze from './pages/maze.vue'


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
  '/maze': maze
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || notFound
})

</script>

<template >
  <div class=" bg-white dark:bg-gray-900 content-center h-screen">
    <div
      class=" flex items-center justify-center dark:bg-slate-800 dark:text-yellow-500 text-indigo-500 z-60 fixed top-0 w-full bg-white p-4 text-center shadow-md">
      | <a class="dark:text-slate-400 dark:hover:text-yellow-500 mx-2 text-gray-700 hover:text-indigo-500" href="#/">Over
        Mezelf</a> |
      <a class="dark:text-slate-400 dark:hover:text-yellow-500 mx-2 text-gray-700 hover:text-indigo-500"
        href="#/projecten">Projecten</a> |
      <a class="dark:text-slate-400 dark:hover:text-yellow-500 mx-2 text-gray-700 hover:text-indigo-500"
        href="#/education">School</a> |
      <a class="dark:text-slate-400 dark:hover:text-yellow-500 mx-2 text-gray-700 hover:text-indigo-500"
        href="#/studentjobs">Studenten Jobs</a> |
      <span class="dark:text-slate-400  text-gray-700 font-medium mx-2">
        {{ darkMode ? '&#9728;' : '&#x1F324;' }}
      </span> 
      <label class="switch mr-2">
        <input @click="toggleDarkMode" type="checkbox">
        <span class="slider round pt-2"></span>
      </label> |
    </div>
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


