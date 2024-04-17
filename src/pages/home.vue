<script setup>
import TitleComponent from '../components/title.vue';
import ContactLink from '../components/contactLink.vue';
import ImageComponent from '../components/squareimage.vue';
import SubTitleComponent from '../components/subtitle.vue';
import BoxComponent from '../components/box.vue';
import DescriptionComponent from '../components/description.vue';
</script>

<template>
  <div>
    <TitleComponent title="Home" />
    <div class="h-85vh mx-auto sm:w-3/4 lg:w-1/2 w-full">
      <link rel="prefetch" href="/images/wouthostens.webp" as="image">
      <BoxComponent extraClass="text-center">
        <ImageComponent src="/images/wouthostens.webp" alt="Wout Hostens" extraClass="h-44" />
        <TitleComponent title="Wout Hostens" />
        <SubTitleComponent title="Software Developer" />
        <DescriptionComponent>
          Hey, mijn naam is Wout Hostens, geboren op 24 mei 2000 en momenteel woonachtig in Avelgem, België. In het
          dagelijkse leven probeer ik wat loopkilometers te verzamelen afhankelijk van het weer natuurlijk. Mijn sterke
          punten liggen vooral in het backend gedeelte van software
          ontwikkeling.
          Ik voel me thuis bij het ontwerpen van websites en applicaties. Wat me het meeste aanspreekt aan de
          programmeer wereld is het probleemoplossend denken.
        </DescriptionComponent>
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
</template>
