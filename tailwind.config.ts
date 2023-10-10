import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Andika", "sans-serif"],
    },
    fontSize: {
      base: "48px",
    },

    extend: {
      colors: {
        primary: {
          DEFAULT: "#011832",
        },
        secondary: {
          DEFAULT: "#007bc2",
        },
        tertiary: {
          DEFAULT: "#5c946e",
        },
        police: {
          DEFAULT: "#ebebed",
        },
      },
    },
  },
  plugins: [],
};
export default config;
