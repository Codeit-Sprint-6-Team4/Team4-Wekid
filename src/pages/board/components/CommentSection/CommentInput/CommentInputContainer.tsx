import React, { useRef, useEffect, useState } from 'react';
import { autoResizeTextarea } from '@utils/autoResizeTextarea';
import CommentInputUI from './CommentInputUI';

interface CommentInputContainerProps {
  onAddComment: (text: string) => void;
}

const CommentInputContainer: React.FC<CommentInputContainerProps> = ({
  onAddComment,
}) => {
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
    if (text.trim()) {
      onAddComment(text);
      setText('');
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
