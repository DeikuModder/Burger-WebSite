import useBurgerApi from "@/hooks/useBurgerApi";
import { Logeduser } from "@/src/types";
import { useState } from "react";

export function login({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  const [errorMessage, setErrorMessage] = useState();
  const { setUserData } = useBurgerApi();

  fetch("https://burger-app-api-seven.vercel.app/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        setErrorMessage(data.error);
      } else {
        setUserData(data as Logeduser);
        window.localStorage.setItem("LoggedUser", JSON.stringify(data));
      }
    })
    .catch((error) => alert(`Error: ${error}`));

  return {
    errorMessage,
  };
}
