<script setup>
import TitleComponent from '../components/title.vue';
import BoxComponent from '../components/box.vue';
import DescriptionComponent from '../components/description.vue';
import StravaIframe from '../components/stravaiframe.vue';
import subtitlewithdate from '../components/subtitlewithdate.vue';
import ImageSlideshow from '../components/slideshowDenUitvlucht.vue';
</script>

<template>
  <div>
    <link rel="prefetch"
      href="https://www.strava.com/athletes/7422402/latest-rides/fa96379fe34efd1a6d0a7982ff862e0c6f5a284b"
      as="document">
    <link rel="prefetch"
      href="https://www.strava.com/athletes/7422402/activity-summary/fa96379fe34efd1a6d0a7982ff862e0c6f5a284b"
      as="document">
    <TitleComponent title="Vrije tijd" />
    <div class="h-85vh overflow-auto pb-5">
      <BoxComponent extraClass=" flex flex-col items-center mx-auto sm:w-3/4 lg:w-1/2 w-full mb-5">
        <subtitlewithdate title="Strava loop kilometers" />
        <DescriptionComponent
          description="Hier kun je een overzicht van mijn loopweek vinden, samen met een lijst van mijn laatste 5 loopjes. Ik geniet van mijn tijd buiten tijdens het rennen, maar als het weer het niet toelaat, ben ik uitzonderlijk ook wel eens te vinden op de loopband. Meestal verken ik de prachtige omgeving van Avelgem tijdens mijn runs. Mijn ultieme doel? Ooit een marathon lopen!" />
        <StravaIframe src="activity-summary" />
        <StravaIframe src="latest-rides" height="454" />
      </BoxComponent>
      <BoxComponent extraClass=" flex flex-col items-center mx-auto sm:w-3/4 lg:w-1/2 w-full mb-5">
        <subtitlewithdate title="Medewerker / bestuur bij jeugdhuis den uitvlucht" date="2018-2023" />
        <DescriptionComponent
          description="Bij Jeugdhuis Den Uitvlucht in Waregem heb ik met veel plezier als medewerker gewerkt. Mijn takenpakket was divers en uitdagend, waardoor ik veel ervaring heb opgedaan in verschillende facetten van de werking van een jeugdhuis. Ik hielp mee achter de bar, waar ik verantwoordelijk was voor het bedienen van gasten en het zorgen voor een gezellige sfeer. Daarnaast was ik actief betrokken bij de organisatie van evenementen, van concept tot uitvoering, en zorgde ik ervoor dat alles vlot en volgens plan verliep. <br><br>Naast deze verantwoordelijkheden hield ik me ook bezig met het dagelijks onderhoud en het proper houden van het jeugdhuis. Dit omvatte onder andere het schoonmaken van de bar en gemeenschappelijke ruimtes, het beheren van de voorraad en het zorgen voor een nette en uitnodigende omgeving voor alle bezoekers. Deze ervaring heeft mijn organisatorische vaardigheden en mijn vermogen om in teamverband te werken aanzienlijk versterkt.<br><br>Bij Den Uitvlucht heb ik geleerd om flexibel en oplossingsgericht te zijn, en ik heb er veel waardevolle vaardigheden opgedaan die ik in mijn verdere carrière zeker zal meenemen." />
        <ImageSlideshow :images="[
          '/images/denuitvlucht/1.jpg',
          '/images/denuitvlucht/2.jpg',
          '/images/denuitvlucht/3.jpg',
          '/images/denuitvlucht/4.jpg',
          '/images/denuitvlucht/5.jpg',
          '/images/denuitvlucht/6.jpg',
          '/images/denuitvlucht/7.jpg',
          '/images/denuitvlucht/8.jpg',
          '/images/denuitvlucht/9.jpg',
          '/images/denuitvlucht/10.jpg',
          '/images/denuitvlucht/11.jpg',
          '/images/denuitvlucht/12.jpg',
          '/images/denuitvlucht/13.jpg',
          '/images/denuitvlucht/14.jpg',
          '/images/denuitvlucht/15.jpg',
        ]"/>
      </BoxComponent>
      <BoxComponent extraClass=" flex flex-col items-center mx-auto sm:w-3/4 lg:w-1/2 w-full">
        <subtitlewithdate title="Voetballer bij KVK Avelgem" date="2006 - 2022" />
        <DescriptionComponent
          description="Van jongs af aan ben ik gepassioneerd door voetbal. Ik heb jarenlang gespeeld bij KVK Avelgem, waar ik heel de jeugdopleiding doorlopen heb tot de 2de ploeg in 4de provenciale. Mijn voetbalcarrière heeft me niet alleen fysiek en mentaal sterker gemaakt, maar heeft me ook belangrijke waarden bijgebracht, zoals teamwork, doorzettingsvermogen en discipline. <br><br>Als voetballer heb ik geleerd om te gaan met zowel overwinningen als nederlagen, en om altijd het beste van mezelf te geven, zowel op als naast het veld. Ik heb veel mooie herinneringen aan mijn tijd bij KVK Avelgem, en ik ben dankbaar voor de kansen die ik heb gekregen om te groeien en me te ontwikkelen als speler en als persoon." />
        <ImageSlideshow :images="[
          '/images/kvkavelgem/1.jpg',
          '/images/kvkavelgem/2.jpg',
          '/images/kvkavelgem/3.jpg',
          '/images/kvkavelgem/4.jpg',
          '/images/kvkavelgem/5.jpg',
          '/images/kvkavelgem/6.jpg',
          '/images/kvkavelgem/7.jpg',
          '/images/kvkavelgem/8.jpg',
          '/images/kvkavelgem/9.jpg',
          '/images/kvkavelgem/10.jpg',
          '/images/kvkavelgem/11.jpg',
          '/images/kvkavelgem/12.jpg',
          '/images/kvkavelgem/13.jpg',
          '/images/kvkavelgem/14.jpg',
          '/images/kvkavelgem/15.jpg',
          ]"/>
        </BoxComponent>
    </div>
  </div>
</template>
