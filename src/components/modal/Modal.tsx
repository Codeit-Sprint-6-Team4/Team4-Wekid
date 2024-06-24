import React from 'react';
import styled from 'styled-components';
import closeIcon from '@assets/icons/icon-close.svg';

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
  padding: 20px;
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
  background-size: 10px;
  border: none;
  width: 20px;
  height: 20px;
  cursor: pointer;
  padding: 0;
`;

interface ModalProps {
  content: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ content, onClose }) => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose} />
        {content}
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
