module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './renderer/pages/**/*.{js,ts,jsx,tsx}',
    './renderer/components/**/*.{js,ts,jsx,tsx}',
    './renderer/data/**/*.{js,ts,jsx,tsx}',
    './renderer/lib/**/*.{js,ts,jsx,tsx}',
    './renderer/utils/**/*.{js,ts,jsx,tsx}',
    './renderer/layout/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      dark: '#1e1e1e',
      dark2: '#282828',
      darkhalf: '#2e2e2e',
      darktext: '#7f7f7f',
      light: '#fafafa',
      accent: '#45a972',
      accentdark: '#57d48f',
      accenthover: '#3a8d5f',
    },
    extend: {},
  },
  plugins: [],
};
