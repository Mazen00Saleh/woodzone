<script setup lang="ts">
const { data: services } = await useServices()
useSeoMeta({
  title: 'Services | Wood Zone',
  description: 'Exterior and interior woodwork, laboratories and toilet cubicle partitions by Wood Zone.'
})
</script>

<template>
  <div>
    <PageHeader
      eyebrow="What we do"
      title="Services"
      intro="Design, manufacturing and installation of woodwork for villas, palaces, commercial buildings, schools and laboratories."
    />
    <section class="py-6 sm:py-10">
      <Container>
        <article
          v-for="(s, i) in services"
          :id="s.slug"
          :key="s.slug"
          class="grid scroll-mt-28 items-center gap-8 border-b border-stone py-14 last:border-0 lg:grid-cols-2 lg:gap-16"
        >
          <Reveal :class="{ 'lg:order-2': i % 2 === 1 }">
            <img v-if="s.image" :src="s.image" :alt="`${s.title} example`" loading="lazy" class="aspect-[4/3] w-full object-cover" />
            <!-- MOCK: no photo in the profile for this service; brand-colour panel stands in. -->
            <div v-else class="flex aspect-[4/3] w-full items-center justify-center bg-wood">
              <span class="font-display text-8xl text-stone/30">{{ String(i + 1).padStart(2, '0') }}</span>
            </div>
          </Reveal>
          <Reveal :delay="100">
            <p class="eyebrow mb-4">{{ String(i + 1).padStart(2, '0') }}</p>
            <h2 class="text-4xl">{{ s.title }}</h2>
            <p class="mt-5 max-w-lg leading-relaxed text-charcoal/80">{{ s.summary }}</p>
            <BaseButton to="/contact" variant="outline" class="mt-8">Enquire about this service</BaseButton>
          </Reveal>
        </article>
      </Container>
    </section>
    <CtaBand />
  </div>
</template>
