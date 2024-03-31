import useBurgerApi from "@/hooks/useBurgerApi";
import { Navigate } from "react-router-dom";
import CreateBurger from "./Modal/CreateBurger";
import GetBurgerId from "./Modal/GetBurgerId";
import EditBurger from "./Modal/EditBurger";
import DeleteBurger from "./Modal/DeleteBurger";
import Cheese from "../../assets/linea-grafica-grill-burguer_03.webp";
import Chicken from "../../assets/linea-grafica-grill-burguer_01.webp";
import Double from "../../assets/linea-grafica-grill-burguer_04.webp";
import Veggie from "../../assets/linea-grafica-grill-burguer_06.webp";
import Item from "../Menu/Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const { isAuthenticated, userData, apiData, handleLogout } = useBurgerApi();

  const menuImages = [Cheese, Chicken, Double, Veggie];

  return (
    <section
      style={{ minHeight: "calc(100dvh - 90px)" }}
      className="flex flex-col justify-center items-center gap-2 p-4 sm:flex-row sm:items-start"
    >
      {isAuthenticated ? (
        <>
          <div className="w-full h-[100px] bg-neutral-200 rounded-xl p-2 text-2xl font-bold sm:w-[300px]">
            <p>Welcome back, {userData.username} 👋</p>
            <button onClick={handleLogout}>
              <FontAwesomeIcon icon={faSignOut} />{" "}
              <span className="font-normal">Logout</span>
            </button>
          </div>
          <div className="w-full h-fit bg-neutral-200 rounded-xl p-2 flex flex-col justify-center items-center gap-4 sm:w-[300px]">
            <CreateBurger />
            <GetBurgerId />
            <EditBurger />
            <DeleteBurger />
          </div>
          <div className="w-full max-h-[650px] bg-neutral-200 rounded-xl p-2 flex flex-col overflow-auto sm:w-[650px]">
            <h3 className="text-2xl text-center font-bold">Entries created:</h3>
            <div className="justify-center flex flex-wrap gap-8">
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
          </div>
        </>
      ) : (
        <Navigate to={"/login"} replace={true} />
      )}
    </section>
  );
};

export default Dashboard;
