// tailwind.config.js
import { defineConfig } from 'tailwindcss'

export default defineConfig({
  darkMode: 'class', // Enable class-based dark mode
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
})
