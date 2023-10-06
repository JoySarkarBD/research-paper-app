import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@tremor/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      screens: {
        xsm: { min: '0px' },
        sm: { min: '481px' },
        xmd: { min: '641px' }
      },
      backgroundImage: {
        hero: 'url(./../public/banner.png)'
      }
    }
  }
} as Config;
