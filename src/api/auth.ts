import { AxiosError, AxiosResponse } from 'axios';
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
    window.location.href = '/login';
    return;
  }
  try {
    const response: AxiosResponse<{ accessToken: string }> =
      await instance.post(URL, { refreshToken: refreshToken });
    const newAccessToken = response.data.accessToken;
    if (newAccessToken) {
      Cookies.set('accessToken', newAccessToken);
      return newAccessToken;
    } else {
      console.error('새 액세스토큰을 받지 못함');
      window.location.href = '/login';
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('Response error:', error.response?.status);
      console.error('Response data:', error.response?.data);
      window.location.href = '/login';
      throw error;
    }
    console.error(error);
    window.location.href = '/login';
    throw error;
  }
};
