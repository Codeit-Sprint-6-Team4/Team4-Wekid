// NotificationsDropdown.tsx
import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';
import styled from 'styled-components';
import AlarmImg from '@assets/icons/icon-alarm.svg';
import DeleteIcon from '@assets/icons/icon-close.svg';
import HeaderDropdown from '../HeaderDropdown/HeaderDropdown';
import useHeaderDropdown from '../HeaderDropdown/useHeaderDropdown';

interface AlarmItem {
  createdAt: string;
  content: string;
  id: number;
}

interface AlarmsData {
  totalCount: number;
  list: AlarmItem[];
}

const NotificationsDropdown: React.FC = () => {
  const { isOpen, dropdownRef, handleToggleDropdown } = useHeaderDropdown();
  const [alarms, setAlarms] = useState<AlarmsData>({
    totalCount: 2,
    list: [
      {
        createdAt: '2024-06-25T19:07:11.453Z',
        content: '내 위키가 수정되었습니다.',
        id: 1,
      },
      {
        createdAt: '2024-06-25T19:07:11.453Z',
        content: '내 위키가 수정되었습니다.',
        id: 2,
      },
    ],
  });

  const handleDeleteAlarm = async (id: number) => {
    try {
      const updatedList = alarms.list.filter((alarm) => alarm.id !== id);
      setAlarms({
        totalCount: updatedList.length,
        list: updatedList,
      });
    } catch (error) {
      console.error('Failed to delete alarm:', error);
    }
  };

  return (
    <HeaderDropdown
      dropdownRef={dropdownRef}
      isOpen={isOpen}
      handleToggleDropdown={handleToggleDropdown}
      icon={AlarmImg}
    >
      <StyledAlarmTotalCount>
        알림 총 <b>{alarms.totalCount}</b>개
      </StyledAlarmTotalCount>
      <StyledAlarmMenu>
        {alarms.list.length > 0 ? (
          alarms.list.map((alarm) => (
            <StyledAlarmMenuItem key={alarm.id}>
              <div>
                <StyledAlarmText>{alarm.content}</StyledAlarmText>
                <StyledAlarmTime>
                  {formatDistanceToNow(new Date(alarm.createdAt), {
                    addSuffix: true,
                    locale: ko,
                  })}
                </StyledAlarmTime>
              </div>
              <button onClick={() => handleDeleteAlarm(alarm.id)}>
                <img src={DeleteIcon} alt="삭제하기" />
              </button>
            </StyledAlarmMenuItem>
          ))
        ) : (
          <StyledNoAlarms>알림이 없습니다!</StyledNoAlarms>
        )}
      </StyledAlarmMenu>
    </HeaderDropdown>
  );
};

const StyledAlarmTotalCount = styled.div`
  padding: 0.4rem 1.6rem;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  text-align: left;
  font: ${({ theme }) => theme.fonts['pretendard/xs-12px-regular']};
  color: ${({ theme }) => theme.colors.gray[800]};

  & b {
    font-weight: 600;
  }
`;

const StyledAlarmMenu = styled.ul`
  width: 23rem;
  max-height: 28rem;
  overflow: hidden;
  overflow-y: auto;
`;

const StyledAlarmMenuItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.6rem;
  gap: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};

  &:last-child {
    border: none;
  }
  &:hover {
    background: ${({ theme }) => theme.colors.gray[50]};
  }

  & > div {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
`;

const StyledAlarmText = styled.p`
  margin-bottom: 0.4rem;
  white-space: nowrap;
  font: ${({ theme }) => theme.fonts['pretendard/md-14px-regular']};
  color: ${({ theme }) => theme.colors.gray[900]};
`;

const StyledAlarmTime = styled.p`
  font: ${({ theme }) => theme.fonts['pretendard/xs-12px-regular']};
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const StyledNoAlarms = styled.div`
  padding: 1rem 1.6rem;
  text-align: center;
  font: ${({ theme }) => theme.fonts['pretendard/md-14px-regular']};
  color: ${({ theme }) => theme.colors.gray[600]};
`;

export default NotificationsDropdown;
