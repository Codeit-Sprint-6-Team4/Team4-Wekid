import axios, { AxiosError } from 'axios';
import instance from './axios';

export interface userType {
  profile: {
    code: string | null;
    id: number | null;
  };
  updatedAt: string;
  createdAt: string;
  teamId: string;
  name: string;
  id: number;
}

export const getUserMe = async (accessToken: string | undefined) => {
  const URL = '/users/me';
  //유저의 계정을 설정해야지 받아올 수 있습니다.
  try {
    if (accessToken) {
      const response = await instance.get(URL);
      return response.data;
    } else {
      {
        throw new Error('AccessToken이 없습니다.');
      }
    }
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
