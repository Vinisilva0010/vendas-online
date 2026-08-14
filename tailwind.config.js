/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "var(--color-base)",
        identity: "var(--color-identity)",
        shock: "var(--color-shock)",
        support: "var(--color-support)",
        text: "var(--color-text)",
      },
      fontFamily: {
        title: ['var(--font-anton)'],
        mono: ['var(--font-fira-code)'],
        body: ['var(--font-inter)'],
      },
      boxShadow: {
        'hard': 'var(--shadow-hard)',
        'hard-hover': 'var(--shadow-hard-hover)',
      }
    },
  },
  plugins: [],
};