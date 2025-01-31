/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'light-background': '#cbd5e1',
        'dark-background': '#0a0a0a',
        'light-foreground': '#171717',
        'dark-foreground': '#ededed',
      }
    },
  },
  plugins: [],
} 