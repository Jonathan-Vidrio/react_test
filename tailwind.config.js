/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1F1F1F',
        'secondary': '#2A2A2A',
        'tertiary': '#4F4F4F',
        'quaternary': '#E2E2E2',
        'quinary': '#F2F2F2',
        'success': '#2f7c24',
        'danger': '#dc3545',
        'warning': '#ffc107',
        'info': '#17a2b8',
        'light': '#f8f9fa',
        'dark': '#343a40',
      },
    },
  },
  plugins: [],
}