import useBurgerApi from "@/hooks/useBurgerApi";
import BurgerImage from "@/assets/grill-ride-burger.webp";
import { Link } from "react-router-dom";

interface BurgerCard {
  name: string;
  price: number;
  ingredients: string[];
}

const BurgerCard: React.FC<BurgerCard> = ({ name, price, ingredients }) => {
  return (
    <li>
      <div className="burgerCard">
        <div className="upwardContainer" style={{ height: "70%" }}>
          <img
            src={BurgerImage}
            alt="burger"
            loading="lazy"
            style={{ width: "100%" }}
          />
        </div>
        <div
          className="downwardContainer"
          style={{ width: "100%", height: "30%" }}
        >
          <h3>{name}</h3>
          <p style={{ fontSize: "1.2rem" }}>{price}$</p>
          <p
            style={{
              width: "100%",
              textAlign: "center",
              fontWeight: 300,
              fontSize: ".95rem",
            }}
          >
            {ingredients.join(", ").replace("_", " ")}
          </p>
        </div>
      </div>
    </li>
  );
};

const Menu = () => {
  const { apiData } = useBurgerApi();

  const firstThreeBurgers = [apiData[0], apiData[1], apiData[2]];

  console.log(firstThreeBurgers);

  return (
    <section id="menuSneakPeek">
      <Link to={"/menu"}>
        <h3
          style={{
            fontSize: "2.5rem",
            backgroundColor: "#1b1b1bc9",
            marginBottom: 32,
            padding: 8,
          }}
        >
          Menu
        </h3>
      </Link>
      <ul>
        {firstThreeBurgers[0] &&
          firstThreeBurgers.map((burger) => {
            return (
              <BurgerCard
                key={burger.name}
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
