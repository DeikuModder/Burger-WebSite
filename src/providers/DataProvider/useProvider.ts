import { useContext } from "react";
import { DataContext } from "./DataProvider";

const useProvider = () => {
  return useContext(DataContext);
};

export default useProvider;
