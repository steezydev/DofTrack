import Deadline from "../Deadline/Deadline";
import DifficultyBadge from "../DifficultyBadge/DifficultyBadge";

export default function TaskFinished() {
  return (
    <div className="container relative rounded-lg max-w-sm bg-white pt-1">
      <div className="absolute flex justify-center gap-1 items-center w-full h-full top-0 left-0 rounded-lg z-50">
        <span className="text-white font-semibold text-4xl">+ 2</span>
        <span>
          <img className="object-scale-down w-7" src="/images/gem.png"></img>
        </span>
      </div>
      <div className="bg-black absolute w-full h-full opacity-70 top-0 left-0 rounded-lg"></div>
      <div className="px-2 pb-1">
        <div className="flex flex-col mb-3">
          <span className="text-grey-darker font-medium text-sm">
            Learn Javascript
          </span>
          <span className="font-medium text-black text-xl">
            Watch youtube video
          </span>
          <span className="font-medium text-grey-darker text-lg">...</span>
        </div>
        <div className="flex row gap-3 justify-end">
          <Deadline />
          <DifficultyBadge />
        </div>
      </div>
    </div>
  );
}
