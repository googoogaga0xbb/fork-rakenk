/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'banner-bg': 'rgba(5, 44, 82, 1)',
        'text': '#15141F',
        'ios-card': 'rgba(22, 68, 152, 0.25)',
        'android-card': 'rgba(21, 20, 31, 0.5)',
        'blue-btn': '#1E97CD',
        'parity-item-gray': 'rgba(21, 20, 31, 0.05)',
        'parity-item-blue': 'rgba(30, 151, 205, 0.05)',
        'light-text' : 'rgba(206, 225, 242, 1)',
        'circle-green':'rgba(0, 216, 124, 1)',
        'agenda-bg' : 'rgba(0, 216, 124, 0.25)',
        'card-bg' : 'rgba(30, 151, 205, 0.25)',
        'orange-card-bg' : 'rgba(255, 119, 0, 0.20)',
        'orange-text' : 'rgba(255, 119, 0, 1)',
        'mob-bg' : 'rgba(1, 92, 250, 1)',
        'phone-bg' : '#e9ecef',
        'filter-btn-border' : 'rgba(21, 20, 31, 0.25)',
        
        
      },
    },
  },
  plugins: [],
}
