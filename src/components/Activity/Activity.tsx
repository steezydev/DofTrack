import DifficultyBadge from "../DifficultyBadge/DifficultyBadge";
import ButtonStart from "../Buttons/Button";
import { Difficulties } from "../../types/TypesDifficulties";
import { useEffect, useState } from "react";
import Timer from "./Timer";
import Placeholder from "./Placeholder";

interface IProps {
  id: string;
  title: string;
  goalTitle: string;
  timeSpent: string;
  difficulty: Difficulties;
}

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

  return (
    <div className="container rounded-lg max-w-sm bg-white pt-1 select-none">
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
