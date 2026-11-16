<script setup lang="ts">
const { data: projects } = await useProjects({ featured: true })
</script>

<template>
  <section class="py-20 sm:py-28">
    <Container>
      <div class="flex flex-wrap items-end justify-between gap-6">
        <Reveal>
          <SectionHeading eyebrow="Selected work" title="Exterior woodwork on villas and residences" />
        </Reveal>
        <BaseButton to="/projects" variant="outline">All projects</BaseButton>
      </div>
      <div class="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        <Reveal v-for="(p, i) in projects" :key="p.slug" :delay="i * 80">
          <ProjectCard :project="p" />
        </Reveal>
      </div>
    </Container>
  </section>
</template>
