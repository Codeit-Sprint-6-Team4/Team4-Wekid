import { AxiosError } from 'axios';
import Cookies from 'js-cookie';
import axios from './axios';
import instance from './axios';

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

export const fetchArticle = async (articleId: string) => {
  const URL = `/articles/${articleId}`;
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

export const patchArticle = async (articleId: string, data: any) => {
  const URL = `/articles/${articleId}`;
  try {
    const token = Cookies.get('accessToken');
    console.log('Using Access Token:', token); // 토큰 확인
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    console.log('Request Headers:', headers); // 헤더 확인

    const response = await instance.patch(URL, data, { headers });
    console.log('Response status:', response.status);
    console.log('Response data:', response.data);
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

export const deleteArticle = async (articleId: string) => {
  const URL = `/articles/${articleId}`;
  try {
    const token = Cookies.get('accessToken');
    console.log('Using Access Token:', token); // 토큰 확인
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    console.log('Request Headers:', headers); // 헤더 확인

    const response = await instance.delete(URL, { headers });
    console.log('Response status:', response.status);
    console.log('Response data:', response.data);
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

export const postArticleLike = async (articleId: string) => {
  const URL = `/articles/${articleId}/like`;
  try {
    const token = Cookies.get('accessToken');
    console.log('Using Access Token:', token); // 토큰 확인
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    console.log('Request Headers:', headers); // 헤더 확인

    const response = await instance.post(URL, {}, { headers });
    console.log('Response status:', response.status);
    console.log('Response data:', response.data);
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

export const deleteArticleLike = async (articleId: string) => {
  const URL = `/articles/${articleId}/like`;
  try {
    const token = Cookies.get('accessToken');
    console.log('Using Access Token:', token); // 토큰 확인
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    console.log('Request Headers:', headers); // 헤더 확인

    const response = await instance.delete(URL, { headers });
    console.log('Response status:', response.status);
    console.log('Response data:', response.data);
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
