import useBurgerApi from "@/hooks/useBurgerApi";
import { FormEventHandler, useState } from "react";

const GetBurgerId = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const { apiData } = useBurgerApi();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const burger = apiData.filter(
      (burger) =>
        burger.name.toLocaleLowerCase().trim().replace(/\s/, "_") ===
        name.toLocaleLowerCase().trim().replace(/\s/, "_")
    );

    if (burger.length <= 0) {
      alert(`No Burger with the name ${name} found.`);
    } else {
      setId(burger[0]._id as string);
    }
  };

  return (
    <>
      <form name="Get Burger Id" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Enter Burger name:</legend>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="ej. Cheese burger"
            name="Burger name"
            required
          />

          <input type="submit" value="Get" name="Get Burger Id" />
        </fieldset>
      </form>
      <p>Id: {id}</p>
    </>
  );
};

export default GetBurgerId;
