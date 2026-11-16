<script setup lang="ts">
useSeoMeta({ title: 'Contact | Wood Zone', description: 'Speak with the Wood Zone team about your woodwork project.' })
</script>

<template>
  <div>
    <PageHeader eyebrow="Get in touch" title="Contact" intro="Speak with the Wood Zone team about your project." />
    <section class="py-14 sm:py-20">
      <Container class="grid gap-14 lg:grid-cols-[2fr_1fr] lg:gap-20">
        <Reveal><ContactForm /></Reveal>
        <Reveal :delay="120"><ContactInfo /></Reveal>
      </Container>
    </section>
  </div>
</template>
