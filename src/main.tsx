import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./styles/base/_resets.scss";
import "./styles/base/_base.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/Burger-WebSite">
    <App />
  </BrowserRouter>
);
