import styled from 'styled-components';
import { theme } from '@styles/theme';

export const CommentInputWrapper = styled.div`
  position: relative;
  background: ${theme.colors.gray[50]};
  border-radius: 1rem;
  margin-bottom: 4.2rem;
  padding: 1.3rem 1.5rem;
`;

export const StyledCommentInput = styled.textarea`
  font: ${theme.fonts['pretendard/md-14px-regular']};
  background: transparent;
  width: 100%;
  border: none;
  resize: none;
  color: ${theme.colors.gray[800]};
  overflow: hidden;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${theme.colors.gray[600]};
  }
`;

export const CharacterCount = styled.p`
  font: ${theme.fonts['pretendard/md-14px-regular']};
  color: ${theme.colors.gray[300]};
`;

export const CommentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10rem;
  align-items: flex-end;
`;
