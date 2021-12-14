import DifficultyBadge from "../DifficultyBadge/DifficultyBadge";
import ButtonStart from "../Buttons/Button";
import { Difficulties } from "../../types/difficulties";
import { useEffect, useState } from "react";

interface IProps {
  id: string;
  title: string;
  goalTitle: string;
  timeSpent: string;
  difficulty: Difficulties;
}

interface ITimerProps {
  time?: number;
  gems?: number;
}

function addZeroBefore(n: number) {
  return (n < 10 ? '0' : '') + n;
}

function secondsToHms(d: number) {
  d = Number(d);
  let h = Math.floor(d / 3600);
  let m = Math.floor((d % 3600) / 60);
  let s = Math.floor((d % 3600) % 60);

  let hDisplay = h > 0 ? addZeroBefore(h) + ":" : "";
  let mDisplay = m > 0 ? addZeroBefore(m) + ":" : "00:";
  let sDisplay = s > 0 ? addZeroBefore(s) : "00";

  return hDisplay + mDisplay + sDisplay;
}

function Timer({ time = 0, gems = 0 }: ITimerProps) {
  const timerString = secondsToHms(time);

  return (
    <div>
      <div className="grid place-items-center text-4xl">
        <span>{timerString}</span>
      </div>
      <div className="flex items-center justify-center text-sm gap-0">
        <span className="mr-1">+ {gems}</span>
        <span>
          <img className="object-scale-down w-3" src="/images/gem.png"></img>
        </span>
      </div>
    </div>
  );
}

function Placeholder() {
  return (
    <div className="grid place-items-center -mt-1">
      <img
        className="object-scale-down w-16"
        src="/images/chronometer.png"
        alt="stopwatch"
      />
    </div>
  );
}

export default function ActivityGoing({
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
    <div className="container rounded-lg max-w-sm bg-white pt-1">
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
