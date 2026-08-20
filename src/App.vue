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
import expoticket from './pages/expoticket.vue'

const savedTheme = localStorage.getItem('theme')
const darkMode = ref(savedTheme ? savedTheme === 'dark' : true)
document.body.classList.toggle('dark', darkMode.value)

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value
  document.body.classList.toggle('dark', darkMode.value)
  localStorage.setItem('theme', darkMode.value ? 'dark' : 'light')
}

const open = ref(false)

const routes = {
  '/': home,
  '/education': education,
  '/projecten': projecten,
  '/studentjobs': studentjobs,
  '/snake': maze,
  '/vrijetijd': strava,
  '/contact': contact,
  '/vroemvroem': expoticket
}

const links = [
  { to: '#/', label: 'Over mij' },
  { to: '#/projecten', label: 'Projecten' },
  { to: '#/education', label: 'Opleiding' },
  { to: '#/studentjobs', label: 'Jobs' },
  { to: '#/vrijetijd', label: 'Vrije tijd' },
  { to: '#/snake', label: 'Snake' },
  { to: '#/contact', label: 'Contact' },
]

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || notFound
})

const isActive = (link) => (currentPath.value || '#/') === link.to
</script>

<template>
  <div class="min-h-screen">
    <nav class="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3">
      <div
        class="relative flex w-full max-w-3xl items-center justify-between gap-1 rounded-2xl border border-zinc-900/10 bg-white/70 px-3 py-2 shadow-lg shadow-zinc-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/60 md:w-auto md:rounded-full">
        <a href="#/" @click="open = false" class="px-2 font-display text-sm font-bold tracking-tight text-zinc-900 dark:text-white">
          wout<span class="bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">.hostens</span>
        </a>

        <!-- Desktop links -->
        <div class="hidden items-center gap-1 md:flex">
          <a v-for="link in links" :key="link.to" :href="link.to"
            class="rounded-full px-3 py-1.5 text-sm font-medium transition-colors"
            :class="isActive(link)
              ? 'bg-zinc-900/5 text-zinc-900 dark:bg-white/10 dark:text-white'
              : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'">
            {{ link.label }}
          </a>
        </div>

        <div class="flex items-center gap-1">
          <!-- Dark mode toggle -->
          <button @click="toggleDarkMode" aria-label="Wissel thema"
            class="rounded-full p-2 text-zinc-500 transition-colors hover:bg-zinc-900/5 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-white">
            <svg v-if="darkMode" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32 1.41-1.41" />
            </svg>
            <svg v-else class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          </button>

          <!-- Mobiel hamburger -->
          <button @click="open = !open" aria-label="Menu"
            class="rounded-full p-2 text-zinc-500 transition-colors hover:bg-zinc-900/5 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-white md:hidden">
            <svg v-if="!open" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
            <svg v-else class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <!-- Mobiel menu -->
        <div v-if="open"
          class="absolute inset-x-0 top-full mt-2 flex flex-col gap-1 rounded-2xl border border-zinc-900/10 bg-white/90 p-2 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/90 md:hidden">
          <a v-for="link in links" :key="link.to" :href="link.to" @click="open = false"
            class="rounded-xl px-4 py-2.5 text-sm font-medium transition-colors"
            :class="isActive(link)
              ? 'bg-zinc-900/5 text-zinc-900 dark:bg-white/10 dark:text-white'
              : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'">
            {{ link.label }}
          </a>
        </div>
      </div>
    </nav>

    <div class="pt-20">
      <component :is="currentView" />
    </div>
  </div>
</template>
