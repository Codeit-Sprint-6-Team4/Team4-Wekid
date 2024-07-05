import styled from 'styled-components';
import { StyledButton } from '@components/button/Button.styled';
import { StyledUserLinkWrapper } from '@pages/WekiList/components/UserCard.styled';
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

export const StyledMyWikiUserLinkWrapper = styled(StyledUserLinkWrapper)`
  position: initial;
`;

export const StyledNoContentWrapper = styled.div`
  width: 859px;
  height: 192px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: ${theme.colors.gray[50]};
  p {
    width: 169px;
    height: 52px;
    text-align: center;
    font-family: ${theme.fonts['pretendard/lg-16px-regular']};
    font-weight: 400;
    font-size: 16px;
    color: ${theme.colors.gray[600]};
  }
  a {
    width: 89px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: ${theme.colors.main[500]};
    color: #ffffffff;
    font-family: ${theme.fonts['pretendard/lg-14px-semibold']};
    font-size: 14px;
  }
`;
