import styled from 'styled-components';
import { theme } from '@styles/theme';
import { media } from '@utils/media';

export const StyledCardContainer = styled.div`
  position: relative;
  width: 859px;
  height: 142px;
  display: flex;
  padding: 24px 36px;
  border: 1px solid ${theme.colors.gray[0]};
  border-radius: 10px;
  color: ${theme.colors.gray[0]};
  margin-bottom: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

  ${media('tablet')`
    width: 696px;
  `}

  ${media('mobile')`
    width: 334px;
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
`;

export const StyledUserName = styled.div`
  font: ${theme.fonts['pretendard/2xl-24px-semibold']};
  color: ${theme.colors.gray[800]};
  margin-bottom: 14px;

  ${media('mobile')`
  font: ${theme.fonts['pretendard/xl-20px-semibold']};
    margin-bottom: 4px;
    margin-top:-6px;
  `}
`;

export const StyledUserDetails = styled.div`
  font: ${theme.fonts['pretendard/md-14px-regular']};
  color: ${theme.colors.gray[600]};

  ${media('mobile')`
     font: ${theme.fonts['pretendard/xs-12px-regular']};
  `}
`;

export const StyledUserLinkWrapper = styled.div`
  position: absolute;
  right: 36px;
  bottom: 24px;

  ${media('mobile')`
    right: 25px;
    bottom: 21px;
  `}
`;
