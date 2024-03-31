import useBurgerApi from "@/hooks/useBurgerApi";
import Loader from "./Loader/Loader";
import Header from "./Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Menu from "./Menu/Menu";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import NotFound from "./NotFound/NotFound";

const AppContent = () => {
  const { isLoading } = useBurgerApi();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header
            backgroundColor="bg-neutral-900"
            textColor="text-neutral-100"
          />
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
