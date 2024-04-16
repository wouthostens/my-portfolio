<script setup>
import project from '../components/project.vue';
import TitleComponent from '../components/title.vue';
</script>

<template>
  <div class="">
    <TitleComponent title="Projecten" />
    <div class="h-85vh overflow-auto ">
      <project class="" projectTitle="Portfolio website"
        projectDescription="Deze website is gemaakt in Vue 3 met Vite, waarbij gebruik wordt gemaakt van Tailwind CSS voor de opmaak. Het hoofddoel van de website is om mezelf voor te stellen en enkele van mijn projecten te tonen. De website is ontworpen met aandacht voor donkere modusvriendelijkheid en bevat zelfs een eenvoudig snake spel. De site wordt automatisch ingezet naar Firebase, waar het wordt gehost en het juiste domein wordt toegewezen. De broncode is beschikbaar op GitHub."
        projectImage='/images/websiteLight.png' projectImageWebp="/images/websiteLight.webp" projectUrl="https://github.com/wouthostens/my-portfolio" />
      <project class="" projectTitle='Home Assistant simon says'
        projectDescription='Voor ons schoolproject kregen we enkele Philips Hue producten, zoals lampen, stopcontacten, een schakelaar en een bridge. Samen met Daan Vervacke hebben we besloten om een Simon Says spel te maken met behulp van de lampen en de schakelaar. We hebben dit vervolgens toegevoegd aan Home Assistant waar je de score en highscore kon bezichtigen. Het PyScript-bestand is te vinden op GitHub.'
        projectImage='/images/SimonSays1.png' projectImageWebp="/images/SimonSays1.webp"  projectUrl='https://github.com/wouthostens/SimonSays' />
      <project class="" projectTitle='Pronostiek App'
        projectDescription='De pronostiek app was een vrijetijdsbesteding die nooit van de grond is gekomen, maar de grote lijnen waren wel aanwezig. Gebruikers konden voor enkele wedstrijden een score voorspellen, en nadat alle wedstrijden waren gespeeld, konden ze het aantal verdiende punten zien. Ik was van plan om dit later uit te breiden met een uitnodigingslink voor een specifieke vriendengroep, een admin-persoon die de wedstrijden kon selecteren, enzovoort. De app is ontwikkeld in Kotlin, maakte gebruik van een API om de scores van gespeelde wedstrijden op te halen, en hield data bij in Firebase.'
        projectImage='/images/pronostiekApp.png' projectImageWebp="/images/pronostiekApp.webp" projectUrl='https://github.com/wouthostens/Pronostiek-Final-verion' />
      <project class="" projectTitle='Python scripts'
        projectDescription='Dit is een verzameling van Python-scripts die ik heb gemaakt, voornamelijk voor schoolopdrachten of om taken te automatiseren. In sommige scripts zul je merken dat tokens open en bloot zichtbaar zijn. Deze zijn inmiddels vervangen door een .env-bestand of worden niet langer gebruikt. De scripts zijn verzameld in deze GitHub-repository.'
        projectImage='/images/pythonscripts.jpg' projectImageWebp="/images/pythonscripts.webp" projectUrl='https://github.com/wouthostens/pythonscripts' />
      <project class="" projectTitle='Scanner App'
        projectDescription='We hebben een bestaande applicatie vernieuwd die data uit Excel-bestanden haalt, waarbij we de aanpak hebben omgezet naar het gebruik van Firebase. Dit hebben we bereikt door de Excel-data met een Python-script om te zetten naar een JSON-bestand, en vervolgens deze gegevens in Firebase te integreren. Hoewel de uiteindelijke appcode niet beschikbaar is, kun je een vroege versie ervan vinden op GitHub.'
        projectImage='/images/scanner.jpg' projectImageWebp="/images/scanner.webp" projectUrl='https://github.com/wouthostens/ScannerAppVDM' />
    </div>
  </div>
</template>

