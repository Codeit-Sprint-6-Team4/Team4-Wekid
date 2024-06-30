import axios, { AxiosError } from 'axios';
import Cookies from 'js-cookie';
import { postRefreshToken } from '@api/auth';

const instance = axios.create({
  baseURL: process.env.VITE_API,
});

instance.interceptors.request.use(
  (config) => {
    const token = Cookies.get('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log('instance요청:', config);
    return config;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config;
    console.error('instance요청에러', error);
    if (typeof originalRequest !== 'undefined') {
      if (error.response?.status === 401) {
        console.log('instance리프레쉬토큰 시도');
        try {
          await postRefreshToken();
          return instance.request(originalRequest);
        } catch (refreshError) {
          console.error('instance리프레쉬토큰 실패', refreshError);
          throw refreshError;
        }
      }
    }
    // 요청이 실패할 경우 실행됩니다.
    return Promise.reject(error);
  },
);

export default instance;
