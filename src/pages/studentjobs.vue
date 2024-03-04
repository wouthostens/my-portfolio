<script setup>
import titlecomponent from '../components/title.vue';
</script>

<template>
    <div class="box overflow-auto">
      <titlecomponent title="Studenten jobs" />
      <div class="pb-5" v-for="(job, index) in jobs" :key="index">
        <div class="dark:bg-slate-800 p-6 w-1/2 mx-auto bg-gray-200 rounded-xl shadow-md overflow-hidden relative">
          <div>
            <h3 class="dark:text-yellow-500 text-lg font-semibold">{{ job.title }}</h3>
            <div class="dark:text-slate-300 uppercase tracking-wide text-sm text-indigo-500 font-semibold">{{ job.period }}</div>
            <p class="dark:text-slate-400">{{ job.description }}</p>
            <p class="dark:text-slate-500 mt-3" v-if="job.skills">Skills: {{ job.skills }}</p>
            <a :href="job.link" class="dark:text-slate-300 dark:hover:text-yellow-500 block mb-4 text-lg leading-tight font-medium text-black hover:underline ">Bekijk {{ job.company }}</a>
          </div>
          <img v-if="job.images" :src="job.images" alt="studenten job Image" class="absolute top-2 right-5 w-16 h-16 object-cover rounded-full">
        </div>
      </div>
    </div>
  </template>

<script>
export default {
    data() {
        return {
            jobs: [
                {
                    title: 'Jobstudent bij Codefever',
                    company: 'Codefever',
                    period: 'sept 2016 - heden',
                    images: '/images/codefever.jpg',
                    description: 'Hierbij geef ik les aan kinderen van het tweede leerjaar tot ze het hele traject hebben doorlopen +- 16j. Ik leer hen samen met assistenten of als assistent de basis concepten van programmeren aan. Dit gebeurd in een eerste fase aan de hand van scratch en minecraft education. In een latere fase leren ze html, css, javascript, python en maken ze gebruik van een microbit.',
                    skills: 'Scratch, Minecraft Education, HTML CSS JS, Python en Microbit',
                    link: 'https://www.codefever.be/'
                },
                {
                    title: 'Jobstudent bij Vedelux',
                    company: 'Vedelux',
                    period: 'okt 2022 - aug 2023',
                    images: '/images/vedelux.png',
                    description: 'Bestaande scanning app uitbreiden en omvormen zodat er geen gebruik gemaakt wordt van excel data maar van firebase. Meer uitleg kan je vinden bij projecten.',
                    skills: 'Python, Kotlin en HTML CSS JS',
                    link: 'https://www.vedelux.be/'
                },
                {
                    title: 'Jobstudent bij Exante IT',
                    company: 'Exante IT',
                    period: 'jul 2022 - aug 2022',
                    description: 'Verder ontwikkelen van een app in kotlin. Voor de data opslag werd gebruik gemaakt van een firebase database.',
                    skills: 'Kotlin',
                    link: 'https://www.exante-it.be/'
                },
                {
                    title: 'Jobstudent bij Ubuntu Zwevegem',
                    company: 'Ubuntu Zwevegem',
                    period: 'nov 2019 - jan 2020 & jul 2023',
                    images: '/images/groepubuntu.png',
                    skills: 'Python',
                    description: 'Netwerkkabels situeren & controleren, nieuwe pc’s installeren en in domein steken. Invoegen of aanpassen van data waarbij ik gebruik heb gemaakt van een klein python script om dit makkelijker te laten verlopen.',
                    link: 'https://groepubuntu.be/ '
                }
            ]
        }
    }
}
</script>

<style scoped>
.box {
    height: 630px;
}
</style>
