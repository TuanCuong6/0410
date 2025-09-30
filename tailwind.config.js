// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 1.5s ease-in-out",
        float: "float 6s ease-in-out infinite",
        "heart-float": "heartFloat 8s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        heartFloat: {
          "0%": {
            transform: "translateY(100vh) rotate(0deg)",
            opacity: "1",
          },
          "100%": {
            transform: "translateY(-100vh) rotate(360deg)",
            opacity: "0",
          },
        },
      },
      backgroundImage: {
        "gradient-pink":
          "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #fbcfe8 100%)",
      },
    },
  },
  plugins: [],
};
