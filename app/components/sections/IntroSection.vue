<script setup lang="ts">
const { data: company } = await useCompany()

// Values are drawn from the profile's commitment statement (precision, quality, timely delivery, durability).
const values = ['Precision', 'Quality', 'Timely delivery', 'Durability']
</script>

<template>
  <section class="py-20 sm:py-28">
    <Container class="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <Reveal>
        <SectionHeading eyebrow="About Wood Zone" title="Craftsmanship shaped by architectural detail" />
        <div class="mt-8 space-y-5 leading-relaxed text-charcoal/80">
          <p>{{ company?.summary[0] }}</p>
          <p>{{ company?.summary[1] }}</p>
        </div>
        <ul class="mt-10 grid grid-cols-2 gap-x-8 gap-y-4 border-t border-stone pt-8">
          <li v-for="v in values" :key="v" class="flex items-center gap-3 text-sm uppercase tracking-wider text-wood">
            <span class="h-2 w-2 bg-wood-accent" aria-hidden="true" />{{ v }}
          </li>
        </ul>
        <BaseButton to="/about" variant="outline" class="mt-10">Learn more</BaseButton>
      </Reveal>
      <Reveal :delay="150">
        <img
          src="/images/projects/villa-4/2.jpg"
          alt="Villa entrance with walnut-toned wood cladding and an olive tree"
          loading="lazy"
          class="aspect-[4/5] w-full object-cover"
        />
      </Reveal>
    </Container>
  </section>
</template>
