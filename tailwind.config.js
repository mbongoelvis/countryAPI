/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        DarkModeBgHeader: "hsl(209, 23%, 22%)",
        LightmodeBgHeader:"hsl(0, 0%, 98%)",
        DarkmodeBody: "hsl(207, 26%, 17%)",
        LightmodeBgBody: "hsl(0, 0%, 100%)",
        LightModeBorder: "rgba(0, 0, 0, 0.3)",
        DarkModeBorder: "rgba(255, 255, 255, 0.05)"
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};

