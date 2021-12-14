import Deadline from "../Deadline/Deadline";
import DifficultyBadge from "../DifficultyBadge/DifficultyBadge";
import { Difficulties } from "../../types/difficulties";

interface IProps {
  id: string;
  title: string;
  goalTitle: string;
  isMore: boolean;
  deadline: string;
  difficulty: Difficulties;
  openModal: any
}

export default function TaskActive({
  id,
  title,
  goalTitle,
  isMore,
  deadline,
  difficulty,
  openModal
}: IProps) {
  return (
    <div className="container rounded-lg max-w-sm bg-white pt-1" onClick={openModal}>
      <div className="px-2 pb-1">
        <div className="flex flex-col mb-3">
          <span className="text-grey-darker font-medium text-sm">
            {goalTitle}
          </span>
          <span className="font-medium text-black text-xl">
            {title}
          </span>
          {isMore && <span className="font-medium text-grey-darker text-lg">...</span>}
        </div>
        <div className="flex row gap-3 justify-end">
          <Deadline time={deadline}/>
          <DifficultyBadge difficulty={difficulty} />
        </div>
      </div>
    </div>
  );
}
