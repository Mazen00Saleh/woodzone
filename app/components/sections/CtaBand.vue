<script setup lang="ts">
const { data: company } = await useCompany()
</script>

<template>
  <section class="relative overflow-hidden bg-stone-light py-16 sm:py-24">
    <!-- Brand motif from the company profile: overlapping skewed frames -->
    <div class="pointer-events-none absolute -right-24 top-1/2 hidden -translate-y-1/2 lg:block" aria-hidden="true">
      <div class="relative h-[420px] w-[520px]">
        <div class="absolute left-0 top-10 h-72 w-72 -skew-y-6 border border-wood/10" />
        <div class="absolute left-16 top-4 h-80 w-80 -skew-y-6 border border-wood/10" />
        <div class="absolute left-32 top-0 h-96 w-96 -skew-y-6 border border-wood/10" />
      </div>
    </div>

    <Container class="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <Reveal>
        <SectionHeading eyebrow="Start a project" title="Planning a woodwork project?" />
        <p class="mt-6 max-w-md leading-relaxed text-charcoal/75">
          Tell us about your villa, building or fit-out and the Wood Zone team will get back to you.
        </p>
      </Reveal>

      <Reveal :delay="120">
        <ul class="divide-y divide-stone border-y border-stone">
          <li>
            <a :href="`tel:${company?.phone}`" class="group flex items-center justify-between gap-6 py-6 transition-colors hover:bg-white/60 sm:px-4">
              <span>
                <span class="eyebrow block">Call us</span>
                <span class="mt-1 block font-display text-2xl text-wood sm:text-3xl">{{ company?.phone }}</span>
              </span>
              <span class="text-xl text-wood-accent transition-transform duration-300 group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0" aria-hidden="true">→</span>
            </a>
          </li>
          <li>
            <a :href="`mailto:${company?.email}`" class="group flex items-center justify-between gap-6 py-6 transition-colors hover:bg-white/60 sm:px-4">
              <span>
                <span class="eyebrow block">Email us</span>
                <span class="mt-1 block break-all font-display text-2xl text-wood sm:text-3xl">{{ company?.email }}</span>
              </span>
              <span class="text-xl text-wood-accent transition-transform duration-300 group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0" aria-hidden="true">→</span>
            </a>
          </li>
          <li>
            <NuxtLink to="/contact" class="group flex items-center justify-between gap-6 py-6 transition-colors hover:bg-white/60 sm:px-4">
              <span>
                <span class="eyebrow block">Online</span>
                <span class="mt-1 block font-display text-2xl text-wood sm:text-3xl">Send us the details</span>
              </span>
              <span class="text-xl text-wood-accent transition-transform duration-300 group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0" aria-hidden="true">→</span>
            </NuxtLink>
          </li>
        </ul>
      </Reveal>
    </Container>
  </section>
</template>
