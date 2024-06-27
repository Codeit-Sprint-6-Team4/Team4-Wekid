import styled from 'styled-components';
import { StyledInput } from '@components/input/input';
import { theme } from '@styles/theme';
import { media } from '@utils/media';

export const StyledAccountSettingWrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  ${media('mobile')`
    width: 90%;
  `}
`;

export const StyledAccountSettingForm = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-bottom: 32px;
  border-bottom: 1px solid ${theme.colors.gray[300]};
`;

export const StyledAccountSettingTitle = styled.h1`
  font: ${theme.fonts['pretendard/2xl-24px-semibold']};
  color: ${theme.colors.gray[800]};
  text-align: center;
  margin-bottom: 64px;
`;

export const StyledInputSubtitle = styled.label`
  font-style: ${theme.fonts['pretendard/md-14px-regular']};
  color: ${theme.colors.gray[800]};
  text-align: left;
  width: 100%;
  margin-bottom: 8px;
`;

export const StyledPasswordInput = styled(StyledInput)`
  width: 100%;
  height: 49px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledQuestionForm = styled.form`
  margin-top: 32px;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-bottom: 32px;
  position: relative;
`;

export const StyledQuestionInput = styled(StyledInput)`
  width: 100%;
  height: 49px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
