import React, { useRef, useEffect, useState } from 'react';
import CommentItemUI from './CommentItemUI';
import { autoResizeTextarea } from '@utils/autoResizeTextarea';

interface CommentItemContainerProps {
  id: number;
  author: string;
  date: string;
  text: string;
  updateComment: (commentId: number, text: string) => void;
  removeComment: (commentId: number) => void;
}

const CommentItemContainer: React.FC<CommentItemContainerProps> = ({ id, author, date, text, updateComment, removeComment }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [editContent, setEditContent] = useState(text);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      const handleInput = () => autoResizeTextarea(textarea);
      textarea.addEventListener('input', handleInput);
      autoResizeTextarea(textarea); // 초기 크기 설정

      return () => textarea.removeEventListener('input', handleInput);
    }
  }, [isEditing]);

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
    <CommentItemUI
      id={id}
      author={author}
      date={date}
      text={editContent}
      isEditing={isEditing}
      textareaRef={textareaRef}
      setEditContent={setEditContent}
      handleEdit={handleEdit}
      handleSave={handleSave}
      handleCancel={handleCancel}
      handleDelete={handleDelete}
    />
  );
};

export default CommentItemContainer;
