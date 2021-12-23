import NiceModal, { useModal } from "@ebay/nice-modal-react";

import ButtonSave from "../Buttons/ButtonSave";

import DifficultyBadgePicker from "../DifficultyBadge/DifficultyBadgePicker"
import DeadlinePicker from '../Deadline/DeadlinePicker'

const goalData = {
  title: "Learn Javascript",
};

export default NiceModal.create((goadId) => {
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
            {goalData.title}
          </span>
          <input placeholder="Title" className="mr-6 font-medium text-black text-3xl border-b-2 border-dashed border-grey-darker"></input>
        </div>
        <div className="flex row gap-2">
          <DeadlinePicker />
          <DifficultyBadgePicker />
        </div>
        <div className="text-lg p-1 mt-5 text-black">
          <div contentEditable="true" className="mb-3 w-full p-1 outline-2 outline-dashed outline-grey-darker rounded-lg min-h-[200px] max-h-[400px] overflow-y-scroll"></div>
        </div>
        <div className="mt-2 mb-1 grid place-items-end">
          <ButtonSave />
        </div>
      </div>
    </div>
  );
});