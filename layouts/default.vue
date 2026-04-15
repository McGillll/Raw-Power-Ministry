<template>
    <div class="min-h-screen bg-[radial-gradient(circle_at_top,_#fff7e6_0%,_#f8fafc_45%,_#eef2ff_100%)] font-['Source_Sans_3',sans-serif] text-slate-900">
        <SiteHeader />
        <main class="mx-auto w-full max-w-6xl px-4 py-8 md:px-8 md:py-12">
            <slot />
        </main>
        <SiteFooter />
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'Raw Power Ministry',
    meta: [
        {
            name: 'description',
            content:
                'Raw Power Ministry is a welcoming church community where people can worship, grow in faith, and serve together.'
        }
    ],
    link: [
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossorigin: ''
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Source+Sans+3:wght@400;600;700&display=swap'
        }
    ]
})
</script>
