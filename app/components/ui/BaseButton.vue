<script setup lang="ts">
const NuxtLink = resolveComponent('NuxtLink')

withDefaults(defineProps<{ to?: string; variant?: 'primary' | 'outline' | 'light' }>(), { variant: 'primary' })
</script>

<template>
  <component
    :is="to ? NuxtLink : 'button'"
    :to="to"
    class="inline-flex items-center justify-center rounded px-7 py-3.5 text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0"
    :class="{
      'bg-wood text-white hover:bg-wood-light hover:shadow-lg hover:shadow-wood/25': variant === 'primary',
      'border border-wood text-wood hover:bg-wood hover:text-white': variant === 'outline',
      'bg-stone text-wood hover:bg-white hover:shadow-lg hover:shadow-black/20': variant === 'light'
    }"
  >
    <slot />
  </component>
</template>
