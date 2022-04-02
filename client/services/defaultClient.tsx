// library
import axios from 'axios';

export const baseURL = 'http://localhost:3065';
export const nameSpace = '';

const initAxios = () => {
  // if (typeof localStorage !== 'undefined') {
  //   if (localStorage) {
  //     const localToken = localStorage.getItem('userToken');

  //     if (localToken) {
  //       axios.defaults.headers.common = {
  //         Authorization: `Bearer ${localToken}`,
  //       };
  //     }
  //   }
  // }

  const defaultClient = axios.create({
    baseURL,
  });

  return defaultClient;
};

export default initAxios;
