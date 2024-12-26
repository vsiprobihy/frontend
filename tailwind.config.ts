import { Config } from "tailwindcss";
import fluid, { extract, fontSize } from "fluid-tailwind";

const config: Config = {
  content: {
    files: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/libs/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract,
  },
  theme: {
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      dark: "#25262E",
      grey: {
        dark: "#3D3F4F",
        "light-dark": "#D8DAE6",
        DEFAULT: "#5E617D",
        "light-middle": "#989DB6",
        light: "#F1F2F8",
      },
      green: {
        DEFAULT: "#6A7821",
        "light-middle": "#9DA36A",
        light: "#F5FADA",
      },
      red: {
        DEFAULT: "#E24040",
        "light-blink": "#FFB6B6",
      },
      yellow: {
        DEFAULT: "#FBB500",
      },
      orange: {
        interactive: "#CF3E00",
        hot: "#FB4B00",
      },
    },
    extend: {
      flex: {
        full: "0 0 100%",
      },
      maxWidth: {
        "content-limit": "2000px",
        "content-limit-1/2": "1000px",
      },
      fontFamily: {
        helvetica: ["Helvetica", "Arial", "sans-serif"],
      },
    },
    fluid: () => ({
      defaultScreens: ["22.5rem", "120rem"],
    }),
  },
  fontSize,
  plugins: [fluid({ checkSC144: false })],
};

export default config;
