import Deadline from "../Deadline/Deadline";
import DifficultyBadge from "../DifficultyBadge/DifficultyBadge";
import { Difficulties } from "../../types/difficulties";
import NiceModal from '@ebay/nice-modal-react';


interface IProps {
  id: string;
  title: string;
  goalTitle: string;
  isMore: boolean;
  deadline: string;
  difficulty: Difficulties;
}

export default function TaskActive({
  id,
  title,
  goalTitle,
  isMore,
  deadline,
  difficulty
}: IProps) {
  const showModal = () => {
    NiceModal.show('TaskFullModal', { taskId: '123' })
  };

  return (
    <div className="container rounded-lg max-w-sm bg-white pt-1" onClick={showModal}>
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
        <div className="flex row gap-3 justify-end flex-wrap">
          <Deadline time={deadline}/>
          <DifficultyBadge difficulty={difficulty} />
        </div>
      </div>
    </div>
  );
}
