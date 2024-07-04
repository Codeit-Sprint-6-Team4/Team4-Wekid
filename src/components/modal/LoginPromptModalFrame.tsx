import React from 'react';
import Button from '@components/button/Button';
import {
  StyledNoticeContent,
  StyledModalTitle,
  StyledModalSubtitle,
  StyledButtonContainer,
} from '@components/modal/noticeModal.styled';

interface LoginPromptModalContentProps {
  navigateToLogin?: () => void;
}

const LoginPromtModalContent = ({ navigateToLogin = () => {} }: LoginPromptModalContentProps) => {
  return (
    <StyledNoticeContent>
      <StyledModalTitle>로그인이 필요합니다.</StyledModalTitle>
      <StyledModalSubtitle>로그인 페이지로 이동합니다.</StyledModalSubtitle>
      <StyledButtonContainer>
        <Button $primary onClick={navigateToLogin}>
          확인
        </Button>
      </StyledButtonContainer>
    </StyledNoticeContent>
  );
};

export default LoginPromtModalContent;
