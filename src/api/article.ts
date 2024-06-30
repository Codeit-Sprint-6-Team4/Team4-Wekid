import { AxiosError } from 'axios';
import instance from './axios';

export const fetchArticle = async (id: string) => {
  const URL = `/articles/${id}`;
  try {
    const response = await instance.get(URL);
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
