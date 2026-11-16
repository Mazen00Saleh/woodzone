<script setup lang="ts">
import type { Project } from '~/types'
defineProps<{ project: Project }>()
</script>

<template>
  <NuxtLink :to="`/projects/${project.slug}`" class="group block">
    <div class="relative aspect-[4/5] overflow-hidden bg-stone">
      <img
        :src="project.images[0]?.src"
        :alt="project.images[0]?.alt"
        loading="lazy"
        class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div class="absolute inset-0 flex items-end bg-gradient-to-t from-wood/80 via-wood/0 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
        <span class="translate-y-3 text-xs font-medium uppercase tracking-wider text-white transition-transform duration-500 group-hover:translate-y-0 motion-reduce:translate-y-0">View project →</span>
      </div>
    </div>
    <div class="mt-4 flex items-baseline justify-between border-b border-stone pb-3">
      <h3 class="text-2xl transition-colors duration-300 group-hover:text-wood-accent">{{ project.title }}</h3>
      <span class="eyebrow">{{ project.category }}</span>
    </div>
  </NuxtLink>
</template>
