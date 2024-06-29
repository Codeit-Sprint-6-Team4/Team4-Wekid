import { AxiosError } from 'axios';
import Cookies from 'js-cookie';
import { userDataTypes } from '@pages/SignUp/components/SignUpContainer';
import instance from './axios';

export const postSignUp = async (userData: userDataTypes) => {
  const URL = '/auth/signUp';
  try {
    await instance.post(URL, userData);
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

export const refreshAccessToken = async () => {
  const URL = '/auth/refresh';
  const refreshToken = Cookies.get('refreshToken');
  if (!refreshToken) {
    throw new Error('리프레쉬토큰을 사용할 수 없음');
  }
  try {
    const response = await instance.post(URL, { refreshToken: refreshToken });
    Cookies.set('accessToken', response.data.accessToken);
    return response.data.accessToken;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('Response error:', error.response?.status);
      console.error('Response data:', error.response?.data);
      throw error;
    }
    console.error(error);
    throw error;
  }
};
