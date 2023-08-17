import axiosInstance from '../apiConfig';
//  AuthService использую для HTTP запроса. Также получает и хранит JWT

export default async function authService(email, password) {
  return await axiosInstance
    .post('auth/login', {
      email: email,
      password: password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data.token));
      }

      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}
