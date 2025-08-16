/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'founders-grotesk': ['Founders Grotesk X-Cond Bold', 'sans-serif'],
        'founders-grotesk-light': ['Founders Grotesk X-Cond Light', 'sans-serif'],
      },
    },
  },
  safelist: [
    {
      pattern: /bg-\[url\(.*\]/,
    },
  ],
  plugins: [],
}

