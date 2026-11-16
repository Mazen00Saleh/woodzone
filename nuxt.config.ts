// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon'],
  // Tailwind's nesting plugin is not used (and tailwindcss 3.4 does not ship it), so disable it to silence the build warning.
  postcss: { plugins: { 'tailwindcss/nesting': false } },
  css: ['~/assets/css/main.css'],
  // Folders group components for maintainability; names stay unprefixed (<Container>, <AppHeader>).
  components: [{ path: '~/components', pathPrefix: false }],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Wood Zone | Interior & Exterior Woodworking',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Wood Zone is a Jordanian specialist in interior and exterior woodworking, design, manufacturing and installation.'
        },
        { name: 'theme-color', content: '#45241a' },
        { property: 'og:site_name', content: 'Wood Zone' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Wood Zone | Interior & Exterior Woodworking' },
        { property: 'og:description', content: 'Premium interior and exterior woodwork for villas, palaces and commercial buildings, plus laboratories and toilet cubicle partitions.' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500;600&display=swap'
        }
      ]
    }
  }
})
