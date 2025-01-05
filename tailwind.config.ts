import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '480px',  // Custom screen size
      'sm': '640px',  // Default small screen size
      'md': '768px',  // Default medium screen size
      'lg': '1024px', // Default large screen size
      'xl': '1280px', // Default extra-large screen size
      '2xl': '1536px', // Default 2x extra-large screen size
      '3xl': '1800px', // Your custom size
    },
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
