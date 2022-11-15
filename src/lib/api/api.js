import axios from 'axios';

export const PAGE_LIMIT = 10;

const fetchData = async (query, pageNum) => {
  if (pageNum) {
    const response = await axios.get(
      `http://localhost:4000/${query}?_page=${pageNum}&_limit=${PAGE_LIMIT}`
    );
    return response.data;
  }
  const response = await axios.get(`http://localhost:4000/${query}`);
  return response.data;
};

export default fetchData;
