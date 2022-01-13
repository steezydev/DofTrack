import { useState, useEffect } from "react";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import {
  doc,
  addDoc,
  collection,
  updateDoc,
  increment,
} from "firebase/firestore";
import db from "../../firebase/firebase";

//Components
import ButtonSave from "../Buttons/ButtonSave";
import DifficultyBadgePicker from "../DifficultyBadge/DifficultyBadgePicker";
import DeadlinePicker from "../Deadline/DeadlinePicker";
import Loading from "../Loading/Loading";

//Types
import { TaskData } from "../../types/TypesTask";
import { Difficulties } from "../../types/TypesDifficulties";

//Hooks
import useGetGoal from "../../hooks/useGetGoal";

//Schemas
import { TaskSchema } from "../../schemas/tasksSchema";

export default NiceModal.create(({ goalId }: { goalId: string }) => {
  const modal = useModal();

  const [goalData, loading] = useGetGoal(goalId);
  const [newTaskData, setNewTaskData] = useState<TaskData>({} as TaskData);
  const [buttonLoading, setButtonLoading] = useState(false);

  const setDifficulty = (value: Difficulties) => {
    setNewTaskData((prevState) => ({ ...prevState, difficulty: value }));
  };

  const setDeadlineValue = (date: Date) => {
    setNewTaskData((prevState) => ({ ...prevState, deadline: date }));
  };

  const handleChangeTitle = (e: any) => {
    setNewTaskData((prevState) => ({ ...prevState, title: e.target.value }));
  };

  const handleChangeText = (value: any) => {
    setNewTaskData((prevState) => ({ ...prevState, text: value }));
  };

  const handleSave = async () => {
    if (!buttonLoading) {
      setButtonLoading(true);
      //Validation
      const newTask = {
        ...newTaskData,
        isActive: true,
        isMore: newTaskData.text != undefined,
      };
      const task = TaskSchema.safeParse(newTask);

      if (task.success) {
        modal.remove();
        updateDoc(doc(db, "goals", goalId), {
          "stats.tasks": increment(1),
        });
        await addDoc(collection(doc(db, "goals", goalId), "tasks"), task.data);
      } else {
        console.log(task.error);
      }
      setButtonLoading(false);
    }
  };

  return (
    <div
      className={`min-w-screen h-screen fixed left-0 top-0 flex justify-center items-center inset-0 z-50 animate-fade-in`}
    >
      <div
        className="absolute bg-black opacity-80 inset-0 z-0 "
        onClick={modal.remove}
      ></div>
      {!loading && goalData != undefined ? (
        <div className="w-full max-w-lg p-1 px-2 relative mx-auto my-auto rounded-lg shadow-lg bg-white animate-fade-in-up">
          <div className="flex flex-col mb-1">
            <span className="text-grey-darker font-medium text-sm">
              {goalData.title}
            </span>
            <input
              name="title"
              onChange={(e) => handleChangeTitle(e)}
              placeholder="Title"
              className="mr-6 font-medium text-black text-3xl border-b-2 border-dashed border-grey-darker"
            ></input>
          </div>
          <div className="flex row gap-2">
            <DeadlinePicker setDeadlineValue={setDeadlineValue} />
            <DifficultyBadgePicker setDifficulty={setDifficulty} />
          </div>
          <div className="text-lg p-1 mt-5 text-black">
            <div
              onInput={(e) => handleChangeText(e.currentTarget.textContent)}
              contentEditable="true"
              className="customScroll mb-3 w-full p-1 outline-2 outline-dashed outline-grey-darker rounded-lg min-h-[200px] max-h-[400px] overflow-y-scroll"
            ></div>
          </div>
          <div className="mt-2 mb-1 grid place-items-end">
            <ButtonSave loading={buttonLoading} action={handleSave} />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
});
