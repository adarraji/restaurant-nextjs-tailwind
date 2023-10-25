/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'custom-bg-notf': '#d4400f',
        'custom-notf': '#ffffff', 
        'custom-bg-notf': '#000000',            
        'custom-menu': '#808080',
        'custom-bg-menu-small': '#d4400f',
        'custom-menu-small': '#ffffff',
        'custom-border': '#cfcfcf',
        'custom-bg-slider': '#edf2f5',
        'custom-slider': '#4c3017',
        'custom-bg-button': '#d4400f',
        'custom-button': '#ffffff',
        'custom-border-button': '#d4400f',
        'custom-featured': '#d4400f',
        'custom-featured-hover': '#edf2f5',
        'custom-footer': '#808080',
        'custom-cat': '#d4400f',
        'custom-bg-cat-even': '#edf2f5',
        'custom-product': '#d4400f',
        'custom-cart': '#d4400f',
        'custom-bg-payment': '#edf2f5',
      }
    },
  },
  plugins: [],
}
