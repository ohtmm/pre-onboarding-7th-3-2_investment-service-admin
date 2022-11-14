import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import fetchData from '../api/api';

export default function useGetData(query) {
  const [db, setDb] = useState([]);
  const { data, isError, isLoading, isSuccess } = useQuery(
    ['db', query],
    () => {
      fetchData(query);
    }
  );
  useEffect(() => {
    setDb(data);
  }, []);
  return { db };
}
