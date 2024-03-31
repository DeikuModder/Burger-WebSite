import useBurgerApi from "@/hooks/useBurgerApi";
import { useState, FormEventHandler } from "react";
import ModalWindow from "./ModalWindow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

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
    <ModalWindow
      openButtonContent={
        <div className="w-[160px] border border-neutral-700 text-neutral-700 p-2 rounded-xl text-lg font-bold">
          <FontAwesomeIcon icon={faInfo} /> Get burger Id
        </div>
      }
    >
      <>
        <form
          name="Get Burger Id"
          onSubmit={handleSubmit}
          className="h-full flex flex-col justify-center items-center"
        >
          <fieldset className="flex flex-col items-center justify-center gap-8">
            <legend className="text-xl font-bold">Enter Burger name:</legend>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="ej. Cheese burger"
              name="Burger name"
              required
            />

            <input
              type="submit"
              value="Get"
              name="Get Burger Id"
              className="cursor-pointer p-2 text-red-700 border border-red-700 rounded-xl bg-neutral-100"
            />
          </fieldset>
          <p className="text-lg font-semibold">Id: {id}</p>
        </form>
      </>
    </ModalWindow>
  );
};

export default GetBurgerId;
