<template>
    <section id="times" class="grid gap-8 rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/60 ring-1 ring-slate-200 md:grid-cols-2 md:p-10">
        <BaseSectionHeading
            :eyebrow="heading.eyebrow"
            :title="heading.title"
            :description="heading.description"
        />

        <div class="space-y-4">
            <template v-if="state.status === 'loading'">
                <article
                    v-for="item in 3"
                    :key="item"
                    class="animate-pulse rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                    <div class="h-4 w-40 rounded bg-slate-200" />
                    <div class="mt-3 h-3 w-28 rounded bg-slate-200" />
                </article>
            </template>

            <article
                v-else-if="state.status === 'error'"
                class="rounded-2xl border border-red-200 bg-red-50 p-5 text-sm text-red-700"
            >
                {{ state.errorMessage || 'We could not load service times right now. Please try again shortly.' }}
            </article>

            <article
                v-else-if="!services.length"
                class="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600"
            >
                Service times will be posted soon.
            </article>

            <article
                v-for="service in services"
                :key="service.name"
                class="rounded-2xl border border-slate-200 bg-slate-50 p-5"
            >
                <h3 class="text-lg font-semibold text-slate-900">{{ service.name }}</h3>
                <p class="mt-1 text-slate-600">{{ service.time }}</p>
            </article>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { DataState } from '~/composables/useSiteContent'
import type { SectionHeadingContent, ServiceTime } from '~/types/content'

const props = defineProps<{
    heading: SectionHeadingContent
    state: DataState<ServiceTime[]>
}>()

const services = computed(() => {
    if (props.state.status !== 'ready') {
        return []
    }

    return props.state.data
})
</script>
