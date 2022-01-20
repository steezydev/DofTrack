import ModalTaskNew from "./components/Modals/ModalTaskNew";
import TaskFullModal from "./components/Modals/ModalTaskFull";
import ModalActivityNew from "./components/Modals/ModalActivityNew";
import ModalGoalNew from "./components/Modals/ModalGoalNew";
import ModalSignIn from "./components/Modals/ModalSignIn";
import ModalSignUp from "./components/Modals/ModalSignUp";

import "./schemas/errorMap";

import { Link, Navigate } from "react-router-dom";

import PageHome from "./pages/PageHome/PageHome";

import NiceModal from "@ebay/nice-modal-react";

NiceModal.register("TaskFullModal", TaskFullModal);
NiceModal.register("TaskNewModal", ModalTaskNew);
NiceModal.register("ActivityNewModal", ModalActivityNew);
NiceModal.register("GoalNewModal", ModalGoalNew);
NiceModal.register("SignInModal", ModalSignIn);
NiceModal.register("SignUpModal", ModalSignUp);

function App() {
  return <PageHome />;
}

export default App;
