import styled from 'styled-components';
import FavoriteIcon from '@assets/icons/icon-heart.svg';
import { theme } from '@styles/theme';

export const PostContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);
  padding: 4rem 3rem;
  gap: 3.8rem;
`;

export const PostInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

export const PostTitle = styled.h1`
  font: ${theme.fonts['pretendard/3xl-32px-semibold']};
`;

export const PostActions = styled.div`
  display: flex;
  gap: 1.4rem;
`;

export const PostMeta = styled.div`
  display: flex;
  justify-content: space-between;
  font: ${theme.fonts['pretendard/md-14px-regular']};
  align-items: center;
`;

export const AuthorInfo = styled.div`
  display: flex;
  gap: 1rem;
  color: ${theme.colors.gray[600]};
`;

export const AuthorName = styled.p``;
export const PostDate = styled.p``;

export const LikeButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  font: ${theme.fonts['pretendard/md-14px-regular']};
  color: ${theme.colors.gray[600]};
`;

export const LikeButton = styled.button`
  background-image: url(${FavoriteIcon});
  background-repeat: no-repeat;
  background-position: center;
  width: 1.4em;
  height: 1.4em;
  position: relative;
  background-size: contain;
`;

export const PostBody = styled.div``;

export const BackToListWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
