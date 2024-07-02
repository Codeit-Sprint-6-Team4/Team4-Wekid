import React from 'react';
import styled from 'styled-components';
import successIcon from '@assets/icons/icon-check-green.svg';
import errorIcon from '@assets/icons/icon-error-red.svg';
import infoIcon from '@assets/icons/icon-info.svg';

interface SnackbarContainerProps {
  message: string;
  type: 'info' | 'success' | 'error';
  visible: boolean;
}

const SnackbarStyled = styled.div<{
  type: string;
  visible: boolean;
}>`
  background-color: ${({ theme, type }) =>
    type === 'info'
      ? theme.colors.gray[50]
      : type === 'success'
        ? theme.colors.main[50]
        : theme.colors.red[50]};
  color: ${({ theme, type }) =>
    type === 'info'
      ? theme.colors.gray[800]
      : type === 'success'
        ? theme.colors.main[600]
        : theme.colors.red[500]};
  border: 1px solid
    ${({ theme, type }) =>
      type === 'info'
        ? theme.colors.gray[800]
        : type === 'success'
          ? theme.colors.main[500]
          : theme.colors.red[500]};
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  position: absolute;
  align-items: center;
  top: 120px;
  left: 50%;
  transform: translateX(-50%);
  padding: 13px 20px;
  border-radius: 4px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  z-index: 10;
  transition: all 0.3s ease-in-out;
  font: ${({ theme }) => theme.fonts['pretendard/md-14px-regular']};
  white-space: nowrap;

  &::before {
    content: '';
    display: inline-block;
    width: 18px;
    height: 18px;
    margin-right: 15px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: ${({ type }) =>
      type === 'info'
        ? `url(${infoIcon})`
        : type === 'success'
          ? `url(${successIcon})`
          : `url(${errorIcon})`};
  }
  @media (max-width: 768px) {
    top: 100px;
  }

  @media (max-width: 480px) {
    top: auto;
    bottom: 80px;
    padding: 11px 15px;
    font: ${({ theme }) => theme.fonts['pretendard/xs-12px-regular']};

    &::before {
      width: 14px;
      height: 14px;
      margin-right: 8px;
    }
  }
`;

const SnackbarContainer: React.FC<SnackbarContainerProps> = ({
  message,
  type,
  visible,
}) => {
  return (
    <SnackbarStyled type={type} visible={visible}>
      {message}
    </SnackbarStyled>
  );
};

export default SnackbarContainer;
