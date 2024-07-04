import { AxiosError } from 'axios';
import Cookies from 'js-cookie';
import instance from './axios';

interface UploadImageResponse {
  url: string;
}

export const uploadImage = async (file: File): Promise<string> => {
  const URL = '/images/upload';
  const formData = new FormData();
  formData.append('file', file);

  for (const [key, value] of formData.entries()) {
    console.log(`${key}:`, value);
  }

  const token = Cookies.get('accessToken');
  const headers: Record<string, string> = token
    ? { Authorization: `Bearer ${token}` }
    : {};

  try {
    const response = await instance.post<UploadImageResponse>(URL, formData, {
      headers,
    });
    console.log('Server response:', response.data);
    return response.data.url;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('Axios error occurred:', {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
        headers: error.response?.headers,
        config: error.config,
      });
    } else {
      console.error('Unexpected error occurred:', error);
    }
    throw error;
  }
};
