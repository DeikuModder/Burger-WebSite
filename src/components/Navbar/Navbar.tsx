import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

/**
 * A responsive navbar for headers
 *
 * @param {JSX.Element} children - The content you want to be inside the ul, usually should be a set of lists
 * @returns {JSX.Element} The NavBar component that contains the navigation bar for the application.
 */
const Navbar = ({ children }: { children: JSX.Element }): JSX.Element => {
  const [display, setDisplay] = useState(false);

  return (
    <>
      <button className="sm:hidden text-4xl" onClick={() => setDisplay(true)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <nav
        className={`${
          display
            ? "translate-x-0 opacity-100"
            : "translate-x-[200px] opacity-0"
        } transition duration-300 ease-in-out transform
           fixed top-0 right-0 h-[100vh] w-[200px] p-6 sm:flex sm:justify-end sm:p-0 sm:translate-x-0 sm:opacity-100 sm:static sm:h-[100%] sm:w-[100%] bg-neutral-800 sm:bg-transparent z-50`}
      >
        <button
          className="sm:hidden text-2xl font-bold"
          onClick={() => setDisplay(false)}
        >
          <FontAwesomeIcon icon={faX} />
        </button>
        <ul className="text-xl flex flex-col mt-4 sm:mt-0 sm:text-2xl sm:flex-row sm:items-center sm:justify-end gap-8 sm:px-6">
          {children}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
