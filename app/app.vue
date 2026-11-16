<script setup lang="ts">
// Jump to the top while the old page is faded out, so the new page fades in already at the top
// (a smooth scroll across the old content would look jarring).
const pageTransition = {
  name: 'page',
  mode: 'out-in' as const,
  onBeforeEnter: () => {
    if (!useRoute().hash) window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }
}
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage :transition="pageTransition" />
  </NuxtLayout>
</template>
