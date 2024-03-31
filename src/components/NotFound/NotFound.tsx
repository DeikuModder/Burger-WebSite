import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-[100dvh] flex flex-col p-4 gap-4">
      <h2 className="text-4xl font-bold">Oops! This page doesn't exist :(</h2>
      <p className="text-lg font-semibold">
        Are you sure you typed the correct URL?
      </p>
      <Link
        to={"/"}
        className="bg-neutral-200 p-2 text-xl text-red-700 border border-red-700 w-fit rounded-xl"
      >
        Go back to the homepage <FontAwesomeIcon icon={faHome} />
      </Link>
    </section>
  );
};

export default NotFound;
