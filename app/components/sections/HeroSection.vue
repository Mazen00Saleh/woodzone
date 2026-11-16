<script setup lang="ts">
const { data: company } = await useCompany()
</script>

<template>
  <section class="relative isolate flex min-h-[85vh] items-end overflow-hidden bg-wood">
    <!-- Temporary hero image: Villa 10 photo from the company profile -->
    <img
      src="/images/projects/villa-10/1.jpg"
      alt="Villa façade with dark wood cladding and vertical fins"
      class="absolute inset-0 -z-10 h-full w-full object-cover opacity-70"
      fetchpriority="high"
    />
    <div class="absolute inset-0 -z-10 bg-gradient-to-t from-wood/90 via-wood/30 to-transparent" />
    <Container class="pb-16 sm:pb-24">
      <p class="eyebrow !text-stone">Interior &amp; Exterior Woodworking</p>
      <h1 class="mt-4 max-w-3xl text-5xl !text-white sm:text-7xl">{{ company?.tagline }}</h1>
      <div class="mt-10 flex flex-wrap gap-4">
        <BaseButton to="/projects" variant="light">View Projects</BaseButton>
      </div>
    </Container>
  </section>
</template>
