<template>
    <div v-html="htmlContent"></div>
  </template>
  
  <script>
  export default {
    props: ['htmlContent']
  }
  </script>