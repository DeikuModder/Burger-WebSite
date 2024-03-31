import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactPic from "../../assets/grill-ride-bag.webp";
import { faPhoneAlt, faMailBulk } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <section
      className="flex flex-col justify-center items-center p-2 sm:flex-row"
      style={{ minHeight: "calc(100dvh - 90px)" }}
    >
      <figure className="w-[300px] aspect-square sm:w-[500px]">
        <img
          src={ContactPic}
          alt="grill-ride-bag"
          className="w-full"
          loading="lazy"
        />
      </figure>

      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-2xl font-bold text-center sm:text-5xl max-w-[530px]">
          Contact us! Ask for your Grill Ride 🚙🛒
        </h2>
        <ul className="text-xl bg-neutral-200 p-2 rounded-xl sm:text-3xl">
          <li>
            <FontAwesomeIcon icon={faPhoneAlt} /> 555-555-55555
          </li>
          <li>
            <FontAwesomeIcon icon={faMailBulk} /> grillride@notrealemail.com
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
