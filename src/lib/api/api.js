import axios from 'axios';

export const PAGE_LIMIT = 10;

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API,
});

const fetchData = async (query, pageNum) => {
  if (pageNum) {
    const response = await instance.get(
      `/${query}?_page=${pageNum}&_limit=${PAGE_LIMIT}`
    );
    return response.data;
  }
  const response = await axios.get(`/${query}`);
  return response.data;
};

export default fetchData;
