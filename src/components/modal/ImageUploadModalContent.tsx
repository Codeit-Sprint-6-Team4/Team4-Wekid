import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import cameraIcon from '@assets/icons/icon-camera.svg';
import Button from '@components/button/Button';
import { theme } from '@styles/theme';

interface ImageUploadModalContentProps {
  onClose: () => void;
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font: ${theme.fonts['pretendard/2lg-18px-semibold']};
`;

const StyledImageContainer = styled.div<{ imageLoad: boolean }>`
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
`;

const StyledUploadIcon = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${cameraIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const StyledHiddenInput = styled.input`
  display: none;
`;

const StyledPreviewImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
  object-fit: contain;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const ImageUploadModalContent: React.FC<ImageUploadModalContentProps> = ({
  onClose,
}) => {
  const [fileSelected, setFileSelected] = useState(false);
  const [filePreviewUrl, setFilePreviewUrl] = useState<string | null>(null);
  const [imageLoad, setImageLoad] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileSelected(true);

      const filePreviewUrl = URL.createObjectURL(file);
      setFilePreviewUrl(filePreviewUrl);

      //  uploadFile(file);
    } else {
      setFileSelected(false);
      setFilePreviewUrl(null);
    }
  };

  // 파일 업로드 로직 필요

  const handleImageLoad = () => {
    setImageLoad(true);
  };

  const handleInsertClick = () => {
    if (fileSelected) {
      onClose();
    }
  };

  return (
    <StyledContainer>
      <p>이미지</p>
      <StyledImageContainer onClick={handleClick} imageLoad={imageLoad}>
        {filePreviewUrl ? (
          <StyledPreviewImage
            onLoad={handleImageLoad}
            src={filePreviewUrl}
            alt="Uploaded file preview"
          />
        ) : (
          <StyledUploadIcon />
        )}
        <StyledHiddenInput
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </StyledImageContainer>
      <StyledButtonContainer>
        <Button $primary disabled={!fileSelected} onClick={handleInsertClick}>
          삽입하기
        </Button>
      </StyledButtonContainer>
    </StyledContainer>
  );
};

export default ImageUploadModalContent;
