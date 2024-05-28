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
      <BoxComponent extraClass=" flex flex-col items-center mx-auto sm:w-3/4 lg:w-1/2 w-full">
        <subtitlewithdate title="Medewerker / bestuur bij jeugdhuis den uitvlucht" date="2018-2023" />
        <DescriptionComponent
          description="Bij Jeugdhuis Den Uitvlucht in Waregem heb ik met veel plezier als medewerker gewerkt. Mijn takenpakket was divers en uitdagend, waardoor ik veel ervaring heb opgedaan in verschillende facetten van de werking van een jeugdhuis. Ik hielp mee achter de bar, waar ik verantwoordelijk was voor het bedienen van gasten en het zorgen voor een gezellige sfeer. Daarnaast was ik actief betrokken bij de organisatie van evenementen, van concept tot uitvoering, en zorgde ik ervoor dat alles vlot en volgens plan verliep. <br><br>Naast deze verantwoordelijkheden hield ik me ook bezig met het dagelijks onderhoud en het proper houden van het jeugdhuis. Dit omvatte onder andere het schoonmaken van de bar en gemeenschappelijke ruimtes, het beheren van de voorraad en het zorgen voor een nette en uitnodigende omgeving voor alle bezoekers. Deze ervaring heeft mijn organisatorische vaardigheden en mijn vermogen om in teamverband te werken aanzienlijk versterkt.<br><br>Bij Den Uitvlucht heb ik geleerd om flexibel en oplossingsgericht te zijn, en ik heb er veel waardevolle vaardigheden opgedaan die ik in mijn verdere carrière zeker zal meenemen." />
        <ImageSlideshow class=""/>
      </BoxComponent>
    </div>
  </div>
</template>
