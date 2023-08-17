import axiosInstance from './apiConfig';

const token = JSON.parse(localStorage.getItem('user'));

export default function invokeInterceptor() {
  return axiosInstance.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${token}`;

      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
}
