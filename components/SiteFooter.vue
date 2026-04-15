<template>
    <footer id="contact" class="border-t border-slate-200 bg-slate-50">
        <div class="mx-auto max-w-6xl px-4 py-12 md:px-8">
            <div class="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
                <div>
                    <p class="font-['Playfair_Display',serif] text-2xl font-bold text-slate-900">{{ content.footer.churchName }}</p>
                    <p class="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
                        {{ content.footer.description }}
                    </p>
                </div>

                <div>
                    <p class="text-sm font-bold uppercase tracking-[0.18em] text-slate-900">Quick Links</p>
                    <ul class="mt-4 space-y-3 text-sm text-slate-600">
                        <li v-for="link in content.footer.quickLinks" :key="link.id">
                            <button type="button" class="transition-colors hover:text-amber-600" @click="navigateTo(link.to)">
                                {{ link.label }}
                            </button>
                        </li>
                    </ul>
                </div>

                <div>
                    <p class="text-sm font-bold uppercase tracking-[0.18em] text-slate-900">Visit Us</p>
                    <ul class="mt-4 space-y-3 text-sm text-slate-600">
                        <li>{{ content.footer.visit.address }}</li>
                        <li>{{ content.footer.visit.phone }}</li>
                        <li>{{ content.footer.visit.email }}</li>
                    </ul>
                </div>
            </div>

            <div class="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
                <p>{{ content.footer.serviceSummary }}</p>
                <p>Copyright {{ currentYear }} {{ content.identity.churchName }}. All rights reserved.</p>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
const { getContent } = useSiteContent()
const content = getContent()
</script>
