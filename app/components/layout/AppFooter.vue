<script setup lang="ts">
const { data: company } = await useCompany()
import { mainNav } from '~/data/navigation'
</script>

<template>
  <footer class="bg-wood text-stone">
    <Container class="grid gap-12 py-16 md:grid-cols-3">
      <div>
        <img src="/images/logo/logo-light.png" alt="Wood Zone" class="h-14 w-auto" width="800" height="362" />
        <p class="mt-6 max-w-xs text-sm leading-relaxed text-stone/80">{{ company?.tagline }}</p>
      </div>
      <div>
        <p class="eyebrow !text-stone/75">Explore</p>
        <ul class="mt-5 space-y-3 text-sm">
          <li v-for="item in mainNav" :key="item.to">
            <NuxtLink :to="item.to" class="link-underline hover:text-white">{{ item.label }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <p class="eyebrow !text-stone/75">Contact</p>
        <ul class="mt-5 space-y-3 text-sm">
          <li><a :href="`tel:${company?.phone}`" class="link-underline hover:text-white">{{ company?.phone }}</a></li>
          <li><a :href="`mailto:${company?.email}`" class="link-underline hover:text-white">{{ company?.email }}</a></li>
          <li>{{ company?.website }}</li>
          <li class="text-stone/75">Part of {{ company?.group }}</li>
        </ul>
      </div>
    </Container>
    <div class="border-t border-white/10 py-5 text-center text-xs text-stone/75">
      © {{ new Date().getFullYear() }} {{ company?.name }}. Prototype for demonstration.
    </div>
  </footer>
</template>
