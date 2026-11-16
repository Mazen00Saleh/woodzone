<script setup lang="ts">
import { mainNav } from '~/data/navigation'

const open = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => (open.value = false))
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-stone/80 bg-ivory/95 backdrop-blur">
    <Container class="flex h-20 items-center justify-between">
      <NuxtLink to="/" aria-label="Wood Zone home" class="shrink-0">
        <img src="/images/logo/logo-dark.png" alt="Wood Zone" class="h-12 w-auto" width="800" height="362" />
      </NuxtLink>

      <nav class="hidden items-center gap-6 md:flex lg:gap-10" aria-label="Main">
        <NuxtLink
          v-for="item in mainNav"
          :key="item.to"
          :to="item.to"
          class="nav-link"
          exact-active-class="!text-wood"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <button
        class="p-2 md:hidden"
        :aria-expanded="open"
        aria-controls="mobile-nav"
        aria-label="Toggle menu"
        @click="open = !open"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path v-if="!open" d="M3 7h18M3 12h18M3 17h18" />
          <path v-else d="M5 5l14 14M19 5L5 19" />
        </svg>
      </button>
    </Container>

    <nav v-show="open" id="mobile-nav" class="border-t border-stone bg-ivory md:hidden" aria-label="Mobile">
      <Container class="flex flex-col py-4">
        <NuxtLink
          v-for="item in mainNav"
          :key="item.to"
          :to="item.to"
          class="border-b border-stone/60 py-4 text-sm uppercase tracking-wider text-charcoal/80"
        >
          {{ item.label }}
        </NuxtLink>
      </Container>
    </nav>
  </header>
</template>
