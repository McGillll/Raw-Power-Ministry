<template>
    <div class="space-y-8 md:space-y-10">
        <section class="rounded-3xl bg-slate-900 px-6 py-14 text-white shadow-xl shadow-slate-900/20 md:px-12 md:py-16">
            <header class="max-w-3xl">
                <p class="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-amber-400">
                    {{ content.home.serviceTimesHeading.eyebrow }}
                </p>
                <h1 class="font-['Playfair_Display',serif] text-3xl leading-tight text-white md:text-5xl">
                    {{ content.home.serviceTimesHeading.title }}
                </h1>
                <p class="mt-4 text-base leading-relaxed text-slate-200 md:text-xl">
                    {{ content.home.serviceTimesHeading.description }}
                </p>
            </header>
        </section>

        <section id="media" class="grid gap-5 md:grid-cols-3">
            <article
                v-for="item in content.home.serviceTimes"
                :key="item.name"
                class="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50 ring-1 ring-slate-200"
            >
                <p class="text-xs font-bold uppercase tracking-[0.22em] text-amber-600">Media Feature</p>
                <h2 class="mt-3 text-2xl font-semibold text-slate-900">{{ item.name }}</h2>
                <p class="mt-3 text-sm leading-relaxed text-slate-600">{{ item.time }}</p>
                <BaseButton class="mt-6" variant="ghost" size="sm">Watch Now</BaseButton>
            </article>
        </section>
    </div>
</template>

<script setup lang="ts">
const { getContent } = useSiteContent()
const content = getContent()
</script>
