<template>
    <p :class="['my-3 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400', extraClass]" v-html="description">
    </p>
</template>

<script>
export default {
    name: 'DescriptionComponent',
    props: {
        extraClass: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        }
    }
}
</script>
