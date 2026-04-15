<template>
    <section class="rounded-3xl bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-12 text-slate-900 md:px-10">
        <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div class="max-w-2xl">
                <p class="text-xs font-bold uppercase tracking-[0.24em] text-slate-800">{{ content.eyebrow }}</p>
                <h2 class="mt-3 font-['Playfair_Display',serif] text-3xl leading-tight md:text-4xl">
                    {{ content.title }}
                </h2>
                <p class="mt-3 text-base text-slate-800/90">
                    {{ content.description }}
                </p>
            </div>
            <BaseButton
                :variant="content.action.variant ?? 'secondary'"
                :size="content.action.size ?? 'lg'"
                @click="navigateTo(content.action.to)"
            >
                {{ content.action.label }}
            </BaseButton>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { HomeContent } from '~/types/content'

defineProps<{
    content: HomeContent['primaryCta']
}>()
</script>
