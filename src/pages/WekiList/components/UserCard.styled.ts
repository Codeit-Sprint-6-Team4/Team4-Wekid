import styled from 'styled-components';
import { theme } from '@styles/theme';
import { media } from '@utils/media';

export const StyledCardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 142px;
  display: flex;
  padding: 24px 36px;
  border: 1px solid ${theme.colors.gray[0]};
  border-radius: 10px;
  color: ${theme.colors.gray[0]};
  margin-bottom: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

  ${media('tablet')`
  `}

  ${media('mobile')`
    margin-bottom: 1rem;
    height: 150px;
    padding: 21px 25px;
  `}
`;

export const StyledUserImage = styled.img`
  width: 85px;
  height: 85px;
  border-radius: 50%;
  margin-right: 32px;
  ${media('mobile')`
    width: 60px;
    height: 60px;
    margin-right: 20px;
  `}
`;

export const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  justify-content: space-between;
`;

export const StyledUserName = styled.div`
  font: ${theme.fonts['pretendard/2xl-24px-semibold']};
  color: ${theme.colors.gray[800]};
  margin-bottom: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${media('mobile')`
  font: ${theme.fonts['pretendard/xl-20px-semibold']};
    margin-bottom: 4px;
    margin-top:-6px;
  `}
`;
export const StyledUserDetailsContainer = styled.div`
  display: flex;
  gap: 2rem;
  ${media('mobile')`
    flex-direction: column;
    gap: 1.4rem;
  `}
`;

export const StyledUserDetails = styled.div`
  font: ${theme.fonts['pretendard/md-14px-regular']};
  color: ${theme.colors.gray[600]};
  flex: 0 0 auto;

  ${media('mobile')`
     font: ${theme.fonts['pretendard/xs-12px-regular']};
  `}
`;

export const StyledUserLinkWrapper = styled.div`
  margin-left: auto;
  margin-top: auto;
  overflow: hidden;
  & div {
    ${media('mobile')`
    max-width: fit-content;
  `}
  }

  ${media('mobile')`
  margin-left: 0;
  `}
`;
