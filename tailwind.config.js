// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        rotateY: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(1turn)" },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
      },
      animation: {
        rotateY: "rotateY 3s ease-in-out infinite",
        bounce: "bounce 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
