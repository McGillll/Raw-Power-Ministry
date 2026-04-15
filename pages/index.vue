<template>
    <div class="space-y-8 md:space-y-10">
        <HomeHeroSection :content="content.home.hero" />

        <section class="relative overflow-hidden rounded-3xl border border-amber-200/70 bg-gradient-to-br from-amber-50 via-white to-slate-50 p-6 shadow-xl shadow-amber-100/40 md:p-10">
            <div class="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-amber-200/35 blur-3xl" />
            <div class="relative grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
                <div>
                    <p class="text-xs font-bold uppercase tracking-[0.22em] text-amber-700">{{ content.home.relaunch.eyebrow }}</p>
                    <h2 class="mt-3 font-['Playfair_Display',serif] text-3xl leading-tight text-slate-900 md:text-5xl">
                        {{ content.home.relaunch.headline }}
                    </h2>
                    <p class="mt-4 text-base font-semibold leading-relaxed text-slate-700 md:text-xl">
                        {{ content.home.relaunch.subtext }}
                    </p>
                </div>

                <div class="rounded-2xl border border-slate-200 bg-white/90 p-5 backdrop-blur">
                    <p class="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Website Status</p>
                    <p class="mt-2 text-lg font-semibold text-slate-900">Relaunch Phase Active</p>
                    <p class="mt-2 text-sm leading-relaxed text-slate-600">
                        Messaging and structure are now aligned for global ministry impact.
                    </p>
                </div>
            </div>
        </section>

        <section class="rounded-3xl bg-slate-900 p-6 shadow-xl shadow-slate-900/25 ring-1 ring-slate-800 md:p-10">
            <p class="text-xs font-bold uppercase tracking-[0.22em] text-amber-400">{{ content.home.relaunchVideo.eyebrow }}</p>
            <h2 class="mt-3 font-['Playfair_Display',serif] text-3xl leading-tight text-white md:text-4xl">
                {{ content.home.relaunchVideo.title }}
            </h2>
            <p class="mt-3 max-w-3xl text-sm leading-relaxed text-slate-200 md:text-base">
                {{ content.home.relaunchVideo.description }}
            </p>

            <div class="mt-6 overflow-hidden rounded-2xl border border-slate-700 bg-slate-950/60">
                <div class="aspect-video w-full">
                    <div class="flex h-full w-full items-center justify-center px-6 text-center">
                        <div>
                            <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-400 text-slate-900 shadow-lg shadow-amber-400/30">
                                <span class="ml-1 text-xl">▶</span>
                            </div>
                            <p class="mt-4 text-lg font-semibold text-white">{{ content.home.relaunchVideo.placeholderLabel }}</p>
                            <p class="mt-2 text-sm text-slate-300">Final relaunch video will be embedded here.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="about" class="rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/60 ring-1 ring-slate-200 md:p-10">
            <BaseSectionHeading
                :eyebrow="content.home.mission.eyebrow"
                :title="content.home.mission.title"
                :description="content.home.mission.description"
            />
        </section>

        <!-- <HomeServiceTimes
            :heading="content.home.serviceTimesHeading"
            :state="serviceTimesState"
        /> -->

        <section class="grid gap-6 rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/60 ring-1 ring-slate-200 md:p-10">
            <BaseSectionHeading
                :eyebrow="content.home.resources.eyebrow"
                :title="content.home.resources.title"
                :description="content.home.resources.description"
            />

            <div class="grid gap-4 md:grid-cols-3">
                <article
                    v-for="card in content.home.resources.cards"
                    :key="card.title"
                    class="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                    <p class="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">{{ card.eyebrow }}</p>
                    <h3 class="mt-2 text-xl font-semibold text-slate-900">{{ card.title }}</h3>
                    <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ card.description }}</p>
                </article>
            </div>
        </section>

        <Cta :content="content.home.primaryCta" />
    </div>
</template>

<script setup lang="ts">
const { getContent } = useSiteContent()

const content = getContent()
</script>