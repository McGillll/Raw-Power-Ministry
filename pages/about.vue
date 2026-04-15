<template>
    <div class="space-y-8 md:space-y-10">
        <section class="reveal-up overflow-hidden rounded-3xl bg-slate-900 px-6 py-16 text-white md:px-12 md:py-20">
            <div class="max-w-3xl">
                <p class="text-xs font-bold uppercase tracking-[0.24em] text-amber-300">{{ content.about.hero.eyebrow }}</p>
                <h1 class="mt-4 font-['Playfair_Display',serif] text-4xl leading-tight md:text-6xl">
                    {{ content.about.hero.title }}
                </h1>
                <p class="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg">
                    {{ content.about.hero.description }}
                </p>

                <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <BaseButton
                        v-for="action in content.about.hero.actions"
                        :key="action.label"
                        :variant="action.variant ?? 'primary'"
                        :size="action.size ?? 'md'"
                        @click="navigateTo(action.to)"
                    >
                        {{ action.label }}
                    </BaseButton>
                </div>
            </div>
        </section>

        <section class="reveal-up delay-1 grid gap-8 rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/60 ring-1 ring-slate-200 md:grid-cols-2 md:p-10">
            <BaseSectionHeading
                :eyebrow="content.about.story.eyebrow"
                :title="content.about.story.title"
                :description="content.about.story.description"
            />

            <div class="space-y-4 text-sm leading-relaxed text-slate-600 md:text-base">
                <p v-for="paragraph in content.about.story.paragraphs" :key="paragraph">
                    {{ paragraph }}
                </p>
            </div>
        </section>

        <section class="reveal-up delay-2 grid gap-6 md:grid-cols-3">
            <article
                v-for="value in content.about.values"
                :key="value.title"
                class="rounded-3xl bg-white p-6 shadow-lg shadow-slate-200/50 ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
                <p class="text-xs font-bold uppercase tracking-[0.24em] text-amber-600">{{ value.eyebrow }}</p>
                <h2 class="mt-3 text-2xl font-semibold text-slate-900">{{ value.title }}</h2>
                <p class="mt-3 text-sm leading-relaxed text-slate-600">{{ value.description }}</p>
            </article>
        </section>

        <section class="reveal-up delay-3 rounded-3xl bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-12 text-slate-900 md:px-10">
            <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div class="max-w-2xl">
                    <p class="text-xs font-bold uppercase tracking-[0.24em] text-slate-800">{{ content.about.nextStep.eyebrow }}</p>
                    <h2 class="mt-3 font-['Playfair_Display',serif] text-3xl leading-tight md:text-4xl">
                        {{ content.about.nextStep.title }}
                    </h2>
                    <p class="mt-3 text-base text-slate-800/90">
                        {{ content.about.nextStep.description }}
                    </p>
                </div>
                <BaseButton
                    :variant="content.about.nextStep.action.variant ?? 'secondary'"
                    :size="content.about.nextStep.action.size ?? 'lg'"
                    @click="navigateTo(content.about.nextStep.action.to)"
                >
                    {{ content.about.nextStep.action.label }}
                </BaseButton>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
const { getContent } = useSiteContent()

const content = getContent()
</script>

<style scoped>
.reveal-up {
    animation: revealUp 0.65s ease-out both;
}

.delay-1 {
    animation-delay: 0.08s;
}

.delay-2 {
    animation-delay: 0.14s;
}

.delay-3 {
    animation-delay: 0.2s;
}

@keyframes revealUp {
    from {
        opacity: 0;
        transform: translateY(16px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (prefers-reduced-motion: reduce) {
    .reveal-up,
    .delay-1,
    .delay-2,
    .delay-3 {
        animation: none;
    }
}
</style>
