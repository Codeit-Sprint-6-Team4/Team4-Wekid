import styled from 'styled-components';
import successIcon from '@assets/icons/icon-check-green.svg';
import errorIcon from '@assets/icons/icon-error-red.svg';
import infoIcon from '@assets/icons/icon-info.svg';
import { SnackbarContainerProps } from './Snackbar';

export const SnackbarStyled = styled.div<SnackbarContainerProps>`
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
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
  position: ${({ position }) => position || 'fixed'};
  top: ${({ top }) => top || 'auto'};
  right: ${({ right }) => right || 'auto'};
  bottom: ${({ bottom }) => bottom || 'auto'};
  left: ${({ left }) => left || '50%'};
  display: flex;
  align-items: center;
  transform: translateX(-50%);
  padding: 13px 20px;
  border-radius: 4px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  z-index: 10;
  pointer-events: none;
  user-select: none;
  transition:
    opacity 0.5s ease-in-out,
    visibility 0.5s ease-in-out;
  font: ${({ theme }) => theme.fonts['pretendard/md-14px-regular']};
  white-space: nowrap;

  &::before {
    content: '';
    flex-shrink: 0;
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
    position: fixed;
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
