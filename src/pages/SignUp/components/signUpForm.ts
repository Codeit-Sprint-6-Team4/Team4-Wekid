import styled from 'styled-components';
import { theme } from '@styles/theme';
import { media } from '@utils/media';

export const StyledSignUpFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;
export const StyledSignUpName = styled.p`
  font-family: ${theme.fonts['pretendard/2xl-24px-semibold']};
  font-weight: 600;
  font-size: 24px;
  color: ${theme.colors.gray[800]};
  margin-bottom: 50px;
`;
export const StyledSignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 400px;
  ${media('mobile')`
  width:335px;`}
`;
export const StyledSignUpUserInfoFrame = styled.div`
  width: 100%;
  height: 388px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const StyledErrorMessage = styled.p`
  height: 14px;
  font-family: ${theme.fonts['pretendard/xs-12px-regular']};
  font-weight: 400;
  font-size: 12px;
  color: ${theme.colors.red[500]};
`;
export const StyledIsMemberFrame = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const StyledIsMember = styled.p`
  font-family: ${theme.fonts['pretendard/md-14px-regular']};
  font-weight: 400;
  font-size: 14px;
  color: ${theme.colors.gray[600]};
`;
export const StyledLinkLogin = styled.a`
  font-family: ${theme.fonts['pretendard/md-14px-regular']};
  font-weight: 400;
  font-size: 14px;
  color: ${theme.colors.main[500]};
`;
