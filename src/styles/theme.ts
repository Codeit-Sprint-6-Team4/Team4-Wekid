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
      'pretendard/5xl-48px-semibold': string;

      'pretendard/4xl-40px-bold': string;

      'pretendard/3xl-32px-bold': string;
      'pretendard/3xl-32px-semibold': string;

      'pretendard/2xl-24px-bold': string;
      'pretendard/2xl-24px-semibold': string;
      'pretendard/2xl-24px-medium': string;
      'pretendard/2xl-24px-regular': string;

      'pretendard/xl-20px-bold': string;
      'pretendard/xl-20px-semibold': string;
      'pretendard/xl-20px-medium': string;
      'pretendard/xl-20px-regular': string;

      'pretendard/2lg-18px-bold': string;
      'pretendard/2lg-18px-semibold': string;
      'pretendard/2lg-18px-medium': string;
      'pretendard/2lg-18px-regular': string;

      'pretendard/lg-16px-bold': string;
      'pretendard/lg-16px-semibold': string;
      'pretendard/lg-16px-medium': string;
      'pretendard/lg-16px-regular': string;

      'pretendard/md-14px-bold': string;
      'pretendard/md-14px-semibold': string;
      'pretendard/md-14px-medium': string;
      'pretendard/md-14px-regular': string;

      'pretendard/sm-13px-semibold': string;
      'pretendard/sm-13px-medium': string;

      'pretendard/xs-12px-semibold': string;
      'pretendard/xs-12px-medium': string;
      'pretendard/xs-12px-regular': string;
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
    'pretendard/5xl-48px-semibold': 'normal normal 600 48px/46px Pretendard',

    'pretendard/4xl-40px-bold': 'normal normal 700 40px/42px Pretendard',

    'pretendard/3xl-32px-bold': 'normal normal 700 32px/46px Pretendard',
    'pretendard/3xl-32px-semibold': 'normal normal 600 32px/42px Pretendard',

    'pretendard/2xl-24px-bold': 'normal normal 700 24px/32px Pretendard',
    'pretendard/2xl-24px-semibold': 'normal normal 600 24px/32px Pretendard',
    'pretendard/2xl-24px-medium': 'normal normal 500 24px/32px Pretendard',
    'pretendard/2xl-24px-regular': 'normal normal 400 24px/32px Pretendard',

    'pretendard/xl-20px-bold': 'normal normal 700 20px/32px Pretendard',
    'pretendard/xl-20px-semibold': 'normal normal 600 20px/32px Pretendard',
    'pretendard/xl-20px-medium': 'normal normal 500 20px/32px Pretendard',
    'pretendard/xl-20px-regular': 'normal normal 400 20px/32px Pretendard',

    'pretendard/2lg-18px-bold': 'normal normal 700 18px/26px Pretendard',
    'pretendard/2lg-18px-semibold': 'normal normal 600 18px/26px Pretendard',
    'pretendard/2lg-18px-medium': 'normal normal 500 18px/26px Pretendard',
    'pretendard/2lg-18px-regular': 'normal normal 400 18px/26px Pretendard',

    'pretendard/lg-16px-bold': 'normal normal 700 16px/26px Pretendard',
    'pretendard/lg-16px-semibold': 'normal normal 600 16px/26px Pretendard',
    'pretendard/lg-16px-medium': 'normal normal 500 16px/26px Pretendard',
    'pretendard/lg-16px-regular': 'normal normal 400 16px/26px Pretendard',

    'pretendard/md-14px-bold': 'normal normal 700 14px/24px Pretendard',
    'pretendard/md-14px-semibold': 'normal normal 600 14px/24px Pretendard',
    'pretendard/md-14px-medium': 'normal normal 500 14px/24px Pretendard',
    'pretendard/md-14px-regular': 'normal normal 400 14px/24px Pretendard',

    'pretendard/sm-13px-semibold': 'normal normal 600 13px/22px Pretendard',
    'pretendard/sm-13px-medium': 'normal normal 500 13px/22px Pretendard',

    'pretendard/xs-12px-semibold': 'normal normal 600 12px/20px Pretendard',
    'pretendard/xs-12px-medium': 'normal normal 500 12px/20px Pretendard',
    'pretendard/xs-12px-regular': 'normal normal 400 12px/20px Pretendard',
  },
};
