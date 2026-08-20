<template>
    <iframe class="mb-3 w-full rounded-xl bg-white ring-1 ring-zinc-900/10 dark:bg-zinc-900 dark:ring-white/10"
      :height="height" frameborder='0' allowtransparency='true' scrolling='no'
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
