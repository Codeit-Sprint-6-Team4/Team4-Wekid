import React from 'react';
import styled from 'styled-components';
import Button from '@components/button/Button';
import { theme } from '@styles/theme';

interface NoticeModalContentProps {
  type: 'disconnect' | 'cancelSave';
  onClose: () => void;
}
const StyledNoticeContent = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
`;

const StyledModalTitle = styled.div`
  font: ${theme.fonts['pretendard/2lg-18px-semibold']};
  color: ${theme.colors.gray[800]};
`;

const StyledModalSubtitle = styled.div`
  margin-top: 10px;
  margin-bottom: 33px;
  font: ${theme.fonts['pretendard/lg-16px-regular']};
  color: ${theme.colors.gray[600]};
`;

const StyledButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const StyledCustomButton = styled(Button)`
  background-color: ${theme.colors.red[500]};
  color: ${theme.colors.gray[0]};
`;

const NoticeModalContent: React.FC<NoticeModalContentProps> = ({
  type,
  onClose,
}) => {
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
            <StyledCustomButton onClick={onClose}>
              페이지 나가기
            </StyledCustomButton>
          </StyledButtonContainer>
        </StyledNoticeContent>
      );
  }
};

export default NoticeModalContent;
