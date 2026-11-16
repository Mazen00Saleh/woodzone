<script setup lang="ts">
const { data: company } = await useCompany()
const values = [
  { title: 'Precision', text: 'Close attention to architectural details that give every project a unique and luxurious character.' },
  { title: 'Quality', text: 'Work delivered according to high standards of quality and safety.' },
  { title: 'Timely delivery', text: 'Professional execution that ensures precision, quality, and timely delivery.' },
  { title: 'Durability', text: 'Elegant, durable woodwork that combines beauty, functionality, and craftsmanship.' }
]
useSeoMeta({ title: 'About | Wood Zone', description: company.value?.summary[0] })
</script>

<template>
  <div>
    <PageHeader eyebrow="About" title="Wood Zone" :intro="company?.summary[0]" />

    <section class="py-16 sm:py-24">
      <Container class="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal class="space-y-5 leading-relaxed text-charcoal/80">
          <p>{{ company?.summary[1] }}</p>
          <p>{{ company?.summary[2] }}</p>
        </Reveal>
        <Reveal :delay="120">
          <img
            src="/images/projects/villa-8/2.jpg"
            alt="Villa terrace with dark canopy and glass pool"
            loading="lazy"
            class="aspect-[4/3] w-full object-cover"
          />
        </Reveal>
      </Container>
    </section>

    <section class="bg-stone-light py-16 sm:py-24">
      <Container>
        <Reveal><SectionHeading eyebrow="Our commitment" title="Aesthetics, functionality and durability" /></Reveal>
        <Reveal :delay="80"><p class="mt-8 max-w-3xl text-lg leading-relaxed text-charcoal/80">{{ company?.commitment }}</p></Reveal>
        <dl class="mt-14 grid gap-px bg-stone sm:grid-cols-2 lg:grid-cols-4">
          <Reveal v-for="(v, i) in values" :key="v.title" :delay="i * 70" class="bg-stone-light py-2 sm:px-6 sm:first:pl-0">
            <dt class="font-display text-3xl text-wood">{{ v.title }}</dt>
            <dd class="mt-3 text-sm leading-relaxed text-charcoal/75">{{ v.text }}</dd>
          </Reveal>
        </dl>
      </Container>
    </section>

    <section class="py-16 sm:py-24">
      <Container class="max-w-3xl">
        <Reveal>
          <p class="eyebrow mb-4">The group</p>
          <p class="font-display text-3xl leading-snug text-wood sm:text-4xl">{{ company?.groupProfile }}</p>
        </Reveal>
      </Container>
    </section>
    <CtaBand />
  </div>
</template>
