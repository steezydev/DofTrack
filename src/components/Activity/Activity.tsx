import { useEffect, useState } from "react";

//Components
import DifficultyBadge from "../DifficultyBadge/DifficultyBadge";
import ButtonStart from "../Buttons/Button";
import Timer from "./Timer";
import Placeholder from "./Placeholder";
import ActionMenu from "../ActionMenu/ActionMenu";

//Types
import { Difficulties } from "../../types/TypesDifficulties";
import { ActionItemData } from "../../types/TypesAction";
import {ActivityData} from '../../types/TypesActivity'

type IProps = Omit<ActivityData, 'goalTime'>

export default function Activity({
  id,
  title,
  goalTitle,
  timeSpent,
  difficulty,
}: IProps) {
  const [timer, setTimer] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let interval: any;
    if (active) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!active) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [active]);

  const handleClick = () => {
    setActive((prevState) => !prevState);
  };

  const handleEdit = () => {};

  const handleDelete = () => {};

  //Action menu items
  const actionItems: ActionItemData[] = [
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
    <div className="container rounded-lg max-w-sm bg-white pt-1 select-none relative">
      <ActionMenu actionItems={actionItems} />
      <div className="px-2 pb-1">
        <div className="flex flex-col">
          <span className="text-grey-darker font-medium text-sm">
            {goalTitle}
          </span>
          <span className="font-medium text-black text-xl">{title}</span>
          <span className="font-medium text-black text-sm">{timeSpent}</span>
        </div>
        {active ? <Timer time={timer} /> : <Placeholder />}
        <div className="grid place-items-center mt-4">
          <ButtonStart action={handleClick} type={active ? "stop" : "start"} />
        </div>
        <div className="grid place-items-end -mt-1">
          <DifficultyBadge difficulty={difficulty} />
        </div>
      </div>
    </div>
  );
}
