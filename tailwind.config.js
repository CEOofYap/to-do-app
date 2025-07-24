/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#ab94d4',
        secondary: '#7b3176',
        accent: '#bc58a3',
        dark: {
          100: '#0a060f',
          200: '#120b1e',
        },
        light: {
          100: '#e7e0f3',
          200: '#f4f0f9'
        }
      }
    }
  },
  plugins: [],
}