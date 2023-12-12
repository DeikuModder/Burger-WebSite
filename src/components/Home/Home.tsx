import "@/styles/components/_home.scss";
import Welcome from "./sections/Welcome";
import Promos from "./sections/Promos";
import Menu from "./sections/Menu";

const Home = () => {
  return (
    <>
      <Welcome />
      <Promos />
      <Menu />
    </>
  );
};

export default Home;
