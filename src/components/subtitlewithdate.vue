<template>
    <div class="flex items-center">
        <subtitle :title="title" />
        <p class="dark:text-slate-300 ml-5">{{ date }}</p>
    </div>
</template>

<script>
import subtitle from './semiboldtitle.vue';
export default {
    name: 'subtitlewithdate',
    components: {
        subtitle
    },
    props: {
        title: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        }
    }
}
</script>