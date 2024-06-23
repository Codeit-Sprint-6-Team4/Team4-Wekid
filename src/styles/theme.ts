import 'styled-components';
import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      gray: {
        0: string;
        50: string;
        100: string;
        300: string;
        600: string;
        800: string;
        900: string;
      };
      green: {
        100: string;
        200: string;
        300: string;
      };
      main: {
        50: string;
        500: string;
        600: string;
      };
      red: {
        50: string;
        500: string;
      };
      purple: {
        100: string;
      };
      yellow: {
        100: string;
      };
    };
    fonts: {
      '48px-600': string;

      '40px-700': string;

      '32px-700': string;
      '32px-600': string;

      '24px-700': string;
      '24px-600': string;
      '24px-500': string;
      '24px-400': string;

      '20px-700': string;
      '20px-600': string;
      '20px-500': string;
      '20px-400': string;

      '18px-700': string;
      '18px-600': string;
      '18px-500': string;
      '18px-400': string;

      '16px-700': string;
      '16px-600': string;
      '16px-500': string;
      '16px-400': string;

      '14px-700': string;
      '14px-600': string;
      '14px-500': string;
      '14px-400': string;

      '13px-600': string;
      '13px-500': string;

      '12px-600': string;
      '12px-500': string;
      '12px-400': string;
    };
  }
}

export const theme: DefaultTheme = {
  colors: {
    gray: {
      0: '#FFFFFF',
      50: '#F7F7FA',
      100: '#E4E5F0',
      300: '#C6CADA',
      600: '#8F95B2',
      800: '#474D66',
      900: '#38415B',
    },
    green: {
      100: '#EEF9F6',
      200: '#4CBFA4',
      300: '#32A68A',
    },
    main: {
      50: '#EEF9F6',
      500: '#4CBFA4',
      600: '#32A68A',
    },
    red: {
      50: '#FBEDED',
      500: '#D14343',
    },
    purple: {
      100: '#8E66FF',
    },
    yellow: {
      100: '#FDD181',
    },
  },
  fonts: {
    '48px-600': 'normal normal 600 48px/46px Pretendard',

    '40px-700': 'normal normal 700 40px/42px Pretendard',

    '32px-700': 'normal normal 700 32px/46px Pretendard',
    '32px-600': 'normal normal 600 32px/42px Pretendard',

    '24px-700': 'normal normal 700 24px/32px Pretendard',
    '24px-600': 'normal normal 600 24px/32px Pretendard',
    '24px-500': 'normal normal 500 24px/32px Pretendard',
    '24px-400': 'normal normal 400 24px/32px Pretendard',

    '20px-700': 'normal normal 700 20px/32px Pretendard',
    '20px-600': 'normal normal 600 20px/32px Pretendard',
    '20px-500': 'normal normal 500 20px/32px Pretendard',
    '20px-400': 'normal normal 400 20px/32px Pretendard',

    '18px-700': 'normal normal 700 18px/26px Pretendard',
    '18px-600': 'normal normal 600 18px/26px Pretendard',
    '18px-500': 'normal normal 500 18px/26px Pretendard',
    '18px-400': 'normal normal 400 18px/26px Pretendard',

    '16px-700': 'normal normal 700 16px/26px Pretendard',
    '16px-600': 'normal normal 600 16px/26px Pretendard',
    '16px-500': 'normal normal 500 16px/26px Pretendard',
    '16px-400': 'normal normal 400 16px/26px Pretendard',

    '14px-700': 'normal normal 700 14px/24px Pretendard',
    '14px-600': 'normal normal 600 14px/24px Pretendard',
    '14px-500': 'normal normal 500 14px/24px Pretendard',
    '14px-400': 'normal normal 400 14px/24px Pretendard',

    '13px-600': 'normal normal 600 13px/22px Pretendard',
    '13px-500': 'normal normal 500 13px/22px Pretendard',

    '12px-600': 'normal normal 600 12px/20px Pretendard',
    '12px-500': 'normal normal 500 12px/20px Pretendard',
    '12px-400': 'normal normal 400 12px/20px Pretendard',
  },
};
