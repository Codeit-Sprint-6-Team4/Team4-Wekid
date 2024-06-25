import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import cameraIcon from '@assets/icons/icon-camera.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font: ${({ theme }) => theme.fonts['pretendard/2lg-18px-semibold']};
`;

const ImageContainer = styled.div<{ imageLoad: boolean }>`
  position: relative;
  width: 100%;
  height: ${({ imageLoad }) => (imageLoad ? 'auto' : '160px')};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.gray[50]};
`;

const UploadIcon = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${cameraIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const HiddenInput = styled.input`
  display: none;
`;

const PreviewImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
  object-fit: contain;
`;

//임시버튼
interface UploadButtonProps {
  disabled: boolean;
}

const UploadButton = styled.button<UploadButtonProps>`
  background-color: ${(props) =>
    props.disabled
      ? props.theme.colors.gray[50]
      : props.theme.colors.main[500]};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  color: white;
  font-size: 16px;
`;

const ImageUploadModalContent: React.FC = () => {
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

  return (
    <Container>
      <p>이미지</p>
      <ImageContainer onClick={handleClick} imageLoad={imageLoad}>
        {filePreviewUrl ? (
          <PreviewImage
            onLoad={handleImageLoad}
            src={filePreviewUrl}
            alt="Uploaded file preview"
          />
        ) : (
          <UploadIcon />
        )}
        <HiddenInput
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </ImageContainer>
      <UploadButton disabled={!fileSelected} onClick={handleClick}>
        삽입하기
      </UploadButton>
    </Container>
  );
};

export default ImageUploadModalContent;
