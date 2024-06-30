import React from 'react';
import CommentItemUI from './CommentItemUI';

interface CommentItemContainerProps {
  id: number;
  author: string;
  date: string;
  text: string;
  fetchComments: () => void;
}

const CommentItemContainer: React.FC<CommentItemContainerProps> = ({ id, author, date, text, fetchComments }) => {
  return (
    <CommentItemUI
      id={id}
      author={author}
      date={date}
      text={text}
      fetchComments={fetchComments}
    />
  );
};

export default CommentItemContainer;
