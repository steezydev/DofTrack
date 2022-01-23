//Components
import Deadline from "../Deadline/Deadline";
import DifficultyBadge from "../DifficultyBadge/DifficultyBadge";
import ActionMenu from "../ActionMenu/ActionMenu";

//Types
import { TaskData } from "../../types/TypesTask";

//Modals
import { showFullModal } from "../../modal/showModal";

//Firebase
import { completeTask, deleteTask } from "../../firebase/taskFunctions";

interface IProps extends Omit<TaskData, "text" | "isActive"> {
  goalId: string;
  dreamId?: string
}

export default function TaskActive({
  id,
  title,
  goalTitle,
  isMore,
  deadline,
  difficulty,
  goalId,
  dreamId
}: IProps) {
  const handleEdit = () => {};

  const handleComplete = () => {
    completeTask(goalId, id, difficulty, dreamId);
  };

  const handleDelete = () => {
    deleteTask(goalId, id, dreamId);
  };

  const actionItems = [
    {
      title: "Edit",
      action: handleEdit,
    },
    {
      title: "Complete",
      action: handleComplete,
    },
    {
      title: "Archive",
      action: handleDelete,
    },
  ];

  return (
    <div className="container rounded-lg max-w-sm bg-white pt-1 relative animate-fade-in">
      <ActionMenu actionItems={actionItems} />
      <div className="px-2 pb-1" onClick={() => showFullModal(id!, goalId)}>
        <div className="flex flex-col mb-3">
          <span className="text-grey-darker font-medium text-sm">
            {goalTitle}
          </span>
          <span className="font-medium text-black text-xl">{title}</span>
          {isMore && (
            <span className="font-medium text-grey-darker text-lg">...</span>
          )}
        </div>
        <div className="flex row gap-3 justify-end flex-wrap">
          {deadline != undefined && <Deadline time={deadline} />}
          <DifficultyBadge difficulty={difficulty} />
        </div>
      </div>
    </div>
  );
}
