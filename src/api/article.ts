import { AxiosError } from 'axios';
import Cookies from 'js-cookie';
import instance from './axios';
import axios from './axios';

export const getArticles = async (
  page = 1,
  pageSize = 10,
  orderBy = 'recent',
  keyword = '',
) => {
  const params = {
    page,
    pageSize,
    orderBy,
    keyword,
  };
  return axios.get(`/articles`, { params });
};

export const postArticle = async (payload: {
  content: string;
  title: string;
}) => {
  const URL = '/articles';
  try {
    const token = Cookies.get('accessToken');
    console.log('Using Access Token:', token);
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    console.log('Request Headers:', headers);

    const response = await instance.post(URL, payload, { headers });
    return response.data;
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
