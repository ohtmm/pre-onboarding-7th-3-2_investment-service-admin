import { useQuery } from '@tanstack/react-query';
import fetchData from '../api/api';

export default function useGetAccounts(pageNum) {
  const { data } = useQuery(['db', 'accounts'], () =>
    fetchData('accounts', pageNum)
  );
  return { data };
}
