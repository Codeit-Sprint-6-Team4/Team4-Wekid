import styled from 'styled-components';
import { theme } from '@styles/theme';

export const CommentsWrapper = styled.div``;

export const CommentsCount = styled.div`
  margin-bottom: 1.4rem;
  font: ${theme.fonts['pretendard/2lg-18px-semibold']};
  color: ${theme.colors.gray[800]};
  & span {
    color: ${theme.colors.main[500]};
  }
`;

export const CommentsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const LoadMoreButton = styled.button`
  display: block;
  margin: 0 auto;
  margin-top: 2rem;
`;
