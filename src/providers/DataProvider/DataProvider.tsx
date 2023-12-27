import React, { useEffect, useState } from "react";
import { ProviderParams } from "./types";
import useFetch from "@/utils/useFetch";
import { BurgerInterface, Logeduser } from "@/src/types";

export const DataContext = React.createContext(
  {} as ReturnType<typeof useData>
);

const useData = (url: string) => {
  const apiData = useFetch<BurgerInterface[]>(url);
  const [userData, setUserData] = useState({} as Logeduser);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
    window.localStorage.removeItem("LoggedUser");
  };

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("LoggedUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUserData(user);
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return {
    apiData,
    userData,
    setUserData,
    isAuthenticated,
    setIsAuthenticated,
    handleLogout,
  };
};

const DataProvider: React.FC<ProviderParams> = ({ children, url }) => {
  return (
    <DataContext.Provider value={useData(url)}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
