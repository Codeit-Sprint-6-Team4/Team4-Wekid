import styled from 'styled-components';
import { StyledButton } from '@components/button/Button.styled';
import { StyledUserLinkWrapper } from '@pages/WekiList/components/UserCard.styled';
import { theme } from '@styles/theme';
import { media } from '@utils/media';

export const StyledWekiWrap = styled.div`
  display: flex;
  gap: 1rem 6rem;
  align-items: flex-start;
  width: 100%;

  ${media('desktop')`
    flex-direction: column-reverse;
  `}
`;

export const StyledWekiContent = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledWekiHeader = styled.div`
  position: relative;
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 4rem;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    h2 {
      font-family: ${theme.fonts['pretendard/5xl-48px-semibold']};
      font-weight: 600;
      font-size: 48px;
      color: ${theme.colors.gray[800]};
    }
  }

  ${media('desktop')``}

  ${media('mobile')`
    margin-top: 40px;
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
  width: 100%;
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
  button {
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
