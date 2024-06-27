import React from 'react';
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
  author: string;
  date: string;
  text: string;
}

const CommentItemUI: React.FC<CommentItemUIProps> = ({
  author,
  date,
  text,
}) => {
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
            <EditCommentButton>
              <span className="blind">수정</span>
            </EditCommentButton>
            <DeleteCommentButton>
              <span className="blind">삭제</span>
            </DeleteCommentButton>
          </CommentActions>
        </CommentAuthorInfo>
        <CommentText>{text}</CommentText>
        <CommentDate>{date}</CommentDate>
      </CommentContentWrapper>
    </CommentItemWrapper>
  );
};

export default CommentItemUI;
