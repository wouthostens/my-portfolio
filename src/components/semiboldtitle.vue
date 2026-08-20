<template>
    <p class="font-display text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">{{ title }}</p>
</template>

<script>
export default {
    name: 'DegreeTitle',
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>
