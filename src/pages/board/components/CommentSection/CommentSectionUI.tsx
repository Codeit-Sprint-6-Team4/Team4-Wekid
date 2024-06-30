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
  fetchComments: () => void;
}

const CommentSectionUI: React.FC<CommentSectionUIProps> = ({ comments, fetchComments }) => {
  return (
    <CommentsWrapper>
      <CommentsCount>
        댓글 <span>{comments.length}</span>
      </CommentsCount>
      <CommentInputContainer onAddComment={fetchComments} />
      <CommentsList>
        {comments.map(comment => (
          <CommentItemContainer
            key={comment.id}
            id={comment.id}
            author={comment.author}
            date={comment.date}
            text={comment.text}
            fetchComments={fetchComments} // fetchComments 함수 전달
          />
        ))}
      </CommentsList>
    </CommentsWrapper>
  );
};

export default CommentSectionUI;
