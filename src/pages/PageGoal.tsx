import NiceModal from "@ebay/nice-modal-react";
import { useParams } from "react-router-dom";

//Components
import Activity from "../components/Activity/Activity";
import TaskActive from "../components/Tasks/TaskActive";
import TaskFinished from "../components/Tasks/TaskFinished";
import ButtonAdd from "../components/Buttons/ButtonAdd";
import NavBar from "../components/Nav/NavBar";

//Types
import { GoalData } from "../types/TypesGoal";
import { Link } from "../types/TypesLinks";

const goalData = {
  title: "Learn Javascript",
};

const links: Link[] = [
  {
    title: "All",
    isActive: true,
    path: "/",
  },
  {
    title: "Tasks",
    path: "/",
  },
  {
    title: "Activities",
    path: "/",
  },
  {
    title: "Finished",
    path: "/",
  },
];

export default function PageGoal() {
  const { id } = useParams();

  const showNewModal = (goalId: string) => {
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
      <NavBar links={links} />
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
                difficulty="EASY"
              />
              <Activity
                id="123"
                title="Do the project"
                goalTitle="Learn Javascript"
                timeSpent="1hr 30min"
                difficulty="EASY"
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
                  difficulty="MEDIUM"
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
                difficulty="MEDIUM"
                gems={2}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
