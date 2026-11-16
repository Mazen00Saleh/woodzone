<script setup lang="ts">
const { data: services } = await useServices()
</script>

<template>
  <section class="bg-stone-light py-20 sm:py-28">
    <Container>
      <Reveal>
        <SectionHeading eyebrow="What we do" title="Woodwork for homes, institutions and landmarks" />
      </Reveal>
      <ol class="mt-14 border-t border-stone">
        <li v-for="(s, i) in services" :key="s.slug">
          <Reveal :delay="i * 60">
            <NuxtLink
              :to="`/services#${s.slug}`"
              class="group grid gap-3 border-b border-stone py-8 transition-colors hover:bg-white/60 sm:grid-cols-[4rem_1fr_2fr] sm:items-baseline sm:gap-8 sm:px-4"
            >
              <span class="font-display text-2xl text-wood-accent transition-transform duration-300 group-hover:scale-110">{{ String(i + 1).padStart(2, '0') }}</span>
              <h3 class="text-2xl transition-all duration-300 group-hover:translate-x-2 group-hover:text-wood-accent motion-reduce:group-hover:translate-x-0 sm:text-3xl">{{ s.title }}</h3>
              <p class="max-w-xl text-charcoal/75 transition-colors duration-300 group-hover:text-charcoal">{{ s.summary }}</p>
            </NuxtLink>
          </Reveal>
        </li>
      </ol>
    </Container>
  </section>
</template>
