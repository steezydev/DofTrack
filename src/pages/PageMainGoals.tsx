import React from "react";
import Goal from "../components/Goals/Goal";
import Activity from "../components/Activity/Activity";
import TaskActive from "../components/Tasks/TaskActive";
import ButtonAdd from "../components/Buttons/ButtonAdd";
import ButtonMore from "../components/Buttons/ButtonMore";

import NiceModal from "@ebay/nice-modal-react";

import ModalTaskNew from "../components/Modals/ModalTaskNew";


export default function PageMainGoals() {
  const showNewModal = (goalId: string) => {
    // Show a modal with arguments passed to the component as props
    NiceModal.show("TaskNewModal", { goalId });
  };

  return (
    <main>
      <header className="p-4 mb-3">
        <h1 className="text-center text-4xl font-bold">Main Goals</h1>
      </header>
      <div className="p-5 flex flex-row justify-center gap-10">
        <div className="flex flex-col gap-5 w-max grow items-center">
          <Goal id="123" title="Learn Javascript" percent={60} gems={10000} />
          <Activity
            id="123"
            title="Do the project"
            goalTitle="Learn Javascript"
            timeSpent="1hr 30min"
            difficulty="easy"
          />
          <TaskActive
            id="123"
            title="Do the project"
            goalTitle="Learn Javascript"
            isMore={true}
            deadline="12/12/2021"
            difficulty="medium"
          />
          <TaskActive
            id="123"
            title="Do the project"
            goalTitle="Learn Javascript"
            isMore={true}
            deadline="12/12/2021"
            difficulty="medium"
          />
          <TaskActive
            id="123"
            title="Do the project"
            goalTitle="Learn Javascript"
            isMore={true}
            deadline="12/12/2021"
            difficulty="medium"
          />
          <TaskActive
            id="123"
            title="Do the project"
            goalTitle="Learn Javascript"
            isMore={true}
            deadline="12/12/2021"
            difficulty="medium"
          />
          <ButtonMore goalId='123'/>
        </div>
        <div className="flex flex-col gap-5 w-max grow items-center">
          <Goal id="123" title="Learn Javascript" percent={60} gems={10000} />
          <Activity
            id="123"
            title="Do the project"
            goalTitle="Learn Javascript"
            timeSpent="1hr 30min"
            difficulty="easy"
          />
          <TaskActive
            id="123"
            title="Do the project"
            goalTitle="Learn Javascript"
            isMore={true}
            deadline="12/12/2021"
            difficulty="medium"
          />
          <ButtonAdd action={() => showNewModal('123')}/>
        </div>
        <div className="flex flex-col gap-5 w-max grow items-center">
          <Goal id="123" title="Learn Javascript" percent={60} gems={10000} />
          <Activity
            id="123"
            title="Do the project"
            goalTitle="Learn Javascript"
            timeSpent="1hr 30min"
            difficulty="easy"
          />
          <TaskActive
            id="123"
            title="Do the project"
            goalTitle="Learn Javascript"
            isMore={true}
            deadline="12/12/2021"
            difficulty="medium"
          />
          <ButtonAdd action={() => showNewModal('123')}/>
        </div>
      </div>
    </main>
  );
}