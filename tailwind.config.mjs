/** @type {import('tailwindcss').Config} */
const colors = {
  transparent: "transparent",
  current: "currentColor",
  primary: {
    DEFAULT: "#582C5F",
    light: "#FDF7EF",
  },
  secondary: {
    DEFAULT: "#A58C65",
  },
  text: {
    DEFAULT: "#3F434A",
  },
};

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Helvetica: ["Helvetica Neue", "sans-serif"],
      },
      colors: {
        ...colors,
      },
      boxShadow: {
        btn_shadow: "4px 4px 0px 0px #A58C65",
      },
      fontSize: {
        p: ["18px", { lineHeight: "26px" }],
        h1: [
          "clamp(1.75rem, 1.225rem + 2.625vw, 4.375rem)",
          {
            lineHeight: "clamp(2.125rem, 1.625rem + 2.5vw, 4.625rem)",
            fontWeight: "500",
          },
        ], // 70px
        h2: [
          "clamp(1.5rem, 1.2rem + 1.5vw, 3rem)",
          {
            lineHeight: "clamp(1.75rem, 1.425rem + 1.625vw, 3.375rem)",
            fontWeight: "700",
          },
        ], // 48px
        h3: [
          "clamp(1.75rem, 1.675rem + 0.375vw, 2.125rem)",
          {
            lineHeight: "clamp(2rem, 1.875rem + 0.625vw, 2.625rem)",
            fontWeight: "700",
          },
        ], // 34px
        h4: [
          "clamp(1.25rem, 1.2rem + 0.25vw, 1.5rem)",
          {
            lineHeight: "clamp(1.75rem, 1.7rem + 0.25vw, 2rem)",
            fontWeight: "700",
          },
        ], // 24px
      },
      container: {
        center: true,
        padding: "16px",
        screens: {
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "100%",
          "2xl": "1472px",
        },
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
        "3xl": "1600px",
        "4xl": "1800px",
      },
    },
  },
  plugins: [],
};
