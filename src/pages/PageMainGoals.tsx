import React from "react";
import NiceModal from "@ebay/nice-modal-react";

//Components
import Goal from "../components/Goals/Goal";
import Activity from "../components/Activity/Activity";
import TaskActive from "../components/Tasks/TaskActive";
import ButtonAdd from "../components/Buttons/ButtonAdd";
import ButtonMore from "../components/Buttons/ButtonMore";

export default function PageMainGoals() {
  const showNewModal = (goalId: string) => {
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
            difficulty="EASY"
          />
          <TaskActive
            id="123"
            title="Do the project"
            goalTitle="Learn Javascript"
            isMore={true}
            deadline="12/12/2021"
            difficulty="MEDIUM"
          />
          <TaskActive
            id="123"
            title="Do the project"
            goalTitle="Learn Javascript"
            isMore={true}
            deadline="12/12/2021"
            difficulty="MEDIUM"
          />
          <TaskActive
            id="123"
            title="Do the project"
            goalTitle="Learn Javascript"
            isMore={true}
            deadline="12/12/2021"
            difficulty="MEDIUM"
          />
          <TaskActive
            id="123"
            title="Do the project"
            goalTitle="Learn Javascript"
            isMore={true}
            deadline="12/12/2021"
            difficulty="MEDIUM"
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
            difficulty="EASY"
          />
          <TaskActive
            id="123"
            title="Do the project"
            goalTitle="Learn Javascript"
            isMore={true}
            deadline="12/12/2021"
            difficulty="MEDIUM"
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
            difficulty="EASY"
          />
          <TaskActive
            id="123"
            title="Do the project"
            goalTitle="Learn Javascript"
            isMore={true}
            deadline="12/12/2021"
            difficulty="MEDIUM"
          />
          <ButtonAdd action={() => showNewModal('123')}/>
        </div>
      </div>
    </main>
  );
}
