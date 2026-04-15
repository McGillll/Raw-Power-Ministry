<template>
    <header class="max-w-2xl">
        <p
            v-if="eyebrow"
            class="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-amber-600"
        >
            {{ eyebrow }}
        </p>
        <h2 class="font-['Playfair_Display',serif] text-3xl leading-tight text-slate-900 md:text-4xl">
            {{ title }}
        </h2>
        <p
            v-if="description"
            class="mt-4 text-base leading-relaxed text-slate-600 md:text-lg"
        >
            {{ description }}
        </p>
    </header>
</template>

<script setup lang="ts">
defineProps<{
    title: string
    description?: string
    eyebrow?: string
}>()
</script>
