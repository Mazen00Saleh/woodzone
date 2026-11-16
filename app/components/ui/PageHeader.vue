<script setup lang="ts">
defineProps<{ eyebrow?: string; title: string; intro?: string }>()
</script>

<template>
  <section class="border-b border-stone bg-ivory py-16 sm:py-24">
    <Container>
      <p v-if="eyebrow" class="eyebrow mb-4">{{ eyebrow }}</p>
      <h1 class="max-w-3xl text-4xl sm:text-6xl">{{ title }}</h1>
      <p v-if="intro" class="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/75">{{ intro }}</p>
    </Container>
  </section>
</template>
