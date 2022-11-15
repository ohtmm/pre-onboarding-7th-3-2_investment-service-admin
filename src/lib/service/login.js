import Router from 'next/router';
import { instance } from '../api/api';

const login = async (inputValue) => {
  try {
    const { data } = await instance.post('/login', inputValue);
    if (data.accessToken) {
      Router.push('/accounts');
    }
  } catch (error) {
    console.log(error);
  }
};

export default login;
