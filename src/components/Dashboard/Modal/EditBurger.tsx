import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalWindow from "./ModalWindow";
import { faPen } from "@fortawesome/free-solid-svg-icons/faPen";
import useBurgerApi from "@/hooks/useBurgerApi";
import { BurgerInterface } from "@/src/types";
import { useState, FormEventHandler } from "react";

const EditBurger = () => {
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newIngredients, setNewIngredients] = useState("");
  const { userData } = useBurgerApi();

  const ChangedBurgerObj: Partial<BurgerInterface> = {
    name: newName,
    price: parseFloat(newPrice),
    ingredients: newIngredients
      .split(",")
      .map((ingredient) => ingredient.trim()),
  };

  const checkInputEmpty = () => {
    newName === "" && delete ChangedBurgerObj.name;
    newPrice === "" && delete ChangedBurgerObj.price;
    newIngredients === "" && delete ChangedBurgerObj.ingredients;
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    checkInputEmpty();

    if (!Object.keys(ChangedBurgerObj).length) {
      setMessage("Please fill out at least one field.");
    } else {
      fetch(`https://burger-app-api-seven.vercel.app/api/v1/burgers/${id}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${userData.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ChangedBurgerObj),
      })
        .then(async (res) => {
          if (res.ok) setMessage("Successfully Edited!");
          else setMessage(await res.json());
        })
        .catch((err) => setMessage(`${err}`));
    }
  };

  return (
    <ModalWindow
      openButtonContent={
        <div className="w-[160px] border border-neutral-700 text-neutral-700 p-2 rounded-xl text-lg font-bold">
          <FontAwesomeIcon icon={faPen} /> Edit Burger
        </div>
      }
    >
      <>
        <form
          onSubmit={handleSubmit}
          className="h-full flex flex-col justify-center items-center"
        >
          <fieldset className="flex flex-col items-center justify-center gap-8">
            <legend className="text-xl font-bold">Edit Entire Burger:</legend>
            <input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="New Burger Name..."
              name="New Burger Name"
            />

            <input
              value={newPrice}
              onChange={(e) => setNewPrice(e.target.value)}
              placeholder="New Burger Price...."
              name="New Burger Price"
            />

            <input
              value={newIngredients}
              onChange={(e) => setNewIngredients(e.target.value)}
              placeholder="New Ingredients..."
              name="New Ingredients"
            />

            <input
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Id of burger to edit..."
              name="Id of burger"
              required
            />

            <input
              type="submit"
              value="Submit changes"
              name="Edit burger"
              className="cursor-pointer p-2 text-red-700 border border-red-700 rounded-xl bg-neutral-100"
            />
          </fieldset>
        </form>
        {message && <p>{message}</p>}
      </>
    </ModalWindow>
  );
};

export default EditBurger;
