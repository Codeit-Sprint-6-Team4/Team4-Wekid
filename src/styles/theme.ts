import 'styled-components';
import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      grayscale: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
      };
      primaryGreen: {
        100: string;
        200: string;
        300: string;
      };
      secondaryRed: {
        100: string;
        200: string;
      };
      secondaryPurple: {
        100: string;
      };
      secondaryYellow: {
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
    }
  }
}

export const theme: DefaultTheme = {
  colors: {
    grayscale: {
      100: '#F7F7FA',
      200: '#E4E5F0',
      300: '#C6CADA',
      400: '#8F95B2',
      500: '#474D66',
      600: '#38415B',
    },
    primaryGreen: {
      100: '#EEF9F6',
      200: '#4CBFA4',
      300: '#1B92FF',
    },
    secondaryRed: {
      100: '#FBEDED',
      200: '#D14343',
    },
    secondaryPurple: {
      100: '#8E66FF',
    },
    secondaryYellow: {
      100: '#FDD181',
    },
  },
  fonts: {
    'pretendard/5xl-48px-semibold': 'semibold 48px/46px Pretendard',

    'pretendard/4xl-40px-bold': 'bold 40px/42px Pretendard',

    'pretendard/3xl-32px-bold': 'bold 32px/46px Pretendard',
    'pretendard/3xl-32px-semibold': 'semibold 32px/42px Pretendard',

    'pretendard/2xl-24px-bold': 'bold 24px/32px Pretendard',
    'pretendard/2xl-24px-semibold': 'semibold 24px/32px Pretendard',
    'pretendard/2xl-24px-medium': 'medium 24px/32px Pretendard',
    'pretendard/2xl-24px-regular': 'regular 24px/32px Pretendard',

    'pretendard/xl-20px-bold': 'bold 20px/32px Pretendard',
    'pretendard/xl-20px-semibold': 'semibold 20px/32px Pretendard',
    'pretendard/xl-20px-medium': 'medium 20px/32px Pretendard',
    'pretendard/xl-20px-regular': 'regular 20px/32px Pretendard',

    'pretendard/2lg-18px-bold': 'bold 18px/26px Pretendard',
    'pretendard/2lg-18px-semibold': 'semibold 18px/26px Pretendard',
    'pretendard/2lg-18px-medium': 'medium 18px/26px Pretendard',
    'pretendard/2lg-18px-regular': 'regular 18px/26px Pretendard',
    
    'pretendard/lg-16px-bold': 'bold 16px/26px Pretendard',
    'pretendard/lg-16px-semibold': 'semibold 16px/26px Pretendard',
    'pretendard/lg-16px-medium': 'medium 16px/26px Pretendard',
    'pretendard/lg-16px-regular': 'regular 16px/26px Pretendard',
    
    'pretendard/md-14px-bold': 'bold 14px/24px Pretendard',
    'pretendard/md-14px-semibold': 'semibold 14px/24px Pretendard',
    'pretendard/md-14px-medium': 'medium 14px/24px Pretendard',
    'pretendard/md-14px-regular': 'regular 14px/24px Pretendard',

    'pretendard/sm-13px-semibold': 'semibold 13px/22px Pretendard',
    'pretendard/sm-13px-medium': 'medium 13px/22px Pretendard',

    'pretendard/xs-12px-semibold': 'semibold 12px/20px Pretendard',
    'pretendard/xs-12px-medium': 'medium 12px/20px Pretendard',
    'pretendard/xs-12px-regular': 'regular 12px/20px Pretendard'
  }
};