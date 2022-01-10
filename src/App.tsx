import ModalTaskNew from "./components/Modals/ModalTaskNew";
import TaskFullModal from "./components/Modals/ModalTaskFull";
import ModalActivityNew from "./components/Modals/ModalActivityNew";

import { Link, Navigate } from "react-router-dom";

import NiceModal from "@ebay/nice-modal-react";

NiceModal.register("TaskFullModal", TaskFullModal);
NiceModal.register("TaskNewModal", ModalTaskNew);
NiceModal.register("ActivityNewModal", ModalActivityNew);

function App() {
  return (
    <div>
      <h1>Bookkeeper!</h1>

      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/main-goals">Main Goals</Link> |{" "}
        <Link to="/goals">Goals</Link>
      </nav>
    </div>
  );
}

export default App;
