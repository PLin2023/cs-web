import type { Config } from 'tailwindcss';

import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'custom': '884px',
      },
      colors: {
        customBorder: '#291F64',
        grayBorder: '#F1F5F9',
        listGrayBorder: 'rgba(166, 166, 166, 1)',
        activeText: '#291F64',
        grayText: 'rgba(12, 7, 37, 0.20)',
        briefText: 'rgba(12, 7, 37, 0.80)',
        timeText: '#CBD5E1',
        rcpyTimeText: 'rgba(12, 7, 37, 0.50)',
        background: '#fdfdfd',
        grayBackground: '#F3F2F6',
        redLine: 'rgba(124, 0, 0, 1)',
        redCircle: '#7c0000',
        grayListTime: 'rgba(166, 166, 166, 1)',
        paginationColor: 'rgba(41, 32, 97, 1)',
        verticalNavSelect: 'rgba(41, 32, 97, 0.5)',
        verticalNavDeSelect: '#efefef',
        breadcrumbsBg:'rgba(220, 238, 245, 1)',
        breadcrumbsText:'rgba(42, 130, 228, 1)',
        breadcrumbsText2:'rgba(135, 149, 156, 1)'
      },
    }
  },
  darkMode: 'class',
  plugins: [nextui()],
};
export default config;
