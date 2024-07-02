import axios, { AxiosError } from 'axios';
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
    // Cookies,set('accessToken', response)
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
