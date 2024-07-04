import React, { useRef, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Modal from '@components/modal/Modal';
import useGetUserData from '@hooks/useGetUserData';
import { autoResizeTextarea } from '@utils/autoResizeTextarea';
import CommentInputUI from './CommentInputUI';

interface CommentInputContainerProps {
  onAddComment: (text: string) => void;
}

const CommentInputContainer: React.FC<CommentInputContainerProps> = ({
  onAddComment,
}) => {
  const { id } = useParams<{ id: string }>();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState('');
  const { myUserData } = useGetUserData();
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      const handleInput = () => autoResizeTextarea(textarea);
      textarea.addEventListener('input', handleInput);

      return () => textarea.removeEventListener('input', handleInput);
    }
  }, []);

  const handleInputClick = () => {
    if (!myUserData) {
      setShowLoginPrompt(true);
    }
  };
  const handleModalClose = () => {
    setShowLoginPrompt(false);
  };
  const navigateToLogin = () => {
    navigate('/login');
    handleModalClose();
  };

  const handleSubmit = () => {
    if (text.trim() && id) {
      onAddComment(text);
      setText('');
    } else if (!id) {
      console.error('Article ID is missing');
    }
  };

  return (
    <>
      <CommentInputUI
        text={text}
        setText={setText}
        handleInputClick={handleInputClick}
        handleSubmit={handleSubmit}
        textareaRef={textareaRef}
      />
      {showLoginPrompt && (
        <Modal
          type="loginPrompt"
          onClose={handleModalClose}
          navigateToLogin={navigateToLogin}
        />
      )}
    </>
  );
};

export default CommentInputContainer;
