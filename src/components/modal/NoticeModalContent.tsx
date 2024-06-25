import React from 'react';
import styled from 'styled-components';

interface NoticeModalContentProps {
  type: 'disconnect' | 'cancelSave';
  onClose: () => void;
}
const NoticeContent = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
`;

const ModalTitle = styled.div`
  font: ${({ theme }) => theme.fonts['pretendard/2lg-18px-semibold']};
  color: ${({ theme }) => theme.colors.gray[800]};
`;

const ModalSubtitle = styled.div`
  margin-top: 10px;
  margin-bottom: 33px;
  font: ${({ theme }) => theme.fonts['pretendard/lg-16px-regular']};
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const NoticeModalContent: React.FC<NoticeModalContentProps> = ({
  type,
  onClose,
}) => {
  switch (type) {
    case 'disconnect':
      return (
        <NoticeContent>
          <ModalTitle>5분 이상 글을 쓰지 않아 접속이 끊어졌어요.</ModalTitle>
          <ModalSubtitle>
            위키 참여하기를 통해 다시 위키를 수정해 주세요.
          </ModalSubtitle>
          <button onClick={onClose}>확인</button>
        </NoticeContent>
      );
    case 'cancelSave':
      return (
        <NoticeContent>
          <ModalTitle>저장하지 않고 나가시겠어요?</ModalTitle>
          <ModalSubtitle>작성하신 모든 내용이 사라집니다.</ModalSubtitle>
          <button onClick={onClose}>페이지 나가기</button>
        </NoticeContent>
      );
  }
};

export default NoticeModalContent;
