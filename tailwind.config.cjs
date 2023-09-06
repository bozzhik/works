module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        grotesque: ['Sequel Sans', 'ui-sans-serif', 'system-ui', '-apple-system', 'Roboto', 'sans-serif'],
        monospaced: ['DM Mono'],
      },
      colors: {
        custom: {
          color: '#783217',
          'light-2': '#868686',
          'light-1': '#2E2E2E',
          'dark-2': '#161616',
          'dark-1': '#272727',
          background: '#111111',
        },
        gray: {
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#d1d1d1',
          400: '#b4b4b4',
          500: '#919191',
          600: '#818181',
          700: '#6a6a6a',
          800: '#5a5a5a',
          900: '#4e4e4e',
        },
      },
      borderRadius: {
        switch: '30px',
      },
    },
    screens: {
      xl: {max: '1536px'},
      lg: {max: '1280px'},
      sm: {max: '768px'},
      xs: {max: '350px'},
    },
  },
}
