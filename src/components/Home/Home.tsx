import Menu from "./sections/Menu";
import Promotions from "./sections/Promotions";
import Welcome from "./sections/Welcome";

const Home = () => {
  return (
    <>
      <Welcome />
      <Promotions />
      <Menu />
    </>
  );
};

export default Home;
