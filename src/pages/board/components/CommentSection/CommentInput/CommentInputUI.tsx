import React, { RefObject } from 'react';
import { CommentInputWrapper, StyledCommentInput, CommentInfo, CharacterCount } from './CommentInputUIStyled';
import Button from '@components/button/Button';

interface CommentInputUIProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: () => void;
  textareaRef: RefObject<HTMLTextAreaElement>;
}

const CommentInputUI: React.FC<CommentInputUIProps> = ({ text, setText, handleSubmit, textareaRef }) => {
  return (
    <CommentInputWrapper>
      <StyledCommentInput
        ref={textareaRef}
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="댓글을 입력해주세요"
      ></StyledCommentInput>
      <CommentInfo>
        <CharacterCount>{text.length}/100</CharacterCount>
        <Button $primary onClick={handleSubmit}>댓글등록</Button>
      </CommentInfo>
    </CommentInputWrapper>
  );
};

export default CommentInputUI;
