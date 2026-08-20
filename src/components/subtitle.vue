<template>
    <h2 class="text-xl font-medium text-zinc-700 dark:text-zinc-300">{{ title }}</h2>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>
