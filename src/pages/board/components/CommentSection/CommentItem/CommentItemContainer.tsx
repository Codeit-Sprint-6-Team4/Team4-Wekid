import React from 'react';
import CommentItemUI from './CommentItemUI';

interface CommentItemContainerProps {
  author: string;
  date: string;
  text: string;
}

const CommentItemContainer: React.FC<CommentItemContainerProps> = ({ author, date, text }) => {
  return (
    <CommentItemUI author={author} date={date} text={text} />
  );
};

export default CommentItemContainer;
