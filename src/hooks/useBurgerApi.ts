import useProvider from "@/providers/DataProvider/useProvider";

const useBurgerApi = () => {
  const useData = useProvider();
  const {
    apiData,
    userData,
    setUserData,
    isAuthenticated,
    setIsAuthenticated,
    handleLogout,
    isLoading,
  } = useData;

  return {
    apiData,
    userData,
    setUserData,
    isAuthenticated,
    setIsAuthenticated,
    handleLogout,
    isLoading,
  };
};

export default useBurgerApi;
