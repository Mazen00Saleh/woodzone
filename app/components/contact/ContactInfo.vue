<script setup lang="ts">
const { data: company } = await useCompany()
</script>

<template>
  <div class="space-y-8">
    <div>
      <p class="eyebrow mb-2">Phone</p>
      <a :href="`tel:${company?.phone}`" class="link-underline font-display text-3xl text-wood hover:text-wood-accent">{{ company?.phone }}</a>
    </div>
    <div>
      <p class="eyebrow mb-2">Email</p>
      <a :href="`mailto:${company?.email}`" class="link-underline font-display text-3xl text-wood hover:text-wood-accent">{{ company?.email }}</a>
    </div>
    <div>
      <p class="eyebrow mb-2">Website</p>
      <p class="font-display text-3xl text-wood">{{ company?.website }}</p>
    </div>
    <p class="border-t border-stone pt-6 text-sm text-charcoal/70">Wood Zone is part of {{ company?.group }}.</p>
  </div>
</template>
