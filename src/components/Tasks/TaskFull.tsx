import Deadline from "../Deadline/Deadline";
import DifficultyBadge from "../DifficultyBadge/DifficultyBadge";
import { Difficulties } from "../../types/difficulties";
import ButtonComplete from "../Buttons/ButtonComplete";

interface IProps {
  taskId: string
  closeModal: any
}

export default function TaskFull({taskId, closeModal}: IProps) {
  return (
    <div className="min-w-screen h-screen fixed left-0 top-0 flex justify-center items-center inset-0 z-50">
      <div className="absolute bg-black opacity-80 inset-0 z-0" onClick={closeModal}></div>
      <div className="w-full max-w-lg p-1 px-2 relative mx-auto my-auto rounded-lg shadow-lg bg-white ">
        <div className="flex flex-col mb-1">
          <span className="text-grey-darker font-medium text-sm">
            Learn Javascript
          </span>
          <span className="font-medium text-black text-3xl">
            Watch a youtube video
          </span>
        </div>
        <div className="flex row gap-2">
          <Deadline time={"10/11/2021"} />
          <DifficultyBadge difficulty={"hard"} />
        </div>
        <div className="text-lg mt-5 text-black">
          <p className="mb-3">
            Watch a video related to JS development. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Quisque ullamcorper accumsan urna ut
            accumsan.
          </p>
          <p className="mb-3">
            Sed hendrerit diam vel justo iaculis tristique eget a lacus. Duis
            gravida dui eget efficitur fermentum.
          </p>
          <a
            className="text-blue"
            href="https://tailwindcss.com/docs/transition-property"
            target={'_blank'}
          >
            https://tailwindcss.com/docs/transition-property
          </a>
        </div>
        <div className="mt-20 mb-1 grid place-items-end">
          <ButtonComplete />
        </div>
      </div>
    </div>
  );
}
