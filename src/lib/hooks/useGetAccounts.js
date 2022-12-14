import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import fetchData, { PAGE_LIMIT } from '../api/api';

let ACCOUNTS_LENGTH = null;
export let MAX_PAGE = null;
fetchData('accounts')
  .then((data) => (ACCOUNTS_LENGTH = data.length))
  .then(() => {
    MAX_PAGE = Math.ceil(ACCOUNTS_LENGTH / PAGE_LIMIT);
  });

export default function useGetAccounts() {
  const [pageNum, setPageNum] = useState(1);
  const { data: accountsPerPage } = useQuery(['accounts', pageNum], () =>
    fetchData('accounts', pageNum)
  );
  return { accountsPerPage, setPageNum, pageNum };
}
