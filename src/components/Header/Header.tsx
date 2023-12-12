import { Link } from "react-router-dom";
import Logo from "@/assets/Logo-hamburguesa-oficia-variacionl.webp";
import "@/styles/components/_header.scss";

const Header = () => {
  return (
    <>
      <header
        style={{
          width: "100%",
          padding: 8,
          position: "fixed",
          backgroundColor: "#252422",
          zIndex: 100,
        }}
      >
        <div style={{ width: 80 }}>
          <img src={Logo} style={{ width: "100%" }} alt="Grill-Ride-Logo" />
        </div>
        <nav style={{ width: "50%" }}>
          <ul style={{ fontSize: "1.4rem", display: "flex", gap: 32 }}>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/menu"}>Menu</Link>
            </li>
            <li>
              <Link to={"/promotions"}>Promos</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
