<script setup lang="ts">
const { data: projects } = await useProjects()
const category = ref('All')

const categories = computed(() => [...new Set((projects.value ?? []).map((p) => p.category))])
const visible = computed(() =>
  (projects.value ?? []).filter((p) => category.value === 'All' || p.category === category.value)
)

useSeoMeta({ title: 'Projects | Wood Zone', description: 'Selected exterior woodwork projects by Wood Zone.' })
</script>

<template>
  <div>
    <PageHeader eyebrow="Selected work" title="Projects" intro="Exterior woodwork on villas and residences, from the Wood Zone company profile." />
    <section class="py-14 sm:py-20">
      <Container>
        <ProjectFilter v-model="category" :categories="categories" class="mb-10" />
        <div class="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal v-for="(p, i) in visible" :key="p.slug" :delay="(i % 3) * 80">
            <ProjectCard :project="p" />
          </Reveal>
        </div>
      </Container>
    </section>
    <CtaBand />
  </div>
</template>
