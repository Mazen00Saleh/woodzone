import type { Service } from '~/types'

// Service list is from the company profile. Short summaries are MOCK copy kept to what the profile states.
// The profile has no photos of laboratories, cubicle partitions or interiors, so those have no image yet.
export const services: Service[] = [
  {
    slug: 'exterior-woodwork',
    title: 'Exterior Woodwork',
    summary:
      'Premium exterior woodwork for villas, palaces, and commercial buildings, made durable and detailed to architectural standards.',
    image: '/images/projects/villa-10/2.jpg'
  },
  {
    slug: 'interior-woodwork',
    title: 'Interior Woodwork & Fit-Out',
    summary: 'Customized interior woodwork and fit-out solutions delivered to high standards of quality and safety.'
  },
  {
    slug: 'school-laboratories',
    title: 'School Laboratories',
    summary: 'Design, manufacturing, and installation of school laboratories.'
  },
  {
    slug: 'medical-laboratories',
    title: 'Medical Laboratories',
    summary: 'Design, manufacturing, and installation of medical laboratories.'
  },
  {
    slug: 'toilet-cubicle-partitions',
    title: 'Toilet Cubicle Partitions',
    summary: 'Design, manufacturing, and installation of toilet cubicle partitions.'
  }
]
