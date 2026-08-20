<template>
  <div class="h-85vh overflow-auto pb-10">
    <div class="mx-auto flex w-full max-w-2xl flex-col items-center px-4 pt-10 text-center">
      <p
        class="animate-fade-up font-display text-8xl font-bold tracking-tight">
        <span class="bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">404</span>
      </p>
      <h1 class="animate-fade-up stagger-1 mt-4 font-display text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
        Deze pagina bestaat niet
      </h1>
      <p class="animate-fade-up stagger-2 mt-2 text-[15px] text-zinc-600 dark:text-zinc-400">
        Maar geen zorgen — de katten wijzen je de weg terug.
      </p>
      <a href="#/"
        class="animate-fade-up stagger-3 mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/30">
        ← Terug naar de homepagina
      </a>
      <div class="animate-fade-up stagger-4 mt-10 flex flex-col gap-4 sm:flex-row">
        <div class="group relative">
          <img src="/images/Poes.jpg" alt="404Charlie"
            class="h-48 w-48 rounded-3xl object-cover ring-1 ring-zinc-900/10 transition-transform duration-300 group-hover:scale-105 dark:ring-white/10">
          <span
            class="absolute bottom-0 hidden w-full rounded-b-3xl bg-black/50 py-2 text-center text-white backdrop-blur group-hover:block">Charlie</span>
        </div>
        <div class="group relative">
          <img src="/images/Poes3.jpg" alt="404Billy"
            class="h-48 w-48 rounded-3xl object-cover ring-1 ring-zinc-900/10 transition-transform duration-300 group-hover:scale-105 dark:ring-white/10">
          <span
            class="absolute bottom-0 hidden w-full rounded-b-3xl bg-black/50 py-2 text-center text-white backdrop-blur group-hover:block">Billy</span>
        </div>
        <div class="group relative">
          <img src="/images/Poes2.jpg" alt="404Briek"
            class="h-48 w-48 rounded-3xl object-cover ring-1 ring-zinc-900/10 transition-transform duration-300 group-hover:scale-105 dark:ring-white/10">
          <span
            class="absolute bottom-0 hidden w-full rounded-b-3xl bg-black/50 py-2 text-center text-white backdrop-blur group-hover:block">Briek</span>
        </div>
      </div>
    </div>
  </div>
</template>
