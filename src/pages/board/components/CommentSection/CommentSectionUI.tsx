import React from 'react';
import CommentInputContainer from './CommentInput/CommentInputContainer';
import CommentItemContainer from './CommentItem/CommentItemContainer';
import { CommentsWrapper, CommentsCount, CommentsList } from './CommentSectionUIStyled';

interface Comment {
  id: number;
  author: string;
  date: string;
  text: string;
}

interface CommentSectionUIProps {
  comments: Comment[];
  onAddComment: (text: string) => void;
}

const CommentSectionUI: React.FC<CommentSectionUIProps> = ({ comments, onAddComment }) => {
  return (
    <CommentsWrapper>
      <CommentsCount>
        댓글 <span>{comments.length}</span>
      </CommentsCount>
      <CommentInputContainer onAddComment={onAddComment} />
      <CommentsList>
        {comments.map(comment => (
          <CommentItemContainer key={comment.id} author={comment.author} date={comment.date} text={comment.text} />
        ))}
      </CommentsList>
    </CommentsWrapper>
  );
};

export default CommentSectionUI;
