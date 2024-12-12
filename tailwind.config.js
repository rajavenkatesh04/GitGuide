// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "grid-gradient":
          "linear-gradient(135deg, #333 25%, transparent 25%), linear-gradient(225deg, #333 25%, transparent 25%), linear-gradient(45deg, #333 25%, transparent 25%), linear-gradient(-45deg, #333 25%, transparent 25%)",
      },
      colors: {
        "dark-gray": "#1A1A1A", // You can use any custom gray
      },
    },
  },
  plugins: [],
};
