<script setup>
import titlecomponent from '../components/title.vue';
</script>

<template>
  <div>
    <titlecomponent title="Opleidingen en stages" />
    <div class="box overflow-auto">
      <div class="pb-5" v-for="(education, index) in timeline" :key="index">
        <link rel="preload" :href="education.imageswebp" as="image">
        <div
          class="dark:bg-slate-800 p-6 w-full sm:w-3/4 lg:w-1/2 mx-auto bg-gray-200 rounded-xl shadow-md overflow-hidden flex">
          <div>
            <h3 class="dark:text-slate-300 text-lg font-semibold">Opleidingen:</h3>
            <div class="flex items-center">
              <div class="dark:text-yellow-500 uppercase tracking-wide text-sm text-indigo-500 font-semibold">{{
        education.degree }}</div>
              <p class="dark:text-slate-300 ml-5 ">{{ education.year }}</p>
            </div>
            <p class="dark:text-slate-300">{{ education.school }}</p>
            <p class="dark:text-slate-400"> {{ education.discription }}</p>
            <a :href="education.link"
              class="dark:text-slate-300 dark:hover:text-yellow-500 block mt-2 mb-4 text-lg leading-tight font-medium text-black hover:underline">Bekijk
              hier info over de opleiding</a>
            <div class="ml-10" v-if="education.internships">
              <h3 class="dark:text-slate-300 text-lg font-semibold">Stages:</h3>
              <div v-for="(internship, index) in education.internships" :key="index">
                <div class="flex">
                  <p class="dark:text-yellow-500 uppercase tracking-wide text-sm text-indigo-500 font-semibold">Stage
                    bij {{ internship.company }}</p>
                  <p class="dark:text-slate-300 ml-5">{{ internship.period }}</p>
                </div>
                <p class="dark:text-slate-400 my-2"> {{ internship.discription }}</p>
                <p class="dark:text-slate-500">Skills: {{ internship.skills }}</p>
                <a :href="internship.link"
                  class="dark:text-slate-300 dark:hover:text-yellow-500 block mt-2 mb-4 text-lg leading-tight font-medium text-black hover:underline">Bekijk
                  {{ internship.company }}</a>
              </div>
            </div>
          </div>
          <img :src="education.imageswebp" alt="Education Image" class="ml-auto  w-16 h-16 object-cover rounded-full">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeline: [
        {
          degree: 'Graduaat internet of things',
          year: '2022-2024',
          school: 'Vives Kortrijk',
          discription: 'Tijdens deze opleiding heb ik veel bijgeleerd over het programmeren van microcontrollers en het elektriciteit/hardware verhaal. Eigenlijk kwam alles aanbod wat met het internet of things te maken heeft, zoals het programmeren van sensoren, aansluiten van sensoren en het netwerk beheer/communicatie verhaal.',
          status: '',
          link: 'https://www.vives.be/nl/opleidingen/technologiecampus-kortrijk/graduaat/internet-of-things',
          images: '/images/vives.png',
          imageswebp: '/images/vives.webp',
          internships: [
            {
              company: 'Catael',
              period: 'sept 2023 - jun 2024',
              discription: 'Tijdens mijn stage heb ik kunnen proeven van heel wat zaken waarvan de belangrijkste het programmeren van een plcNext was. Ook heb ik een robot kunnen programmeren met Roboguide. Verder heb ik een demokoffer kunnen ontwikkelen die het gebruik van Symeo sensoren demonstreert.',
              skills: 'PlcNext, Roboguide',
              link: 'https://www.catael.be/'
            }
          ]
        },
        {
          degree: 'Graduaat programmeren',
          year: '2019-2021',
          school: 'Vives Kortrijk',
          discription: 'Tijdens deze opleiding heb ik veel bijgeleerd over alles wat met programmeren te maken heeft. Dit gaat dan over webapplicaties, desktop applicaties en mobiele applicaties. Ook heb ik veel bijgeleerd over het testen van code en het werken in teamverband. Om dit allemaal te kunnen doen kwam er ook een deel over databases en netwerken aanbod.',
          status: '',
          link: 'https://www.vives.be/nl/opleidingen/technologiecampus-kortrijk/graduaat/programmeren',
          images: '/images/vives.png',
          imageswebp: '/images/vives.webp',
          internships: [
            {
              company: 'TVH',
              period: 'sept 2021',
              discription: 'Tijdens deze stage heb ik een springboot applicatie gemaakt die data van gitlab ophaalt en waaruit de gebruiker een specifiek project kan kiezen. Dan krijgt de gebruiker een puml file te zien met de relaties tussen de klassen. Dit was een korte stage van 1 maand. Maar ik heb wel veel bijgeleerd over springboot en java. Ook heb ik kwam unit testing aanbod.',
              skills: 'Springboot, Java en Unit testing',
              link: 'https://www.tvh.com/'
            },
            {
              company: 'Sweet Mustard',
              period: 'jan 2021 - jun 2021',
              skills: 'Springboot, Java, React & Redux',
              discription: 'Bij Sweet Mustard heb ik met 2 frontend stagairs een applicatie gemaakt die cv’s kan genereren. Ik heb vooral gewerkt aan de backend. Hier heb ik veel bijgeleerd over springboot en java. Tussendoor heb ik ook heel wat zaken van React en Redux kunnen bijleren door de samenwerking met de frontend stagairs.',
              link: 'https://www.sweetmustard.be/'
            },
            {
              company: 'Cuarta',
              period: 'sept 2020 - dec 2020',
              discription: 'Bij Cuarta heb ik een tool gemaakt die Delphi code kan omzetten naar c#. Dit was een tool die binnen het bedrijf al gebruikt werd maar nog fine tuning aan nodig was. Hier heb ik veel bijgeleerd over c# en Delphi. Ook heb ik veel bijgeleerd over het omzetten van code.',
              skills: 'Delphi en C#',
              link: 'https://www.cuarta.be/'
            }
          ]
        },
        {
          degree: 'informatica beheer',
          year: '2016-2019',
          school: 'Heilig Hartcollege Waregem',
          discription: 'Tijdens deze opleiding heb ik veel bijgeleerd over het beheren van een netwerk en allerlei zaken binnen het programmeren. Dit was een ruime eerste kennismaken met het informatica verhaal waar verschillende aspecten aanbod kwamen. ',
          images: '/images/hhc.png',
          imageswebp: '/images/hhc.webp',
          link: 'https://www.collegewaregem.be/studieaanbod/3-de-graad/informatica-beheer',

        }
      ]
    }
  }
}
</script>

<style scoped>
.box {
  height: 85vh;
}
</style>
