"use client";

import { useEffect, useState } from "react";

interface Props {
  endpoint: string;
}

type Error = {
  hasError: boolean;
  message: unknown;
};

const useApi = ({ endpoint }: Props) => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>({ hasError: false, message: null });
  const [limit] = useState(8);
  const [page, setPage] = useState(1);

  const fetchClients = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        `http://localhost:3000/api/${endpoint}?limit=${limit}&page=${page}`,
      );
      const data = await res.json();
      setData(data.data);
      setTotal(data.total);
    } catch (error) {
      setError({ hasError: true, message: error });
      console.log("Failed to load clients: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, [page]);

  return {
    data,
    total,
    loading,
    error,
    limit,
    page,
    setPage,
  };
};

export default useApi;
