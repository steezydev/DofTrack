import Deadline from "../Deadline/Deadline";
import DifficultyBadge from "../DifficultyBadge/DifficultyBadge";
import { Difficulties } from "../../types/difficulties";
import ButtonComplete from "../Buttons/ButtonComplete";

interface IProps {
  closeModal: any;
}

export default function TaskNew({closeModal}: IProps) {
  return (
    <div
      className={`min-w-screen h-screen fixed left-0 top-0 flex justify-center items-center inset-0 z-50 animate-fade-in`}
    >
      <div
        className="absolute bg-black opacity-80 inset-0 z-0 "
        onClick={closeModal}
      ></div>
      <div className="w-full max-w-lg p-1 px-2 relative mx-auto my-auto rounded-lg shadow-lg bg-white animate-fade-in-up">
        <div className="flex flex-col mb-1">
          <span className="text-grey-darker font-medium text-sm">
            Title
          </span>
          <span className="font-medium text-black text-3xl">Title</span>
        </div>
        <div className="flex row gap-2">
          <Deadline time='11/12/2021' />
          <DifficultyBadge difficulty='easy' />
        </div>
        <div className="text-lg mt-5 text-black">
          <p className="mb-3">Text</p>
        </div>
        <div className="mt-20 mb-1 grid place-items-end">
          <ButtonComplete />
        </div>
      </div>
    </div>
  );
}
