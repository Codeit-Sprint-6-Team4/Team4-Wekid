import React, { useState } from 'react';
import useHeaderDropdown from '@hooks/useHeaderDropdown';
import NotificationsDropdownUI from './NotificationsDropdownUI';

interface AlarmItem {
  createdAt: string;
  content: string;
  id: number;
}

interface AlarmsData {
  totalCount: number;
  list: AlarmItem[];
}

const NotificationsDropdownContainer: React.FC = () => {
  const { isOpen, handleToggleDropdown, dropdownRef } = useHeaderDropdown();
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
    <NotificationsDropdownUI
      isOpen={isOpen}
      handleToggleDropdown={handleToggleDropdown}
      alarms={alarms}
      handleDeleteAlarm={handleDeleteAlarm}
      dropdownRef={dropdownRef} // ref 전달
    />
  );
};

export default NotificationsDropdownContainer;
