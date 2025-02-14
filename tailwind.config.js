/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.{html,js}",
    "./js/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        temp: ["gallery-modern"],
        grotesk: ["grotesk"],
        neuehaas: ["neuehaas"],
        bebasneue: ["bebasneue"],
        rocgrotesk:["rocgrotesk"],
        glacial: ["glacial"]
      },
    },
  },
  plugins: [],
}