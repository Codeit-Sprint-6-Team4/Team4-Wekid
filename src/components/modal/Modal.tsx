import React, { ChangeEvent } from 'react';
import {
  StyledModalOverlay,
  StyledModalContainer,
  StyledCloseButton,
} from '@components/modal/modal.styled';
import ImageUploadModalContent from './ImageUploadModalFrame';
import LoginPromtModalContent from './LoginPromptModalFrame';
import NoticeModalContent from './NoticeModalFrame';
import QuestionModalContent from './QuestionModalFrame';

interface ModalProps {
  type:
    | 'imageUpload'
    | 'question'
    | 'disconnect'
    | 'cancelSave'
    | 'loginPrompt';
  onClose: () => void;
  onConfirm?: (
    answer?: string,
    id?: string,
  ) => Promise<string | undefined> | void;
  setAnswer?: (e: ChangeEvent<HTMLInputElement>) => void;
  confirmAnswer?: () => void;
  navigateToLogin?: () => void;
  securityQuestion?: string;
  answer?: string;
  id?: string;
}

const Modal = ({
  type,
  onClose,
  onConfirm,
  securityQuestion,
  answer,
  id,
  confirmAnswer,
  setAnswer,
  navigateToLogin,
}: ModalProps) => {
  let content;
  switch (type) {
    case 'imageUpload':
      content = <ImageUploadModalContent onClose={onClose} />;
      break;
    case 'question':
      content = (
        <QuestionModalContent
          onConfirm={onConfirm!}
          securityQuestion={securityQuestion!}
          answer={answer!}
          confirmAnswer={confirmAnswer!}
          id={id!}
          setAnswer={setAnswer!}
        />
      );
      break;
    case 'disconnect':
    case 'cancelSave':
      content = (
        <NoticeModalContent
          type={type}
          onClose={onClose}
          onConfirm={onConfirm}
        />
      );
      break;
    case 'loginPrompt':
      content = <LoginPromtModalContent navigateToLogin={navigateToLogin} />;
      break;
    default:
      content = null;
  }

  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <StyledModalOverlay onClick={handleBackgroundClick}>
      <StyledModalContainer>
        <StyledCloseButton onClick={onClose} />
        {content}
      </StyledModalContainer>
    </StyledModalOverlay>
  );
};

export default Modal;
