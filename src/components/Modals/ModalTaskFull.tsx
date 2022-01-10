import NiceModal, { useModal } from "@ebay/nice-modal-react";

//Components
import Deadline from "../Deadline/Deadline";
import DifficultyBadge from "../DifficultyBadge/DifficultyBadge";
import ButtonComplete from "../Buttons/ButtonComplete";
import ActionMenu from "../ActionMenu/ActionMenu";
import Loading from "../Loading/Loading";

//Hooks
import useGetTask from "../../hooks/useGetTask";
import useGetGoal from "../../hooks/useGetGoal";

export default NiceModal.create(
  ({ taskId, goalId }: { taskId: string; goalId: string }) => {
    const modal = useModal();

    const [taskData, loading] = useGetTask(taskId, goalId);
    const [goalData, loadingGoal] = useGetGoal(goalId);

    const handleComplete = () => {
      //TODO: Save to the database
      console.log(goalId);
      console.log(taskId);
    };

    const handleEdit = () => {};

    const handleDelete = () => {};

    //Action menu items
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

    return (
      <div
        className={`min-w-screen h-screen fixed left-0 top-0 flex justify-center items-center inset-0 z-50 animate-fade-in`}
      >
        <div
          className="absolute bg-black opacity-80 inset-0 z-0 "
          onClick={modal.remove}
        ></div>
        {!loading && !loadingGoal && taskData != undefined ? (
          <div className="w-full max-w-lg p-1 px-2 relative mx-auto my-auto rounded-lg shadow-lg bg-white animate-fade-in-down">
            <ActionMenu actionItems={actionItems} />
            <div className="flex flex-col mb-1">
              <span className="text-grey-darker font-medium text-sm">
                {goalData.title}
              </span>
              <span className="font-medium text-black text-3xl">
                {taskData.title}
              </span>
            </div>
            <div className="flex row gap-2">
              {taskData.deadline != undefined && (
                <Deadline time={taskData.deadline} />
              )}
              <DifficultyBadge difficulty={taskData.difficulty} />
            </div>
            <div className="text-lg mt-5 text-black">
              <p className="mb-3">{taskData.text}</p>
            </div>
            <div className="mt-20 mb-1 grid place-items-end">
              <ButtonComplete action={handleComplete} />
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
);
