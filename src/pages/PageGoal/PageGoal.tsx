import { useParams, useSearchParams } from "react-router-dom";

//Components
import Loading from "../../components/Loading/Loading";
import NotFound from "../NotFound";

//Page components
import PageGoalHeader from "./PageGoalHeader";
import PageGoalActivities from "./PageGoalActivities";
import PageGoalTasks from "./PageGoalTasks";

//Hooks
import useGetGoal from "../../hooks/useGetGoal";
import useGetActivities from "../../hooks/useGetActivities";
import useGetTasks from "../../hooks/useGetTasks";

import getPageLinks from "../../helpers/getPageLinks";

export default function PageGoal() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter");

  //console.log(filter);

  const { id } = useParams();

  if (id == undefined) {
    return <NotFound text="No such goal" />;
  }

  const [goalData, loadingGoals] = useGetGoal(id);
  const [activitiesData, loadingActivities] = useGetActivities(id);
  const [tasksData, loadingTasks] = useGetTasks(id, true);
  const [tasksFinishedData, loadingTasksFinished] = useGetTasks(id, false);

  const GoalPageLinks = getPageLinks(id);

  return (
    <main>
      {!loadingGoals ? (
        <div className="animate-fade-in">
          {goalData != undefined ? (
            <PageGoalHeader goalData={goalData} goalPageLinks={GoalPageLinks} />
          ) : (
            <NotFound text="No such goal" />
          )}

          <div className="p-10">
            {!loadingActivities && !loadingTasks && (
              <div className="mb-10 animate-fade-in-up">
                <h1 className="text-2xl font-medium">Active</h1>
                <div className="flex flex-row justify-between w-full grow">
                  <PageGoalActivities
                    activitiesData={activitiesData}
                    goalData={goalData}
                  />
                  <PageGoalTasks
                    tasksData={tasksData}
                    goalData={goalData}
                    isActive={true}
                  />
                </div>
              </div>
            )}
            {!loadingTasksFinished &&
              tasksFinishedData != undefined &&
              tasksFinishedData.length > 0 && (
                <div className="animate-fade-in-up">
                  <h1 className="text-2xl font-medium mb-3">Finished</h1>

                  <PageGoalTasks
                    tasksData={tasksFinishedData}
                    goalData={goalData}
                    isActive={false}
                  />
                </div>
              )}
          </div>
        </div>
      ) : (
        <Loading isFull={true} />
      )}
    </main>
  );
}
