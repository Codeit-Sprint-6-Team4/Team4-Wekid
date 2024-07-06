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

type ModalProps =
  | {
      type: 'imageUpload';
      onClose: () => void;
      onConfirm: (imageUrl: string) => void;
    }
  | {
      type: 'disconnect' | 'cancelSave';
      onClose: () => void;
      onConfirm: () => void;
    }
  | {
      type: 'question' | 'loginPrompt';
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
    };

const Modal = (props: ModalProps) => {
  const { type, onClose } = props;

  let content;
  switch (type) {
    case 'imageUpload':
      content = (
        <ImageUploadModalContent
          onClose={onClose}
          onConfirm={props.onConfirm}
        />
      );
      break;
    case 'question':
      content = (
        <QuestionModalContent
          onConfirm={props.onConfirm!}
          securityQuestion={props.securityQuestion!}
          answer={props.answer!}
          confirmAnswer={props.confirmAnswer!}
          id={props.id!}
          setAnswer={props.setAnswer!}
        />
      );
      break;
    case 'disconnect':
    case 'cancelSave':
      content = (
        <NoticeModalContent
          type={type}
          onClose={onClose}
          onConfirm={props.onConfirm}
        />
      );
      break;
    case 'loginPrompt':
      content = (
        <LoginPromtModalContent navigateToLogin={props.navigateToLogin} />
      );
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
