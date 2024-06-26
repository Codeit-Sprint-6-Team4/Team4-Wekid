import { AxiosError } from 'axios';
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
