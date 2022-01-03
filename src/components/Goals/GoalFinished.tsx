import { numberWithSpaces } from "../../helpers/numbers";

//Types
import { GoalData } from "../../types/TypesGoal";

type IProps = Omit<GoalData, 'percent' | 'goalGems'>

export default function GoalFinished({ id, title, daysSpent, gems, stats }: IProps) {
  const gemsString = numberWithSpaces(gems);

  return (
    <div className="container rounded-lg max-w-sm bg-white pt-1">
      <div className="flex flex-col justify-center items-center gap-3 p-2">
        <span className="text-2xl font-medium text-center">{title}</span>
        <div>
          <img
            className="object-scale-down w-32"
            src="/images/quality.png"
          ></img>
        </div>
        <div className="flex justify-between w-full font-medium">
          <div>
            <span>{daysSpent} days</span>
          </div>
          <div className="flex items-center">
            <span className="inline-block">{gemsString}</span>
            <span className="inline-block">
              <img
                className="object-scale-down w-4"
                src="/images/gem.png"
              ></img>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
