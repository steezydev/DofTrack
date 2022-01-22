//Helpers
import { numberWithSpaces } from "../../helpers/numbers";

//Types
import { DreamData } from "../../types/TypesDream";

interface IProps extends DreamData {}

export default function DreamActive({
  id,
  title,
  gems,
  goalGems,
  goalsNumber,
  daysNumber,
  tasksNumber,
  isActive = true,
}: IProps) {
  const gemsString = numberWithSpaces(gems);
  const gemsGoalString = numberWithSpaces(goalGems);

  return (
    <div className="container rounded-lg max-w-2xl bg-white pt-1">
      <div className="px-2 pb-1 flex flex-col items-center gap-2">
        <div>
          <span className="text-xl font-medium">{title}</span>
        </div>
        <div className="text-xl flex items-center gap-1">
          {isActive ? (
            <span>
              {gemsString} / {gemsGoalString}
            </span>
          ) : (
            <span>{gemsGoalString}</span>
          )}
          <span className="inline-block">
            <img className="object-scale-down w-4" src="/images/gem.png"></img>
          </span>
        </div>
        <div className="w-24">
          <img
            className={isActive ? "grayscale" : ""}
            src="/images/goblet.png"
          />
        </div>
        <div className="flex gap-10">
          <span>{goalsNumber} goals</span>
          <span>{daysNumber} days</span>
          <span>{tasksNumber} tasks</span>
        </div>
      </div>
    </div>
  );
}
