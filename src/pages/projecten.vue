<script setup>
import project from '../components/project.vue';
import TitleComponent from '../components/title.vue';
</script>

<template>
  <div class="">
    <TitleComponent title="Projecten" />
    <div class="h-85vh overflow-auto ">
      <project class="" projectTitle="Portfolio website"
        projectDescription='Mijn website is ontwikkeld met Vue 3 en Vite, opgepoetst met de stijlvolle accenten van Tailwind CSS. Het concept is simpel: een showcase van mezelf en mijn projecten. Maar laten we niet vergeten dat details het verschil maken. Daarom heb ik speciale aandacht besteed aan de donkere modus, omdat gebruiksvriendelijkheid voorop staat. En als kers op de taart? Een verrassend element: een eenvoudig, maar verslavend snakespel.<br><br>Om ervoor te zorgen dat alles naadloos verloopt, vertrouw ik op Firebase. Het deployen en hosten gebeurt automatisch, inclusief het toewijzen van het juiste domein. En voor de nieuwsgierigen onder ons: de broncode staat openbaar op GitHub, want transparantie en samenwerking zijn voor mij vanzelfsprekend.'
        projectImage='/images/websiteLight.png' projectImageWebp="/images/websiteLight.webp"
        projectUrl="https://github.com/wouthostens/my-portfolio" />
      <project class="" projectTitle='Home Assistant simon says' projectDescription='Samen met Daan Vervacke hebben we een te gek schoolproject gedaan met Philips Hue gadgets, waaronder lampen, stopcontacten, een schakelaar en een bridge. Ons briljante idee? Een Simon Says spel maken dat gebruikmaakt van deze slimme apparaten. Hoe cool is dat?<br><br>Maar daar hield het niet op. We hebben ons spel geïntegreerd in Home Assistant, zodat je niet alleen kon spelen, maar ook je score en highscore kon bekijken. Want laten we eerlijk zijn, een beetje competitie kan nooit kwaad, toch? <br><br>Wil je een kijkje nemen achter de schermen? Het PyScript-bestand staat voor je klaar op GitHub.'
        projectImage='/images/SimonSays1.png' projectImageWebp="/images/SimonSays1.webp"
        projectUrl='https://github.com/wouthostens/SimonSays' />
      <project class="" projectTitle='Pronostiek App'
        projectDescription='Hoewel de pronostiek app nooit volledig tot bloei is gekomen, waren de fundamenten ervan solide. Gebruikers zouden de spanning van het voorspellen van wedstrijduitslagen kunnen ervaren, een leuke en interactieve manier om betrokken te raken bij sportevenementen. Het concept was eenvoudig maar krachtig: voorafgaand aan wedstrijden konden gebruikers hun voorspellingen invoeren, en na afloop konden ze hun behaalde punten zien, gebaseerd op de nauwkeurigheid van hun voorspellingen.<br><br>Mijn visie voor de toekomst van de app omvatte verschillende verbeteringen om de gebruikerservaring te verrijken. Denk aan functionaliteiten zoals uitnodigingslinks, waarmee vriendengroepen zich konden verenigen in hun pronostiekavontuur, en een admin-rol om het selecteren van wedstrijden te stroomlijnen en het beheer van de app te vergemakkelijken.<br><br>Technisch gezien was de app ontwikkeld in Kotlin, wat een solide keuze is voor Android-ontwikkeling. Door gebruik te maken van een API konden we real-time scores ophalen voor gespeelde wedstrijden, waardoor de app altijd up-to-date bleef met de laatste resultaten. En met Firebase als onze betrouwbare backend, konden we de gebruikersdata veilig en efficiënt beheren.<br><br>Hoewel het project misschien niet het licht heeft gezien zoals ik had gehoopt, ben ik trots op de basis die we hebben gelegd en de potentieel spannende ontwikkelingen die voor ons lagen.'
        projectImage='/images/pronostiekApp.png' projectImageWebp="/images/pronostiekApp.webp"
        projectUrl='https://github.com/wouthostens/Pronostiek-Final-verion' />
      <project class="" projectTitle='Python scripts'
        projectDescription='Deze GitHub-repository is een ware schatkist van Python-scripts die ik heb ontwikkeld, voornamelijk voor schoolopdrachten of om mijn dagelijkse taken te automatiseren. Terwijl je door de scripts bladert, zul je misschien opmerken dat sommige scripts tokens bevatten die eerder open en bloot zichtbaar waren. Geen paniek! Ik heb deze tokens inmiddels veilig vervangen door een .env-bestand of ze zijn simpelweg niet langer in gebruik.<br><br>Deze verzameling scripts vertegenwoordigt mijn toewijding aan efficiëntie en creativiteit in het programmeren. Of het nu gaat om het oplossen van complexe problemen voor schoolprojecten of het stroomlijnen van repetitieve taken in mijn dagelijks leven, elk script draagt bij aan mijn groei als ontwikkelaar.<br><br>Dus, als je op zoek bent naar wat Python-inspiratie of gewoon nieuwsgierig bent naar mijn programmeeravonturen, bekijk dan zeker deze repository! Wie weet vind je iets wat je eigen projecten naar een hoger niveau tilt.'
        projectImage='/images/pythonscripts.jpg' projectImageWebp="/images/pythonscripts.webp"
        projectUrl='https://github.com/wouthostens/pythonscripts' />
      <project class="" projectTitle='Scanner App'
        projectDescription="Hoewel we enorm trots zijn op de vernieuwde applicatie, is het belangrijk op te merken dat de definitieve appcode niet beschikbaar is op onze GitHub-pagina. Deze code behoort tot het intellectuele eigendom van ons bedrijf. Echter, we hebben een vroege versie van de app gepubliceerd, waarin je de eerste stappen van onze transformatie kunt zien.<br><br>Deze vroege versie biedt een glimp van onze aanpak en laat zien hoe we de Excel-data hebben omgezet naar JSON en vervolgens geïntegreerd hebben in Firebase. Het was een uitdagend maar uiterst bevredigend proces om deze applicatie te vernieuwen en te upgraden naar de nieuwste technologieën.<br><br>Dus, hoewel je de definitieve appcode niet kunt vinden op onze GitHub-repository, hopen we dat de beschikbare versie je toch kan inspireren en interessante inzichten kan bieden in ons ontwikkelproces."
        projectImage='/images/scanner.jpg' projectImageWebp="/images/scanner.webp"
        projectUrl='https://github.com/wouthostens/ScannerAppVDM' />
    </div>
  </div>
</template>
