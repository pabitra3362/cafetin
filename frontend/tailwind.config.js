/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
import flowbite from "flowbite-react/tailwind"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors:{
        "custom-brown":"#e59e2b",
      },
      fontFamily:{
        cursive: ["Pacifico","cursive"]
      }
    },
  },
  plugins: [
    daisyui,
    flowbite.plugin(),
  ],
  daisyui: {
    themes: ["light"],
  },
}