// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgLight: "#F0F0F0",
        bgDark: "#1C2A4F",
        primary: "#9DCBCC",
        accent: "#ED42CA",
        textLight: "#000000",
        textDark: "#FFFFFF",
      },
    },
  },
  plugins: [],
};

cursor-pointer
