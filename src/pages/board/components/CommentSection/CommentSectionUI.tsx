import React from 'react';
import CommentInputContainer from './CommentInput/CommentInputContainer';
import CommentItemContainer from './CommentItem/CommentItemContainer';
import { CommentsWrapper, CommentsCount, CommentsList, LoadMoreButton } from './CommentSectionUIStyled';

interface Comment {
  id: number;
  author: string;
  date: string;
  text: string;
}

interface CommentSectionUIProps {
  comments: Comment[];
  fetchComments: () => void;
  hasMore: boolean;
  addComment: (text: string) => void;
  updateComment: (commentId: number, text: string) => void;
  removeComment: (commentId: number) => void;
  totalComments: number; // 총 댓글 수 props 추가
}

const CommentSectionUI: React.FC<CommentSectionUIProps> = ({ comments, fetchComments, hasMore, addComment, updateComment, removeComment, totalComments }) => {
  return (
    <CommentsWrapper>
      <CommentsCount>
        댓글 <span>{totalComments}</span> {/* 총 댓글 수 렌더링 */}
      </CommentsCount>
      <CommentInputContainer onAddComment={addComment} />
      <CommentsList>
        {comments.map(comment => (
          <CommentItemContainer
            key={comment.id}
            id={comment.id}
            author={comment.author}
            date={comment.date}
            text={comment.text}
            updateComment={updateComment}
            removeComment={removeComment}
          />
        ))}
      </CommentsList>
      {hasMore && (
        <LoadMoreButton onClick={fetchComments}>더 보기</LoadMoreButton>
      )}
    </CommentsWrapper>
  );
};

export default CommentSectionUI;
