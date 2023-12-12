import useProvider from "@/providers/DataProvider/useProvider";

const useBurgerApi = () => {
  const useData = useProvider();
  const { apiData } = useData;

  return {
    apiData,
  };
};

export default useBurgerApi;
