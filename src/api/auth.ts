import { AxiosError } from 'axios';
import Cookies from 'js-cookie';
import { logInDataTypes } from '@pages/SignIn/components/SignInContainer';
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

export const postSignIn = async (userData: logInDataTypes) => {
  const URL = '/auth/signIn';
  try {
    const response = await instance.post(URL, userData);
    console.log(response);
    Cookies.set('accessToken', response.data.accessToken);
    Cookies.set('refreshToken', response.data.refreshToken);
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

export const postRefreshToken = async () => {
  const URL = '/auth/refresh-token';
  const refreshToken = Cookies.get('refreshToken');
  if (!refreshToken) {
    throw new Error('리프레쉬토큰을 사용할 수 없음');
  }
  try {
    console.log('리프레쉬 시도');
    const response = await instance.post(URL, { refreshToken: refreshToken });
    const newAccessToken = response.data.accessToken;
    Cookies.set('accessToken', newAccessToken);
    console.log('리프레쉬성공 새엑세스토큰:', newAccessToken);
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
