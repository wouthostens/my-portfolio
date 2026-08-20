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
    <div class="h-85vh overflow-auto pb-10">
      <div class="relative mx-auto w-full max-w-3xl px-4">
        <!-- Verticale tijdlijn -->
        <div
          class="absolute bottom-4 left-7 top-2 w-px bg-gradient-to-b from-indigo-500/60 via-violet-500/40 to-transparent">
        </div>

        <div v-for="(education, index) in timeline" :key="index"
          :class="['relative animate-fade-up pb-8 pl-14', `stagger-${Math.min(index + 1, 6)}`]">
          <link rel="prefetch" :href="education.imageswebp" as="image">
          <!-- Tijdlijn-dot -->
          <div
            class="absolute left-7 top-7 h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500 to-fuchsia-500 ring-4 ring-[#fafafa] dark:ring-[#09090b]">
          </div>

          <div
            class="rounded-2xl border border-zinc-900/10 bg-white/70 p-5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-500/5 dark:border-white/10 dark:bg-white/[0.04] md:p-7">
            <div class="flex items-start gap-4">
              <div class="min-w-0 flex-1">
                <subtitlewithdate :title="education.degree" :date="education.year" />
                <p class="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{{ education.school }}</p>
                <DescriptionComponent :description="education.discription" />
                <LinkComponent :href="education.link" :text="'Bekijk info over ' + education.degree" />
              </div>
              <roundimage :src="education.imageswebp" :alt="education.school" />
            </div>

            <div v-if="education.internships" class="mt-5 space-y-4">
              <div v-for="(internship, index) in education.internships" :key="index"
                class="rounded-xl border border-zinc-900/10 bg-zinc-900/[0.02] p-4 dark:border-white/10 dark:bg-white/[0.03] md:p-5">
                <subtitlewithdate :title="'Stagiair bij ' + internship.company" :date="internship.period" />
                <DescriptionComponent :description="internship.discription" />
                <div class="mb-3 flex flex-wrap gap-1.5" v-if="internship.skills">
                  <span v-for="skill in internship.skills.split(',')" :key="skill"
                    class="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-0.5 text-xs font-medium text-indigo-600 dark:border-indigo-400/20 dark:bg-indigo-400/10 dark:text-indigo-300">
                    {{ skill.trim() }}
                  </span>
                </div>
                <LinkComponent :href="internship.link" :text="'Bekijk ' + internship.company" />
              </div>
            </div>
          </div>
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
          discription: 'Tijdens mijn opleiding heb ik een schat aan kennis opgedaan over het programmeren van microcontrollers en het omgaan met elektriciteit en hardware. De focus lag voornamelijk op het brede spectrum van het Internet of Things (IoT), waarbij ik vaardigheden heb ontwikkeld in verschillende aspecten van dit boeiende veld.<br><br>Een van de hoogtepunten van mijn studie was het leren programmeren en aansluiten van sensoren op microcontrollers. Dit stelde me in staat om data te verzamelen vanuit de fysieke wereld en deze om te zetten in bruikbare informatie voor allerlei toepassingen, van slimme huishoudelijke apparaten tot geavanceerde industriële systemen.<br><br>Daarnaast heb ik uitgebreide kennis opgedaan over het beheer en de communicatie van netwerken, wat essentieel is voor het creëren van robuuste IoT-oplossingen. Het begrijpen van verschillende communicatieprotocollen en het efficiënt beheren van verbindingen heeft me geholpen om betrouwbare en schaalbare IoT-toepassingen te ontwikkelen.<br><br>Kortom heeft mijn opleiding me een brede basis gegeven in het IoT-domein, waardoor ik klaar ben om uitdagende problemen op te lossen en innovatieve oplossingen te ontwikkelen die de manier waarop we omgaan met technologie en de wereld om ons heen veranderen.',
          status: '',
          link: 'https://www.vives.be/nl/technology/internet-things',
          images: '/images/vives.png',
          imageswebp: '/images/vives.webp',
          internships: [
            {
              company: 'Catael',
              period: 'sept 2023 - jun 2024',
              discription: 'Tijdens mijn stage kreeg ik de kans om een breed scala aan aspecten te verkennen, waarbij het programmeren van een plcNext misschien wel het meest cruciale was. Daarnaast kon ik mijn programmeervaardigheden uitbreiden door een robot te programmeren met behulp van Roboguide. Een andere waardevolle ervaring was de ontwikkeling van een demokoffer die het gebruik van Symeo-sensoren illustreert. <br><br>Naast deze hoogtepunten heb ik ook waardevolle praktijkervaring opgedaan door te helpen bij het bouwen van elektrische kasten. Vanaf het begin, waarbij we met een lege kast begonnen, tot het plaatsen en bekabelen van componenten volgens een schema, heb ik hands-on ervaring opgedaan met het volledige proces. ',
              skills: 'PlcNext, Roboguide',
              link: 'https://www.catael.be/'
            }
          ]
        },
        {
          degree: 'Graduaat programmeren',
          year: '2019-2021',
          school: 'Vives Kortrijk',
          discription: 'Tijdens mijn opleiding dook ik diep in de wereld van programmeren en ontdekte ik een scala aan disciplines. Van het bouwen van webapplicaties tot het ontwikkelen van desktop- en mobiele apps, ik heb het allemaal verkend. Maar dat is nog niet alles! Ik heb ook waardevolle inzichten opgedaan in het testen van code en het samenwerken in teamverband.<br><br>Om al deze taken aan te kunnen, heb ik ook een stevige basis gelegd in databases en netwerken. Het begrijpen van hoe data wordt opgeslagen en gedeeld, en hoe systemen met elkaar communiceren, was essentieel voor mijn succes in verschillende projecten. Kortom, mijn opleiding heeft me goed voorbereid op de dynamische en veelzijdige wereld van softwareontwikkeling.',
          status: '',
          link: 'https://www.vives.be/nl/handelswetenschappen-en-bedrijfskunde/programmeren',
          images: '/images/vives.png',
          imageswebp: '/images/vives.webp',
          internships: [
            {
              company: 'TVH',
              period: 'sept 2021',
              discription: 'Tijdens mijn stage heb ik in een razendsnel tempo een Spring Boot applicatie in elkaar gezet. Deze app haalt gegevens op van GitLab, waarna de gebruiker een specifiek project kan selecteren. Vervolgens toont de app een PlantUML-bestand dat de klasserelaties illustreert.<br><br> Ondanks dat de stage maar een maand duurde, heb ik een schat aan ervaring opgedaan met Spring Boot en Java. En laten we de unit testing niet vergeten, dat kwam ook aan bod en heeft mijn skills nog verder aangescherpt.',
              skills: 'Springboot, Java, Unit testing',
              link: 'https://www.tvh.com/'
            },
            {
              company: 'Sweet Mustard',
              period: 'jan 2021 - jun 2021',
              discription: 'Bij Sweet Mustard heb ik met twee frontend studenten samengewerkt aan de ontwikkeling van een cv-generatie applicatie. Mijn hoofdtaak lag in de backend, waar ik me verdiepte in Spring Boot en Java en veel waardevolle ervaring opdeed. <br><br>Tijdens de samenwerking met de frontend studenten heb ik ook mijn kennis over React en Redux kunnen vergroten. Het was een geweldige kans om zowel mijn backend- als frontendvaardigheden te versterken en te werken aan een boeiend project met een dynamisch team. ',
              skills: 'Springboot, Java, React & Redux',
              link: 'https://www.sweetmustard.be/'
            },
            {
              company: 'Cuarta',
              period: 'sept 2020 - dec 2020',
              discription: 'Bij Cuarta heb ik een cool project opgepakt: het ontwikkelen van een tool die Delphi-code kan omzetten naar C#. Best een uitdaging, maar superinteressant! De tool was al in gebruik binnen het bedrijf, maar had nog wat finetuning nodig.<br><br>Tijdens dit proces heb ik ontzettend veel geleerd over zowel C# als Delphi, en vooral over hoe je code van de ene taal naar de andere vertaalt. Het was een waardevolle ervaring waarbij ik mijn programmeervaardigheden naar een hoger niveau heb getild.',
              skills: 'Delphi, C#',
              link: 'https://www.cuarta.be/'
            }
          ]
        },
        {
          degree: 'informatica beheer',
          year: '2016-2019',
          school: 'Heilig Hartcollege Waregem',
          discription: 'Tijdens mijn opleiding dook ik diep in de wereld van informatica en ontdekte ik een breed scala aan onderwerpen. Van het beheren van netwerken tot verschillende aspecten van programmeren, het was een echte duik in het diepe van de informatica.<br>Deze opleiding bood een uitgebreide introductie tot het brede spectrum van informatica, waarbij ik een solide basis heb opgebouwd in diverse onderwerpen.',
          images: '/images/hhc.png',
          imageswebp: '/images/hhc.webp',
          link: 'https://www.collegewaregem.be/studieaanbod/3-de-graad/informatica-beheer',

        }
      ]
    }
  }
}
</script>
