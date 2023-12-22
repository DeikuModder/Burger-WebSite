import useProvider from "@/providers/DataProvider/useProvider";

const useBurgerApi = () => {
  const useData = useProvider();
  const { apiData, userData, setUserData } = useData;

  return {
    apiData,
    userData,
    setUserData,
  };
};

export default useBurgerApi;
