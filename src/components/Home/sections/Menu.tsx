import useBurgerApi from "@/hooks/useBurgerApi";
import Cheese from "../../../assets/linea-grafica-grill-burguer_03.webp";
import Chicken from "../../../assets/linea-grafica-grill-burguer_01.webp";
import Double from "../../../assets/linea-grafica-grill-burguer_04.webp";
import Item from "@/components/Menu/Item";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Menu = () => {
  const { apiData } = useBurgerApi();

  const menuImages = [Cheese, Chicken, Double];

  return (
    <section className="flex flex-col justify-center items-center gap-8 p-2">
      <h2 className="text-2xl font-bold sm:text-5xl">Our classic products!</h2>

      <div className="sm:flex sm:flex-wrap sm:gap-12">
        {Object.keys(apiData).length > 0 &&
          menuImages.map((burgerImg, index) => {
            return (
              <Item
                image={burgerImg}
                title={apiData[index].name}
                price={apiData[index].price}
                ingredients={apiData[index].ingredients}
                key={`menu-${index}`}
              />
            );
          })}
      </div>

      <Link
        to={"/menu"}
        className="p-2 bg-red-700 text-neutral-200 border text-2xl font-bold border-neutral-200 rounded-xl sm:text-4xl"
      >
        <FontAwesomeIcon icon={faArrowAltCircleRight} /> Check the menu!
      </Link>
    </section>
  );
};

export default Menu;
