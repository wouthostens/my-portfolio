<template>
    <div class="flex flex-wrap items-center gap-3">
        <subtitle :title="title" />
        <p v-if="date"
            class="rounded-full border border-zinc-900/10 bg-zinc-900/5 px-2.5 py-0.5 text-xs font-medium text-zinc-500 dark:border-white/10 dark:bg-white/5 dark:text-zinc-400">
            {{ date }}</p>
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
            default: ''
        }
    }
}
</script>
