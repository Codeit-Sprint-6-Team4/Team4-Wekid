import { css, Interpolation } from 'styled-components';

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1200px',
};

type Breakpoints = keyof typeof breakpoints;

export const media = (breakpoint: Breakpoints) => {
  return (style: TemplateStringsArray, ...args: Interpolation<any>[]) => css`
    @media (max-width: ${breakpoints[breakpoint]}) {
      ${css(style, ...args)}
    }
  `;
};
