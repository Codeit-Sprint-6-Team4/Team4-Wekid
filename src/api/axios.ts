import axios, { AxiosError, AxiosRequestConfig } from 'axios';
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
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean;
    };

    interface ErrorResponseData {
      message?: string;
    }

    const responseData = error.response?.data as ErrorResponseData;

    if (
      error.response?.status === 401 &&
      responseData?.message === 'jwt expired' &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const newToken = await postRefreshToken();
        if (newToken) {
          originalRequest.headers = {
            ...originalRequest.headers,
            Authorization: `Bearer ${newToken}`,
          };
          return instance(originalRequest);
        }
      } catch (refreshError) {
        console.error('Failed to refresh token:', refreshError);
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);
export default instance;
