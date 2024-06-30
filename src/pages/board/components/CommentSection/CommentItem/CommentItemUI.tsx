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

interface CommentItemUIProps {
  id: number;
  author: string;
  date: string;
  text: string;
  updateComment: (commentId: number, text: string) => void;
  removeComment: (commentId: number) => void;
}

const CommentItemUI: React.FC<CommentItemUIProps> = ({
  id,
  author,
  date,
  text,
  updateComment,
  removeComment,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateComment(id, editContent);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditContent(text); // 원래 텍스트로 되돌리기
  };

  const handleDelete = () => {
    removeComment(id);
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
