<script setup>
import TitleComponent from '../components/title.vue';
import LinkComponent from '../components/contactLink.vue';
import DescriptionComponent from '../components/description.vue';
import roundimage from '../components/roundimage.vue';
import subtitlewithdate from '../components/subtitlewithdate.vue';
</script>

<template>
  <div>
    <TitleComponent title="Opleidingen en stages" />
    <div class="h-85vh overflow-auto">
      <div class="pb-5" v-for="(education, index) in timeline" :key="index">
        <link rel="preload" :href="education.imageswebp" as="image">
        <div
          class="dark:bg-slate-800 p-6 w-full sm:w-3/4 lg:w-1/2 mx-auto bg-gray-200 rounded-xl shadow-md overflow-hidden flex">
          <div>
            <subtitlewithdate :title="education.degree" :date="education.year" />
            <p class="dark:text-slate-300">{{ education.school }}</p>
            <DescriptionComponent> {{ education.discription }}</DescriptionComponent>
            <LinkComponent :href="education.link" :text="'Bekijk info over ' + education.degree"
              aClass="block mt-2 mb-4 text-lg leading-tight font-medium text-black hover:underline"></LinkComponent>
            <div class="ml-10" v-if="education.internships">
              <div v-for="(internship, index) in education.internships" :key="index">
                <subtitlewithdate :title="'stagair bij ' + internship.company" :date="internship.period" />
                <DescriptionComponent> {{ internship.discription }}</DescriptionComponent>
                <p class="dark:text-slate-500">Skills: {{ internship.skills }}</p>
                <LinkComponent :href="internship.link" :text="'Bekijk ' + internship.company"
                  aClass="block mt-2 mb-4 text-lg leading-tight font-medium text-black hover:underline"></LinkComponent>
              </div>
            </div>
          </div>
          <roundimage :src="education.imageswebp" :alt="education.imageswebp"/>
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
          discription: 'Tijdens deze opleiding heb ik veel geleerd over het programmeren van microcontrollers en het elektriciteit/hardwareaspect. Eigenlijk kwam alles aan bod wat te maken heeft met het Internet of Things, zoals het programmeren en aansluiten van sensoren, en het beheer en de communicatie van het netwerk.',
          status: '',
          link: 'https://www.vives.be/nl/technology/internet-things',
          images: '/images/vives.png',
          imageswebp: '/images/vives.webp',
          internships: [
            {
              company: 'Catael',
              period: 'sept 2023 - jun 2024',
              discription: 'Tijdens mijn stage heb ik veel verschillende aspecten kunnen verkennen, waarvan het programmeren van een plcNext wellicht het belangrijkste was. Daarnaast kreeg ik de kans om een robot te programmeren met behulp van Roboguide. Verder heb ik een demokoffer kunnen ontwikkelen die het gebruik van Symeo-sensoren demonstreert. Tussendoor heb ik ook kunnen helpen met het bouwen van elektrische kasten, vanaf nul beginnend tot het plaatsen en bekabelen van componenten volgens een schema.',
              skills: 'PlcNext, Roboguide',
              link: 'https://www.catael.be/'
            }
          ]
        },
        {
          degree: 'Graduaat programmeren',
          year: '2019-2021',
          school: 'Vives Kortrijk',
          discription: 'Tijdens deze opleiding heb ik veel geleerd over alles wat met programmeren te maken heeft. Dit omvat onder andere webapplicaties, desktopapplicaties en mobiele applicaties. Ook heb ik veel kennis opgedaan over het testen van code en het werken in teamverband. Om dit alles te kunnen doen, kwam ook een deel over databases en netwerken aan bod.',
          status: '',
          link: 'https://www.vives.be/nl/handelswetenschappen-en-bedrijfskunde/programmeren',
          images: '/images/vives.png',
          imageswebp: '/images/vives.webp',
          internships: [
            {
              company: 'TVH',
              period: 'sept 2021',
              discription: 'Tijdens deze stage heb ik een Spring Boot applicatie ontwikkeld die gegevens van GitLab haalt, waaruit de gebruiker een specifiek project kan kiezen. Vervolgens wordt de gebruiker een PlantUML-bestand gepresenteerd met de relaties tussen de klassen. Ondanks de korte duur van slechts één maand, heb ik veel geleerd over Spring Boot en Java. Ook kwam unit testing aan bod.',
              skills: 'Springboot, Java en Unit testing',
              link: 'https://www.tvh.com/'
            },
            {
              company: 'Sweet Mustard',
              period: 'jan 2021 - jun 2021',
              skills: 'Springboot, Java, React & Redux',
              discription: 'Bij Sweet Mustard heb ik samen met twee frontend studenten een applicatie ontwikkeld voor het genereren van cv\'s. Mijn focus lag voornamelijk op de backend, waar ik veel heb geleerd over Spring Boot en Java. Daarnaast heb ik ook veel geleerd over React en Redux tijdens de samenwerking met de frontend studenten.',
              link: 'https://www.sweetmustard.be/'
            },
            {
              company: 'Cuarta',
              period: 'sept 2020 - dec 2020',
              discription: 'Bij Cuarta heb ik een tool ontwikkeld die Delphi-code kan omzetten naar C#. Deze tool werd al gebruikt binnen het bedrijf, maar had nog wat fine-tuning nodig. Hier heb ik veel geleerd over C# en Delphi, evenals over het omzetten van code.',
              skills: 'Delphi en C#',
              link: 'https://www.cuarta.be/'
            }
          ]
        },
        {
          degree: 'informatica beheer',
          year: '2016-2019',
          school: 'Heilig Hartcollege Waregem',
          discription: 'Tijdens deze opleiding heb ik veel geleerd over het beheren van een netwerk en verschillende aspecten van programmeren. Dit was een brede introductie tot het informatica verhaal, waarbij diverse onderwerpen aan bod kwamen.',
          images: '/images/hhc.png',
          imageswebp: '/images/hhc.webp',
          link: 'https://www.collegewaregem.be/studieaanbod/3-de-graad/informatica-beheer',

        }
      ]
    }
  }
}
</script>
