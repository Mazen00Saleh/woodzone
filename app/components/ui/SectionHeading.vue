<script setup lang="ts">
defineProps<{ eyebrow?: string; title: string; light?: boolean }>()
</script>

<template>
  <div>
    <p v-if="eyebrow" class="eyebrow mb-4" :class="{ '!text-stone': light }">{{ eyebrow }}</p>
    <h2 class="max-w-2xl text-4xl sm:text-5xl" :class="{ '!text-white': light }">{{ title }}</h2>
  </div>
</template>
