<script setup>
import titlecomponent from '../components/title.vue';
import roundimage from '../components/roundimage.vue';
import description from '../components/description.vue';
import box from '../components/box.vue';
import subtitlewithdate from '../components/subtitlewithdate.vue';
import LinkComponent from '../components/contactLink.vue';
</script>

<template>
  <div>
    <titlecomponent title="Studenten jobs" />
    <div class="h-85vh overflow-auto">
      <div class="pb-5" v-for="(job, index) in jobs" :key="index">
        <link rel="preload" :href="job.imagesWebp" as="image">
        <box extraClass="w-full sm:w-3/4 lg:w-1/2 mx-auto flex">
          <div>
            <subtitlewithdate :title="job.title" :date="job.period" />
            <description> {{ job.description }} </description>
            <p class="dark:text-slate-500 mt-3" v-if="job.skills">Skills: {{ job.skills }}</p>
            <LinkComponent :href="job.link" :text="'Bekijk ' + job.company"
              aClass="block mt-2 mb-4 text-lg leading-tight font-medium text-black hover:underline"></LinkComponent>
          </div>
          <roundimage v-if="job.imagesWebp" :src="job.imagesWebp" :alt="job.title" />
        </box>
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
          period: 'jan 2016 - heden',
          images: '/images/codefever.jpg',
          imagesWebp: '/images/codefever.webp',
          description: 'Hierbij geef ik les aan kinderen van het tweede leerjaar tot ze het hele traject hebben doorlopen +- 16j. Ik leer hen samen met assistenten of als assistent de basis concepten van programmeren aan. Dit gebeurd in een eerste fase aan de hand van scratch en minecraft education. In een latere fase leren ze html, css, javascript, python en maken ze gebruik van een microbit.',
          skills: 'Scratch, Minecraft Education, HTML CSS JS, Python en Microbit',
          link: 'https://www.codefever.be/'
        },
        {
          title: 'Jobstudent bij Vedelux',
          company: 'Vedelux',
          period: 'okt 2022 - aug 2023 & jan 2024 - apr 2024',
          images: '/images/vedelux.png',
          imagesWebp: '/images/vedelux.webp',
          description: 'Bestaande scanning app uitbreiden en omvormen zodat er geen gebruik gemaakt wordt van excel data maar van firebase. Meer uitleg kan je vinden bij projecten. Ook heb ik allerlei andere dingen aan de hand met Python geautomatiseerd zodat er minder manueel werk nodig was bij de werknemers. ',
          skills: 'Python, Kotlin en HTML CSS JS',
          link: 'https://www.vedelux.be/'
        },
        {
          title: 'Jobstudent bij Exante IT',
          company: 'Exante IT',
          period: 'jul 2022 - aug 2022',
          description: 'Verder ontwikkelen van een app in kotlin. Voor de data opslag werd gebruik gemaakt van een firebase database. Waren vooral basis dingen en kleine aanpassingen.',
          skills: 'Kotlin',
          link: 'https://www.exante-it.be/'
        },
        {
          title: 'Jobstudent bij Ubuntu Zwevegem',
          company: 'Ubuntu Zwevegem',
          period: 'nov 2019 - jan 2020 & jul 2023',
          images: '/images/groepubuntu.png',
          imagesWebp: '/images/groepubuntu.webp',
          skills: 'Python',
          description: 'Netwerkkabels situeren & controleren, nieuwe pc’s installeren en in domein steken. Invoegen of aanpassen van data waarbij ik gebruik heb gemaakt van een klein python script om dit makkelijker te laten verlopen.',
          link: 'https://groepubuntu.be/ '
        }
      ]
    }
  }
}
</script>
