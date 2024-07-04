import React, { useRef, useEffect, useState } from 'react';
import { autoResizeTextarea } from '@utils/autoResizeTextarea';
import CommentItemUI from './CommentItemUI';

interface CommentItemContainerProps {
  id: number;
  author: { id: string; name: string };
  date: string;
  text: string;
  updateComment: (commentId: number, text: string) => void;
  removeComment: (commentId: number) => void;
  currentUserId: string | null; // 현재 사용자 ID 추가
}

const CommentItemContainer: React.FC<CommentItemContainerProps> = ({
  id,
  author,
  date,
  text,
  updateComment,
  removeComment,
  currentUserId,
}) => {
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

  const isMyComment = currentUserId === author.id;

  return (
    <CommentItemUI
      author={author.name}
      date={date}
      text={editContent}
      isEditing={isEditing}
      textareaRef={textareaRef}
      setEditContent={setEditContent}
      handleEdit={handleEdit}
      handleSave={handleSave}
      handleCancel={handleCancel}
      handleDelete={handleDelete}
      isMyComment={isMyComment} // 본인 댓글 여부 전달
    />
  );
};

export default CommentItemContainer;
