/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        heading: "var(--heading-color)",
      },
      backgroundColor: {
        "btn-accent": "var(--bg-button-accent)",
        fill: "var(--bg-fill)",
      },
      borderColor: {
        primary: "var(--border-color)",
      },
    },
  },
  plugins: [],
};