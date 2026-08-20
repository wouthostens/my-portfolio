<script setup>
import TitleComponent from '../components/title.vue';
import roundimage from '../components/roundimage.vue';
import description from '../components/description.vue';
import subtitlewithdate from '../components/subtitlewithdate.vue';
import LinkComponent from '../components/contactLink.vue';
</script>

<template>
  <div>
    <TitleComponent title="Jobs" />
    <div class="h-85vh overflow-auto pb-10">
      <div class="relative mx-auto w-full max-w-3xl px-4">
        <!-- Verticale tijdlijn -->
        <div
          class="absolute bottom-4 left-7 top-2 w-px bg-gradient-to-b from-indigo-500/60 via-violet-500/40 to-transparent">
        </div>

        <div v-for="(job, index) in jobs" :key="index"
          :class="['relative animate-fade-up pb-8 pl-14', `stagger-${Math.min(index + 1, 6)}`]">
          <link rel="prefetch" :href="job.imagesWebp" as="image">
          <!-- Tijdlijn-dot -->
          <div
            class="absolute left-7 top-7 h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500 to-fuchsia-500 ring-4 ring-[#fafafa] dark:ring-[#09090b]">
          </div>

          <div
            class="rounded-2xl border border-zinc-900/10 bg-white/70 p-5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-500/5 dark:border-white/10 dark:bg-white/[0.04] md:p-7">
            <div class="flex items-start gap-4">
              <div class="min-w-0 flex-1">
                <subtitlewithdate :title="job.title" :date="job.period" />
                <description :description="job.description" />
                <div class="mb-3 flex flex-wrap gap-1.5" v-if="job.skills">
                  <span v-for="skill in job.skills.split(',')" :key="skill"
                    class="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-0.5 text-xs font-medium text-indigo-600 dark:border-indigo-400/20 dark:bg-indigo-400/10 dark:text-indigo-300">
                    {{ skill.trim() }}
                  </span>
                </div>
                <LinkComponent :href="job.link" :text="'Bekijk ' + job.company" />
              </div>
              <roundimage v-if="job.imagesWebp" :src="job.imagesWebp" :alt="job.title" />
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
      jobs: [
        {
          title: 'Erp support bij EnergyVision',
          company: 'EnergyVision',
          period: 'aug 2024 - heden',
          description: 'Als ERP Support bij EnergyVision werk ik met het Netsuite-pakket. Mijn taken omvatten het bieden van ondersteuning bij het gebruik van het systeem, het oplossen van problemen en het implementeren van aanpassingen en verbeteringen. Daarnaast programmeer ik ook projecten met behulp van JavaScript en SuiteScripting.<br><br>Ik heb ook ervaring met Python, HTML en CSS, wat me in staat stelt om veelzijdige oplossingen te ontwikkelen. Het is een uitdagende en boeiende functie waarin ik mijn programmeervaardigheden kan toepassen in een zakelijke omgeving.',
          skills: 'JavaScript, SuiteScripting, Python, HTML, CSS',
          images: '/images/energyvision.jpg',
          imagesWebp: '/images/energyvision.svg',
          link: 'https://www.energyvision.be/'
        },
        {
          title: 'Jobstudent bij Codefever',
          company: 'Codefever',
          period: 'jan 2016 - heden',
          images: '/images/codefever.jpg',
          imagesWebp: '/images/codefever.webp',
          description: 'Ik heb het voorrecht om les te geven aan kinderen van het tweede leerjaar tot ze ongeveer 16 jaar oud zijn. Samen met mijn geweldige assistenten of als assistent zelf, breng ik ze de basis van programmeren bij. We beginnen met leuke tools zoals Scratch en Minecraft Education om hun creativiteit te stimuleren.<br><br>Naarmate ze groeien, gaan we dieper in op de wereld van coderen. Van HTML en CSS tot JavaScript en Python, ze duiken in een spannende reis door verschillende programmeertalen. En alsof dat nog niet genoeg is, laten we ze zelfs experimenteren met microbits om echte hardware te programmeren! Het is geweldig om te zien hoe ze zich ontwikkelen en zichzelf uitdagen om nieuwe vaardigheden te leren.',
          skills: 'Scratch, Minecraft Education, HTML CSS JS, Python, Microbit',
          link: 'https://www.codefever.be/'
        },
        {
          title: 'Jobstudent bij Vedelux',
          company: 'Vedelux',
          period: 'okt 2022 - aug 2023 & jan 2024 - apr 2024',
          images: '/images/vedelux.png',
          imagesWebp: '/images/vedelux.webp',
          description: 'Momenteel werk ik aan het uitbreiden en herstructureren van een bestaande scantoepassing. Het doel? Om deze applicatie minder afhankelijk te maken van Excel-gegevens en in plaats daarvan te laten draaien op Firebase. Voor meer gedetailleerde informatie over dit project, nodig ik je uit om een kijkje te nemen bij mijn projecten.<br><br>Daarnaast heb ik met behulp van Python verschillende taken weten te automatiseren. Hierdoor hebben werknemers minder handmatig werk te verrichten, wat zorgt voor een efficiëntere workflow en meer tijd voor belangrijkere taken.',
          skills: 'Python, Kotlin, HTML CSS JS',
          link: 'https://www.vedelux.be/'
        },
        {
          title: 'Jobstudent bij Exante IT',
          company: 'Exante IT',
          period: 'jul 2022 - aug 2022',
          description: 'Ik heb een handje geholpen bij de verdere ontwikkeling van een app in Kotlin. Deze app maakte gebruik van een Firebase-database voor de opslag van gegevens.<br><br>Mijn bijdrage bestond voornamelijk uit het implementeren van basisfunctionaliteiten en het aanbrengen van kleine aanpassingen om de app nog beter te laten functioneren. Het was een waardevolle ervaring waarbij ik mijn kennis van Kotlin en Firebase kon inzetten om het project naar een hoger niveau te tillen.',
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
          description: 'Tijdens mijn werkzaamheden heb ik me onder andere beziggehouden met het lokaliseren en controleren van netwerkkabels, het installeren van nieuwe computers en het toevoegen van deze computers aan het domein.<br><br>Daarnaast heb ik gegevens ingevoerd of aangepast. Om dit proces wat soepeler te laten verlopen, heb ik zelfs een klein Python-script geschreven. Het was een elegante combinatie van hands-on werk en slimme automatisering.',
          link: 'https://groepubuntu.be/ '
        }
      ]
    }
  }
}
</script>
