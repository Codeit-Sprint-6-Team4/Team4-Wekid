import styled from 'styled-components';
import cameraIcon from '@assets/icons/icon-camera.svg';
import { theme } from '@styles/theme';
import { media } from '@utils/media';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font: ${theme.fonts['pretendard/2lg-18px-semibold']};
  ${media('mobile')`
    font: ${theme.fonts['pretendard/lg-16px-semibold']};
  `}
`;

export const StyledImageContainer = styled.div<{ imageLoad: boolean }>`
  position: relative;
  width: 100%;
  height: ${({ imageLoad }) => (imageLoad ? 'auto' : '160px')};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: ${theme.colors.gray[50]};
  &:hover {
    cursor: pointer;
  }
`;

export const StyledUploadIcon = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${cameraIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export const StyledHiddenInput = styled.input`
  display: none;
`;

export const StyledPreviewImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
  object-fit: contain;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
