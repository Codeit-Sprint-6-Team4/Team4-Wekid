import React, { RefObject } from 'react';
import DefaultProfileImg from '@assets/icons/icon-profile.svg';
import {
  CommentItemWrapper,
  CommentAuthorProfileWrapper,
  CommentAuthorProfile,
  CommentContentWrapper,
  CommentAuthorInfo,
  CommentAuthorName,
  CommentActions,
  EditTextButton,
  EditCommentButton,
  DeleteCommentButton,
  CommentText,
  CommentDate,
  CommentInputWrapper,
  StyledCommentInput,
  CommentInfo,
  CharacterCount,
} from './CommentItemUIStyled';

interface CommentItemUIProps {
  id: number;
  author: string;
  date: string;
  text: string;
  isEditing: boolean;
  textareaRef: RefObject<HTMLTextAreaElement>;
  setEditContent: React.Dispatch<React.SetStateAction<string>>;
  handleEdit: () => void;
  handleSave: () => void;
  handleCancel: () => void;
  handleDelete: () => void;
  image?: string; // 이미지 추가
}

const CommentItemUI: React.FC<CommentItemUIProps> = ({
  id,
  author,
  date,
  text,
  isEditing,
  textareaRef,
  setEditContent,
  handleEdit,
  handleSave,
  handleCancel,
  handleDelete,
  image,
}) => {
  return (
    <CommentItemWrapper>
      <CommentAuthorProfileWrapper>
        <CommentAuthorProfile>
          <img src={image || DefaultProfileImg} alt="프로필 이미지" />
        </CommentAuthorProfile>
      </CommentAuthorProfileWrapper>
      <CommentContentWrapper>
        <CommentAuthorInfo>
          <CommentAuthorName>{author}</CommentAuthorName>
          <CommentActions>
            {isEditing ? (
              <>
                <EditTextButton onClick={handleSave}>수정 완료</EditTextButton>
                <EditTextButton onClick={handleCancel}>취소</EditTextButton>
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
          <CommentInputWrapper>
            <StyledCommentInput
              ref={textareaRef}
              value={text}
              onChange={(e) => setEditContent(e.target.value.slice(0, 100))} // 100자 제한
              placeholder="댓글을 입력해주세요"
            />
            <CommentInfo>
              <CharacterCount>{text.length}/100</CharacterCount>
            </CommentInfo>
          </CommentInputWrapper>
        ) : (
          <CommentText>{text}</CommentText>
        )}
        <CommentDate>{date}</CommentDate>
      </CommentContentWrapper>
    </CommentItemWrapper>
  );
};

export default CommentItemUI;
