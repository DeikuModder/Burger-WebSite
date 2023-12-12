import { Route, Routes } from "react-router-dom";
import Home from "@/components/Home/Home";
import Menu from "@/components/Menu/Menu";
import Header from "@/components/Header/Header";
import DataProvider from "./providers/DataProvider/DataProvider";

function App() {
  return (
    <DataProvider url="https://burger-app-api-seven.vercel.app/api/v1/burgers">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </DataProvider>
  );
}

export default App;
