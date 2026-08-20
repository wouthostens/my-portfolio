<script setup>
import db from '../../firebaseconfig';
import { getDoc, doc, setDoc, Timestamp } from "firebase/firestore";
import 'firebase/firestore';

const cvUrl = 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-63acb.appspot.com/o/HostensWoutCV.pdf?alt=media&token=642fae66-0054-4c1c-828f-da7698582777';

const downloadedcv = async () => {
  const docRef = doc(db, 'cv', "aantalkeerdownloaded");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    await setDoc(docRef, {
      aantal: docSnap.data().aantal + 1,
      date: Timestamp.now(),
    });
  }
};
</script>

<template>
  <div class="h-[calc(100dvh-5.5rem)] overflow-auto">
    <link rel="prefetch" href="/images/wouthostens.webp" as="image">
    <div class="mx-auto flex w-full max-w-2xl flex-col items-center px-4 pt-6 pb-10 text-center sm:pt-12">

      <!-- Avatar met gradient ring -->
      <div class="animate-fade-up relative">
        <div
          class="absolute -inset-2 rounded-full bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 opacity-40 blur-xl">
        </div>
        <div class="relative rounded-full bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 p-1">
          <img src="/images/wouthostens.webp" alt="Wout Hostens"
            class="h-36 w-36 rounded-full object-cover ring-4 ring-white dark:ring-zinc-950" />
        </div>
      </div>

      <!-- Badge -->
      <div
        class="animate-fade-up stagger-1 mt-6 inline-flex items-center gap-2 rounded-full border border-zinc-900/10 bg-white/70 px-3.5 py-1.5 text-xs font-medium text-zinc-600 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
        <span class="relative flex h-2 w-2">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
        </span>
        Software Developer · ERP support @ EnergyVision
      </div>

      <!-- Naam -->
      <h1 class="animate-fade-up stagger-2 mt-5 font-display text-5xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-6xl">
        Wout
        <span class="bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
          Hostens
        </span>
      </h1>

      <!-- Intro -->
      <p class="animate-fade-up stagger-3 mt-6 max-w-xl text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
        Hey daar! Ik ben Wout, geboren op 24 mei 2000 en woonachtig in het prachtige Avelgem, België. Als ik niet
        bezig ben met code, kun je me vaak buiten vinden terwijl ik wat loopkilometers verzamel — afhankelijk van het
        weer natuurlijk!
        <br><br>
        Mijn passie ligt voornamelijk in het backend-gedeelte van softwareontwikkeling. Ik voel me helemaal in mijn
        element bij het ontwerpen van websites en applicaties, waarbij ik mijn skills inzet om solide en efficiënte
        systemen te creëren. Wat mij het meeste aanspreekt aan de programmeerwereld is het probleemoplossend denken:
        ik geniet ervan om uitdagingen aan te gaan en creatieve oplossingen te bedenken voor complexe problemen.
      </p>

      <!-- CTA's -->
      <div class="animate-fade-up stagger-4 mt-8 flex flex-wrap items-center justify-center gap-3">
        <a :href="cvUrl" target="_blank" @click="downloadedcv()"
          class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/30">
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 21h16" />
          </svg>
          Download CV
        </a>
        <a href="#/contact"
          class="inline-flex items-center gap-2 rounded-full border border-zinc-900/10 bg-white/70 px-5 py-2.5 text-sm font-semibold text-zinc-700 backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-500/40 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
          Contacteer mij
        </a>
      </div>

      <!-- Socials -->
      <div class="animate-fade-up stagger-5 mt-6 flex items-center gap-2">
        <a href="https://github.com/wouthostens" target="_blank" aria-label="GitHub"
          class="rounded-full border border-zinc-900/10 bg-white/70 p-2.5 text-zinc-500 backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:text-zinc-900 dark:border-white/10 dark:bg-white/5 dark:text-zinc-400 dark:hover:text-white">
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.35.95.1-.74.4-1.25.72-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.98 10.98 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.26 5.68.41.35.78 1.05.78 2.12v3.14c0 .3.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/Wout-Hostens/" target="_blank" aria-label="LinkedIn"
          class="rounded-full border border-zinc-900/10 bg-white/70 p-2.5 text-zinc-500 backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:text-zinc-900 dark:border-white/10 dark:bg-white/5 dark:text-zinc-400 dark:hover:text-white">
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
          </svg>
        </a>
        <a href="mailto:wout.hostens@gmail.com" aria-label="E-mail"
          class="rounded-full border border-zinc-900/10 bg-white/70 p-2.5 text-zinc-500 backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:text-zinc-900 dark:border-white/10 dark:bg-white/5 dark:text-zinc-400 dark:hover:text-white">
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
        </a>
        <a href="tel:+32468166869" aria-label="Telefoon"
          class="rounded-full border border-zinc-900/10 bg-white/70 p-2.5 text-zinc-500 backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:text-zinc-900 dark:border-white/10 dark:bg-white/5 dark:text-zinc-400 dark:hover:text-white">
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </a>
      </div>

    </div>
  </div>
</template>
