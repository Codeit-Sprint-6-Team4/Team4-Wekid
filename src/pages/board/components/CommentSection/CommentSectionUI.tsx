import React from 'react';
import Button from '@components/button/Button';
import CommentInputContainer from './CommentInput/CommentInputContainer';
import CommentItemContainer from './CommentItem/CommentItemContainer';
import {
  CommentsWrapper,
  CommentsCount,
  CommentsList,
  LoadMoreButton,
} from './CommentSectionUIStyled';

interface Comment {
  id: number;
  author: { id: string, name: string };
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
  currentUserId: string | null; // 현재 사용자 ID props 추가
}

const CommentSectionUI: React.FC<CommentSectionUIProps> = ({
  comments,
  fetchComments,
  hasMore,
  addComment,
  updateComment,
  removeComment,
  totalComments,
  currentUserId,
}) => {
  return (
    <CommentsWrapper>
      <CommentsCount>
        댓글 <span>{totalComments}</span> {/* 총 댓글 수 렌더링 */}
      </CommentsCount>
      <CommentInputContainer onAddComment={addComment} />
      <CommentsList>
        {comments.map((comment) => (
          <CommentItemContainer
            key={comment.id}
            id={comment.id}
            author={comment.author}
            date={comment.date}
            text={comment.text}
            updateComment={updateComment}
            removeComment={removeComment}
            currentUserId={currentUserId} // 현재 사용자 ID 전달
          />
        ))}
      </CommentsList>
      {hasMore && (
        <LoadMoreButton>
          <Button $secondary onClick={fetchComments}>
            더 보기
          </Button>
        </LoadMoreButton>
      )}
    </CommentsWrapper>
  );
};

export default CommentSectionUI;