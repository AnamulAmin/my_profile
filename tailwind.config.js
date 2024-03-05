/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "lightGreen": "#FFD369",
        "dark":{
          200: "#131314",
          300: "#101010",
        } 
      },
      keyframes: {
        rubber: {
          '0%': { transform: 'translateX(-50%) scaleX(0)' },
          '40%': { transform: 'translateX(-50%) scaleX(1)' },
          '70%': { transform: 'translateX(-50%) scaleX(0.5)' },
          '100%': { transform: 'translateX(-50%) scaleX(1)' },
        },
        right_bounce: {
          '0%, 100%': { transform: 'translateX(-25%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateX(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
        },
        left_bounce: {
          '0%, 100%': { transform: 'translateX(25%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateX(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
        },
      },
      animation: {
        rubber: 'rubber 1s ease-in-out',
        right_bounce: 'right_bounce 1s infinite',
        left_bounce: 'left_bounce 1s infinite',
      }
    },
  },
  plugins: [require("daisyui")],
}
