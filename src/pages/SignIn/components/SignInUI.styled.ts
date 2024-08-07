import styled from 'styled-components';
import { theme } from '@styles/theme';
import { media } from '@utils/media';

export const StyledSignInWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const StyledSignInForm = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  ${media('tablet')`
  padding:20px 0;
`}
`;

export const StyledSignInTitle = styled.h1`
  font: ${theme.fonts['pretendard/2xl-24px-semibold']};
  color: ${theme.colors.gray[800]};
`;

export const StyledLinkMessageWrap = styled.div`
  padding: 20px 0;
`;

export const StyledLinkMessage = styled.a`
  font: ${theme.fonts['pretendard/md-14px-regular']};
  color: ${theme.colors.main[500]};
`;
