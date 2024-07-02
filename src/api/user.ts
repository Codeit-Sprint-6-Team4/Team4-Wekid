import axios, { AxiosError } from 'axios';
import Cookies from 'js-cookie';
import instance from './axios';

export const getUserMe = async (accessToken: string | undefined) => {
  const URL = '/users/me';

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  try {
    if (accessToken) {
      const response = await instance.get(URL, config);
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
