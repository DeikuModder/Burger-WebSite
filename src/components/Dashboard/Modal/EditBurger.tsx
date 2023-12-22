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

  const ChangedBurgerObj: BurgerInterface = {
    name: newName,
    price: parseFloat(newPrice),
    ingredients: newIngredients
      .split(",")
      .map((ingredient) => ingredient.trim()),
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    fetch(`https://burger-app-api-seven.vercel.app/api/v1/burgers/${id}`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${userData.token}` },
      body: JSON.stringify(ChangedBurgerObj),
    })
      .then((res) => {
        if (res.ok) {
          setMessage("Succesfully edited burger");
        } else {
          setMessage("Couldn't edit burger");
        }
      })
      .catch((err) => setMessage(`An error has occurred ${err}`));
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
