import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { postComment } from '@api/comment';
import { autoResizeTextarea } from '@utils/autoResizeTextarea';
import CommentInputUI from './CommentInputUI';

interface CommentInputContainerProps {
  onAddComment: () => void;
}

const CommentInputContainer: React.FC<CommentInputContainerProps> = ({
  onAddComment,
}) => {
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

  const handleSubmit = async () => {
    if (text.trim() && id) {
      try {
        await postComment(id, text);
        onAddComment();
        setText('');
      } catch (error) {
        console.error('Failed to post comment', error);
      }
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
