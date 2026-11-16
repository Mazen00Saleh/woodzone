import type { RouterConfig } from '@nuxt/schema'

// Smooth scrolling for hash links (e.g. /services#exterior-woodwork) and restored positions.
// Scroll-to-top between pages is handled instantly in app.vue while the page is faded out.
export default <RouterConfig>{
  scrollBehaviorType: 'smooth'
}
