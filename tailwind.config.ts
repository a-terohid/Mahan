import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/svgs/*.{js,ts,jsx,tsx,mdx,svg}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
     colors: {

      "dark_background/0": "#18181B",
      "dark_background/1": "#27272A",
      "dark_background/2": "#3F3F46",
      "dark_background/3": "#52525B",
      "light_background/0": "#FAFAFA",
      "light_background/1": "#F4F4F5",
      "light_background/2": "#E4E4E7",
      "light_background/3": "#D4D4D8",
      "primary": {
          50  : "#EFF6FF",
          100 : "#E0E7FF",
          200 : "#BFDBFE",
          300 : "#93C5FD",
          400 : "#60A5FA",
          500 : "#3B82F6",
          600 : "#2563EB",
          700 : "#1D4ED8",
          800 : "#1E40AF",
          900 : "#1E3A8A",
        },
        "secondary": {
          50  : "#F9FAFB",
          100 : "#E0E7FF",
          200 : "#C7D2FE",
          300 : "#A5B4FC",
          400 : "#818CF8",
          500 : "#6366F1",
          600 : "#4F46E5",
          700 : "#4338CA",
          800 : "#3730A3",
          900 : "#312E81",
        },
        "plus" : {
          "red-1" : "#8e0413",
          "red-2" : "#ad080f",
          "red-3" : "#cb0b0a",
          "red-4" : "#df8080",
          "green-1" : "#004733",
          "green-2" : "#2b6a4d",
          "green-3" : "#568d66",
          "green-4" : "#a5c1ae",
          "withe" : "#f3f4f6",
          "gray" : "#dcdfe5",
      },
        "Gray": {
          50  : "#F9FAFB",
          100 : "#F3F4F6",
          200 : "#E5E7EB",
          300 : "#D1D5DB",
          400 : "#9CA3AF",
          500 : "#6B7280",
          600 : "#4B5563",
          700 : "#374151",
          800 : "#1F2937",
          900 : "#111827",
        },
     },
     boxShadow: {
      'custom-shadow': '18px 18px 0px 0px #A5B4FC', // Custom shadow value
    },
    },
    fontFamily: {
      Nunito: [ 'var(--font-Nunito)' ],
      Lora:   [ 'var(--font-Lora)' ],
    },
    container : {
      center : true,
      padding: "3rem"
    },
  },
  plugins: [],
}
export default config;


