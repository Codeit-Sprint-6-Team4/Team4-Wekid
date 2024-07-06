import styled from 'styled-components';
import { theme } from '@styles/theme';
import { media } from '@utils/media';

export const StyledMarkUpWrap = styled.div`

  ${media('desktop')`
    margin-top: 10px;
    // min-height: 704px;
  `}

  ${media('mobile')`
    // min-height: 472px;
  `}
`;

export const StyledMarkUpHeader = styled.div`
  display: none;
  padding: 20px;

  ${media('desktop')`
    width: 100%;
    height: 60px;
    border-radius: 10px;
    background-color: ${theme.colors.gray[50]};
    display: flex;
    justify-content: space-between;
    align-items: center;

  h2 {
    font-family: ${theme.fonts['pretendard/xl-20px-semibold']};
    font-weight: 600;
    font-size: 20px;
    color: ${theme.colors.gray[800]};
  }

  div {
    display: flex;
    gap: 10px;
    width: 140px;
    height: 40px;
  }
`}
`;
