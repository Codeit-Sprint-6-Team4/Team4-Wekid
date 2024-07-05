import styled from 'styled-components';
import { theme } from '@styles/theme';
import { media } from '@utils/media';
export const CommentsWrapper = styled.div``;

export const CommentsCount = styled.div`
  margin-bottom: 1.4rem;
  font: ${theme.fonts['pretendard/2lg-18px-semibold']};
  color: ${theme.colors.gray[800]};
  & span {
    color: ${theme.colors.main[500]};
  }
  ${media('mobile')`
      font: ${theme.fonts['pretendard/lg-16px-semibold']};
  `}
`;

export const CommentsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  ${media('tablet')`
    gap: 1.6rem;
  `}
  ${media('mobile')`
    gap: 1.4rem;
  `}
`;

export const LoadMoreButton = styled.div`
  display: block;
  margin: 0 auto;
  margin-top: 2rem;
`;
