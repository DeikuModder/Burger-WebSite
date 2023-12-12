import React from "react";
import { ProviderParams } from "./types";
import useFetch from "@/utils/useFetch";
import { BurgerInterface } from "../../types";

export const DataContext = React.createContext(
  {} as ReturnType<typeof useData>
);

const useData = (url: string) => {
  const apiData = useFetch<BurgerInterface[]>(url);

  return {
    apiData,
  };
};

const DataProvider: React.FC<ProviderParams> = ({ children, url }) => {
  return (
    <DataContext.Provider value={useData(url)}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
