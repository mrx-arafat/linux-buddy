/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'linux-green': '#00ff00',
        'terminal-dark': '#0d1117',
        'terminal-gray': '#21262d',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      scrollMargin: {
        '24': '6rem',
      }
    },
  },
  plugins: [],
}
