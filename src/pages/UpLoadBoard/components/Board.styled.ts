import styled from 'styled-components';
import { theme } from '@styles/theme';

export const StyledContainer = styled.div`
  position: relative;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  max-width: 1060px;
  padding: 30px;
  margin: 23px;
`;

export const StyledTitle = styled.div`
  font: ${theme.fonts['pretendard/2xl-24px-semibold']};
  color: ${theme.colors.gray[800]};
  margin-top: 16px;
  font-size: 24px;
  margin-bottom: 24px;
`;

export const StyledCreateDate = styled.div`
  margin-bottom: 33px;
  font: ${theme.fonts['pretendard/lg-16px-regular']};
  color: ${theme.colors.gray[600]};
`;

export const StyledTitleForm = styled.div`
  border-top: 1px solid ${theme.colors.gray[100]};
  border-bottom: 1px solid ${theme.colors.gray[100]};
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 20px;
  padding: 12px 0;
`;

export const StyledTitleInput = styled.input`
  flex: 1;
  border: none;

  &::placeholder {
    font: ${theme.fonts['pretendard/xl-20px-medium']};
    color: ${theme.colors.gray[600]};
  }

  &:focus {
    outline: none;
  }
`;

export const StyledCharCount = styled.div`
  font: ${theme.fonts['pretendard/md-14px-medium']};
  color: ${theme.colors.main[600]};
`;

export const StyledCharCounter = styled.div`
  font: ${theme.fonts['pretendard/md-14px-medium']};
`;
export const StyledTextForm = styled.div`
  margin-bottom: 30px;
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  border: none;
  min-height: 480px;
  height: 100px;
  resize: none;
  line-height: 2;
  margin-top: 10px;

  &::placeholder {
    font: ${theme.fonts['pretendard/xl-20px-medium']};
    color: ${theme.colors.gray[600]};
  }
  &:focus {
    outline: none;
  }
`;

export const StyeldButtonContainer = styled.div`
  position: absolute;
  top: 46px;
  right: 30px;
`;
