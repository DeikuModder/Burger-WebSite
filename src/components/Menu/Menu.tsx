import useBurgerApi from "@/hooks/useBurgerApi";
import BurgerImage from "@/assets/grill-ride-burger.webp";
import DoubleGrillImage from "@/assets/double-grill.webp";
import ChickenBurgerImage from "@/assets/chicken-burger.webp";
import BurgerCard from "./BurgerCard";
import "@/styles/components/_menu.scss";

const Menu = () => {
  const { apiData } = useBurgerApi();

  const burgerImages: string[] = [
    BurgerImage,
    DoubleGrillImage,
    ChickenBurgerImage,
  ];

  return (
    <section id="menu">
      <ul>
        {apiData[0] &&
          apiData.map((burger, index) => {
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
