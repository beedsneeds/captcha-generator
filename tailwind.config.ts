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
          300: '#FAFAF0',
          400: '#f7f7ed',
          600: '#F0F0E6',
          700: '#E8E8DF',
        },
      },
    },

  },
  plugins: [],
};
export default config;
