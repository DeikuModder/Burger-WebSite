import { Route, Routes } from "react-router-dom";
import Home from "@/components/Home/Home";
import Menu from "@/components/Menu/Menu";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Login from "@/components/Login/Login";
import Dashboard from "@/components/Dashboard/Dashboard";
import NotFound from "@/components/NotFound/NotFound";
import useBurgerApi from "@/hooks/useBurgerApi";
import Loader from "./Loader/Loader";

const AppContent = () => {
  const { isLoading } = useBurgerApi();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
};

export default AppContent;
