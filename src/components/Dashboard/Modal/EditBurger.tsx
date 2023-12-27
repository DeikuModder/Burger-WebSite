import useBurgerApi from "@/hooks/useBurgerApi";
import { BurgerInterface } from "@/src/types";
import { FormEventHandler, useState } from "react";

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
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Edit Entire Burger:</legend>
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

          <input type="submit" value="Submit changes" name="Edit burger" />
        </fieldset>
      </form>
      {message && <p>{message}</p>}
    </>
  );
};

export default EditBurger;
