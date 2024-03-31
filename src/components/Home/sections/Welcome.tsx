import { Link } from "react-router-dom";
import Image from "../../../assets/grill-ride-image.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "./animation.css";

const Welcome = () => {
  return (
    <section
      style={{ height: "calc(100dvh - 90px)" }}
      className="flex flex-col justify-center items-center p-2 sm:flex-row-reverse sm:gap-6"
    >
      <div>
        <figure className="w-[300px] aspect-square welcomeImage sm:w-[500px]">
          <img
            src={Image}
            alt="grill-ride-burgers"
            className="w-full rounded-full aspect-square"
          />
        </figure>
      </div>
      <div className="flex flex-col justify-center items-center gap-6">
        <h1 className=" text-pretty text-2xl font-bold text-center sm:text-5xl sm:w-[400px]">
          Delicious burgers made with love for you in{" "}
          <span className=" text-[#c91e00] rounded-xl">
            Grill <span className="text-neutral-200">Ride</span>!
          </span>
        </h1>

        <div className="flex gap-2">
          <Link
            to={"/menu"}
            className="p-2 bg-neutral-200 text-red-700 border border-red-700 rounded-xl sm:text-4xl max-w-[250px] text-center"
          >
            <FontAwesomeIcon icon={faArrowAltCircleRight} /> Check the menu!
          </Link>

          <Link
            to={"/contact"}
            className="p-2 bg-red-700 text-neutral-200 border-neutral-200 rounded-xl sm:text-4xl max-w-[250px] text-center"
          >
            <FontAwesomeIcon icon={faPhone} /> Make your order!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
