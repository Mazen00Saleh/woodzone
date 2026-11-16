import { projects } from '~/data/projects'

export const useProjects = (options: { featured?: boolean } = {}) =>
  useAsyncData(
    `projects-${options.featured ? 'featured' : 'all'}`,
    async () => (options.featured ? projects.filter((p) => p.featured) : projects)
  )

export const useProject = (slug: MaybeRefOrGetter<string>) =>
  useAsyncData(
    `project-${toValue(slug)}`,
    async () => projects.find((p) => p.slug === toValue(slug)) ?? null,
    { watch: [() => toValue(slug)] }
  )
