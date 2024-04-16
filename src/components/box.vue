<template>
    <div :class="['dark:bg-slate-800 bg-gray-200 rounded-lg shadow-lg p-5 md:p-7 mx-2 ', extraClass]">
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BoxComponent',
    props: {
      extraClass: {
        type: String,
        default: ''
      }
    }
  }
  </script>