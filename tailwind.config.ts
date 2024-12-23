import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        initial: '#16e0bd',
        primary: '#292929',
        darkPrim: '#232323',
        secondary: '#4D4D4D',
        terciary: '#898989',
        darkgray: '#303030',
      },
      fontFamily: {
        roboto: ['var(--font-roboto)'],
        karla: ['var(--font-karla)'],
        prompt: ['var(--font-prompt)'],
      },
      letterSpacing: {
        spaced_max: '.50em'
      },
    },
  },
  plugins: [],
} satisfies Config;
