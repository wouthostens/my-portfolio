<template>
    <p class="dark:text-yellow-500 uppercase tracking-wide text-sm text-indigo-500 font-semibold">{{ title }}</p>
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