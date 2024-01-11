/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "UI-BLACK": "#23252a",
        "UI-WHITE": "#ffffff",
        "UI-BLUE": "#5142ff",
        "UI-DARK-GRAY": "#c3c1d6",
        "UI-LIGHT-GRAY": "#efefee",
        "UI-PURPLE": "#7266ff",
        "UI-DARK-PURPLE": "#6F6AA3",
        "UI-BORDER": "#dcd9ff29",
        "UI-SLATE": "#27293a",
      },
    },
  },
  plugins: [],
};
