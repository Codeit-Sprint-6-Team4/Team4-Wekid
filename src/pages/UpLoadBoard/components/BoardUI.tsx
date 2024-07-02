import React, { useState } from 'react';
import Button from '@components/button/Button';
import Snackbar from '@components/snackbar/Snackbar';
import {
  StyeldButtonContainer,
  StyledCharCount,
  StyledCharCounter,
  StyledContainer,
  StyledTitleInput,
  StyledTitleForm,
  StyledCreateDate,
  StyledTextForm,
  StyledTextarea,
  StyledTitle,
} from './Board.styled';

interface BoardUIProps {
  date: string;
  title: string;
  content: string;
  titleLength: number;
  totalChars: number;
  nonSpaceChars: number;
  onTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onContentChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
}

const BoardUI: React.FC<BoardUIProps> = ({
  date,
  title,
  content,
  titleLength,
  totalChars,
  nonSpaceChars,
  onTitleChange,
  onContentChange,
  onSubmit,
}) => {
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarType, setSnackbarType] = useState<
    'info' | 'success' | 'error'
  >('success');
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleSubmit = () => {
    onSubmit();
    setSnackbarMessage('게시물이 성공적으로 등록되었습니다.');
    setSnackbarType('success');
    setSnackbarVisible(true);
  };
  return (
    <StyledContainer>
      <Snackbar
        type={type}
        visible={visible}
        position={position}
        top={'18'}
        right={right}
        bottom={bottom}
        left={left}
      />
      <StyledTitle>게시물 등록하기</StyledTitle>
      <StyeldButtonContainer>
        <Button $primary onClick={handleSubmit}>
          등록하기
        </Button>
      </StyeldButtonContainer>
      <StyledCreateDate>등록일 {date}</StyledCreateDate>
      <StyledTitleForm>
        <StyledTitleInput
          id="title"
          maxLength={30}
          value={title}
          onChange={onTitleChange}
          placeholder="제목을 입력해주세요"
        />
        <StyledCharCounter>{titleLength}/</StyledCharCounter>
        <StyledCharCount>30</StyledCharCount>
      </StyledTitleForm>
      <StyledTextForm>
        <StyledCharCounter>
          공백포함: 총 {totalChars}자 | 공백제외: 총 {nonSpaceChars}자
        </StyledCharCounter>
        <StyledTextarea
          id="content"
          value={content}
          onChange={onContentChange}
          placeholder="본문을 입력해주세요"
        />
      </StyledTextForm>
    </StyledContainer>
  );
};

export default BoardUI;
