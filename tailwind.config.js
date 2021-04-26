const plugin = require("tailwindcss/plugin");
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {  
    extend: {
      fontFamily:{
        sans : ["Source Sans Pro", "ui-sanf-serif", "system-ui"],
        mono : ["IBM Plex Mono", "ui-monospace"] 
      },
      colors: {
        "competencies" : "#EED5D7",
        "blue": {
          "50": "#104100ff",
          "100": "#f0fbff",
          "200": "#c7efff",
          "300": "#99e2ff",
          "400": "#70d7ff",
          "500": "#42caff",
          "600": "#00b7ff",
          "700": "#0087bd",
          "800": "#005475",
          "900": "#002533"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const utilities = {
        ".bg-hero": {
          "background-image": "url(/Hero.png)",
          "background-size": "cover",
          "background-position": "bottom",
          "background-repeat": "no-repeat"
        },
        ".shadow-skill": {
          "box-shadow": "0px 15px 30px rgba(0, 0, 0, 0.1)"
        }
      };

      addUtilities(utilities);
    })
  ],
}
