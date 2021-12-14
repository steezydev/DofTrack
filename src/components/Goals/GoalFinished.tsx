import {numberWithSpaces} from '../../helpers/numbers'

interface IProp {
  id: string;
  title: string;
  days: number;
  gems: number;
}

export default function GoalFinished({ id, title, days, gems }: IProp) {
  const gemsString = numberWithSpaces(gems)

  return (
    <div className="container rounded-lg max-w-sm bg-white pt-1">
      <div className="flex flex-col justify-center items-center gap-3 p-2">
        <span className="text-2xl font-medium text-center">
          {title}
        </span>
        <div>
          <img
            className="object-scale-down w-32"
            src="/images/quality.png"
          ></img>
        </div>
        <div className="flex justify-between w-full font-medium">
          <div>
            <span>{days} days</span>
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
