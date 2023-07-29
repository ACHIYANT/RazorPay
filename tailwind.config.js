/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        Mulish: ["mulish-variable", "sans-serif"],
      },
      colors: {
        deepBlue: "#02042a",
        lightBlue: "#2b84ea",
        lightBlue300: "#4b94ed",
        lightBlue500: "#0b72e7",
        greenLight: "hsla(153, 92%, 41%, 1)",
        grayText: "#818597",
        lightGray: "#e2e2e2",
        grayBlue: "#344a6c",
        deepBlueHead: "#162f56",
        gray2: "#525a76",
        bggray: "hsla(220, 81.8%, 97.8%, 1)",
        footerText: "hsla(227, 18%, 39.2%, 1)",
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '100%': '100% 100%',
        '16': '4rem',
        
      },
      screens: {
        'max2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'maxxl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'maxlg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'maxmd': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'maxsm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
};
