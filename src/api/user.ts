import axios, { AxiosError } from 'axios';
import Cookies from 'js-cookie';
import instance from './axios';

export const getUserMe = async (accessToken: string | undefined) => {
  const URL = '/users/me';

  console.log(accessToken);

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  };
  try {
    const response = await instance.get(URL, config);
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
