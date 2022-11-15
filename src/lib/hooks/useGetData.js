import { useQuery } from '@tanstack/react-query';
import fetchData from '../api/api';

export default function useGetData(query) {
  const { data } = useQuery(['db', query], () => fetchData(query));
  return { data };
}
