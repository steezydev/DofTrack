//Components
import ButtonAdd from "../../components/Buttons/ButtonAdd";
import Task from "../../components/Tasks/Task";
import Loading from "../../components/Loading/Loading";

//Modals
import { showNewTaskModal } from "../../modal/showModal";

//Types
import { TaskData } from "../../types/TypesTask";
import { GoalData } from "../../types/TypesGoal";

//Hooks
import useGetTasks from "../../hooks/useGetTasks";

export default function PageGoalTasks({
  goalData,
  isActive,
}: {
  goalData: GoalData;
  isActive: boolean;
}) {
  const [tasksData, loadingTasks] = useGetTasks(goalData.id, isActive);

  return !loadingTasks ? (
    <div className="p-2 flex flex-row justify-start content-start gap-5 items-start w-full flex-wrap animate-fade-in-up">
      {tasksData != undefined && tasksData.length > 0
        ? tasksData.map((item, i) => (
            <Task
              key={item.id}
              id={item.id}
              title={item.title}
              goalTitle={goalData.title}
              goalId={goalData.id}
              isMore={item.isMore}
              deadline={item.deadline}
              difficulty={item.difficulty}
              isActive={isActive}
              dreamId={goalData?.dreamId}
              gems={item.gems}
            />
          ))
        : !isActive && (
            <div className="text-grey-darker text-xl">
              You did't finish any task yet :(
            </div>
          )}
      {isActive && <ButtonAdd type="TASK" action={() => showNewTaskModal(goalData.id)} />}
    </div>
  ) : (
    <Loading />
  );
}
