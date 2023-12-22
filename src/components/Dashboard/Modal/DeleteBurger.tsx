import useBurgerApi from "@/hooks/useBurgerApi";
import { FormEventHandler, useState } from "react";

const DeleteBurger = () => {
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");
  const { userData } = useBurgerApi();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    fetch(`https://burger-app-api-seven.vercel.app/api/v1/burgers/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${userData.token}` },
    })
      .then((response) => {
        if (response.ok) {
          setMessage("Burger deleted succesfully");
        } else {
          setMessage("Couldn't delete burger");
        }
      })
      .catch((err) => setMessage(`An error occurred ${err}`));
  };

  return (
    <>
      <form name="Delete Burger" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Delete Burger</legend>
          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Id..."
            name="Burger Id"
            required
          />
          <p>
            Are you sure you want to delete this burger? This action cannot be
            undone.
          </p>
          <input type="submit" value="Yes, i'm sure" name="Delete Button" />
        </fieldset>
      </form>
      {message && <p>{message}</p>}
    </>
  );
};

export default DeleteBurger;
