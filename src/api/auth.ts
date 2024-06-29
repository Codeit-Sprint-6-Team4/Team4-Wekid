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

export const patchPassword = async (passwordData: {
  currentPassword: string;
  newPassword: string;
  passwordConfirmation: string;
}) => {
  const URL = '/users/me/password';
  try {
    const res = await instance.patch(URL, passwordData);
    return res.data;
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
