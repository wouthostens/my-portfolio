<script setup>
import TitleComponent from '../components/title.vue';
import roundimage from '../components/roundimage.vue';
import description from '../components/description.vue';
import box from '../components/box.vue';
import subtitlewithdate from '../components/subtitlewithdate.vue';
import LinkComponent from '../components/contactLink.vue';
</script>

<template>
  <div>
    <TitleComponent title="Studenten jobs" />
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
          description: 'Hierbij geef ik les aan kinderen van het tweede leerjaar tot ze het hele traject hebben doorlopen, ongeveer tot ze 16 jaar oud zijn. Ik leer hen, samen met assistenten of als assistent, de basisconcepten van programmeren. Dit gebeurt in eerste instantie met behulp van Scratch en Minecraft Education. In latere fasen leren ze HTML, CSS, JavaScript, Python en maken ze gebruik van een microbit.',
          skills: 'Scratch, Minecraft Education, HTML CSS JS, Python en Microbit',
          link: 'https://www.codefever.be/'
        },
        {
          title: 'Jobstudent bij Vedelux',
          company: 'Vedelux',
          period: 'okt 2022 - aug 2023 & jan 2024 - apr 2024',
          images: '/images/vedelux.png',
          imagesWebp: '/images/vedelux.webp',
          description: 'Ik ben bezig met het uitbreiden en herstructureren van een bestaande scantoepassing, zodat deze niet langer afhankelijk is van Excel-gegevens maar gebruikmaakt van Firebase. Meer details zijn te vinden bij de projecten. Daarnaast heb ik met behulp van Python verschillende taken geautomatiseerd, waardoor werknemers minder handmatig werk hoeven te verrichten.',
          skills: 'Python, Kotlin en HTML CSS JS',
          link: 'https://www.vedelux.be/'
        },
        {
          title: 'Jobstudent bij Exante IT',
          company: 'Exante IT',
          period: 'jul 2022 - aug 2022',
          description: 'Ik heb geholpen met het verder ontwikkelen van een app in kotlin. Voor de data opslag werd gebruik gemaakt van een firebase database. Waren vooral basis dingen en kleine aanpassingen.',
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
          description: 'Ik heb mij beziggehouden met het lokaliseren en controleren van netwerkkabels, het installeren van nieuwe pc\'s en het toevoegen van deze pc\'s aan het domein. Daarnaast heb ik gegevens ingevoegd of aangepast, waarbij ik gebruik heb gemaakt van een klein Python-script om dit proces te vereenvoudigen.',
          link: 'https://groepubuntu.be/ '
        }
      ]
    }
  }
}
</script>
