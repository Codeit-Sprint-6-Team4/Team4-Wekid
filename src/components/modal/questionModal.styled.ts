import styled from 'styled-components';
import lockIcon from '@assets/icons/icon-lock.svg';
import { StyledInput } from '@components/input/input';
import { theme } from '@styles/theme';

export const StyledQuestionContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLockIconContainer = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${theme.colors.gray[50]};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledLockIcon = styled.div`
  width: 30px;
  height: 30px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${lockIcon});
`;

export const StyledLockText = styled.div`
  font: ${theme.fonts['pretendard/md-14px-regular']};
  color: ${theme.colors.gray[600]};
  margin-bottom: 36px;
  text-align: center;
`;

export const StyledQeustionTitle = styled.div`
  font: ${theme.fonts['pretendard/2lg-18px-semibold']};
  color: ${theme.colors.gray[800]};
  margin-bottom: 10px;
  align-self: start;
`;

export const StyledAnswerInput = styled(StyledInput)`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const StyledErrorMessage = styled.div`
  font: ${theme.fonts['pretendard/xs-12px-regular']};
  color: ${theme.colors.red[500]};
  align-self: start;
`;

export const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: ${theme.fonts['pretendard/xs-12px-regular']};
  color: ${theme.colors.gray[600]};
  margin-top: 20px;
  text-align: center;
`;
