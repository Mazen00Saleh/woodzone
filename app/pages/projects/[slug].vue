<script setup lang="ts">
const route = useRoute()
const slug = computed(() => String(route.params.slug))

const { data: project } = await useProject(slug)
const { data: all } = await useProjects()

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found', fatal: true })
}

const index = computed(() => (all.value ?? []).findIndex((p) => p.slug === slug.value))
const prev = computed(() => all.value?.[index.value - 1])
const next = computed(() => all.value?.[index.value + 1])

useSeoMeta({
  title: () => `${project.value?.title} | Wood Zone`,
  description: () => project.value?.summary
})
</script>

<template>
  <div v-if="project">
    <section class="relative isolate flex min-h-[60vh] items-end overflow-hidden bg-wood">
      <img :src="project.images[0]?.src" :alt="project.images[0]?.alt" class="absolute inset-0 -z-10 h-full w-full object-cover opacity-80" />
      <div class="absolute inset-0 -z-10 bg-gradient-to-t from-wood/85 via-transparent to-transparent" />
      <Container class="pb-12 sm:pb-16">
        <NuxtLink to="/projects" class="link-underline text-xs uppercase tracking-wider text-stone hover:text-white">← All projects</NuxtLink>
        <p class="eyebrow mt-6 !text-stone">{{ project.category }}</p>
        <h1 class="mt-2 text-5xl !text-white sm:text-7xl">{{ project.title }}</h1>
      </Container>
    </section>

    <section class="py-14 sm:py-20">
      <Container class="grid gap-12 lg:grid-cols-[1fr_2fr]">
        <Reveal>
          <p class="eyebrow mb-4">About this project</p>
          <p class="leading-relaxed text-charcoal/80">{{ project.summary }}</p>
          <BaseButton to="/contact" class="mt-8">Discuss a similar project</BaseButton>
        </Reveal>
        <Reveal :delay="120">
          <ProjectGallery :images="project.images" />
        </Reveal>
      </Container>
    </section>

    <nav class="border-t border-stone" aria-label="Project navigation">
      <Container class="flex justify-between py-8 text-sm uppercase tracking-wider">
        <NuxtLink v-if="prev" :to="`/projects/${prev.slug}`" class="link-underline text-wood hover:text-wood-accent">← {{ prev.title }}</NuxtLink>
        <span v-else />
        <NuxtLink v-if="next" :to="`/projects/${next.slug}`" class="link-underline text-wood hover:text-wood-accent">{{ next.title }} →</NuxtLink>
      </Container>
    </nav>
  </div>
</template>
