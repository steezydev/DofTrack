import NiceModal, { useModal } from "@ebay/nice-modal-react";

import Deadline from "../Deadline/Deadline";
import DifficultyBadge from "../DifficultyBadge/DifficultyBadge";
import { Difficulties } from "../../types/difficulties";
import ButtonComplete from "../Buttons/ButtonComplete";

interface IProps {
  taskId: string;
  closeModal: any;
}

interface IData {
  title: string;
  goalTitle: string;
  text: string;
  deadline: string;
  difficulty: Difficulties;
  isActive: boolean;
}

const data: IData = {
  title: "Watch a youtube video",
  goalTitle: "Learn Javascript",
  text: "Watch video",
  deadline: "10/11/2021",
  difficulty: "hard",
  isActive: true,
};

export default NiceModal.create(({ taskId }) => {
  const modal = useModal();
  return (
    <div
      className={`min-w-screen h-screen fixed left-0 top-0 flex justify-center items-center inset-0 z-50 animate-fade-in`}
    >
      <div
        className="absolute bg-black opacity-80 inset-0 z-0 "
        onClick={modal.remove}
      ></div>
      <div className="w-full max-w-lg p-1 px-2 relative mx-auto my-auto rounded-lg shadow-lg bg-white animate-fade-in-up">
        <div className="flex flex-col mb-1">
          <span className="text-grey-darker font-medium text-sm">
            {data.goalTitle}
          </span>
          <span className="font-medium text-black text-3xl">{data.title}</span>
        </div>
        <div className="flex row gap-2">
          <Deadline time={data.deadline} />
          <DifficultyBadge difficulty={data.difficulty} />
        </div>
        <div className="text-lg mt-5 text-black">
          <p className="mb-3">{data.text}</p>
        </div>
        <div className="mt-20 mb-1 grid place-items-end">
          <ButtonComplete />
        </div>
      </div>
    </div>
  );
});
