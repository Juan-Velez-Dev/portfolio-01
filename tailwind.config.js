/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ".components/**/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      "bg-gray": "#45474B",
      "bg-black": "#262729",
      "text-white": "#F5F7F8",
      "text-black": "#262729",
      "text-yellow": "#F4CE14",
      "icon-white": "#D9D9D9",
      "icon-wite-hover": "#E7E7E7",
      "icon-wite-active": "#BCBCBC",
      "btn-yellow": "#F4CE14",
      "btn-yellow-hover": "#FFD400",
      "btn-yellow-active": "#DDB800"
    },
    screens: {
      'sm': '375px',
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
    },
    fontFamily:{
      "jet-brains": "JetBrains Mono, monospace",
      "fira-code": "FiraCode Mono, monospace",
      "fira-code-semibold": ["FiraCode Mono, monospace", "semibold"],
      "fira-code-medium": ["FiraCode Mono, monospace", "medium"],
      "fira-code-bold": ["FiraCode Mono, monospace", "bold"],
      "jet-brains-extrabold": ["JetBrains Mono, monospace", "extrabold"]
    },
    extend: {},
  },
  plugins: [],
}

