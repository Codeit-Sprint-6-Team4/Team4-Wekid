import React, { useRef, useState } from 'react';
import Button from '@components/button/Button';
import {
  StyledContainer,
  StyledImageContainer,
  StyledUploadIcon,
  StyledHiddenInput,
  StyledPreviewImage,
  StyledButtonContainer,
} from '@components/modal/imageUploadModal.styled';

interface ImageUploadModalContentProps {
  onClose: () => void;
}

const ImageUploadModalContent = ({ onClose }: ImageUploadModalContentProps) => {
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
