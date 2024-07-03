import React, { ChangeEvent } from 'react';
import { id } from 'date-fns/locale';
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
  onConfirm?: (answer: string, id: string) => Promise<string | undefined>;
  setAnswer?: (e: ChangeEvent<HTMLInputElement>) => void;
  confirmAnswer?: () => void;
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
