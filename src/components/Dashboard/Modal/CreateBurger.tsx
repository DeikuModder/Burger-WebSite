import useBurgerApi from "@/hooks/useBurgerApi";
import { BurgerInterface } from "@/src/types";
import { useState, FormEventHandler } from "react";
import ModalWindow from "./ModalWindow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const CreateBurger = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [message, setMessage] = useState("");
  const { userData } = useBurgerApi();

  const BurgerObject: BurgerInterface = {
    name: name,
    price: parseFloat(price),
    ingredients: ingredients.split(",").map((ingredient) => ingredient.trim()),
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    fetch("https://burger-app-api-seven.vercel.app/api/v1/burgers", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${userData.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(BurgerObject),
    })
      .then((res) => {
        if (res.ok) {
          setMessage("Succesfully created!");
        } else {
          setMessage("Couldn't create burger");
        }
      })
      .catch((error) => setMessage(`An error has occured ${error}`));
  };

  return (
    <ModalWindow
      openButtonContent={
        <div className="w-[160px] border border-neutral-700 text-neutral-700 p-2 rounded-xl text-lg font-bold">
          <FontAwesomeIcon icon={faCirclePlus} /> Create Burger
        </div>
      }
    >
      <>
        <form
          name="New Burger"
          onSubmit={handleSubmit}
          className="h-full flex justify-center items-center"
        >
          <fieldset className="flex flex-col items-center justify-center gap-4">
            <legend className="text-xl font-bold">Burger Data</legend>
            <label className="flex flex-col">
              Name
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="Burger Name"
                required
              />
            </label>

            <label className="flex flex-col">
              Price
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                name="Burger Price"
                required
              />
            </label>

            <label className="flex flex-col">
              Ingredients
              <input
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                placeholder="lettuce, tomato, onions..."
                name="Ingredients"
                required
              />
            </label>

            <input
              type="submit"
              value="Create"
              name="Create Burger"
              className="cursor-pointer p-2 text-red-700 border border-red-700 rounded-xl bg-neutral-100"
            />
          </fieldset>
        </form>
        {message && <p>{message}</p>}
      </>
    </ModalWindow>
  );
};

export default CreateBurger;
