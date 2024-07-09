import { AxiosError, AxiosResponse } from 'axios';
import instance from './axios';

export interface AlarmItem {
  createdAt: string;
  content: string;
  id: number;
}

export interface AlarmsData {
  totalCount: number;
  list: AlarmItem[];
}

export const getNotifications = async (
  page: number,
  pageSize: number
): Promise<AlarmsData> => {
  const URL = `/notifications`;
  try {
    const response: AxiosResponse<AlarmsData> = await instance.get(URL, {
      params: {
        page,
        pageSize,
      },
    });
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    if (err.response) {
      console.error('Response error:', err.response.status);
      console.error('Response data:', err.response.data);
      throw err;
    }
    console.error(error);
    throw error;
  }
};

export const deleteNotification = async (notificationId: number): Promise<void> => {
  const URL = `/notifications/${notificationId}`;
  try {
    await instance.delete(URL);
  } catch (error) {
    const err = error as AxiosError;
    if (err.response) {
      console.error('Response error:', err.response.status);
      console.error('Response data:', err.response.data);
      throw err;
    }
    console.error(error);
    throw error;
  }
};
