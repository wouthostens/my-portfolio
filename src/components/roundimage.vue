<template>
    <img :src="src" :alt="alt"
        class="ml-auto h-16 w-16 rounded-full object-cover ring-2 ring-zinc-900/10 dark:ring-white/15" />
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
