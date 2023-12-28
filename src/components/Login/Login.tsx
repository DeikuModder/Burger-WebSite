import useBurgerApi from "@/hooks/useBurgerApi";
import { Logeduser } from "@/src/types";
import { FormEventHandler, useEffect, useState } from "react";
import "@/styles/components/_login.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const { setUserData, isAuthenticated, setIsAuthenticated } = useBurgerApi();
  const navigate = useNavigate();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://burger-app-api-seven.vercel.app/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setUserData(data as Logeduser);
        window.localStorage.setItem("LoggedUser", JSON.stringify(data));
        setIsAuthenticated(true);
      } else {
        setErrorMessage(data);
      }
    } catch (error) {
      alert(`Error: ${error}`);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <section id="login">
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
          <p
            style={{
              fontSize: 24,
              color: "red",
              backgroundColor: "#131313be",
              padding: 8,
              borderRadius: 32,
            }}
          >
            {errorMessage}
          </p>
        )}
      </section>
    </>
  );
};

export default Login;
