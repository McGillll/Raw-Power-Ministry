<template>
    <header class="sticky top-0 z-20 border-b border-slate-200/70 bg-white/90 backdrop-blur-md">
        <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
            <div class="flex items-center gap-3 md:gap-4">
                <img
                    :src="rpmLogo"
                    alt="RPM logo"
                    class="h-10 w-auto object-cover md:h-12"
                >
                <div>
                    <p class="font-['Playfair_Display',serif] text-xl font-bold text-slate-900">{{ content.home.hero.title }}</p>
                    <p class="text-xs uppercase tracking-[0.2em] text-slate-500">{{ content.identity.tagline }}</p>
                </div>
            </div>

            <button
                type="button"
                class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 text-slate-700 transition hover:bg-slate-100 md:hidden"
                aria-label="Toggle menu"
                :aria-expanded="mobileOpen"
                @click="mobileOpen = !mobileOpen"
            >
                <span v-if="!mobileOpen" class="text-lg">☰</span>
                <span v-else class="text-lg">✕</span>
            </button>

            <nav class="hidden items-center gap-6 text-sm font-semibold text-slate-700 md:flex">
                <button
                    v-for="item in navigationItems"
                    :key="item.id"
                    type="button"
                    class="transition duration-300 hover:-translate-y-0.5 hover:text-amber-600"
                    :class="isActive(item.id) ? 'text-amber-600' : ''"
                    :aria-current="isActive(item.id) ? 'page' : undefined"
                    @click="goTo(item.to)"
                >
                    {{ item.label }}
                </button>
            </nav>
        </div>

        <Transition name="menu-slide">
            <nav v-if="mobileOpen" class="border-t border-slate-200 bg-white px-4 py-3 md:hidden">
                <div class="mx-auto flex max-w-6xl flex-col gap-2 text-sm font-semibold text-slate-700">
                    <button
                        v-for="item in navigationItems"
                        :key="item.id"
                        type="button"
                        class="rounded-lg px-3 py-2 text-left transition duration-300 hover:bg-slate-100"
                        :class="isActive(item.id) ? 'bg-amber-50 text-amber-700' : ''"
                        @click="goTo(item.to)"
                    >
                        {{ item.label }}
                    </button>
                </div>
            </nav>
        </Transition>
    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { NavItemId } from '~/types/content'
import rpmLogo from '~/asseets/img/RPM_Logo.png'

const mobileOpen = ref(false)
const route = useRoute()
const { getContent } = useSiteContent()
const content = getContent()
const navigationItems = content.navigation

const isActive = (section: NavItemId) => {
    if (section === 'about') {
        return route.path === '/about'
    }

    if (section === 'times') {
        return route.path === '/media'
    }

    if (section === 'contact') {
        return route.path === '/' && route.hash === '#contact'
    }

    return route.path === '/' && route.hash !== '#contact'
}

const goTo = (path: string) => {
    mobileOpen.value = false
    navigateTo(path)
}
</script>

<style scoped>
.menu-slide-enter-active,
.menu-slide-leave-active {
    transition: all 0.24s ease;
}

.menu-slide-enter-from,
.menu-slide-leave-to {
    opacity: 0;
    transform: translateY(-8px);
}
</style>
