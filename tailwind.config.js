/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "violet-dark": "#635FC7",
        "violet-light": "#A8A4FF",
        "grey-700": "#000112",
        "grey-600": "#20212C",
        "grey-500": "#2B2C37",
        "grey-400": "#3E3F4E",
        "grey-medium": "#828FA3",
        "grey-200": "#E4EBFA",
        "grey-light": "#F4F7FD",
        red: "#EA5555",
        "red-light": "#FF9898",
      },
      gridTemplateRows: {
        "custom-1": "auto 1fr",
      },

      gridTemplateColumns: {
        "custom-1": "0.8fr 1fr 1fr 1fr 1fr",
      },
    },
  },
  plugins: [],
};
