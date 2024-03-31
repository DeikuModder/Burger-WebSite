import Navbar from "../Navbar/Navbar";
import Logo from "../../assets/Logo-hamburguesa-oficia-variacionl.webp";
import {
  faHomeAlt,
  faBookOpen,
  faExclamationCircle,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import useBurgerApi from "@/hooks/useBurgerApi";

/**
 *
 * @param {Object} props - Properties of the header, background color, text color and height, wich by default is 90px
 * @returns
 */
const Header = ({
  backgroundColor,
  textColor,
  height = "90px",
}: {
  backgroundColor: string;
  textColor: string;
  height?: string;
}) => {
  const { userData } = useBurgerApi();

  return (
    <header
      className={`flex p-2 ${backgroundColor} ${textColor} h-[${height}]`}
    >
      <div className="w-[20%]">
        <figure className="w-16">
          <Link to={"/"}>
            <img src={Logo} alt="grill-ride-logo" className="w-full" />
          </Link>
        </figure>
      </div>
      <div className="w-[80%] flex justify-end items-center">
        <Navbar>
          <>
            <li className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faHomeAlt} />
              <Link to={"/"}>Home</Link>
            </li>
            <li className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faBookOpen} />
              <Link to={"/menu"}>Menu</Link>
            </li>
            <li className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faExclamationCircle} />
              <Link to={"/about-us"}>About</Link>
            </li>
            <li className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faPhone} />
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li>
              <Link
                to={userData.username ? "/dashboard" : "/login"}
                className="flex gap-2 items-center"
              >
                <FontAwesomeIcon icon={faUser} />
                <span className="sm:hidden">Login</span>
              </Link>
            </li>
          </>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
