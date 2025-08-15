/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter','ui-sans-serif','system-ui','-apple-system','Segoe UI','Roboto','Helvetica Neue','Arial','Noto Sans','sans-serif'],
      },
      colors: {
        brand: {
          500: '#38bdf8',
          600: '#0ea5e9',
          700: '#0284c7'
        }
      },
      boxShadow: {
        glow: "0 0 0 2px rgba(56,189,248,0.12), 0 0 50px rgba(56,189,248,0.15)",
      },
      backgroundImage: {
        'grid': 'linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)',
        'hero': 'radial-gradient(600px circle at 20% 10%, rgba(56,189,248,0.15), transparent 40%), radial-gradient(800px circle at 80% 0%, rgba(99,102,241,0.12), transparent 50%)',
      },
      backgroundSize: {
        'grid': '24px 24px',
      }
    },
  },
  plugins: [],
}
