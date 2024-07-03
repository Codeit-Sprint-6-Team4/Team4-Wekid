import React from 'react';
import ReactQuill from 'react-quill';
import Button from '@components/button/Button';
import EditorUI from './BoardEditorUI';
import {
  StyledContainerWapper,
  StyledCharCount,
  StyledCharCounter,
  StyledContainer,
  StyledTitleInput,
  StyledTitleForm,
  StyledCreateDate,
  StyledTextForm,
  StyledTextarea,
  StyledTitle,
  StyledTextCharCounter,
  StyledUploadButton,
  StyledButtonContainer,
} from './UpLoadBoard.styled';

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
  onSave: () => void;
  onCancel: () => void;
}

const UploadBoardUI: React.FC<BoardUIProps> = ({
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
  return (
    <StyledContainerWapper>
      <StyledContainer>
        <StyledTitle>게시물 등록하기</StyledTitle>
        <StyledButtonContainer>
          <StyledUploadButton $primary onClick={onSubmit}>
            등록하기
          </StyledUploadButton>
        </StyledButtonContainer>
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
          <StyledTextCharCounter>
            공백포함: 총 {totalChars}자 | 공백제외: 총 {nonSpaceChars}자
          </StyledTextCharCounter>
          <StyledTextarea
            id="content"
            value={content}
            onChange={onContentChange}
            placeholder="본문을 입력해주세요"
          />
        </StyledTextForm>
        <EditorUI />
        <ReactQuill value={content} />
      </StyledContainer>
      <Button $secondary>목록으로</Button>
    </StyledContainerWapper>
  );
};

export default UploadBoardUI;
