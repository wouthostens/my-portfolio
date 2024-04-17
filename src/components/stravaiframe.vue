<template>
    <iframe class="w-full sm:w-3/4 lg:w-1/2 dark:bg-slate-900 bg-white mb-2" :height="height" frameborder='0'
      allowtransparency='true' scrolling='no'
      :src="'https://www.strava.com/athletes/7422402/' + src + '/fa96379fe34efd1a6d0a7982ff862e0c6f5a284b'"></iframe>
  </template>
  
  <script>
  export default {
    props: {
      src: {
        type: String,
        required: true
      },
      height: {
        type: String,
        default: '160'
      }
    }
  }
  </script>