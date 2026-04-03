/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        green: "#00e5fe",
        secundario: "#15b8ca",
        terciario: "#00fefe",
        black: "#121f41",
        "light-color": "#788E9C",
        "light-color-white": "#353e44",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        custom: "0 .5rem 1.5rem rgba(0,0,0,.1)",
        "custom-light": "0 .5rem .5rem rgba(255,255,255,.1)",
        btn: "inset 2px 2px 2px 0px rgba(255,255,255,.5), 7px 7px 20px 0px rgba(0,0,0,.1), 4px 4px 5px 0px rgba(0,0,0,.1)",
      },
      spacing: {
        "2rem": "2rem",
        "4%": "4%",
        "5%": "5%",
        "8%": "8%",
      },
      fontSize: {
        base: "1.6rem",
        "1.7rem": "1.7rem",
        "4.5rem": "4.5rem",
        "7rem": "7rem",
        "3rem": "3rem",
      },
      keyframes: {
        nahuel61920: {
          "0%, 100%": {
            clipPath:
              "polygon(0% 45%, 15% 44%, 32% 50%, 74% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%)",
          },
          "50%": {
            clipPath:
              "polygon(0% 60%, 16% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%)",
          },
        },
      },
      animation: {
        nahuel61920: "nahuel61920 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
