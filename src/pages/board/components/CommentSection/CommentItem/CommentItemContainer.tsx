import React from 'react';
import CommentItemUI from './CommentItemUI';

interface CommentItemContainerProps {
  id: number;
  author: string;
  date: string;
  text: string;
  updateComment: (commentId: number, text: string) => void;
  removeComment: (commentId: number) => void;
}

const CommentItemContainer: React.FC<CommentItemContainerProps> = ({ id, author, date, text, updateComment, removeComment }) => {
  return (
    <CommentItemUI
      id={id}
      author={author}
      date={date}
      text={text}
      updateComment={updateComment}
      removeComment={removeComment}
    />
  );
};

export default CommentItemContainer;
