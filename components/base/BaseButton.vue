<template>
    <button
        :type="type"
        :class="buttonClass"
        v-bind="$attrs"
    >
        <slot />
    </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const props = withDefaults(
    defineProps<{
        type?: 'button' | 'submit' | 'reset'
        variant?: Variant
        size?: Size
        fullWidth?: boolean
    }>(),
    {
        type: 'button',
        variant: 'primary',
        size: 'md',
        fullWidth: false
    }
)

const baseClass =
    'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60'

const variantClasses: Record<Variant, string> = {
    primary:
        'bg-amber-500 text-slate-900 hover:bg-amber-400 focus-visible:ring-amber-500 shadow-lg shadow-amber-500/30',
    secondary:
        'bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-800 shadow-lg shadow-slate-900/30',
    ghost:
        'bg-transparent border border-slate-300 text-slate-700 hover:bg-slate-100 focus-visible:ring-slate-400'
}

const sizeClasses: Record<Size, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm md:text-base',
    lg: 'px-8 py-4 text-base md:text-lg'
}

const buttonClass = computed(() => {
    return [
        baseClass,
        variantClasses[props.variant],
        sizeClasses[props.size],
        props.fullWidth ? 'w-full' : ''
    ]
        .filter(Boolean)
        .join(' ')
})
</script>
