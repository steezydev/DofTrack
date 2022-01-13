import { useParams, useSearchParams } from "react-router-dom";

//Components
import Loading from "../../components/Loading/Loading";
import NotFound from "../NotFound";
import NavBar from "../../components/Nav/NavBar";

//Page components
import PageGoalActivities from "./PageGoalActivities";
import PageGoalTasks from "./PageGoalTasks";

//Hooks
import useGetGoal from "../../hooks/useGetGoal";

import getPageLinks from "../../helpers/getPageLinks";

import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function PageGoal() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter");

  const { id } = useParams();

  if (id == undefined) {
    return <NotFound text="No such goal" />;
  }

  const [goalData, loadingGoals] = useGetGoal(id);

  const goalPageLinks = getPageLinks(id);

  return (
    <main>
      {!loadingGoals ? (
        goalData != undefined ? (
          <div className="animate-fade-in">
            <div className="animate-fade-in">
              <header className="p-4 mb-3">
                <h1 className="text-center text-4xl font-bold">
                  {goalData.title}
                </h1>
                <div className="flex justify-center gap-1">
                  <h2 className="text-center text-2xl flex flex-row gap-1">
                    <div>{goalData.gems}</div>
                    <div>/</div>
                    <div>{goalData.goalGems}</div>
                  </h2>
                  <img
                    className="object-scale-down w-6"
                    src="/images/gem.png"
                  ></img>
                </div>
              </header>

              <NavBar links={goalPageLinks} />
            </div>
            <div className="p-10">
              {["activities", "tasks", null].includes(filter) && (
                <div className="divTransHeight mb-10 animate-fade-in-up">
                  <h1 className="text-2xl font-medium">Active</h1>
                  <div className="flex flex-row justify-between w-full grow">
                    {["activities", null].includes(filter) && (
                      <PageGoalActivities goalData={goalData} />
                    )}
                    {["tasks", null].includes(filter) && (
                      <PageGoalTasks goalData={goalData} isActive={true} />
                    )}
                  </div>
                </div>
              )}
              {["tasks", "finished", null].includes(filter) && (
                <div className="divTransHeight animate-fade-in-up">
                  <h1 className="text-2xl font-medium mb-3">Finished</h1>
                  <PageGoalTasks goalData={goalData} isActive={false} />
                </div>
              )}
            </div>
          </div>
        ) : (
          <NotFound text="No such goal" />
        )
      ) : (
        <Loading isFull={true} />
      )}
    </main>
  );
}
