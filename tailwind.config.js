module.exports = {
  important: true,
  purge: [
    // Use *.tsx if using TypeScript
    './pages/**/*.tsx',
    './components/**/*.tsx',
  ],
  theme: {
    screens: {
      // These values are copied directly from the Tailwind's default
      // sizes, but they help standardize the sizing in JavaScript
      // hooks.
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      title: ['Circular Std Black', 'sans-serif'],
      body: ['Circular Std Book', 'sans-serif'],
      highlighted: ['Circular Std Medium', 'sans-serif'],
    },
    extend: {
      spacing: {
        '7': '1.75rem',
        '80': '20rem',
        hairline: '1px',
        'hairline-2': '2px',
      },
      backgroundColor: {
        extend: {
          primary: '#08085a',
          secondary: '#27e8fb',
        },
      },
      colors: {
        primary: '#08085a',
        secondary: '#27e8fb',
        tertiary: '#956fff',
        border: 'rgba(8, 8, 90, 0.15)',
        body: {
          default: 'rgba(8, 8, 90, 0.5)',
          inverted: '#ffffff',
        },
        title: {
          default: '#08085a',
          inverted: '#ffffff',
        },
      },
      lineHeight: {
        'extra-tight': 1.125,
      },
    },
  },
}
