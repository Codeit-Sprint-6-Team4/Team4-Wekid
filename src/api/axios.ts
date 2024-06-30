import axios, { AxiosError } from 'axios';
import Cookies from 'js-cookie';
import { postRefreshToken } from './auth';

const API_KEY = import.meta.env.VITE_API;

const instance = axios.create({
  baseURL: API_KEY,
});

instance.interceptors.request.use(
  (config) => {
    const token = Cookies.get('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config;
    if (typeof originalRequest !== 'undefined') {
      if (error.response?.status === 401) {
        await postRefreshToken();
        return instance.request(originalRequest);
      }
    }
    // 요청이 실패할 경우 실행됩니다.
    return Promise.reject(error);
  },
);

export default instance;
