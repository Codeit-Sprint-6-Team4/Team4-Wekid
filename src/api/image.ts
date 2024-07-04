import { AxiosError } from 'axios';
import Cookies from 'js-cookie';
import instance from './axios';

interface UploadImageResponse {
  url: string;
}

export const uploadImage = async (file: File): Promise<string> => {
  const URL = '/images/upload';
  try {
    const formData = new FormData();
    formData.append('file', file);

    const token = Cookies.get('accessToken');
    const headers: Record<string, string> = {};

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const response = await instance.post<UploadImageResponse>(URL, formData, {
      headers,
    });
    return response.data.url;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('Response error:', error.response?.status);
      console.error('Response data:', error.response?.data);
      throw error;
    } else {
      console.error('Error uploading image:', error);
      throw error;
    }
  }
};
