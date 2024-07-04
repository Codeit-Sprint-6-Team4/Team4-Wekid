import styled from 'styled-components';
import DeleteIcon from '@assets/icons/icon-delete.svg';
import EditIcon from '@assets/icons/icon-edit.svg';
import FavoriteIconFilled from '@assets/icons/icon-heart-fill.svg';
import FavoriteIcon from '@assets/icons/icon-heart.svg';
import { theme } from '@styles/theme';
import { media } from '@utils/media';

export const PostContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);
  padding: 4rem 3rem;
  gap: 3.8rem;
  ${media('tablet')`
    gap: 3rem;
  `}
  ${media('mobile')`
    padding: 2rem;
     gap: 1.5rem;
  `}
`;

export const PostInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  ${media('mobile')`
    gap: 1.4rem;
  `}
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

export const PostTitle = styled.h1`
  font: ${theme.fonts['pretendard/3xl-32px-semibold']};
  ${media('mobile')`
    font: ${theme.fonts['pretendard/2xl-24px-semibold']};
  `}
`;

export const PostActions = styled.div`
  display: flex;
  gap: 1.4rem;
  ${media('tablet')`
    gap: 0.8rem;
    button {
      width: 2.2rem;
      height: 2.2rem;
      background-size: cover;
      background-color: transparent;
      &.edit {
        background-image: url(${EditIcon});
      }
      &.delete {
        background-image: url(${DeleteIcon});
      }
      span {
        display: none;
      }
    }
  `}
`;

export const PostMeta = styled.div`
  display: flex;
  justify-content: space-between;
  font: ${theme.fonts['pretendard/md-14px-regular']};
  align-items: center;
  ${media('tablet')`
    padding-bottom: 1rem;
    border-bottom: 1px solid ${theme.colors.gray[100]};
  `}
  ${media('mobile')`
    font: ${theme.fonts['pretendard/xs-12px-regular']};
  `}
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
  ${media('mobile')`
    font: ${theme.fonts['pretendard/xs-12px-regular']};
  `}
`;

export const LikeButton = styled.button<{ $isLiked: boolean }>`
  background-image: url(${(props) => props.$isLiked ? FavoriteIconFilled : FavoriteIcon});
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
