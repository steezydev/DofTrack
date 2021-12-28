import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { useEffect, useState } from "react";

//Constants
import {
  DIFF_EASY,
  DIFF_HARD,
  DIFF_MEDIUM,
  DIFF_PICKER,
} from "../../constants/ConstantsDifficulties";

//Components
import Deadline from "../Deadline/Deadline";
import DifficultyBadge from "../DifficultyBadge/DifficultyBadge";
import ButtonComplete from "../Buttons/ButtonComplete";
import ActionMenu from "../ActionMenu/ActionMenu";

//Types
import { TaskData } from "../../types/TypesTask";

//Helpers
import { dateToString } from "../../helpers/time";

//! Mock data
const data: TaskData = {
  title: "Watch a youtube video",
  goalTitle: "Learn Javascript",
  text: "Watch video",
  deadline: new Date(),
  difficulty: "HARD",
  isActive: true,
};

export default NiceModal.create(({ taskId }) => {
  const modal = useModal();

  const [isBusy, setIsBusy] = useState(true);
  const [taskData, setTaskData] = useState<TaskData>({} as TaskData);

  const handleComplete = () => {
    //TODO: Save to the database

    console.log(taskId);
  };

  const handleEdit = () => {};

  const handleDelete = () => {};

  const actionItems = [
    {
      title: "Edit",
      action: handleEdit,
    },
    {
      title: "Archive",
      action: handleDelete,
    },
  ];

  useEffect(() => {
    //TODO: Call an API

    //! Mock data
    setTaskData(data);
    setIsBusy(false);
  }, []);

  return (
    <div
      className={`min-w-screen h-screen fixed left-0 top-0 flex justify-center items-center inset-0 z-50 animate-fade-in`}
    >
      <div
        className="absolute bg-black opacity-80 inset-0 z-0 "
        onClick={modal.remove}
      ></div>
      {!isBusy && (
        <div className="w-full max-w-lg p-1 px-2 relative mx-auto my-auto rounded-lg shadow-lg bg-white animate-fade-in-up">
          <ActionMenu actionItems={actionItems} />
          <div className="flex flex-col mb-1">
            <span className="text-grey-darker font-medium text-sm">
              {taskData.goalTitle}
            </span>
            <span className="font-medium text-black text-3xl">
              {taskData.title}
            </span>
          </div>
          <div className="flex row gap-2">
            <Deadline time={dateToString(taskData.deadline)} />
            <DifficultyBadge difficulty={taskData.difficulty} />
          </div>
          <div className="text-lg mt-5 text-black">
            <p className="mb-3">{taskData.text}</p>
          </div>
          <div className="mt-20 mb-1 grid place-items-end">
            <ButtonComplete action={handleComplete} />
          </div>
        </div>
      )}
    </div>
  );
});
