<script setup>
import TitleComponent from '../components/title.vue';
import ContactLink from '../components/contactLink.vue';
import ImageComponent from '../components/squareimage.vue';
import SubTitleComponent from '../components/subtitle.vue';
import BoxComponent from '../components/box.vue';
import DescriptionComponent from '../components/description.vue';
</script>

<template>
  <div >
    <TitleComponent title="Over mezelf" />
    <div class="overflow-auto">
      <div class="h-85vh mx-auto sm:w-3/4 lg:w-1/2 w-full ">
        <link rel="prefetch" href="/images/wouthostens.webp" as="image">
        <BoxComponent extraClass="text-center">
          <ImageComponent src="/images/wouthostens.webp" alt="Wout Hostens" extraClass=" h-44 mx-auto" />
          <TitleComponent title="Wout Hostens" height="text-4xl font-bold" />
          <SubTitleComponent title="Software Developer" />
          <DescriptionComponent description='Hey daar! Ik ben Wout Hostens, geboren op 24 mei 2000 en momenteel woonachtig in het prachtige Avelgem, België. Als ik niet bezig ben met code, kun je me vaak buiten vinden terwijl ik wat loopkilometers verzamel - afhankelijk van het weer natuurlijk!<br><br>Mijn passie ligt voornamelijk in het backend gedeelte van softwareontwikkeling. Ik voel me helemaal in mijn element bij het ontwerpen van websites en applicaties, waarbij ik mijn skills inzet om solide en efficiënte systemen te creëren.<br><br>Wat mij het meeste aanspreekt aan de programmeerwereld is het probleemoplossend denken. Ik geniet ervan om uitdagingen aan te gaan en creatieve oplossingen te bedenken voor complexe problemen. Kortom, ik ben gepassioneerd, gedreven en altijd klaar voor een nieuwe uitdaging!' />
          <ContactLink href="tel:+32468166869" text="+32 468 16 68 69">
            Je kunt mij bereiken via mijn gsm op
          </ContactLink>
          <ContactLink href="mailto:wout.hostens@gmail.com" text="wout.hostens@gmail.com">
            Of stuur me een e-mail op
          </ContactLink>
          <ContactLink href="https://www.linkedin.com/in/Wout-Hostens/" text="LinkedIn">
            Je kan me ook bereiken via
          </ContactLink>
          <ContactLink
            href="https://firebasestorage.googleapis.com/v0/b/my-portfolio-63acb.appspot.com/o/HostensWoutCV.pdf?alt=media&token=2ad6a5ec-bed8-49da-938c-7a1d90856164"
            text="Download hier mijn cv" />
        </BoxComponent>
      </div>
    </div>
  </div>
</template>
