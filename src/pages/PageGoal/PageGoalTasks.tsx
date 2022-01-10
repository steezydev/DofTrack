//Components
import ButtonAdd from "../../components/Buttons/ButtonAdd";
import Task from "../../components/Tasks/Task";

//Modals
import { showNewTaskModal } from "../../modal/showModal";

//Types
import { TaskData } from "../../types/TypesTask";
import { GoalData } from "../../types/TypesGoal";

export default function PageGoalTasks({
  tasksData,
  goalData,
  isActive,
}: {
  tasksData: TaskData[];
  goalData: GoalData;
  isActive: boolean;
}) {
  return (
    <div className="p-2 flex flex-row justify-start content-start gap-5 items-start w-full flex-wrap ">
      {tasksData != undefined &&
        tasksData.length > 0 &&
        tasksData.map((item, i) => (
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
            gems={item.gems}
          />
        ))}
      {isActive && <ButtonAdd action={() => showNewTaskModal(goalData.id)} />}
    </div>
  );
}
