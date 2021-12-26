import React from "react";
import { useParams } from "react-router-dom";

import Activity from "../components/Activity/Activity";
import TaskActive from "../components/Tasks/TaskActive";
import TaskFinished from "../components/Tasks/TaskFinished";
import ButtonAdd from "../components/Buttons/ButtonAdd";

import NiceModal from "@ebay/nice-modal-react";

const goalData = {
  title: "Learn Javascript",
};

export default function PageGoal() {
  const { id } = useParams();

  const showNewModal = (goalId: string) => {
    // Show a modal with arguments passed to the component as props
    NiceModal.show("TaskNewModal", { goalId });
  };

  return (
    <main>
      <header className="p-4 mb-3">
        <h1 className="text-center text-4xl font-bold">{goalData.title}</h1>
        <div className="flex justify-center gap-1">
          <h2 className="text-center text-2xl">1790 / 3000 </h2>
          <img className="object-scale-down w-6" src="/images/gem.png"></img>
        </div>
      </header>
      <nav className="flex justify-center gap-5 text-xl font-medium text-grey-darker">
        <span className="border-b-2">All</span>
        <span>Tasks</span>
        <span>Activities</span>
        <span>Finished</span>
      </nav>
      <div className="p-10">
        <div className="mb-10">
          <h1 className="text-2xl font-medium">Active</h1>
          <div className="flex flex-row justify-between w-full grow">
            <div className="p-2 flex flex-col items-start gap-5 w-96 mr-5">
              <Activity
                id="123"
                title="Do the project"
                goalTitle="Learn Javascript"
                timeSpent="1hr 30min"
                difficulty="easy"
              />
              <Activity
                id="123"
                title="Do the project"
                goalTitle="Learn Javascript"
                timeSpent="1hr 30min"
                difficulty="easy"
              />
              <ButtonAdd action={() => showNewModal("123")} />
            </div>
            <div className="p-2 flex flex-row justify-start content-start gap-5 items-start w-full flex-wrap ">
              {[...Array(4)].map((x, i) => (
                <TaskActive
                  key={i}
                  id="123"
                  title="Do the project"
                  goalTitle="Learn Javascript"
                  isMore={true}
                  deadline="12/12/2021"
                  difficulty="medium"
                />
              ))}
              <ButtonAdd action={() => showNewModal("123")} />
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-medium mb-3">Finished</h1>
          <div className="flex flex-row justify-start content-start gap-5 items-start w-full flex-wrap">
            {[...Array(4)].map((x, i) => (
              <TaskFinished
                key={i}
                id="123"
                title="Do the project"
                goalTitle="Learn Javascript"
                isMore={true}
                deadline="12/12/2021"
                difficulty="medium"
                gems={2}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
