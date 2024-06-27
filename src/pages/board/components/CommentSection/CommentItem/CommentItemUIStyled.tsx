import styled from 'styled-components';
import DeleteIcon from '@assets/icons/icon-delete.svg';
import EditIcon from '@assets/icons/icon-edit.svg';
import { theme } from '@styles/theme';

export const CommentItemWrapper = styled.li`
  display: flex;
  gap: 2rem;
  border-radius: 1rem;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);
  padding: 2.2rem 3rem;
`;

export const CommentAuthorProfileWrapper = styled.div``;

export const CommentAuthorProfile = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CommentContentWrapper = styled.div`
  flex: 1;
`;

export const CommentAuthorInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.6rem;
`;

export const CommentAuthorName = styled.div`
  font: ${theme.fonts['pretendard/2lg-18px-semibold']};
  color: ${theme.colors.gray[800]};
`;

export const CommentActions = styled.div`
  display: flex;
  gap: 2rem;
`;

export const EditCommentButton = styled.button`
  background-image: url(${EditIcon});
  background-repeat: no-repeat;
  background-position: center;
  width: 2.4rem;
  height: 2.4rem;
  position: relative;
`;

export const DeleteCommentButton = styled.button`
  background-image: url(${DeleteIcon});
  background-repeat: no-repeat;
  background-position: center;
  width: 2.4rem;
  height: 2.4rem;
  position: relative;
`;

export const CommentText = styled.div`
  font: ${theme.fonts['pretendard/lg-16px-regular']};
  color: ${theme.colors.gray[800]};
  margin-bottom: 1rem;
`;

export const CommentDate = styled.div`
  font: ${theme.fonts['pretendard/md-14px-regular']};
  color: ${theme.colors.gray[600]};
`;
