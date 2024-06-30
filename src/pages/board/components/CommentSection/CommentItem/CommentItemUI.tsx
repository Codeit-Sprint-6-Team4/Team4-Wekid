import React, { useState } from 'react';
import DefaultProfileImg from '@assets/icons/icon-profile.svg';
import {
  CommentItemWrapper,
  CommentAuthorProfileWrapper,
  CommentAuthorProfile,
  CommentContentWrapper,
  CommentAuthorInfo,
  CommentAuthorName,
  CommentActions,
  EditCommentButton,
  DeleteCommentButton,
  CommentText,
  CommentDate,
} from './CommentItemUIStyled';
import { deleteComment, patchComment } from '@api/comment';

interface CommentItemUIProps {
  id: number;
  author: string;
  date: string;
  text: string;
  fetchComments: () => void;
}

const CommentItemUI: React.FC<CommentItemUIProps> = ({
  id,
  author,
  date,
  text,
  fetchComments,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      await patchComment(id.toString(), editContent);
      await fetchComments();
      setIsEditing(false);
    } catch (error) {
      console.error('Failed to update comment', error);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditContent(text); // 원래 텍스트로 되돌리기
  };

  const handleDelete = async () => {
    try {
      await deleteComment(id.toString());
      await fetchComments();
    } catch (error) {
      console.error('Failed to delete comment', error);
    }
  };

  return (
    <CommentItemWrapper>
      <CommentAuthorProfileWrapper>
        <CommentAuthorProfile>
          <img src={DefaultProfileImg} alt="프로필 이미지" />
        </CommentAuthorProfile>
      </CommentAuthorProfileWrapper>
      <CommentContentWrapper>
        <CommentAuthorInfo>
          <CommentAuthorName>{author}</CommentAuthorName>
          <CommentActions>
            {isEditing ? (
              <>
                <EditCommentButton onClick={handleSave}>
                  <span>수정 확인</span>
                </EditCommentButton>
                <EditCommentButton onClick={handleCancel}>
                  <span>취소</span>
                </EditCommentButton>
              </>
            ) : (
              <EditCommentButton onClick={handleEdit}>
                <span className="blind">수정</span>
              </EditCommentButton>
            )}
            <DeleteCommentButton onClick={handleDelete}>
              <span className="blind">삭제</span>
            </DeleteCommentButton>
          </CommentActions>
        </CommentAuthorInfo>
        {isEditing ? (
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
          />
        ) : (
          <CommentText>{text}</CommentText>
        )}
        <CommentDate>{date}</CommentDate>
      </CommentContentWrapper>
    </CommentItemWrapper>
  );
};

export default CommentItemUI;
