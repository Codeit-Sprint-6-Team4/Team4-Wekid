import React from 'react';
import styled from 'styled-components';
import closeIcon from '@assets/icons/icon-close.svg';
import ImageUploadModalContent from './ImageUploadModalContent';
import NoticeModalContent from './NoticeModalContent';
import QuestionModalContent from './QuestionModalContent';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.gray[0]};
  padding: 50px 20px 20px 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 395px;
  max-width: 85%;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: url(${closeIcon});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 14px;
  border: none;
  width: 20px;
  height: 20px;
  cursor: pointer;
  padding: 0;
`;

interface ModalProps {
  type: 'imageUpload' | 'question' | 'disconnect' | 'cancelSave';
  onClose: () => void;
  onConfirm?: (answer: string) => void;
}

const Modal: React.FC<ModalProps> = ({ type, onClose, onConfirm }) => {
  let content;
  switch (type) {
    case 'imageUpload':
      content = <ImageUploadModalContent />;
      break;
    case 'question':
      content = <QuestionModalContent onConfirm={onConfirm!} />;
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
    <ModalOverlay onClick={handleBackgroundClick}>
      <ModalContainer>
        <CloseButton onClick={onClose} />
        {content}
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
