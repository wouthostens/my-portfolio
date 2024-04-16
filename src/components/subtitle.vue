<template>
    <h2 class="dark:text-slate-300 text-xl">{{ title }} </h2>
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