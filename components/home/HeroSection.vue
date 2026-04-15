<template>
    <section class="reveal-up relative isolate overflow-hidden rounded-3xl bg-slate-900 px-6 py-16 text-white md:px-12 md:py-24">
        <div class="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-amber-400/30 blur-3xl" />
        <div class="pointer-events-none absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />

        <div class="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
            <div class="flex justify-center items-center min-h-[20rem] overflow-hidden rounded-[2rem] bg-slate-950/40 md:min-h-[32rem]">
                <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.18)_0%,_rgba(15,23,42,0.04)_38%,_transparent_75%)]" />
                <img
                    :src="portraitImage"
                    alt="Portrait of Apostle Jackson"
                    class="mx-auto w-full max-w-[28rem] object-contain drop-shadow-[0_24px_28px_rgba(15,23,42,0.35)] md:left-0 md:right-0 md:mx-auto md:max-w-[30rem]"
                >
            </div>

            <div class="relative max-w-xl">
                <p class="text-[0.7rem] font-bold uppercase tracking-[0.45em] text-amber-300">
                    {{ content.eyebrow }}
                </p>
                <h1 class="mt-3 font-['Playfair_Display',serif] text-4xl leading-none text-white md:text-6xl">
                    {{ content.title }}
                </h1>
                <p class="mt-4 text-sm font-semibold uppercase tracking-[0.28em] text-slate-200 md:text-base">
                    {{ content.description }}
                </p>                
                <p class="mt-4 text-xs font-normal uppercase tracking-[0.28em] text-slate-200 md:text-sm">
                    {{ content.subDescription }}
                </p>

                <!-- <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <BaseButton
                        v-for="action in content.actions"
                        :key="action.label"
                        :variant="action.variant ?? 'primary'"
                        :size="action.size ?? 'md'"
                        @click="navigateTo(action.to)"
                    >
                        {{ action.label }}
                    </BaseButton>
                </div> -->
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { HeroContent } from '~/types/content'

import portraitImage from '~/asseets/img/apostle jackson.jpeg'

defineProps<{
    content: HeroContent
}>()
</script>

<style scoped>
.reveal-up {
    animation: revealUp 0.7s ease-out both;
}

@keyframes revealUp {
    from {
        opacity: 0;
        transform: translateY(18px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (prefers-reduced-motion: reduce) {
    .reveal-up {
        animation: none;
    }
}
</style>
