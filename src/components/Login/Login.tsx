import useBurgerApi from "@/hooks/useBurgerApi";
import { Logeduser } from "@/src/types";
import { FormEventHandler, useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import "@/styles/components/_login.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const { userData, setUserData } = useBurgerApi();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

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
      .catch((error) => alert(`Error: ${error}`))
      .finally(() => {
        setUsername("");
        setPassword("");
      });
  };

  return (
    <section id="login">
      {userData.username ? (
        <Dashboard username={userData.username} email={userData.email} />
      ) : (
        <>
          <h2>Are you part of the staff? Login!</h2>

          <form onSubmit={handleSubmit} name="Login" id="loginForm">
            <div>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username here..."
                name="usernameInput"
              />

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password..."
                name="passwordInput"
              />
            </div>

            <input type="submit" value="Login" name="login" />
          </form>

          {errorMessage && (
            <p style={{ fontSize: 24, color: "red" }}>{errorMessage}</p>
          )}
        </>
      )}
    </section>
  );
};

export default Login;
