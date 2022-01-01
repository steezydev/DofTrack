//Types
import { Difficulties } from "../../types/TypesDifficulties";

//Constants
import { badgeOptions } from "../../constants/ConstantsDifficulties";

interface IProps {
  difficulty: Difficulties;
}


export default function DifficultyBadge({ difficulty }: IProps) {
  const badge = badgeOptions[difficulty]
  
  return (
    <div className="container flex row gap-1 w-fit select-none">
      <img
        className="object-scale-down w-4"
        src={`/images/${badge.icon}.png`}
        alt="icon"
      />
      <span className="text-sm text-grey-dark">{badge.text}</span>
    </div>
  );
}
