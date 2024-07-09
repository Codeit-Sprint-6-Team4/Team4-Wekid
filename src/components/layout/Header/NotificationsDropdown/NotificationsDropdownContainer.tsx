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

  const fetchNotifications = async () => {
    try {
      const data = await getNotifications(1, 10);
      setAlarms(data);
    } catch (error) {
      console.error('Failed to fetch notifications:', error);
    }
  };

  useEffect(() => {
    fetchNotifications();

    const intervalId = setInterval(fetchNotifications, 300000); // 5분마다 데이터 갱신

    return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 인터벌 제거
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
      dropdownRef={dropdownRef}
    />
  );
};

export default NotificationsDropdownContainer;
