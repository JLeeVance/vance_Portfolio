const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' }
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.5' },
        },
        // Format for box-shadow arguments:
        //    box-shadow: h-offset v-offset blur spread color;
        //
        //    Middle ( 50% ) of the keyframe should glow MORE
        //
        glow: {
          '0%, 100%': { 
            textShadow: "0 0 px1 #fff" 
          },
          '50%': {
            textShadow: '0 0 1px #a6b896, 0 0 .75px #a6b896, 0 0 .5px #a6b896, 0 0 .25px #a6b896' 
          }
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        pulse: 'pulse 2s ease-in-out infinite',
        lightGlowSage: 'glow 2s ease-in-out infinite'
      },
      colors: {
        customSage: '#bbceb2',
        customDSage: '#a6b896',
        customBeige: '#d8cfc7',
        customAccentPink: '#e1bebe',
        customBrown: '#654321',
        customDBrown: '#4F301F'
      },
      fontFamily: {
        poiret: ['Poiret One', 'cursive'],
        montserrat: [ 'Montserrat', 'sans-serif'],
        armata: ['Armata', 'sans-serif']
      },
    },
  },
  plugins: [],
};
