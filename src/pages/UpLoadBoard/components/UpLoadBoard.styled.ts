import styled from 'styled-components';
import { StyledButton } from '@components/button/Button.styled';
import { theme } from '@styles/theme';
import { media } from '@utils/media';

export const StyledContainerWapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px;
  ${media('mobile')`
    margin: 10px;
  `}
`;

export const StyledContainer = styled.div`
  position: relative;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 1060px;
  min-width: 400px;
  padding: 30px;
  margin-bottom: 32px;
  ${media('mobile')`
    width: 100%;
    margin-bottom: 32px;
  `}
`;

export const StyledTitle = styled.div`
  font: ${theme.fonts['pretendard/2xl-24px-semibold']};
  color: ${theme.colors.gray[800]};
  margin-top: 16px;
  font-size: 24px;
  margin-bottom: 24px;
  ${media('mobile')`
    font: ${theme.fonts['pretendard/lg-16px-semibold']};
  `}
`;

export const StyledCreateDate = styled.div`
  margin-bottom: 25px;
  font: ${theme.fonts['pretendard/lg-16px-regular']};
  color: ${theme.colors.gray[600]};
  ${media('mobile')`
    font: ${theme.fonts['pretendard/xs-12px-regular']};
  `}
`;

export const StyledTitleForm = styled.div`
  border-top: 1px solid ${theme.colors.gray[100]};
  border-bottom: 1px solid ${theme.colors.gray[100]};
  display: flex;
  align-items: center;
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
  ${media('mobile')`
    font: ${theme.fonts['pretendard/lg-16px-medium']};
  `}
`;

export const StyledCharCount = styled.div`
  font: ${theme.fonts['pretendard/md-14px-medium']};
  color: ${theme.colors.main[600]};
  ${media('mobile')`
    font: ${theme.fonts['pretendard/sm-13px-medium']};
  `}
`;

export const StyledCharCounter = styled.div`
  font: ${theme.fonts['pretendard/md-14px-medium']};
  ${media('mobile')`
    font: ${theme.fonts['pretendard/sm-13px-medium']};
  `}
`;

export const StyledTextCharCounter = styled.div`
  font: ${theme.fonts['pretendard/lg-16px-medium']};
  ${media('mobile')`
    font: ${theme.fonts['pretendard/md-14px-medium']};
  `}
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
    color: ${theme.colors.gray[300]};
  }
  &:focus {
    outline: none;
  }
  ${media('mobile')`
    font: ${theme.fonts['pretendard/lg-16px-medium']};
    
    &::placeholder {
    font: ${theme.fonts['pretendard/lg-16px-medium']};
  }
  `}
`;

export const StyledButtonContainer = styled.div`
  position: absolute;
  top: 46px;
  right: 30px;
`;
export const StyledUploadButton = styled(StyledButton)`
  ${media('mobile')`
    width: 72px; 
  `}
`;
