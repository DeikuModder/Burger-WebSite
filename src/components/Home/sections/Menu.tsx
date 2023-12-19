import useBurgerApi from "@/hooks/useBurgerApi";
import BurgerImage from "@/assets/grill-ride-burger.webp";
import DoubleGrillImage from "@/assets/double-grill.webp";
import ChickenBurgerImage from "@/assets/chicken-burger.webp";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { BurgerInterface } from "../../../types";
import BurgerCard from "@/components/Menu/BurgerCard";

const Menu = () => {
  const { apiData } = useBurgerApi();

  const firstThreeBurgers: BurgerInterface[] = [
    apiData[0],
    apiData[1],
    apiData[2],
  ];
  const burgerImages: string[] = [
    BurgerImage,
    DoubleGrillImage,
    ChickenBurgerImage,
  ];

  return (
    <section id="menuSneakPeek">
      <Link
        to={"/menu"}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          fontSize: "2.5rem",
          backgroundColor: "#1b1b1bc9",
          marginBottom: 32,
          padding: 8,
        }}
      >
        <h3>Menu 📑 </h3>
        <FontAwesomeIcon icon={faArrowRight} />
      </Link>
      <ul>
        {firstThreeBurgers[0] &&
          firstThreeBurgers.map((burger, index) => {
            return (
              <BurgerCard
                key={burger.name}
                image={burgerImages[index]}
                name={burger.name.replace("_", " ")}
                price={burger.price}
                ingredients={burger.ingredients}
              />
            );
          })}
      </ul>
    </section>
  );
};

export default Menu;
