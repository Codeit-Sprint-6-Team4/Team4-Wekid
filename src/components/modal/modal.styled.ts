import styled from 'styled-components';
import closeIcon from '@assets/icons/icon-close.svg';
import { theme } from '@styles/theme';
import { media } from '@utils/media';

export const StyledModalOverlay = styled.div`
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

export const StyledModalContainer = styled.div`
  position: relative;
  background-color: ${theme.colors.gray[0]};
  padding: 50px 20px 20px 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 395px;
  max-width: 85%;
  ${media('mobile')`
    width: 90%;
    min-width: 30rem;
  `}
`;

export const StyledCloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: url(${closeIcon});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 24px;
  border: none;
  width: 30px;
  height: 30px;
  cursor: pointer;
  padding: 0;
`;
