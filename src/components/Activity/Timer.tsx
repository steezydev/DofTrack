import { addZeroBefore, secondsToHms } from "../../helpers/time";

interface IProps {
  time?: number;
  gems?: number;
  showGems?: boolean;
}

export default function Timer({
  time = 0,
  gems = 0,
  showGems = false,
}: IProps) {
  const timer = secondsToHms(time);

  return (
    <div className="">
      <div className="flex flex-row justify-center text-4xl">
        <span className="relative">
          {timer.hours}
          {timer.minutes}{" "}
          <span className="absolute text-xl text-grey-light bottom-[1px]">
            {timer.seconds}
          </span>
        </span>
      </div>
      {showGems && (
        <div className="flex items-center justify-center text-sm gap-0">
          <span className="mr-1">+ {gems}</span>
          <span>
            <img className="object-scale-down w-3" src="/images/gem.png"></img>
          </span>
        </div>
      )}
    </div>
  );
}
