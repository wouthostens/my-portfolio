<template>
    <p :class="['dark:text-slate-400 text-gray-800 my-4', extraClass]">
        <slot></slot>
    </p>
</template>

<script>
export default {
    name: 'DescriptionComponent',
    props: {
        extraClass: {
            type: String,
            default: ''
        }
    }
}
</script>