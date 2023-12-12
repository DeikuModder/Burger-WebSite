import { useEffect, useState } from "react";

const useFetch = <T>(url: string): T => {
  const [data, setData] = useState({} as T);

  useEffect(() => {
    const fetchApi = async (url: string) => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        setData(data as T);
      } catch (error) {
        setData({} as T);
        console.error(error);
      }
    };

    fetchApi(url);
  }, [url]);

  return data;
};

export default useFetch;
