import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "@/assets/Logo-hamburguesa-oficia-variacionl.webp";
import "@/styles/components/_header.scss";
import {
  faBookOpen,
  faExclamationCircle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faHomeAlt } from "@fortawesome/free-solid-svg-icons/faHomeAlt";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";

const Header = () => {
  return (
    <>
      <header
        style={{
          width: "100%",
          padding: 8,
          position: "fixed",
          top: 0,
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
              <FontAwesomeIcon icon={faHomeAlt} />
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faBookOpen} />
              <Link to={"/menu"}>Menu</Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faExclamationCircle} />
              <Link to={"/about-us"}>About</Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} />
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li>
              <Link to={"/login"}>
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
