import { addZeroBefore, secondsToHms } from "../../helpers/time";

interface ITimerProps {
  time?: number;
  gems?: number;
}

export default function Timer({ time = 0, gems = 0 }: ITimerProps) {
  const timerString = secondsToHms(time);

  return (
    <div className="animate-fade-in-down">
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
