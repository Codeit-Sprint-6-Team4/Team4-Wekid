import React from 'react';
import Button from '@components/button/Button';
import {
  StyledNoticeContent,
  StyledModalTitle,
  StyledModalSubtitle,
  StyledButtonContainer,
  StyledCustomButton,
} from '@components/modal/noticeModal.styled';

interface NoticeModalContentProps {
  type: 'disconnect' | 'cancelSave';
  onConfirm: () => void;
  onClose: () => void;
}

const NoticeModalContent = ({
  type,
  onClose,
  onConfirm,
}: NoticeModalContentProps) => {
  switch (type) {
    case 'disconnect':
      return (
        <StyledNoticeContent>
          <StyledModalTitle>
            5분 이상 글을 쓰지 않아 접속이 끊어졌어요.
          </StyledModalTitle>
          <StyledModalSubtitle>
            위키 참여하기를 통해 다시 위키를 수정해 주세요.
          </StyledModalSubtitle>
          <StyledButtonContainer>
            <Button $primary onClick={onClose}>
              확인
            </Button>
          </StyledButtonContainer>
        </StyledNoticeContent>
      );
    case 'cancelSave':
      return (
        <StyledNoticeContent>
          <StyledModalTitle>저장하지 않고 나가시겠어요?</StyledModalTitle>
          <StyledModalSubtitle>
            작성하신 모든 내용이 사라집니다.
          </StyledModalSubtitle>
          <StyledButtonContainer>
            <StyledCustomButton onClick={onConfirm}>
              페이지 나가기
            </StyledCustomButton>
          </StyledButtonContainer>
        </StyledNoticeContent>
      );
  }
};

export default NoticeModalContent;
