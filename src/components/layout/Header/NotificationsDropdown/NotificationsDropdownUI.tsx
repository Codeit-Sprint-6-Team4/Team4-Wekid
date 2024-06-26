import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';
import AlarmImg from '@assets/icons/icon-alarm.svg';
import DeleteIcon from '@assets/icons/icon-close.svg';
import HeaderDropdown from '../HeaderDropdown/HeaderDropdownUI';
import {
  StyledAlarmTotalCount,
  StyledAlarmMenu,
  StyledAlarmMenuItem,
  StyledAlarmText,
  StyledAlarmTime,
  StyledNoAlarms,
} from './NotificationsDropdownUI.styled';

interface AlarmItem {
  createdAt: string;
  content: string;
  id: number;
}

interface AlarmsData {
  totalCount: number;
  list: AlarmItem[];
}

interface NotificationsDropdownUIProps {
  isOpen: boolean;
  handleToggleDropdown: () => void;
  alarms: AlarmsData;
  handleDeleteAlarm: (id: number) => void;
  dropdownRef: React.Ref<HTMLDivElement>; // ref prop 추가
}

const NotificationsDropdownUI: React.FC<NotificationsDropdownUIProps> = ({
  isOpen,
  handleToggleDropdown,
  alarms,
  handleDeleteAlarm,
  dropdownRef,
}) => {
  return (
    <HeaderDropdown
      isOpen={isOpen}
      handleToggleDropdown={handleToggleDropdown}
      buttonIcon={AlarmImg}
      buttonIconAlt="알림"
      ref={dropdownRef} // ref 전달
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

export default NotificationsDropdownUI;
