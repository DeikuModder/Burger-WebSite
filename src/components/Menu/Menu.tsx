import Cheese from "../../assets/linea-grafica-grill-burguer_03.webp";
import Chicken from "../../assets/linea-grafica-grill-burguer_01.webp";
import Double from "../../assets/linea-grafica-grill-burguer_04.webp";
import Veggie from "../../assets/linea-grafica-grill-burguer_06.webp";
import useBurgerApi from "@/hooks/useBurgerApi";
import Item from "./Item";

const Menu = () => {
  const { apiData } = useBurgerApi();

  const menuImages = [Cheese, Chicken, Double, Veggie];

  return (
    <section className="p-2 flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold sm:text-5xl">Our menu</h2>
      <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap sm:gap-12">
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
    </section>
  );
};

export default Menu;
