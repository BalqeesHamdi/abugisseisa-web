/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './common/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-slide': 'fadeInSlide 0.5s ease-out',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-dark":"#8b6329",
        "primary-light":"#A98551",
        "primary-dark-50":"rgba(139, 99, 41, 0.6)",
        "primary-light-50":"rgba(169, 133, 81, 0.6)",
        'black-50': 'rgba(0, 0, 0, 0.5)', 
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },  fadeInSlide: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
  
    },
  },
  plugins: [],
};
