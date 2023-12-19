import { BurgerCard } from "@/src/types";

const BurgerCard: React.FC<BurgerCard> = ({
  name,
  price,
  ingredients,
  image,
}) => {
  return (
    <li>
      <div className="burgerCard">
        <div className="upwardContainer" style={{ height: "70%" }}>
          <img
            src={image}
            alt="burger"
            loading="lazy"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div
          className="downwardContainer"
          style={{ width: "100%", height: "30%", padding: 4 }}
        >
          <h3>{name} 🍔 </h3>
          <p style={{ fontSize: "1.2rem" }}>{price}$</p>
          <p
            style={{
              width: "100%",
              textAlign: "center",
              fontWeight: 300,
              fontSize: ".95rem",
            }}
          >
            {ingredients.join(", ").replace(/_+/g, " ")}
          </p>
        </div>
      </div>
    </li>
  );
};

export default BurgerCard;
