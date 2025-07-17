// tailwind.config.js
module.exports = {
  darkMode: 'class', // Enable dark mode via class strategy
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all JS/JSX/TS/TSX files in src
    "./public/index.html",        // Also scan the public index.html
  ],
  theme: {
    extend: {}, // You can add custom colors/fonts later here
  },
  plugins: [],  // Add Tailwind plugins here if needed
}
