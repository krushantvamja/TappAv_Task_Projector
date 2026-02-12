/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#060b17",
        brand: "#14b8a6",
        accent: "#f59e0b",
      },
      boxShadow: {
        panel: "0 10px 40px rgba(0, 0, 0, 0.35)",
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at 10% 20%, rgba(20,184,166,0.18) 0%, transparent 35%), radial-gradient(circle at 80% 10%, rgba(245,158,11,0.2) 0%, transparent 40%), linear-gradient(120deg, #050816 0%, #0b1326 60%, #111827 100%)",
      },
    },
  },
  plugins: [],
};
