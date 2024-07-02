import React from 'react';
import {
  StyledModalOverlay,
  StyledModalContainer,
  StyledCloseButton,
} from '@components/modal/modal.styled';
import ImageUploadModalContent from './ImageUploadModalFrame';
import NoticeModalContent from './NoticeModalFrame';
import QuestionModalContent from './QuestionModalFrame';

interface ModalProps {
  type: 'imageUpload' | 'question' | 'disconnect' | 'cancelSave';
  onClose: () => void;
  onConfirm?: (answer: string) => void;
  securityQuestion?: string;
  securityAnswer?: string;
}

const Modal = ({
  type,
  onClose,
  onConfirm,
  securityQuestion,
  securityAnswer,
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
          securityAnswer={securityAnswer!}
        />
      );
      break;
    case 'disconnect':
    case 'cancelSave':
      content = <NoticeModalContent type={type} onClose={onClose} />;
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
