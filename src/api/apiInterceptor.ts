import { AxiosError, AxiosInstance } from 'axios';

const setInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      console.log('interceptor > error', error);
      return Promise.reject(error);
    },
  );

  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error: AxiosError) => {
      console.log('interceptor > error', error);
      Promise.reject(error);
    },
  );

  return instance;
};

export default setInterceptors;
