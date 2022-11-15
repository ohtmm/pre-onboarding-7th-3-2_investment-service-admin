import axios from 'axios';

const fetchData = async (query, pageNum) => {
  if (pageNum) {
    const response = await axios.get(
      `http://localhost:4000/${query}?_page=${pageNum}&_limit=10`
    );
    return response.data;
  }
  const response = await axios.get(`http://localhost:4000/${query}`);
  return response.data;
};

export default fetchData;
