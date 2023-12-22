import { useState } from "react";
import { BurgerInterface } from "../types";

export const useCreateBurger = async (newBurgerObject: BurgerInterface) => {
  const [result, setResult] = useState();

  try {
    const response = await fetch(
      "https://burger-app-api-seven.vercel.app/api/v1/burgers",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBurgerObject),
      }
    );

    const data = await response.json();

    setResult(data);

    return result;
  } catch (error) {
    console.log("Error creating burger");
  }
};
