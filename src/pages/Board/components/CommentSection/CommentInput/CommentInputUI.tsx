import React, { RefObject } from 'react';
import Button from '@components/button/Button';
import {
  CommentInputWrapper,
  StyledCommentInput,
  CommentInfo,
  CharacterCount,
} from './CommentInputUIStyled';

interface CommentInputUIProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  handleInputClick: () => void;
  handleSubmit: () => void;
  textareaRef: RefObject<HTMLTextAreaElement>;
}

const CommentInputUI: React.FC<CommentInputUIProps> = ({
  text,
  setText,
  handleInputClick,
  handleSubmit,
  textareaRef,
}) => {
  const isDisabled = text.length === 0 || text.length > 100;

  return (
    <CommentInputWrapper>
      <StyledCommentInput
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value.slice(0, 100))} // 100자 제한
        placeholder="댓글을 입력해주세요"
        onClick={handleInputClick}
      />
      <CommentInfo>
        <CharacterCount>{text.length}/100</CharacterCount>
        <Button $primary onClick={handleSubmit} disabled={isDisabled}>
          댓글등록
        </Button>
      </CommentInfo>
    </CommentInputWrapper>
  );
};

export default CommentInputUI;
