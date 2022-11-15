import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';

export default function useGetAccounts() {
  const [pageNum, setPageNum] = useState(1);
  const { data: accountsPerPage } = useQuery(['accounts', pageNum], () =>
    fetchData('accounts', pageNum)
  );
  return { accountsPerPage, setPageNum, pageNum };
}
