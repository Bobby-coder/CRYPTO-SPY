module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'black': "#101623",
        'gray-80': '#2d3446',
        'gray-100': '#101623',
        'white': "#ffffff",
        'red': "#E21717",
        'green': '#4DD637',
      },
      backgroundImage: {
        'hero-pattern': "url('../public/images/banner.jpg')"
      },
    },
  },
  plugins: [],
};
