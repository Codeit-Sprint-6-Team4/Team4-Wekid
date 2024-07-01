import axios from './axios';

export const getArticles = async (page = 1, pageSize = 10, orderBy = 'recent', keyword = '') => {
  const params = {
    page,
    pageSize,
    orderBy,
    keyword
  };
  return axios.get(`/articles`, { params });
};