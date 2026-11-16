<script setup lang="ts">
// Generic category filter. Renders nothing until the data has more than one category
// (the company profile currently only contains villas).
const props = defineProps<{ categories: string[] }>()
const model = defineModel<string>({ default: 'All' })
const options = computed(() => ['All', ...props.categories])
</script>

<template>
  <div v-if="categories.length > 1" class="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
    <button
      v-for="c in options"
      :key="c"
      type="button"
      :aria-pressed="model === c"
      class="border px-5 py-2 text-xs font-medium uppercase tracking-wider transition-colors"
      :class="model === c ? 'border-wood bg-wood text-white' : 'border-stone text-wood hover:border-wood'"
      @click="model = c"
    >
      {{ c }}
    </button>
  </div>
</template>
