import axios from 'axios';

const token = JSON.parse(localStorage.getItem('user'));

const axiosInstance = axios.create({
  baseURL: 'https://api.fit-meetups.ru/',
});

if (token) {
  axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}

export default axiosInstance;
