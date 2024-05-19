import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Don't just add customizations like in documentation, it will fully overwrite the default Tailwind setting. Instead use extend
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // the ones after cream-300 just become grayer. Make some changes eventually
        'cream': {
          100: '#fdfdfb',
          200: '#fefefb',
          300: '#fcfcf7',
          400: '#fbfbf4',
          500: '#fafaf0',
          600: '#f9f9ec',
          800: '#f9f6ec',
          900: '#f0f0d1',
        },
      },
    },

  },
  plugins: [],
};
export default config;
