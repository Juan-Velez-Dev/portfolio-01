/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ".components/**/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      "bg-nav": "#45474B",
      "bg-app": "#262729",
      "white-app": "#F5F7F8",
      "yellow-app": "#F4CE14",
      "icon-white-app": "#D9D9D9",
    },
    screens: {
      'sm': '375px',
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
    },
    fontFamily:{
      "JetBrains": "JetBrains Mono, monospace"
    },
    extend: {},
  },
  plugins: [],
}

