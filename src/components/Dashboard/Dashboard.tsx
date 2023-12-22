import { UserPublicData } from "@/src/types";
import {
  faAdd,
  faExclamationCircle,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import MenuContent from "../Menu/MenuContent";
import Modal from "./Modal/Modal";
import CreateBurger from "./Modal/CreateBurger";
import GetBurgerId from "./Modal/GetBurgerId";
import DeleteBurger from "./Modal/DeleteBurger";
import EditBurger from "./Modal/EditBurger";

const Dashboard: React.FC<UserPublicData> = ({ username, email }) => {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", gap: 16 }}>
      <div className="dashboardContainerBox userData">
        <p>Welcome back {username}!</p>
        <p>{email}</p>
      </div>

      <div className="dashboardContainerBox actions">
        <Modal icon={faAdd} text="Create Burger" children={<CreateBurger />} />

        <Modal icon={faPen} text="Edit Burger" children={<EditBurger />} />

        <Modal
          icon={faExclamationCircle}
          text="Get burger Id"
          children={<GetBurgerId />}
        />

        <Modal
          icon={faTrash}
          text="Delete Burger"
          children={<DeleteBurger />}
        />
      </div>

      <div className="dashboardContainerBox dataCreated">
        <h2>Entries created: </h2>
        <MenuContent />
      </div>
    </div>
  );
};

export default Dashboard;
