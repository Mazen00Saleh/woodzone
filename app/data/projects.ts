import type { Project } from '~/types'

// Photos are from the Wood Zone company profile (extracted to /public/images/projects).
// The profile gives no locations, dates, clients or per-project descriptions, so none are invented here.
// MOCK: titles ("Villa N"), summaries, alt text and the `featured` flags are temporary prototype content.
// Note: every QR code in the profile links to https://hammamdesign.com/, not to project videos.
const summary = 'Exterior woodwork by Wood Zone. Project details to be supplied by the company.'

export const projects: Project[] = [
  {
    slug: 'villa-1',
    title: 'Villa 1',
    category: 'Villa',
    summary,
    featured: false,
    images: [
      { src: '/images/projects/villa-1/1.jpg', alt: 'Villa 1 exterior woodwork, view 1' },
      { src: '/images/projects/villa-1/2.jpg', alt: 'Villa 1 exterior woodwork, view 2' }
    ]
  },
  {
    slug: 'villa-2',
    title: 'Villa 2',
    category: 'Villa',
    summary,
    featured: false,
    images: [
      { src: '/images/projects/villa-2/1.jpg', alt: 'Villa 2 exterior woodwork, view 1' },
      { src: '/images/projects/villa-2/2.jpg', alt: 'Villa 2 exterior woodwork, view 2' }
    ]
  },
  {
    slug: 'villa-3',
    title: 'Villa 3',
    category: 'Villa',
    summary,
    featured: false,
    images: [
      { src: '/images/projects/villa-3/1.jpg', alt: 'Villa 3 exterior woodwork, view 1' },
      { src: '/images/projects/villa-3/2.jpg', alt: 'Villa 3 exterior woodwork, view 2' }
    ]
  },
  {
    slug: 'villa-4',
    title: 'Villa 4',
    category: 'Villa',
    summary,
    featured: true,
    images: [
      { src: '/images/projects/villa-4/1.jpg', alt: 'Villa 4 exterior woodwork, view 1' },
      { src: '/images/projects/villa-4/2.jpg', alt: 'Villa 4 exterior woodwork, view 2' }
    ]
  },
  {
    slug: 'villa-5',
    title: 'Villa 5',
    category: 'Villa',
    summary,
    featured: false,
    images: [
      { src: '/images/projects/villa-5/1.jpg', alt: 'Villa 5 exterior woodwork, view 1' },
      { src: '/images/projects/villa-5/2.jpg', alt: 'Villa 5 exterior woodwork, view 2' }
    ]
  },
  {
    slug: 'villa-6',
    title: 'Villa 6',
    category: 'Villa',
    summary,
    featured: false,
    images: [
      { src: '/images/projects/villa-6/1.jpg', alt: 'Villa 6 exterior woodwork, view 1' },
      { src: '/images/projects/villa-6/2.jpg', alt: 'Villa 6 exterior woodwork, view 2' }
    ]
  },
  {
    slug: 'villa-7',
    title: 'Villa 7',
    category: 'Villa',
    summary,
    featured: false,
    images: [
      { src: '/images/projects/villa-7/1.jpg', alt: 'Villa 7 exterior woodwork, view 1' },
      { src: '/images/projects/villa-7/2.jpg', alt: 'Villa 7 exterior woodwork, view 2' }
    ]
  },
  {
    slug: 'villa-8',
    title: 'Villa 8',
    category: 'Villa',
    summary,
    featured: true,
    images: [
      { src: '/images/projects/villa-8/1.jpg', alt: 'Villa 8 exterior woodwork, view 1' },
      { src: '/images/projects/villa-8/2.jpg', alt: 'Villa 8 exterior woodwork, view 2' }
    ]
  },
  {
    slug: 'villa-9',
    title: 'Villa 9',
    category: 'Villa',
    summary,
    featured: false,
    images: [
      { src: '/images/projects/villa-9/1.jpg', alt: 'Villa 9 exterior woodwork, view 1' },
      { src: '/images/projects/villa-9/2.jpg', alt: 'Villa 9 exterior woodwork, view 2' }
    ]
  },
  {
    slug: 'villa-10',
    title: 'Villa 10',
    category: 'Villa',
    summary,
    featured: true,
    images: [
      { src: '/images/projects/villa-10/1.jpg', alt: 'Villa 10 exterior woodwork, view 1' },
      { src: '/images/projects/villa-10/2.jpg', alt: 'Villa 10 exterior woodwork, view 2' }
    ]
  },
  {
    slug: 'villa-11',
    title: 'Villa 11',
    category: 'Villa',
    summary,
    featured: true,
    images: [
      { src: '/images/projects/villa-11/1.jpg', alt: 'Villa 11 exterior woodwork, view 1' },
      { src: '/images/projects/villa-11/2.jpg', alt: 'Villa 11 exterior woodwork, view 2' }
    ]
  }
]
