import { instance } from '../api/api';

const signup = async (inputValue) => {
  try {
    const { data } = await instance.post('/signup', inputValue);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export default signup;
