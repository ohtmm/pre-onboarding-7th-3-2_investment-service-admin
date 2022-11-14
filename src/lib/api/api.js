import axios from 'axios';

const fetchData = async (query) => {
  const response = await axios.get(`http://localhost:4000/${query}`);
  return response.data;
};

export default fetchData;
