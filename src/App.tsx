import { Route, Routes } from "react-router-dom";
import Home from "@/components/Home/Home";
import Menu from "@/components/Menu/Menu";
import Header from "@/components/Header/Header";
import DataProvider from "./providers/DataProvider/DataProvider";
import Footer from "@/components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";

function App() {
  return (
    <DataProvider url="https://burger-app-api-seven.vercel.app/api/v1/burgers">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </DataProvider>
  );
}

export default App;
