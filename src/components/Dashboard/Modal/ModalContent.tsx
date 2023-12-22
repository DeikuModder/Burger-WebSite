import "@/styles/components/_modal.scss";

const ModalContent = ({
  onClose,
  children,
}: {
  onClose: () => void;
  children: JSX.Element;
}) => {
  return (
    <div className="modalScreen">
      <div className="modalContent">
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  );
};

export default ModalContent;
