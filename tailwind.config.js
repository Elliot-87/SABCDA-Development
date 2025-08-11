// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'sidebar-bg': '#181818',
        'sidebar-border': '#252525',
      },
      keyframes: {
        'tooltip-fade': {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        }
      },
      animation: {
        'tooltip-fade': 'tooltip-fade 0.2s ease-out',
      }
    }
  }
}