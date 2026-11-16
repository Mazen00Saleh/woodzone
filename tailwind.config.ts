import type { Config } from 'tailwindcss'

// Design tokens derived from the Wood Zone company profile (deep brown, warm stone, charcoal).
export default <Partial<Config>>{
  // Apply hover: styles only on devices that can hover (avoids sticky hover on touch screens).
  future: { hoverOnlyWhenSupported: true },
  theme: {
    extend: {
      colors: {
        wood: { DEFAULT: '#45241a', light: '#6b3e2c', accent: '#835637' },
        stone: { DEFAULT: '#d8d2cb', light: '#ebe7e1' },
        ivory: '#f7f4ef',
        charcoal: '#262626'
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      borderRadius: { DEFAULT: '2px', md: '3px', lg: '4px' },
      letterSpacing: { wide2: '0.18em' }
    }
  }
}
