import styled from 'styled-components';
import { StyledButton } from '@components/button/Button.styled';
import { theme } from '@styles/theme';
import { media } from '@utils/media';

export const StyledWekiWrap = styled.div`
  display: flex;

  ${media('tablet')`
    flex-direction: column-reverse;
  `}
`;

export const StyledWekiContent = styled.div`
  position: relative;
  margin: 0px auto 0px;
  width: 1120px; /* width: 70vw; */
  ${media('tablet')`
    width:624px;
  `}

  ${media('mobile')`
    width:335px;
  `}
`;

export const StyledWekiHeader = styled.div`
  position: relative;
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-family: ${theme.fonts['pretendard/5xl-48px-semibold']};
      font-weight: 600;
      font-size: 48px;
      color: ${theme.colors.gray[800]};
    }
  }

  ${media('tablet')``}

  ${media('mobile')`
     div {
        h2 {
          font-family: ${theme.fonts['pretendard/5xl-48px-semibold']};
          font-weight: 600;
          font-size: 32px;
          color: ${theme.colors.gray[800]};
        }
          
        ${StyledButton}{
          width:120px;
          height:43px
        }
      }
  `}
`;
