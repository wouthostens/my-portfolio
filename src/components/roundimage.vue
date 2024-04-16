<template>
    <img :src="src" :alt="alt" class="ml-auto w-16 h-16 object-cover rounded-full" />
  </template>
  
  <script>
  export default {
    name: 'RoundImage',
    props: {
      src: {
        type: String,
        required: true
      },
      alt: {
        type: String,
        required: true
      }
    }
  }
  </script>