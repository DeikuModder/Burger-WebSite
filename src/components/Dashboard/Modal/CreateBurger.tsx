import useBurgerApi from "@/hooks/useBurgerApi";
import { BurgerInterface } from "@/src/types";
import { FormEventHandler, useState } from "react";

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
    <>
      <form name="New Burger" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Burger Data</legend>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            name="Burger Name"
            required
          />

          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            name="Burger Price"
            required
          />

          <input
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="lettuce, tomato, onions..."
            name="Ingredients"
            required
          />

          <input type="submit" value="Create" name="Create Burger" />
        </fieldset>
      </form>
      {message && <p>{message}</p>}
    </>
  );
};

export default CreateBurger;
