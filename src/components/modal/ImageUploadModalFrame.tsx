import React, { useRef, useState } from 'react';
import { postImage } from '@api/image';
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
  onConfirm: (imageUrl: string) => void;
}

const ImageUploadModalContent = ({
  onClose,
  onConfirm,
}: ImageUploadModalContentProps) => {
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
    } else {
      setFileSelected(false);
      setFilePreviewUrl(null);
    }
  };

  const handleImageLoad = () => {
    setImageLoad(true);
  };

  const handleInsertClick = async () => {
    if (fileSelected && fileInputRef.current?.files?.[0]) {
      const file = fileInputRef.current.files[0];
      const imageUrl = await postImage(file);
      if (imageUrl) {
        onConfirm(imageUrl);
        onClose();
      }
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
