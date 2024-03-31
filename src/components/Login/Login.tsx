import useBurgerApi from "@/hooks/useBurgerApi";
import { Logeduser } from "@/src/types";
import { FormEventHandler, useEffect, useState } from "react";
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
      <section
        style={{ minHeight: "calc(100dvh - 90px)" }}
        className="flex flex-col justify-center items-center gap-4"
      >
        <h2 className="text-2xl font-bold w-[300px] text-center sm:text-4xl sm:w-[400px]">
          Are you part of the staff? Login!
        </h2>

        <form
          onSubmit={handleSubmit}
          name="Login"
          className="p-3 border border-neutral-200 rounded-xl min-w-[270px] aspect-square flex flex-col justify-center items-center gap-3 sm:w-[300px] sm:font-bold sm:text-xl"
        >
          <div className="flex flex-col gap-8">
            <label className="flex flex-col gap-2">
              Username:
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                name="usernameInput"
                className="rounded-xl p-1"
              />
            </label>

            <label className="flex flex-col gap2">
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="passwordInput"
                className="rounded-xl p-1"
              />
            </label>
          </div>

          <input
            type="submit"
            value="Login"
            name="login"
            className="text-xl font-bold bg-neutral-200 text-red-700 border-2 border-red-700 p-2 rounded-xl cursor-pointer"
          />
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
