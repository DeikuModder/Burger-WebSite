import useBurgerApi from "@/hooks/useBurgerApi";
import { useState, FormEventHandler } from "react";
import ModalWindow from "./ModalWindow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons/faTrashAlt";

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
    <ModalWindow
      openButtonContent={
        <div className="w-[160px] border border-neutral-700 text-neutral-700 p-2 rounded-xl text-lg font-bold">
          <FontAwesomeIcon icon={faTrashAlt} /> Delete Burger
        </div>
      }
    >
      <>
        <form
          name="Delete Burger"
          onSubmit={handleSubmit}
          className="h-full flex flex-col justify-center items-center"
        >
          <fieldset className="flex flex-col items-center justify-center gap-8">
            <legend className="text-xl font-bold">Delete Burger</legend>
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
            <input
              type="submit"
              value="Yes, i'm sure"
              name="Delete Button"
              className="cursor-pointer p-2 text-red-700 border border-red-700 rounded-xl bg-neutral-100"
            />
          </fieldset>
        </form>
        {message && <p>{message}</p>}
      </>
    </ModalWindow>
  );
};

export default DeleteBurger;
