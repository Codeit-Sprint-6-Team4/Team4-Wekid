import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentInputUI from './CommentInputUI';
import { autoResizeTextarea } from '@utils/autoResizeTextarea';

interface CommentInputContainerProps {
  onAddComment: (text: string) => void;
}

const CommentInputContainer: React.FC<CommentInputContainerProps> = ({ onAddComment }) => {
  const { id } = useParams<{ id: string }>();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState('');

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      const handleInput = () => autoResizeTextarea(textarea);
      textarea.addEventListener('input', handleInput);

      return () => textarea.removeEventListener('input', handleInput);
    }
  }, []);

  const handleSubmit = () => {
    if (text.trim() && id) {
      onAddComment(text);
      setText('');
    } else if (!id) {
      console.error('Article ID is missing');
    }
  };

  return (
    <CommentInputUI
      text={text}
      setText={setText}
      handleSubmit={handleSubmit}
      textareaRef={textareaRef}
    />
  );
};

export default CommentInputContainer;
