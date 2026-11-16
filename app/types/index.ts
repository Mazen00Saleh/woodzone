export interface NavItem {
  label: string
  to: string
}

export interface CompanyInfo {
  name: string
  tagline: string
  summary: string[]
  commitment: string
  groupProfile: string
  group: string
  phone: string
  email: string
  website: string
}

export interface Service {
  slug: string
  title: string
  summary: string
  /** Local image path under /public, if the profile provides a relevant photo. */
  image?: string
}

export interface ProjectImage {
  src: string
  alt: string
}

export interface Project {
  slug: string
  title: string
  category: 'Villa'
  summary: string
  images: ProjectImage[]
  featured: boolean
}

export interface ContactPayload {
  name: string
  email: string
  phone: string
  service: string
  message: string
}
