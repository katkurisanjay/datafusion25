/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Data Science / Tech Event Color Palette
        'primary': '#00D9FF',        // Electric blue - primary actions, highlights
        'secondary': '#8B5CF6',      // Purple - secondary accents, innovation
        'accent': '#00F5FF',         // Bright cyan - tech elements
        'accent-purple': '#B026FF',  // Magenta purple - special highlights
        'success': '#10B981',        // Green - success states
        'warning': '#F59E0B',        // Amber - warnings, highlights
        'text-primary': '#FFFFFF',   // White - primary text
        'text-secondary': '#E5E7EB', // Light gray - secondary text
        'text-muted': '#9CA3AF',     // Gray - muted text
        
        // Dark theme colors
        'dark-bg': '#0A0F1E',        // Deep navy black
        'dark-card': '#111827',      // Dark gray card background
        'dark-border': '#1F2937',    // Border color
        'dark-hover': '#1E293B',     // Hover states
      },

      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif'
        ],
      },

      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',

        // ⭐ Continuous marquee animation (added)
        'marquee': 'marqueeScroll 20s linear infinite',
        'marquee-slow': 'marqueeScroll 60s linear infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },

        // ⭐ Continuous marquee keyframes (added)
        marqueeScroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
