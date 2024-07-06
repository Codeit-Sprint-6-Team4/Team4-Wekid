import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '@components/button/Button';
import {
  StyledContainerWapper,
  StyledCharCount,
  StyledCharCounter,
  StyledContainer,
  StyledTitleInput,
  StyledTitleForm,
  StyledCreateDate,
  StyledTextForm,
  StyledTitle,
  StyledTextCharCounter,
  StyledUploadButton,
  StyledButtonContainer,
} from './UpLoadBoard.styled';
import BoardEditorUI from './UpLoadBoardEditorUI';

interface BoardUIProps {
  date: string;
  title: string;
  content: string;
  titleLength: number;
  totalChars: number;
  nonSpaceChars: number;
  onTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onContentChange: (value: string) => void;
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
  onCancel,
}) => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <StyledContainerWapper>
        <StyledContainer>
          <StyledTitle>게시물 {id ? '수정하기' : '등록하기'}</StyledTitle>{' '}
          <StyledButtonContainer>
            <StyledUploadButton $primary onClick={onSubmit}>
              {id ? '수정하기' : '등록하기'}{' '}
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
            <BoardEditorUI value={content} onChange={onContentChange} />
          </StyledTextForm>
        </StyledContainer>
        <Button $secondary onClick={onCancel}>
          목록으로
        </Button>
      </StyledContainerWapper>
      <main className="layoutWrap">
        <StyledContainerWapper>
          <StyledContainer>
            <StyledTitle>게시물 {id ? '수정하기' : '등록하기'}</StyledTitle>{' '}
            <StyledButtonContainer>
              <StyledUploadButton $primary onClick={onSubmit}>
                {id ? '수정하기' : '등록하기'}{' '}
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
              <BoardEditorUI value={content} onChange={onContentChange} />
            </StyledTextForm>
          </StyledContainer>
          <Button $secondary onClick={onCancel}>
            목록으로
          </Button>
        </StyledContainerWapper>
      </main>
    </>
  );
};

export default UploadBoardUI;
