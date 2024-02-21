/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        DarkModeBgHeader: "hsl(209, 23%, 22%)",
        DarkmodeBody: "hsl(207, 26%, 17%)",
      },
    },
  },
  plugins: [],
};

