<script setup>
import project from '../components/project.vue';
import titlecomponent from '../components/title.vue';
</script>

<template>
  <div class="">
    <titlecomponent title="Projecten" />
    <div class=" box overflow-auto ">
      <project class="" projectTitle="Portfolio website"
        projectDescription="Deze website is gemaakt in Vue 3 met Vite, er wordt ook gebruik gemaakt van tailwind css voor de opmaak. De bedoeling is om mezelf voor te stellen en enkele projecten te tonen. De website is ook donker modus vriendelijk en er is een simpel snake game toegevoegd. De site wordt telkens automatisch gedeployd naar firebase waar het gehost wordt en het juiste domein toegekend wordt. De code is te vinden op github."
        projectImage='/images/websiteLight.png' projectImageWebp="/images/websiteLight.webp" projectUrl="https://github.com/wouthostens/my-portfolio" />
      <project class="" projectTitle='Home Assistant simon says'
        projectDescription='Als project op school kregen we enkele phillips hue producten zoals lampen, stopcontacten, schakelaar en een bridge. Samen met Daan Vervacke hebben we ervoor gekozen om een simon says spel te maken met de lampen en de schakelaar. Dit hebben we dan in Home Assistant toegevoegd. Het pyscript bestand is te vinden op github.'
        projectImage='/images/SimonSays1.png' projectImageWebp="/images/SimonSays1.webp"  projectUrl='https://github.com/wouthostens/SimonSays' />
      <project class="" projectTitle='Pronostiek App'
        projectDescription='De pronostiek app was een vrijeteids besteding die nooit rond geraakt is, de grote lijnen waren wel aanwezig. Je kon als gebruiker enkele matchen een score bepalen en nadat alle matchen gespeeld waren kon je het aantal verdiende punten terugzien. Dit zou ik dan later uitbreiden met uitnodiging link voor een bepaalde vrienden groep, admin persoon die de matchen kon selecteren,... De app is gemaakt in Kotlin, maakte gerbuik van een api om de scores van gespeelde matchen op te halen en hield data bij in firebase.'
        projectImage='/images/pronostiekApp.png' projectImageWebp="/images/pronostiekApp.webp" projectUrl='https://github.com/wouthostens/Pronostiek-Final-verion' />
      <project class="" projectTitle='Python scripts'
        projectDescription='Dit is een verzameling van python scripts die ik gemaakt heb. Deze zijn vooral gemaakt voor schoolopdrachten of om iets te automatiseren. Bij sommige zal je zien dat er tokens open en bloot te bezichtigen zijn. Deze zijn ondertussen vervangen door een .env file of worden niet meer gebruikt.'
        projectImage='/images/pythonscripts.jpg' projectImageWebp="/images/pythonscripts.webp" projectUrl='https://github.com/wouthostens/pythonscripts' />
      <project class="" projectTitle='Scanner App'
        projectDescription='Een bestaande applicatie die data uit excels haalt vernieuwen en omvormen zodat er gebruik gemaakt wordt van firebase. Dit door de excel data met python script om te zetten naar een json file en deze dan in firebase te steken. De finale app code is niet beschikbaar enkel een vroege versie deze is te vinden op github.'
        projectImage='/images/scanner.jpg' projectImageWebp="/images/scanner.webp" projectUrl='https://github.com/wouthostens/ScannerAppVDM' />
    </div>
  </div>
</template>

<script>
import { h } from 'vue';
export default {

}

</script>

<style scoped>
.box {
  height: 85vh;
  widows: 50vh;
}
</style>
