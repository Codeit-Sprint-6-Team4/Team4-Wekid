import React, { useState, useEffect } from 'react';
import useHeaderDropdown from '@hooks/useHeaderDropdown';
import NotificationsDropdownUI from './NotificationsDropdownUI';
import { getNotifications, deleteNotification, AlarmsData } from '@api/notification';

const NotificationsDropdownContainer: React.FC = () => {
  const { isOpen, handleToggleDropdown, dropdownRef } = useHeaderDropdown();
  const [alarms, setAlarms] = useState<AlarmsData>({
    totalCount: 0,
    list: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNotifications(1, 10); // 예시로 1페이지, 10개씩 가져오기
        setAlarms(data);
      } catch (error) {
        console.error('Failed to fetch notifications:', error);
      }
    };

    fetchData();
  }, []);

  const handleDeleteAlarm = async (id: number) => {
    try {
      await deleteNotification(id);
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
