import 'styled-components';
import { DefaultTheme } from 'styled-components/dist/types';

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
      100: '#FFC1C9',
      200: '#FF4149',
    },
    secondaryPurple: {
      100: '#FEEFF0',
    },
    secondaryYellow: {
      100: '#FFEEF0',
    },
  },
};
