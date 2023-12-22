import { useState, Suspense, lazy } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { createPortal } from "react-dom";
const ModalContent = lazy(() => import("./ModalContent"));

const ActionButton = ({
  icon,
  text,
  openModal,
}: {
  icon: IconDefinition;
  text: string;
  openModal: () => void;
}) => {
  return (
    <button className="actionBtn" onClick={openModal}>
      <FontAwesomeIcon icon={icon} />
      <p>{text}</p>
    </button>
  );
};

const Modal = ({
  icon,
  text,
  children,
}: {
  icon: IconDefinition;
  text: string;
  children: JSX.Element;
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal ? (
        createPortal(
          <Suspense>
            <ModalContent
              onClose={() => setShowModal(false)}
              children={children}
            />
          </Suspense>,
          document.getElementById("modal")!
        )
      ) : (
        <ActionButton
          icon={icon}
          text={text}
          openModal={() => setShowModal(true)}
        />
      )}
    </>
  );
};

export default Modal;
