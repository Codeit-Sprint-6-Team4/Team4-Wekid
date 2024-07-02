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

export const EditTextButton = styled.button`
  font: ${theme.fonts['pretendard/md-14px-regular']};
  color: ${theme.colors.gray[600]};
  letter-spacing: -0.04em;
  &:hover {
    text-decoration: underline;
  }
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
  margin-bottom: 1rem;
  font: ${theme.fonts['pretendard/lg-16px-regular']};
  color: ${theme.colors.gray[800]};
  word-break: break-all;
`;

export const CommentDate = styled.div`
  font: ${theme.fonts['pretendard/md-14px-regular']};
  color: ${theme.colors.gray[600]};
`;

export const CommentInputWrapper = styled.div`
  position: relative;
  background: ${theme.colors.gray[50]};
  border-radius: 1rem;
  margin: 1rem 0;
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
