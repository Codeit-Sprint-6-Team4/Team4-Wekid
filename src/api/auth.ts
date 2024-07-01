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
    // Cookies,set('accessToken', response)
  } catch (error) {
    const err = error as AxiosError;
    if (err.response) {
      console.error('Response error:', err.response.status);
      console.error('Response data:', err.response.data);
      throw err;
      console.error(error);
      throw error;
    }
  }
};

export const patchPassword = async (passwordData: {
  currentPassword: string;
  newPassword: string;
  passwordConfirmation: string;
}) => {
  const URL = '/users/me/password';
  try {
    const token = Cookies.get('accessToken');
    console.log('Using Access Token:', token);
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    console.log('Request Headers:', headers);

    const res = await instance.patch(URL, passwordData, { headers });
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('Response error:', error.response?.status);
      console.error('Response data:', error.response?.data);
      throw error;
    } else {
      console.error('Error patching password:', error);
      throw error;
    }
  }
};

export const updateSecurityQuestion = async (
  securityQuestion: string,
  securityAnswer: string,
) => {
  const URL = '/profile';
  try {
    const token = Cookies.get('accessToken');
    console.log('Using Access Token:', token);
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    console.log('Request Headers:', headers);

    const response = await instance.post(
      URL,
      { securityQuestion, securityAnswer },
      { headers },
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('Response error:', error.response?.status);
      console.error('Response data:', error.response?.data);
      throw error;
    } else {
      console.error('Error updating security question:', error);
      throw error;
    }
  }
};
