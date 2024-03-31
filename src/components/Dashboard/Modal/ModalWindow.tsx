import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

/**
 *
 * @param props - The content you want to be inside of the modal, as well as the content of the button that opens the modal
 * @returns
 */
const ModalWindow = ({
  children,
  openButtonContent,
}: {
  children: JSX.Element;
  openButtonContent: JSX.Element;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open ? (
        <div className="absolute top-0 left-0 bg-[#161616a6] w-full h-[862px] flex flex-col justify-center items-center">
          <div className="w-[300px] min-h-[300px] h-fit bg-neutral-200 p-2 rounded-xl overflow-auto">
            <button
              className="font-bold text-xl"
              onClick={() => setOpen(false)}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
            {children}
          </div>
        </div>
      ) : (
        <button onClick={() => setOpen(true)}>{openButtonContent}</button>
      )}
    </>
  );
};

export default ModalWindow;
