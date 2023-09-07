const { nextui } = require('@nextui-org/react');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '780px',
      lg: '1024px',
      xl: '1280px',
    },
    opacity: {
      '0': '0',
      '20': '0.2',
      '40': '0.4',
      '60': '0.6',
      '80': '0.8',
      '100': '1',
    },
    fontFamily: {
      sans: [
        'Roboto',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'PingFang',
        '"Noto Sans"',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ],
    },
    extend: {
      colors: {
        //fix颜色通常用于主题改变时颜色也不会发生改变，如底部信息栏的文字以及背景色
        fixwhite: '#fafafa',
        fixblue: '#291F64',
      },
      spacing: {
        4.5: '18px',
        5.5: '22px',
        6.5: '26px',
        7.5: '30px',
        8.5: '34px',
        9.5: '38px',
        10.5: '42px',
        11.5: '46px',
        12.5: '50px',
        13: '52px',
        13.5: '54px',
        14.5: '58px',
        15: '60px',
        15.5: '62px',
        17: '68px',
        18: '72px',
        19: '76px',
        21: '84px',
        22: '88px',
        23: '92px',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        //日间配色
        light: {
          layout: {},
          colors: {
            text: '#0C0725',
            background: '#FDFDFD',
            primary: '#291F64',
            secondary: '#F3F2F6',
            accent: '#7C0000',
          },
        },
        //夜间配色
        dark: {
          layout: {},
          colors: {
            text: '#fafafa',
            background: '#050505',
            primary: '#291F64',
            secondary: '#1e1a29',
            accent: '#ff6666',
          },
        },
      },
    }),
  ],
};
